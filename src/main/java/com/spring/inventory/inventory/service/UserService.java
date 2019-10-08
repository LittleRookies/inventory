package com.spring.inventory.inventory.service;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.User;
import com.spring.inventory.inventory.dao.UserRepository;
import com.spring.inventory.inventory.util.DictionaryUtil;
import com.spring.inventory.inventory.util.LoggerErrUtil;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import com.spring.inventory.inventory.util.TimeUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserService {
    private Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    public AjaxResponseBody addUer(Map<String, String> map) {
        logger.info("addUer");
        AjaxResponseBody ajaxResponseBody = new AjaxResponseBody();
        try {
            String name = map.get("name");
            String username = map.get("username");
            String password = map.get("password");
            String telephone = map.get("telephone");
            String email = map.get("email");
            String founder = map.get("founder");
            String role = map.get("role");
            //新增账号
            List<User> list = userRepository.findByUsername(username);
            if (map.get("action").equals("add")) {

                if (list.size() == 0) {
                    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
                    String pwd = bCryptPasswordEncoder.encode(password);
                    User user = new User();
                    user.setName(name);
                    user.setStatus(DictionaryUtil.statusY);
                    user.setUsername(username);
                    user.setTelephone(telephone);
                    user.setEmail(email);
                    user.setFounder(founder);
                    user.setPassword(pwd);
                    if (role == null || role.equals("")) {
                        user.setRole("role");
                    } else user.setRole(role);

                    userRepository.save(user);
                    ajaxResponseBody = ResponseBodyUtil.successAjax();

                } else {
                    ajaxResponseBody = ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, "账号已存在！");
                }
            }
            //修改账号
            else if (map.get("action").equals("update")) {
                //admin可以修改任何人的信息
                if (!founder.equals("admin")) {
                    //登陆人只能修改登陆账号的信息
                    if (!founder.equals(username)) {
                        return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, "无权限修改该账号信息！");
                    }
                }
                User user = list.get(0);
                user.setName(name);
                user.setEmail(email);
                if (!(role == null || role.equals(""))) {
                    user.setRole(role);
                }
                user.setTelephone(telephone);
                if (password != null && !password.equals("")) {
                    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
                    user.setPassword(bCryptPasswordEncoder.encode(password));
                }
                userRepository.save(user);
                ajaxResponseBody = ResponseBodyUtil.successAjax();

            }


        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            ajaxResponseBody = ResponseBodyUtil.defeatAjax();

        }
        return ajaxResponseBody;
    }

    public void updateLastTime(String username) {
        logger.info("updateLastTime");
        userRepository.updateLoginTime(TimeUtil.getNow(), username);
    }

    public AjaxResponseBody findAll(Integer page, Integer size) {
        logger.info("findAll");
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<User> all = userRepository.findAllByStatus(pageable, DictionaryUtil.statusY);
        List<User> content = all.getContent();
        //消除密码
        for (User user : content) {
            user.setPassword("");
        }
        return ResponseBodyUtil.responseBodyByPage(all, content, "");
    }

    public AjaxResponseBody delete(User user, String username) {
        logger.info("AjaxResponseBody");
        if (user.getUsername().equals("admin")) {
            return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, "无法删除admin账号！");
        }
        user.setStatus(DictionaryUtil.statusD);
        user.setStatusPeople(username);
        userRepository.save(user);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody findByUsername(String username, String loginUserName) {
        logger.info("findByUsername");
        try {
            User user = userRepository.findFirstByUsernameAndStatus(username, DictionaryUtil.statusY);
            //清空密码
            user.setPassword("");
            //如果登陆账号为admin，则其有修改角色的权限
            if (loginUserName.equals("admin")) {
                user.setFounder("");
            }
            return ResponseBodyUtil.successAjax(user);
        } catch (Exception e) {
            //打印报错
            LoggerErrUtil.logErr(logger, e);
            return ResponseBodyUtil.defeatAjax();
        }

    }
}

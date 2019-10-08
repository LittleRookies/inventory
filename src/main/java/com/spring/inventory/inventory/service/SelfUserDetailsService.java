package com.spring.inventory.inventory.service;

import com.spring.inventory.inventory.bean.SelfUserDetails;
import com.spring.inventory.inventory.bean.User;
import com.spring.inventory.inventory.dao.UserRepository;
import com.spring.inventory.inventory.util.DictionaryUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

/**
 * ② 根据 username 获取数据库 user 信息
 */
@Component
public class SelfUserDetailsService implements UserDetailsService {
    private Logger logger = LoggerFactory.getLogger(SelfUserDetailsService.class);
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        logger.info("loadUserByUsername");
        try {
            //构建用户信息的逻辑(取数据库/LDAP等用户信息)
            SelfUserDetails userInfo = new SelfUserDetails();
            userInfo.setUsername(username);

            User user = userRepository.findFirstByUsernameAndStatus(username, DictionaryUtil.statusY);
            userInfo.setPassword(user.getPassword());

            Set<GrantedAuthority> authoritiesSet = new HashSet<>();
            GrantedAuthority authority = new SimpleGrantedAuthority(user.getRole()); // 模拟从数据库中获取用户角色
            logger.info("登陆角色: " + user.getRole());

            authoritiesSet.add(authority);
            userInfo.setAuthorities(authoritiesSet);

            return userInfo;
        } catch (Exception e) {
            e.printStackTrace();
            throw new BadCredentialsException("用户名密码不正确，请重新登陆！");
        }


    }
}

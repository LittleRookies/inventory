package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.User;
import com.spring.inventory.inventory.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    /**
     * 新增账号
     *
     * @param map
     * @param request
     * @return
     */
    @PostMapping("/add")
    public AjaxResponseBody addUser(@RequestBody Map<String, String> map, HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        map.put("founder", principal.getName());
        return userService.addUer(map);
    }

    /**
     * 查询所有账号
     *
     * @param map
     * @return
     */
    @PostMapping("/findAll")
    public AjaxResponseBody findAll(@RequestBody Map map) {
        Integer page = (Integer) map.get("page");
        Integer size = (Integer) map.get("limit");
        return userService.findAll(page, size);
    }

    /**
     * 删除账号
     *
     * @param user
     * @return
     */
    @PreAuthorize("hasRole('admin')")
    @PostMapping("/delete")
    public AjaxResponseBody delete(User user, HttpServletRequest request) {
        return userService.delete(user, request.getUserPrincipal().getName());
    }

    /**
     * 根据账号查询账号详细信息
     *
     * @param username
     * @param request
     * @return
     */
    @GetMapping("/findByUsername")
    public AjaxResponseBody findByUsername(String username, HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();

        return userService.findByUsername(username, principal.getName());
    }

}

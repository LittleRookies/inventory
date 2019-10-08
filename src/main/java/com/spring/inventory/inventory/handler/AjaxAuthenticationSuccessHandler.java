package com.spring.inventory.inventory.handler;

import com.alibaba.fastjson.JSON;
import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.dao.UserRepository;
import com.spring.inventory.inventory.util.DictionaryUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 登陆成功
 */
@Component
public class AjaxAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Autowired
    private UserRepository userRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
        AjaxResponseBody responseBody = new AjaxResponseBody();

        responseBody.setCode("200");
        responseBody.setMsg(userRepository.findFirstByUsernameAndStatus(authentication.getName(), DictionaryUtil.statusY).getName());

        httpServletResponse.setContentType("application/json;charset=UTF-8");
        httpServletResponse.getWriter().write(JSON.toJSONString(responseBody));
    }
}


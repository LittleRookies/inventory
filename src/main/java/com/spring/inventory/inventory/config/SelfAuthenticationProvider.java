package com.spring.inventory.inventory.config;

import com.spring.inventory.inventory.service.SelfUserDetailsService;
import com.spring.inventory.inventory.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;


@Component
public class SelfAuthenticationProvider implements AuthenticationProvider {
    private Logger logger = LoggerFactory.getLogger(SelfAuthenticationProvider.class);

    @Autowired
    private SelfUserDetailsService userDetailsService;

    @Autowired
    private UserService userService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String userName = (String) authentication.getPrincipal(); // 这个获取表单输入中返回的用户名;
        String password = (String) authentication.getCredentials(); // 这个是表单中输入的密码；

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        logger.info("登陆用户：" + userName);

        UserDetails userInfo = userDetailsService.loadUserByUsername(userName);

        if (!bCryptPasswordEncoder.matches(password, userInfo.getPassword())) {
            throw new BadCredentialsException("用户名密码不正确，请重新登陆！");
        }
//        更新登陆时间
        userService.updateLastTime(userName);

        return new UsernamePasswordAuthenticationToken(userName, password, userInfo.getAuthorities());
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return true;
    }
}

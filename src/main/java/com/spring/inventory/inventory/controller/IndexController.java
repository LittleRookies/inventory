package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/index")
public class IndexController {
    @Autowired
    private IndexService indexService;

    /**
     * 查询当天交易统计
     *
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root','role')")
    @GetMapping("/findToday")
    public AjaxResponseBody findToday() throws ParseException {
        return indexService.findToday();
    }
}

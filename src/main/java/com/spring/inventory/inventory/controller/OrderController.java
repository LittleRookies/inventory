package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.OrderAndContent;
import com.spring.inventory.inventory.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    /**
     * 查询所有订单
     *
     * @param map
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping("/findAll")
    public AjaxResponseBody findAll(@RequestBody Map map) {
        Integer page = (Integer) map.get("page");
        Integer size = (Integer) map.get("limit");
        //判断是否进行模糊查询
        String key = map.get("key") == null ? "%%" : "%" + ((Map) map.get("key")).get("model") + "%";
        return orderService.findAll(page, size, key);
    }

    /**
     * 新增订单
     *
     * @param orderAndContent
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping("/add")
    public AjaxResponseBody add(@RequestBody OrderAndContent orderAndContent) {
        return orderService.add(orderAndContent);
    }

    /**
     * 查询订单编号
     *
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/findOrderNumber")
    public AjaxResponseBody findOrderNumber() {
        return orderService.findOrderNumber();
    }


}

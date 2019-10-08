package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.OrderAndContent;
import com.spring.inventory.inventory.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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
     * 查询订单
     *
     * @param orderNumber
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/find")
    public AjaxResponseBody find(String orderNumber) {
        return orderService.find(orderNumber);
    }

    /**
     * 查询订单(用于修改修改)
     *
     * @param orderNumber
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/findUpdate")
    public AjaxResponseBody findUpdate(String orderNumber) {
        return orderService.findUpdate(orderNumber);
    }

    /**
     * 新增订单
     *
     * @param orderAndContent
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping("/add")
    public AjaxResponseBody add(@RequestBody OrderAndContent orderAndContent, HttpServletRequest request) {
        return orderService.add(orderAndContent, request.getUserPrincipal().getName());
    }

    /**
     * 删除订单
     *
     * @param orderNumber
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/del")
    public AjaxResponseBody del(String orderNumber, HttpServletRequest request) {
        return orderService.del(orderNumber, request.getUserPrincipal().getName());
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

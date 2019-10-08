package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.service.OrderContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/orderContent")
public class OrderContentController {
    @Autowired
    private OrderContentService orderContentService;

    /**
     * 查询订单商品内容
     *
     * @param orderNumber
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/findOrderData")
    public AjaxResponseBody findOrderData(String orderNumber) {
        return orderContentService.findOrderData(orderNumber);
    }

    /**
     * 查询订单在redis临时内容
     *
     * @param orderNumber
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/findOrderData2")
    public AjaxResponseBody findOrderData2(String orderNumber) {
        return orderContentService.findOrderDataByRedis(orderNumber);
    }


    /**
     * 保存临时订单数据redis
     *
     * @param map
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping("/saveOrderData2")
    public AjaxResponseBody saveOrderData2(@RequestBody Map map) {
        return orderContentService.saveOrderDataByRedis(map);
    }

    /**
     * 删除临时订单数据redis
     *
     * @param map
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping("/delOrderData2")
    public AjaxResponseBody delOrderData2(@RequestBody Map map) {
        return orderContentService.delOrderDataByRedis(map);
    }

    /**
     * 修改临时订单数据redis
     *
     * @param map
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping("/updOrderData2")
    public AjaxResponseBody updOrderData2(@RequestBody Map map) {
        return orderContentService.updOrderDataByRedis(map);
    }

    /**
     * 重置临时订单所有数据redis
     *
     * @param orderNumber
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/reSetOrderData2")
    public AjaxResponseBody reSetOrderData2(String orderNumber) {
        return orderContentService.reSetOrderDataByRedis(orderNumber);
    }
}

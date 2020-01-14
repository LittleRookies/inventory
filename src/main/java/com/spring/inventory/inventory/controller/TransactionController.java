package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.OrderAndTransaction;
import com.spring.inventory.inventory.service.OrderContentService;
import com.spring.inventory.inventory.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @Autowired
    private OrderContentService orderContentService;

    /**
     * 新增订单
     *
     * @param orderAndTransaction
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping("/add")
    public AjaxResponseBody add(@RequestBody OrderAndTransaction orderAndTransaction, HttpServletRequest request) {
        return transactionService.add(orderAndTransaction, request.getUserPrincipal().getName());
    }

    /**
     * 查询订单商品内容
     *
     * @param orderNumber
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root','role')")
    @GetMapping("/findOrderData")
    public AjaxResponseBody findOrderData(String orderNumber) {
        return transactionService.findOrderData(orderNumber);
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

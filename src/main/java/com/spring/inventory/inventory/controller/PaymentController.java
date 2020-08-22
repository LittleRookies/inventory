package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    /**
     * 支付订单
     *
     * @param map
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping("/payOrder")
    public AjaxResponseBody payOrder(@RequestBody Map map, HttpServletRequest request) {
        String name = request.getUserPrincipal().getName();
        return paymentService.payOrder(map, name);
    }

    /**
     * 修改订单状态为 完成
     *
     * @param orderNumber
     * @param request
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/endOrder")
    public AjaxResponseBody endOrder(String orderNumber, HttpServletRequest request) {
        String name = request.getUserPrincipal().getName();
        return paymentService.endOrder(orderNumber, name);
    }


    /**
     * 查询订单的历史记录
     *
     * @param orderNumber
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/findAllByOrderNumber")
    public AjaxResponseBody findAllByOrderNumber(String orderNumber) {
        return paymentService.findAllByOrderNumber(orderNumber);
    }
}

package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/bill")
public class BillController {
    @Autowired
    private BillService billService;

    /**
     * 查询所有交易对象
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
        return billService.findAll(page, size, key);
    }


    /**
     * 结束订单
     *
     * @param id
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/end")
    public AjaxResponseBody end(Integer id) {
        return billService.end(id
        );
    }
}

package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.service.SizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/size")
public class SizeController {
    @Autowired
    private SizeService sizeService;

    /**
     * 查询所有尺寸类型
     *
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/findAll")
    public AjaxResponseBody findAll() {
        return sizeService.findAll();
    }

    /**
     * 根据尺寸规格名称查询所有尺寸
     *
     * @param name
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/findSize")
    public AjaxResponseBody findSize(String name) {
        return sizeService.find(name);
    }

    /**
     * 新增尺寸规格
     *
     * @param map
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping("/save")
    public AjaxResponseBody save(@RequestBody Map map) {
        return sizeService.save(map);
    }
}

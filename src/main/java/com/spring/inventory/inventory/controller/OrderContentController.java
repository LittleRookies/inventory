package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.service.OrderContentService;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/orderContent")
public class OrderContentController {
    @Autowired
    private OrderContentService orderContentService;

    @Value(value = "${file.uploadpath}")
    private String path;

    /**
     * 查询订单商品内容
     *
     * @param orderNumber
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root','role')")
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
    @PreAuthorize("hasAnyAuthority('root','role')")
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

    @RequestMapping(value = "/importByexcel", method = RequestMethod.POST)
    public AjaxResponseBody upload(@RequestParam("file") List<MultipartFile> multipartFiles, String orderNumber) throws IOException {
        List<String> path_list = new ArrayList<>();
        for (MultipartFile multipartFile : multipartFiles) {
            if (multipartFile.isEmpty()) {
                return ResponseBodyUtil.defeatAjax("1", "空文件");
            }
            String time = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
            File file = new File(path + time + "_" + multipartFile.getOriginalFilename());
            multipartFile.transferTo(file);
            path_list.add(path + time + "_" + multipartFile.getOriginalFilename());
        }

        return orderContentService.orderContentByexcel(path_list.get(0), orderNumber);
    }

}

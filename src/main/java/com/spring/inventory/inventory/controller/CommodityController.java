package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.Commodity;
import com.spring.inventory.inventory.service.CommodityService;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/commodity")
public class CommodityController {
    @Value(value = "${file.imgpath}")
    private String path;

    @Autowired
    private CommodityService commodityService;

    /**
     * 查询所有商品（包含模糊查询）
     *
     * @param map
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root','role')")
    @PostMapping("/findAll")
    public AjaxResponseBody findAll(@RequestBody Map map) {
        Integer page = (Integer) map.get("page");
        Integer size = (Integer) map.get("limit");
        //判断是否进行模糊查询
        String key = map.get("key") == null ? null : "%" + ((Map) map.get("key")).get("model") + "%";
        return commodityService.findAll(page, size, key);
    }

    /**
     * 添加或修改商品
     *
     * @param commodity
     * @param request
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping("/add")
    public AjaxResponseBody add(@RequestBody Commodity commodity, HttpServletRequest request) {

        return commodityService.save(commodity, request.getUserPrincipal().getName());
    }

    /**
     * 上传
     *
     * @param multipartFiles
     * @return
     * @throws IOException
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping(value = "/upload")
    public AjaxResponseBody upload(@RequestParam("file") List<MultipartFile> multipartFiles) throws IOException {
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
        return ResponseBodyUtil.successAjax(path_list);
    }

    /**
     * 删除商品
     *
     * @param id
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping(value = "/delete")
    public AjaxResponseBody delete(Integer id, HttpServletRequest request) {
        return commodityService.delete(id, request.getUserPrincipal().getName());
    }

    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root','role')")
    @GetMapping(value = "/findById")
    public AjaxResponseBody findById(Integer id) {
        return commodityService.findById(id);
    }

    /**
     * 查询所有商品
     *
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root','role')")
    @GetMapping(value = "/findModel")
    public AjaxResponseBody findModel() {
        return commodityService.findAllmodel();
    }
}

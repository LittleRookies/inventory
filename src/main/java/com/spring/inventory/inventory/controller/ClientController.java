package com.spring.inventory.inventory.controller;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.Client;
import com.spring.inventory.inventory.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@RequestMapping("/client")
public class ClientController {
    @Autowired
    private ClientService clientService;

    /**
     * 新增客户
     *
     * @param client
     * @param request
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @PostMapping("/add")
    public AjaxResponseBody add(@RequestBody Client client, HttpServletRequest request) {
        client.setFounder(request.getUserPrincipal().getName());
        client.setStatusPeople(request.getUserPrincipal().getName());
        return clientService.add(client);

    }

    /**
     * 查询所有客户
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
        String key = map.get("key") == null ? null : "%" + ((Map) map.get("key")).get("name") + "%";
        return clientService.findAll(page, size, key);
    }

    /**
     * 查询所有客户
     *
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/findAllNoPage")
    public AjaxResponseBody findAllNoPage() {
        return clientService.findAllNoPage();
    }

    /**
     * 删除客户
     *
     * @param id
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/delete")
    public AjaxResponseBody delete(Integer id, HttpServletRequest request) {
        return clientService.delete(id, request.getUserPrincipal().getName());
    }

    /**
     * 根据id查询客户详细
     *
     * @param id
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root')")
    @GetMapping("/findByUsername")
    public AjaxResponseBody findByUsername(Integer id) {
        return clientService.findById(id);
    }

}

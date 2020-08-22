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
     * 新增交易对象
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
     * 查询所有交易对象
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
        String key = map.get("key") == null ? "%%" : "%" + ((Map) map.get("key")).get("name") + "%";
        return clientService.findAll(page, size, key);
    }

    /**
     * 查询所有交易对象
     *
     * @returnø
     */
    @PreAuthorize("hasAnyAuthority('root','role')")
    @GetMapping("/findAllNoPage")
    public AjaxResponseBody findAllNoPage() {
        return clientService.findAllNoPage();
    }

    /**
     * 删除交易对象
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
     * 根据id查询交易对象详细
     *
     * @param id
     * @return
     */
    @PreAuthorize("hasAnyAuthority('root','role')")
    @GetMapping("/findByUsername")
    public AjaxResponseBody findByUsername(Integer id) {
        return clientService.findById(id);
    }

}

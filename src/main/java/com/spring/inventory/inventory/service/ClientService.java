package com.spring.inventory.inventory.service;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.Client;
import com.spring.inventory.inventory.dao.ClientRepository;
import com.spring.inventory.inventory.util.DictionaryUtil;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    private final Logger logger = LoggerFactory.getLogger(ClientService.class);

    public AjaxResponseBody add(Client client) {
        logger.info("AjaxResponseBody");
        client.setStatus(DictionaryUtil.statusY);
        clientRepository.save(client);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody findAll(Integer page, Integer size, String name) {
        logger.info("findAll");
        if (name == null || name.equals("")) {
            //查询全部
            Pageable pageable = PageRequest.of(page - 1, size);
            Page<Client> all = clientRepository.findAllByStatus(pageable, DictionaryUtil.statusY);
            return ResponseBodyUtil.responseBodyByPage(all, all.getContent(), "");
        } else {
            //模糊查询
            Pageable pageable = PageRequest.of(page - 1, size);
            Page<Client> all = clientRepository.findAllByNameLikeAndStatus(pageable, name, DictionaryUtil.statusY);
            return ResponseBodyUtil.responseBodyByPage(all, all.getContent(), "");
        }
    }


    public AjaxResponseBody findAllNoPage() {
        logger.info("findAllNoPage");
        return ResponseBodyUtil.successAjax(clientRepository.findAllByStatus(DictionaryUtil.statusY));
    }


    public AjaxResponseBody delete(Integer id, String username) {
        logger.info("delete");
        Client client = clientRepository.findById(id).get();
        client.setStatus(DictionaryUtil.statusD);
        client.setStatusPeople(username);
        clientRepository.save(client);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody findById(Integer id) {
        logger.info("findById");
        Client firstById = clientRepository.findFirstByIdAndStatus(id, DictionaryUtil.statusY);
        return ResponseBodyUtil.successAjax(firstById);
    }

}

package com.spring.inventory.inventory.service;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.dao.LabelRepository;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LabelService {
    @Autowired
    private LabelRepository labelRepository;


    public AjaxResponseBody findAllLimit() {
        return ResponseBodyUtil.successAjax(labelRepository.findAllLimit());
    }
}

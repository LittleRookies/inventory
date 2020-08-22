package com.spring.inventory.inventory.service;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.dao.OrderRepository;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import com.spring.inventory.inventory.util.TimeUtil;
import com.spring.inventory.inventory.util.TypeTransformUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class IndexService {
    @Autowired
    private OrderRepository orderRepository;

    public AjaxResponseBody findToday() throws ParseException {
        Timestamp timebytimestamp = TimeUtil.getTimebytimestamp(TimeUtil.getNowYMD());
        List<Map> allByTodaySH = orderRepository.findAllByTodaySH(timebytimestamp);
        List<Map> allByTodayNoSH = orderRepository.findAllByTodayNoSH(timebytimestamp);

        Map priceSH = new HashMap();
        priceSH.put("name", "散户");
        priceSH.put("value", TypeTransformUtil.ObjToBigDec(allByTodaySH.get(0).get("pay")));
        Map priceNoSH = new HashMap();
        priceNoSH.put("name", "非散户");
        priceNoSH.put("value", TypeTransformUtil.ObjToBigDec(allByTodayNoSH.get(0).get("pay")));
        BigDecimal today_total = TypeTransformUtil.ObjToBigDec(allByTodaySH.get(0).get("pay")).add(TypeTransformUtil.ObjToBigDec(allByTodayNoSH.get(0).get("pay")));
        List<Map> price = new ArrayList<>();
        price.add(priceSH);
        price.add(priceNoSH);

        Map numSH = new HashMap();
        numSH.put("name", "散户");
        numSH.put("value", allByTodaySH.get(0).get("num"));
        Map numNoSH = new HashMap();
        numNoSH.put("name", "非散户");
        numNoSH.put("value", allByTodayNoSH.get(0).get("num"));
        List<Map> num = new ArrayList<>();
        num.add(numSH);
        num.add(numNoSH);

        Map result = new HashMap();
        result.put("price", price);
        result.put("num", num);
        result.put("today_total", today_total);
        return ResponseBodyUtil.successAjax(result);
    }

}

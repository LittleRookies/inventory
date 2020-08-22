package com.spring.inventory.inventory.service;

import com.alibaba.fastjson.JSON;
import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.Commodity;
import com.spring.inventory.inventory.dao.ClientRepository;
import com.spring.inventory.inventory.dao.CommodityRepository;
import com.spring.inventory.inventory.dao.OrderContentRepository;
import com.spring.inventory.inventory.util.DictionaryUtil;
import com.spring.inventory.inventory.util.LoggerErrUtil;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import com.spring.inventory.inventory.util.TypeTransformUtil;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OrderContentService {
    @Autowired
    private OrderContentRepository orderContentRepository;

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private CommodityRepository commodityRepository;


    private final Logger logger = LoggerFactory.getLogger(OrderContentService.class);

    public AjaxResponseBody findOrderData(String orderNumber) {
        logger.info("findOrderData-----orderNumber={}", orderNumber);
        List<Map> allByOrderNumber = orderContentRepository.findAllByOrderNumberBysql(orderNumber);
        return ResponseBodyUtil.successAjax(allByOrderNumber);
    }

    public AjaxResponseBody findOrderDataByRedis(String orderNumber) {
        logger.info("findOrderDataByRedis-----orderNumber={}", orderNumber);
        List o = (List) redisTemplate.opsForValue().get(orderNumber);
        return ResponseBodyUtil.successAjax(o);
    }

    public AjaxResponseBody saveOrderDataByRedis(Map map) {
        logger.info("saveOrderDataByRedis-----" + JSON.toJSONString(map));
        List list = (List) redisTemplate.opsForValue().get(String.valueOf(map.get("orderNumber")));
        if (list == null) {
            list = new ArrayList();
        }
        list.add(map);
        redisTemplate.opsForValue().set(String.valueOf(map.get("orderNumber")), list);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody delOrderDataByRedis(Map map) {
        logger.info("delOrderDataByRedis-----" + JSON.toJSONString(map));
        List list = (List) redisTemplate.opsForValue().get(String.valueOf(map.get("orderNumber")));
        list.removeIf(map::equals);
        redisTemplate.opsForValue().set(String.valueOf(map.get("orderNumber")), list);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody reSetOrderDataByRedis(String orderNumber) {
        logger.info("reSetOrderDataByRedis-----" + orderNumber);
        redisTemplate.delete(orderNumber);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody updOrderDataByRedis(Map map) {
        logger.info("updOrderDataByRedis-----" + JSON.toJSONString(map));
        try {
            List<Map> list = (List) redisTemplate.opsForValue().get(String.valueOf(map.get("orderNumber")));
            assert list != null;
            for (Map maps : list) {
                if (maps.get("commodity").equals(map.get("commodity")) && maps.get("color").equals(map.get("color")) && map.get("size").equals(maps.get("size"))) {
                    if (Double.valueOf(String.valueOf(map.get("totalPrice"))).equals(maps.get("totalPrice"))) {
                        //如果总额相同则代表修改了数量或者单价
                        Double num = Double.valueOf(String.valueOf(map.get("num")));
                        Double price = Double.valueOf(String.valueOf(map.get("price")));
                        Double totalPrice = num * price;
                        maps.put("totalPrice", totalPrice);
                        maps.put("num", num);
                        maps.put("price", price);
                    } else {
                        //如果总额不同则相反
                        Double num = Double.valueOf(String.valueOf(map.get("num")));
                        Double totalPrice = Double.valueOf(String.valueOf(map.get("totalPrice")));
                        Double price = totalPrice / num;
                        maps.put("totalPrice", totalPrice);
                        maps.put("num", num);
                        maps.put("price", price);
                    }
                }

            }
            redisTemplate.opsForValue().set(String.valueOf(map.get("orderNumber")), list);
        } catch (Exception e) {
            LoggerErrUtil.logErr(logger, e);
            return ResponseBodyUtil.defeatAjax();
        }
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody orderContentByexcel(String excelPath, String orderNumber) {
        logger.info("orderContentByexcel-----excelPath={},orderNumber={}", excelPath, orderNumber);
        try {
            File excel = new File(excelPath);
            if (excel.isFile() && excel.exists()) {   //判断文件是否存在

                String[] split = excel.getName().split("\\.");  //.是特殊字符，需要转义！！！！！
                Workbook wb;
                //根据文件后缀（xls/xlsx）进行判断
                if ("xls".equals(split[1])) {
                    FileInputStream fis = new FileInputStream(excel);   //文件流对象
                    wb = new HSSFWorkbook(fis);
                } else if ("xlsx".equals(split[1])) {
                    wb = new XSSFWorkbook(excel);
                } else {
                    return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, "文件类型错误!");
                }

                //开始解析
                Sheet sheet = wb.getSheetAt(0);     //读取sheet 0

                int firstRowIndex = sheet.getFirstRowNum() + 1;   //第一行是列名，所以不读
                int lastRowIndex = sheet.getLastRowNum();
//                获取redis原有的订单数据
                List list = (List) redisTemplate.opsForValue().get(orderNumber);
                if (list == null) {
                    list = new ArrayList();
                }
                String error = "";
                Integer index = 0;
                for (int rIndex = firstRowIndex; rIndex <= lastRowIndex; rIndex++) {   //遍历行

                    Row row = sheet.getRow(rIndex);
                    if (row != null) {
                        int firstCellIndex = row.getFirstCellNum();
                        int lastCellIndex = row.getLastCellNum();
                        /** 记录上传文件中的错误**/
                        Map orderContent = new HashMap();
                        //订单
                        orderContent.put("orderNumber", orderNumber);
                        for (int cIndex = firstCellIndex; cIndex < lastCellIndex; cIndex++) {   //遍历列
                            Cell cell = row.getCell(cIndex);
                            if (cell != null) {
                                if (cIndex == firstCellIndex) {
                                    //商品型号
                                    Commodity commodity = commodityRepository.findFirstByModel(cell.toString().trim());
                                    if (commodity == null) {
                                        error = error + (index + 1) + ".商品：" + cell.toString() + " 不存在！\n";
                                        continue;
                                    } else {
                                        orderContent.put("commodityName", cell.toString().trim());
                                        orderContent.put("commodity", commodity.getId());
                                    }
                                } else if (cIndex == firstCellIndex + 1) {
                                    //颜色
                                    orderContent.put("color", cell.toString().trim());
                                } else if (cIndex == firstCellIndex + 2) {
                                    //尺寸
                                    orderContent.put("size", cell.toString().trim());
                                } else if (cIndex == firstCellIndex + 3) {
                                    //数量
                                    orderContent.put("num", Double.valueOf(cell.toString().trim()).intValue());
                                } else if (cIndex == firstCellIndex + 4) {
                                    //价格
                                    orderContent.put("price", TypeTransformUtil.ObjToBigDec(cell.toString().trim()));
                                } else if (cIndex == firstCellIndex + 5) {
                                    //总价
                                    BigDecimal multiply = TypeTransformUtil.ObjToBigDec(orderContent.get("num")).multiply(TypeTransformUtil.ObjToBigDec(orderContent.get("price")));
                                    orderContent.put("totalPrice", multiply);
                                }
                            }
                        }
                        list.add(orderContent);
                    }
                }
                redisTemplate.opsForValue().set(orderNumber, list);
                if (!error.equals("")) {
                    return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, error);
                }
                return ResponseBodyUtil.successAjax();
            } else {
                return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, "找不到指定的文件");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseBodyUtil.defeatAjax(DictionaryUtil.exceptionErrCode, e.getMessage());
        }
    }

}

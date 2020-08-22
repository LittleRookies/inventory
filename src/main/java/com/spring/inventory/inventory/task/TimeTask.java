package com.spring.inventory.inventory.task;

import com.spring.inventory.inventory.bean.Bill;
import com.spring.inventory.inventory.dao.BillRepository;
import com.spring.inventory.inventory.dao.OrderRepository;
import com.spring.inventory.inventory.util.TimeUtil;
import com.spring.inventory.inventory.util.TypeTransformUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.ParseException;
import java.util.List;
import java.util.Map;

@Service
public class TimeTask {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private BillRepository billRepository;

    //    每天23：59：59整理交易对手账单
    @Scheduled(cron = "59 59 23 * * *")
    public void billSort() throws ParseException {
        billSortPlan("P");
        billSortPlan("R");
    }


    public void billSortPlan(String direction) throws ParseException {
//        不包含id=1的散户
        String sqlOrder = "select client from orders  where client!=1 and pay_direction='" + direction + "' group by client";
        List<Map> allByParams = orderRepository.findAllByParams(sqlOrder);
        for (Map map : allByParams) {
            Integer client = (Integer) map.get("client");
            List<Bill> allByClient = billRepository.findAllByClientAndDirectionOrderByTimeDesc(client, direction);
            if (allByClient.size() == 0) {
//                若账单中没有该用户则新增
                String sqlSum = "select sum(price) as price,sum(pay_price) as payPrice,min(timestamp) as mintime from orders where client=" + client +
                        " and pay_direction='" + direction + "'";
                List<Map> allsum = orderRepository.findAllByParams(sqlSum);
                Bill bill = new Bill();
                bill.setStartTime((Timestamp) allsum.get(0).get("mintime"));
                bill.setTime(TimeUtil.getTimebytimestamp());
                bill.setDirection(direction);
                bill.setClient(client);
                bill.setPrice(TypeTransformUtil.ObjToBigDec(allsum.get(0).get("price")));
                bill.setPayPrice(TypeTransformUtil.ObjToBigDec(allsum.get(0).get("payPrice")));
                bill.setEnd("N");
                billRepository.save(bill);
            } else {
//                若账单中已有该用户则修改账单
                Bill bill = allByClient.get(0);
                String sqlSum;
                if (bill.getEnd().equals("N")) {
                    if (allByClient.size() == 1) {
//                        仅有1条并且这一条未结账
                        sqlSum = "select sum(price) as price,sum(pay_price) as payPrice from orders where client=" + client +
                                " and pay_direction='" + direction + "'";
                    } else {
//                        有多条且最后一条未结账
                        sqlSum = "select sum(price) as price,sum(pay_price) as payPrice from orders where client=" + client +
                                " and time > '" + allByClient.get(1).getTime() + "'" +
                                " and pay_direction='" + direction + "'";
                    }
                    List<Map> allSum = orderRepository.findAllByParams(sqlSum);
                    if (allSum.get(0).get("price") != null) {
                        bill.setPrice(TypeTransformUtil.ObjToBigDec(allSum.get(0).get("price")));
                        bill.setPayPrice(TypeTransformUtil.ObjToBigDec(allSum.get(0).get("payPrice")));
                        billRepository.save(bill);
                    }
                } else {
//                    最后一条为以结账
                    sqlSum = "select sum(price) as price,sum(pay_price) as payPrice,min(timestamp) as mintime from orders where client=" + client +
                            " and time > '" + bill.getTime() + "'" +
                            " and pay_direction='" + direction + "'";
                    List<Map> allSum = orderRepository.findAllByParams(sqlSum);
                    if (allSum.get(0).get("price") != null) {
                        Bill newBill = new Bill();
                        newBill.setTime(TimeUtil.getTimebytimestamp());
                        newBill.setDirection(direction);
                        newBill.setClient(client);
                        newBill.setPrice(TypeTransformUtil.ObjToBigDec(allSum.get(0).get("price")));
                        newBill.setPayPrice(TypeTransformUtil.ObjToBigDec(allSum.get(0).get("payPrice")));
                        newBill.setEnd("N");
                        newBill.setStartTime((Timestamp) allSum.get(0).get("mintime"));
                        billRepository.save(newBill);
                    }
                }

            }
        }
    }

    public void billSortPlanByClient(String direction,Integer client) throws ParseException {
            List<Bill> allByClient = billRepository.findAllByClientAndDirectionOrderByTimeDesc(client, direction);
            if (allByClient.size() == 0) {
//                若账单中没有该用户则新增
                String sqlSum = "select sum(price) as price,sum(pay_price) as payPrice,min(timestamp) as mintime from orders where client=" + client +
                        " and pay_direction='" + direction + "'";
                List<Map> allsum = orderRepository.findAllByParams(sqlSum);
                Bill bill = new Bill();
                bill.setStartTime((Timestamp) allsum.get(0).get("mintime"));
                bill.setTime(TimeUtil.getTimebytimestamp());
                bill.setDirection(direction);
                bill.setClient(client);
                bill.setPrice(TypeTransformUtil.ObjToBigDec(allsum.get(0).get("price")));
                bill.setPayPrice(TypeTransformUtil.ObjToBigDec(allsum.get(0).get("payPrice")));
                bill.setEnd("N");
                billRepository.save(bill);
            } else {
//                若账单中已有该用户则修改账单
                Bill bill = allByClient.get(0);
                String sqlSum;
                if (bill.getEnd().equals("N")) {
                    if (allByClient.size() == 1) {
//                        仅有1条并且这一条未结账
                        sqlSum = "select sum(price) as price,sum(pay_price) as payPrice from orders where client=" + client +
                                " and pay_direction='" + direction + "'";
                    } else {
//                        有多条且最后一条未结账
                        sqlSum = "select sum(price) as price,sum(pay_price) as payPrice from orders where client=" + client +
                                " and time > '" + allByClient.get(1).getTime() + "'" +
                                " and pay_direction='" + direction + "'";
                    }
                    List<Map> allSum = orderRepository.findAllByParams(sqlSum);
                    if (allSum.get(0).get("price") != null) {
                        bill.setPrice(TypeTransformUtil.ObjToBigDec(allSum.get(0).get("price")));
                        bill.setPayPrice(TypeTransformUtil.ObjToBigDec(allSum.get(0).get("payPrice")));
                        billRepository.save(bill);
                    }
                } else {
//                    最后一条为以结账
                    sqlSum = "select sum(price) as price,sum(pay_price) as payPrice,min(timestamp) as mintime from orders where client=" + client +
                            " and time > '" + bill.getTime() + "'" +
                            " and pay_direction='" + direction + "'";
                    List<Map> allSum = orderRepository.findAllByParams(sqlSum);
                    if (allSum.get(0).get("price") != null) {
                        Bill newBill = new Bill();
                        newBill.setTime(TimeUtil.getTimebytimestamp());
                        newBill.setDirection(direction);
                        newBill.setClient(client);
                        newBill.setPrice(TypeTransformUtil.ObjToBigDec(allSum.get(0).get("price")));
                        newBill.setPayPrice(TypeTransformUtil.ObjToBigDec(allSum.get(0).get("payPrice")));
                        newBill.setEnd("N");
                        newBill.setStartTime((Timestamp) allSum.get(0).get("mintime"));
                        billRepository.save(newBill);
                    }
                }

            }

    }


}

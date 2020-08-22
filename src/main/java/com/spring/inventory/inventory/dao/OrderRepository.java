package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

public interface OrderRepository extends BaseRepository<Order, String> {
    //    查询所有非删除的订单
    @Query(nativeQuery = true, value = "select o.orderNumber,c.name as client,pay_direction as payDirection,o.time,o.status," +
            "sum(oc.`total_price`) as price,o.remarks from orders o,client c,order_content oc where o.status != ?1 " +
            "and o.orderNumber like ?2 and o.`client`=c.`id` and oc.`orderNumber`=o.`orderNumber` group by o.`orderNumber` " +
            "order by ordernumber desc",
            countQuery = "select count(*) from orders o,client c,order_content oc where o.status != ? and o.orderNumber " +
                    "like ? and o.`client`=c.`id` and oc.`orderNumber`=o.`orderNumber` group by o.`orderNumber`")
    Page<Map> findAllByStatusNotAndOrderNumberLike(Pageable pageable, String status, String orderNumber);

    //    根据状态查询订单
    @Query(nativeQuery = true, value = "select o.orderNumber,c.name as client,pay_direction as payDirection,o.time,o.status," +
            "sum(oc.`total_price`) as price,o.remarks from orders o,client c,order_content oc where o.status = ?1 " +
            "and o.orderNumber like ?2 and o.`client`=c.`id` and oc.`orderNumber`=o.`orderNumber` group by o.`orderNumber` " +
            "order by ordernumber desc",
            countQuery = "select count(*) from orders o,client c,order_content oc where o.status = ?1 and o.orderNumber " +
                    "like ?2 and o.`client`=c.`id` and oc.`orderNumber`=o.`orderNumber` group by o.`orderNumber`")
    Page<Map> findAllByStatusNotAndOrderNumberLikeBystatus(Pageable pageable, String status, String orderNumber);


    @Query(nativeQuery = true, value = "select o.orderNumber,c.id as clientid,c.name as client,pay_direction as payDirection," +
            "o.time,o.status,o.price,o.remarks,o.pay_price as payPrice from orders o,client c where o.status in ?1 and o.orderNumber " +
            "like ?2 and o.`client`=c.`id` order by ordernumber desc",
            countQuery = "select count(*) from orders o,client c where " +
                    "o.status in ?1 and o.orderNumber like ?2 and o.`client` = c.`id`order by ordernumber desc")
    Page<Map> findAllByStatusAndOrderNumberLike(Pageable pageable, List<String> status, String orderNumber);

    List<Order> findAllByOrderNumberLike(String orderNumber);

    Order findFirstByOrderNumber(String orderNumber);

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "update orders set pay_price=?1,time=?2 where orderNumber=?3")
    void updatePayPrice(BigDecimal payPrice, String time, String orderNumber);

    List<Order> findAllByClient(Integer clinet);

    @Query(nativeQuery = true, value = "select o.orderNumber,c.id as clientid,c.name as client,pay_direction as payDirection," +
            "o.time,o.status,o.price,o.remarks,o.pay_price as payPrice from orders o,client c,bill b " +
            "where b.client = o.client " +
            "  and o.`client` = c.`id` " +
            "  and b.id = ?1 " +
            "  and b.direction=o.pay_direction " +
            "  and b.startTime <= o.timestamp " +
            "  and ifnull(b.time,'9999-12-31') > o.timestamp " +
            "order by ordernumber desc",
            countQuery = "select count(*) from orders o,client c,bill b " +
                    "where b.client = o.client " +
                    "  and o.`client` = c.`id` " +
                    "  and b.id = ?1 " +
                    "  and b.direction=o.pay_direction " +
                    "  and b.startTime <= o.timestamp " +
                    "  and ifnull(b.time,'9999-12-31') > o.timestamp")
    Page<Map> findAllByClientAndPayDirection(Pageable pageable, Integer id);

    List<Order> findAllByTimestampBetweenAndClientAndPayDirection(Timestamp start, Timestamp end, Integer client, String direction);

    @Query(nativeQuery = true, value = "select ifnull(sum(oco.num), 0) as num, ifnull(sum(oco.pay_price), 0.00) as pay" +
            " from (select sum(num) as num, o.pay_price" +
            "      from orders o," +
            "           order_content oc" +
            "      where o.time >= ?1" +
            "        and o.orderNumber = oc.orderNumber" +
            "        and o.status in ('Y', 'R')" +
            "        and o.pay_direction = 'P'" +
            "        and o.client = 1" +
            "      group by o.orderNumber) oco;")
    List<Map> findAllByTodaySH(Timestamp timestamp);

    @Query(nativeQuery = true, value = "select ifnull(sum(oco.num), 0) as num, ifnull(sum(oco.pay_price), 0.00) as pay" +
            " from (select sum(num) as num, o.pay_price" +
            "      from orders o," +
            "           order_content oc" +
            "      where o.time >= ?1" +
            "        and o.orderNumber = oc.orderNumber" +
            "        and o.status in ('Y', 'R')" +
            "        and o.pay_direction = 'P'" +
            "        and o.client != 1" +
            "      group by o.orderNumber) oco;")
    List<Map> findAllByTodayNoSH(Timestamp timestamp);
}


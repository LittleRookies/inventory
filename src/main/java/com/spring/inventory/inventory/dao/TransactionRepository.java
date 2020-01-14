package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.Transaction;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

public interface TransactionRepository extends BaseRepository<Transaction, Integer> {
    @Query(nativeQuery = true, value = "select transaction.*,commodity.model as commodityName from transaction,commodity where commodity.id=transaction.commodity and transaction.orderNumber=?1")
    List<Map> findAllByOrderNumber(String orderNumber);

    @Transactional
    @Modifying
    void deleteAllByOrderNumber(String orderNumber);

}

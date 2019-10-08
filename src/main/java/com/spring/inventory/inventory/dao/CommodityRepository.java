package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.Commodity;

public interface CommodityRepository extends BaseRepository<Commodity, Integer> {
    Commodity findCommodityByIdAndStatus(Integer id, String status);
}

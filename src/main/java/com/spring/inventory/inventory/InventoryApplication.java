package com.spring.inventory.inventory;

import com.spring.inventory.inventory.dao.impl.BaseRepositoryImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableJpaRepositories(basePackages = {"com.spring.inventory.inventory.dao"}, repositoryBaseClass = BaseRepositoryImpl.class)
@EnableJpaAuditing//jpa保存创建时间及修改时间
@EnableScheduling//定时任务
public class InventoryApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryApplication.class, args);
    }

}

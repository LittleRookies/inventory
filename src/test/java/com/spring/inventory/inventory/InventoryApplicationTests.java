package com.spring.inventory.inventory;

import com.spring.inventory.inventory.service.BillService;
import com.spring.inventory.inventory.task.TimeTask;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.ParseException;

@RunWith(SpringRunner.class)
@SpringBootTest
public class InventoryApplicationTests {
    @Autowired
    private TimeTask timeTask;

    @Autowired
    private BillService billService;

    @Test
    public void myTest() throws ParseException {
        timeTask.billSort();
    }

    @Test
    public void test() {
        billService.end(35);
    }

}

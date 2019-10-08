package com.spring.inventory.inventory.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TimeUtil {
    /**
     * 获取当前时间戳 格式：yyyy-MM-dd HH:mm:ss
     *
     * @return
     */
    public static String getNow() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(new Date());
    }

    /**
     * 获取当前时间戳 格式：yyyyMMdd
     *
     * @return
     */
    public static String getNowYMD() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        return sdf.format(new Date());
    }
}

package com.spring.inventory.inventory.util;

import java.sql.Timestamp;
import java.text.ParseException;
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

    /**
     * 获取Timestamp格式的当前时间
     *
     * @return
     */
    public static Timestamp getTimebytimestamp() {
        return new Timestamp(new Date().getTime());
    }

    /**
     * 获取Timestamp格式的当前时间
     *
     * @return
     */
    public static Timestamp getTimebytimestamp(String time) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        Date parse = sdf.parse(time);
        return new Timestamp(parse.getTime());
    }
}

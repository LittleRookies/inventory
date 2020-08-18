package com.spring.inventory.inventory.util;

public class InAndOutBoundUtil {
    public static Integer inAndOut(Integer before, Integer change, String oi) throws Exception {
        int result = 0;
        if (oi.equals("R")) {
            result = before + change;
        } else if (oi.equals("P")) {
            result = before - change;
        }
        if (result < 0) {
            throw new Exception("爆库了!!");
        }
        return result;
    }
}

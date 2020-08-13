package com.spring.inventory.inventory.util;

import java.math.BigDecimal;

/**
 * 类型转化工具
 */
public class TypeTransformUtil {
    /**
     * object转BigDecimal
     *
     * @param object
     * @return
     */
    public static BigDecimal ObjToBigDec(Object object) {
        return new BigDecimal(String.valueOf(object));
    }
}

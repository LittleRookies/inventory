package com.spring.inventory.inventory.util;

public class DictionaryUtil {
    public final static String normalErrCode = "1";//用户操作问题引起的错误
    public final static String exceptionErrCode = "-1";//系统内部错误
    public final static String successCode = "0";//操作成功

    public final static String statusY = "Y";//状态：已完成
    public final static String statusD = "D";//状态：删除
    public final static String statusZ = "Z";//状态：进行中
    public final static String statusR = "R";//状态：确认收货
    public final static String statusN = "N";//状态：待发货


    public static String payDirectionDic(String payDirection) {
        String result = "";
        switch (payDirection) {
            case "P":
                result = "销售";
                break;
            case "R":
                result = "采购";
                break;
        }
        return result;
    }

    public static String statusDic(String status) {
        String result = "";
        switch (status) {
            case "Y":
                result = "完成";
                break;
            case "D":
                result = "删除";
                break;
            case "Z":
                result = "进行中";
                break;
            case "R":
                result = "确认收货";
                break;
            case "N":
                result = "待发货";
                break;
        }
        return result;
    }

}

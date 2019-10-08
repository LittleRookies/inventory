package com.spring.inventory.inventory.util;

public class DictionaryUtil {
    public final static String normalErrCode = "1";//用户操作问题引起的错误
    public final static String exceptionErrCode = "-1";//系统内部错误
    public final static String successCode = "0";//操作成功

    public final static String statusY = "Y";//状态：通过
    public final static String statusD = "D";//状态：删除
    public final static String statusZ = "Z";//状态：进行中

    public static String payDirectionDic(String payDirection) {
        String result = "";
        switch (payDirection) {
            case "P":
                result = "付";
                break;
            case "R":
                result = "收";
                break;
        }
        return result;
    }

    public static String statusDic(String status) {
        String result = "";
        switch (status) {
            case "Y":
                result = "通过";
                break;
            case "D":
                result = "删除";
                break;
            case "Z":
                result = "进行中";
                break;
        }
        return result;
    }

}

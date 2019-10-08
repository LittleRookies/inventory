package com.spring.inventory.inventory.util;

import org.slf4j.Logger;

public class LoggerErrUtil {
    /**
     * 打印报错
     *
     * @param log
     * @param e
     */
    public static void logErr(Logger log, Exception e) {
        log.error("localizaizedMessage : {}", e.getLocalizedMessage());
        log.error("exception message : {}", e.getMessage());
        log.error("exception cause : {}", e.getCause());
//        log.error("exception suppressed : {}", e.getSuppressed());
//        //异常输出
        log.error("exception toString and track space : {}", "\r\n" + e);
        log.error(errorTrackSpace(e));
//        log.error("---------------------------------------------");
//        e.printStackTrace();
    }

    private static String errorTrackSpace(Exception e) {
        StringBuffer sb = new StringBuffer();
        if (e != null) {
            for (StackTraceElement element : e.getStackTrace()) {
                sb.append("\r\n\t").append(element);
            }
        }
        return sb.length() == 0 ? null : sb.toString();
    }
}

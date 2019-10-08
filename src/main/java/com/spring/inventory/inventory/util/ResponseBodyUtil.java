package com.spring.inventory.inventory.util;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import org.springframework.data.domain.Page;

import java.util.List;

public class ResponseBodyUtil {
    /**
     * 返回分页格式
     *
     * @param page
     * @param data
     * @param msg
     * @return
     */
    public static AjaxResponseBody responseBodyByPage(Page page, List data, String msg) {
        AjaxResponseBody ajaxResponseBody = new AjaxResponseBody();
        ajaxResponseBody.setCode("0");
        ajaxResponseBody.setMsg(msg);
        ajaxResponseBody.setCount(page.getTotalElements());
        ajaxResponseBody.setData(data);
        return ajaxResponseBody;

    }


    /**
     * 成功
     *
     * @return
     */
    public static AjaxResponseBody successAjax() {
        AjaxResponseBody ajaxResponseBody = new AjaxResponseBody();
        ajaxResponseBody.setMsg("成功");
        ajaxResponseBody.setCode(DictionaryUtil.successCode);
        return ajaxResponseBody;
    }

    /**
     * 成功
     *
     * @return
     */
    public static AjaxResponseBody successAjax(Object data) {
        AjaxResponseBody ajaxResponseBody = new AjaxResponseBody();
        ajaxResponseBody.setMsg("成功");
        ajaxResponseBody.setCode(DictionaryUtil.successCode);
        ajaxResponseBody.setData(data);
        return ajaxResponseBody;
    }

    /**
     * 程序错误
     *
     * @return
     */
    public static AjaxResponseBody defeatAjax() {
        AjaxResponseBody ajaxResponseBody = new AjaxResponseBody();
        ajaxResponseBody.setMsg("内部错误！");
        ajaxResponseBody.setCode(DictionaryUtil.exceptionErrCode);
        return ajaxResponseBody;
    }

    /**
     * 失败
     *
     * @param code
     * @param msg
     * @return
     */
    public static AjaxResponseBody defeatAjax(String code, String msg) {
        AjaxResponseBody ajaxResponseBody = new AjaxResponseBody();
        ajaxResponseBody.setMsg(msg);
        ajaxResponseBody.setCode(code);
        return ajaxResponseBody;
    }
}

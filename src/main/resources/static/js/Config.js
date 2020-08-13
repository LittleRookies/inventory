var ip = "http://127.0.0.1:8080";
var ajaxdata = {};

//为每个页面初始化导航
var header = '<div class="layui-header" id="header">\n' +
    '    <div class="layui-logo">库存管理系统</div>\n' +
    '    <!-- 头部区域（可配合layui已有的水平导航） -->\n' +
    '    <!--        <ul class="layui-nav layui-layout-left">-->\n' +
    '    <!--            <li class="layui-nav-item"><a href="">控制台</a></li>-->\n' +
    '    <!--            <li class="layui-nav-item"><a href="">商品管理</a></li>-->\n' +
    '    <!--            <li class="layui-nav-item"><a href="">用户</a></li>-->\n' +
    '    <!--            <li class="layui-nav-item">-->\n' +
    '    <!--                <a href="javascript:;">其它系统</a>-->\n' +
    '    <!--                <dl class="layui-nav-child">-->\n' +
    '    <!--                    <dd><a href="">邮件管理</a></dd>-->\n' +
    '    <!--                    <dd><a href="">消息管理</a></dd>-->\n' +
    '    <!--                    <dd><a href="">授权管理</a></dd>-->\n' +
    '    <!--                </dl>-->\n' +
    '    <!--            </li>-->\n' +
    '    <!--        </ul>-->\n' +
    '    <ul class="layui-nav layui-layout-right">\n' +
    '        <li class="layui-nav-item">\n' +
    '            <a href="javascript:;" id="login-a">\n' +
    '                <img src="/img/Avatar.jpg" class="layui-nav-img">\n' +
    '            </a>\n' +
    '            <dl class="layui-nav-child">\n' +
    '                <dd><a href="">基本资料</a></dd>\n' +
    '                <dd><a href="">安全设置</a></dd>\n' +
    '            </dl>\n' +
    '        </li>\n' +
    '        <li class="layui-nav-item"><a v-bind:href="logout">注销</a></li>\n' +
    '    </ul>\n' +
    '</div>';
var navigation = '<div class="layui-side layui-bg-black" id="navigation">\n' +
    '    <div class="layui-side-scroll">\n' +
    '        <!-- 左侧导航区域（可配合layui已有的垂直导航） -->\n' +
    '        <ul class="layui-nav layui-nav-tree" lay-filter="test">\n' +
    '            <li class="layui-nav-item"><a v-bind:href="index">主页</a></li>\n' +
    '            <li class="layui-nav-item">\n' +
    '                <a class="" v-bind:href="client">交易对象</a>\n' +
    '                <!--                <dl class="layui-nav-child">-->\n' +
    '                <!--                    <dd><a href="javascript:;">列表一</a></dd>-->\n' +
    '                <!--                    <dd><a href="javascript:;">列表二</a></dd>-->\n' +
    '                <!--                    <dd><a href="javascript:;">列表三</a></dd>-->\n' +
    '                <!--                    <dd><a href="">超链接</a></dd>-->\n' +
    '                <!--                </dl>-->\n' +
    '            </li>\n' +
    '            <li class="layui-nav-item"><a v-bind:href="commodity">商品</a></li>\n' +
    '            <li class="layui-nav-item"><a v-bind:href="order">订单</a>\n' +
    '                <!--                <dl class="layui-nav-child">-->\n' +
    '                <!--                    <dd><a href="javascript:;">列表一</a></dd>-->\n' +
    '                <!--                    <dd><a href="javascript:;">列表二</a></dd>-->\n' +
    '                <!--                    <dd><a href="">超链接</a></dd>-->\n' +
    '                <!--                </dl>-->\n' +
    '            </li>\n' +
    '            <li class="layui-nav-item"><a v-bind:href="transaction">交易</a></li>\n' +
    '            <li class="layui-nav-item"><a href="">库存</a></li>\n' +
    '            <li class="layui-nav-item"><a href="">收付款</a></li>\n' +
    '            <li class="layui-nav-item"><a v-bind:href="personnel">人员</a></li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</div>';
var tail = '<div class="layui-footer" id="tail">\n' +
    '    <!-- 底部固定区域 -->\n' +
    '</div>';

document.getElementById("data").innerHTML = document.getElementById("data").innerHTML + header;
document.getElementById("data").innerHTML = document.getElementById("data").innerHTML + navigation;
document.getElementById("data").innerHTML = document.getElementById("data").innerHTML + tail;
document.getElementById("login-a").innerHTML = document.getElementById("login-a").innerHTML + localStorage.getItem("name");


/**
 * ajax post请求
 * @param url
 * @param data 需要为json格式数据
 */
function ajaxPostByJson(url, data) {
    ajaxdata = {};
    $.ajax({
        //几个参数需要注意一下
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: ip + url,
        async: false, //同步请求
        contentType: 'application/json',
        // data: $('#form1').serialize(),
        data: data,
        success: function (result) {
            ajaxdata = result;
        }
        ,
        error: function () {
            alert("无法请求服务！");
        }
    })
    ;
}

/**
 * ajax post请求
 * @param url
 * @param data 非json格式数据
 */
function ajaxPost(url, data) {
    ajaxdata = {};
    $.ajax({
        //几个参数需要注意一下
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: ip + url,
        async: false, //同步请求
        // contentType: 'application/json',
        // data: $('#form1').serialize(),
        data: data,
        success: function (result) {
            ajaxdata = result;
        }
        ,
        error: function () {
            alert("无法请求服务！");
        }
    })
    ;
}

/**
 * ajax get请求
 * @param url
 * @param data 非json格式数据
 */
function ajaxGet(url) {
    ajaxdata = {};
    $.ajax({
        //几个参数需要注意一下
        type: "GET",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: ip + url,
        async: false, //同步请求
        success: function (result) {
            ajaxdata = result;
        }
        ,
        error: function () {
            alert("无法请求服务！");
        }
    })
    ;
}

/**
 * JS获取url参数
 * @param variable
 * @returns {string|boolean}
 */
function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return (false);
}

new Vue({
    el: '#data',
    data: {
        logout: ip + "/logout",
        personnel: ip + "/html/personnel-index.html",
        index: ip + "/html/index.html",
        client: ip + "/html/client-index.html",
        commodity: ip + "/html/commodity-index.html",
        order: ip + "/html/order-index.html",
        transaction: ip + "/html/transaction-index.html"
    }
});

/******处理js加减乘除丢失精度问题*******/

//加
function floatAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}

//减
function floatSub(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

//乘
function floatMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length
    } catch (e) {
    }
    try {
        m += s2.split(".")[1].length
    } catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}


//除
function floatDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length
    } catch (e) {
    }
    try {
        t2 = arg2.toString().split(".")[1].length
    } catch (e) {
    }

    r1 = Number(arg1.toString().replace(".", ""));

    r2 = Number(arg2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, t2 - t1);
}


//状态栏
function statusButton(status) {
    if (status === "N") {
        return "<button class=\"layui-btn layui-btn-radius\" disabled>待发货</button>\n";
    } else if (status === "D") {
        return "<button type=\"button\" class=\"layui-btn layui-btn-danger layui-btn-radius\">已删除</button>"
    } else if (status === "Y") {
        return "<button type=\"button\" class=\"layui-btn layui-btn-normal layui-btn-radius\">已完成</button>\n"
    } else if (status === "Z") {
        return "<button type=\"button\" class=\"layui-btn layui-btn-warm layui-btn-radius\">进行中</button>\n"
    } else if (status === "R") {
        return "<button type=\"button\" class=\"layui-btn layui-btn-primary layui-btn-radius\">确认收货</button>\n"
    }
}



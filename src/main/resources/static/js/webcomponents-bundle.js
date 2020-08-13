/**
 @license @nocompile
 Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function () {/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    'use strict';
    var w;

    function ba(a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }

    function ca(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {next: ba(a)}
    }

    function da(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }

    var fa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        };

    function ia() {
        ia = function () {
        };
        fa.Symbol || (fa.Symbol = la)
    }

    function ma(a, b) {
        this.a = a;
        ha(this, "description", {configurable: !0, writable: !0, value: b})
    }

    ma.prototype.toString = function () {
        return this.a
    };
    var la = function () {
        function a(c) {
            if (this instanceof a) throw new TypeError("Symbol is not a constructor");
            return new ma("jscomp_symbol_" + (c || "") + "_" + b++, c)
        }

        var b = 0;
        return a
    }();

    function na() {
        ia();
        var a = fa.Symbol.iterator;
        a || (a = fa.Symbol.iterator = fa.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && ha(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
                return oa(ba(this))
            }
        });
        na = function () {
        }
    }

    function oa(a) {
        na();
        a = {next: a};
        a[fa.Symbol.iterator] = function () {
            return this
        };
        return a
    }

    var pa;
    if ("function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf; else {
        var qa;
        a:{
            var va = {Pa: !0}, wa = {};
            try {
                wa.__proto__ = va;
                qa = wa.Pa;
                break a
            } catch (a) {
            }
            qa = !1
        }
        pa = qa ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var xa = pa;

    function ya() {
        this.l = !1;
        this.b = null;
        this.Ea = void 0;
        this.a = 1;
        this.Y = 0;
        this.c = null
    }

    function za(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    }

    ya.prototype.J = function (a) {
        this.Ea = a
    };

    function Aa(a, b) {
        a.c = {Sa: b, Wa: !0};
        a.a = a.Y
    }

    ya.prototype.return = function (a) {
        this.c = {return: a};
        this.a = this.Y
    };

    function Ba(a, b) {
        a.a = 3;
        return {value: b}
    }

    function Ca(a) {
        this.a = new ya;
        this.b = a
    }

    function Da(a, b) {
        za(a.a);
        var c = a.a.b;
        if (c) return Ea(a, "return" in c ? c["return"] : function (d) {
            return {value: d, done: !0}
        }, b, a.a.return);
        a.a.return(b);
        return Fa(a)
    }

    function Ea(a, b, c, d) {
        try {
            var e = b.call(a.a.b, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.a.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.a.b = null, Aa(a.a, g), Fa(a)
        }
        a.a.b = null;
        d.call(a.a, f);
        return Fa(a)
    }

    function Fa(a) {
        for (; a.a.a;) try {
            var b = a.b(a.a);
            if (b) return a.a.l = !1, {value: b.value, done: !1}
        } catch (c) {
            a.a.Ea = void 0, Aa(a.a, c)
        }
        a.a.l = !1;
        if (a.a.c) {
            b = a.a.c;
            a.a.c = null;
            if (b.Wa) throw b.Sa;
            return {value: b.return, done: !0}
        }
        return {value: void 0, done: !0}
    }

    function Ga(a) {
        this.next = function (b) {
            za(a.a);
            a.a.b ? b = Ea(a, a.a.b.next, b, a.a.J) : (a.a.J(b), b = Fa(a));
            return b
        };
        this.throw = function (b) {
            za(a.a);
            a.a.b ? b = Ea(a, a.a.b["throw"], b, a.a.J) : (Aa(a.a, b), b = Fa(a));
            return b
        };
        this.return = function (b) {
            return Da(a, b)
        };
        na();
        this[Symbol.iterator] = function () {
            return this
        }
    }

    function Ha(a, b) {
        b = new Ga(new Ca(b));
        xa && xa(b, a.prototype);
        return b
    }

    Array.from || (Array.from = function (a) {
        return [].slice.call(a)
    });
    Object.assign || (Object.assign = function (a) {
        for (var b = [].slice.call(arguments, 1), c = 0, d; c < b.length; c++) if (d = b[c]) for (var e = a, f = d, g = Object.getOwnPropertyNames(f), h = 0; h < g.length; h++) d = g[h], e[d] = f[d];
        return a
    });
    (function () {
        if (!function () {
            var f = document.createEvent("Event");
            f.initEvent("foo", !0, !0);
            f.preventDefault();
            return f.defaultPrevented
        }()) {
            var a = Event.prototype.preventDefault;
            Event.prototype.preventDefault = function () {
                this.cancelable && (a.call(this), Object.defineProperty(this, "defaultPrevented", {
                    get: function () {
                        return !0
                    }, configurable: !0
                }))
            }
        }
        var b = /Trident/.test(navigator.userAgent);
        if (!window.Event || b && "function" !== typeof window.Event) {
            var c = window.Event;
            window.Event = function (f, g) {
                g = g || {};
                var h = document.createEvent("Event");
                h.initEvent(f, !!g.bubbles, !!g.cancelable);
                return h
            };
            if (c) {
                for (var d in c) window.Event[d] = c[d];
                window.Event.prototype = c.prototype
            }
        }
        if (!window.CustomEvent || b && "function" !== typeof window.CustomEvent) window.CustomEvent = function (f, g) {
            g = g || {};
            var h = document.createEvent("CustomEvent");
            h.initCustomEvent(f, !!g.bubbles, !!g.cancelable, g.detail);
            return h
        }, window.CustomEvent.prototype = window.Event.prototype;
        if (!window.MouseEvent || b && "function" !== typeof window.MouseEvent) {
            b = window.MouseEvent;
            window.MouseEvent =
                function (f, g) {
                    g = g || {};
                    var h = document.createEvent("MouseEvent");
                    h.initMouseEvent(f, !!g.bubbles, !!g.cancelable, g.view || window, g.detail, g.screenX, g.screenY, g.clientX, g.clientY, g.ctrlKey, g.altKey, g.shiftKey, g.metaKey, g.button, g.relatedTarget);
                    return h
                };
            if (b) for (var e in b) window.MouseEvent[e] = b[e];
            window.MouseEvent.prototype = b.prototype
        }
    })();
    (function () {
        function a() {
        }

        function b(p, t) {
            if (!p.childNodes.length) return [];
            switch (p.nodeType) {
                case Node.DOCUMENT_NODE:
                    return F.call(p, t);
                case Node.DOCUMENT_FRAGMENT_NODE:
                    return C.call(p, t);
                default:
                    return r.call(p, t)
            }
        }

        var c = "undefined" === typeof HTMLTemplateElement,
            d = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment), e = !1;
        /Trident/.test(navigator.userAgent) && function () {
            function p(z, R) {
                if (z instanceof DocumentFragment) for (var bb; bb = z.firstChild;) D.call(this, bb, R); else D.call(this,
                    z, R);
                return z
            }

            e = !0;
            var t = Node.prototype.cloneNode;
            Node.prototype.cloneNode = function (z) {
                z = t.call(this, z);
                this instanceof DocumentFragment && (z.__proto__ = DocumentFragment.prototype);
                return z
            };
            DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll;
            DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector;
            Object.defineProperties(DocumentFragment.prototype, {
                nodeType: {
                    get: function () {
                        return Node.DOCUMENT_FRAGMENT_NODE
                    }, configurable: !0
                }, localName: {
                    get: function () {
                    },
                    configurable: !0
                }, nodeName: {
                    get: function () {
                        return "#document-fragment"
                    }, configurable: !0
                }
            });
            var D = Node.prototype.insertBefore;
            Node.prototype.insertBefore = p;
            var K = Node.prototype.appendChild;
            Node.prototype.appendChild = function (z) {
                z instanceof DocumentFragment ? p.call(this, z, null) : K.call(this, z);
                return z
            };
            var aa = Node.prototype.removeChild, ja = Node.prototype.replaceChild;
            Node.prototype.replaceChild = function (z, R) {
                z instanceof DocumentFragment ? (p.call(this, z, R), aa.call(this, R)) : ja.call(this, z, R);
                return R
            };
            Document.prototype.createDocumentFragment =
                function () {
                    var z = this.createElement("df");
                    z.__proto__ = DocumentFragment.prototype;
                    return z
                };
            var ra = Document.prototype.importNode;
            Document.prototype.importNode = function (z, R) {
                R = ra.call(this, z, R || !1);
                z instanceof DocumentFragment && (R.__proto__ = DocumentFragment.prototype);
                return R
            }
        }();
        var f = Node.prototype.cloneNode, g = Document.prototype.createElement, h = Document.prototype.importNode,
            k = Node.prototype.removeChild, l = Node.prototype.appendChild, m = Node.prototype.replaceChild,
            q = DOMParser.prototype.parseFromString,
            H = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || {
                get: function () {
                    return this.innerHTML
                }, set: function (p) {
                    this.innerHTML = p
                }
            }, E = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || {
                get: function () {
                    return this.childNodes
                }
            }, r = Element.prototype.querySelectorAll, F = Document.prototype.querySelectorAll,
            C = DocumentFragment.prototype.querySelectorAll, M = function () {
                if (!c) {
                    var p = document.createElement("template"), t = document.createElement("template");
                    t.content.appendChild(document.createElement("div"));
                    p.content.appendChild(t);
                    p = p.cloneNode(!0);
                    return 0 === p.content.childNodes.length || 0 === p.content.firstChild.content.childNodes.length || d
                }
            }();
        if (c) {
            var y = document.implementation.createHTMLDocument("template"), W = !0, v = document.createElement("style");
            v.textContent = "template{display:none;}";
            var sa = document.head;
            sa.insertBefore(v, sa.firstElementChild);
            a.prototype = Object.create(HTMLElement.prototype);
            var ea = !document.createElement("div").hasOwnProperty("innerHTML");
            a.U = function (p) {
                if (!p.content && p.namespaceURI ===
                    document.documentElement.namespaceURI) {
                    p.content = y.createDocumentFragment();
                    for (var t; t = p.firstChild;) l.call(p.content, t);
                    if (ea) p.__proto__ = a.prototype; else if (p.cloneNode = function (D) {
                        return a.b(this, D)
                    }, W) try {
                        n(p), I(p)
                    } catch (D) {
                        W = !1
                    }
                    a.a(p.content)
                }
            };
            var ta = {
                option: ["select"],
                thead: ["table"],
                col: ["colgroup", "table"],
                tr: ["tbody", "table"],
                th: ["tr", "tbody", "table"],
                td: ["tr", "tbody", "table"]
            }, n = function (p) {
                Object.defineProperty(p, "innerHTML", {
                    get: function () {
                        return ua(this)
                    }, set: function (t) {
                        var D = ta[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(t) ||
                            ["", ""])[1].toLowerCase()];
                        if (D) for (var K = 0; K < D.length; K++) t = "<" + D[K] + ">" + t + "</" + D[K] + ">";
                        y.body.innerHTML = t;
                        for (a.a(y); this.content.firstChild;) k.call(this.content, this.content.firstChild);
                        t = y.body;
                        if (D) for (K = 0; K < D.length; K++) t = t.lastChild;
                        for (; t.firstChild;) l.call(this.content, t.firstChild)
                    }, configurable: !0
                })
            }, I = function (p) {
                Object.defineProperty(p, "outerHTML", {
                    get: function () {
                        return "<template>" + this.innerHTML + "</template>"
                    }, set: function (t) {
                        if (this.parentNode) {
                            y.body.innerHTML = t;
                            for (t = this.ownerDocument.createDocumentFragment(); y.body.firstChild;) l.call(t,
                                y.body.firstChild);
                            m.call(this.parentNode, t, this)
                        } else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
                    }, configurable: !0
                })
            };
            n(a.prototype);
            I(a.prototype);
            a.a = function (p) {
                p = b(p, "template");
                for (var t = 0, D = p.length, K; t < D && (K = p[t]); t++) a.U(K)
            };
            document.addEventListener("DOMContentLoaded", function () {
                a.a(document)
            });
            Document.prototype.createElement = function () {
                var p = g.apply(this, arguments);
                "template" === p.localName && a.U(p);
                return p
            };
            DOMParser.prototype.parseFromString =
                function () {
                    var p = q.apply(this, arguments);
                    a.a(p);
                    return p
                };
            Object.defineProperty(HTMLElement.prototype, "innerHTML", {
                get: function () {
                    return ua(this)
                }, set: function (p) {
                    H.set.call(this, p);
                    a.a(this)
                }, configurable: !0, enumerable: !0
            });
            var ka = /[&\u00A0"]/g, Xb = /[&\u00A0<>]/g, cb = function (p) {
                switch (p) {
                    case "&":
                        return "&amp;";
                    case "<":
                        return "&lt;";
                    case ">":
                        return "&gt;";
                    case '"':
                        return "&quot;";
                    case "\u00a0":
                        return "&nbsp;"
                }
            };
            v = function (p) {
                for (var t = {}, D = 0; D < p.length; D++) t[p[D]] = !0;
                return t
            };
            var Qa = v("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
                db = v("style script xmp iframe noembed noframes plaintext noscript".split(" ")), ua = function (p, t) {
                    "template" === p.localName && (p = p.content);
                    for (var D = "", K = t ? t(p) : E.get.call(p), aa = 0, ja = K.length, ra; aa < ja && (ra = K[aa]); aa++) {
                        a:{
                            var z = ra;
                            var R = p;
                            var bb = t;
                            switch (z.nodeType) {
                                case Node.ELEMENT_NODE:
                                    for (var Yb = z.localName, eb = "<" + Yb, gg = z.attributes, ud = 0; R = gg[ud]; ud++) eb += " " + R.name + '="' + R.value.replace(ka, cb) + '"';
                                    eb += ">";
                                    z = Qa[Yb] ? eb : eb + ua(z, bb) + "</" + Yb + ">";
                                    break a;
                                case Node.TEXT_NODE:
                                    z = z.data;
                                    z = R && db[R.localName] ?
                                        z : z.replace(Xb, cb);
                                    break a;
                                case Node.COMMENT_NODE:
                                    z = "\x3c!--" + z.data + "--\x3e";
                                    break a;
                                default:
                                    throw window.console.error(z), Error("not implemented");
                            }
                        }
                        D += z
                    }
                    return D
                }
        }
        if (c || M) {
            a.b = function (p, t) {
                var D = f.call(p, !1);
                this.U && this.U(D);
                t && (l.call(D.content, f.call(p.content, !0)), u(D.content, p.content));
                return D
            };
            var u = function (p, t) {
                if (t.querySelectorAll && (t = b(t, "template"), 0 !== t.length)) {
                    p = b(p, "template");
                    for (var D = 0, K = p.length, aa, ja; D < K; D++) ja = t[D], aa = p[D], a && a.U && a.U(ja), m.call(aa.parentNode, G.call(ja,
                        !0), aa)
                }
            }, G = Node.prototype.cloneNode = function (p) {
                if (!e && d && this instanceof DocumentFragment) if (p) var t = J.call(this.ownerDocument, this, !0); else return this.ownerDocument.createDocumentFragment(); else this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? t = a.b(this, p) : t = f.call(this, p);
                p && u(t, this);
                return t
            }, J = Document.prototype.importNode = function (p, t) {
                t = t || !1;
                if ("template" === p.localName) return a.b(p, t);
                var D = h.call(this, p, t);
                if (t) {
                    u(D,
                        p);
                    p = b(D, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
                    for (var K, aa = 0; aa < p.length; aa++) {
                        K = p[aa];
                        t = g.call(document, "script");
                        t.textContent = K.textContent;
                        for (var ja = K.attributes, ra = 0, z; ra < ja.length; ra++) z = ja[ra], t.setAttribute(z.name, z.value);
                        m.call(K.parentNode, t, K)
                    }
                }
                return D
            }
        }
        c && (window.HTMLTemplateElement = a)
    })();
    var Ia = setTimeout;

    function Ja() {
    }

    function Ka(a, b) {
        return function () {
            a.apply(b, arguments)
        }
    }

    function x(a) {
        if (!(this instanceof x)) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function");
        this.I = 0;
        this.za = !1;
        this.C = void 0;
        this.W = [];
        La(a, this)
    }

    function Ma(a, b) {
        for (; 3 === a.I;) a = a.C;
        0 === a.I ? a.W.push(b) : (a.za = !0, Na(function () {
            var c = 1 === a.I ? b.Ya : b.Za;
            if (null === c) (1 === a.I ? Oa : Pa)(b.va, a.C); else {
                try {
                    var d = c(a.C)
                } catch (e) {
                    Pa(b.va, e);
                    return
                }
                Oa(b.va, d)
            }
        }))
    }

    function Oa(a, b) {
        try {
            if (b === a) throw new TypeError("A promise cannot be resolved with itself.");
            if (b && ("object" === typeof b || "function" === typeof b)) {
                var c = b.then;
                if (b instanceof x) {
                    a.I = 3;
                    a.C = b;
                    Ra(a);
                    return
                }
                if ("function" === typeof c) {
                    La(Ka(c, b), a);
                    return
                }
            }
            a.I = 1;
            a.C = b;
            Ra(a)
        } catch (d) {
            Pa(a, d)
        }
    }

    function Pa(a, b) {
        a.I = 2;
        a.C = b;
        Ra(a)
    }

    function Ra(a) {
        2 === a.I && 0 === a.W.length && Na(function () {
            a.za || "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a.C)
        });
        for (var b = 0, c = a.W.length; b < c; b++) Ma(a, a.W[b]);
        a.W = null
    }

    function Sa(a, b, c) {
        this.Ya = "function" === typeof a ? a : null;
        this.Za = "function" === typeof b ? b : null;
        this.va = c
    }

    function La(a, b) {
        var c = !1;
        try {
            a(function (d) {
                c || (c = !0, Oa(b, d))
            }, function (d) {
                c || (c = !0, Pa(b, d))
            })
        } catch (d) {
            c || (c = !0, Pa(b, d))
        }
    }

    x.prototype["catch"] = function (a) {
        return this.then(null, a)
    };
    x.prototype.then = function (a, b) {
        var c = new this.constructor(Ja);
        Ma(this, new Sa(a, b, c));
        return c
    };
    x.prototype["finally"] = function (a) {
        var b = this.constructor;
        return this.then(function (c) {
            return b.resolve(a()).then(function () {
                return c
            })
        }, function (c) {
            return b.resolve(a()).then(function () {
                return b.reject(c)
            })
        })
    };

    function Ta(a) {
        return new x(function (b, c) {
            function d(h, k) {
                try {
                    if (k && ("object" === typeof k || "function" === typeof k)) {
                        var l = k.then;
                        if ("function" === typeof l) {
                            l.call(k, function (m) {
                                d(h, m)
                            }, c);
                            return
                        }
                    }
                    e[h] = k;
                    0 === --f && b(e)
                } catch (m) {
                    c(m)
                }
            }

            if (!a || "undefined" === typeof a.length) throw new TypeError("Promise.all accepts an array");
            var e = Array.prototype.slice.call(a);
            if (0 === e.length) return b([]);
            for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
        })
    }

    function Ua(a) {
        return a && "object" === typeof a && a.constructor === x ? a : new x(function (b) {
            b(a)
        })
    }

    function Va(a) {
        return new x(function (b, c) {
            c(a)
        })
    }

    function Wa(a) {
        return new x(function (b, c) {
            for (var d = 0, e = a.length; d < e; d++) a[d].then(b, c)
        })
    }

    var Na = "function" === typeof setImmediate && function (a) {
        setImmediate(a)
    } || function (a) {
        Ia(a, 0)
    };/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    if (!window.Promise) {
        window.Promise = x;
        x.prototype.then = x.prototype.then;
        x.all = Ta;
        x.race = Wa;
        x.resolve = Ua;
        x.reject = Va;
        var Xa = document.createTextNode(""), Ya = [];
        (new MutationObserver(function () {
            for (var a = Ya.length, b = 0; b < a; b++) Ya[b]();
            Ya.splice(0, a)
        })).observe(Xa, {characterData: !0});
        Na = function (a) {
            Ya.push(a);
            Xa.textContent = 0 < Xa.textContent.length ? "" : "a"
        }
    }
    ;/*
 Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
    (function (a, b) {
        if (!(b in a)) {
            var c = typeof global === typeof c ? window : global, d = 0, e = "" + Math.random(),
                f = "__\u0001symbol@@" + e, g = a.getOwnPropertyNames, h = a.getOwnPropertyDescriptor, k = a.create,
                l = a.keys, m = a.freeze || a, q = a.defineProperty, H = a.defineProperties,
                E = h(a, "getOwnPropertyNames"), r = a.prototype, F = r.hasOwnProperty, C = r.propertyIsEnumerable,
                M = r.toString, y = function (u, G, J) {
                    F.call(u, f) || q(u, f, {enumerable: !1, configurable: !1, writable: !1, value: {}});
                    u[f]["@@" + G] = J
                }, W = function (u, G) {
                    var J = k(u);
                    g(G).forEach(function (p) {
                        ta.call(G,
                            p) && Qa(J, p, G[p])
                    });
                    return J
                }, v = function () {
                }, sa = function (u) {
                    return u != f && !F.call(ka, u)
                }, ea = function (u) {
                    return u != f && F.call(ka, u)
                }, ta = function (u) {
                    var G = "" + u;
                    return ea(G) ? F.call(this, G) && this[f]["@@" + G] : C.call(this, u)
                }, n = function (u) {
                    q(r, u, {
                        enumerable: !1, configurable: !0, get: v, set: function (G) {
                            ua(this, u, {enumerable: !1, configurable: !0, writable: !0, value: G});
                            y(this, u, !0)
                        }
                    });
                    return m(ka[u] = q(a(u), "constructor", Xb))
                }, I = function (u) {
                    if (this && this !== c) throw new TypeError("Symbol is not a constructor");
                    return n("__\u0001symbol:".concat(u ||
                        "", e, ++d))
                }, ka = k(null), Xb = {value: I}, cb = function (u) {
                    return ka[u]
                }, Qa = function (u, G, J) {
                    var p = "" + G;
                    if (ea(p)) {
                        G = ua;
                        if (J.enumerable) {
                            var t = k(J);
                            t.enumerable = !1
                        } else t = J;
                        G(u, p, t);
                        y(u, p, !!J.enumerable)
                    } else q(u, G, J);
                    return u
                }, db = function (u) {
                    return g(u).filter(ea).map(cb)
                };
            E.value = Qa;
            q(a, "defineProperty", E);
            E.value = db;
            q(a, b, E);
            E.value = function (u) {
                return g(u).filter(sa)
            };
            q(a, "getOwnPropertyNames", E);
            E.value = function (u, G) {
                var J = db(G);
                J.length ? l(G).concat(J).forEach(function (p) {
                    ta.call(G, p) && Qa(u, p, G[p])
                }) : H(u,
                    G);
                return u
            };
            q(a, "defineProperties", E);
            E.value = ta;
            q(r, "propertyIsEnumerable", E);
            E.value = I;
            q(c, "Symbol", E);
            E.value = function (u) {
                u = "__\u0001symbol:".concat("__\u0001symbol:", u, e);
                return u in r ? ka[u] : n(u)
            };
            q(I, "for", E);
            E.value = function (u) {
                if (sa(u)) throw new TypeError(u + " is not a symbol");
                return F.call(ka, u) ? u.slice(20, -e.length) : void 0
            };
            q(I, "keyFor", E);
            E.value = function (u, G) {
                var J = h(u, G);
                J && ea(G) && (J.enumerable = ta.call(u, G));
                return J
            };
            q(a, "getOwnPropertyDescriptor", E);
            E.value = function (u, G) {
                return 1 ===
                arguments.length ? k(u) : W(u, G)
            };
            q(a, "create", E);
            E.value = function () {
                var u = M.call(this);
                return "[object String]" === u && ea(this) ? "[object Symbol]" : u
            };
            q(r, "toString", E);
            try {
                var ua = k(q({}, "__\u0001symbol:", {
                    get: function () {
                        return q(this, "__\u0001symbol:", {value: !1})["__\u0001symbol:"]
                    }
                }))["__\u0001symbol:"] || q
            } catch (u) {
                ua = function (G, J, p) {
                    var t = h(r, J);
                    delete r[J];
                    q(G, J, p);
                    q(r, J, t)
                }
            }
        }
    })(Object, "getOwnPropertySymbols");
    (function (a) {
        var b = a.defineProperty, c = a.prototype, d = c.toString, e;
        "iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function (f) {
            if (!(f in Symbol)) switch (b(Symbol, f, {value: Symbol(f)}), f) {
                case "toStringTag":
                    e = a.getOwnPropertyDescriptor(c, "toString"), e.value = function () {
                        var g = d.call(this), h = this[Symbol.toStringTag];
                        return "undefined" === typeof h ? g : "[object " + h + "]"
                    }, b(c, "toString", e)
            }
        })
    })(Object, Symbol);
    (function (a, b, c) {
        function d() {
            return this
        }

        b[a] || (b[a] = function () {
            var e = 0, f = this, g = {
                next: function () {
                    var h = f.length <= e;
                    return h ? {done: h} : {done: h, value: f[e++]}
                }
            };
            g[a] = d;
            return g
        });
        c[a] || (c[a] = function () {
            var e = String.fromCodePoint, f = this, g = 0, h = f.length, k = {
                next: function () {
                    var l = h <= g, m = l ? "" : e(f.codePointAt(g));
                    g += m.length;
                    return l ? {done: l} : {done: l, value: m}
                }
            };
            k[a] = d;
            return k
        })
    })(Symbol.iterator, Array.prototype, String.prototype);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    var Za = Object.prototype.toString;
    Object.prototype.toString = function () {
        return void 0 === this ? "[object Undefined]" : null === this ? "[object Null]" : Za.call(this)
    };
    Object.keys = function (a) {
        return Object.getOwnPropertyNames(a).filter(function (b) {
            return (b = Object.getOwnPropertyDescriptor(a, b)) && b.enumerable
        })
    };
    var $a = window.Symbol.iterator;
    String.prototype[$a] && String.prototype.codePointAt || (String.prototype[$a] = function ab() {
        var b, c = this;
        return Ha(ab, function (d) {
            1 == d.a && (b = 0);
            if (3 != d.a) return b < c.length ? d = Ba(d, c[b]) : (d.a = 0, d = void 0), d;
            b++;
            d.a = 2
        })
    });
    Set.prototype[$a] || (Set.prototype[$a] = function fb() {
        var b, c = this, d;
        return Ha(fb, function (e) {
            1 == e.a && (b = [], c.forEach(function (f) {
                b.push(f)
            }), d = 0);
            if (3 != e.a) return d < b.length ? e = Ba(e, b[d]) : (e.a = 0, e = void 0), e;
            d++;
            e.a = 2
        })
    });
    Map.prototype[$a] || (Map.prototype[$a] = function gb() {
        var b, c = this, d;
        return Ha(gb, function (e) {
            1 == e.a && (b = [], c.forEach(function (f, g) {
                b.push([g, f])
            }), d = 0);
            if (3 != e.a) return d < b.length ? e = Ba(e, b[d]) : (e.a = 0, e = void 0), e;
            d++;
            e.a = 2
        })
    });/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    window.WebComponents = window.WebComponents || {flags: {}};
    var hb = document.querySelector('script[src*="webcomponents-bundle"]'), ib = /wc-(.+)/, A = {};
    if (!A.noOpts) {
        location.search.slice(1).split("&").forEach(function (a) {
            a = a.split("=");
            var b;
            a[0] && (b = a[0].match(ib)) && (A[b[1]] = a[1] || !0)
        });
        if (hb) for (var jb = 0, kb = void 0; kb = hb.attributes[jb]; jb++) "src" !== kb.name && (A[kb.name] = kb.value || !0);
        if (A.log && A.log.split) {
            var lb = A.log.split(",");
            A.log = {};
            lb.forEach(function (a) {
                A.log[a] = !0
            })
        } else A.log = {}
    }
    window.WebComponents.flags = A;
    var mb = A.shadydom;
    if (mb) {
        window.ShadyDOM = window.ShadyDOM || {};
        window.ShadyDOM.force = mb;
        var nb = A.noPatch;
        window.ShadyDOM.noPatch = "true" === nb ? !0 : nb
    }
    var ob = A.register || A.ce;
    ob && window.customElements && (window.customElements.forcePolyfill = ob);/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    function pb() {
    }

    pb.prototype.toJSON = function () {
        return {}
    };

    function B(a) {
        a.__shady || (a.__shady = new pb);
        return a.__shady
    }

    function L(a) {
        return a && a.__shady
    };var N = window.ShadyDOM || {};
    N.Ua = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var qb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
    N.B = !!(qb && qb.configurable && qb.get);
    N.sa = N.force || !N.Ua;
    N.D = N.noPatch || !1;
    N.la = N.preferPerformance;
    N.ua = "on-demand" === N.D;
    N.Ia = navigator.userAgent.match("Trident");

    function rb(a) {
        return (a = L(a)) && void 0 !== a.firstChild
    }

    function O(a) {
        return a instanceof ShadowRoot
    }

    function sb(a) {
        return (a = (a = L(a)) && a.root) && tb(a)
    }

    var ub = Element.prototype,
        vb = ub.matches || ub.matchesSelector || ub.mozMatchesSelector || ub.msMatchesSelector || ub.oMatchesSelector || ub.webkitMatchesSelector,
        wb = document.createTextNode(""), xb = 0, yb = [];
    (new MutationObserver(function () {
        for (; yb.length;) try {
            yb.shift()()
        } catch (a) {
            throw wb.textContent = xb++, a;
        }
    })).observe(wb, {characterData: !0});

    function zb(a) {
        yb.push(a);
        wb.textContent = xb++
    }

    var Ab = !!document.contains;

    function Bb(a, b) {
        for (; b;) {
            if (b == a) return !0;
            b = b.__shady_parentNode
        }
        return !1
    }

    function Cb(a) {
        for (var b = a.length - 1; 0 <= b; b--) {
            var c = a[b], d = c.getAttribute("id") || c.getAttribute("name");
            d && "length" !== d && isNaN(d) && (a[d] = c)
        }
        a.item = function (e) {
            return a[e]
        };
        a.namedItem = function (e) {
            if ("length" !== e && isNaN(e) && a[e]) return a[e];
            for (var f = ca(a), g = f.next(); !g.done; g = f.next()) if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;
            return null
        };
        return a
    }

    function Db(a) {
        var b = [];
        for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) b.push(a);
        return b
    }

    function Eb(a) {
        var b = [];
        for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a);
        return b
    }

    function Fb(a, b, c) {
        c.configurable = !0;
        if (c.value) a[b] = c.value; else try {
            Object.defineProperty(a, b, c)
        } catch (d) {
        }
    }

    function P(a, b, c, d) {
        c = void 0 === c ? "" : c;
        for (var e in b) d && 0 <= d.indexOf(e) || Fb(a, c + e, b[e])
    }

    function Gb(a, b) {
        for (var c in b) c in a && Fb(a, c, b[c])
    }

    function Q(a) {
        var b = {};
        Object.getOwnPropertyNames(a).forEach(function (c) {
            b[c] = Object.getOwnPropertyDescriptor(a, c)
        });
        return b
    }

    function Hb(a, b) {
        for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length; d++) e = c[d], a[e] = b[e]
    };var Ib = [], Jb;

    function Kb(a) {
        Jb || (Jb = !0, zb(Lb));
        Ib.push(a)
    }

    function Lb() {
        Jb = !1;
        for (var a = !!Ib.length; Ib.length;) Ib.shift()();
        return a
    }

    Lb.list = Ib;

    function Mb() {
        this.a = !1;
        this.addedNodes = [];
        this.removedNodes = [];
        this.ia = new Set
    }

    function Nb(a) {
        a.a || (a.a = !0, zb(function () {
            a.flush()
        }))
    }

    Mb.prototype.flush = function () {
        if (this.a) {
            this.a = !1;
            var a = this.takeRecords();
            a.length && this.ia.forEach(function (b) {
                b(a)
            })
        }
    };
    Mb.prototype.takeRecords = function () {
        if (this.addedNodes.length || this.removedNodes.length) {
            var a = [{addedNodes: this.addedNodes, removedNodes: this.removedNodes}];
            this.addedNodes = [];
            this.removedNodes = [];
            return a
        }
        return []
    };

    function Ob(a, b) {
        var c = B(a);
        c.Z || (c.Z = new Mb);
        c.Z.ia.add(b);
        var d = c.Z;
        return {
            Ma: b, S: d, Na: a, takeRecords: function () {
                return d.takeRecords()
            }
        }
    }

    function Pb(a) {
        var b = a && a.S;
        b && (b.ia.delete(a.Ma), b.ia.size || (B(a.Na).Z = null))
    }

    function Qb(a, b) {
        var c = b.getRootNode();
        return a.map(function (d) {
            var e = c === d.target.getRootNode();
            if (e && d.addedNodes) {
                if (e = [].slice.call(d.addedNodes).filter(function (f) {
                    return c === f.getRootNode()
                }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", {
                    value: e,
                    configurable: !0
                }), d
            } else if (e) return d
        }).filter(function (d) {
            return d
        })
    };var Rb = /[&\u00A0"]/g, Sb = /[&\u00A0<>]/g;

    function Tb(a) {
        switch (a) {
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "\u00a0":
                return "&nbsp;"
        }
    }

    function Ub(a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
        return b
    }

    var Vb = Ub("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
        Wb = Ub("style script xmp iframe noembed noframes plaintext noscript".split(" "));

    function Zb(a, b) {
        "template" === a.localName && (a = a.content);
        for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
            a:{
                var h = g;
                var k = a, l = b;
                switch (h.nodeType) {
                    case Node.ELEMENT_NODE:
                        k = h.localName;
                        for (var m = "<" + k, q = h.attributes, H = 0, E; E = q[H]; H++) m += " " + E.name + '="' + E.value.replace(Rb, Tb) + '"';
                        m += ">";
                        h = Vb[k] ? m : m + Zb(h, l) + "</" + k + ">";
                        break a;
                    case Node.TEXT_NODE:
                        h = h.data;
                        h = k && Wb[k.localName] ? h : h.replace(Sb, Tb);
                        break a;
                    case Node.COMMENT_NODE:
                        h = "\x3c!--" + h.data + "--\x3e";
                        break a;
                    default:
                        throw window.console.error(h),
                            Error("not implemented");
                }
            }
            c += h
        }
        return c
    };var $b = N.B, ac = {
        querySelector: function (a) {
            return this.__shady_native_querySelector(a)
        }, querySelectorAll: function (a) {
            return this.__shady_native_querySelectorAll(a)
        }
    }, bc = {};

    function cc(a) {
        bc[a] = function (b) {
            return b["__shady_native_" + a]
        }
    }

    function dc(a, b) {
        P(a, b, "__shady_native_");
        for (var c in b) cc(c)
    }

    function S(a, b) {
        b = void 0 === b ? [] : b;
        for (var c = 0; c < b.length; c++) {
            var d = b[c], e = Object.getOwnPropertyDescriptor(a, d);
            e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? ac[d] || (ac[d] = e.value) : cc(d))
        }
    }

    var ec = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
        fc = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
        gc = document.implementation.createHTMLDocument("inert");

    function hc(a) {
        for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b)
    }

    var ic = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
        jc = ["querySelector", "querySelectorAll"];

    function kc() {
        var a = ["dispatchEvent", "addEventListener", "removeEventListener"];
        window.EventTarget ? S(window.EventTarget.prototype, a) : (S(Node.prototype, a), S(Window.prototype, a));
        $b ? S(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : dc(Node.prototype, {
            parentNode: {
                get: function () {
                    ec.currentNode = this;
                    return ec.parentNode()
                }
            }, firstChild: {
                get: function () {
                    ec.currentNode = this;
                    return ec.firstChild()
                }
            }, lastChild: {
                get: function () {
                    ec.currentNode =
                        this;
                    return ec.lastChild()
                }
            }, previousSibling: {
                get: function () {
                    ec.currentNode = this;
                    return ec.previousSibling()
                }
            }, nextSibling: {
                get: function () {
                    ec.currentNode = this;
                    return ec.nextSibling()
                }
            }, childNodes: {
                get: function () {
                    var b = [];
                    ec.currentNode = this;
                    for (var c = ec.firstChild(); c;) b.push(c), c = ec.nextSibling();
                    return b
                }
            }, parentElement: {
                get: function () {
                    fc.currentNode = this;
                    return fc.parentNode()
                }
            }, textContent: {
                get: function () {
                    switch (this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            for (var b =
                                document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) c += d.nodeValue;
                            return c;
                        default:
                            return this.nodeValue
                    }
                }, set: function (b) {
                    if ("undefined" === typeof b || null === b) b = "";
                    switch (this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            hc(this);
                            (0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);
                            break;
                        default:
                            this.nodeValue = b
                    }
                }
            }
        });
        S(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
        S(HTMLElement.prototype, ["parentElement", "contains"]);
        a = {
            firstElementChild: {
                get: function () {
                    fc.currentNode = this;
                    return fc.firstChild()
                }
            }, lastElementChild: {
                get: function () {
                    fc.currentNode = this;
                    return fc.lastChild()
                }
            }, children: {
                get: function () {
                    var b = [];
                    fc.currentNode = this;
                    for (var c = fc.firstChild(); c;) b.push(c), c = fc.nextSibling();
                    return Cb(b)
                }
            }, childElementCount: {
                get: function () {
                    return this.children ? this.children.length : 0
                }
            }
        };
        $b ? (S(Element.prototype, ic), S(Element.prototype, ["previousElementSibling", "nextElementSibling",
            "innerHTML", "className"]), S(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (dc(Element.prototype, a), dc(Element.prototype, {
            previousElementSibling: {
                get: function () {
                    fc.currentNode = this;
                    return fc.previousSibling()
                }
            }, nextElementSibling: {
                get: function () {
                    fc.currentNode = this;
                    return fc.nextSibling()
                }
            }, innerHTML: {
                get: function () {
                    return Zb(this, Db)
                }, set: function (b) {
                    var c = "template" === this.localName ? this.content : this;
                    hc(c);
                    var d = this.localName || "div";
                    d = this.namespaceURI && this.namespaceURI !== gc.namespaceURI ?
                        gc.createElementNS(this.namespaceURI, d) : gc.createElement(d);
                    d.innerHTML = b;
                    for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0)
                }
            }, className: {
                get: function () {
                    return this.getAttribute("class") || ""
                }, set: function (b) {
                    this.setAttribute("class", b)
                }
            }
        }));
        S(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));
        S(Element.prototype, jc);
        S(HTMLElement.prototype, ["focus", "blur"]);
        window.HTMLTemplateElement &&
        S(window.HTMLTemplateElement.prototype, ["innerHTML"]);
        $b ? S(DocumentFragment.prototype, ic) : dc(DocumentFragment.prototype, a);
        S(DocumentFragment.prototype, jc);
        $b ? (S(Document.prototype, ic), S(Document.prototype, ["activeElement"])) : dc(Document.prototype, a);
        S(Document.prototype, ["importNode", "getElementById"]);
        S(Document.prototype, jc)
    };var lc = Q({
        get childNodes() {
            return this.__shady_childNodes
        }, get firstChild() {
            return this.__shady_firstChild
        }, get lastChild() {
            return this.__shady_lastChild
        }, get childElementCount() {
            return this.__shady_childElementCount
        }, get children() {
            return this.__shady_children
        }, get firstElementChild() {
            return this.__shady_firstElementChild
        }, get lastElementChild() {
            return this.__shady_lastElementChild
        }, get shadowRoot() {
            return this.__shady_shadowRoot
        }
    }), mc = Q({
        get textContent() {
            return this.__shady_textContent
        }, set textContent(a) {
            this.__shady_textContent =
                a
        }, get innerHTML() {
            return this.__shady_innerHTML
        }, set innerHTML(a) {
            return this.__shady_innerHTML = a
        }
    }), nc = Q({
        get parentElement() {
            return this.__shady_parentElement
        }, get parentNode() {
            return this.__shady_parentNode
        }, get nextSibling() {
            return this.__shady_nextSibling
        }, get previousSibling() {
            return this.__shady_previousSibling
        }, get nextElementSibling() {
            return this.__shady_nextElementSibling
        }, get previousElementSibling() {
            return this.__shady_previousElementSibling
        }, get className() {
            return this.__shady_className
        },
        set className(a) {
            return this.__shady_className = a
        }
    });

    function oc(a) {
        for (var b in a) {
            var c = a[b];
            c && (c.enumerable = !1)
        }
    }

    oc(lc);
    oc(mc);
    oc(nc);
    var pc = N.B || !0 === N.D, qc = pc ? function () {
    } : function (a) {
        var b = B(a);
        b.Ka || (b.Ka = !0, Gb(a, nc))
    }, rc = pc ? function () {
    } : function (a) {
        var b = B(a);
        b.Ja || (b.Ja = !0, Gb(a, lc), window.customElements && window.customElements.polyfillWrapFlushCallback && !N.D || Gb(a, mc))
    };
    var sc = "__eventWrappers" + Date.now(), tc = function () {
        var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
        return a ? function (b) {
            return a.get.call(b)
        } : null
    }(), uc = function () {
        function a() {
        }

        var b = !1, c = {
            get capture() {
                b = !0;
                return !1
            }
        };
        window.addEventListener("test", a, c);
        window.removeEventListener("test", a, c);
        return b
    }();

    function vc(a) {
        if (a && "object" === typeof a) {
            var b = !!a.capture;
            var c = !!a.once;
            var d = !!a.passive;
            var e = a.O
        } else b = !!a, d = c = !1;
        return {Ga: e, capture: b, once: c, passive: d, Fa: uc ? a : b}
    }

    var wc = {
        blur: !0,
        focus: !0,
        focusin: !0,
        focusout: !0,
        click: !0,
        dblclick: !0,
        mousedown: !0,
        mouseenter: !0,
        mouseleave: !0,
        mousemove: !0,
        mouseout: !0,
        mouseover: !0,
        mouseup: !0,
        wheel: !0,
        beforeinput: !0,
        input: !0,
        keydown: !0,
        keyup: !0,
        compositionstart: !0,
        compositionupdate: !0,
        compositionend: !0,
        touchstart: !0,
        touchend: !0,
        touchmove: !0,
        touchcancel: !0,
        pointerover: !0,
        pointerenter: !0,
        pointerdown: !0,
        pointermove: !0,
        pointerup: !0,
        pointercancel: !0,
        pointerout: !0,
        pointerleave: !0,
        gotpointercapture: !0,
        lostpointercapture: !0,
        dragstart: !0,
        drag: !0,
        dragenter: !0,
        dragleave: !0,
        dragover: !0,
        drop: !0,
        dragend: !0,
        DOMActivate: !0,
        DOMFocusIn: !0,
        DOMFocusOut: !0,
        keypress: !0
    }, xc = {
        DOMAttrModified: !0,
        DOMAttributeNameChanged: !0,
        DOMCharacterDataModified: !0,
        DOMElementNameChanged: !0,
        DOMNodeInserted: !0,
        DOMNodeInsertedIntoDocument: !0,
        DOMNodeRemoved: !0,
        DOMNodeRemovedFromDocument: !0,
        DOMSubtreeModified: !0
    };

    function yc(a) {
        return a instanceof Node ? a.__shady_getRootNode() : a
    }

    function zc(a, b) {
        var c = [], d = a;
        for (a = yc(a); d;) c.push(d), d.__shady_assignedSlot ? d = d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d = d.host : d = d.__shady_parentNode;
        c[c.length - 1] === document && c.push(window);
        return c
    }

    function Ac(a) {
        a.__composedPath || (a.__composedPath = zc(a.target, !0));
        return a.__composedPath
    }

    function Bc(a, b) {
        if (!O) return a;
        a = zc(a, !0);
        for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = yc(d), f !== e && (g = a.indexOf(f), e = f), !O(f) || -1 < g) return d
    }

    function Cc(a) {
        function b(c, d) {
            c = new a(c, d);
            c.__composed = d && !!d.composed;
            return c
        }

        b.__proto__ = a;
        b.prototype = a.prototype;
        return b
    }

    var Dc = {focus: !0, blur: !0};

    function Ec(a) {
        return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget
    }

    function Fc(a, b, c) {
        if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!Ec(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++) ;
    }

    function Gc(a) {
        var b = a.composedPath();
        Object.defineProperty(a, "currentTarget", {
            get: function () {
                return d
            }, configurable: !0
        });
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c];
            Fc(a, d, "capture");
            if (a.ma) return
        }
        Object.defineProperty(a, "eventPhase", {
            get: function () {
                return Event.AT_TARGET
            }
        });
        var e;
        for (c = 0; c < b.length; c++) {
            d = b[c];
            var f = L(d);
            f = f && f.root;
            if (0 === c || f && f === e) if (Fc(a, d, "bubble"), d !== window && (e = d.__shady_getRootNode()), a.ma) break
        }
    }

    function Hc(a, b, c, d, e, f) {
        for (var g = 0; g < a.length; g++) {
            var h = a[g], k = h.type, l = h.capture, m = h.once, q = h.passive;
            if (b === h.node && c === k && d === l && e === m && f === q) return g
        }
        return -1
    }

    function Ic(a) {
        Lb();
        return this.__shady_native_dispatchEvent(a)
    }

    function Jc(a, b, c) {
        var d = vc(c), e = d.capture, f = d.once, g = d.passive, h = d.Ga;
        d = d.Fa;
        if (b) {
            var k = typeof b;
            if ("function" === k || "object" === k) if ("object" !== k || b.handleEvent && "function" === typeof b.handleEvent) {
                if (xc[a]) return this.__shady_native_addEventListener(a, b, d);
                var l = h || this;
                if (h = b[sc]) {
                    if (-1 < Hc(h, l, a, e, f, g)) return
                } else b[sc] = [];
                h = function (m) {
                    f && this.__shady_removeEventListener(a, b, c);
                    m.__target || Kc(m);
                    if (l !== this) {
                        var q = Object.getOwnPropertyDescriptor(m, "currentTarget");
                        Object.defineProperty(m, "currentTarget",
                            {
                                get: function () {
                                    return l
                                }, configurable: !0
                            })
                    }
                    m.__previousCurrentTarget = m.currentTarget;
                    if (!O(l) && "slot" !== l.localName || -1 != m.composedPath().indexOf(l)) if (m.composed || -1 < m.composedPath().indexOf(l)) if (Ec(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation(); else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === l || l instanceof Window) {
                        var H = "function" === k ? b.call(l, m) : b.handleEvent && b.handleEvent(m);
                        l !== this && (q ? (Object.defineProperty(m, "currentTarget",
                            q), q = null) : delete m.currentTarget);
                        return H
                    }
                };
                b[sc].push({node: l, type: a, capture: e, once: f, passive: g, lb: h});
                Dc[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || {
                    capture: [],
                    bubble: []
                }, this.__handlers[a][e ? "capture" : "bubble"].push(h)) : this.__shady_native_addEventListener(a, h, d)
            }
        }
    }

    function Lc(a, b, c) {
        if (b) {
            var d = vc(c);
            c = d.capture;
            var e = d.once, f = d.passive, g = d.Ga;
            d = d.Fa;
            if (xc[a]) return this.__shady_native_removeEventListener(a, b, d);
            var h = g || this;
            g = void 0;
            var k = null;
            try {
                k = b[sc]
            } catch (l) {
            }
            k && (e = Hc(k, h, a, c, e, f), -1 < e && (g = k.splice(e, 1)[0].lb, k.length || (b[sc] = void 0)));
            this.__shady_native_removeEventListener(a, g || b, d);
            g && Dc[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1))
        }
    }

    function Mc() {
        for (var a in Dc) window.__shady_native_addEventListener(a, function (b) {
            b.__target || (Kc(b), Gc(b))
        }, !0)
    }

    var Nc = Q({
        get composed() {
            void 0 === this.__composed && (tc ? this.__composed = "focusin" === this.type || "focusout" === this.type || tc(this) : !1 !== this.isTrusted && (this.__composed = wc[this.type]));
            return this.__composed || !1
        }, composedPath: function () {
            this.__composedPath || (this.__composedPath = zc(this.__target, this.composed));
            return this.__composedPath
        }, get target() {
            return Bc(this.currentTarget || this.__previousCurrentTarget, this.composedPath())
        }, get relatedTarget() {
            if (!this.__relatedTarget) return null;
            this.__relatedTargetComposedPath ||
            (this.__relatedTargetComposedPath = zc(this.__relatedTarget, !0));
            return Bc(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath)
        }, stopPropagation: function () {
            Event.prototype.stopPropagation.call(this);
            this.ma = !0
        }, stopImmediatePropagation: function () {
            Event.prototype.stopImmediatePropagation.call(this);
            this.ma = this.__immediatePropagationStopped = !0
        }
    });

    function Kc(a) {
        a.__target = a.target;
        a.__relatedTarget = a.relatedTarget;
        if (N.B) {
            var b = Object.getPrototypeOf(a);
            if (!b.hasOwnProperty("__shady_patchedProto")) {
                var c = Object.create(b);
                c.__shady_sourceProto = b;
                P(c, Nc);
                b.__shady_patchedProto = c
            }
            a.__proto__ = b.__shady_patchedProto
        } else P(a, Nc)
    }

    var Oc = Cc(Event), Pc = Cc(CustomEvent), Qc = Cc(MouseEvent);

    function Rc() {
        if (!tc && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
            var a = function () {
                var b = new MouseEvent("click", {bubbles: !0, cancelable: !0, composed: !0});
                this.__shady_dispatchEvent(b)
            };
            Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a)
        }
    }

    var Sc = Object.getOwnPropertyNames(Element.prototype).filter(function (a) {
        return "on" === a.substring(0, 2)
    }), Tc = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function (a) {
        return "on" === a.substring(0, 2)
    });

    function Uc(a) {
        return {
            set: function (b) {
                var c = B(this), d = a.substring(2);
                c.N || (c.N = {});
                c.N[a] && this.removeEventListener(d, c.N[a]);
                this.__shady_addEventListener(d, b);
                c.N[a] = b
            }, get: function () {
                var b = L(this);
                return b && b.N && b.N[a]
            }, configurable: !0
        }
    };

    function Vc(a, b) {
        return {index: a, aa: [], ha: b}
    }

    function Wc(a, b, c, d) {
        var e = 0, f = 0, g = 0, h = 0, k = Math.min(b - e, d - f);
        if (0 == e && 0 == f) a:{
            for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;
            g = k
        }
        if (b == a.length && d == c.length) {
            h = a.length;
            for (var l = c.length, m = 0; m < k - g && Xc(a[--h], c[--l]);) m++;
            h = m
        }
        e += g;
        f += g;
        b -= h;
        d -= h;
        if (0 == b - e && 0 == d - f) return [];
        if (e == b) {
            for (b = Vc(e, 0); f < d;) b.aa.push(c[f++]);
            return [b]
        }
        if (f == d) return [Vc(e, b - e)];
        k = e;
        g = f;
        d = d - g + 1;
        h = b - k + 1;
        b = Array(d);
        for (l = 0; l < d; l++) b[l] = Array(h), b[l][0] = l;
        for (l = 0; l < h; l++) b[0][l] = l;
        for (l = 1; l < d; l++) for (m = 1; m < h; m++) if (a[k + m - 1] === c[g + l - 1]) b[l][m] =
            b[l - 1][m - 1]; else {
            var q = b[l - 1][m] + 1, H = b[l][m - 1] + 1;
            b[l][m] = q < H ? q : H
        }
        k = b.length - 1;
        g = b[0].length - 1;
        d = b[k][g];
        for (a = []; 0 < k || 0 < g;) 0 == k ? (a.push(2), g--) : 0 == g ? (a.push(3), k--) : (h = b[k - 1][g - 1], l = b[k - 1][g], m = b[k][g - 1], q = l < m ? l < h ? l : h : m < h ? m : h, q == h ? (h == d ? a.push(0) : (a.push(1), d = h), k--, g--) : q == l ? (a.push(3), k--, d = l) : (a.push(2), g--, d = m));
        a.reverse();
        b = void 0;
        k = [];
        for (g = 0; g < a.length; g++) switch (a[g]) {
            case 0:
                b && (k.push(b), b = void 0);
                e++;
                f++;
                break;
            case 1:
                b || (b = Vc(e, 0));
                b.ha++;
                e++;
                b.aa.push(c[f]);
                f++;
                break;
            case 2:
                b || (b = Vc(e,
                    0));
                b.ha++;
                e++;
                break;
            case 3:
                b || (b = Vc(e, 0)), b.aa.push(c[f]), f++
        }
        b && k.push(b);
        return k
    }

    function Xc(a, b) {
        return a === b
    };var Yc = Q({dispatchEvent: Ic, addEventListener: Jc, removeEventListener: Lc});
    var Zc = null;

    function $c() {
        Zc || (Zc = window.ShadyCSS && window.ShadyCSS.ScopingShim);
        return Zc || null
    }

    function ad(a, b, c) {
        var d = $c();
        return d && "class" === b ? (d.setElementClass(a, c), !0) : !1
    }

    function bd(a, b) {
        var c = $c();
        c && c.unscopeNode(a, b)
    }

    function cd(a, b) {
        var c = $c();
        if (!c) return !0;
        if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            c = !0;
            for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && cd(a, b);
            return c
        }
        return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b
    }

    function dd(a) {
        if (a.nodeType !== Node.ELEMENT_NODE) return "";
        var b = $c();
        return b ? b.currentScopeForNode(a) : ""
    }

    function ed(a, b) {
        if (a) for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) a.nodeType === Node.ELEMENT_NODE && ed(a, b)
    };var fd = window.document, gd = N.la, hd = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
        id = hd && hd.get;

    function jd(a) {
        for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b)
    }

    function kd(a) {
        var b = L(a);
        if (b && void 0 !== b.ka) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) kd(b);
        if (a = L(a)) a.ka = void 0
    }

    function ld(a) {
        var b = a;
        if (a && "slot" === a.localName) {
            var c = L(a);
            (c = c && c.V) && (b = c.length ? c[0] : ld(a.__shady_nextSibling))
        }
        return b
    }

    function md(a, b, c) {
        if (a = (a = L(a)) && a.Z) {
            if (b) if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (var d = 0, e = b.childNodes.length; d < e; d++) a.addedNodes.push(b.childNodes[d]); else a.addedNodes.push(b);
            c && a.removedNodes.push(c);
            Nb(a)
        }
    }

    var td = Q({
        get parentNode() {
            var a = L(this);
            a = a && a.parentNode;
            return void 0 !== a ? a : this.__shady_native_parentNode
        }, get firstChild() {
            var a = L(this);
            a = a && a.firstChild;
            return void 0 !== a ? a : this.__shady_native_firstChild
        }, get lastChild() {
            var a = L(this);
            a = a && a.lastChild;
            return void 0 !== a ? a : this.__shady_native_lastChild
        }, get nextSibling() {
            var a = L(this);
            a = a && a.nextSibling;
            return void 0 !== a ? a : this.__shady_native_nextSibling
        }, get previousSibling() {
            var a = L(this);
            a = a && a.previousSibling;
            return void 0 !== a ? a : this.__shady_native_previousSibling
        },
        get childNodes() {
            if (rb(this)) {
                var a = L(this);
                if (!a.childNodes) {
                    a.childNodes = [];
                    for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b)
                }
                var c = a.childNodes
            } else c = this.__shady_native_childNodes;
            c.item = function (d) {
                return c[d]
            };
            return c
        }, get parentElement() {
            var a = L(this);
            (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
            return void 0 !== a ? a : this.__shady_native_parentElement
        }, get isConnected() {
            if (id && id.call(this)) return !0;
            if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
            var a = this.ownerDocument;
            if (Ab) {
                if (a.__shady_native_contains(this)) return !0
            } else if (a.documentElement && a.documentElement.__shady_native_contains(this)) return !0;
            for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (O(a) ? a.host : void 0);
            return !!(a && a instanceof Document)
        }, get textContent() {
            if (rb(this)) {
                for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);
                return a.join("")
            }
            return this.__shady_native_textContent
        }, set textContent(a) {
            if ("undefined" ===
                typeof a || null === a) a = "";
            switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                    if (!rb(this) && N.B) {
                        var b = this.__shady_firstChild;
                        (b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && jd(this);
                        this.__shady_native_textContent = a
                    } else jd(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));
                    break;
                default:
                    this.nodeValue = a
            }
        }, insertBefore: function (a, b) {
            if (this.ownerDocument !== fd && a.ownerDocument !== fd) return this.__shady_native_insertBefore(a,
                b), a;
            if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
            if (b) {
                var c = L(b);
                c = c && c.parentNode;
                if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
            }
            if (b === a) return a;
            md(this, a);
            var d = [], e = (c = nd(this)) ? c.host.localName : dd(this), f = a.__shady_parentNode;
            if (f) {
                var g = dd(a);
                var h = !!c || !nd(a) ||
                    gd && void 0 !== this.__noInsertionPoint;
                f.__shady_removeChild(a, h)
            }
            f = !0;
            var k = (!gd || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !cd(a, e),
                l = c && !a.__noInsertionPoint && (!gd || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
            if (l || k) k && (g = g || dd(a)), ed(a, function (m) {
                l && "slot" === m.localName && d.push(m);
                if (k) {
                    var q = g;
                    $c() && (q && bd(m, q), (q = $c()) && q.scopeNode(m, e))
                }
            });
            d.length && (od(c), c.c.push.apply(c.c, d instanceof Array ? d : da(ca(d))), pd(c));
            rb(this) && (qd(a, this, b), h = L(this), h.root ? (f = !1, sb(this) &&
            pd(h.root)) : c && "slot" === this.localName && (f = !1, pd(c)));
            f ? (c = O(this) ? this.host : this, b ? (b = ld(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);
            return a
        }, appendChild: function (a) {
            if (this != a || !O(a)) return this.__shady_insertBefore(a)
        }, removeChild: function (a, b) {
            b = void 0 === b ? !1 : b;
            if (this.ownerDocument !== fd) return this.__shady_native_removeChild(a);
            if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " +
                a);
            md(this, null, a);
            var c = nd(a), d = c && rd(c, a), e = L(this);
            if (rb(this) && (sd(a, this), sb(this))) {
                pd(e.root);
                var f = !0
            }
            if ($c() && !b && c && a.nodeType !== Node.TEXT_NODE) {
                var g = dd(a);
                ed(a, function (h) {
                    bd(h, g)
                })
            }
            kd(a);
            c && ((b = "slot" === this.localName) && (f = !0), (d || b) && pd(c));
            f || (f = O(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));
            return a
        }, replaceChild: function (a, b) {
            this.__shady_insertBefore(a, b);
            this.__shady_removeChild(b);
            return a
        }, cloneNode: function (a) {
            if ("template" ==
                this.localName) return this.__shady_native_cloneNode(a);
            var b = this.__shady_native_cloneNode(!1);
            if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
                a = this.__shady_firstChild;
                for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c)
            }
            return b
        }, getRootNode: function (a) {
            if (this && this.nodeType) {
                var b = B(this), c = b.ka;
                void 0 === c && (O(this) ? (c = this, b.ka = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.ka = c)));
                return c
            }
        },
        contains: function (a) {
            return Bb(this, a)
        }
    });
    var wd = Q({
        get assignedSlot() {
            var a = this.__shady_parentNode;
            (a = a && a.__shady_shadowRoot) && vd(a);
            return (a = L(this)) && a.assignedSlot || null
        }
    });

    function xd(a, b, c) {
        var d = [];
        yd(a, b, c, d);
        return d
    }

    function yd(a, b, c, d) {
        for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
            var e;
            if (e = a.nodeType === Node.ELEMENT_NODE) {
                e = a;
                var f = b, g = c, h = d, k = f(e);
                k && h.push(e);
                g && g(k) ? e = k : (yd(e, f, g, h), e = void 0)
            }
            if (e) break
        }
    }

    var zd = Q({
        get firstElementChild() {
            var a = L(this);
            if (a && void 0 !== a.firstChild) {
                for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;
                return a
            }
            return this.__shady_native_firstElementChild
        }, get lastElementChild() {
            var a = L(this);
            if (a && void 0 !== a.lastChild) {
                for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;
                return a
            }
            return this.__shady_native_lastElementChild
        }, get children() {
            return rb(this) ? Cb(Array.prototype.filter.call(Eb(this),
                function (a) {
                    return a.nodeType === Node.ELEMENT_NODE
                })) : this.__shady_native_children
        }, get childElementCount() {
            var a = this.__shady_children;
            return a ? a.length : 0
        }
    }), Ad = Q({
        querySelector: function (a) {
            return xd(this, function (b) {
                return vb.call(b, a)
            }, function (b) {
                return !!b
            })[0] || null
        }, querySelectorAll: function (a, b) {
            if (b) {
                b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));
                var c = this.__shady_getRootNode();
                return Cb(b.filter(function (d) {
                    return d.__shady_getRootNode() == c
                }))
            }
            return Cb(xd(this, function (d) {
                return vb.call(d,
                    a)
            }))
        }
    }), Bd = N.la && !N.D ? Hb({}, zd) : zd;
    Hb(zd, Ad);
    var Cd = window.document;

    function Dd(a, b) {
        if ("slot" === b) a = a.__shady_parentNode, sb(a) && pd(L(a).root); else if ("slot" === a.localName && "name" === b && (b = nd(a))) {
            if (b.a) {
                Ed(b);
                var c = a.La, d = Fd(a);
                if (d !== c) {
                    c = b.b[c];
                    var e = c.indexOf(a);
                    0 <= e && c.splice(e, 1);
                    c = b.b[d] || (b.b[d] = []);
                    c.push(a);
                    1 < c.length && (b.b[d] = Gd(c))
                }
            }
            pd(b)
        }
    }

    var Hd = Q({
        get previousElementSibling() {
            var a = L(this);
            if (a && void 0 !== a.previousSibling) {
                for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;
                return a
            }
            return this.__shady_native_previousElementSibling
        }, get nextElementSibling() {
            var a = L(this);
            if (a && void 0 !== a.nextSibling) {
                for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;
                return a
            }
            return this.__shady_native_nextElementSibling
        }, get slot() {
            return this.getAttribute("slot")
        },
        set slot(a) {
            this.__shady_setAttribute("slot", a)
        }, get className() {
            return this.getAttribute("class") || ""
        }, set className(a) {
            this.__shady_setAttribute("class", a)
        }, setAttribute: function (a, b) {
            this.ownerDocument !== Cd ? this.__shady_native_setAttribute(a, b) : ad(this, a, b) || (this.__shady_native_setAttribute(a, b), Dd(this, a))
        }, removeAttribute: function (a) {
            this.ownerDocument !== Cd ? this.__shady_native_removeAttribute(a) : ad(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a),
                Dd(this, a))
        }
    });
    N.la || Sc.forEach(function (a) {
        Hd[a] = Uc(a)
    });
    var Md = Q({
        attachShadow: function (a) {
            if (!this) throw Error("Must provide a host.");
            if (!a) throw Error("Not enough arguments.");
            if (a.shadyUpgradeFragment && !N.Ia) {
                var b = a.shadyUpgradeFragment;
                b.__proto__ = ShadowRoot.prototype;
                Id(b, this, a);
                Jd(b, b);
                a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");
                b.__noInsertionPoint = void 0;
                if (a && a.length) {
                    var c = b;
                    od(c);
                    c.c.push.apply(c.c, a instanceof Array ? a : da(ca(a)));
                    pd(b)
                }
                b.host.__shady_native_appendChild(b)
            } else b = new Kd(Ld, this, a);
            return this.__CE_shadowRoot = b
        },
        get shadowRoot() {
            var a = L(this);
            return a && a.bb || null
        }
    });
    Hb(Hd, Md);
    var Nd = document.implementation.createHTMLDocument("inert"), Od = Q({
        get innerHTML() {
            return rb(this) ? Zb("template" === this.localName ? this.content : this, Eb) : this.__shady_native_innerHTML
        }, set innerHTML(a) {
            if ("template" === this.localName) this.__shady_native_innerHTML = a; else {
                jd(this);
                var b = this.localName || "div";
                b = this.namespaceURI && this.namespaceURI !== Nd.namespaceURI ? Nd.createElementNS(this.namespaceURI, b) : Nd.createElement(b);
                for (N.B ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a)
            }
        }
    });
    var Pd = Q({
        blur: function () {
            var a = L(this);
            (a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur()
        }
    });
    N.la || Tc.forEach(function (a) {
        Pd[a] = Uc(a)
    });
    var Qd = Q({
        assignedNodes: function (a) {
            if ("slot" === this.localName) {
                var b = this.__shady_getRootNode();
                b && O(b) && vd(b);
                return (b = L(this)) ? (a && a.flatten ? b.V : b.assignedNodes) || [] : []
            }
        }, addEventListener: function (a, b, c) {
            if ("slot" !== this.localName || "slotchange" === a) Jc.call(this, a, b, c); else {
                "object" !== typeof c && (c = {capture: !!c});
                var d = this.__shady_parentNode;
                if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                c.O = this;
                d.__shady_addEventListener(a, b, c)
            }
        }, removeEventListener: function (a,
                                          b, c) {
            if ("slot" !== this.localName || "slotchange" === a) Lc.call(this, a, b, c); else {
                "object" !== typeof c && (c = {capture: !!c});
                var d = this.__shady_parentNode;
                if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                c.O = this;
                d.__shady_removeEventListener(a, b, c)
            }
        }
    });
    var Rd = Q({
        getElementById: function (a) {
            return "" === a ? null : xd(this, function (b) {
                return b.id == a
            }, function (b) {
                return !!b
            })[0] || null
        }
    });
    var Sd = Q({
        get activeElement() {
            var a = N.B ? document.__shady_native_activeElement : document.activeElement;
            if (!a || !a.nodeType) return null;
            var b = !!O(this);
            if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;
            for (b = nd(a); b && b !== this;) a = b.host, b = nd(a);
            return this === document ? b ? null : a : b === this ? a : null
        }
    });
    var Td = window.document, Ud = Q({
        importNode: function (a, b) {
            if (a.ownerDocument !== Td || "template" === a.localName) return this.__shady_native_importNode(a, b);
            var c = this.__shady_native_importNode(a, !1);
            if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);
            return c
        }
    });
    var Vd = Q({dispatchEvent: Ic, addEventListener: Jc.bind(window), removeEventListener: Lc.bind(window)});
    var Wd = {};
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Wd.parentElement = td.parentElement);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Wd.contains = td.contains);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Wd.children = zd.children);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Wd.innerHTML = Od.innerHTML);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Wd.className = Hd.className);
    var Xd = {
        EventTarget: [Yc],
        Node: [td, window.EventTarget ? null : Yc],
        Text: [wd],
        Comment: [wd],
        CDATASection: [wd],
        ProcessingInstruction: [wd],
        Element: [Hd, zd, wd, !N.B || "innerHTML" in Element.prototype ? Od : null, window.HTMLSlotElement ? null : Qd],
        HTMLElement: [Pd, Wd],
        HTMLSlotElement: [Qd],
        DocumentFragment: [Bd, Rd],
        Document: [Ud, Bd, Rd, Sd],
        Window: [Vd]
    }, Yd = N.B ? null : ["innerHTML", "textContent"];

    function Zd(a, b, c, d) {
        b.forEach(function (e) {
            return a && e && P(a, e, c, d)
        })
    }

    function $d(a) {
        var b = a ? null : Yd, c;
        for (c in Xd) Zd(window[c] && window[c].prototype, Xd[c], a, b)
    }

    ["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (a) {
        var b = window[a], c = Object.create(b.prototype);
        c.__shady_protoIsPatched = !0;
        Zd(c, Xd.EventTarget);
        Zd(c, Xd.Node);
        Xd[a] && Zd(c, Xd[a]);
        b.prototype.__shady_patchedProto = c
    });

    function ae(a) {
        a.__shady_protoIsPatched = !0;
        Zd(a, Xd.EventTarget);
        Zd(a, Xd.Node);
        Zd(a, Xd.Element);
        Zd(a, Xd.HTMLElement);
        Zd(a, Xd.HTMLSlotElement);
        return a
    };var be = N.ua, ce = N.B;

    function de(a, b) {
        if (be && !a.__shady_protoIsPatched && !O(a)) {
            var c = Object.getPrototypeOf(a), d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;
            d || (d = Object.create(c), ae(d), c.__shady_patchedProto = d);
            Object.setPrototypeOf(a, d)
        }
        ce || (1 === b ? qc(a) : 2 === b && rc(a))
    }

    function ee(a, b, c, d) {
        de(a, 1);
        d = d || null;
        var e = B(a), f = d ? B(d) : null;
        e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;
        if (f = L(e.previousSibling)) f.nextSibling = a;
        if (f = L(e.nextSibling = d)) f.previousSibling = a;
        e.parentNode = b;
        d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));
        c.childNodes = null
    }

    function qd(a, b, c) {
        de(b, 2);
        var d = B(b);
        void 0 !== d.firstChild && (d.childNodes = null);
        if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) ee(a, b, d, c); else ee(a, b, d, c)
    }

    function sd(a, b) {
        var c = B(a);
        b = B(b);
        a === b.firstChild && (b.firstChild = c.nextSibling);
        a === b.lastChild && (b.lastChild = c.previousSibling);
        a = c.previousSibling;
        var d = c.nextSibling;
        a && (B(a).nextSibling = d);
        d && (B(d).previousSibling = a);
        c.parentNode = c.previousSibling = c.nextSibling = void 0;
        void 0 !== b.childNodes && (b.childNodes = null)
    }

    function Jd(a, b) {
        var c = B(a);
        if (b || void 0 === c.firstChild) {
            c.childNodes = null;
            var d = c.firstChild = a.__shady_native_firstChild;
            c.lastChild = a.__shady_native_lastChild;
            de(a, 2);
            c = d;
            for (d = void 0; c; c = c.__shady_native_nextSibling) {
                var e = B(c);
                e.parentNode = b || a;
                e.nextSibling = c.__shady_native_nextSibling;
                e.previousSibling = d || null;
                d = c;
                de(c, 1)
            }
        }
    };var fe = Q({
        addEventListener: function (a, b, c) {
            "object" !== typeof c && (c = {capture: !!c});
            c.O = c.O || this;
            this.host.__shady_addEventListener(a, b, c)
        }, removeEventListener: function (a, b, c) {
            "object" !== typeof c && (c = {capture: !!c});
            c.O = c.O || this;
            this.host.__shady_removeEventListener(a, b, c)
        }
    });

    function ge(a, b) {
        P(a, fe, b);
        P(a, Sd, b);
        P(a, Od, b);
        P(a, zd, b);
        N.D && !b ? (P(a, td, b), P(a, Rd, b)) : N.B || (P(a, nc), P(a, lc), P(a, mc))
    };var Ld = {}, he = N.deferConnectionCallbacks && "loading" === document.readyState, ie;

    function je(a) {
        var b = [];
        do b.unshift(a); while (a = a.__shady_parentNode);
        return b
    }

    function Kd(a, b, c) {
        if (a !== Ld) throw new TypeError("Illegal constructor");
        this.a = null;
        Id(this, b, c)
    }

    function Id(a, b, c) {
        a.host = b;
        a.mode = c && c.mode;
        Jd(a.host);
        b = B(a.host);
        b.root = a;
        b.bb = "closed" !== a.mode ? a : null;
        b = B(a);
        b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;
        if (N.preferPerformance) for (; b = a.host.__shady_native_firstChild;) a.host.__shady_native_removeChild(b); else pd(a)
    }

    function pd(a) {
        a.T || (a.T = !0, Kb(function () {
            return vd(a)
        }))
    }

    function vd(a) {
        var b;
        if (b = a.T) {
            for (var c; a;) a:{
                a.T && (c = a), b = a;
                a = b.host.__shady_getRootNode();
                if (O(a) && (b = L(b.host)) && 0 < b.ca) break a;
                a = void 0
            }
            b = c
        }
        (c = b) && c._renderSelf()
    }

    Kd.prototype._renderSelf = function () {
        var a = he;
        he = !0;
        this.T = !1;
        if (this.a) {
            Ed(this);
            for (var b = 0, c; b < this.a.length; b++) {
                c = this.a[b];
                var d = L(c), e = d.assignedNodes;
                d.assignedNodes = [];
                d.V = [];
                if (d.Ba = e) for (d = 0; d < e.length; d++) {
                    var f = L(e[d]);
                    f.oa = f.assignedSlot;
                    f.assignedSlot === c && (f.assignedSlot = null)
                }
            }
            for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) ke(this, b);
            for (b = 0; b < this.a.length; b++) {
                c = this.a[b];
                e = L(c);
                if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) ke(this,
                    d, c);
                (d = (d = L(c.__shady_parentNode)) && d.root) && (tb(d) || d.T) && d._renderSelf();
                le(this, e.V, e.assignedNodes);
                if (d = e.Ba) {
                    for (f = 0; f < d.length; f++) L(d[f]).oa = null;
                    e.Ba = null;
                    d.length > e.assignedNodes.length && (e.ra = !0)
                }
                e.ra && (e.ra = !1, me(this, c))
            }
            c = this.a;
            b = [];
            for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = L(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);
            for (c = 0; c < b.length; c++) {
                f = b[c];
                e = f === this ? this.host : f;
                d = [];
                for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) if ("slot" == f.localName) for (var g = L(f).V, h = 0; h <
                g.length; h++) d.push(g[h]); else d.push(f);
                f = Db(e);
                g = Wc(d, d.length, f, f.length);
                for (var k = h = 0, l = void 0; h < g.length && (l = g[h]); h++) {
                    for (var m = 0, q = void 0; m < l.aa.length && (q = l.aa[m]); m++) q.__shady_native_parentNode === e && e.__shady_native_removeChild(q), f.splice(l.index + k, 1);
                    k -= l.ha
                }
                k = 0;
                for (l = void 0; k < g.length && (l = g[k]); k++) for (h = f[l.index], m = l.index; m < l.index + l.ha; m++) q = d[m], e.__shady_native_insertBefore(q, h), f.splice(m, 0, q)
            }
        }
        if (!N.preferPerformance && !this.Aa) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) c =
            L(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);
        this.Aa = !0;
        he = a;
        ie && ie()
    };

    function ke(a, b, c) {
        var d = B(b), e = d.oa;
        d.oa = null;
        c || (c = (a = a.b[b.__shady_slot || "__catchall"]) && a[0]);
        c ? (B(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;
        e !== d.assignedSlot && d.assignedSlot && (B(d.assignedSlot).ra = !0)
    }

    function le(a, b, c) {
        for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
            var f = L(e).assignedNodes;
            f && f.length && le(a, b, f)
        } else b.push(c[d])
    }

    function me(a, b) {
        b.__shady_native_dispatchEvent(new Event("slotchange"));
        b = L(b);
        b.assignedSlot && me(a, b.assignedSlot)
    }

    function od(a) {
        a.c = a.c || [];
        a.a = a.a || [];
        a.b = a.b || {}
    }

    function Ed(a) {
        if (a.c && a.c.length) {
            for (var b = a.c, c, d = 0; d < b.length; d++) {
                var e = b[d];
                Jd(e);
                var f = e.__shady_parentNode;
                Jd(f);
                f = L(f);
                f.ca = (f.ca || 0) + 1;
                f = Fd(e);
                a.b[f] ? (c = c || {}, c[f] = !0, a.b[f].push(e)) : a.b[f] = [e];
                a.a.push(e)
            }
            if (c) for (var g in c) a.b[g] = Gd(a.b[g]);
            a.c = []
        }
    }

    function Fd(a) {
        var b = a.name || a.getAttribute("name") || "__catchall";
        return a.La = b
    }

    function Gd(a) {
        return a.sort(function (b, c) {
            b = je(b);
            for (var d = je(c), e = 0; e < b.length; e++) {
                c = b[e];
                var f = d[e];
                if (c !== f) return b = Eb(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f)
            }
        })
    }

    function rd(a, b) {
        if (a.a) {
            Ed(a);
            var c = a.b, d;
            for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
                var g = e[f];
                if (Bb(b, g)) {
                    e.splice(f, 1);
                    var h = a.a.indexOf(g);
                    0 <= h && (a.a.splice(h, 1), (h = L(g.__shady_parentNode)) && h.ca && h.ca--);
                    f--;
                    g = L(g);
                    if (h = g.V) for (var k = 0; k < h.length; k++) {
                        var l = h[k], m = l.__shady_native_parentNode;
                        m && m.__shady_native_removeChild(l)
                    }
                    g.V = [];
                    g.assignedNodes = [];
                    h = !0
                }
            }
            return h
        }
    }

    function tb(a) {
        Ed(a);
        return !(!a.a || !a.a.length)
    }

    (function (a) {
        a.__proto__ = DocumentFragment.prototype;
        ge(a, "__shady_");
        ge(a);
        Object.defineProperties(a, {
            nodeType: {value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0},
            nodeName: {value: "#document-fragment", configurable: !0},
            nodeValue: {value: null, configurable: !0}
        });
        ["localName", "namespaceURI", "prefix"].forEach(function (b) {
            Object.defineProperty(a, b, {value: void 0, configurable: !0})
        });
        ["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
            Object.defineProperty(a, b, {
                get: function () {
                    return this.host[b]
                },
                configurable: !0
            })
        })
    })(Kd.prototype);
    if (window.customElements && window.customElements.define && N.sa && !N.preferPerformance) {
        var ne = new Map;
        ie = function () {
            var a = [];
            ne.forEach(function (d, e) {
                a.push([e, d])
            });
            ne.clear();
            for (var b = 0; b < a.length; b++) {
                var c = a[b][0];
                a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback()
            }
        };
        he && document.addEventListener("readystatechange", function () {
            he = !1;
            ie()
        }, {once: !0});
        var oe = function (a, b, c) {
            var d = 0, e = "__isConnected" + d++;
            if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback =
                function () {
                    he ? ne.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this))
                }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
                he ? this.isConnected || ne.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this))
            };
            return a
        }, pe = window.customElements.define, qe = function (a, b) {
            var c = b.prototype.connectedCallback, d = b.prototype.disconnectedCallback;
            pe.call(window.customElements, a, oe(b, c, d));
            b.prototype.connectedCallback = c;
            b.prototype.disconnectedCallback = d
        };
        window.customElements.define =
            qe;
        Object.defineProperty(window.CustomElementRegistry.prototype, "define", {value: qe, configurable: !0})
    }

    function nd(a) {
        a = a.__shady_getRootNode();
        if (O(a)) return a
    };

    function re(a) {
        this.node = a
    }

    w = re.prototype;
    w.addEventListener = function (a, b, c) {
        return this.node.__shady_addEventListener(a, b, c)
    };
    w.removeEventListener = function (a, b, c) {
        return this.node.__shady_removeEventListener(a, b, c)
    };
    w.appendChild = function (a) {
        return this.node.__shady_appendChild(a)
    };
    w.insertBefore = function (a, b) {
        return this.node.__shady_insertBefore(a, b)
    };
    w.removeChild = function (a) {
        return this.node.__shady_removeChild(a)
    };
    w.replaceChild = function (a, b) {
        return this.node.__shady_replaceChild(a, b)
    };
    w.cloneNode = function (a) {
        return this.node.__shady_cloneNode(a)
    };
    w.getRootNode = function (a) {
        return this.node.__shady_getRootNode(a)
    };
    w.contains = function (a) {
        return this.node.__shady_contains(a)
    };
    w.dispatchEvent = function (a) {
        return this.node.__shady_dispatchEvent(a)
    };
    w.setAttribute = function (a, b) {
        this.node.__shady_setAttribute(a, b)
    };
    w.getAttribute = function (a) {
        return this.node.__shady_native_getAttribute(a)
    };
    w.hasAttribute = function (a) {
        return this.node.__shady_native_hasAttribute(a)
    };
    w.removeAttribute = function (a) {
        this.node.__shady_removeAttribute(a)
    };
    w.attachShadow = function (a) {
        return this.node.__shady_attachShadow(a)
    };
    w.focus = function () {
        this.node.__shady_native_focus()
    };
    w.blur = function () {
        this.node.__shady_blur()
    };
    w.importNode = function (a, b) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b)
    };
    w.getElementById = function (a) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a)
    };
    w.querySelector = function (a) {
        return this.node.__shady_querySelector(a)
    };
    w.querySelectorAll = function (a, b) {
        return this.node.__shady_querySelectorAll(a, b)
    };
    w.assignedNodes = function (a) {
        if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a)
    };
    fa.Object.defineProperties(re.prototype, {
        activeElement: {
            configurable: !0, enumerable: !0, get: function () {
                if (O(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement
            }
        }, _activeElement: {
            configurable: !0, enumerable: !0, get: function () {
                return this.activeElement
            }
        }, host: {
            configurable: !0, enumerable: !0, get: function () {
                if (O(this.node)) return this.node.host
            }
        }, parentNode: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_parentNode
            }
        }, firstChild: {
            configurable: !0,
            enumerable: !0, get: function () {
                return this.node.__shady_firstChild
            }
        }, lastChild: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_lastChild
            }
        }, nextSibling: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_nextSibling
            }
        }, previousSibling: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_previousSibling
            }
        }, childNodes: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_childNodes
            }
        }, parentElement: {
            configurable: !0, enumerable: !0,
            get: function () {
                return this.node.__shady_parentElement
            }
        }, firstElementChild: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_firstElementChild
            }
        }, lastElementChild: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_lastElementChild
            }
        }, nextElementSibling: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_nextElementSibling
            }
        }, previousElementSibling: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_previousElementSibling
            }
        },
        children: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_children
            }
        }, childElementCount: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_childElementCount
            }
        }, shadowRoot: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_shadowRoot
            }
        }, assignedSlot: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_assignedSlot
            }
        }, isConnected: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_isConnected
            }
        }, innerHTML: {
            configurable: !0,
            enumerable: !0, get: function () {
                return this.node.__shady_innerHTML
            }, set: function (a) {
                this.node.__shady_innerHTML = a
            }
        }, textContent: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_textContent
            }, set: function (a) {
                this.node.__shady_textContent = a
            }
        }, slot: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_slot
            }, set: function (a) {
                this.node.__shady_slot = a
            }
        }, className: {
            configurable: !0, enumerable: !0, get: function () {
                return this.node.__shady_className
            }, set: function (a) {
                return this.node.__shady_className =
                    a
            }
        }
    });

    function se(a) {
        Object.defineProperty(re.prototype, a, {
            get: function () {
                return this.node["__shady_" + a]
            }, set: function (b) {
                this.node["__shady_" + a] = b
            }, configurable: !0
        })
    }

    Sc.forEach(function (a) {
        return se(a)
    });
    Tc.forEach(function (a) {
        return se(a)
    });
    var te = new WeakMap;

    function ue(a) {
        if (O(a) || a instanceof re) return a;
        var b = te.get(a);
        b || (b = new re(a), te.set(a, b));
        return b
    };
    if (N.sa) {
        var ve = N.B ? function (a) {
            return a
        } : function (a) {
            rc(a);
            qc(a);
            return a
        }, ShadyDOM = {
            inUse: N.sa,
            patch: ve,
            isShadyRoot: O,
            enqueue: Kb,
            flush: Lb,
            flushInitial: function (a) {
                !a.Aa && a.T && vd(a)
            },
            settings: N,
            filterMutations: Qb,
            observeChildren: Ob,
            unobserveChildren: Pb,
            deferConnectionCallbacks: N.deferConnectionCallbacks,
            preferPerformance: N.preferPerformance,
            handlesDynamicScoping: !0,
            wrap: N.D ? ue : ve,
            wrapIfNeeded: !0 === N.D ? ue : function (a) {
                return a
            },
            Wrapper: re,
            composedPath: Ac,
            noPatch: N.D,
            patchOnDemand: N.ua,
            nativeMethods: ac,
            nativeTree: bc,
            patchElementProto: ae
        };
        window.ShadyDOM = ShadyDOM;
        kc();
        $d("__shady_");
        Object.defineProperty(document, "_activeElement", Sd.activeElement);
        P(Window.prototype, Vd, "__shady_");
        N.D ? N.ua && P(Element.prototype, Md) : ($d(), Rc());
        Mc();
        window.Event = Oc;
        window.CustomEvent = Pc;
        window.MouseEvent = Qc;
        window.ShadowRoot = Kd
    }
    ;/*

 Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
    /*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
    var we = window.Document.prototype.createElement, xe = window.Document.prototype.createElementNS,
        ye = window.Document.prototype.importNode, ze = window.Document.prototype.prepend,
        Ae = window.Document.prototype.append, Be = window.DocumentFragment.prototype.prepend,
        Ce = window.DocumentFragment.prototype.append, De = window.Node.prototype.cloneNode,
        Ee = window.Node.prototype.appendChild, Fe = window.Node.prototype.insertBefore,
        Ge = window.Node.prototype.removeChild, He = window.Node.prototype.replaceChild,
        Ie = Object.getOwnPropertyDescriptor(window.Node.prototype,
            "textContent"), Je = window.Element.prototype.attachShadow,
        Ke = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        Le = window.Element.prototype.getAttribute, Me = window.Element.prototype.setAttribute,
        Ne = window.Element.prototype.removeAttribute, Oe = window.Element.prototype.getAttributeNS,
        Pe = window.Element.prototype.setAttributeNS, Qe = window.Element.prototype.removeAttributeNS,
        Re = window.Element.prototype.insertAdjacentElement, Se = window.Element.prototype.insertAdjacentHTML,
        Te = window.Element.prototype.prepend,
        Ue = window.Element.prototype.append, Ve = window.Element.prototype.before, We = window.Element.prototype.after,
        Xe = window.Element.prototype.replaceWith, Ye = window.Element.prototype.remove, Ze = window.HTMLElement,
        $e = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        af = window.HTMLElement.prototype.insertAdjacentElement, bf = window.HTMLElement.prototype.insertAdjacentHTML;
    var cf = new Set;
    "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (a) {
        return cf.add(a)
    });

    function df(a) {
        var b = cf.has(a);
        a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);
        return !b && a
    }

    var ef = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);

    function T(a) {
        var b = a.isConnected;
        if (void 0 !== b) return b;
        if (ef(a)) return !0;
        for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
        return !(!a || !(a.__CE_isImportDocument || a instanceof Document))
    }

    function ff(a) {
        var b = a.children;
        if (b) return Array.prototype.slice.call(b);
        b = [];
        for (a = a.firstChild; a; a = a.nextSibling) a.nodeType === Node.ELEMENT_NODE && b.push(a);
        return b
    }

    function gf(a, b) {
        for (; b && b !== a && !b.nextSibling;) b = b.parentNode;
        return b && b !== a ? b.nextSibling : null
    }

    function hf(a, b, c) {
        for (var d = a; d;) {
            if (d.nodeType === Node.ELEMENT_NODE) {
                var e = d;
                b(e);
                var f = e.localName;
                if ("link" === f && "import" === e.getAttribute("rel")) {
                    d = e.import;
                    void 0 === c && (c = new Set);
                    if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) hf(d, b, c);
                    d = gf(a, e);
                    continue
                } else if ("template" === f) {
                    d = gf(a, e);
                    continue
                }
                if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) hf(e, b, c)
            }
            d = d.firstChild ? d.firstChild : gf(a, d)
        }
    };

    function jf() {
        var a = !(null === kf || void 0 === kf || !kf.noDocumentConstructionObserver),
            b = !(null === kf || void 0 === kf || !kf.shadyDomFastWalk);
        this.X = [];
        this.a = [];
        this.R = !1;
        this.shadyDomFastWalk = b;
        this.jb = a
    }

    function lf(a, b, c, d) {
        var e = window.ShadyDom;
        if (a.shadyDomFastWalk && e && e.inUse) {
            if (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll) for (a = e.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) c(a[b])
        } else hf(b, c, d)
    }

    function mf(a, b) {
        a.R = !0;
        a.X.push(b)
    }

    function nf(a, b) {
        a.R = !0;
        a.a.push(b)
    }

    function of(a, b) {
        a.R && lf(a, b, function (c) {
            return pf(a, c)
        })
    }

    function pf(a, b) {
        if (a.R && !b.__CE_patched) {
            b.__CE_patched = !0;
            for (var c = 0; c < a.X.length; c++) a.X[c](b);
            for (c = 0; c < a.a.length; c++) a.a[c](b)
        }
    }

    function qf(a, b) {
        var c = [];
        lf(a, b, function (e) {
            return c.push(e)
        });
        for (b = 0; b < c.length; b++) {
            var d = c[b];
            1 === d.__CE_state ? a.connectedCallback(d) : rf(a, d)
        }
    }

    function sf(a, b) {
        var c = [];
        lf(a, b, function (e) {
            return c.push(e)
        });
        for (b = 0; b < c.length; b++) {
            var d = c[b];
            1 === d.__CE_state && a.disconnectedCallback(d)
        }
    }

    function tf(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = c.kb, e = c.upgrade || function (g) {
            return rf(a, g)
        }, f = [];
        lf(a, b, function (g) {
            a.R && pf(a, g);
            if ("link" === g.localName && "import" === g.getAttribute("rel")) {
                var h = g.import;
                h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);
                h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function () {
                    var k = g.import;
                    if (!k.__CE_documentLoadHandled) {
                        k.__CE_documentLoadHandled = !0;
                        var l = new Set;
                        d && (d.forEach(function (m) {
                            return l.add(m)
                        }),
                            l.delete(k));
                        tf(a, k, {kb: l, upgrade: e})
                    }
                })
            } else f.push(g)
        }, d);
        for (b = 0; b < f.length; b++) e(f[b])
    }

    function rf(a, b) {
        try {
            var c = b.ownerDocument, d = c.__CE_registry;
            var e = d && (c.defaultView || c.__CE_isImportDocument) ? uf(d, b.localName) : void 0;
            if (e && void 0 === b.__CE_state) {
                e.constructionStack.push(b);
                try {
                    try {
                        if (new e.constructorFunction !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
                    } finally {
                        e.constructionStack.pop()
                    }
                } catch (k) {
                    throw b.__CE_state = 2, k;
                }
                b.__CE_state = 1;
                b.__CE_definition = e;
                if (e.attributeChangedCallback && b.hasAttributes()) {
                    var f = e.observedAttributes;
                    for (e = 0; e < f.length; e++) {
                        var g = f[e], h = b.getAttribute(g);
                        null !== h && a.attributeChangedCallback(b, g, null, h, null)
                    }
                }
                T(b) && a.connectedCallback(b)
            }
        } catch (k) {
            vf(k)
        }
    }

    jf.prototype.connectedCallback = function (a) {
        var b = a.__CE_definition;
        if (b.connectedCallback) try {
            b.connectedCallback.call(a)
        } catch (c) {
            vf(c)
        }
    };
    jf.prototype.disconnectedCallback = function (a) {
        var b = a.__CE_definition;
        if (b.disconnectedCallback) try {
            b.disconnectedCallback.call(a)
        } catch (c) {
            vf(c)
        }
    };
    jf.prototype.attributeChangedCallback = function (a, b, c, d, e) {
        var f = a.__CE_definition;
        if (f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b)) try {
            f.attributeChangedCallback.call(a, b, c, d, e)
        } catch (g) {
            vf(g)
        }
    };

    function wf(a, b, c, d) {
        var e = b.__CE_registry;
        if (e && (null === d || "http://www.w3.org/1999/xhtml" === d) && (e = uf(e, c))) try {
            var f = new e.constructorFunction;
            if (void 0 === f.__CE_state || void 0 === f.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");
            if ("http://www.w3.org/1999/xhtml" !== f.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");
            if (f.hasAttributes()) throw Error("Failed to construct '" +
                c + "': The constructed element must not have any attributes.");
            if (null !== f.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");
            if (null !== f.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");
            if (f.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");
            if (f.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
            return f
        } catch (g) {
            return vf(g), b = null === d ? we.call(b, c) : xe.call(b, d, c), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, pf(a, b), b
        }
        b = null === d ? we.call(b, c) : xe.call(b, d, c);
        pf(a, b);
        return b
    }

    function vf(a) {
        var b = a.message, c = a.sourceURL || a.fileName || "", d = a.line || a.lineNumber || 0,
            e = a.column || a.columnNumber || 0, f = void 0;
        void 0 === ErrorEvent.prototype.initErrorEvent ? f = new ErrorEvent("error", {
            cancelable: !0,
            message: b,
            filename: c,
            lineno: d,
            colno: e,
            error: a
        }) : (f = document.createEvent("ErrorEvent"), f.initErrorEvent("error", !1, !0, b, c, d), f.preventDefault = function () {
            Object.defineProperty(this, "defaultPrevented", {
                configurable: !0, get: function () {
                    return !0
                }
            })
        });
        void 0 === f.error && Object.defineProperty(f, "error",
            {
                configurable: !0, enumerable: !0, get: function () {
                    return a
                }
            });
        window.dispatchEvent(f);
        f.defaultPrevented || console.error(a)
    };

    function xf() {
        var a = this;
        this.C = void 0;
        this.Ca = new Promise(function (b) {
            a.a = b
        })
    }

    xf.prototype.resolve = function (a) {
        if (this.C) throw Error("Already resolved.");
        this.C = a;
        this.a(a)
    };

    function yf(a) {
        var b = document;
        this.S = void 0;
        this.M = a;
        this.a = b;
        tf(this.M, this.a);
        "loading" === this.a.readyState && (this.S = new MutationObserver(this.b.bind(this)), this.S.observe(this.a, {
            childList: !0,
            subtree: !0
        }))
    }

    function zf(a) {
        a.S && a.S.disconnect()
    }

    yf.prototype.b = function (a) {
        var b = this.a.readyState;
        "interactive" !== b && "complete" !== b || zf(this);
        for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) tf(this.M, c[d])
    };

    function U(a) {
        this.ea = new Map;
        this.fa = new Map;
        this.xa = new Map;
        this.na = !1;
        this.qa = new Map;
        this.da = function (b) {
            return b()
        };
        this.P = !1;
        this.ga = [];
        this.M = a;
        this.ya = a.jb ? new yf(a) : void 0
    }

    w = U.prototype;
    w.$a = function (a, b) {
        var c = this;
        if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
        Af(this, a);
        this.ea.set(a, b);
        this.ga.push(a);
        this.P || (this.P = !0, this.da(function () {
            return Bf(c)
        }))
    };
    w.define = function (a, b) {
        var c = this;
        if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
        Af(this, a);
        Cf(this, a, b);
        this.ga.push(a);
        this.P || (this.P = !0, this.da(function () {
            return Bf(c)
        }))
    };

    function Af(a, b) {
        if (!df(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
        if (uf(a, b)) throw Error("A custom element with name '" + (b + "' has already been defined."));
        if (a.na) throw Error("A custom element is already being defined.");
    }

    function Cf(a, b, c) {
        a.na = !0;
        var d;
        try {
            var e = c.prototype;
            if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
            var f = function (m) {
                var q = e[m];
                if (void 0 !== q && !(q instanceof Function)) throw Error("The '" + m + "' callback must be a function.");
                return q
            };
            var g = f("connectedCallback");
            var h = f("disconnectedCallback");
            var k = f("adoptedCallback");
            var l = (d = f("attributeChangedCallback")) && c.observedAttributes || []
        } catch (m) {
            throw m;
        } finally {
            a.na = !1
        }
        c = {
            localName: b,
            constructorFunction: c,
            connectedCallback: g,
            disconnectedCallback: h,
            adoptedCallback: k,
            attributeChangedCallback: d,
            observedAttributes: l,
            constructionStack: []
        };
        a.fa.set(b, c);
        a.xa.set(c.constructorFunction, c);
        return c
    }

    w.upgrade = function (a) {
        tf(this.M, a)
    };

    function Bf(a) {
        if (!1 !== a.P) {
            a.P = !1;
            for (var b = [], c = a.ga, d = new Map, e = 0; e < c.length; e++) d.set(c[e], []);
            tf(a.M, document, {
                upgrade: function (k) {
                    if (void 0 === k.__CE_state) {
                        var l = k.localName, m = d.get(l);
                        m ? m.push(k) : a.fa.has(l) && b.push(k)
                    }
                }
            });
            for (e = 0; e < b.length; e++) rf(a.M, b[e]);
            for (e = 0; e < c.length; e++) {
                for (var f = c[e], g = d.get(f), h = 0; h < g.length; h++) rf(a.M, g[h]);
                (f = a.qa.get(f)) && f.resolve(void 0)
            }
            c.length = 0
        }
    }

    w.get = function (a) {
        if (a = uf(this, a)) return a.constructorFunction
    };
    w.whenDefined = function (a) {
        if (!df(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
        var b = this.qa.get(a);
        if (b) return b.Ca;
        b = new xf;
        this.qa.set(a, b);
        var c = this.fa.has(a) || this.ea.has(a);
        a = -1 === this.ga.indexOf(a);
        c && a && b.resolve(void 0);
        return b.Ca
    };
    w.polyfillWrapFlushCallback = function (a) {
        this.ya && zf(this.ya);
        var b = this.da;
        this.da = function (c) {
            return a(function () {
                return b(c)
            })
        }
    };

    function uf(a, b) {
        var c = a.fa.get(b);
        if (c) return c;
        if (c = a.ea.get(b)) {
            a.ea.delete(b);
            try {
                return Cf(a, b, c())
            } catch (d) {
                vf(d)
            }
        }
    }

    window.CustomElementRegistry = U;
    U.prototype.define = U.prototype.define;
    U.prototype.upgrade = U.prototype.upgrade;
    U.prototype.get = U.prototype.get;
    U.prototype.whenDefined = U.prototype.whenDefined;
    U.prototype.polyfillDefineLazy = U.prototype.$a;
    U.prototype.polyfillWrapFlushCallback = U.prototype.polyfillWrapFlushCallback;

    function Df(a, b, c) {
        function d(e) {
            return function (f) {
                for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
                h = [];
                for (var k = [], l = 0; l < g.length; l++) {
                    var m = g[l];
                    m instanceof Element && T(m) && k.push(m);
                    if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) h.push(m); else h.push(m)
                }
                e.apply(this, g);
                for (g = 0; g < k.length; g++) sf(a, k[g]);
                if (T(this)) for (g = 0; g < h.length; g++) k = h[g], k instanceof Element && qf(a, k)
            }
        }

        void 0 !== c.prepend && (b.prepend = d(c.prepend));
        void 0 !== c.append && (b.append = d(c.append))
    }
    ;

    function Ef(a) {
        Document.prototype.createElement = function (b) {
            return wf(a, this, b, null)
        };
        Document.prototype.importNode = function (b, c) {
            b = ye.call(this, b, !!c);
            this.__CE_registry ? tf(a, b) : of(a, b);
            return b
        };
        Document.prototype.createElementNS = function (b, c) {
            return wf(a, this, c, b)
        };
        Df(a, Document.prototype, {prepend: ze, append: Ae})
    };

    function Ff(a) {
        function b(d) {
            return function (e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                g = [];
                for (var h = [], k = 0; k < f.length; k++) {
                    var l = f[k];
                    l instanceof Element && T(l) && h.push(l);
                    if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) g.push(l); else g.push(l)
                }
                d.apply(this, f);
                for (f = 0; f < h.length; f++) sf(a, h[f]);
                if (T(this)) for (f = 0; f < g.length; f++) h = g[f], h instanceof Element && qf(a, h)
            }
        }

        var c = Element.prototype;
        void 0 !== Ve && (c.before = b(Ve));
        void 0 !== We && (c.after = b(We));
        void 0 !==
        Xe && (c.replaceWith = function (d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            f = [];
            for (var g = [], h = 0; h < e.length; h++) {
                var k = e[h];
                k instanceof Element && T(k) && g.push(k);
                if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) f.push(k); else f.push(k)
            }
            h = T(this);
            Xe.apply(this, e);
            for (e = 0; e < g.length; e++) sf(a, g[e]);
            if (h) for (sf(a, this), e = 0; e < f.length; e++) g = f[e], g instanceof Element && qf(a, g)
        });
        void 0 !== Ye && (c.remove = function () {
            var d = T(this);
            Ye.call(this);
            d && sf(a, this)
        })
    };

    function Gf(a) {
        function b(e, f) {
            Object.defineProperty(e, "innerHTML", {
                enumerable: f.enumerable,
                configurable: !0,
                get: f.get,
                set: function (g) {
                    var h = this, k = void 0;
                    T(this) && (k = [], lf(a, this, function (q) {
                        q !== h && k.push(q)
                    }));
                    f.set.call(this, g);
                    if (k) for (var l = 0; l < k.length; l++) {
                        var m = k[l];
                        1 === m.__CE_state && a.disconnectedCallback(m)
                    }
                    this.ownerDocument.__CE_registry ? tf(a, this) : of(a, this);
                    return g
                }
            })
        }

        function c(e, f) {
            e.insertAdjacentElement = function (g, h) {
                var k = T(h);
                g = f.call(this, g, h);
                k && sf(a, h);
                T(g) && qf(a, h);
                return g
            }
        }

        function d(e, f) {
            function g(h, k) {
                for (var l = []; h !== k; h = h.nextSibling) l.push(h);
                for (k = 0; k < l.length; k++) tf(a, l[k])
            }

            e.insertAdjacentHTML = function (h, k) {
                h = h.toLowerCase();
                if ("beforebegin" === h) {
                    var l = this.previousSibling;
                    f.call(this, h, k);
                    g(l || this.parentNode.firstChild, this)
                } else if ("afterbegin" === h) l = this.firstChild, f.call(this, h, k), g(this.firstChild, l); else if ("beforeend" === h) l = this.lastChild, f.call(this, h, k), g(l || this.firstChild, null); else if ("afterend" === h) l = this.nextSibling, f.call(this, h, k), g(this.nextSibling,
                    l); else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
            }
        }

        Je && (Element.prototype.attachShadow = function (e) {
            e = Je.call(this, e);
            if (a.R && !e.__CE_patched) {
                e.__CE_patched = !0;
                for (var f = 0; f < a.X.length; f++) a.X[f](e)
            }
            return this.__CE_shadowRoot = e
        });
        Ke && Ke.get ? b(Element.prototype, Ke) : $e && $e.get ? b(HTMLElement.prototype, $e) : nf(a, function (e) {
            b(e, {
                enumerable: !0, configurable: !0, get: function () {
                    return De.call(this, !0).innerHTML
                }, set: function (f) {
                    var g =
                        "template" === this.localName, h = g ? this.content : this,
                        k = xe.call(document, this.namespaceURI, this.localName);
                    for (k.innerHTML = f; 0 < h.childNodes.length;) Ge.call(h, h.childNodes[0]);
                    for (f = g ? k.content : k; 0 < f.childNodes.length;) Ee.call(h, f.childNodes[0])
                }
            })
        });
        Element.prototype.setAttribute = function (e, f) {
            if (1 !== this.__CE_state) return Me.call(this, e, f);
            var g = Le.call(this, e);
            Me.call(this, e, f);
            f = Le.call(this, e);
            a.attributeChangedCallback(this, e, g, f, null)
        };
        Element.prototype.setAttributeNS = function (e, f, g) {
            if (1 !== this.__CE_state) return Pe.call(this,
                e, f, g);
            var h = Oe.call(this, e, f);
            Pe.call(this, e, f, g);
            g = Oe.call(this, e, f);
            a.attributeChangedCallback(this, f, h, g, e)
        };
        Element.prototype.removeAttribute = function (e) {
            if (1 !== this.__CE_state) return Ne.call(this, e);
            var f = Le.call(this, e);
            Ne.call(this, e);
            null !== f && a.attributeChangedCallback(this, e, f, null, null)
        };
        Element.prototype.removeAttributeNS = function (e, f) {
            if (1 !== this.__CE_state) return Qe.call(this, e, f);
            var g = Oe.call(this, e, f);
            Qe.call(this, e, f);
            var h = Oe.call(this, e, f);
            g !== h && a.attributeChangedCallback(this,
                f, g, h, e)
        };
        af ? c(HTMLElement.prototype, af) : Re && c(Element.prototype, Re);
        bf ? d(HTMLElement.prototype, bf) : Se && d(Element.prototype, Se);
        Df(a, Element.prototype, {prepend: Te, append: Ue});
        Ff(a)
    };var Hf = {};

    function If(a) {
        function b() {
            var c = this.constructor;
            var d = document.__CE_registry.xa.get(c);
            if (!d) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
            var e = d.constructionStack;
            if (0 === e.length) return e = we.call(document, d.localName), Object.setPrototypeOf(e, c.prototype), e.__CE_state = 1, e.__CE_definition = d, pf(a, e), e;
            var f = e.length - 1, g = e[f];
            if (g === Hf) throw Error("Failed to construct '" + d.localName + "': This element was already constructed.");
            e[f] =
                Hf;
            Object.setPrototypeOf(g, c.prototype);
            pf(a, g);
            return g
        }

        b.prototype = Ze.prototype;
        Object.defineProperty(HTMLElement.prototype, "constructor", {
            writable: !0,
            configurable: !0,
            enumerable: !1,
            value: b
        });
        window.HTMLElement = b
    };

    function Jf(a) {
        function b(c, d) {
            Object.defineProperty(c, "textContent", {
                enumerable: d.enumerable,
                configurable: !0,
                get: d.get,
                set: function (e) {
                    if (this.nodeType === Node.TEXT_NODE) d.set.call(this, e); else {
                        var f = void 0;
                        if (this.firstChild) {
                            var g = this.childNodes, h = g.length;
                            if (0 < h && T(this)) {
                                f = Array(h);
                                for (var k = 0; k < h; k++) f[k] = g[k]
                            }
                        }
                        d.set.call(this, e);
                        if (f) for (e = 0; e < f.length; e++) sf(a, f[e])
                    }
                }
            })
        }

        Node.prototype.insertBefore = function (c, d) {
            if (c instanceof DocumentFragment) {
                var e = ff(c);
                c = Fe.call(this, c, d);
                if (T(this)) for (d =
                                      0; d < e.length; d++) qf(a, e[d]);
                return c
            }
            e = c instanceof Element && T(c);
            d = Fe.call(this, c, d);
            e && sf(a, c);
            T(this) && qf(a, c);
            return d
        };
        Node.prototype.appendChild = function (c) {
            if (c instanceof DocumentFragment) {
                var d = ff(c);
                c = Ee.call(this, c);
                if (T(this)) for (var e = 0; e < d.length; e++) qf(a, d[e]);
                return c
            }
            d = c instanceof Element && T(c);
            e = Ee.call(this, c);
            d && sf(a, c);
            T(this) && qf(a, c);
            return e
        };
        Node.prototype.cloneNode = function (c) {
            c = De.call(this, !!c);
            this.ownerDocument.__CE_registry ? tf(a, c) : of(a, c);
            return c
        };
        Node.prototype.removeChild =
            function (c) {
                var d = c instanceof Element && T(c), e = Ge.call(this, c);
                d && sf(a, c);
                return e
            };
        Node.prototype.replaceChild = function (c, d) {
            if (c instanceof DocumentFragment) {
                var e = ff(c);
                c = He.call(this, c, d);
                if (T(this)) for (sf(a, d), d = 0; d < e.length; d++) qf(a, e[d]);
                return c
            }
            e = c instanceof Element && T(c);
            var f = He.call(this, c, d), g = T(this);
            g && sf(a, d);
            e && sf(a, c);
            g && qf(a, c);
            return f
        };
        Ie && Ie.get ? b(Node.prototype, Ie) : mf(a, function (c) {
            b(c, {
                enumerable: !0, configurable: !0, get: function () {
                    for (var d = [], e = this.firstChild; e; e = e.nextSibling) e.nodeType !==
                    Node.COMMENT_NODE && d.push(e.textContent);
                    return d.join("")
                }, set: function (d) {
                    for (; this.firstChild;) Ge.call(this, this.firstChild);
                    null != d && "" !== d && Ee.call(this, document.createTextNode(d))
                }
            })
        })
    };var kf = window.customElements;

    function Kf() {
        var a = new jf;
        If(a);
        Ef(a);
        Df(a, DocumentFragment.prototype, {prepend: Be, append: Ce});
        Jf(a);
        Gf(a);
        a = new U(a);
        document.__CE_registry = a;
        Object.defineProperty(window, "customElements", {configurable: !0, enumerable: !0, value: a})
    }

    kf && !kf.forcePolyfill && "function" == typeof kf.define && "function" == typeof kf.get || Kf();
    window.__CE_installPolyfill = Kf;

    function Lf() {
        this.end = this.start = 0;
        this.rules = this.parent = this.previous = null;
        this.cssText = this.parsedCssText = "";
        this.atRule = !1;
        this.type = 0;
        this.parsedSelector = this.selector = this.keyframesName = ""
    }

    function Mf(a) {
        var b = a = a.replace(Nf, "").replace(Of, ""), c = new Lf;
        c.start = 0;
        c.end = b.length;
        for (var d = c, e = 0, f = b.length; e < f; e++) if ("{" === b[e]) {
            d.rules || (d.rules = []);
            var g = d, h = g.rules[g.rules.length - 1] || null;
            d = new Lf;
            d.start = e + 1;
            d.parent = g;
            d.previous = h;
            g.rules.push(d)
        } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);
        return Pf(c, a)
    }

    function Pf(a, b) {
        var c = b.substring(a.start, a.end - 1);
        a.parsedCssText = a.cssText = c.trim();
        a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = Qf(c), c = c.replace(Rf, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = Sf : c.match(Tf) && (a.type = Uf, a.keyframesName = a.selector.split(Rf).pop()) : a.type = 0 === c.indexOf("--") ? Vf : Wf);
        if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) Pf(f,
            b);
        return a
    }

    function Qf(a) {
        return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
            b = c;
            for (c = 6 - b.length; c--;) b = "0" + b;
            return "\\" + b
        })
    }

    function Xf(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = "";
        if (a.cssText || a.rules) {
            var e = a.rules, f;
            if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));
            if (f) {
                f = 0;
                for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = Xf(h, b, d)
            } else b ? b = a.cssText : (b = a.cssText, b = b.replace(Yf, "").replace(Zf, ""), b = b.replace($f, "").replace(ag, "")), (d = b.trim()) && (d = "  " + d + "\n")
        }
        d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
        return c
    }

    var Wf = 1, Uf = 7, Sf = 4, Vf = 1E3, Nf = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, Of = /@import[^;]*;/gim,
        Yf = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        Zf = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        $f = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, ag = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        Tf = /^@[^\s]*keyframes/, Rf = /\s+/g;
    var V = !(window.ShadyDOM && window.ShadyDOM.inUse), bg;

    function cg(a) {
        bg = a && a.shimcssproperties ? !1 : V || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"))
    }

    var dg;
    window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (dg = window.ShadyCSS.cssBuild);
    var eg = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? bg = window.ShadyCSS.nativeCss : window.ShadyCSS ? (cg(window.ShadyCSS), window.ShadyCSS = void 0) : cg(window.WebComponents && window.WebComponents.flags);
    var X = bg;
    var fg = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        hg = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, ig = /(--[\w-]+)\s*([:,;)]|$)/gi,
        jg = /(animation\s*:)|(animation-name\s*:)/, kg = /@media\s(.*)/, lg = /\{[^}]*\}/g;
    var mg = new Set;

    function ng(a, b) {
        if (!a) return "";
        "string" === typeof a && (a = Mf(a));
        b && og(a, b);
        return Xf(a, X)
    }

    function pg(a) {
        !a.__cssRules && a.textContent && (a.__cssRules = Mf(a.textContent));
        return a.__cssRules || null
    }

    function qg(a) {
        return !!a.parent && a.parent.type === Uf
    }

    function og(a, b, c, d) {
        if (a) {
            var e = !1, f = a.type;
            if (d && f === Sf) {
                var g = a.selector.match(kg);
                g && (window.matchMedia(g[1]).matches || (e = !0))
            }
            f === Wf ? b(a) : c && f === Uf ? c(a) : f === Vf && (e = !0);
            if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) og(g, b, c, d)
        }
    }

    function rg(a, b, c, d) {
        var e = document.createElement("style");
        b && e.setAttribute("scope", b);
        e.textContent = a;
        sg(e, c, d);
        return e
    }

    var tg = null;

    function ug(a) {
        a = document.createComment(" Shady DOM styles for " + a + " ");
        var b = document.head;
        b.insertBefore(a, (tg ? tg.nextSibling : null) || b.firstChild);
        return tg = a
    }

    function sg(a, b, c) {
        b = b || document.head;
        b.insertBefore(a, c && c.nextSibling || b.firstChild);
        tg ? a.compareDocumentPosition(tg) === Node.DOCUMENT_POSITION_PRECEDING && (tg = a) : tg = a
    }

    function vg(a, b) {
        for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++; else if (")" === a[b] && 0 === --c) return b;
        return -1
    }

    function wg(a, b) {
        var c = a.indexOf("var(");
        if (-1 === c) return b(a, "", "", "");
        var d = vg(a, c + 3), e = a.substring(c + 4, d);
        c = a.substring(0, c);
        a = wg(a.substring(d + 1), b);
        d = e.indexOf(",");
        return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a)
    }

    function xg(a, b) {
        V ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b)
    }

    var yg = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
        return a
    };

    function zg(a) {
        var b = a.localName, c = "";
        b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);
        return {is: b, ba: c}
    }

    function Ag(a) {
        for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
            var e = vg(a, d);
            c += a.slice(d, e + 1);
            d = e
        } else "," === a[d] ? (b.push(c), c = "") : c += a[d];
        c && b.push(c);
        return b
    }

    function Bg(a) {
        if (void 0 !== dg) return dg;
        if (void 0 === a.__cssBuild) {
            var b = a.getAttribute("css-build");
            if (b) a.__cssBuild = b; else {
                a:{
                    b = "template" === a.localName ? a.content.firstChild : a.firstChild;
                    if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
                        b = b[1];
                        break a
                    }
                    b = ""
                }
                if ("" !== b) {
                    var c = "template" === a.localName ? a.content.firstChild : a.firstChild;
                    c.parentNode.removeChild(c)
                }
                a.__cssBuild = b
            }
        }
        return a.__cssBuild || ""
    }

    function Cg(a) {
        a = void 0 === a ? "" : a;
        return "" !== a && X ? V ? "shadow" === a : "shady" === a : !1
    };

    function Dg() {
    }

    function Eg(a, b) {
        Fg(Gg, a, function (c) {
            Hg(c, b || "")
        })
    }

    function Fg(a, b, c) {
        b.nodeType === Node.ELEMENT_NODE && c(b);
        var d;
        "template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;
        if (d) for (b = 0; b < d.length; b++) Fg(a, d[b], c)
    }

    function Hg(a, b, c) {
        if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b)); else if (a.getAttribute) {
            var d = a.getAttribute("class");
            c ? d && (b = d.replace("style-scope", "").replace(b, ""), xg(a, b)) : xg(a, (d ? d + " " : "") + "style-scope " + b)
        }
    }

    function Ig(a, b, c) {
        Fg(Gg, a, function (d) {
            Hg(d, b, !0);
            Hg(d, c)
        })
    }

    function Jg(a, b) {
        Fg(Gg, a, function (c) {
            Hg(c, b || "", !0)
        })
    }

    function Kg(a, b, c, d, e) {
        var f = Gg;
        e = void 0 === e ? "" : e;
        "" === e && (V || "shady" === (void 0 === d ? "" : d) ? e = ng(b, c) : (a = zg(a), e = Lg(f, b, a.is, a.ba, c) + "\n\n"));
        return e.trim()
    }

    function Lg(a, b, c, d, e) {
        var f = Mg(c, d);
        c = c ? "." + c : "";
        return ng(b, function (g) {
            g.c || (g.selector = g.w = Ng(a, g, a.b, c, f), g.c = !0);
            e && e(g, c, f)
        })
    }

    function Mg(a, b) {
        return b ? "[is=" + a + "]" : a
    }

    function Ng(a, b, c, d, e) {
        var f = Ag(b.selector);
        if (!qg(b)) {
            b = 0;
            for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e)
        }
        return f.filter(function (k) {
            return !!k
        }).join(",")
    }

    function Og(a) {
        return a.replace(Pg, function (b, c, d) {
            -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));
            return ":" + c + "(" + d + ")"
        })
    }

    function Qg(a) {
        for (var b = [], c; c = a.match(Rg);) {
            var d = c.index, e = vg(a, d);
            if (-1 === e) throw Error(c.input + " selector missing ')'");
            c = a.slice(d, e + 1);
            a = a.replace(c, "\ue000");
            b.push(c)
        }
        return {wa: a, matches: b}
    }

    function Sg(a, b) {
        var c = a.split("\ue000");
        return b.reduce(function (d, e, f) {
            return d + e + c[f + 1]
        }, c[0])
    }

    Dg.prototype.b = function (a, b, c) {
        var d = !1;
        a = a.trim();
        var e = Pg.test(a);
        e && (a = a.replace(Pg, function (h, k, l) {
            return ":" + k + "(" + l.replace(/\s/g, "") + ")"
        }), a = Og(a));
        var f = Rg.test(a);
        if (f) {
            var g = Qg(a);
            a = g.wa;
            g = g.matches
        }
        a = a.replace(Tg, ":host $1");
        a = a.replace(Ug, function (h, k, l) {
            d || (h = Vg(l, k, b, c), d = d || h.stop, k = h.Qa, l = h.value);
            return k + l
        });
        f && (a = Sg(a, g));
        e && (a = Og(a));
        return a = a.replace(Wg, function (h, k, l, m) {
            return '[dir="' + l + '"] ' + k + m + ", " + k + '[dir="' + l + '"]' + m
        })
    };

    function Vg(a, b, c, d) {
        var e = a.indexOf("::slotted");
        0 <= a.indexOf(":host") ? a = Xg(a, d) : 0 !== e && (a = c ? Yg(a, c) : a);
        c = !1;
        0 <= e && (b = "", c = !0);
        if (c) {
            var f = !0;
            c && (a = a.replace(Zg, function (g, h) {
                return " > " + h
            }))
        }
        return {value: a, Qa: b, stop: f}
    }

    function Yg(a, b) {
        a = a.split(/(\[.+?\])/);
        for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]); else {
            var e = a[d];
            if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"))
        }
        return c.join("")
    }

    function Xg(a, b) {
        var c = a.match($g);
        return (c = c && c[2].trim() || "") ? c[0].match(ah) ? a.replace($g, function (d, e, f) {
            return b + f
        }) : c.split(ah)[0] === b ? c : "should_not_match" : a.replace(":host", b)
    }

    function bh(a) {
        ":root" === a.selector && (a.selector = "html")
    }

    Dg.prototype.c = function (a) {
        return a.match(":host") ? "" : a.match("::slotted") ? this.b(a, ":not(.style-scope)") : Yg(a.trim(), ":not(.style-scope)")
    };
    fa.Object.defineProperties(Dg.prototype, {
        a: {
            configurable: !0, enumerable: !0, get: function () {
                return "style-scope"
            }
        }
    });
    var Pg = /:(nth[-\w]+)\(([^)]+)\)/, Ug = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, ah = /[[.:#*]/,
        Tg = /^(::slotted)/, $g = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        Zg = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Wg = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
        Rg = /:(?:matches|any|-(?:webkit|moz)-any)/, Gg = new Dg;

    function ch(a, b, c, d, e) {
        this.H = a || null;
        this.b = b || null;
        this.ta = c || [];
        this.F = null;
        this.cssBuild = e || "";
        this.ba = d || "";
        this.a = this.G = this.L = null
    }

    function dh(a) {
        return a ? a.__styleInfo : null
    }

    function eh(a, b) {
        return a.__styleInfo = b
    }

    ch.prototype.c = function () {
        return this.H
    };
    ch.prototype._getStyleRules = ch.prototype.c;

    function fh(a) {
        var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
        return b && b.call(this, a)
    }

    var gh = /:host\s*>\s*/, hh = navigator.userAgent.match("Trident");

    function ih() {
    }

    function jh(a) {
        var b = {}, c = [], d = 0;
        og(a, function (f) {
            kh(f);
            f.index = d++;
            f = f.v.cssText;
            for (var g; g = ig.exec(f);) {
                var h = g[1];
                ":" !== g[2] && (b[h] = !0)
            }
        }, function (f) {
            c.push(f)
        });
        a.b = c;
        a = [];
        for (var e in b) a.push(e);
        return a
    }

    function kh(a) {
        if (!a.v) {
            var b = {}, c = {};
            lh(a, c) && (b.K = c, a.rules = null);
            b.cssText = a.parsedCssText.replace(lg, "").replace(fg, "");
            a.v = b
        }
    }

    function lh(a, b) {
        var c = a.v;
        if (c) {
            if (c.K) return Object.assign(b, c.K), !0
        } else {
            c = a.parsedCssText;
            for (var d; a = fg.exec(c);) {
                d = (a[2] || a[3]).trim();
                if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
                d = !0
            }
            return d
        }
    }

    function mh(a, b, c) {
        b && (b = 0 <= b.indexOf(";") ? nh(a, b, c) : wg(b, function (d, e, f, g) {
            if (!e) return d + g;
            (e = mh(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = mh(a, c[f] || f, c) || f;
            return d + (e || "") + g
        }));
        return b && b.trim() || ""
    }

    function nh(a, b, c) {
        b = b.split(";");
        for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
            hg.lastIndex = 0;
            if (f = hg.exec(e)) e = mh(a, c[f[1]], c); else if (f = e.indexOf(":"), -1 !== f) {
                var g = e.substring(f);
                g = g.trim();
                g = mh(a, g, c) || g;
                e = e.substring(0, f) + g
            }
            b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || ""
        }
        return b.join(";")
    }

    function oh(a, b) {
        var c = {}, d = [];
        og(a, function (e) {
            e.v || kh(e);
            var f = e.w || e.parsedSelector;
            b && e.v.K && f && fh.call(b, f) && (lh(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32)
        }, null, !0);
        return {K: c, key: d}
    }

    function ph(a, b, c, d) {
        b.v || kh(b);
        if (b.v.K) {
            var e = zg(a);
            a = e.is;
            e = e.ba;
            e = a ? Mg(a, e) : "html";
            var f = b.parsedSelector;
            var g = !!f.match(gh) || "html" === e && -1 < f.indexOf("html");
            var h = 0 === f.indexOf(":host") && !g;
            "shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));
            if (g || h) c = e, h && (b.w || (b.w = Ng(Gg, b, Gg.b, a ? "." + a : "", e)), c = b.w || e), g && "html" === e && (c = b.w || b.J), d({
                wa: c,
                Xa: h,
                mb: g
            })
        }
    }

    function qh(a, b, c) {
        var d = {}, e = {};
        og(b, function (f) {
            ph(a, f, c, function (g) {
                fh.call(a._element || a, g.wa) && (g.Xa ? lh(f, d) : lh(f, e))
            })
        }, null, !0);
        return {cb: e, Va: d}
    }

    function rh(a, b, c, d) {
        var e = zg(b), f = Mg(e.is, e.ba),
            g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
            h = dh(b);
        e = h.H;
        h = h.cssBuild;
        var k = sh(e, d);
        return Kg(b, e, function (l) {
            var m = "";
            l.v || kh(l);
            l.v.cssText && (m = nh(a, l.v.cssText, c));
            l.cssText = m;
            if (!V && !qg(l) && l.cssText) {
                var q = m = l.cssText;
                null == l.Da && (l.Da = jg.test(m));
                if (l.Da) if (null == l.ja) {
                    l.ja = [];
                    for (var H in k) q = k[H], q = q(m), m !== q && (m = q, l.ja.push(H))
                } else {
                    for (H = 0; H < l.ja.length; ++H) q = k[l.ja[H]], m = q(m);
                    q = m
                }
                l.cssText = q;
                l.w =
                    l.w || l.selector;
                m = "." + d;
                H = Ag(l.w);
                q = 0;
                for (var E = H.length, r = void 0; q < E && (r = H[q]); q++) H[q] = r.match(g) ? r.replace(f, m) : m + " " + r;
                l.selector = H.join(",")
            }
        }, h)
    }

    function sh(a, b) {
        a = a.b;
        var c = {};
        if (!V && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
            var f = e, g = b;
            f.l = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");
            f.a = f.keyframesName + "-" + g;
            f.w = f.w || f.selector;
            f.selector = f.w.replace(f.keyframesName, f.a);
            c[e.keyframesName] = th(e)
        }
        return c
    }

    function th(a) {
        return function (b) {
            return b.replace(a.l, a.a)
        }
    }

    function uh(a, b) {
        var c = vh, d = pg(a);
        a.textContent = ng(d, function (e) {
            var f = e.cssText = e.parsedCssText;
            e.v && e.v.cssText && (f = f.replace(Yf, "").replace(Zf, ""), e.cssText = nh(c, f, b))
        })
    }

    fa.Object.defineProperties(ih.prototype, {
        a: {
            configurable: !0, enumerable: !0, get: function () {
                return "x-scope"
            }
        }
    });
    var vh = new ih;
    var wh = {}, xh = window.customElements;
    if (xh && !V && !eg) {
        var yh = xh.define;
        xh.define = function (a, b, c) {
            wh[a] || (wh[a] = ug(a));
            yh.call(xh, a, b, c)
        }
    }
    ;

    function zh() {
        this.cache = {}
    }

    zh.prototype.store = function (a, b, c, d) {
        var e = this.cache[a] || [];
        e.push({K: b, styleElement: c, G: d});
        100 < e.length && e.shift();
        this.cache[a] = e
    };

    function Ah() {
    }

    var Bh = new RegExp(Gg.a + "\\s*([^\\s]*)");

    function Ch(a) {
        return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(Bh)) ? a[1] : ""
    }

    function Dh(a) {
        var b = yg(a).getRootNode();
        return b === a || b === a.ownerDocument ? "" : (a = b.host) ? zg(a).is : ""
    }

    function Eh(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
                var e = c.addedNodes[d];
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var f = e.getRootNode(), g = Ch(e);
                    if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === Bg(e))) Jg(e, g); else if (f instanceof ShadowRoot) for (f = Dh(e), f !== g && Ig(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + Gg.a + ")"), g = 0; g < e.length; g++) {
                        f = e[g];
                        var h = Dh(f);
                        h && Hg(f, h)
                    }
                }
            }
        }
    }

    if (!(V || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
        var Fh = new MutationObserver(Eh), Gh = function (a) {
            Fh.observe(a, {childList: !0, subtree: !0})
        };
        if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Gh(document); else {
            var Hh = function () {
                Gh(document.body)
            };
            window.HTMLImports ? window.HTMLImports.whenReady(Hh) : requestAnimationFrame(function () {
                if ("loading" === document.readyState) {
                    var a = function () {
                        Hh();
                        document.removeEventListener("readystatechange", a)
                    };
                    document.addEventListener("readystatechange",
                        a)
                } else Hh()
            })
        }
        Ah = function () {
            Eh(Fh.takeRecords())
        }
    }
    ;var Ih = {};
    var Jh = Promise.resolve();

    function Kh(a) {
        if (a = Ih[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1
    }

    function Lh(a) {
        return a._applyShimCurrentVersion === a._applyShimNextVersion
    }

    function Mh(a) {
        a._applyShimValidatingVersion = a._applyShimNextVersion;
        a._validating || (a._validating = !0, Jh.then(function () {
            a._applyShimCurrentVersion = a._applyShimNextVersion;
            a._validating = !1
        }))
    };var Nh = {}, Oh = new zh;

    function Y() {
        this.Y = {};
        this.c = document.documentElement;
        var a = new Lf;
        a.rules = [];
        this.l = eh(this.c, new ch(a));
        this.J = !1;
        this.a = this.b = null
    }

    w = Y.prototype;
    w.flush = function () {
        Ah()
    };
    w.Ta = function (a) {
        return pg(a)
    };
    w.hb = function (a) {
        return ng(a)
    };
    w.prepareTemplate = function (a, b, c) {
        this.prepareTemplateDom(a, b);
        this.prepareTemplateStyles(a, b, c)
    };
    w.prepareTemplateStyles = function (a, b, c) {
        if (!a._prepared && !eg) {
            V || wh[b] || (wh[b] = ug(b));
            a._prepared = !0;
            a.name = b;
            a.extends = c;
            Ih[b] = a;
            var d = Bg(a), e = Cg(d);
            c = {is: b, extends: c};
            for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
                var k = g[h];
                if (k.hasAttribute("shady-unscoped")) {
                    if (!V) {
                        var l = k.textContent;
                        if (!mg.has(l)) {
                            mg.add(l);
                            var m = document.createElement("style");
                            m.setAttribute("shady-unscoped", "");
                            m.textContent = l;
                            document.head.appendChild(m)
                        }
                        k.parentNode.removeChild(k)
                    }
                } else f.push(k.textContent),
                    k.parentNode.removeChild(k)
            }
            f = f.join("").trim() + (Nh[b] || "");
            Ph(this);
            if (!e) {
                if (g = !d) g = hg.test(f) || fg.test(f), hg.lastIndex = 0, fg.lastIndex = 0;
                h = Mf(f);
                g && X && this.b && this.b.transformRules(h, b);
                a._styleAst = h
            }
            g = [];
            X || (g = jh(a._styleAst));
            if (!g.length || X) h = V ? a.content : null, b = wh[b] || null, d = Kg(c, a._styleAst, null, d, e ? f : ""), d = d.length ? rg(d, c.is, h, b) : null, a._style = d;
            a.a = g
        }
    };
    w.ab = function (a, b) {
        Nh[b] = a.join(" ")
    };
    w.prepareTemplateDom = function (a, b) {
        if (!eg) {
            var c = Bg(a);
            V || "shady" === c || a._domPrepared || (a._domPrepared = !0, Eg(a.content, b))
        }
    };

    function Qh(a) {
        var b = zg(a), c = b.is;
        b = b.ba;
        var d = wh[c] || null, e = Ih[c];
        if (e) {
            c = e._styleAst;
            var f = e.a;
            e = Bg(e);
            b = new ch(c, d, f, b, e);
            eh(a, b);
            return b
        }
    }

    function Rh(a) {
        !a.a && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.a = window.ShadyCSS.CustomStyleInterface, a.a.transformCallback = function (b) {
            a.Ha(b)
        }, a.a.validateCallback = function () {
            requestAnimationFrame(function () {
                (a.a.enqueued || a.J) && a.flushCustomStyles()
            })
        })
    }

    function Ph(a) {
        if (!a.b && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
            a.b = window.ShadyCSS.ApplyShim;
            a.b.invalidCallback = Kh;
            var b = !0
        } else b = !1;
        Rh(a);
        return b
    }

    w.flushCustomStyles = function () {
        if (!eg) {
            var a = Ph(this);
            if (this.a) {
                var b = this.a.processStyles();
                if ((a || this.a.enqueued) && !Cg(this.l.cssBuild)) {
                    if (X) {
                        if (!this.l.cssBuild) for (a = 0; a < b.length; a++) {
                            var c = this.a.getStyleForCustomStyle(b[a]);
                            if (c && X && this.b) {
                                var d = pg(c);
                                Ph(this);
                                this.b.transformRules(d);
                                c.textContent = ng(d)
                            }
                        }
                    } else {
                        Sh(this, b);
                        Th(this, this.c, this.l);
                        for (a = 0; a < b.length; a++) (c = this.a.getStyleForCustomStyle(b[a])) && uh(c, this.l.L);
                        this.J && this.styleDocument()
                    }
                    this.a.enqueued = !1
                }
            }
        }
    };

    function Sh(a, b) {
        b = b.map(function (c) {
            return a.a.getStyleForCustomStyle(c)
        }).filter(function (c) {
            return !!c
        });
        b.sort(function (c, d) {
            c = d.compareDocumentPosition(c);
            return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0
        });
        a.l.H.rules = b.map(function (c) {
            return pg(c)
        })
    }

    w.styleElement = function (a, b) {
        if (eg) {
            if (b) {
                dh(a) || eh(a, new ch(null));
                var c = dh(a);
                c.F = c.F || {};
                Object.assign(c.F, b);
                Uh(this, a, c)
            }
        } else if (c = dh(a) || Qh(a)) if (a !== this.c && (this.J = !0), b && (c.F = c.F || {}, Object.assign(c.F, b)), X) Uh(this, a, c); else if (this.flush(), Th(this, a, c), c.ta && c.ta.length) {
            b = zg(a).is;
            var d;
            a:{
                if (d = Oh.cache[b]) for (var e = d.length - 1; 0 <= e; e--) {
                    var f = d[e];
                    b:{
                        var g = c.ta;
                        for (var h = 0; h < g.length; h++) {
                            var k = g[h];
                            if (f.K[k] !== c.L[k]) {
                                g = !1;
                                break b
                            }
                        }
                        g = !0
                    }
                    if (g) {
                        d = f;
                        break a
                    }
                }
                d = void 0
            }
            g = d ? d.styleElement :
                null;
            e = c.G;
            (f = d && d.G) || (f = this.Y[b] = (this.Y[b] || 0) + 1, f = b + "-" + f);
            c.G = f;
            f = c.G;
            h = vh;
            h = g ? g.textContent || "" : rh(h, a, c.L, f);
            k = dh(a);
            var l = k.a;
            l && !V && l !== g && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));
            V ? k.a ? (k.a.textContent = h, g = k.a) : h && (g = rg(h, f, a.shadowRoot, k.b)) : g ? g.parentNode || (hh && -1 < h.indexOf("@media") && (g.textContent = h), sg(g, null, k.b)) : h && (g = rg(h, f, null, k.b));
            g && (g._useCount = g._useCount || 0, k.a != g && g._useCount++, k.a = g);
            f = g;
            V || (g = c.G, k = h = a.getAttribute("class") || "", e && (k =
                h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), k += (k ? " " : "") + "x-scope " + g, h !== k && xg(a, k));
            d || Oh.store(b, c.L, f, c.G)
        }
    };

    function Uh(a, b, c) {
        var d = zg(b).is;
        if (c.F) {
            var e = c.F, f;
            for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f])
        }
        e = Ih[d];
        if (!(!e && b !== a.c || e && "" !== Bg(e)) && e && e._style && !Lh(e)) {
            if (Lh(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) Ph(a), a.b && a.b.transformRules(e._styleAst, d), e._style.textContent = Kg(b, c.H), Mh(e);
            V && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Kg(b, c.H));
            c.H = e._styleAst
        }
    }

    function Vh(a, b) {
        return (b = yg(b).getRootNode().host) ? dh(b) || Qh(b) ? b : Vh(a, b) : a.c
    }

    function Th(a, b, c) {
        var d = Vh(a, b), e = dh(d), f = e.L;
        d === a.c || f || (Th(a, d, e), f = e.L);
        a = Object.create(f || null);
        d = qh(b, c.H, c.cssBuild);
        b = oh(e.H, b).K;
        Object.assign(a, d.Va, b, d.cb);
        b = c.F;
        for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;
        g = vh;
        b = Object.getOwnPropertyNames(a);
        for (e = 0; e < b.length; e++) d = b[e], a[d] = mh(g, a[d], a);
        c.L = a
    }

    w.styleDocument = function (a) {
        this.styleSubtree(this.c, a)
    };
    w.styleSubtree = function (a, b) {
        var c = yg(a), d = c.shadowRoot, e = a === this.c;
        (d || e) && this.styleElement(a, b);
        if (a = e ? c : d) for (a = Array.from(a.querySelectorAll("*")).filter(function (f) {
            return yg(f).shadowRoot
        }), b = 0; b < a.length; b++) this.styleSubtree(a[b])
    };
    w.Ha = function (a) {
        var b = this, c = Bg(a);
        c !== this.l.cssBuild && (this.l.cssBuild = c);
        if (!Cg(c)) {
            var d = pg(a);
            og(d, function (e) {
                if (V) bh(e); else {
                    var f = Gg;
                    e.selector = e.parsedSelector;
                    bh(e);
                    e.selector = e.w = Ng(f, e, f.c, void 0, void 0)
                }
                X && "" === c && (Ph(b), b.b && b.b.transformRule(e))
            });
            X ? a.textContent = ng(d) : this.l.H.rules.push(d)
        }
    };
    w.getComputedStyleValue = function (a, b) {
        var c;
        X || (c = (dh(a) || dh(Vh(this, a))).L[b]);
        return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : ""
    };
    w.gb = function (a, b) {
        var c = yg(a).getRootNode(), d;
        b ? d = ("string" === typeof b ? b : String(b)).split(/\s/) : d = [];
        b = c.host && c.host.localName;
        if (!b && (c = a.getAttribute("class"))) {
            c = c.split(/\s/);
            for (var e = 0; e < c.length; e++) if (c[e] === Gg.a) {
                b = c[e + 1];
                break
            }
        }
        b && d.push(Gg.a, b);
        X || (b = dh(a)) && b.G && d.push(vh.a, b.G);
        xg(a, d.join(" "))
    };
    w.Oa = function (a) {
        return dh(a)
    };
    w.fb = function (a, b) {
        Hg(a, b)
    };
    w.ib = function (a, b) {
        Hg(a, b, !0)
    };
    w.eb = function (a) {
        return Dh(a)
    };
    w.Ra = function (a) {
        return Ch(a)
    };
    Y.prototype.flush = Y.prototype.flush;
    Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
    Y.prototype.styleElement = Y.prototype.styleElement;
    Y.prototype.styleDocument = Y.prototype.styleDocument;
    Y.prototype.styleSubtree = Y.prototype.styleSubtree;
    Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;
    Y.prototype.setElementClass = Y.prototype.gb;
    Y.prototype._styleInfoForNode = Y.prototype.Oa;
    Y.prototype.transformCustomStyleForDocument = Y.prototype.Ha;
    Y.prototype.getStyleAst = Y.prototype.Ta;
    Y.prototype.styleAstToString = Y.prototype.hb;
    Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;
    Y.prototype.scopeNode = Y.prototype.fb;
    Y.prototype.unscopeNode = Y.prototype.ib;
    Y.prototype.scopeForNode = Y.prototype.eb;
    Y.prototype.currentScopeForNode = Y.prototype.Ra;
    Y.prototype.prepareAdoptedCssText = Y.prototype.ab;
    Object.defineProperties(Y.prototype, {
        nativeShadow: {
            get: function () {
                return V
            }
        }, nativeCss: {
            get: function () {
                return X
            }
        }
    });
    var Z = new Y, Wh, Xh;
    window.ShadyCSS && (Wh = window.ShadyCSS.ApplyShim, Xh = window.ShadyCSS.CustomStyleInterface);
    window.ShadyCSS = {
        ScopingShim: Z, prepareTemplate: function (a, b, c) {
            Z.flushCustomStyles();
            Z.prepareTemplate(a, b, c)
        }, prepareTemplateDom: function (a, b) {
            Z.prepareTemplateDom(a, b)
        }, prepareTemplateStyles: function (a, b, c) {
            Z.flushCustomStyles();
            Z.prepareTemplateStyles(a, b, c)
        }, styleSubtree: function (a, b) {
            Z.flushCustomStyles();
            Z.styleSubtree(a, b)
        }, styleElement: function (a) {
            Z.flushCustomStyles();
            Z.styleElement(a)
        }, styleDocument: function (a) {
            Z.flushCustomStyles();
            Z.styleDocument(a)
        }, flushCustomStyles: function () {
            Z.flushCustomStyles()
        },
        getComputedStyleValue: function (a, b) {
            return Z.getComputedStyleValue(a, b)
        }, nativeCss: X, nativeShadow: V, cssBuild: dg, disableRuntime: eg
    };
    Wh && (window.ShadyCSS.ApplyShim = Wh);
    Xh && (window.ShadyCSS.CustomStyleInterface = Xh);
    (function (a) {
        function b(r) {
            "" == r && (f.call(this), this.h = !0);
            return r.toLowerCase()
        }

        function c(r) {
            var F = r.charCodeAt(0);
            return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 63, 96].indexOf(F) ? r : encodeURIComponent(r)
        }

        function d(r) {
            var F = r.charCodeAt(0);
            return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 96].indexOf(F) ? r : encodeURIComponent(r)
        }

        function e(r, F, C) {
            function M(ka) {
                ta.push(ka)
            }

            var y = F || "scheme start", W = 0, v = "", sa = !1, ea = !1, ta = [];
            a:for (; (void 0 != r[W - 1] || 0 == W) && !this.h;) {
                var n = r[W];
                switch (y) {
                    case "scheme start":
                        if (n && q.test(n)) v +=
                            n.toLowerCase(), y = "scheme"; else if (F) {
                            M("Invalid scheme.");
                            break a
                        } else {
                            v = "";
                            y = "no scheme";
                            continue
                        }
                        break;
                    case "scheme":
                        if (n && H.test(n)) v += n.toLowerCase(); else if (":" == n) {
                            this.g = v;
                            v = "";
                            if (F) break a;
                            void 0 !== l[this.g] && (this.A = !0);
                            y = "file" == this.g ? "relative" : this.A && C && C.g == this.g ? "relative or authority" : this.A ? "authority first slash" : "scheme data"
                        } else if (F) {
                            void 0 != n && M("Code point not allowed in scheme: " + n);
                            break a
                        } else {
                            v = "";
                            W = 0;
                            y = "no scheme";
                            continue
                        }
                        break;
                    case "scheme data":
                        "?" == n ? (this.o = "?",
                            y = "query") : "#" == n ? (this.u = "#", y = "fragment") : void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.pa += c(n));
                        break;
                    case "no scheme":
                        if (C && void 0 !== l[C.g]) {
                            y = "relative";
                            continue
                        } else M("Missing scheme."), f.call(this), this.h = !0;
                        break;
                    case "relative or authority":
                        if ("/" == n && "/" == r[W + 1]) y = "authority ignore slashes"; else {
                            M("Expected /, got: " + n);
                            y = "relative";
                            continue
                        }
                        break;
                    case "relative":
                        this.A = !0;
                        "file" != this.g && (this.g = C.g);
                        if (void 0 == n) {
                            this.i = C.i;
                            this.m = C.m;
                            this.j = C.j.slice();
                            this.o = C.o;
                            this.s = C.s;
                            this.f = C.f;
                            break a
                        } else if ("/" == n || "\\" == n) "\\" == n && M("\\ is an invalid code point."), y = "relative slash"; else if ("?" == n) this.i = C.i, this.m = C.m, this.j = C.j.slice(), this.o = "?", this.s = C.s, this.f = C.f, y = "query"; else if ("#" == n) this.i = C.i, this.m = C.m, this.j = C.j.slice(), this.o = C.o, this.u = "#", this.s = C.s, this.f = C.f, y = "fragment"; else {
                            y = r[W + 1];
                            var I = r[W + 2];
                            if ("file" != this.g || !q.test(n) || ":" != y && "|" != y || void 0 != I && "/" != I && "\\" != I && "?" != I && "#" != I) this.i = C.i, this.m = C.m, this.s = C.s, this.f = C.f, this.j = C.j.slice(), this.j.pop();
                            y =
                                "relative path";
                            continue
                        }
                        break;
                    case "relative slash":
                        if ("/" == n || "\\" == n) "\\" == n && M("\\ is an invalid code point."), y = "file" == this.g ? "file host" : "authority ignore slashes"; else {
                            "file" != this.g && (this.i = C.i, this.m = C.m, this.s = C.s, this.f = C.f);
                            y = "relative path";
                            continue
                        }
                        break;
                    case "authority first slash":
                        if ("/" == n) y = "authority second slash"; else {
                            M("Expected '/', got: " + n);
                            y = "authority ignore slashes";
                            continue
                        }
                        break;
                    case "authority second slash":
                        y = "authority ignore slashes";
                        if ("/" != n) {
                            M("Expected '/', got: " +
                                n);
                            continue
                        }
                        break;
                    case "authority ignore slashes":
                        if ("/" != n && "\\" != n) {
                            y = "authority";
                            continue
                        } else M("Expected authority, got: " + n);
                        break;
                    case "authority":
                        if ("@" == n) {
                            sa && (M("@ already seen."), v += "%40");
                            sa = !0;
                            for (n = 0; n < v.length; n++) I = v[n], "\t" == I || "\n" == I || "\r" == I ? M("Invalid whitespace in authority.") : ":" == I && null === this.f ? this.f = "" : (I = c(I), null !== this.f ? this.f += I : this.s += I);
                            v = ""
                        } else if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                            W -= v.length;
                            v = "";
                            y = "host";
                            continue
                        } else v += n;
                        break;
                    case "file host":
                        if (void 0 ==
                            n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                            2 != v.length || !q.test(v[0]) || ":" != v[1] && "|" != v[1] ? (0 != v.length && (this.i = b.call(this, v), v = ""), y = "relative path start") : y = "relative path";
                            continue
                        } else "\t" == n || "\n" == n || "\r" == n ? M("Invalid whitespace in file host.") : v += n;
                        break;
                    case "host":
                    case "hostname":
                        if (":" != n || ea) if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                            this.i = b.call(this, v);
                            v = "";
                            y = "relative path start";
                            if (F) break a;
                            continue
                        } else "\t" != n && "\n" != n && "\r" != n ? ("[" == n ? ea = !0 : "]" == n && (ea = !1), v += n) : M("Invalid code point in host/hostname: " +
                            n); else if (this.i = b.call(this, v), v = "", y = "port", "hostname" == F) break a;
                        break;
                    case "port":
                        if (/[0-9]/.test(n)) v += n; else if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n || F) {
                            "" != v && (v = parseInt(v, 10), v != l[this.g] && (this.m = v + ""), v = "");
                            if (F) break a;
                            y = "relative path start";
                            continue
                        } else "\t" == n || "\n" == n || "\r" == n ? M("Invalid code point in port: " + n) : (f.call(this), this.h = !0);
                        break;
                    case "relative path start":
                        "\\" == n && M("'\\' not allowed in path.");
                        y = "relative path";
                        if ("/" != n && "\\" != n) continue;
                        break;
                    case "relative path":
                        if (void 0 !=
                            n && "/" != n && "\\" != n && (F || "?" != n && "#" != n)) "\t" != n && "\n" != n && "\r" != n && (v += c(n)); else {
                            "\\" == n && M("\\ not allowed in relative path.");
                            if (I = m[v.toLowerCase()]) v = I;
                            ".." == v ? (this.j.pop(), "/" != n && "\\" != n && this.j.push("")) : "." == v && "/" != n && "\\" != n ? this.j.push("") : "." != v && ("file" == this.g && 0 == this.j.length && 2 == v.length && q.test(v[0]) && "|" == v[1] && (v = v[0] + ":"), this.j.push(v));
                            v = "";
                            "?" == n ? (this.o = "?", y = "query") : "#" == n && (this.u = "#", y = "fragment")
                        }
                        break;
                    case "query":
                        F || "#" != n ? void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.o +=
                            d(n)) : (this.u = "#", y = "fragment");
                        break;
                    case "fragment":
                        void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.u += n)
                }
                W++
            }
        }

        function f() {
            this.s = this.pa = this.g = "";
            this.f = null;
            this.m = this.i = "";
            this.j = [];
            this.u = this.o = "";
            this.A = this.h = !1
        }

        function g(r, F) {
            void 0 === F || F instanceof g || (F = new g(String(F)));
            this.a = r;
            f.call(this);
            e.call(this, this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), null, F)
        }

        var h = !1;
        try {
            var k = new URL("b", "http://a");
            k.pathname = "c%20d";
            h = "http://a/c%20d" === k.href
        } catch (r) {
        }
        if (!h) {
            var l = Object.create(null);
            l.ftp = 21;
            l.file = 0;
            l.gopher = 70;
            l.http = 80;
            l.https = 443;
            l.ws = 80;
            l.wss = 443;
            var m = Object.create(null);
            m["%2e"] = ".";
            m[".%2e"] = "..";
            m["%2e."] = "..";
            m["%2e%2e"] = "..";
            var q = /[a-zA-Z]/, H = /[a-zA-Z0-9\+\-\.]/;
            g.prototype = {
                toString: function () {
                    return this.href
                }, get href() {
                    if (this.h) return this.a;
                    var r = "";
                    if ("" != this.s || null != this.f) r = this.s + (null != this.f ? ":" + this.f : "") + "@";
                    return this.protocol + (this.A ? "//" + r + this.host : "") + this.pathname + this.o + this.u
                }, set href(r) {
                    f.call(this);
                    e.call(this, r)
                }, get protocol() {
                    return this.g +
                        ":"
                }, set protocol(r) {
                    this.h || e.call(this, r + ":", "scheme start")
                }, get host() {
                    return this.h ? "" : this.m ? this.i + ":" + this.m : this.i
                }, set host(r) {
                    !this.h && this.A && e.call(this, r, "host")
                }, get hostname() {
                    return this.i
                }, set hostname(r) {
                    !this.h && this.A && e.call(this, r, "hostname")
                }, get port() {
                    return this.m
                }, set port(r) {
                    !this.h && this.A && e.call(this, r, "port")
                }, get pathname() {
                    return this.h ? "" : this.A ? "/" + this.j.join("/") : this.pa
                }, set pathname(r) {
                    !this.h && this.A && (this.j = [], e.call(this, r, "relative path start"))
                }, get search() {
                    return this.h ||
                    !this.o || "?" == this.o ? "" : this.o
                }, set search(r) {
                    !this.h && this.A && (this.o = "?", "?" == r[0] && (r = r.slice(1)), e.call(this, r, "query"))
                }, get hash() {
                    return this.h || !this.u || "#" == this.u ? "" : this.u
                }, set hash(r) {
                    this.h || (r ? (this.u = "#", "#" == r[0] && (r = r.slice(1)), e.call(this, r, "fragment")) : this.u = "")
                }, get origin() {
                    var r;
                    if (this.h || !this.g) return "";
                    switch (this.g) {
                        case "data":
                        case "file":
                        case "javascript":
                        case "mailto":
                            return "null"
                    }
                    return (r = this.host) ? this.g + "://" + r : ""
                }
            };
            var E = a.URL;
            E && (g.createObjectURL = function (r) {
                return E.createObjectURL.apply(E,
                    arguments)
            }, g.revokeObjectURL = function (r) {
                E.revokeObjectURL(r)
            });
            a.URL = g
        }
    })(window);
    Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", {
        get: function () {
            var a = (this.ownerDocument || this).querySelector("base[href]");
            return a && a.href || window.location.href
        }, configurable: !0, enumerable: !0
    });
    var Yh = document.createElement("style");
    Yh.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
    var Zh = document.querySelector("head");
    Zh.insertBefore(Yh, Zh.firstChild);
    var $h = window.customElements, ai = !1, bi = null;
    $h.polyfillWrapFlushCallback && $h.polyfillWrapFlushCallback(function (a) {
        bi = a;
        ai && a()
    });

    function ci() {
        window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document);
        bi && bi();
        ai = !0;
        window.WebComponents.ready = !0;
        document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: !0}))
    }

    "complete" !== document.readyState ? (window.addEventListener("load", ci), window.addEventListener("DOMContentLoaded", function () {
        window.removeEventListener("load", ci);
        ci()
    })) : ci();
}).call(this);

//# sourceMappingURL=webcomponents-bundle.js.map
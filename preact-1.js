!(function (e, t) {
  if ("function" == typeof define && define.amd) define(["exports"], t);
  else if ("undefined" != typeof exports) t(exports);
  else {
    var n = { exports: {} };
    t(n.exports), (e.preact = n.exports);
  }
})(this, function (e) {
  "use strict";
  function t(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(e, t) {
    var n = f(null, e),
      r = n._component;
    return (
      r && s(r, "componentWillMount"),
      t.appendChild(n),
      r && s(r, "componentDidMount"),
      f
    );
  }
  function r(e) {
    var t = "",
      n = ": ",
      r = "; ";
    for (var o in e)
      if (e.hasOwnProperty(o)) {
        var i = e[o];
        (t += D(o)),
          (t += n),
          (t += i),
          "number" != typeof i || T.hasOwnProperty(o) || (t += "px"),
          (t += r);
      }
    return t;
  }
  function o(e) {
    var t = "";
    for (var n in e) e[n] && (t && (t += " "), (t += n));
    return t;
  }
  function i(e, t) {
    for (
      var n = null,
        r = [],
        o = void 0,
        i = void 0,
        l = arguments.length,
        u = Array(l > 2 ? l - 2 : 0),
        p = 2;
      l > p;
      p++
    )
      u[p - 2] = arguments[p];
    if (u.length) {
      n = [];
      for (var d = 0; d < u.length; d++) {
        Array.isArray(u[d]) ? (o = u[d]) : ((o = r), (o[0] = u[d]));
        for (var f = 0; f < o.length; f++) {
          var h = o[f],
            v = c(h) && !a(h);
          v && (h = String(h)),
            v && i
              ? (n[n.length - 1] += h)
              : null !== h && void 0 !== h && n.push(h),
            (i = v);
        }
      }
    }
    var m = new L(e, t, n);
    return s(k, "vnode", m), m;
  }
  function s(e, t) {
    for (
      var n = e[t], r = arguments.length, o = Array(r > 2 ? r - 2 : 0), i = 2;
      r > i;
      i++
    )
      o[i - 2] = arguments[i];
    return n && "function" == typeof n ? n.apply(e, o) : void 0;
  }
  function a(e) {
    return e && e.__isVNode === !0;
  }
  function c(e) {
    return null !== e && void 0 !== e;
  }
  function l(e, t) {
    if (3 === e.nodeType) return "string" == typeof t;
    var n = t.nodeName;
    return "function" == typeof n
      ? e._componentConstructor === n
      : e.nodeName.toLowerCase() === n;
  }
  function u(e, t) {
    var n = e && e._component;
    if (n && e._componentConstructor === t.nodeName) {
      var r = C(t);
      return n.setProps(r, O), e;
    }
    return n && d(e, n), p(t);
  }
  function p(e) {
    var t = E.create(e.nodeName),
      n = C(e);
    t.setProps(n, P), t._render(A);
    var r = t.base;
    return (r._component = t), (r._componentConstructor = e.nodeName), r;
  }
  function d(e, t) {
    delete e._component, s(t, "componentWillUnmount");
    var n = t.base;
    n && n.parentNode && n.parentNode.removeChild(n),
      s(t, "componentDidUnmount"),
      E.collect(t);
  }
  function f(e, t) {
    var n = e,
      r = t.nodeName;
    if ("function" == typeof r) return u(e, t);
    if ("string" == typeof t) {
      if (e) {
        if (3 === e.nodeType) return (e.textContent = t), e;
        1 === e.nodeType && z.collect(e);
      }
      return document.createTextNode(t);
    }
    e
      ? e.nodeName.toLowerCase() !== r &&
        ((n = z.create(r)),
        h(n, U.call(e.childNodes)),
        1 === e.nodeType && z.collect(e))
      : (n = z.create(r));
    var o = _(n) || w,
      i = t.attributes || w;
    if (o !== w)
      for (var a in o)
        if (o.hasOwnProperty(a)) {
          var c = i[a];
          (void 0 === c || null === c || c === !1) && m(n, a, null, o[a]);
        }
    if (i !== w)
      for (var p in i)
        if (i.hasOwnProperty(p)) {
          var d = i[p];
          if (void 0 !== d && null !== d && d !== !1) {
            var g = v(n, p, o[p]);
            d !== g && m(n, p, d, g);
          }
        }
    for (var y = U.call(n.childNodes), b = {}, N = y.length; N--; ) {
      var C = y[N].nodeType,
        x = void 0;
      if (3 === C) x = C.key;
      else {
        if (1 !== C) continue;
        x = y[N].getAttribute("key");
      }
      x && (b[x] = y.splice(N, 1)[0]);
    }
    var P = [];
    if (t.children)
      for (var N = 0, O = t.children.length; O > N; N++) {
        var A = t.children[N],
          T = A.attributes,
          x = void 0,
          R = void 0;
        if ((T && ((x = T.key), (R = x && b[x])), !R)) {
          var k = y.length;
          if (y.length)
            for (var D = 0; k > D; D++)
              if (l(y[D], A)) {
                R = y.splice(D, 1)[0];
                break;
              }
        }
        P.push(f(R, A));
      }
    for (var N = 0, k = P.length; k > N; N++)
      if (n.childNodes[N] !== P[N]) {
        var R = P[N],
          W = R._component,
          L = n.childNodes[N + 1];
        W && s(W, "componentWillMount"),
          L ? n.insertBefore(R, L) : n.appendChild(R),
          W && s(W, "componentDidMount");
      }
    for (var N = 0, k = y.length; k > N; N++) {
      var R = y[N],
        W = R._component;
      W && s(W, "componentWillUnmount"),
        R.parentNode.removeChild(R),
        W
          ? (s(W, "componentDidUnmount"), E.collect(W))
          : 1 === R.nodeType && z.collect(R);
    }
    return n;
  }
  function h(e, t) {
    var n = t.length;
    if (2 >= n)
      return e.appendChild(t[0]), void (2 === n && e.appendChild(t[1]));
    for (var r = document.createDocumentFragment(), o = 0; n > o; o++)
      r.appendChild(t[o]);
    e.appendChild(r);
  }
  function v(e, t, n) {
    return "class" === t ? e.className : "style" === t ? e.style.cssText : n;
  }
  function m(e, t, n, r) {
    "class" === t
      ? (e.className = n)
      : "style" === t
      ? (e.style.cssText = n)
      : y(e, t, n, r);
  }
  function g(e) {
    var t = this._listeners,
      n = t[e.type.toLowerCase()];
    return n ? n.call(t, s(k, "event", e) || e) : void 0;
  }
  function y(e, t, n, r) {
    if ("on" === t.substring(0, 2)) {
      var o = t.substring(2).toLowerCase(),
        i = e._listeners || (e._listeners = {});
      return i[o] || e.addEventListener(o, g), void (i[o] = n);
    }
    var s = b(t);
    e[s] && "function" == typeof e[s]
      ? e[s](n)
      : null !== n
      ? e.setAttribute(t, n)
      : e.removeAttribute(t);
  }
  function b(e) {
    var t = F[e];
    return (
      t ||
        ((t = "set" + e.charAt(0).toUpperCase() + e.substring(1)), (F[e] = t)),
      t
    );
  }
  function _(e) {
    var t = e.attributes;
    return t.getNamedItem ? (t.length ? N(t) : void 0) : t;
  }
  function N(e) {
    for (var t = {}, n = e.length; n--; ) {
      var r = e[n];
      t[r.name] = r.value;
    }
    return t;
  }
  function C(e) {
    var t = x({}, e.attributes);
    return (
      e.children && (t.children = e.children),
      e.text && (t._content = e.text),
      t
    );
  }
  function x(e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e;
  }
  (e.render = n), (e.h = i);
  var w = {},
    P = { render: !1 },
    O = { renderSync: !0 },
    A = { build: !0 },
    T = "\n	boxFlex boxFlexGroup columnCount fillOpacity flex flexGrow\n	flexPositive flexShrink flexNegative fontWeight lineClamp\n	lineHeight opacity order orphans strokeOpacity widows zIndex zoom\n"
      .trim()
      .split(/\s+/g)
      .reduce(function (e, t) {
        return (e[t] = !0), e;
      }, {}),
    U = Array.prototype.slice,
    R = { syncComponentUpdates: !0 },
    k = {};
  (e.options = R),
    (e.hooks = k),
    (k.vnode = function (e) {
      var t = e.attributes;
      if (t) {
        var n = t.style;
        n && !n.substring && (t.style = r(n));
        var i = t["class"];
        t.hasOwnProperty("className") &&
          ((i = t["class"] = t.className), delete t.className),
          i && !i.substring && (t["class"] = o(i));
      }
    });
  var D = function (e) {
      return e.replace(/([A-Z])/, "-$1").toLowerCase();
    },
    W = (function () {
      function e() {
        t(this, e),
          (this._dirty = !1),
          (this.props = s(this, "getDefaultProps") || {}),
          (this.state = s(this, "getInitialState") || {}),
          s(this, "initialize");
      }
      return (
        (e.prototype.shouldComponentUpdate = function (e, t) {
          return !0;
        }),
        (e.prototype.setState = function (e) {
          x(this.state, e), this.triggerRender();
        }),
        (e.prototype.setProps = function (e) {
          var t =
              arguments.length <= 1 || void 0 === arguments[1]
                ? w
                : arguments[1],
            n = this._disableRendering === !0;
          (this._disableRendering = !0),
            s(this, "componentWillReceiveProps", e, this.props),
            (this.nextProps = e),
            (this._disableRendering = n),
            t.renderSync === !0 && R.syncComponentUpdates === !0
              ? this._render()
              : t.render !== !1 && this.triggerRender();
        }),
        (e.prototype.triggerRender = function () {
          this._dirty !== !0 && ((this._dirty = !0), S.add(this));
        }),
        (e.prototype.render = function (e, t) {
          return i("div", { component: this.constructor.name }, e.children);
        }),
        (e.prototype._render = function () {
          var e =
            arguments.length <= 0 || void 0 === arguments[0] ? w : arguments[0];
          if (this._disableRendering !== !0) {
            if (
              ((this._dirty = !1),
              this.base &&
                s(this, "shouldComponentUpdate", this.props, this.state) === !1)
            )
              return void (this.props = this.nextProps);
            (this.props = this.nextProps), s(this, "componentWillUpdate");
            var t = s(this, "render", this.props, this.state);
            if (this.base || e.build === !0) {
              var n = f(this.base, t);
              this.base &&
                n !== this.base &&
                (this.base.parentNode.insertBefore(n, this.base),
                this.base.parentNode.removeChild(this.base)),
                (this.base = n);
            }
            s(this, "componentDidUpdate");
          }
        }),
        e
      );
    })();
  e.Component = W;
  var L = function I(e, n, r) {
    t(this, I), (this.nodeName = e), (this.attributes = n), (this.children = r);
  };
  L.prototype.__isVNode = !0;
  var S = {
      items: [],
      itemsOffline: [],
      pending: !1,
      add: function (e) {
        if (1 === S.items.push(e)) {
          var t = k.debounceRendering;
          t ? t(S.process) : setTimeout(S.process, 0);
        }
      },
      process: function () {
        var e = S.items,
          t = e.length;
        if (t)
          for (
            S.items = S.itemsOffline, S.items.length = 0, S.itemsOffline = e;
            t--;

          )
            e[t]._dirty && e[t]._render();
      },
    },
    M = S.process;
  e.rerender = M;
  var z = {
      nodes: {},
      collect: function (e) {
        var t = e.nodeName;
        z.clean(e);
        var n = z.nodes[t] || (z.nodes[t] = []);
        n.push(e);
      },
      create: function (e) {
        var t = z.nodes[name];
        return t && t.length ? t.splice(0, 1)[0] : document.createElement(e);
      },
      clean: function (e) {
        if ((e.remove(), e.attributes)) {
          var t = _(e);
          for (var n in t) t.hasOwnProperty(n) && e.removeAttribute(n);
        }
      },
    },
    E = {
      components: {},
      collect: function (e) {
        var t = e.constructor.name,
          n = E.components[t] || (E.components[t] = []);
        n.push(e);
      },
      create: function (e) {
        var t = e.name,
          n = E.components[t];
        return n && n.length ? n.splice(0, 1)[0] : new e();
      },
    },
    F = {};
});
//# sourceMappingURL=preact.js.map

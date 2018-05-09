/* jshint ignore:start */

// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

/*!
 * jQuery Waypoints - v2.0.2
 * Copyright (c) 2011-2013 Caleb Troughton
 * Dual licensed under the MIT license and GPL license.
 * https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
 */
function handleScroll() {
  var e = 1e3,
    t = $(window).scrollTop(),
    n = $(".backtotop");
  t > e ? n.fadeIn() : n.fadeOut()
}(function() {
  var e = [].indexOf || function(e) {
      for (var t = 0, n = this.length; t < n; t++)
        if (t in this && this[t] === e) return t;
      return -1
    },
    t = [].slice;
  (function(e, t) {
    return typeof define == "function" && define.amd ? define("waypoints", ["jquery"], function(n) {
      return t(n, e)
    }) : t(e.jQuery, e)
  })(this, function(n, r) {
    var i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b;
    return i = n(r), c = e.call(r, "ontouchstart") >= 0, u = {
      horizontal: {},
      vertical: {}
    }, a = 1, l = {}, f = "waypoints-context-id", d = "resize.waypoints", v = "scroll.waypoints", m = 1, g = "waypoints-waypoint-ids", y = "waypoint", b = "waypoints", s = function() {
      function e(e) {
        var t = this;
        this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + a++, this.oldScroll = {
          x: e.scrollLeft(),
          y: e.scrollTop()
        }, this.waypoints = {
          horizontal: {},
          vertical: {}
        }, e.data(f, this.id), l[this.id] = this, e.bind(v, function() {
          var e;
          if (!t.didScroll && !c) return t.didScroll = !0, e = function() {
            return t.doScroll(), t.didScroll = !1
          }, r.setTimeout(e, n[b].settings.scrollThrottle)
        }), e.bind(d, function() {
          var e;
          if (!t.didResize) return t.didResize = !0, e = function() {
            return n[b]("refresh"), t.didResize = !1
          }, r.setTimeout(e, n[b].settings.resizeThrottle)
        })
      }
      return e.prototype.doScroll = function() {
        var e, t = this;
        return e = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        }, c && (!e.vertical.oldScroll || !e.vertical.newScroll) && n[b]("refresh"), n.each(e, function(e, r) {
          var i, s, o;
          return o = [], s = r.newScroll > r.oldScroll, i = s ? r.forward : r.backward, n.each(t.waypoints[e], function(e, t) {
            var n, i;
            if (r.oldScroll < (n = t.offset) && n <= r.newScroll) return o.push(t);
            if (r.newScroll < (i = t.offset) && i <= r.oldScroll) return o.push(t)
          }), o.sort(function(e, t) {
            return e.offset - t.offset
          }), s || o.reverse(), n.each(o, function(e, t) {
            if (t.options.continuous || e === o.length - 1) return t.trigger([i])
          })
        }), this.oldScroll = {
          x: e.horizontal.newScroll,
          y: e.vertical.newScroll
        }
      }, e.prototype.refresh = function() {
        var e, t, r, i = this;
        return r = n.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
          horizontal: {
            contextOffset: r ? 0 : t.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: r ? 0 : t.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r ? n[b]("viewportHeight") : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        }, n.each(e, function(e, t) {
          return n.each(i.waypoints[e], function(e, r) {
            var i, s, o, u, a;
            i = r.options.offset, o = r.offset, s = n.isWindow(r.element) ? 0 : r.$element.offset()[t.offsetProp], n.isFunction(i) ? i = i.apply(r.element) : typeof i == "string" && (i = parseFloat(i), r.options.offset.indexOf("%") > -1 && (i = Math.ceil(t.contextDimension * i / 100))), r.offset = s - t.contextOffset + t.contextScroll - i;
            if (r.options.onlyOnScroll && o != null || !r.enabled) return;
            if (o !== null && o < (u = t.oldScroll) && u <= r.offset) return r.trigger([t.backward]);
            if (o !== null && o > (a = t.oldScroll) && a >= r.offset) return r.trigger([t.forward]);
            if (o === null && t.oldScroll >= r.offset) return r.trigger([t.forward])
          })
        })
      }, e.prototype.checkEmpty = function() {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([d, v].join(" ")), delete l[this.id]
      }, e
    }(), o = function() {
      function e(e, t, r) {
        var i, s;
        r = n.extend({}, n.fn[y].defaults, r), r.offset === "bottom-in-view" && (r.offset = function() {
          var e;
          return e = n[b]("viewportHeight"), n.isWindow(t.element) || (e = t.$element.height()), e - n(this).outerHeight()
        }), this.$element = e, this.element = e[0], this.axis = r.horizontal ? "horizontal" : "vertical", this.callback = r.handler, this.context = t, this.enabled = r.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = r, t.waypoints[this.axis][this.id] = this, u[this.axis][this.id] = this, i = (s = e.data(g)) != null ? s : [], i.push(this.id), e.data(g, i)
      }
      return e.prototype.trigger = function(e) {
        if (!this.enabled) return;
        this.callback != null && this.callback.apply(this.element, e);
        if (this.options.triggerOnce) return this.destroy()
      }, e.prototype.disable = function() {
        return this.enabled = !1
      }, e.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0
      }, e.prototype.destroy = function() {
        return delete u[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
      }, e.getWaypointsByElement = function(e) {
        var t, r;
        return r = n(e).data(g), r ? (t = n.extend({}, u.horizontal, u.vertical), n.map(r, function(e) {
          return t[e]
        })) : []
      }, e
    }(), p = {
      init: function(e, t) {
        var r;
        return t == null && (t = {}), (r = t.handler) == null && (t.handler = e), this.each(function() {
          var e, r, i, u;
          return e = n(this), i = (u = t.context) != null ? u : n.fn[y].defaults.context, n.isWindow(i) || (i = e.closest(i)), i = n(i), r = l[i.data(f)], r || (r = new s(i)), new o(e, r, t)
        }), n[b]("refresh"), this
      },
      disable: function() {
        return p._invoke(this, "disable")
      },
      enable: function() {
        return p._invoke(this, "enable")
      },
      destroy: function() {
        return p._invoke(this, "destroy")
      },
      prev: function(e, t) {
        return p._traverse.call(this, e, t, function(e, t, n) {
          if (t > 0) return e.push(n[t - 1])
        })
      },
      next: function(e, t) {
        return p._traverse.call(this, e, t, function(e, t, n) {
          if (t < n.length - 1) return e.push(n[t + 1])
        })
      },
      _traverse: function(e, t, i) {
        var s, o;
        return e == null && (e = "vertical"), t == null && (t = r), o = h.aggregate(t), s = [], this.each(function() {
          var t;
          return t = n.inArray(this, o[e]), i(s, t, o[e])
        }), this.pushStack(s)
      },
      _invoke: function(e, t) {
        return e.each(function() {
          var e;
          return e = o.getWaypointsByElement(this), n.each(e, function(e, n) {
            return n[t](), !0
          })
        }), this
      }
    }, n.fn[y] = function() {
      var e, r;
      return r = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], p[r] ? p[r].apply(this, e) : n.isFunction(r) ? p.init.apply(this, arguments) : n.isPlainObject(r) ? p.init.apply(this, [null, r]) : r ? n.error("The " + r + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.")
    }, n.fn[y].defaults = {
      context: r,
      continuous: !0,
      enabled: !0,
      horizontal: !1,
      offset: 0,
      triggerOnce: !1
    }, h = {
      refresh: function() {
        return n.each(l, function(e, t) {
          return t.refresh()
        })
      },
      viewportHeight: function() {
        var e;
        return (e = r.innerHeight) != null ? e : i.height()
      },
      aggregate: function(e) {
        var t, r, i;
        return t = u, e && (t = (i = l[n(e).data(f)]) != null ? i.waypoints : void 0), t ? (r = {
          horizontal: [],
          vertical: []
        }, n.each(r, function(e, i) {
          return n.each(t[e], function(e, t) {
            return i.push(t)
          }), i.sort(function(e, t) {
            return e.offset - t.offset
          }), r[e] = n.map(i, function(e) {
            return e.element
          }), r[e] = n.unique(r[e])
        }), r) : []
      },
      above: function(e) {
        return e == null && (e = r), h._filter(e, "vertical", function(e, t) {
          return t.offset <= e.oldScroll.y
        })
      },
      below: function(e) {
        return e == null && (e = r), h._filter(e, "vertical", function(e, t) {
          return t.offset > e.oldScroll.y
        })
      },
      left: function(e) {
        return e == null && (e = r), h._filter(e, "horizontal", function(e, t) {
          return t.offset <= e.oldScroll.x
        })
      },
      right: function(e) {
        return e == null && (e = r), h._filter(e, "horizontal", function(e, t) {
          return t.offset > e.oldScroll.x
        })
      },
      enable: function() {
        return h._invoke("enable")
      },
      disable: function() {
        return h._invoke("disable")
      },
      destroy: function() {
        return h._invoke("destroy")
      },
      extendFn: function(e, t) {
        return p[e] = t
      },
      _invoke: function(e) {
        var t;
        return t = n.extend({}, u.vertical, u.horizontal), n.each(t, function(t, n) {
          return n[e](), !0
        })
      },
      _filter: function(e, t, r) {
        var i, s;
        return i = l[n(e).data(f)], i ? (s = [], n.each(i.waypoints[t], function(e, t) {
          if (r(i, t)) return s.push(t)
        }), s.sort(function(e, t) {
          return e.offset - t.offset
        }), n.map(s, function(e) {
          return e.element
        })) : []
      }
    }, n[b] = function() {
      var e, n;
      return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], h[n] ? h[n].apply(null, e) : h.aggregate.call(null, n)
    }, n[b].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    }, i.load(function() {
      return n[b]("refresh")
    })
  })
}).call(this);
var mobile = !1;
(function(e) {
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) mobile = !0
})(navigator.userAgent || navigator.vendor || window.opera, undefined),
function() {
  function e(e) {
    this.path = e;
    var t = this.path.split("."),
      n = t.slice(0, t.length - 1).join("."),
      r = t[t.length - 1];
    this.at_2x_path = n + "@2x." + r
  }

  function t(t) {
    this.el = t, this.path = new e(this.el.getAttribute("src"));
    var n = this;
    this.path.check_2x_variant(function(e) {
      e && n.swap()
    })
  }
  var n = typeof exports == "undefined" ? window : exports;
  n.RetinaImagePath = e, e.confirmed_paths = [], e.prototype.is_external = function() {
    return !!this.path.match(/^https?\:/i) && !this.path.match("//" + document.domain)
  }, e.prototype.check_2x_variant = function(t) {
    var n, r = this;
    if (this.is_external()) return t(!1);
    if (this.at_2x_path in e.confirmed_paths) return t(!0);
    n = new XMLHttpRequest, n.open("HEAD", this.at_2x_path), n.onreadystatechange = function() {
      return n.readyState != 4 ? t(!1) : n.status >= 200 && n.status <= 399 ? (e.confirmed_paths.push(r.at_2x_path), t(!0)) : t(!1)
    }, n.send()
  }, n.RetinaImage = t, t.prototype.swap = function(e) {
    function t() {
      n.el.complete ? (n.el.setAttribute("width", n.el.offsetWidth), n.el.setAttribute("height", n.el.offsetHeight), n.el.setAttribute("src", e)) : setTimeout(t, 5)
    }
    typeof e == "undefined" && (e = this.path.at_2x_path);
    var n = this;
    t()
  }, n.devicePixelRatio > 1 && (window.onload = function() {
    var e = document.getElementsByTagName("img"),
      n = [],
      r, i;
    for (r = 0; r < e.length; r++) i = e[r], n.push(new t(i))
  })
}(),
function(e, t, n) {
  "use strict";

  function r(n) {
    o = t.documentElement, u = t.body, B(), tt = this, n = n || {}, ut = n.constants || {};
    if (n.easing)
      for (var r in n.easing) j[r] = n.easing[r];
    rt = {
      beforerender: n.beforerender,
      render: n.render
    }, it = n.forceHeight !== !1, ht = n.smoothScrolling !== !1, pt = {
      targetTop: tt.getScrollTop()
    }, it && (ot = n.scale || 1), Q(o, [c], [h]);
    if (it) {
      var s = t.getElementById("skrollr-body") || t.createElement("div"),
        a = s.style;
      a.minWidth = "1px", a.position = "absolute", a.top = a.zIndex = "0", s.id || (a.width = "1px", a.right = "0", u.appendChild(s)),
        function(e) {
          $ = function() {
            e.apply(this, arguments), a.height = st + o.clientHeight + "px"
          }
        }($)
    }
    return tt.refresh(), i.addEvent(e, "resize", $),
      function f() {
        x(f), q()
      }(), tt
  }
  var i = e.skrollr = {
      get: function() {
        return tt
      },
      init: function(e) {
        return tt || new r(e)
      },
      VERSION: "0.5.14"
    },
    s = Object.prototype.hasOwnProperty,
    o, u, a = "rendered",
    f = "un" + a,
    l = "skrollable",
    c = "skrollr",
    h = "no-" + c,
    p = "linear",
    d = 1e3,
    v = 200,
    m = "start",
    g = "end",
    y = "top",
    b = "center",
    w = "bottom",
    E = "___has_rendered_class",
    S = "___skrollable_id",
    x = e.requestAnimationFrame;
  (function() {
    var t = ["ms", "moz", "webkit", "o"],
      n;
    for (n = 0; n < t.length && !x; n++) x = e[t[n] + "RequestAnimationFrame"];
    var r = 0;
    x || (x = function(t) {
      var n = Z(),
        i = Math.max(0, 30 - (n - r));
      e.setTimeout(function() {
        t(n + i)
      }, i), r = n + i
    })
  })();
  var T = /^\s*(.+)\s*$/m,
    N = /^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
    C = /\s*([a-z\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
    k = /^([a-z\-]+)\[(\w+)\]$/,
    L = /-([a-z])/g,
    A = function(e, t) {
      return t.toUpperCase()
    },
    O = /[\-+]?[\d]*\.?[\d]+/g,
    M = /\{\?\}/g,
    _ = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    D = /[a-z\-]+-gradient/g,
    P, H, B = function() {
      var t = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
      if (e.getComputedStyle) {
        var n = e.getComputedStyle(u, null);
        for (var r in n) {
          P = r.match(t) || +r == r && n[r].match(t);
          if (P) break
        }
        P && (P = P[0], P.slice(0, 1) === "-" ? (H = P, P = {
          "-webkit-": "webkit",
          "-moz-": "Moz",
          "-ms-": "ms",
          "-o-": "O"
        }[P]) : H = "-" + P.toLowerCase() + "-")
      }
    },
    j = {
      begin: function() {
        return 0
      },
      end: function() {
        return 1
      },
      linear: function(e) {
        return e
      },
      quadratic: function(e) {
        return e * e
      },
      cubic: function(e) {
        return e * e * e
      },
      swing: function(e) {
        return -Math.cos(e * Math.PI) / 2 + .5
      },
      sqrt: function(e) {
        return Math.sqrt(e)
      },
      bounce: function(e) {
        var t;
        if (e <= .5083) t = 3;
        else if (e <= .8489) t = 9;
        else if (e <= .96208) t = 27;
        else {
          if (!(e <= .99981)) return 1;
          t = 91
        }
        return 1 - Math.abs(3 * Math.cos(e * t * 1.028) / t)
      }
    };
  r.prototype.refresh = function(e) {
    var r, i = !1;
    e === n ? (i = !0, nt = [], vt = 0, e = t.getElementsByTagName("*")) : e = [].concat(e);
    for (r = 0; r < e.length; r++) {
      var s = e[r],
        o = s,
        u = [],
        c = ht;
      if (!s.attributes) continue;
      for (var h = 0; h < s.attributes.length; h++) {
        var p = s.attributes[h];
        if (p.name === "data-anchor-target") {
          o = t.querySelector(p.value);
          if (o === null) throw 'Unable to find anchor target "' + p.value + '"';
          continue
        }
        if (p.name === "data-smooth-scrolling") {
          c = p.value !== "off";
          continue
        }
        var d = p.name.match(N);
        if (d !== null) {
          var v = d[1];
          v = v && ut[v.substr(1)] || 0;
          var y = (d[2] | 0) + v,
            b = d[3],
            w = d[4] || b,
            x = {
              offset: y,
              props: p.value,
              element: s
            };
          u.push(x), !b || b === m || b === g ? (x.mode = "absolute", b === g ? x.isEnd = !0 : (x.frame = y * ot, delete x.offset)) : (x.mode = "relative", x.anchors = [b, w])
        }
      }
      if (u.length) {
        var T, C, k;
        !i && S in s ? (k = s[S], T = nt[k].styleAttr, C = nt[k].classAttr) : (k = s[S] = vt++, T = s.style.cssText, C = K(s));
        var L = nt[k] = {
          element: s,
          styleAttr: T,
          classAttr: C,
          anchorTarget: o,
          keyFrames: u,
          smoothScrolling: c
        };
        Q(s, [l, a], [f]), L[E] = !0
      }
    }
    $();
    for (r = 0; r < e.length; r++) {
      var A = nt[e[r][S]];
      if (A === n) continue;
      A.keyFrames.sort(et), R(A), z(A)
    }
    return tt
  }, r.prototype.relativeToAbsolute = function(e, t, n) {
    var r = o.clientHeight,
      i = e.getBoundingClientRect(),
      s = i.top,
      u = i.bottom - i.top;
    return t === w ? s -= r : t === b && (s -= r / 2), n === w ? s += u : n === b && (s += u / 2), s += tt.getScrollTop(), s + .5 | 0
  }, r.prototype.animateTo = function(e, t) {
    t = t || {};
    var r = Z(),
      i = tt.getScrollTop();
    return ct = {
      startTop: i,
      topDiff: e - i,
      targetTop: e,
      duration: t.duration || d,
      startTime: r,
      endTime: r + (t.duration || d),
      easing: j[t.easing || p],
      done: t.done
    }, ct.topDiff || (ct.done && ct.done.call(tt, !1), ct = n), tt
  }, r.prototype.stopAnimateTo = function() {
    ct && ct.done && ct.done.call(tt, !0), ct = n
  }, r.prototype.isAnimatingTo = function() {
    return !!ct
  }, r.prototype.setScrollTop = function(t, n) {
    return n === !0 && (ft = t, dt = !0), i.iscroll ? i.iscroll.scrollTo(0, -t) : e.scrollTo(0, t), tt
  }, r.prototype.getScrollTop = function() {
    return i.iscroll ? -i.iscroll.y : e.pageYOffset || o.scrollTop || u.scrollTop || 0
  }, r.prototype.on = function(e, t) {
    return rt[e] = t, tt
  }, r.prototype.off = function(e) {
    return delete rt[e], tt
  };
  var F = function() {
      var e, t, n, r, i, s, o, u, a;
      for (s = 0; s < nt.length; s++) {
        e = nt[s], t = e.element, n = e.anchorTarget, r = e.keyFrames;
        for (o = 0; o < r.length; o++) i = r[o], i.mode === "relative" && (u = t.style.cssText, a = K(t), t.style.cssText = e.styleAttr, Q(t, e.classAttr), i.frame = tt.relativeToAbsolute(n, i.anchors[0], i.anchors[1]) - i.offset, t.style.cssText = u, Q(t, a)), it && !i.isEnd && i.frame > st && (st = i.frame)
      }
      st = Math.max(st, J());
      for (s = 0; s < nt.length; s++) {
        e = nt[s], r = e.keyFrames;
        for (o = 0; o < r.length; o++) i = r[o], i.isEnd && (i.frame = st - i.offset)
      }
    },
    I = function(e, t) {
      for (var n = 0; n < nt.length; n++) {
        var r = nt[n],
          o = r.smoothScrolling ? e : t,
          u = r.keyFrames,
          l = u[0].frame,
          c = u[u.length - 1].frame,
          h = o <= l,
          p = o >= c,
          d, v;
        if (h || p) {
          var m = u[h ? 0 : u.length - 1].props;
          for (d in m) s.call(m, d) && (v = V(m[d].value), i.setStyle(r.element, d, v));
          r[E] && (o < l || o > c) && (Q(r.element, [f], [a]), r[E] = !1);
          continue
        }
        r[E] || (Q(r.element, [a], [f]), r[E] = !0);
        for (var g = 0; g < u.length - 1; g++)
          if (o >= u[g].frame && o <= u[g + 1].frame) {
            var y = u[g],
              b = u[g + 1];
            for (d in y.props)
              if (s.call(y.props, d)) {
                var w = (o - y.frame) / (b.frame - y.frame);
                w = y.props[d].easing(w), v = X(y.props[d].value, b.props[d].value, w), v = V(v), i.setStyle(r.element, d, v)
              }
            break
          }
      }
    },
    q = function() {
      var e = tt.getScrollTop(),
        t, r = Z(),
        i;
      if (ct) r >= ct.endTime ? (e = ct.targetTop, t = ct.done, ct = n) : (i = ct.easing((r - ct.startTime) / ct.duration), e = ct.startTop + i * ct.topDiff | 0), tt.setScrollTop(e);
      else {
        var s = pt.targetTop - e;
        s && (pt = {
          startTop: ft,
          topDiff: e - ft,
          targetTop: e,
          startTime: lt,
          endTime: lt + v
        }), r <= pt.endTime && (i = j.sqrt((r - pt.startTime) / v), e = pt.startTop + i * pt.topDiff | 0)
      }
      e < 0 && (e = 0);
      if (dt || ft !== e) {
        at = e >= ft ? "down" : "up", dt = !1;
        var o = {
            curTop: e,
            lastTop: ft,
            maxTop: st,
            direction: at
          },
          u = rt.beforerender && rt.beforerender.call(tt, o);
        u !== !1 && (I(e, tt.getScrollTop()), ft = e, rt.render && rt.render.call(tt, o)), t && t.call(tt, !1)
      }
      lt = r
    },
    R = function(e) {
      for (var t = 0; t < e.keyFrames.length; t++) {
        var n = e.keyFrames[t],
          r, i, s, o = {},
          u;
        while ((u = C.exec(n.props)) !== null) s = u[1], i = u[2], r = s.match(k), r !== null ? (s = r[1], r = r[2]) : r = p, i = i.indexOf("!") ? U(i) : [i.slice(1)], o[s] = {
          value: i,
          easing: j[r]
        };
        n.props = o
      }
    },
    U = function(e) {
      var t = [];
      return _.lastIndex = 0, e = e.replace(_, function(e) {
        return e.replace(O, function(e) {
          return e / 255 * 100 + "%"
        })
      }), H && (D.lastIndex = 0, e = e.replace(D, function(e) {
        return H + e
      })), e = e.replace(O, function(e) {
        return t.push(+e), "{?}"
      }), t.unshift(e), t
    },
    z = function(e) {
      var t = {},
        n;
      for (n = 0; n < e.keyFrames.length; n++) W(e.keyFrames[n], t);
      t = {};
      for (n = e.keyFrames.length - 1; n >= 0; n--) W(e.keyFrames[n], t)
    },
    W = function(e, t) {
      var n;
      for (n in t) s.call(e.props, n) || (e.props[n] = t[n]);
      for (n in e.props) t[n] = e.props[n]
    },
    X = function(e, t, n) {
      if (e.length !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
      var r = [e[0]];
      for (var i = 1; i < e.length; i++) r[i] = e[i] + (t[i] - e[i]) * n;
      return r
    },
    V = function(e) {
      var t = 1;
      return M.lastIndex = 0, e[0].replace(M, function() {
        return e[t++]
      })
    };
  i.setStyle = function(e, t, n) {
    var r = e.style;
    t = t.replace(L, A).replace("-", "");
    if (t === "zIndex") r[t] = "" + (n | 0);
    else if (t === "float") r.styleFloat = r.cssFloat = n;
    else try {
      P && (r[P + t.slice(0, 1).toUpperCase() + t.slice(1)] = n), r[t] = n
    } catch (i) {}
  }, i.addEvent = function(t, n, r) {
    var i = function(t) {
      return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function() {
        t.returnValue = !1
      }), r.call(this, t)
    };
    e.addEventListener ? t.addEventListener(n, i, !1) : t.attachEvent("on" + n, i)
  };
  var $ = function() {
      st = 0, F(), dt = !0, i.iscroll && e.setTimeout(function() {
        i.iscroll.refresh()
      }, 0)
    },
    J = function() {
      var e = Math.max(u.scrollHeight, u.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight);
      return e - o.clientHeight
    },
    K = function(t) {
      var n = "className";
      return e.SVGElement && t instanceof e.SVGElement && (t = t[n], n = "baseVal"), t[n]
    },
    Q = function(t, r, i) {
      var s = "className";
      e.SVGElement && t instanceof e.SVGElement && (t = t[s], s = "baseVal");
      if (i === n) {
        t[s] = r;
        return
      }
      var o = t[s];
      for (var u = 0; u < r.length; u++) Y(o).indexOf(Y(r[u])) === -1 && (o += " " + r[u]);
      for (var a = 0; a < i.length; a++) o = Y(o).replace(Y(i[a]), " ");
      t[s] = G(o)
    },
    G = function(e) {
      return e.replace(T, "$1")
    },
    Y = function(e) {
      return " " + e + " "
    },
    Z = Date.now || function() {
      return +(new Date)
    },
    et = function(e, t) {
      return e.frame - t.frame
    },
    tt, nt, rt, it, st = 0,
    ot = 1,
    ut, at = "down",
    ft = -1,
    lt = Z(),
    ct, ht, pt, dt, vt = 0
}(window, document), $("a[href*=#]:not([href=#])").click(function() {
  if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
    var e = $(this.hash);
    e = e.length ? e : $("[name=" + this.hash.slice(1) + "]");
    if (e.length) return $("html,body").animate({
      scrollTop: e.offset().top - 40
    }, 4e3), !1
  }
}), mobile || skrollr.init({
  smoothScrolling: !0,
  forceHeight: !1
});
var scrollTimer = null;
$(window).scroll(function() {
  scrollTimer && clearTimeout(scrollTimer), scrollTimer = setTimeout(handleScroll, 500)
});
// retina.js, a high-resolution image swapper (http://retinajs.com), v0.0.2
(function() {
  function t(e) {
    this.path = e;
    var t = this.path.split("."),
      n = t.slice(0, t.length - 1).join("."),
      r = t[t.length - 1];
    this.at_2x_path = n + "@2x." + r
  }

  function n(e) {
    this.el = e, this.path = new t(this.el.getAttribute("src"));
    var n = this;
    this.path.check_2x_variant(function(e) {
      e && n.swap()
    })
  }
  var e = typeof exports == "undefined" ? window : exports;
  e.RetinaImagePath = t, t.confirmed_paths = [], t.prototype.is_external = function() {
    return !!this.path.match(/^https?\:/i) && !this.path.match("//" + document.domain)
  }, t.prototype.check_2x_variant = function(e) {
    var n, r = this;
    if (this.is_external()) return e(!1);
    if (this.at_2x_path in t.confirmed_paths) return e(!0);
    n = new XMLHttpRequest, n.open("HEAD", this.at_2x_path), n.onreadystatechange = function() {
      return n.readyState != 4 ? e(!1) : n.status >= 200 && n.status <= 399 ? (t.confirmed_paths.push(r.at_2x_path), e(!0)) : e(!1)
    }, n.send()
  }, e.RetinaImage = n, n.prototype.swap = function(e) {
    function n() {
      t.el.complete ? (t.el.setAttribute("width", t.el.offsetWidth), t.el.setAttribute("height", t.el.offsetHeight), t.el.setAttribute("src", e)) : setTimeout(n, 5)
    }
    typeof e == "undefined" && (e = this.path.at_2x_path);
    var t = this;
    n()
  }, e.devicePixelRatio > 1 && (window.onload = function() {
    var e = document.getElementsByTagName("img"),
      t = [],
      r, i;
    for (r = 0; r < e.length; r++) i = e[r], t.push(new n(i))
  })
})();

/*! skrollr v0.5.14 https://github.com/Prinzhorn/skrollr | free to use under terms of MIT license */
(function(e, t, n) {
  "use strict";

  function j(n) {
    s = t.documentElement, o = t.body, H(), tt = this, n = n || {}, ut = n.constants || {};
    if (n.easing)
      for (var i in n.easing) B[i] = n.easing[i];
    rt = {
      beforerender: n.beforerender,
      render: n.render
    }, it = n.forceHeight !== !1, ht = n.smoothScrolling !== !1, pt = {
      targetTop: tt.getScrollTop()
    }, it && (ot = n.scale || 1), Q(s, [l], [c]);
    if (it) {
      var u = t.getElementById("skrollr-body") || t.createElement("div"),
        a = u.style;
      a.minWidth = "1px", a.position = "absolute", a.top = a.zIndex = "0", u.id || (a.width = "1px", a.right = "0", o.appendChild(u)),
        function(e) {
          $ = function() {
            e.apply(this, arguments), a.height = st + s.clientHeight + "px"
          }
        }($)
    }
    return tt.refresh(), r.addEvent(e, "resize", $),
      function f() {
        S(f), q()
      }(), tt
  }
  var r = e.skrollr = {
      get: function() {
        return tt
      },
      init: function(e) {
        return tt || new j(e)
      },
      VERSION: "0.5.14"
    },
    i = Object.prototype.hasOwnProperty,
    s, o, u = "rendered",
    a = "un" + u,
    f = "skrollable",
    l = "skrollr",
    c = "no-" + l,
    h = "linear",
    p = 1e3,
    d = 200,
    v = "start",
    m = "end",
    g = "top",
    y = "center",
    b = "bottom",
    w = "___has_rendered_class",
    E = "___skrollable_id",
    S = e.requestAnimationFrame;
  (function() {
    var t = ["ms", "moz", "webkit", "o"],
      n;
    for (n = 0; n < t.length && !S; n++) S = e[t[n] + "RequestAnimationFrame"];
    var r = 0;
    S || (S = function(t) {
      var n = Z(),
        i = Math.max(0, 30 - (n - r));
      e.setTimeout(function() {
        t(n + i)
      }, i), r = n + i
    })
  })();
  var x = /^\s*(.+)\s*$/m,
    T = /^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
    N = /\s*([a-z\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
    C = /^([a-z\-]+)\[(\w+)\]$/,
    k = /-([a-z])/g,
    L = function(e, t) {
      return t.toUpperCase()
    },
    A = /[\-+]?[\d]*\.?[\d]+/g,
    O = /\{\?\}/g,
    M = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    _ = /[a-z\-]+-gradient/g,
    D, P, H = function() {
      var t = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
      if (e.getComputedStyle) {
        var n = e.getComputedStyle(o, null);
        for (var r in n) {
          D = r.match(t) || +r == r && n[r].match(t);
          if (D) break
        }
        D && (D = D[0], D.slice(0, 1) === "-" ? (P = D, D = {
          "-webkit-": "webkit",
          "-moz-": "Moz",
          "-ms-": "ms",
          "-o-": "O"
        }[D]) : P = "-" + D.toLowerCase() + "-")
      }
    },
    B = {
      begin: function() {
        return 0
      },
      end: function() {
        return 1
      },
      linear: function(e) {
        return e
      },
      quadratic: function(e) {
        return e * e
      },
      cubic: function(e) {
        return e * e * e
      },
      swing: function(e) {
        return -Math.cos(e * Math.PI) / 2 + .5
      },
      sqrt: function(e) {
        return Math.sqrt(e)
      },
      bounce: function(e) {
        var t;
        if (e <= .5083) t = 3;
        else if (e <= .8489) t = 9;
        else if (e <= .96208) t = 27;
        else {
          if (!(e <= .99981)) return 1;
          t = 91
        }
        return 1 - Math.abs(3 * Math.cos(e * t * 1.028) / t)
      }
    };
  j.prototype.refresh = function(e) {
    var r, i = !1;
    e === n ? (i = !0, nt = [], vt = 0, e = t.getElementsByTagName("*")) : e = [].concat(e);
    for (r = 0; r < e.length; r++) {
      var s = e[r],
        o = s,
        l = [],
        c = ht;
      if (!s.attributes) continue;
      for (var h = 0; h < s.attributes.length; h++) {
        var p = s.attributes[h];
        if (p.name === "data-anchor-target") {
          o = t.querySelector(p.value);
          if (o === null) throw 'Unable to find anchor target "' + p.value + '"';
          continue
        }
        if (p.name === "data-smooth-scrolling") {
          c = p.value !== "off";
          continue
        }
        var d = p.name.match(T);
        if (d !== null) {
          var g = d[1];
          g = g && ut[g.substr(1)] || 0;
          var y = (d[2] | 0) + g,
            b = d[3],
            S = d[4] || b,
            x = {
              offset: y,
              props: p.value,
              element: s
            };
          l.push(x), !b || b === v || b === m ? (x.mode = "absolute", b === m ? x.isEnd = !0 : (x.frame = y * ot, delete x.offset)) : (x.mode = "relative", x.anchors = [b, S])
        }
      }
      if (l.length) {
        var N, C, k;
        !i && E in s ? (k = s[E], N = nt[k].styleAttr, C = nt[k].classAttr) : (k = s[E] = vt++, N = s.style.cssText, C = K(s));
        var L = nt[k] = {
          element: s,
          styleAttr: N,
          classAttr: C,
          anchorTarget: o,
          keyFrames: l,
          smoothScrolling: c
        };
        Q(s, [f, u], [a]), L[w] = !0
      }
    }
    $();
    for (r = 0; r < e.length; r++) {
      var A = nt[e[r][E]];
      if (A === n) continue;
      A.keyFrames.sort(et), R(A), z(A)
    }
    return tt
  }, j.prototype.relativeToAbsolute = function(e, t, n) {
    var r = s.clientHeight,
      i = e.getBoundingClientRect(),
      o = i.top,
      u = i.bottom - i.top;
    return t === b ? o -= r : t === y && (o -= r / 2), n === b ? o += u : n === y && (o += u / 2), o += tt.getScrollTop(), o + .5 | 0
  }, j.prototype.animateTo = function(e, t) {
    t = t || {};
    var r = Z(),
      i = tt.getScrollTop();
    return ct = {
      startTop: i,
      topDiff: e - i,
      targetTop: e,
      duration: t.duration || p,
      startTime: r,
      endTime: r + (t.duration || p),
      easing: B[t.easing || h],
      done: t.done
    }, ct.topDiff || (ct.done && ct.done.call(tt, !1), ct = n), tt
  }, j.prototype.stopAnimateTo = function() {
    ct && ct.done && ct.done.call(tt, !0), ct = n
  }, j.prototype.isAnimatingTo = function() {
    return !!ct
  }, j.prototype.setScrollTop = function(t, n) {
    return n === !0 && (ft = t, dt = !0), r.iscroll ? r.iscroll.scrollTo(0, -t) : e.scrollTo(0, t), tt
  }, j.prototype.getScrollTop = function() {
    return r.iscroll ? -r.iscroll.y : e.pageYOffset || s.scrollTop || o.scrollTop || 0
  }, j.prototype.on = function(e, t) {
    return rt[e] = t, tt
  }, j.prototype.off = function(e) {
    return delete rt[e], tt
  };
  var F = function() {
      var e, t, n, r, i, s, o, u, a;
      for (s = 0; s < nt.length; s++) {
        e = nt[s], t = e.element, n = e.anchorTarget, r = e.keyFrames;
        for (o = 0; o < r.length; o++) i = r[o], i.mode === "relative" && (u = t.style.cssText, a = K(t), t.style.cssText = e.styleAttr, Q(t, e.classAttr), i.frame = tt.relativeToAbsolute(n, i.anchors[0], i.anchors[1]) - i.offset, t.style.cssText = u, Q(t, a)), it && !i.isEnd && i.frame > st && (st = i.frame)
      }
      st = Math.max(st, J());
      for (s = 0; s < nt.length; s++) {
        e = nt[s], r = e.keyFrames;
        for (o = 0; o < r.length; o++) i = r[o], i.isEnd && (i.frame = st - i.offset)
      }
    },
    I = function(e, t) {
      for (var n = 0; n < nt.length; n++) {
        var s = nt[n],
          o = s.smoothScrolling ? e : t,
          f = s.keyFrames,
          l = f[0].frame,
          c = f[f.length - 1].frame,
          h = o <= l,
          p = o >= c,
          d, v;
        if (h || p) {
          var m = f[h ? 0 : f.length - 1].props;
          for (d in m) i.call(m, d) && (v = V(m[d].value), r.setStyle(s.element, d, v));
          s[w] && (o < l || o > c) && (Q(s.element, [a], [u]), s[w] = !1);
          continue
        }
        s[w] || (Q(s.element, [u], [a]), s[w] = !0);
        for (var g = 0; g < f.length - 1; g++)
          if (o >= f[g].frame && o <= f[g + 1].frame) {
            var y = f[g],
              b = f[g + 1];
            for (d in y.props)
              if (i.call(y.props, d)) {
                var E = (o - y.frame) / (b.frame - y.frame);
                E = y.props[d].easing(E), v = X(y.props[d].value, b.props[d].value, E), v = V(v), r.setStyle(s.element, d, v)
              }
            break
          }
      }
    },
    q = function() {
      var e = tt.getScrollTop(),
        t, r = Z(),
        i;
      if (ct) r >= ct.endTime ? (e = ct.targetTop, t = ct.done, ct = n) : (i = ct.easing((r - ct.startTime) / ct.duration), e = ct.startTop + i * ct.topDiff | 0), tt.setScrollTop(e);
      else {
        var s = pt.targetTop - e;
        s && (pt = {
          startTop: ft,
          topDiff: e - ft,
          targetTop: e,
          startTime: lt,
          endTime: lt + d
        }), r <= pt.endTime && (i = B.sqrt((r - pt.startTime) / d), e = pt.startTop + i * pt.topDiff | 0)
      }
      e < 0 && (e = 0);
      if (dt || ft !== e) {
        at = e >= ft ? "down" : "up", dt = !1;
        var o = {
            curTop: e,
            lastTop: ft,
            maxTop: st,
            direction: at
          },
          u = rt.beforerender && rt.beforerender.call(tt, o);
        u !== !1 && (I(e, tt.getScrollTop()), ft = e, rt.render && rt.render.call(tt, o)), t && t.call(tt, !1)
      }
      lt = r
    },
    R = function(e) {
      for (var t = 0; t < e.keyFrames.length; t++) {
        var n = e.keyFrames[t],
          r, i, s, o = {},
          u;
        while ((u = N.exec(n.props)) !== null) s = u[1], i = u[2], r = s.match(C), r !== null ? (s = r[1], r = r[2]) : r = h, i = i.indexOf("!") ? U(i) : [i.slice(1)], o[s] = {
          value: i,
          easing: B[r]
        };
        n.props = o
      }
    },
    U = function(e) {
      var t = [];
      return M.lastIndex = 0, e = e.replace(M, function(e) {
        return e.replace(A, function(e) {
          return e / 255 * 100 + "%"
        })
      }), P && (_.lastIndex = 0, e = e.replace(_, function(e) {
        return P + e
      })), e = e.replace(A, function(e) {
        return t.push(+e), "{?}"
      }), t.unshift(e), t
    },
    z = function(e) {
      var t = {},
        n;
      for (n = 0; n < e.keyFrames.length; n++) W(e.keyFrames[n], t);
      t = {};
      for (n = e.keyFrames.length - 1; n >= 0; n--) W(e.keyFrames[n], t)
    },
    W = function(e, t) {
      var n;
      for (n in t) i.call(e.props, n) || (e.props[n] = t[n]);
      for (n in e.props) t[n] = e.props[n]
    },
    X = function(e, t, n) {
      if (e.length !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
      var r = [e[0]];
      for (var i = 1; i < e.length; i++) r[i] = e[i] + (t[i] - e[i]) * n;
      return r
    },
    V = function(e) {
      var t = 1;
      return O.lastIndex = 0, e[0].replace(O, function() {
        return e[t++]
      })
    };
  r.setStyle = function(e, t, n) {
    var r = e.style;
    t = t.replace(k, L).replace("-", "");
    if (t === "zIndex") r[t] = "" + (n | 0);
    else if (t === "float") r.styleFloat = r.cssFloat = n;
    else try {
      D && (r[D + t.slice(0, 1).toUpperCase() + t.slice(1)] = n), r[t] = n
    } catch (i) {}
  }, r.addEvent = function(t, n, r) {
    var i = function(t) {
      return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function() {
        t.returnValue = !1
      }), r.call(this, t)
    };
    e.addEventListener ? t.addEventListener(n, i, !1) : t.attachEvent("on" + n, i)
  };
  var $ = function() {
      st = 0, F(), dt = !0, r.iscroll && e.setTimeout(function() {
        r.iscroll.refresh()
      }, 0)
    },
    J = function() {
      var e = Math.max(o.scrollHeight, o.offsetHeight, s.scrollHeight, s.offsetHeight, s.clientHeight);
      return e - s.clientHeight
    },
    K = function(t) {
      var n = "className";
      return e.SVGElement && t instanceof e.SVGElement && (t = t[n], n = "baseVal"), t[n]
    },
    Q = function(t, r, i) {
      var s = "className";
      e.SVGElement && t instanceof e.SVGElement && (t = t[s], s = "baseVal");
      if (i === n) {
        t[s] = r;
        return
      }
      var o = t[s];
      for (var u = 0; u < r.length; u++) Y(o).indexOf(Y(r[u])) === -1 && (o += " " + r[u]);
      for (var a = 0; a < i.length; a++) o = Y(o).replace(Y(i[a]), " ");
      t[s] = G(o)
    },
    G = function(e) {
      return e.replace(x, "$1")
    },
    Y = function(e) {
      return " " + e + " "
    },
    Z = Date.now || function() {
      return +(new Date)
    },
    et = function(e, t) {
      return e.frame - t.frame
    },
    tt, nt, rt, it, st = 0,
    ot = 1,
    ut, at = "down",
    ft = -1,
    lt = Z(),
    ct, ht, pt, dt, vt = 0
})(window, document);

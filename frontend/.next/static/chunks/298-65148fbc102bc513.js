(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [298],
  {
    2705: function (e, t, n) {
      var r = n(5639).Symbol;
      e.exports = r;
    },
    4239: function (e, t, n) {
      var r = n(2705),
        o = n(9607),
        i = n(2333),
        a = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : a && a in Object(e)
            ? o(e)
            : i(e);
      };
    },
    7561: function (e, t, n) {
      var r = n(7990),
        o = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, r(e) + 1).replace(o, '') : e;
      };
    },
    1957: function (e, t, n) {
      var r = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r;
    },
    9607: function (e, t, n) {
      var r = n(2705),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        l = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = i.call(e, l),
          n = e[l];
        try {
          e[l] = void 0;
          var r = !0;
        } catch (e) {}
        var o = a.call(e);
        return r && (t ? (e[l] = n) : delete e[l]), o;
      };
    },
    2333: function (e) {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    5639: function (e, t, n) {
      var r = n(1957),
        o = 'object' == typeof self && self && self.Object === Object && self,
        i = r || o || Function('return this')();
      e.exports = i;
    },
    7990: function (e) {
      var t = /\s/;
      e.exports = function (e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)); );
        return n;
      };
    },
    3279: function (e, t, n) {
      var r = n(3218),
        o = n(7771),
        i = n(4841),
        a = Math.max,
        l = Math.min;
      e.exports = function (e, t, n) {
        var u,
          s,
          c,
          f,
          d,
          p,
          m = 0,
          h = !1,
          g = !1,
          y = !0;
        if ('function' != typeof e) throw TypeError('Expected a function');
        function _(t) {
          var n = u,
            r = s;
          return (u = s = void 0), (m = t), (f = e.apply(r, n));
        }
        function b(e) {
          var n = e - p,
            r = e - m;
          return void 0 === p || n >= t || n < 0 || (g && r >= c);
        }
        function T() {
          var e,
            n,
            r,
            i = o();
          if (b(i)) return E(i);
          d = setTimeout(T, ((e = i - p), (n = i - m), (r = t - e), g ? l(r, c - n) : r));
        }
        function E(e) {
          return ((d = void 0), y && u) ? _(e) : ((u = s = void 0), f);
        }
        function v() {
          var e,
            n = o(),
            r = b(n);
          if (((u = arguments), (s = this), (p = n), r)) {
            if (void 0 === d) return (m = e = p), (d = setTimeout(T, t)), h ? _(e) : f;
            if (g) return clearTimeout(d), (d = setTimeout(T, t)), _(p);
          }
          return void 0 === d && (d = setTimeout(T, t)), f;
        }
        return (
          (t = i(t) || 0),
          r(n) &&
            ((h = !!n.leading),
            (c = (g = 'maxWait' in n) ? a(i(n.maxWait) || 0, t) : c),
            (y = 'trailing' in n ? !!n.trailing : y)),
          (v.cancel = function () {
            void 0 !== d && clearTimeout(d), (m = 0), (u = p = s = d = void 0);
          }),
          (v.flush = function () {
            return void 0 === d ? f : E(o());
          }),
          v
        );
      };
    },
    3218: function (e) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      };
    },
    7005: function (e) {
      e.exports = function (e) {
        return null != e && 'object' == typeof e;
      };
    },
    3448: function (e, t, n) {
      var r = n(4239),
        o = n(7005);
      e.exports = function (e) {
        return 'symbol' == typeof e || (o(e) && '[object Symbol]' == r(e));
      };
    },
    7771: function (e, t, n) {
      var r = n(5639);
      e.exports = function () {
        return r.Date.now();
      };
    },
    4841: function (e, t, n) {
      var r = n(7561),
        o = n(3218),
        i = n(3448),
        a = 0 / 0,
        l = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function (e) {
        if ('number' == typeof e) return e;
        if (i(e)) return a;
        if (o(e)) {
          var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + '' : t;
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = u.test(e);
        return n || s.test(e) ? c(e.slice(2), n ? 2 : 8) : l.test(e) ? a : +e;
      };
    },
    2602: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          noSSR: function () {
            return a;
          },
        });
      let r = n(8754);
      n(5893), n(7294);
      let o = r._(n(1291));
      function i(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function a(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function l(e, t) {
        let n = o.default,
          r = {
            loading: e => {
              let { error: t, isLoading: n, pastDelay: r } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (r.loader = () => e)
          : 'function' == typeof e
            ? (r.loader = e)
            : 'object' == typeof e && (r = { ...r, ...e });
        let l = (r = { ...r, ...t }).loader;
        return (r.loadableGenerated &&
          ((r = { ...r, ...r.loadableGenerated }), delete r.loadableGenerated),
        'boolean' != typeof r.ssr || r.ssr)
          ? n({ ...r, loader: () => (null != l ? l().then(i) : Promise.resolve(i(() => null))) })
          : (delete r.webpack, delete r.modules, a(n, r));
      }
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1159: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'LoadableContext', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(8754)._(n(7294)).default.createContext(null);
    },
    1291: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(8754)._(n(7294)),
        o = n(1159),
        i = [],
        a = [],
        l = !1;
      function u(e) {
        let t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(e => ((n.loading = !1), (n.loaded = e), e))
            .catch(e => {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      class s {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: t } = this;
          e.loading &&
            ('number' == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            'number' == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch(e => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e,
          }),
            this._callbacks.forEach(e => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, t) {
          (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function c(e) {
        return (function (e, t) {
          let n = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            i = null;
          function u() {
            if (!i) {
              let t = new s(e, n);
              i = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return i.promise();
          }
          if (!l) {
            let e = n.webpack ? n.webpack() : n.modules;
            e &&
              a.push(t => {
                for (let n of e) if (t.includes(n)) return u();
              });
          }
          function c(e, t) {
            !(function () {
              u();
              let e = r.default.useContext(o.LoadableContext);
              e &&
                Array.isArray(n.modules) &&
                n.modules.forEach(t => {
                  e(t);
                });
            })();
            let a = r.default.useSyncExternalStore(
              i.subscribe,
              i.getCurrentValue,
              i.getCurrentValue
            );
            return (
              r.default.useImperativeHandle(t, () => ({ retry: i.retry }), []),
              r.default.useMemo(() => {
                var t;
                return a.loading || a.error
                  ? r.default.createElement(n.loading, {
                      isLoading: a.loading,
                      pastDelay: a.pastDelay,
                      timedOut: a.timedOut,
                      error: a.error,
                      retry: i.retry,
                    })
                  : a.loaded
                    ? r.default.createElement((t = a.loaded) && t.default ? t.default : t, e)
                    : null;
              }, [e, a])
            );
          }
          return (
            (c.preload = () => u()), (c.displayName = 'LoadableComponent'), r.default.forwardRef(c)
          );
        })(u, e);
      }
      function f(e, t) {
        let n = [];
        for (; e.length; ) {
          let r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(() => {
          if (e.length) return f(e, t);
        });
      }
      (c.preloadAll = () =>
        new Promise((e, t) => {
          f(i).then(e, t);
        })),
        (c.preloadReady = e => (
          void 0 === e && (e = []),
          new Promise(t => {
            let n = () => ((l = !0), t());
            f(a, e).then(n, n);
          })
        )),
        (window.__NEXT_PRELOADREADY = c.preloadReady);
      let d = c;
    },
    6834: function () {},
    5152: function (e, t, n) {
      e.exports = n(2602);
    },
    1163: function (e, t, n) {
      e.exports = n(3079);
    },
    2424: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return en;
        },
      });
      let {
          entries: r,
          setPrototypeOf: o,
          isFrozen: i,
          getPrototypeOf: a,
          getOwnPropertyDescriptor: l,
        } = Object,
        { freeze: u, seal: s, create: c } = Object,
        { apply: f, construct: d } = 'undefined' != typeof Reflect && Reflect;
      u ||
        (u = function (e) {
          return e;
        }),
        s ||
          (s = function (e) {
            return e;
          }),
        f ||
          (f = function (e, t, n) {
            return e.apply(t, n);
          }),
        d ||
          (d = function (e, t) {
            return new e(...t);
          });
      let p = x(Array.prototype.forEach),
        m = x(Array.prototype.lastIndexOf),
        h = x(Array.prototype.pop),
        g = x(Array.prototype.push),
        y = x(Array.prototype.splice),
        _ = x(String.prototype.toLowerCase),
        b = x(String.prototype.toString),
        T = x(String.prototype.match),
        E = x(String.prototype.replace),
        v = x(String.prototype.indexOf),
        A = x(String.prototype.trim),
        S = x(Object.prototype.hasOwnProperty),
        N = x(RegExp.prototype.test),
        w =
          ((Z = TypeError),
          function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return d(Z, t);
          });
      function x(e) {
        return function (t) {
          t instanceof RegExp && (t.lastIndex = 0);
          for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
            r[o - 1] = arguments[o];
          return f(e, t, r);
        };
      }
      function O(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _;
        o && o(e, null);
        let r = t.length;
        for (; r--; ) {
          let o = t[r];
          if ('string' == typeof o) {
            let e = n(o);
            e !== o && (i(t) || (t[r] = e), (o = e));
          }
          e[o] = !0;
        }
        return e;
      }
      function C(e) {
        let t = c(null);
        for (let [n, o] of r(e))
          S(e, n) &&
            (Array.isArray(o)
              ? (t[n] = (function (e) {
                  for (let t = 0; t < e.length; t++) S(e, t) || (e[t] = null);
                  return e;
                })(o))
              : o && 'object' == typeof o && o.constructor === Object
                ? (t[n] = C(o))
                : (t[n] = o));
        return t;
      }
      function R(e, t) {
        for (; null !== e; ) {
          let n = l(e, t);
          if (n) {
            if (n.get) return x(n.get);
            if ('function' == typeof n.value) return x(n.value);
          }
          e = a(e);
        }
        return function () {
          return null;
        };
      }
      let k = u([
          'a',
          'abbr',
          'acronym',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'bdi',
          'bdo',
          'big',
          'blink',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'center',
          'cite',
          'code',
          'col',
          'colgroup',
          'content',
          'data',
          'datalist',
          'dd',
          'decorator',
          'del',
          'details',
          'dfn',
          'dialog',
          'dir',
          'div',
          'dl',
          'dt',
          'element',
          'em',
          'fieldset',
          'figcaption',
          'figure',
          'font',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'img',
          'input',
          'ins',
          'kbd',
          'label',
          'legend',
          'li',
          'main',
          'map',
          'mark',
          'marquee',
          'menu',
          'menuitem',
          'meter',
          'nav',
          'nobr',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'picture',
          'pre',
          'progress',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'section',
          'select',
          'shadow',
          'small',
          'source',
          'spacer',
          'span',
          'strike',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'template',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'tr',
          'track',
          'tt',
          'u',
          'ul',
          'var',
          'video',
          'wbr',
        ]),
        L = u([
          'svg',
          'a',
          'altglyph',
          'altglyphdef',
          'altglyphitem',
          'animatecolor',
          'animatemotion',
          'animatetransform',
          'circle',
          'clippath',
          'defs',
          'desc',
          'ellipse',
          'filter',
          'font',
          'g',
          'glyph',
          'glyphref',
          'hkern',
          'image',
          'line',
          'lineargradient',
          'marker',
          'mask',
          'metadata',
          'mpath',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialgradient',
          'rect',
          'stop',
          'style',
          'switch',
          'symbol',
          'text',
          'textpath',
          'title',
          'tref',
          'tspan',
          'view',
          'vkern',
        ]),
        D = u([
          'feBlend',
          'feColorMatrix',
          'feComponentTransfer',
          'feComposite',
          'feConvolveMatrix',
          'feDiffuseLighting',
          'feDisplacementMap',
          'feDistantLight',
          'feDropShadow',
          'feFlood',
          'feFuncA',
          'feFuncB',
          'feFuncG',
          'feFuncR',
          'feGaussianBlur',
          'feImage',
          'feMerge',
          'feMergeNode',
          'feMorphology',
          'feOffset',
          'fePointLight',
          'feSpecularLighting',
          'feSpotLight',
          'feTile',
          'feTurbulence',
        ]),
        I = u([
          'animate',
          'color-profile',
          'cursor',
          'discard',
          'font-face',
          'font-face-format',
          'font-face-name',
          'font-face-src',
          'font-face-uri',
          'foreignobject',
          'hatch',
          'hatchpath',
          'mesh',
          'meshgradient',
          'meshpatch',
          'meshrow',
          'missing-glyph',
          'script',
          'set',
          'solidcolor',
          'unknown',
          'use',
        ]),
        M = u([
          'math',
          'menclose',
          'merror',
          'mfenced',
          'mfrac',
          'mglyph',
          'mi',
          'mlabeledtr',
          'mmultiscripts',
          'mn',
          'mo',
          'mover',
          'mpadded',
          'mphantom',
          'mroot',
          'mrow',
          'ms',
          'mspace',
          'msqrt',
          'mstyle',
          'msub',
          'msup',
          'msubsup',
          'mtable',
          'mtd',
          'mtext',
          'mtr',
          'munder',
          'munderover',
          'mprescripts',
        ]),
        P = u([
          'maction',
          'maligngroup',
          'malignmark',
          'mlongdiv',
          'mscarries',
          'mscarry',
          'msgroup',
          'mstack',
          'msline',
          'msrow',
          'semantics',
          'annotation',
          'annotation-xml',
          'mprescripts',
          'none',
        ]),
        U = u(['#text']),
        z = u([
          'accept',
          'action',
          'align',
          'alt',
          'autocapitalize',
          'autocomplete',
          'autopictureinpicture',
          'autoplay',
          'background',
          'bgcolor',
          'border',
          'capture',
          'cellpadding',
          'cellspacing',
          'checked',
          'cite',
          'class',
          'clear',
          'color',
          'cols',
          'colspan',
          'controls',
          'controlslist',
          'coords',
          'crossorigin',
          'datetime',
          'decoding',
          'default',
          'dir',
          'disabled',
          'disablepictureinpicture',
          'disableremoteplayback',
          'download',
          'draggable',
          'enctype',
          'enterkeyhint',
          'face',
          'for',
          'headers',
          'height',
          'hidden',
          'high',
          'href',
          'hreflang',
          'id',
          'inputmode',
          'integrity',
          'ismap',
          'kind',
          'label',
          'lang',
          'list',
          'loading',
          'loop',
          'low',
          'max',
          'maxlength',
          'media',
          'method',
          'min',
          'minlength',
          'multiple',
          'muted',
          'name',
          'nonce',
          'noshade',
          'novalidate',
          'nowrap',
          'open',
          'optimum',
          'pattern',
          'placeholder',
          'playsinline',
          'popover',
          'popovertarget',
          'popovertargetaction',
          'poster',
          'preload',
          'pubdate',
          'radiogroup',
          'readonly',
          'rel',
          'required',
          'rev',
          'reversed',
          'role',
          'rows',
          'rowspan',
          'spellcheck',
          'scope',
          'selected',
          'shape',
          'size',
          'sizes',
          'span',
          'srclang',
          'start',
          'src',
          'srcset',
          'step',
          'style',
          'summary',
          'tabindex',
          'title',
          'translate',
          'type',
          'usemap',
          'valign',
          'value',
          'width',
          'wrap',
          'xmlns',
          'slot',
        ]),
        H = u([
          'accent-height',
          'accumulate',
          'additive',
          'alignment-baseline',
          'amplitude',
          'ascent',
          'attributename',
          'attributetype',
          'azimuth',
          'basefrequency',
          'baseline-shift',
          'begin',
          'bias',
          'by',
          'class',
          'clip',
          'clippathunits',
          'clip-path',
          'clip-rule',
          'color',
          'color-interpolation',
          'color-interpolation-filters',
          'color-profile',
          'color-rendering',
          'cx',
          'cy',
          'd',
          'dx',
          'dy',
          'diffuseconstant',
          'direction',
          'display',
          'divisor',
          'dur',
          'edgemode',
          'elevation',
          'end',
          'exponent',
          'fill',
          'fill-opacity',
          'fill-rule',
          'filter',
          'filterunits',
          'flood-color',
          'flood-opacity',
          'font-family',
          'font-size',
          'font-size-adjust',
          'font-stretch',
          'font-style',
          'font-variant',
          'font-weight',
          'fx',
          'fy',
          'g1',
          'g2',
          'glyph-name',
          'glyphref',
          'gradientunits',
          'gradienttransform',
          'height',
          'href',
          'id',
          'image-rendering',
          'in',
          'in2',
          'intercept',
          'k',
          'k1',
          'k2',
          'k3',
          'k4',
          'kerning',
          'keypoints',
          'keysplines',
          'keytimes',
          'lang',
          'lengthadjust',
          'letter-spacing',
          'kernelmatrix',
          'kernelunitlength',
          'lighting-color',
          'local',
          'marker-end',
          'marker-mid',
          'marker-start',
          'markerheight',
          'markerunits',
          'markerwidth',
          'maskcontentunits',
          'maskunits',
          'max',
          'mask',
          'media',
          'method',
          'mode',
          'min',
          'name',
          'numoctaves',
          'offset',
          'operator',
          'opacity',
          'order',
          'orient',
          'orientation',
          'origin',
          'overflow',
          'paint-order',
          'path',
          'pathlength',
          'patterncontentunits',
          'patterntransform',
          'patternunits',
          'points',
          'preservealpha',
          'preserveaspectratio',
          'primitiveunits',
          'r',
          'rx',
          'ry',
          'radius',
          'refx',
          'refy',
          'repeatcount',
          'repeatdur',
          'restart',
          'result',
          'rotate',
          'scale',
          'seed',
          'shape-rendering',
          'slope',
          'specularconstant',
          'specularexponent',
          'spreadmethod',
          'startoffset',
          'stddeviation',
          'stitchtiles',
          'stop-color',
          'stop-opacity',
          'stroke-dasharray',
          'stroke-dashoffset',
          'stroke-linecap',
          'stroke-linejoin',
          'stroke-miterlimit',
          'stroke-opacity',
          'stroke',
          'stroke-width',
          'style',
          'surfacescale',
          'systemlanguage',
          'tabindex',
          'tablevalues',
          'targetx',
          'targety',
          'transform',
          'transform-origin',
          'text-anchor',
          'text-decoration',
          'text-rendering',
          'textlength',
          'type',
          'u1',
          'u2',
          'unicode',
          'values',
          'viewbox',
          'visibility',
          'version',
          'vert-adv-y',
          'vert-origin-x',
          'vert-origin-y',
          'width',
          'word-spacing',
          'wrap',
          'writing-mode',
          'xchannelselector',
          'ychannelselector',
          'x',
          'x1',
          'x2',
          'xmlns',
          'y',
          'y1',
          'y2',
          'z',
          'zoomandpan',
        ]),
        F = u([
          'accent',
          'accentunder',
          'align',
          'bevelled',
          'close',
          'columnsalign',
          'columnlines',
          'columnspan',
          'denomalign',
          'depth',
          'dir',
          'display',
          'displaystyle',
          'encoding',
          'fence',
          'frame',
          'height',
          'href',
          'id',
          'largeop',
          'length',
          'linethickness',
          'lspace',
          'lquote',
          'mathbackground',
          'mathcolor',
          'mathsize',
          'mathvariant',
          'maxsize',
          'minsize',
          'movablelimits',
          'notation',
          'numalign',
          'open',
          'rowalign',
          'rowlines',
          'rowspacing',
          'rowspan',
          'rspace',
          'rquote',
          'scriptlevel',
          'scriptminsize',
          'scriptsizemultiplier',
          'selection',
          'separator',
          'separators',
          'stretchy',
          'subscriptshift',
          'supscriptshift',
          'symmetric',
          'voffset',
          'width',
          'xmlns',
        ]),
        j = u(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
        G = s(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        W = s(/<%[\w\W]*|[\w\W]*%>/gm),
        B = s(/\$\{[\w\W]*/gm),
        Y = s(/^data-[\-\w.\u00B7-\uFFFF]+$/),
        V = s(/^aria-[\-\w]+$/),
        $ = s(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
        ),
        q = s(/^(?:\w+script|data):/i),
        X = s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        K = s(/^html$/i);
      var Z,
        J = Object.freeze({
          __proto__: null,
          ARIA_ATTR: V,
          ATTR_WHITESPACE: X,
          CUSTOM_ELEMENT: s(/^[a-z][.\w]*(-[.\w]+)+$/i),
          DATA_ATTR: Y,
          DOCTYPE_NAME: K,
          ERB_EXPR: W,
          IS_ALLOWED_URI: $,
          IS_SCRIPT_OR_DATA: q,
          MUSTACHE_EXPR: G,
          TMPLIT_EXPR: B,
        });
      let Q = { element: 1, text: 3, progressingInstruction: 7, comment: 8, document: 9 },
        ee = function (e, t) {
          if ('object' != typeof e || 'function' != typeof e.createPolicy) return null;
          let n = null,
            r = 'data-tt-policy-suffix';
          t && t.hasAttribute(r) && (n = t.getAttribute(r));
          let o = 'dompurify' + (n ? '#' + n : '');
          try {
            return e.createPolicy(o, { createHTML: e => e, createScriptURL: e => e });
          } catch (e) {
            return console.warn('TrustedTypes policy ' + o + ' could not be created.'), null;
          }
        },
        et = function () {
          return {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: [],
          };
        };
      var en = (function e() {
        let t,
          n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'undefined' == typeof window
                ? null
                : window,
          o = t => e(t);
        if (
          ((o.version = '3.2.5'),
          (o.removed = []),
          !n || !n.document || n.document.nodeType !== Q.document || !n.Element)
        )
          return (o.isSupported = !1), o;
        let { document: i } = n,
          a = i,
          l = a.currentScript,
          {
            DocumentFragment: s,
            HTMLTemplateElement: f,
            Node: d,
            Element: x,
            NodeFilter: G,
            NamedNodeMap: W = n.NamedNodeMap || n.MozNamedAttrMap,
            HTMLFormElement: B,
            DOMParser: Y,
            trustedTypes: V,
          } = n,
          q = x.prototype,
          X = R(q, 'cloneNode'),
          Z = R(q, 'remove'),
          en = R(q, 'nextSibling'),
          er = R(q, 'childNodes'),
          eo = R(q, 'parentNode');
        if ('function' == typeof f) {
          let e = i.createElement('template');
          e.content && e.content.ownerDocument && (i = e.content.ownerDocument);
        }
        let ei = '',
          {
            implementation: ea,
            createNodeIterator: el,
            createDocumentFragment: eu,
            getElementsByTagName: es,
          } = i,
          { importNode: ec } = a,
          ef = et();
        o.isSupported =
          'function' == typeof r &&
          'function' == typeof eo &&
          ea &&
          void 0 !== ea.createHTMLDocument;
        let {
            MUSTACHE_EXPR: ed,
            ERB_EXPR: ep,
            TMPLIT_EXPR: em,
            DATA_ATTR: eh,
            ARIA_ATTR: eg,
            IS_SCRIPT_OR_DATA: ey,
            ATTR_WHITESPACE: e_,
            CUSTOM_ELEMENT: eb,
          } = J,
          { IS_ALLOWED_URI: eT } = J,
          eE = null,
          ev = O({}, [...k, ...L, ...D, ...M, ...U]),
          eA = null,
          eS = O({}, [...z, ...H, ...F, ...j]),
          eN = Object.seal(
            c(null, {
              tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
              attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
              allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1,
              },
            })
          ),
          ew = null,
          ex = null,
          eO = !0,
          eC = !0,
          eR = !1,
          ek = !0,
          eL = !1,
          eD = !0,
          eI = !1,
          eM = !1,
          eP = !1,
          eU = !1,
          ez = !1,
          eH = !1,
          eF = !0,
          ej = !1,
          eG = !0,
          eW = !1,
          eB = {},
          eY = null,
          eV = O({}, [
            'annotation-xml',
            'audio',
            'colgroup',
            'desc',
            'foreignobject',
            'head',
            'iframe',
            'math',
            'mi',
            'mn',
            'mo',
            'ms',
            'mtext',
            'noembed',
            'noframes',
            'noscript',
            'plaintext',
            'script',
            'style',
            'svg',
            'template',
            'thead',
            'title',
            'video',
            'xmp',
          ]),
          e$ = null,
          eq = O({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
          eX = null,
          eK = O({}, [
            'alt',
            'class',
            'for',
            'id',
            'label',
            'name',
            'pattern',
            'placeholder',
            'role',
            'summary',
            'title',
            'value',
            'style',
            'xmlns',
          ]),
          eZ = 'http://www.w3.org/1998/Math/MathML',
          eJ = 'http://www.w3.org/2000/svg',
          eQ = 'http://www.w3.org/1999/xhtml',
          e0 = eQ,
          e1 = !1,
          e2 = null,
          e9 = O({}, [eZ, eJ, eQ], b),
          e3 = O({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
          e7 = O({}, ['annotation-xml']),
          e5 = O({}, ['title', 'style', 'font', 'a', 'script']),
          e4 = null,
          e8 = ['application/xhtml+xml', 'text/html'],
          e6 = null,
          te = null,
          tt = i.createElement('form'),
          tn = function (e) {
            return e instanceof RegExp || e instanceof Function;
          },
          tr = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!te || te !== e) {
              if (
                ((e && 'object' == typeof e) || (e = {}),
                (e = C(e)),
                (e6 =
                  'application/xhtml+xml' ===
                  (e4 = -1 === e8.indexOf(e.PARSER_MEDIA_TYPE) ? 'text/html' : e.PARSER_MEDIA_TYPE)
                    ? b
                    : _),
                (eE = S(e, 'ALLOWED_TAGS') ? O({}, e.ALLOWED_TAGS, e6) : ev),
                (eA = S(e, 'ALLOWED_ATTR') ? O({}, e.ALLOWED_ATTR, e6) : eS),
                (e2 = S(e, 'ALLOWED_NAMESPACES') ? O({}, e.ALLOWED_NAMESPACES, b) : e9),
                (eX = S(e, 'ADD_URI_SAFE_ATTR') ? O(C(eK), e.ADD_URI_SAFE_ATTR, e6) : eK),
                (e$ = S(e, 'ADD_DATA_URI_TAGS') ? O(C(eq), e.ADD_DATA_URI_TAGS, e6) : eq),
                (eY = S(e, 'FORBID_CONTENTS') ? O({}, e.FORBID_CONTENTS, e6) : eV),
                (ew = S(e, 'FORBID_TAGS') ? O({}, e.FORBID_TAGS, e6) : {}),
                (ex = S(e, 'FORBID_ATTR') ? O({}, e.FORBID_ATTR, e6) : {}),
                (eB = !!S(e, 'USE_PROFILES') && e.USE_PROFILES),
                (eO = !1 !== e.ALLOW_ARIA_ATTR),
                (eC = !1 !== e.ALLOW_DATA_ATTR),
                (eR = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                (ek = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
                (eL = e.SAFE_FOR_TEMPLATES || !1),
                (eD = !1 !== e.SAFE_FOR_XML),
                (eI = e.WHOLE_DOCUMENT || !1),
                (eU = e.RETURN_DOM || !1),
                (ez = e.RETURN_DOM_FRAGMENT || !1),
                (eH = e.RETURN_TRUSTED_TYPE || !1),
                (eP = e.FORCE_BODY || !1),
                (eF = !1 !== e.SANITIZE_DOM),
                (ej = e.SANITIZE_NAMED_PROPS || !1),
                (eG = !1 !== e.KEEP_CONTENT),
                (eW = e.IN_PLACE || !1),
                (eT = e.ALLOWED_URI_REGEXP || $),
                (e0 = e.NAMESPACE || eQ),
                (e3 = e.MATHML_TEXT_INTEGRATION_POINTS || e3),
                (e7 = e.HTML_INTEGRATION_POINTS || e7),
                (eN = e.CUSTOM_ELEMENT_HANDLING || {}),
                e.CUSTOM_ELEMENT_HANDLING &&
                  tn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (eN.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                e.CUSTOM_ELEMENT_HANDLING &&
                  tn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (eN.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                e.CUSTOM_ELEMENT_HANDLING &&
                  'boolean' == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                  (eN.allowCustomizedBuiltInElements =
                    e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                eL && (eC = !1),
                ez && (eU = !0),
                eB &&
                  ((eE = O({}, U)),
                  (eA = []),
                  !0 === eB.html && (O(eE, k), O(eA, z)),
                  !0 === eB.svg && (O(eE, L), O(eA, H), O(eA, j)),
                  !0 === eB.svgFilters && (O(eE, D), O(eA, H), O(eA, j)),
                  !0 === eB.mathMl && (O(eE, M), O(eA, F), O(eA, j))),
                e.ADD_TAGS && (eE === ev && (eE = C(eE)), O(eE, e.ADD_TAGS, e6)),
                e.ADD_ATTR && (eA === eS && (eA = C(eA)), O(eA, e.ADD_ATTR, e6)),
                e.ADD_URI_SAFE_ATTR && O(eX, e.ADD_URI_SAFE_ATTR, e6),
                e.FORBID_CONTENTS && (eY === eV && (eY = C(eY)), O(eY, e.FORBID_CONTENTS, e6)),
                eG && (eE['#text'] = !0),
                eI && O(eE, ['html', 'head', 'body']),
                eE.table && (O(eE, ['tbody']), delete ew.tbody),
                e.TRUSTED_TYPES_POLICY)
              ) {
                if ('function' != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                  throw w(
                    'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                  );
                if ('function' != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                  throw w(
                    'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                  );
                ei = (t = e.TRUSTED_TYPES_POLICY).createHTML('');
              } else
                void 0 === t && (t = ee(V, l)),
                  null !== t && 'string' == typeof ei && (ei = t.createHTML(''));
              u && u(e), (te = e);
            }
          },
          to = O({}, [...L, ...D, ...I]),
          ti = O({}, [...M, ...P]),
          ta = function (e) {
            let t = eo(e);
            (t && t.tagName) || (t = { namespaceURI: e0, tagName: 'template' });
            let n = _(e.tagName),
              r = _(t.tagName);
            return (
              !!e2[e.namespaceURI] &&
              (e.namespaceURI === eJ
                ? t.namespaceURI === eQ
                  ? 'svg' === n
                  : t.namespaceURI === eZ
                    ? 'svg' === n && ('annotation-xml' === r || e3[r])
                    : !!to[n]
                : e.namespaceURI === eZ
                  ? t.namespaceURI === eQ
                    ? 'math' === n
                    : t.namespaceURI === eJ
                      ? 'math' === n && e7[r]
                      : !!ti[n]
                  : e.namespaceURI === eQ
                    ? (t.namespaceURI !== eJ || !!e7[r]) &&
                      (t.namespaceURI !== eZ || !!e3[r]) &&
                      !ti[n] &&
                      (e5[n] || !to[n])
                    : 'application/xhtml+xml' === e4 && !!e2[e.namespaceURI])
            );
          },
          tl = function (e) {
            g(o.removed, { element: e });
            try {
              eo(e).removeChild(e);
            } catch (t) {
              Z(e);
            }
          },
          tu = function (e, t) {
            try {
              g(o.removed, { attribute: t.getAttributeNode(e), from: t });
            } catch (e) {
              g(o.removed, { attribute: null, from: t });
            }
            if ((t.removeAttribute(e), 'is' === e)) {
              if (eU || ez)
                try {
                  tl(t);
                } catch (e) {}
              else
                try {
                  t.setAttribute(e, '');
                } catch (e) {}
            }
          },
          ts = function (e) {
            let n = null,
              r = null;
            if (eP) e = '<remove></remove>' + e;
            else {
              let t = T(e, /^[\r\n\t ]+/);
              r = t && t[0];
            }
            'application/xhtml+xml' === e4 &&
              e0 === eQ &&
              (e =
                '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                e +
                '</body></html>');
            let o = t ? t.createHTML(e) : e;
            if (e0 === eQ)
              try {
                n = new Y().parseFromString(o, e4);
              } catch (e) {}
            if (!n || !n.documentElement) {
              n = ea.createDocument(e0, 'template', null);
              try {
                n.documentElement.innerHTML = e1 ? ei : o;
              } catch (e) {}
            }
            let a = n.body || n.documentElement;
            return (e && r && a.insertBefore(i.createTextNode(r), a.childNodes[0] || null),
            e0 === eQ)
              ? es.call(n, eI ? 'html' : 'body')[0]
              : eI
                ? n.documentElement
                : a;
          },
          tc = function (e) {
            return el.call(
              e.ownerDocument || e,
              e,
              G.SHOW_ELEMENT |
                G.SHOW_COMMENT |
                G.SHOW_TEXT |
                G.SHOW_PROCESSING_INSTRUCTION |
                G.SHOW_CDATA_SECTION,
              null
            );
          },
          tf = function (e) {
            return (
              e instanceof B &&
              ('string' != typeof e.nodeName ||
                'string' != typeof e.textContent ||
                'function' != typeof e.removeChild ||
                !(e.attributes instanceof W) ||
                'function' != typeof e.removeAttribute ||
                'function' != typeof e.setAttribute ||
                'string' != typeof e.namespaceURI ||
                'function' != typeof e.insertBefore ||
                'function' != typeof e.hasChildNodes)
            );
          },
          td = function (e) {
            return 'function' == typeof d && e instanceof d;
          };
        function tp(e, t, n) {
          p(e, e => {
            e.call(o, t, n, te);
          });
        }
        let tm = function (e) {
            let t = null;
            if ((tp(ef.beforeSanitizeElements, e, null), tf(e))) return tl(e), !0;
            let n = e6(e.nodeName);
            if (
              (tp(ef.uponSanitizeElement, e, { tagName: n, allowedTags: eE }),
              (e.hasChildNodes() &&
                !td(e.firstElementChild) &&
                N(/<[/\w!]/g, e.innerHTML) &&
                N(/<[/\w!]/g, e.textContent)) ||
                e.nodeType === Q.progressingInstruction ||
                (eD && e.nodeType === Q.comment && N(/<[/\w]/g, e.data)))
            )
              return tl(e), !0;
            if (!eE[n] || ew[n]) {
              if (
                !ew[n] &&
                tg(n) &&
                ((eN.tagNameCheck instanceof RegExp && N(eN.tagNameCheck, n)) ||
                  (eN.tagNameCheck instanceof Function && eN.tagNameCheck(n)))
              )
                return !1;
              if (eG && !eY[n]) {
                let t = eo(e) || e.parentNode,
                  n = er(e) || e.childNodes;
                if (n && t) {
                  let r = n.length;
                  for (let o = r - 1; o >= 0; --o) {
                    let r = X(n[o], !0);
                    (r.__removalCount = (e.__removalCount || 0) + 1), t.insertBefore(r, en(e));
                  }
                }
              }
              return tl(e), !0;
            }
            return (e instanceof x && !ta(e)) ||
              (('noscript' === n || 'noembed' === n || 'noframes' === n) &&
                N(/<\/no(script|embed|frames)/i, e.innerHTML))
              ? (tl(e), !0)
              : (eL &&
                  e.nodeType === Q.text &&
                  ((t = e.textContent),
                  p([ed, ep, em], e => {
                    t = E(t, e, ' ');
                  }),
                  e.textContent !== t &&
                    (g(o.removed, { element: e.cloneNode() }), (e.textContent = t))),
                tp(ef.afterSanitizeElements, e, null),
                !1);
          },
          th = function (e, t, n) {
            if (eF && ('id' === t || 'name' === t) && (n in i || n in tt)) return !1;
            if (eC && !ex[t] && N(eh, t));
            else if (eO && N(eg, t));
            else if (!eA[t] || ex[t]) {
              if (
                !(
                  (tg(e) &&
                    ((eN.tagNameCheck instanceof RegExp && N(eN.tagNameCheck, e)) ||
                      (eN.tagNameCheck instanceof Function && eN.tagNameCheck(e))) &&
                    ((eN.attributeNameCheck instanceof RegExp && N(eN.attributeNameCheck, t)) ||
                      (eN.attributeNameCheck instanceof Function && eN.attributeNameCheck(t)))) ||
                  ('is' === t &&
                    eN.allowCustomizedBuiltInElements &&
                    ((eN.tagNameCheck instanceof RegExp && N(eN.tagNameCheck, n)) ||
                      (eN.tagNameCheck instanceof Function && eN.tagNameCheck(n))))
                )
              )
                return !1;
            } else if (eX[t]);
            else if (N(eT, E(n, e_, '')));
            else if (
              ('src' === t || 'xlink:href' === t || 'href' === t) &&
              'script' !== e &&
              0 === v(n, 'data:') &&
              e$[e]
            );
            else if (eR && !N(ey, E(n, e_, '')));
            else if (n) return !1;
            return !0;
          },
          tg = function (e) {
            return 'annotation-xml' !== e && T(e, eb);
          },
          ty = function (e) {
            tp(ef.beforeSanitizeAttributes, e, null);
            let { attributes: n } = e;
            if (!n || tf(e)) return;
            let r = {
                attrName: '',
                attrValue: '',
                keepAttr: !0,
                allowedAttributes: eA,
                forceKeepAttr: void 0,
              },
              i = n.length;
            for (; i--; ) {
              let { name: a, namespaceURI: l, value: u } = n[i],
                s = e6(a),
                c = 'value' === a ? u : A(u);
              if (
                ((r.attrName = s),
                (r.attrValue = c),
                (r.keepAttr = !0),
                (r.forceKeepAttr = void 0),
                tp(ef.uponSanitizeAttribute, e, r),
                (c = r.attrValue),
                ej && ('id' === s || 'name' === s) && (tu(a, e), (c = 'user-content-' + c)),
                eD && N(/((--!?|])>)|<\/(style|title)/i, c))
              ) {
                tu(a, e);
                continue;
              }
              if (r.forceKeepAttr || (tu(a, e), !r.keepAttr)) continue;
              if (!ek && N(/\/>/i, c)) {
                tu(a, e);
                continue;
              }
              eL &&
                p([ed, ep, em], e => {
                  c = E(c, e, ' ');
                });
              let f = e6(e.nodeName);
              if (th(f, s, c)) {
                if (t && 'object' == typeof V && 'function' == typeof V.getAttributeType) {
                  if (l);
                  else
                    switch (V.getAttributeType(f, s)) {
                      case 'TrustedHTML':
                        c = t.createHTML(c);
                        break;
                      case 'TrustedScriptURL':
                        c = t.createScriptURL(c);
                    }
                }
                try {
                  l ? e.setAttributeNS(l, a, c) : e.setAttribute(a, c),
                    tf(e) ? tl(e) : h(o.removed);
                } catch (e) {}
              }
            }
            tp(ef.afterSanitizeAttributes, e, null);
          },
          t_ = function e(t) {
            let n = null,
              r = tc(t);
            for (tp(ef.beforeSanitizeShadowDOM, t, null); (n = r.nextNode()); )
              tp(ef.uponSanitizeShadowNode, n, null),
                tm(n),
                ty(n),
                n.content instanceof s && e(n.content);
            tp(ef.afterSanitizeShadowDOM, t, null);
          };
        return (
          (o.sanitize = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = null,
              i = null,
              l = null,
              u = null;
            if (((e1 = !e) && (e = '<!-->'), 'string' != typeof e && !td(e))) {
              if ('function' == typeof e.toString) {
                if ('string' != typeof (e = e.toString()))
                  throw w('dirty is not a string, aborting');
              } else throw w('toString is not a function');
            }
            if (!o.isSupported) return e;
            if ((eM || tr(n), (o.removed = []), 'string' == typeof e && (eW = !1), eW)) {
              if (e.nodeName) {
                let t = e6(e.nodeName);
                if (!eE[t] || ew[t])
                  throw w('root node is forbidden and cannot be sanitized in-place');
              }
            } else if (e instanceof d)
              (i = (r = ts('<!---->')).ownerDocument.importNode(e, !0)).nodeType === Q.element &&
              'BODY' === i.nodeName
                ? (r = i)
                : 'HTML' === i.nodeName
                  ? (r = i)
                  : r.appendChild(i);
            else {
              if (!eU && !eL && !eI && -1 === e.indexOf('<')) return t && eH ? t.createHTML(e) : e;
              if (!(r = ts(e))) return eU ? null : eH ? ei : '';
            }
            r && eP && tl(r.firstChild);
            let c = tc(eW ? e : r);
            for (; (l = c.nextNode()); ) tm(l), ty(l), l.content instanceof s && t_(l.content);
            if (eW) return e;
            if (eU) {
              if (ez)
                for (u = eu.call(r.ownerDocument); r.firstChild; ) u.appendChild(r.firstChild);
              else u = r;
              return (eA.shadowroot || eA.shadowrootmode) && (u = ec.call(a, u, !0)), u;
            }
            let f = eI ? r.outerHTML : r.innerHTML;
            return (
              eI &&
                eE['!doctype'] &&
                r.ownerDocument &&
                r.ownerDocument.doctype &&
                r.ownerDocument.doctype.name &&
                N(K, r.ownerDocument.doctype.name) &&
                (f = '<!DOCTYPE ' + r.ownerDocument.doctype.name + '>\n' + f),
              eL &&
                p([ed, ep, em], e => {
                  f = E(f, e, ' ');
                }),
              t && eH ? t.createHTML(f) : f
            );
          }),
          (o.setConfig = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            tr(e), (eM = !0);
          }),
          (o.clearConfig = function () {
            (te = null), (eM = !1);
          }),
          (o.isValidAttribute = function (e, t, n) {
            return te || tr({}), th(e6(e), e6(t), n);
          }),
          (o.addHook = function (e, t) {
            'function' == typeof t && g(ef[e], t);
          }),
          (o.removeHook = function (e, t) {
            if (void 0 !== t) {
              let n = m(ef[e], t);
              return -1 === n ? void 0 : y(ef[e], n, 1)[0];
            }
            return h(ef[e]);
          }),
          (o.removeHooks = function (e) {
            ef[e] = [];
          }),
          (o.removeAllHooks = function () {
            ef = et();
          }),
          o
        );
      })();
    },
  },
]);

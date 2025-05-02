(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [309],
  {
    5491: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/stories/new',
        function () {
          return a(2049);
        },
      ]);
    },
    9391: function (e, t, a) {
      'use strict';
      a.d(t, {
        C: function () {
          return b;
        },
      });
      var l = a(5893),
        n = a(7294),
        s = a(5152),
        r = a.n(s),
        o = a(3279),
        i = a.n(o);
      a(6834);
      let c = r()(() => Promise.all([a.e(937), a.e(167)]).then(a.t.bind(a, 1167, 23)), {
          loadableGenerated: { webpack: () => [1167] },
          ssr: !1,
          loading: () =>
            (0, l.jsx)('div', {
              className: 'h-[150px] w-full animate-pulse bg-gray-100 rounded-lg',
            }),
        }),
        u = [
          [{ header: [1, 2, 3, !1] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ align: [] }],
          ['clean'],
        ],
        d = e => {
          let {
              initialContent: t = '',
              onChange: a,
              onAutoSave: s,
              placeholder: r = 'Start writing...',
              minHeight: o = '150px',
              autoSaveInterval: d = 3e3,
            } = e,
            [h, x] = (0, n.useState)(t),
            [b, v] = (0, n.useState)(!1),
            [y, f] = (0, n.useState)(null),
            p = (0, n.useCallback)(
              i()(async e => {
                if (s)
                  try {
                    v(!0), await s(e), f(new Date());
                  } catch (e) {
                    console.error('Auto-save failed:', e);
                  } finally {
                    v(!1);
                  }
              }, d),
              [s, d]
            );
          (0, n.useEffect)(
            () => () => {
              p.cancel();
            },
            [p]
          );
          let g = (0, n.useCallback)(
            e => {
              x(e), null == a || a(e), s && p(e);
            },
            [a, s, p]
          );
          return (0, l.jsxs)('div', {
            className: 'text-editor',
            children: [
              (0, l.jsx)('div', {
                className: 'border rounded-lg overflow-hidden',
                style: { minHeight: o },
                children: (0, l.jsx)(c, {
                  theme: 'snow',
                  value: h,
                  onChange: g,
                  placeholder: r,
                  modules: { toolbar: u },
                }),
              }),
              s &&
                (0, l.jsx)('div', {
                  className: 'mt-2 text-sm text-gray-500',
                  children: b
                    ? 'Saving...'
                    : y
                      ? 'Last saved: '.concat(y.toLocaleTimeString())
                      : 'Not saved yet',
                }),
            ],
          });
        };
      var h = a(8999),
        x = a(2424);
      let b = e => {
        let {
            storyId: t,
            initialTitle: a = '',
            initialContent: s = '',
            onSave: r,
            onCancel: o,
            isSaving: i = !1,
          } = e,
          [c, u] = (0, n.useState)(a),
          [b, v] = (0, n.useState)(s),
          [y, f] = (0, n.useState)(!1),
          p = (0, n.useCallback)(() => {
            r && r({ title: c, content: x.Z.sanitize(b) });
          }, [c, b, r]),
          g = (0, n.useCallback)(
            async e => {
              if (t)
                try {
                  f(!0);
                  let a = x.Z.sanitize(e);
                  await h.Z.put('/stories/'.concat(t), { title: c, content: a });
                } catch (e) {
                  throw (console.error('Auto-save failed:', e), e);
                } finally {
                  f(!1);
                }
            },
            [t, c]
          );
        return (0, l.jsxs)('div', {
          className: 'story-editor space-y-4',
          children: [
            (0, l.jsx)('input', {
              type: 'text',
              value: c,
              onChange: e => u(e.target.value),
              placeholder: 'Enter story title...',
              className:
                'w-full p-2 text-2xl font-bold border-b focus:outline-none focus:border-blue-500',
            }),
            (0, l.jsx)(d, {
              initialContent: b,
              onChange: v,
              onAutoSave: t ? g : void 0,
              placeholder: 'Start writing your story...',
              minHeight: '400px',
              autoSaveInterval: 2e3,
            }),
            (0, l.jsxs)('div', {
              className: 'flex justify-end space-x-4',
              children: [
                o &&
                  (0, l.jsx)('button', {
                    onClick: o,
                    className: 'px-4 py-2 text-gray-600 hover:text-gray-800',
                    disabled: i || y,
                    children: 'Cancel',
                  }),
                (0, l.jsx)('button', {
                  onClick: p,
                  disabled: i || y || !c.trim() || !b.trim(),
                  className:
                    'px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed',
                  children: i ? 'Saving...' : 'Save Story',
                }),
              ],
            }),
          ],
        });
      };
    },
    2049: function (e, t, a) {
      'use strict';
      a.r(t);
      var l = a(5893),
        n = a(7294),
        s = a(1163),
        r = a(9391),
        o = a(8999);
      t.default = () => {
        let e = (0, s.useRouter)(),
          [t, a] = (0, n.useState)(!1),
          i = async t => {
            try {
              a(!0);
              let l = await o.Z.post('/stories', t);
              e.push('/stories/'.concat(l.data.id));
            } catch (e) {
              console.error('Failed to create story:', e),
                alert('Failed to create story. Please try again.');
            } finally {
              a(!1);
            }
          };
        return (0, l.jsxs)('div', {
          className: 'container mx-auto px-4 py-8',
          children: [
            (0, l.jsx)('h1', {
              className: 'text-3xl font-bold mb-8',
              children: 'Create New Story',
            }),
            (0, l.jsx)(r.C, {
              onSave: i,
              onCancel: () => {
                e.back();
              },
              isSaving: t,
            }),
          ],
        });
      };
    },
    8999: function (e, t, a) {
      'use strict';
      var l = a(7066),
        n = a(3454);
      let s = l.Z.create({ baseURL: n.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001' });
      s.interceptors.request.use(e => {
        {
          let t = localStorage.getItem('token');
          t && e.headers && (e.headers.Authorization = 'Bearer '.concat(t));
        }
        return e;
      }),
        (t.Z = s);
    },
  },
  function (e) {
    e.O(0, [66, 298, 888, 774, 179], function () {
      return e((e.s = 5491));
    }),
      (_N_E = e.O());
  },
]);

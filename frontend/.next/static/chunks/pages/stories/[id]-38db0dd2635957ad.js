(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [87],
  {
    9605: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/stories/[id]',
        function () {
          return a(4743);
        },
      ]);
    },
    9391: function (e, t, a) {
      'use strict';
      a.d(t, {
        C: function () {
          return y;
        },
      });
      var s = a(5893),
        l = a(7294),
        n = a(5152),
        r = a.n(n),
        i = a(3279),
        o = a.n(i);
      a(6834);
      let c = r()(() => Promise.all([a.e(937), a.e(167)]).then(a.t.bind(a, 1167, 23)), {
          loadableGenerated: { webpack: () => [1167] },
          ssr: !1,
          loading: () =>
            (0, s.jsx)('div', {
              className: 'h-[150px] w-full animate-pulse bg-gray-100 rounded-lg',
            }),
        }),
        d = [
          [{ header: [1, 2, 3, !1] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ align: [] }],
          ['clean'],
        ],
        u = e => {
          let {
              initialContent: t = '',
              onChange: a,
              onAutoSave: n,
              placeholder: r = 'Start writing...',
              minHeight: i = '150px',
              autoSaveInterval: u = 3e3,
            } = e,
            [x, h] = (0, l.useState)(t),
            [y, p] = (0, l.useState)(!1),
            [b, m] = (0, l.useState)(null),
            f = (0, l.useCallback)(
              o()(async e => {
                if (n)
                  try {
                    p(!0), await n(e), m(new Date());
                  } catch (e) {
                    console.error('Auto-save failed:', e);
                  } finally {
                    p(!1);
                  }
              }, u),
              [n, u]
            );
          (0, l.useEffect)(
            () => () => {
              f.cancel();
            },
            [f]
          );
          let v = (0, l.useCallback)(
            e => {
              h(e), null == a || a(e), n && f(e);
            },
            [a, n, f]
          );
          return (0, s.jsxs)('div', {
            className: 'text-editor',
            children: [
              (0, s.jsx)('div', {
                className: 'border rounded-lg overflow-hidden',
                style: { minHeight: i },
                children: (0, s.jsx)(c, {
                  theme: 'snow',
                  value: x,
                  onChange: v,
                  placeholder: r,
                  modules: { toolbar: d },
                }),
              }),
              n &&
                (0, s.jsx)('div', {
                  className: 'mt-2 text-sm text-gray-500',
                  children: y
                    ? 'Saving...'
                    : b
                      ? 'Last saved: '.concat(b.toLocaleTimeString())
                      : 'Not saved yet',
                }),
            ],
          });
        };
      var x = a(8999),
        h = a(2424);
      let y = e => {
        let {
            storyId: t,
            initialTitle: a = '',
            initialContent: n = '',
            onSave: r,
            onCancel: i,
            isSaving: o = !1,
          } = e,
          [c, d] = (0, l.useState)(a),
          [y, p] = (0, l.useState)(n),
          [b, m] = (0, l.useState)(!1),
          f = (0, l.useCallback)(() => {
            r && r({ title: c, content: h.Z.sanitize(y) });
          }, [c, y, r]),
          v = (0, l.useCallback)(
            async e => {
              if (t)
                try {
                  m(!0);
                  let a = h.Z.sanitize(e);
                  await x.Z.put('/stories/'.concat(t), { title: c, content: a });
                } catch (e) {
                  throw (console.error('Auto-save failed:', e), e);
                } finally {
                  m(!1);
                }
            },
            [t, c]
          );
        return (0, s.jsxs)('div', {
          className: 'story-editor space-y-4',
          children: [
            (0, s.jsx)('input', {
              type: 'text',
              value: c,
              onChange: e => d(e.target.value),
              placeholder: 'Enter story title...',
              className:
                'w-full p-2 text-2xl font-bold border-b focus:outline-none focus:border-blue-500',
            }),
            (0, s.jsx)(u, {
              initialContent: y,
              onChange: p,
              onAutoSave: t ? v : void 0,
              placeholder: 'Start writing your story...',
              minHeight: '400px',
              autoSaveInterval: 2e3,
            }),
            (0, s.jsxs)('div', {
              className: 'flex justify-end space-x-4',
              children: [
                i &&
                  (0, s.jsx)('button', {
                    onClick: i,
                    className: 'px-4 py-2 text-gray-600 hover:text-gray-800',
                    disabled: o || b,
                    children: 'Cancel',
                  }),
                (0, s.jsx)('button', {
                  onClick: f,
                  disabled: o || b || !c.trim() || !y.trim(),
                  className:
                    'px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed',
                  children: o ? 'Saving...' : 'Save Story',
                }),
              ],
            }),
          ],
        });
      };
    },
    4743: function (e, t, a) {
      'use strict';
      a.r(t);
      var s = a(5893),
        l = a(7294),
        n = a(1163),
        r = a(9391),
        i = a(8999),
        o = a(2424);
      t.default = () => {
        let e = (0, n.useRouter)(),
          { id: t } = e.query,
          [a, c] = (0, l.useState)(null),
          [d, u] = (0, l.useState)(!0),
          [x, h] = (0, l.useState)(null),
          [y, p] = (0, l.useState)(!1),
          [b, m] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          (async () => {
            if (t)
              try {
                let e = await i.Z.get('/stories/'.concat(t));
                c(e.data), h(null);
              } catch (e) {
                console.error('Failed to fetch story:', e),
                  h('Failed to load story. Please try again later.');
              } finally {
                u(!1);
              }
          })();
        }, [t]);
        let f = async e => {
            if (t)
              try {
                m(!0);
                let a = await i.Z.put('/stories/'.concat(t), e);
                c(a.data), p(!1), h(null);
              } catch (e) {
                console.error('Failed to update story:', e),
                  h('Failed to save story. Please try again.');
              } finally {
                m(!1);
              }
          },
          v = async () => {
            if (t && window.confirm('Are you sure you want to delete this story?'))
              try {
                await i.Z.delete('/stories/'.concat(t)), e.push('/stories');
              } catch (e) {
                console.error('Failed to delete story:', e),
                  h('Failed to delete story. Please try again.');
              }
          };
        if (d)
          return (0, s.jsx)('div', {
            className: 'container mx-auto px-4 py-8',
            children: (0, s.jsx)('p', { children: 'Loading story...' }),
          });
        if (x)
          return (0, s.jsx)('div', {
            className: 'container mx-auto px-4 py-8',
            children: (0, s.jsx)('p', { className: 'text-red-500', children: x }),
          });
        if (!a)
          return (0, s.jsx)('div', {
            className: 'container mx-auto px-4 py-8',
            children: (0, s.jsx)('p', { children: 'Story not found.' }),
          });
        if (y)
          return (0, s.jsxs)('div', {
            className: 'container mx-auto px-4 py-8',
            children: [
              (0, s.jsx)('h1', { className: 'text-3xl font-bold mb-8', children: 'Edit Story' }),
              (0, s.jsx)(r.C, {
                storyId: a.id,
                initialTitle: a.title,
                initialContent: a.content,
                onSave: f,
                onCancel: () => p(!1),
                isSaving: b,
              }),
            ],
          });
        let g = o.Z.sanitize(a.content);
        return (0, s.jsxs)('div', {
          className: 'container mx-auto px-4 py-8',
          children: [
            (0, s.jsxs)('div', {
              className: 'flex justify-between items-center mb-8',
              children: [
                (0, s.jsx)('h1', { className: 'text-3xl font-bold', children: a.title }),
                (0, s.jsxs)('div', {
                  className: 'space-x-4',
                  children: [
                    (0, s.jsx)('button', {
                      onClick: () => p(!0),
                      className:
                        'px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-50',
                      children: 'Edit',
                    }),
                    (0, s.jsx)('button', {
                      onClick: v,
                      className:
                        'px-4 py-2 text-red-500 border border-red-500 rounded hover:bg-red-50',
                      children: 'Delete',
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)('div', {
              className: 'prose max-w-none',
              children: [
                (0, s.jsxs)('p', {
                  className: 'text-gray-500 mb-8',
                  children: ['Last updated: ', new Date(a.updatedAt).toLocaleDateString()],
                }),
                (0, s.jsx)('div', {
                  className: 'ql-editor p-0',
                  dangerouslySetInnerHTML: { __html: g },
                }),
              ],
            }),
          ],
        });
      };
    },
    8999: function (e, t, a) {
      'use strict';
      var s = a(7066),
        l = a(3454);
      let n = s.Z.create({ baseURL: l.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001' });
      n.interceptors.request.use(e => {
        {
          let t = localStorage.getItem('token');
          t && e.headers && (e.headers.Authorization = 'Bearer '.concat(t));
        }
        return e;
      }),
        (t.Z = n);
    },
  },
  function (e) {
    e.O(0, [66, 298, 888, 774, 179], function () {
      return e((e.s = 9605));
    }),
      (_N_E = e.O());
  },
]);

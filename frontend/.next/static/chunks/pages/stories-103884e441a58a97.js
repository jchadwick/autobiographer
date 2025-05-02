(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [368],
  {
    8612: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/stories',
        function () {
          return s(2668);
        },
      ]);
    },
    2668: function (e, t, s) {
      'use strict';
      s.r(t);
      var r = s(5893),
        a = s(7294),
        l = s(1664),
        n = s.n(l),
        o = s(8999);
      t.default = () => {
        let [e, t] = (0, a.useState)([]),
          [s, l] = (0, a.useState)(!0),
          [i, c] = (0, a.useState)(null);
        return ((0, a.useEffect)(() => {
          (async () => {
            try {
              let e = await o.Z.get('/stories');
              t(e.data), c(null);
            } catch (e) {
              console.error('Failed to fetch stories:', e),
                c('Failed to load stories. Please try again later.');
            } finally {
              l(!1);
            }
          })();
        }, []),
        s)
          ? (0, r.jsxs)('div', {
              className: 'container mx-auto px-4 py-8',
              children: [
                (0, r.jsx)('h1', {
                  className: 'text-3xl font-bold mb-8',
                  children: 'Your Stories',
                }),
                (0, r.jsx)('p', { children: 'Loading stories...' }),
              ],
            })
          : i
            ? (0, r.jsxs)('div', {
                className: 'container mx-auto px-4 py-8',
                children: [
                  (0, r.jsx)('h1', {
                    className: 'text-3xl font-bold mb-8',
                    children: 'Your Stories',
                  }),
                  (0, r.jsx)('p', { className: 'text-red-500', children: i }),
                ],
              })
            : (0, r.jsxs)('div', {
                className: 'container mx-auto px-4 py-8',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'flex justify-between items-center mb-8',
                    children: [
                      (0, r.jsx)('h1', {
                        className: 'text-3xl font-bold',
                        children: 'Your Stories',
                      }),
                      (0, r.jsx)(n(), {
                        href: '/stories/new',
                        className: 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600',
                        children: 'New Story',
                      }),
                    ],
                  }),
                  0 === e.length
                    ? (0, r.jsxs)('p', {
                        className: 'text-gray-600',
                        children: [
                          "You haven't created any stories yet.",
                          ' ',
                          (0, r.jsx)(n(), {
                            href: '/stories/new',
                            className: 'text-blue-500 hover:underline',
                            children: 'Create your first story',
                          }),
                          '.',
                        ],
                      })
                    : (0, r.jsx)('div', {
                        className: 'grid gap-6 md:grid-cols-2 lg:grid-cols-3',
                        children: e.map(e =>
                          (0, r.jsxs)(
                            n(),
                            {
                              href: '/stories/'.concat(e.id),
                              className:
                                'block p-6 border rounded-lg hover:border-blue-500 transition-colors',
                              children: [
                                (0, r.jsx)('h2', {
                                  className: 'text-xl font-semibold mb-2',
                                  children: e.title,
                                }),
                                (0, r.jsxs)('p', {
                                  className: 'text-sm text-gray-500',
                                  children: [
                                    'Last updated: ',
                                    new Date(e.updatedAt).toLocaleDateString(),
                                  ],
                                }),
                              ],
                            },
                            e.id
                          )
                        ),
                      }),
                ],
              });
      };
    },
    8999: function (e, t, s) {
      'use strict';
      var r = s(7066),
        a = s(3454);
      let l = r.Z.create({ baseURL: a.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001' });
      l.interceptors.request.use(e => {
        {
          let t = localStorage.getItem('token');
          t && e.headers && (e.headers.Authorization = 'Bearer '.concat(t));
        }
        return e;
      }),
        (t.Z = l);
    },
  },
  function (e) {
    e.O(0, [66, 664, 888, 774, 179], function () {
      return e((e.s = 8612));
    }),
      (_N_E = e.O());
  },
]);

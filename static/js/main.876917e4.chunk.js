(this["webpackJsonproom4-test"]=this["webpackJsonproom4-test"]||[]).push([[0],{25:function(n,t,r){},32:function(n,t,r){"use strict";r.r(t);var e=r(1),c=r(0),i=r.n(c),a=r(14),u=r.n(a),o=r(5),s=r(18),j=(r(25),r(2)),l=r(3);function f(){var n=Object(j.a)(["\n  margin: 0 auto;\n  width: 1100px;\n"]);return f=function(){return n},n}var b=l.a.div(f()),d=function(n){var t=n.children;return Object(e.jsx)(b,{children:t})};function h(){var n=Object(j.a)([""]);return h=function(){return n},n}function O(){var n=Object(j.a)(["\n  margin-right: 20px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]);return O=function(){return n},n}function v(){var n=Object(j.a)(["\n  display: flex;\n  align-items: center;\n"]);return v=function(){return n},n}function m(){var n=Object(j.a)([""]);return m=function(){return n},n}var x=l.a.nav(m()),g=l.a.ul(v()),p=l.a.li(O()),k=l.a.a(h()),y=function(n){var t=n.setPath;return Object(e.jsx)(x,{children:Object(e.jsx)(g,{children:[{id:1,name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/"},{id:2,name:"\u0418\u0441\u043f\u043e\u043b\u044c\u043d\u0438\u0442\u0435\u043b\u044c",path:"/singer"},{id:3,name:"\u041f\u043e\u0438\u0441\u043a",path:"/search"}].map((function(n){return Object(e.jsx)(p,{children:Object(e.jsx)(k,{href:"#",onClick:function(r){r.preventDefault(),t(n.path)},children:n.name})},n.id)}))})})},w=r(19);function C(){var n=Object(j.a)(["\n  font-weight: 500;\n  margin-bottom: 30px;\n"]);return C=function(){return n},n}function S(){var n=Object(j.a)([""]);return S=function(){return n},n}function F(){var n=Object(j.a)([""]);return F=function(){return n},n}function I(){var n=Object(j.a)(["\n  display: inline-block;\n\n  height: 50px;\n  width: 50px;\n"]);return I=function(){return n},n}function L(){var n=Object(j.a)(["\n  cursor: pointer;\n  background-color: #f7f2f2;\n  padding: 3px 5px;\n  color: #c9a6a6;\n"]);return L=function(){return n},n}function P(){var n=Object(j.a)(["\n  margin-left: 20px;\n"]);return P=function(){return n},n}function T(){var n=Object(j.a)(["\n  margin-right: 20px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]);return T=function(){return n},n}function E(){var n=Object(j.a)(["\n  display: flex;\n  align-items: center;\n\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f6dede;\n\n  &:last-child {\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n"]);return E=function(){return n},n}var _=l.a.li(E()),z=l.a.div(T()),B=l.a.a(P()),D=l.a.div(L()),J=l.a.img.attrs((function(n){return{src:n.url}}))(I()),M=function(n){var t;return console.log(n),Object(e.jsxs)(_,{onClick:function(){return n.onClick(n.artist.name)},children:[Object(e.jsx)(J,{url:Object.values(null===(t=n.image)||void 0===t?void 0:t.find((function(n){return"small"===n.size})))[0]}),Object(e.jsx)(z,{children:n.name}),Object(e.jsx)(D,{children:n.artist.name}),Object(e.jsx)(B,{href:n.url,children:"Link"})]})},q=l.a.div(F()),A=l.a.ul(S()),G=l.a.div(C()),H=function(n){var t=n.topTracks,r=n.getInfo;return Object(e.jsxs)(q,{children:[Object(e.jsx)(G,{children:"\u0422\u043e\u043f \u0442\u0440\u0435\u043a\u0438"}),Object(e.jsx)(A,{children:t.map((function(n,t){return Object(e.jsx)(M,Object(w.a)({onClick:r},n),t)}))})]})};function K(){var n=Object(j.a)(["\n  margin-right: 20px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]);return K=function(){return n},n}function N(){var n=Object(j.a)([""]);return N=function(){return n},n}function Q(){var n=Object(j.a)(["\n  display: flex;\n"]);return Q=function(){return n},n}function R(){var n=Object(j.a)([""]);return R=function(){return n},n}var U=l.a.div(R()),V=l.a.div(Q()),W=l.a.div(N()),X=l.a.div(K()),Y=function(){var n,t,r=Object(c.useState)(""),i=Object(o.a)(r,2),a=i[0],u=i[1],s=Object(c.useState)(),j=Object(o.a)(s,2),l=j[0],f=j[1];return Object(e.jsxs)(U,{children:[Object(e.jsxs)(V,{children:[Object(e.jsx)("input",{value:a,name:"search",onChange:function(n){return u(n.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0440\u0435\u043a\u0430"}),Object(e.jsx)("button",{onClick:function(n){return function(n){var t="http://ws.audioscrobbler.com/2.0/?method=track.search&track=".concat(n,"&api_key=").concat("dde8e3bb2ce4b79a593a14a45c404ef8","&format=json");fetch(t).then((function(n){return n.json()})).then((function(n){f(n),console.log(n)}))}(a)},children:"\u043d\u0430\u0439\u0442\u0438 \u0442\u0440\u0435\u043a"})]}),Object(e.jsxs)(W,{children:[Object(e.jsx)("span",{children:"\u0412\u0441\u0435 \u0447\u0442\u043e \u043c\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043d\u0430\u0439\u0442\u0438 \u043f\u043e \u0442\u0432\u043e\u0435\u043c\u0443 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e:".concat(a)}),l&&(null===l||void 0===l||null===(n=l.results)||void 0===n||null===(t=n.trackmatches)||void 0===t?void 0:t.track.map((function(n,t){return Object(e.jsxs)(V,{children:[Object(e.jsx)(X,{children:n.name}),Object(e.jsx)(X,{children:n.artist})]},t)})))]})]})};function Z(){var n=Object(j.a)([""]);return Z=function(){return n},n}function $(){var n=Object(j.a)(["\n  display: inline-block;\n\n  width: 100px;\n  height: 100px;\n"]);return $=function(){return n},n}function nn(){var n=Object(j.a)(["\n  margin-right: 20px;\n"]);return nn=function(){return n},n}function tn(){var n=Object(j.a)([""]);return tn=function(){return n},n}function rn(){var n=Object(j.a)(["\n  display: flex;\n  margin-bottom: 10px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return rn=function(){return n},n}function en(){var n=Object(j.a)(["\n  margin-bottom: 20px;\n"]);return en=function(){return n},n}function cn(){var n=Object(j.a)(["\n  margin-bottom: 20px;\n"]);return cn=function(){return n},n}function an(){var n=Object(j.a)([""]);return an=function(){return n},n}var un=l.a.div(an()),on=l.a.div(cn()),sn=l.a.ul(en()),jn=l.a.li(rn()),ln=l.a.div(tn()),fn=l.a.div(nn()),bn=l.a.img.attrs((function(n){return{src:n.url}}))($()),dn=l.a.a(Z()),hn=function(n){var t=n.artist;return Object(e.jsx)(un,{children:t?Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(bn,{url:Object.values(null===t||void 0===t?void 0:t.artist.image.find((function(n){return"small"===n.size})))[0]}),Object(e.jsx)(on,{children:"\u0418\u043c\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044f: ".concat(null===t||void 0===t?void 0:t.artist.name)}),Object(e.jsxs)(sn,{children:["\u0422\u0435\u0433\u0438:",null===t||void 0===t?void 0:t.artist.tags.tag.map((function(n){return Object(e.jsxs)(jn,{children:[Object(e.jsx)(fn,{children:n.name}),Object(e.jsx)(dn,{href:n.url,children:"Link"})]},"".concat(n.name,"/").concat(n.url))}))]}),Object(e.jsx)(ln,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ".concat(null===t||void 0===t?void 0:t.artist.bio.summary)})]}):"\u0412\u044b\u0431\u0435\u0440\u0438 \u0430\u0440\u0442\u0438\u0441\u0442\u0430 \u043d\u0430 \u0413\u043b\u0430\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 ;)"})},On=function(){var n="dde8e3bb2ce4b79a593a14a45c404ef8",t="http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=".concat(n,"&format=json"),r=Object(c.useState)([]),i=Object(o.a)(r,2),a=i[0],u=i[1],j=Object(c.useState)(null),l=Object(o.a)(j,2),f=l[0],b=l[1],h=Object(c.useState)("/"),O=Object(o.a)(h,2),v=O[0],m=O[1];return Object(c.useEffect)((function(){fetch(t).then((function(n){return n.json()})).then((function(n){u(n.tracks.track)}))}),[]),Object(c.useEffect)((function(){m("/")}),[]),Object(e.jsx)(s.a,{children:Object(e.jsxs)(d,{children:[Object(e.jsx)(y,{setPath:m}),"/"==v&&Object(e.jsx)(H,{topTracks:a,getInfo:function(t){var r="http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=".concat(t,"&api_key=").concat(n,"&format=json");t&&fetch(r).then((function(n){return n.json()})).then((function(n){b(n),m("/singer")}))}}),"/search"==v&&Object(e.jsx)(Y,{}),"/singer"==v&&Object(e.jsx)(hn,{artist:f&&f})]})})},vn=function(n){n&&n instanceof Function&&r.e(3).then(r.bind(null,33)).then((function(t){var r=t.getCLS,e=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;r(n),e(n),c(n),i(n),a(n)}))};u.a.render(Object(e.jsx)(i.a.StrictMode,{children:Object(e.jsx)(On,{})}),document.getElementById("root")),vn()}},[[32,1,2]]]);
//# sourceMappingURL=main.876917e4.chunk.js.map
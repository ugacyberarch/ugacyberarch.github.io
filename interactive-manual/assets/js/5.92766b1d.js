(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{373:function(n,r,t){"use strict";var e,u,o=function(){function n(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(r,t,e){return t&&n(r.prototype,t),e&&n(r,e),r}}(),i=(e=["",""],u=["",""],Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(u)}})));var a=function(){function n(){for(var r=this,t=arguments.length,e=Array(t),u=0;u<t;u++)e[u]=arguments[u];return function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.tag=function(n){for(var t=arguments.length,e=Array(t>1?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return"function"==typeof n?r.interimTag.bind(r,n):"string"==typeof n?r.transformEndResult(n):(n=n.map(r.transformString.bind(r)),r.transformEndResult(n.reduce(r.processSubstitutions.bind(r,e))))},e.length>0&&Array.isArray(e[0])&&(e=e[0]),this.transformers=e.map(function(n){return"function"==typeof n?n():n}),this.tag}return o(n,[{key:"interimTag",value:function(n,r){for(var t=arguments.length,e=Array(t>2?t-2:0),u=2;u<t;u++)e[u-2]=arguments[u];return this.tag(i,n.apply(void 0,[r].concat(e)))}},{key:"processSubstitutions",value:function(n,r,t){var e=this.transformSubstitution(n.shift(),r);return"".concat(r,e,t)}},{key:"transformString",value:function(n){return this.transformers.reduce(function(n,r){return r.onString?r.onString(n):n},n)}},{key:"transformSubstitution",value:function(n,r){return this.transformers.reduce(function(n,t){return t.onSubstitution?t.onSubstitution(n,r):n},n)}},{key:"transformEndResult",value:function(n){return this.transformers.reduce(function(n,r){return r.onEndResult?r.onEndResult(n):n},n)}}]),n}(),c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(r){if(""===n)return r.trim();if("start"===(n=n.toLowerCase())||"left"===n)return r.replace(/^\s*/,"");if("end"===n||"right"===n)return r.replace(/\s*$/,"");throw new Error("Side not supported: "+n)}}};var f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(r){if("initial"===n){var t=r.match(/^[^\S\n]*(?=\S)/gm),e=t&&Math.min.apply(Math,function(n){if(Array.isArray(n)){for(var r=0,t=Array(n.length);r<n.length;r++)t[r]=n[r];return t}return Array.from(n)}(t.map(function(n){return n.length})));if(e){var u=new RegExp("^.{"+e+"}","gm");return r.replace(u,"")}return r}if("all"===n)return r.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+n)}}},s=function(n,r){return{onEndResult:function(t){if(null==n||null==r)throw new Error("replaceResultTransformer requires at least 2 arguments.");return t.replace(n,r)}}},l=function(n,r){return{onSubstitution:function(t,e){if(null==n||null==r)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==t?t:t.toString().replace(n,r)}}},d=function(n,r){return{onString:function(t){if(null==n||null==r)throw new Error("replaceStringTransformer requires at least 2 arguments.");return t.replace(n,r)}}},p={separator:"",conjunction:"",serial:!1},g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return{onSubstitution:function(r,t){if(Array.isArray(r)){var e=r.length,u=n.separator,o=n.conjunction,i=n.serial,a=t.match(/(\n?[^\S\n]+)$/);if(r=a?r.join(u+a[1]):r.join(u+" "),o&&e>1){var c=r.lastIndexOf(u);r=r.slice(0,c)+(i?u:"")+" "+o+r.slice(c+1)}}return r}}},w=function(n){return{onSubstitution:function(r,t){if(null==n||"string"!=typeof n)throw new Error("You need to specify a string character to split by.");return"string"==typeof r&&r.includes(n)&&(r=r.split(n)),r}}},h=function(n){return null!=n&&!Number.isNaN(n)&&"boolean"!=typeof n},m=function(){return{onSubstitution:function(n){return Array.isArray(n)?n.filter(h):h(n)?n:""}}},y=new a(g({separator:","}),f,c),b=new a(g({separator:",",conjunction:"and"}),f,c),v=new a(g({separator:",",conjunction:"or"}),f,c),S=new a(w("\n"),m,g,f,c),E=new a(w("\n"),g,f,c,l(/&/g,"&amp;"),l(/</g,"&lt;"),l(/>/g,"&gt;"),l(/"/g,"&quot;"),l(/'/g,"&#x27;"),l(/`/g,"&#x60;")),j=new a(s(/(?:\n(?:\s*))+/g," "),c),A=new a(s(/(?:\n\s*)/g,""),c),R=new a(g({separator:","}),s(/(?:\s+)/g," "),c),k=new a(g({separator:",",conjunction:"or"}),s(/(?:\s+)/g," "),c),O=new a(g({separator:",",conjunction:"and"}),s(/(?:\s+)/g," "),c),T=new a(g,f,c),q=new a(g,s(/(?:\s+)/g," "),c),x=new a(f,c),z=new a(f("all"),c);t.d(r,!1,function(){return a}),t.d(r,!1,function(){return c}),t.d(r,!1,function(){return f}),t.d(r,!1,function(){return s}),t.d(r,!1,function(){return l}),t.d(r,!1,function(){return d}),t.d(r,!1,function(){return g}),t.d(r,!1,function(){return w}),t.d(r,!1,function(){return m}),t.d(r,!1,function(){return y}),t.d(r,!1,function(){return b}),t.d(r,!1,function(){return v}),t.d(r,"a",function(){return S}),t.d(r,!1,function(){return S}),t.d(r,!1,function(){return S}),t.d(r,!1,function(){return E}),t.d(r,!1,function(){return j}),t.d(r,!1,function(){return A}),t.d(r,!1,function(){return R}),t.d(r,!1,function(){return k}),t.d(r,!1,function(){return O}),t.d(r,!1,function(){return T}),t.d(r,!1,function(){return q}),t.d(r,!1,function(){return x}),t.d(r,!1,function(){return z})},396:function(n,r,t){"use strict";function e(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}t.d(r,"a",function(){return e})}}]);
if(!self.define){let i,s={};const e=(e,c)=>(e=new URL(e+".js",c).href,s[e]||new Promise((s=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=s,document.head.appendChild(i)}else i=e,importScripts(e),s()})).then((()=>{let i=s[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(c,t)=>{const l=i||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const n=i=>e(i,l),r={module:{uri:l},exports:o,require:n};s[l]=Promise.all(c.map((i=>r[i]||n(i)))).then((i=>(t(...i),o)))}}define(["./workbox-6110bacb"],(function(i){"use strict";i.setCacheNameDetails({prefix:"clock-kllJuHsizgb8DcbU"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"https://erichsia7.github.io/clock/dist/390.60aef706bf3cc5d50388.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/401.54ab524bc351f4a03eb4.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/411.5e5d877a5e330ba60222.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/486.c888c132a298ce123481.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/493.ca6e84fb78e6dc32be0d.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/518.52f2ae13f9bbb58039d9.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/525.f2f696dadfc39036a256.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/667.47ca0bfe1ed2325c16e5.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/826.8933ccd2b013a724639b.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/86.6ac2ce0ac562e3cf8b4c.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/954.bc8e44974bce46a05d74.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/969.7f158e3df90e715c659a.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/main-31743c5a.36cbbb3b50c5ce489535.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/main-899ede80.03545c932c738ff52b61.min.css",revision:null},{url:"https://erichsia7.github.io/clock/dist/main-899ede80.e443e0a86e5addf5ce89.min.js",revision:null}],{}),i.registerRoute(/^https:\/\/fonts.googleapis.com/,new i.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map

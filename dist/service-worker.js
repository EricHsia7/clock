if(!self.define){let i,s={};const e=(e,t)=>(e=new URL(e+".js",t).href,s[e]||new Promise((s=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=s,document.head.appendChild(i)}else i=e,importScripts(e),s()})).then((()=>{let i=s[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(t,c)=>{const l=i||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const n=i=>e(i,l),r={module:{uri:l},exports:o,require:n};s[l]=Promise.all(t.map((i=>r[i]||n(i)))).then((i=>(c(...i),o)))}}define(["./workbox-6110bacb"],(function(i){"use strict";i.setCacheNameDetails({prefix:"clock-4xKMlYPvRYltwyHe"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"https://erichsia7.github.io/clock/dist/390.60aef706bf3cc5d50388.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/401.54ab524bc351f4a03eb4.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/411.5e5d877a5e330ba60222.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/486.c888c132a298ce123481.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/493.ca6e84fb78e6dc32be0d.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/518.52f2ae13f9bbb58039d9.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/525.f2f696dadfc39036a256.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/667.47ca0bfe1ed2325c16e5.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/826.8933ccd2b013a724639b.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/86.6ac2ce0ac562e3cf8b4c.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/954.bc8e44974bce46a05d74.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/969.7f158e3df90e715c659a.min.js",revision:null},{url:"https://erichsia7.github.io/clock/dist/main.2033f83ef52fb1485e4d.min.css",revision:null},{url:"https://erichsia7.github.io/clock/dist/main.a60d8cd295ee2e26e715.min.js",revision:null}],{}),i.registerRoute(/^https:\/\/fonts.googleapis.com/,new i.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map

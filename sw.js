if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let a={};const o=e=>i(e,s),l={module:{uri:s},exports:a,require:o};n[s]=Promise.all(r.map((e=>l[e]||o(e)))).then((e=>(c(...e),a)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"75f0eae344ce27891ffa8e4e751ae95f"},{url:"assets/archenemy-back-DM3XkO_7.png",revision:null},{url:"assets/arena-back-DG0XEYbX.png",revision:null},{url:"assets/attraction-back-sXOKWy_Y.jpg",revision:null},{url:"assets/blank-front-nlWApPM0.png",revision:null},{url:"assets/bounty-back-oBJMIUKF.jpg",revision:null},{url:"assets/classic-back-hVCU9b8v.png",revision:null},{url:"assets/contraption-back-rtYMRLqt.jpg",revision:null},{url:"assets/index-Bz1NApKq.js",revision:null},{url:"assets/index-DmWJccRv.css",revision:null},{url:"assets/planechase-back-CUPlnHFc.png",revision:null},{url:"favicon.ico",revision:"35ad355f2952361075b887613423800c"},{url:"index.html",revision:"72566a76fc3320826e3ddc3d24ea20e9"},{url:"mtg/icon/archenemy_128.png",revision:"6e7b474c7d337ca8853381f6d3c931ea"},{url:"mtg/icon/archenemy_256.png",revision:"318c7529ad54e5a33a765cd564ad2ad1"},{url:"mtg/icon/archenemy_64.png",revision:"6204c4de857fc7ec53b69ebe25d0dd5a"},{url:"mtg/icon/archenemy.ico",revision:"1d35bbbb5391ce8436ced3b0826fa5b0"},{url:"mtg/icon/evg_180.png",revision:"71cebfa84b76cc6cc69acaab96eb9db1"},{url:"mtg/icon/evg_192.png",revision:"e181e52bfe23f5c07caa6bbc501c3f8c"},{url:"mtg/icon/evg_512.png",revision:"4024b36da6492ae84a4553ae97b639bb"},{url:"mtg/icon/evg.ico",revision:"c2d3ba565e298dbbf9f4ec82ff2991fe"},{url:"mtg/icon/planechase_128.png",revision:"d11893cfb810904a112add9448389384"},{url:"mtg/icon/planechase_256.png",revision:"f07d380cf8bec1df93a739d623dd0de7"},{url:"mtg/icon/planechase_64.png",revision:"5ce6d101b4118a54dd3b8b64f2ac7e8a"},{url:"mtg/icon/planechase.ico",revision:"35ad355f2952361075b887613423800c"},{url:"mtg/icon/starter_128.png",revision:"e9531e8536a62b44d6ac1a9014784df3"},{url:"mtg/icon/starter_256.png",revision:"4e907f24723d220b997f0250b4e18733"},{url:"mtg/icon/starter_64.png",revision:"61080c0dd699be711563b30ed770cbd7"},{url:"mtg/icon/starter.ico",revision:"379bf41cf273939be69069705221e524"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

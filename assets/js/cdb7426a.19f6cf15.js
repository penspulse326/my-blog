"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3038],{3834:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=r(4848),t=r(8453);const i={title:"[\u7279\u6548] GSAP",description:"\u5feb\u901f\u4e0a\u624b GSAP",date:new Date("2023-09-27T11:42:34.000Z"),keywords:["JavaScript","\u7a0b\u5f0f\u8a9e\u8a00","GSAP","\u7279\u6548","effects"],slug:"gsap"},l=void 0,o={id:"plugins/2023-10-29-gsap",title:"[\u7279\u6548] GSAP",description:"\u5feb\u901f\u4e0a\u624b GSAP",source:"@site/docs/plugins/2023-10-29-gsap.md",sourceDirName:"plugins",slug:"/plugins/gsap",permalink:"/plugins/gsap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"[\u7279\u6548] GSAP",description:"\u5feb\u901f\u4e0a\u624b GSAP",date:"2023-09-27T11:42:34.000Z",keywords:["JavaScript","\u7a0b\u5f0f\u8a9e\u8a00","GSAP","\u7279\u6548","effects"],slug:"gsap"},sidebar:"tutorialSidebar",previous:{title:"[\u5716\u8868] C3",permalink:"/plugins/c3js-chart"},next:{title:"[Cesium] \u9ad8\u96c4\u65c5\u9928\u5730\u5716",permalink:"/plugins/cesium-kaohsiung-motel"}},c={},a=[{value:"\u57fa\u672c\u529f\u80fd to / from / fromTo",id:"\u57fa\u672c\u529f\u80fd-to--from--fromto",level:2},{value:"\u7269\u4ef6\u4e2d\u7684\u5c6c\u6027\u4f5c\u7528",id:"\u7269\u4ef6\u4e2d\u7684\u5c6c\u6027\u4f5c\u7528",level:2},{value:"transform",id:"transform",level:3},{value:"\u6642\u9593\u9b54\u8853\u5e2b",id:"\u6642\u9593\u9b54\u8853\u5e2b",level:3},{value:"\u6642\u9593\u8ef8 timeline",id:"\u6642\u9593\u8ef8-timeline",level:2},{value:"\u6efe\u52d5\u8996\u5dee ScrollTrigger",id:"\u6efe\u52d5\u8996\u5dee-scrolltrigger",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function d(e){const n={a:"a",br:"br",code:"code",del:"del",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["CSS \u52d5\u756b\u96d6\u7136\u63d0\u4f9b\u4e86\u5f88\u591a\u6548\u679c\uff0c\u4f46\u662f\u6d89\u53ca\u5230\u4e00\u4e9b\u5143\u7d20\u9078\u53d6\uff0c\u52d5\u614b\u8abf\u6574\u7684\u90e8\u5206\uff0c",(0,s.jsx)(n.br,{}),"\n","\u9084\u662f\u5f97\u4ef0\u8cf4 JavaScript \u4f86\u64cd\u4f5c\uff0cGSAP \u6b63\u662f\u4e00\u500b\u597d\u7528\u7684\u52d5\u756b\u5957\u4ef6\uff01"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5e38\u898b\u7684\u6efe\u52d5\u8996\u5dee\u3001\u8dd1\u99ac\u71c8\u8f2a\u64ad\u3001\u6587\u5b57\u7279\u6548\u4e0d\u5728\u8a71\u4e0b\uff0c",(0,s.jsx)(n.br,{}),"\n","\u9084\u6709\u5c0e\u5165\u6642\u9593\u8ef8\u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u8f15\u9b06\u5b89\u6392\u591a\u500b\u52d5\u756b\u6548\u679c\u7684\u63a5\u7e8c\uff01"]}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u7bc7\u7bc4\u4f8b\uff1a ",(0,s.jsx)(n.a,{href:"https://codepen.io/shin9626/pen/BavXvEE",children:"https://codepen.io/shin9626/pen/BavXvEE"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u529f\u80fd-to--from--fromto",children:"\u57fa\u672c\u529f\u80fd to / from / fromTo"}),"\n",(0,s.jsxs)(n.p,{children:['\u548c C3.js \u5f88\u50cf\u5427\uff01\u76f4\u63a5\u900f\u904e gsap \u7269\u4ef6\u672c\u8eab\u5c31\u80fd\u53bb\u547c\u53eb\u65b9\u6cd5\uff0c\u53c3\u6578\u53ef\u4ee5\u662f\u5b57\u4e32\uff08"CSS \u9078\u64c7\u5668"\uff09\uff0c',(0,s.jsx)(n.br,{}),"\n","\u4e5f\u53ef\u4ee5\u662f\u900f\u904e querySelector \u53d6\u5f97\u7684 DOM \u5143\u7d20\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["to \u8207 from \u5f88\u76f4\u89c0\uff0cto \u662f\u4ee4\u5143\u7d20\u8b8a\u70ba\u67d0\u500b\u72c0\u614b\uff0cfrom \u662f\u4ee4\u5143\u7d20\u5f9e\u67d0\u500b\u72c0\u614b\u56de\u5230\u539f\u672c\u7684\u72c0\u614b\u3002",(0,s.jsx)(n.br,{}),"\n","fromTo \u5247\u662f\u5c07\u5169\u8005\u5408\u5728\u4e00\u8d77\uff0c\u8b93\u8d77\u9ede\u8207\u7d42\u9ede\u7684\u63a7\u5236\u66f4\u9748\u6d3b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'gsap.to(".orange_1", {\n  x: 100,\n  duration: 1,\n});\n\ngsap.from(".orange_2", {\n  x: 100,\n  duration: 1,\n});\n\ngsap.fromTo(\n  ".orange_3",\n  {\n    y: 100,\n  },\n  {\n    y: 0,\n    duration: 1,\n    ease: "none",\n    yoyo: true,\n    yoyoEase: "sine.out",\n    repeat: -1,\n  }\n);\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u7269\u4ef6\u4e2d\u7684\u5c6c\u6027\u4f5c\u7528",children:"\u7269\u4ef6\u4e2d\u7684\u5c6c\u6027\u4f5c\u7528"}),"\n",(0,s.jsx)(n.h3,{id:"transform",children:"transform"}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e0a\u9762\u7bc4\u4f8b\u53ef\u4ee5\u770b\u5230\u52d5\u756b\u6548\u679c\u662f\u7531\u53c3\u6578\u88e1\u9762\u7684\u7269\u4ef6\u6c7a\u5b9a\u7684\u3002",(0,s.jsx)(n.br,{}),"\n","x, y \u8207 xPercent, yPercent \u7684\u55ae\u4f4d\u5206\u5225\u662f px \u8207 %\uff0c\u5230\u9019\u908a\u6211\u5011\u5c31\u80fd\u5927\u6982\u63a8\u6e2c\u51fa\uff0c",(0,s.jsx)(n.br,{}),"\n","\u9019\u4e9b\u52d5\u756b\u904b\u884c\u7684\u65b9\u5f0f\uff0c\u5176\u5be6\u5c31\u662f\u900f\u904e ",(0,s.jsx)(n.strong,{children:"transform"})," \u767c\u751f\u6539\u8b8a\u7684\uff0c",(0,s.jsx)(n.br,{}),"\n","\u6240\u4ee5 to, from \u9019\u4e9b\u57fa\u672c\u529f\u80fd\u4e0d\u6703\u5f37\u5236\u6539\u8b8a DOM \u5143\u7d20\u672c\u8eab\u6240\u5728\u7684\u7a7a\u9593\u8207\u5b9a\u4f4d\uff0c",(0,s.jsx)(n.br,{}),"\n","\u4e5f\u5c31\u662f\u8aaa css position \u4e26\u6c92\u6709\u88ab\u6539\u8b8a\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6642\u9593\u9b54\u8853\u5e2b",children:"\u6642\u9593\u9b54\u8853\u5e2b"}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u5b8c\u6210\u6703\u4f86\u56de\u64ad\u653e\u7684\u52d5\u756b\uff0c\u5fc5\u9808\u4f7f\u7528 formTo \u9054\u6210\uff0c",(0,s.jsx)(n.br,{}),"\n","\u5176\u4e2d\u8981\u7279\u5225\u6ce8\u610f duration, ease, repeat \u9019\u4e9b\u8207\u884c\u7a0b\u76f8\u95dc\u7684\u5c6c\u6027\uff0c",(0,s.jsx)(n.br,{}),"\n","\u8981\u5beb\u5728 formTo \u7684\u7b2c\u4e09\u500b\u53c3\u6578\uff0c\u4e5f\u5c31\u662f to \u7684\u5730\u65b9\uff0c\u624d\u6703\u6709\u4f5c\u7528\u54e6\uff01",(0,s.jsx)(n.br,{}),"\n","\u52d5\u756b\u7684\u4f86\u56de\u4e3b\u8981\u662f\u4f9d\u9760 ",(0,s.jsx)(n.strong,{children:"yoyoEase: true"})," \u8207 ",(0,s.jsx)(n.strong,{children:"repeat: -1"})," \u7522\u751f\u4f86\u56de\u7684\u6548\u679c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u66f2\u7dda\u6a21\u64ec\u5668\uff1a ",(0,s.jsx)(n.a,{href:"https://gsap.com/resources/getting-started/Easing",children:"https://gsap.com/resources/getting-started/Easing"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u6642\u9593\u8ef8-timeline",children:"\u6642\u9593\u8ef8 timeline"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u6709\u591a\u500b\u52d5\u756b\u9700\u8981\u63a5\u7e8c\u64ad\u653e\uff0c\u9019\u4f7f\u53ef\u4ee5\u4f7f\u7528 timeline \u7269\u4ef6\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const timeline = gsap.timeline();\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6cd5\u8207\u4e0a\u9762\u7684\u57fa\u672c\u529f\u80fd\u4e00\u6a23\uff0c\u5728\u5f8c\u9762\u63a5\u7e8c\u51fd\u5f0f\u5373\u53ef\uff0c\u9019\u6642\u5019\u52d5\u756b\u6703\u63a5\u7e8c\u64ad\u653e\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'timeline.to(".wrapper2 .orange_1", { xPercent: 100, duration: 1 };\ntimeline.from(".wrapper2 .orange_2", { xPercent: 200, duration: 1 }));\ntimeline.fromTo(\n  ".wrapper2 .orange_3",\n  { xPercent: 300 },\n  { xPercent: 0, duration: 1, yoyoEase: true, repeat: -1 }\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u70ba timeline \u7269\u4ef6\u57f7\u884c\u5b8c\u6703\u56de\u50b3\u4e00\u6a23\u7684 timeline \u7269\u4ef6\uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5\u628a\u51fd\u5f0f\u4e32\u63a5\u5728\u4e00\u8d77\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'timeline\n  .to(".wrapper2 .orange_1", { xPercent: 100, duration: 1 })\n  .from(".wrapper2 .orange_2", { xPercent: 200, duration: 1 })\n  .fromTo(\n    ".wrapper2 .orange_3",\n    { xPercent: 300 },\n    { xPercent: 0, duration: 1, yoyoEase: true, repeat: -1 }\n  );\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u6efe\u52d5\u8996\u5dee-scrolltrigger",children:"\u6efe\u52d5\u8996\u5dee ScrollTrigger"}),"\n",(0,s.jsxs)(n.p,{children:["\u6efe\u52d5\u8996\u5dee\u662f GSAP \u7684\u984d\u5916\u529f\u80fd\uff0c\u4f7f\u7528 CDN \u7684\u8a71\u8981\u984d\u5916\u8f09\u5165 ScrollTrigger.min.js \u9019\u652f\u7a0b\u5f0f\uff0c",(0,s.jsx)(n.br,{}),"\n","npm \u6216\u662f\u76f4\u63a5\u5f9e\u5b98\u7db2\u4e0b\u8f09 js \u6a94\u7684\u5c31\u8981\u53bb\u8cc7\u6599\u593e\u5f15\u5165\u9019\u652f\u7a0b\u5f0f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f15\u5165\u5f8c\u8981\u900f\u904e\u8a3b\u518a\u51fd\u5f0f registerPlugin \u628a ScrollTrigger \u4e1f\u9032\u53bb\u624d\u80fd\u6b63\u5f0f\u555f\u7528\u3002",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.del,{children:"\uff08\u5c31\u662f\u9019\u9ebc\u56c9\u55e6\uff09"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"gsap.registerPlugin(ScrollTrigger);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["ScrollTrigger \u662f\u4f9d\u9760 timeline \u9a45\u52d5\u7684\uff0c\u5728\u5efa\u7acb timeline \u7269\u4ef6\u6642\u9700\u8981\u5e36\u5165\u4e00\u500b\u7269\u4ef6\u53c3\u6578\uff0c",(0,s.jsx)(n.br,{}),"\n","\u88e1\u9762\u662f\u6efe\u52d5\u8996\u5dee\u7684\u57fa\u672c\u8a2d\u5b9a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const triggerTL_1 = gsap.timeline({\n  scrollTrigger: {\n    trigger: ".scroll_1", // \u89f8\u767c\u5143\u7d20\n    pin: true, // \u662f\u5426\u8981\u555f\u7528\u56fa\u5b9a\u756b\u9762 \u901a\u5e38\u8981 true\n    markers: true, // \u5728\u756b\u9762\u4e0a\u986f\u793a\u52d5\u756b\u7684\u8d77\u9ede\u8207\u7d42\u9ede\n    scrub: true, // true \u7d81\u5b9a\u52d5\u756b\u9032\u5ea6\u5230\u9032\u5ea6\u689d\uff0c\u6539\u70ba\u6578\u5b57 0.5 \u53ef\u4ee5\u89e3\u6c7a\u4e00\u4e9b\u5e73\u6ed1\u554f\u984c\n  },\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u518d\u7528\u9019\u500b\u7269\u4ef6\u53bb\u547c\u53eb\u51fd\u5f0f\u5c31\u53ef\u4ee5\u57f7\u884c\u5c0d\u61c9\u7684\u52d5\u756b\u4e86\uff01"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'triggerTL_1\n  .to(".scroll1 .scroll-box2", {\n    xPercent: "-100",\n  })\n  .to(".scroll1 .scroll-box3", {\n    xPercent: "-200",\n  });\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u64da\u5c6c\u6027\u8b8a\u5316\u53ef\u4ee5\u505a\u51fa\u5f88\u591a\u8996\u5dee\u6548\u679c\uff0c\u5982\u900f\u904e XY \u8ef8\u7684\u4e0d\u7b49\u9577\u79fb\u52d5\uff0c\u6216\u662f duration \u7684\u6539\u8b8a\uff0c",(0,s.jsx)(n.br,{}),"\n","\u4f86\u88fd\u9020\u5c64\u5c64\u758a\u52a0\u7684\u6548\u679c\uff0c\u9019\u90e8\u5206\u5c31\u6bd4\u8f03\u5403\u500b\u4eba\u7a7a\u9593\u611f\u7684\u6982\u5ff5\uff0c",(0,s.jsx)(n.br,{}),"\n","\u9700\u8981\u591a\u8a66\u5e7e\u6b21\u624d\u80fd\u6e2c\u51fa\u6bd4\u8f03\u5e73\u6ed1\u7684\u8b8a\u5316\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const triggerTL_2 = gsap.timeline({\n  scrollTrigger: {\n    trigger: ".scroll2",\n    pin: true,\n    markers: true,\n    scrub: true,\n  },\n});\n\ntriggerTL_2\n  .to(".scroll2 .scroll-box2", {\n    yPercent: "-50",\n  })\n  .to(".scroll2 .scroll-box3", {\n    yPercent: "-125",\n  });\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://sleet-berry-8a9.notion.site/GSAP-ddc5d9cf73b94b6fa16bd0d6a637482b",children:"GSAP \u5be6\u4f5c\u6efe\u52d5\u8996\u5dee\u8207\u52d5\u756b"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://gsap.com/resources/getting-started/Easing/",children:"Easing"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var s=r(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
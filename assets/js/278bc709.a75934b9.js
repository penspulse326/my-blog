"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7559],{8883:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var s=r(4848),i=r(8453);const c={title:"[Cesium] \u9ad8\u96c4\u65c5\u9928\u5730\u5716",description:"\u4f7f\u7528 Cesium \u5efa\u7acb\u7c21\u55ae\u7684\u5716\u53f0\u7cfb\u7d71",date:new Date("2024-07-30T00:00:00.000Z"),keywords:["JavaScript","\u7a0b\u5f0f\u8a9e\u8a00","API","GIS","Cesium","\u5716\u53f0"],slug:"cesium-kaohsiung-motel"},l=void 0,d={id:"plugins/2024-0730-cesium",title:"[Cesium] \u9ad8\u96c4\u65c5\u9928\u5730\u5716",description:"\u4f7f\u7528 Cesium \u5efa\u7acb\u7c21\u55ae\u7684\u5716\u53f0\u7cfb\u7d71",source:"@site/docs/plugins/2024-0730-cesium.md",sourceDirName:"plugins",slug:"/plugins/cesium-kaohsiung-motel",permalink:"/plugins/cesium-kaohsiung-motel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"[Cesium] \u9ad8\u96c4\u65c5\u9928\u5730\u5716",description:"\u4f7f\u7528 Cesium \u5efa\u7acb\u7c21\u55ae\u7684\u5716\u53f0\u7cfb\u7d71",date:"2024-07-30T00:00:00.000Z",keywords:["JavaScript","\u7a0b\u5f0f\u8a9e\u8a00","API","GIS","Cesium","\u5716\u53f0"],slug:"cesium-kaohsiung-motel"},sidebar:"tutorialSidebar",previous:{title:"[\u7279\u6548] GSAP",permalink:"/plugins/gsap"}},a={},t=[{value:"\u74b0\u5883\u5efa\u7acb",id:"\u74b0\u5883\u5efa\u7acb",level:2},{value:"GIS \u4e92\u52d5\u8981\u7d20",id:"gis-\u4e92\u52d5\u8981\u7d20",level:2},{value:"\u5ea7\u6a19",id:"\u5ea7\u6a19",level:2},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"\u5716\u5c64",id:"\u5716\u5c64",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function o(e){const n={a:"a",br:"br",code:"code",del:"del",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["GIS \u662f\u500b\u5f88\u51b7\u9580\u7684\u984c\u6750\uff0c\u4f46\u8981\u5efa\u69cb\u4e00\u500b\u5b8c\u6574\u7684 GIS \u7cfb\u7d71\uff0c",(0,s.jsx)(n.br,{}),"\n","\u5176\u80cc\u5f8c\u7684\u6f14\u7b97\u6cd5\u5f88\u8907\u96dc\uff0c  \u5982\u679c\u4e0d\u662f\u516c\u53f8\u5c08\u6848\u56e0\u7d20\uff0c\u6211\u6703\u78b0\u5230 GIS \u7684\u6a5f\u6703\uff0c",(0,s.jsx)(n.br,{}),"\n","\u5927\u6982\u53ea\u6709\u67d0\u5929\u7a81\u7136\u60f3\u8d77\u300c",(0,s.jsx)(n.strong,{children:"\u53e3\u7f69\u5730\u5716"}),"\u300d\u7136\u5f8c\u5f88\u60f3\u770b\u90a3\u662f\u600e\u9ebc\u5be6\u4f5c\u7684\u6642\u5019\u5427 XD"]}),"\n",(0,s.jsx)(n.h2,{id:"\u74b0\u5883\u5efa\u7acb",children:"\u74b0\u5883\u5efa\u7acb"}),"\n",(0,s.jsxs)(n.p,{children:["Cesium \u662f\u6211\u904e\u53bb\u5728\u516c\u53f8\u7684\u5c08\u6848\u4e0a\u7528\u5230\u7684\u4e00\u5957 GIS \u5de5\u5177\uff0c",(0,s.jsx)(n.br,{}),"\n","\u6709\u4eba\u7684\u5730\u65b9\u5c31\u6709\u6c5f\u6e56\uff0c\u6709 JS \u7684\u5730\u65b9\u5c31\u6709 React\uff0c\u6240\u4ee5...\u5b83\u4e5f\u6709 React \u7684\u5c01\u88dd\u7248\uff0c",(0,s.jsx)(n.br,{}),"\n","\u53eb\u505a ",(0,s.jsx)(n.strong,{children:"Resium"}),"\uff0c\u4f46\u9019\u908a\u5148\u793a\u7bc4\u539f\u751f\u7684 CDN \u70ba\u4e3b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="utf-8" />\r\n    \x3c!-- Include the CesiumJS JavaScript and CSS files --\x3e\r\n    <script src="https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Cesium.js"><\/script>\r\n    <link\r\n      href="https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css"\r\n      rel="stylesheet"\r\n    />\r\n  </head>\r\n  <body>\r\n    <div id="cesiumContainer"></div>\r\n  </body>\r\n  <script type="module">\r\n    const viewer = new Cesium.Viewer("cesiumContainer");\r\n  <\/script>\r\n</html>\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"gis-\u4e92\u52d5\u8981\u7d20",children:"GIS \u4e92\u52d5\u8981\u7d20"}),"\n",(0,s.jsx)(n.p,{children:"\u9664\u4e86\u5efa\u69cb\u5de5\u5177\u7684\u9078\u64c7\u5916\uff0c\u5176\u5be6 GIS \u4e0d\u5916\u4e4e\u5c31\u662f\u4e0b\u9762\u7684\u8981\u7d20\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5ea7\u6a19"}),"\n",(0,s.jsx)(n.li,{children:"\u4e8b\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"\u5716\u5c64"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e5f\u5c31\u662f\u8aaa\u6211\u5011\u53ea\u8981\u6709\u9019\u4e9b\u8cc7\u8a0a\uff0c\u5c31\u80fd\u505a\u5230\u7c21\u55ae\u7684\u4e92\u52d5\u5730\u5716\u4e86\uff01"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u5ea7\u6a19",children:"\u5ea7\u6a19"}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u5728\u5730\u5716\u4e0a\u6e96\u78ba\u5b9a\u7fa9\u51fa\u67d0\u500b\u6771\u897f\u7684\u5ea7\u6a19\uff0c\u8981\u7528\u4ec0\u9ebc\u7576\u4f5c\u53c3\u8003\u5462\uff1f",(0,s.jsx)(n.br,{}),"\n","\u5c31\u662f",(0,s.jsx)(n.strong,{children:"\u7d93\u7def\u5ea6"}),"\uff01\u56e0\u6b64\u5728\u4e32\u63a5\u8cc7\u6599\u6642\uff0c\u53ea\u8981\u8cc7\u6599\u4f86\u6e90\u88e1\u9762\u662f\u6709\u7d93\u7def\u5ea6\u7684\uff0c",(0,s.jsx)(n.br,{}),"\n","\u90a3\u5c31\u4e00\u5b9a\u80fd\u5728\u5730\u5716\u4e0a\u6a19\u793a\u51fa\u4f86\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5 ",(0,s.jsx)(n.a,{href:"https://api.kcg.gov.tw/ServiceList/Detail/8ed53368-e292-4e2a-80a7-434cf497220c",children:"\u9ad8\u96c4\u57ce\u5e02\u8cc7\u6599\u5e73\u53f0 # \u9ad8\u96c4\u5e02\u4e00\u822c\u65c5\u9928\u8cc7\u6599"}),"\u70ba\u4f8b\uff0c\u5c07 JSON \u6a94\u4e0b\u8f09\u4e0b\u4f86\u5f8c\uff0c",(0,s.jsx)(n.br,{}),"\n","\u751a\u81f3\u80fd\u76f4\u63a5\u770b\u5230\u4e2d\u6587\u547d\u540d\u7684\u5c6c\u6027\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JSON",children:'{\r\n  // \u7565...\r\n  "\u7d93\u5ea6Lng": "120.2956306",\r\n  "\u7def\u5ea6Lat": "22.6270351964"\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u4e0b\u4f86\u53ef\u4ee5\u900f\u904e\u9019\u4e9b\u5ea7\u6a19\u8cc7\u6599\u5728\u5730\u5716\u4e0a\u751f\u6210\u5716\u793a\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u76ee\u524d\u8d77\u59cb\u756b\u9762\u662f\u5f9e\u5916\u592a\u7a7a\u770b\u5411\u6574\u500b\u5730\u7403\u7684\uff0c\u6240\u4ee5\u6211\u5e0c\u671b\u6539\u8b8a\u8d77\u59cb\u4f4d\u7f6e\uff0c",(0,s.jsx)(n.br,{}),"\n","\u4e00\u6a23\u9700\u8981\u7528\u5230\u9ad8\u96c4\u7684\u7d93\u7def\u5ea6 ",(0,s.jsx)(n.code,{children:"(120.3119, 22.6208)"})," \uff0c\u63a7\u5236\u756b\u9762\u79fb\u52d5\u7684\u6771\u897f\u662f ",(0,s.jsx)(n.a,{href:"https://cesium.com/learn/cesiumjs/ref-doc/Camera.html",children:"camera"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"viewer.camera.setView({\r\n  destination: Cesium.Cartesian3.fromDegrees(120.3119, 22.6208, 10000),\r\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u9ad8\u96c4\u57ce\u5e02\u8cc7\u6599\u5e73\u53f0\u6709\u7d66 JSON \u683c\u5f0f\u7684\u8cc7\u6599\uff0c\u6240\u4ee5\u76f4\u63a5 fetch \u5b83\u5373\u53ef\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'fetch("https://api.kcg.gov.tw/api/service/Get/8ed53368-e292-4e2a-80a7-434cf497220c"\r\n).then((response) => {\r\n  response.json().then((res) => {\r\n    res.data.forEach((item) => {\r\n      addBillboard(item);\r\n    })\r\n  });\r\n});\r\n\r\n// \u7522\u751f\u5716\u793a\u7684\u51fd\u5f0f\r\nfunction addBillboard(data) {\r\n  console.log(data);\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u78ba\u8a8d\u8cc7\u6599\u80fd\u5920\u63a5\u4e0a\u4e4b\u5f8c\uff0c\u5c31\u53ef\u4ee5\u4f86\u5be6\u4f5c ",(0,s.jsx)(n.code,{children:"addBillboard"})," \u9019\u500b\u51fd\u5f0f\uff0c",(0,s.jsx)(n.br,{}),"\n","Cesium \u88e1\u9762\u53ef\u4ee5\u751f\u6210\u4e0d\u540c\u985e\u578b\u7684\u5be6\u4f8b\u4e26\u986f\u793a\u5728\u756b\u9762\u4e0a\uff0c\u9019\u908a\u8981\u793a\u7bc4\u7684\u662f ",(0,s.jsx)(n.a,{href:"https://cesium.com/learn/cesiumjs/ref-doc/Billboard.html",children:(0,s.jsx)(n.code,{children:"Billboard"})}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const pinBuilder = new Cesium.PinBuilder();\r\n\r\nfunction addBillboard(data) {\r\n  viewer.entities.add({\r\n    name: data["\u65c5\u5bbf\u540d\u7a31"],\r\n    id: data.seq,\r\n    position: Cesium.Cartesian3.fromDegrees(\r\n      data["\u7d93\u5ea6Lng"],\r\n      data["\u7def\u5ea6Lat"]\r\n    ),\r\n    billboard: {\r\n      image: pinBuilder.fromText("\u6469\u9435", Cesium.Color.PINK, 100),\r\n      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,\r\n      width: 64,\r\n      height: 64,\r\n    },\r\n  });\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5b98\u65b9\u7684\u6587\u4ef6\u4e0d\u662f\u5f88\u597d\u95b1\u8b80\uff0c\u4e0d\u904e\u76f4\u63a5\u770b\u5b83\u5011\u7684 demo \u6703\u767c\u73fe\uff0c",(0,s.jsx)(n.br,{}),"\n","\u7a0b\u5f0f\u78bc\u67b6\u69cb\u5176\u5be6\u5f88\u7c21\u55ae\uff0c\u6240\u4ee5\u4f9d\u6a23\u756b\u846b\u8606\u6284\u4e0b\u4f86\u5c31\u597d\u3002",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"billboard"}),"\u672c\u8eab\u53ef\u4ee5\u81ea\u5b9a\u7fa9\u5716\u6848\uff0c\u9019\u908a\u6211\u662f\u7528 Cesium \u5167\u5efa ",(0,s.jsx)(n.code,{children:"pinBuilder"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["Cesium \u9810\u8a2d\u9ede\u64ca\u5230\u5be6\u4f8b\u662f\u53ef\u4ee5\u67e5\u770b\u8cc7\u8a0a\u7684\uff0c\u73fe\u5728\u76f4\u63a5\u9ede\u9078\u525b\u525b\u751f\u6210\u7684 ",(0,s.jsx)(n.code,{children:"billboard"}),"\uff0c",(0,s.jsx)(n.br,{}),"\n","\u6703\u5f48\u51fa\u525b\u525b\u8ce6\u4e88\u5b83\u7684 ",(0,s.jsx)(n.code,{children:"name"}),"\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/penspulse326/penspulse326.github.io/images/2023/1722249144000jzycib.png",alt:"gh"})}),"\n",(0,s.jsxs)(n.p,{children:["\u76ee\u524d\u756b\u9762\u4e0a\u7684\u8cc7\u6599\u91cf\u5f88\u591a\uff0c\u4e00\u822c\u4f86\u8aaa\u6703\u4f7f\u7528\u805a\u5408\u7684\u65b9\u5f0f\uff0c\u8b93\u9019\u4e9b\u5716\u793a\u805a\u96c6\u8d77\u4f86\uff0c",(0,s.jsx)(n.br,{}),"\n","\u7b49\u5230\u8981\u653e\u5927\u7684\u6642\u5019\u624d\u6703\u5168\u90e8\u986f\u793a\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u805a\u5408\u7684\u529f\u80fd\u8981\u5f9e ",(0,s.jsx)(n.a,{href:"https://cesium.com/learn/cesiumjs/ref-doc/CustomDataSource.html",children:(0,s.jsx)(n.code,{children:"DataSource"})})," \u88e1\u9762\u8f09\u5165\uff0c\u6240\u4ee5\u8981\u6539\u5beb\u4e00\u4e0b ",(0,s.jsx)(n.code,{children:"billboard"})," \u7684\u751f\u6210\u65b9\u5f0f\u3002",(0,s.jsx)(n.br,{}),"\n","\u9019\u4e9b class \u751f\u6210\u5be6\u4f8b\u7684\u904e\u7a0b\u6703\u56de\u50b3\u5be6\u4f8b\u672c\u8eab\uff0c\u56e0\u6b64\u8981\u7528\u8b8a\u6578\u5b58\u8d77\u4f86\uff0c",(0,s.jsx)(n.br,{}),"\n","\u9019\u6a23\u5f8c\u7e8c\u624d\u80fd\u7528\u4e00\u4e9b\u5167\u5efa\u51fd\u5f0f\u628a\u9019\u500b\u5be6\u4f8b\u79fb\u9664\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Cesium \u88e1\u9762\uff0c\u6bd4\u8f03\u5927\u91cf\u7684\u8cc7\u6599\u96c6\u662f\u53ef\u4ee5\u7528 ",(0,s.jsx)(n.code,{children:"DataSource"})," \u505a\u7ba1\u7406\u7684\uff0c",(0,s.jsx)(n.br,{}),"\n","\u9019\u908a\u4e5f\u7a0d\u5fae\u6539\u5beb\u4e00\u4e0b\u53c3\u6578\uff0c\u8b93\u51fd\u5f0f\u770b\u8d77\u4f86\u6bd4\u8f03\u6709\u901a\u7528\u6027\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const motelDataSource = new Cesium.CustomDataSource("motelData");\r\n\r\nviewer.dataSources.add(motelDataSource);\r\n\r\nfunction addBillboard(data, dataSource) {\r\n  dataSource.entities.add({\r\n  // \u7565...\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u78ba\u5b9a\u6539\u7528 ",(0,s.jsx)(n.code,{children:"DataSource"})," \u751f\u6210\u8cc7\u6599\u4e14\u6709\u6b63\u5e38\u8f09\u5165\u5f8c\uff0c\u5c31\u53ef\u4ee5\u555f\u52d5\u805a\u5408\u4e8b\u4ef6\uff0c",(0,s.jsx)(n.br,{}),"\n","\u805a\u5408\u555f\u52d5\u5f8c\u5fc5\u9808\u8a2d\u5b9a\u5b83\u805a\u5408\u8d77\u4f86\u6703\u8b8a\u6210\u4ec0\u9ebc\uff08\u53ef\u4ee5\u662f ",(0,s.jsx)(n.code,{children:"point"}),"\u3001",(0,s.jsx)(n.code,{children:"billboard"})," \u7b49\uff09\uff0c",(0,s.jsx)(n.br,{}),"\n","\u4ee5\u53ca\u8981\u986f\u793a\u4ec0\u9ebc\u6587\u5b57\uff08",(0,s.jsx)(n.code,{children:"label"}),"\uff09\uff0c\u4e0d\u7136\u756b\u9762\u4e0a\u5716\u793a\u90fd\u6703\u56e0\u70ba\u805a\u5408\u4e8b\u4ef6\u6d88\u5931\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u908a\u6211\u5e0c\u671b\u5b83\u805a\u5408\u8d77\u4f86\u4e00\u6a23\u662f ",(0,s.jsx)(n.code,{children:"billboard"}),"\uff0c",(0,s.jsx)(n.br,{}),"\n","\u800c\u5167\u5efa\u7684 ",(0,s.jsx)(n.code,{children:"pinBuilder"})," \u662f\u53ef\u4ee5\u5167\u5d4c\u6307\u5b9a\u6587\u5b57\uff0c\u6240\u4ee5\u5c31\u4e0d\u53e6\u5916\u8a2d\u5b9a ",(0,s.jsx)(n.code,{children:"label"})," \u4e86\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function initDataSource(dataSource) {\r\n  dataSource.clustering.enabled = true;\r\n  dataSource.clustering.pixelRange = 50; // \u5927\u6982\u8981\u805a\u5408\u5e7e pixel \u5167\u7684\u7269\u4ef6\r\n  dataSource.clustering.minimumClusterSize = 2; // \u6700\u5c0f\u805a\u5408\u6578\u91cf\r\n\r\n  dataSource.clustering.clusterEvent.addEventListener((\r\n    clusteredEntities,\r\n    cluster\r\n  ) => {\r\n    cluster.label.show = false; // label \u9810\u8a2d\u6703\u986f\u793a \u9019\u908a\u6211\u95dc\u6389\r\n\r\n    cluster.billboard.show = true; // billboard \u9810\u8a2d\u4e0d\u986f\u793a \u8981\u958b\u8d77\u4f86\r\n    cluster.billboard.width = 100;\r\n    cluster.billboard.height = 100;\r\n    cluster.billboard.image = pinBuilder.fromText(\r\n      `${clusteredEntities.length} \u9593`,\r\n      Cesium.Color.BLACK,\r\n      100\r\n    );\r\n  });\r\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8b\u4ef6",children:"\u4e8b\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["Cesium \u662f\u4ee5 canvas \u7684\u65b9\u5f0f\u639b\u5728\u756b\u9762\u4e0a\u7684\uff0c\u6240\u4ee5\u5982\u679c\u5b83\u6c92\u6709\u5167\u5efa\u4e00\u4e9b\u4e92\u52d5\u4e8b\u4ef6\u7684\u8a71\uff0c",(0,s.jsx)(n.br,{}),"\n","\u90a3\u5c31\u982d\u5927\u5566......\u7576\u7136 Cesium \u662f\u6709\u7684\uff0c\u5225\u64d4\u5fc3\uff0c\u5c31\u662f ",(0,s.jsx)(n.a,{href:"https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html",children:"ScreenSpaceEventHandler"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u8a2d\u5b9a\u4e8b\u4ef6\r\nconst handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);\r\n\r\nhandler.setInputAction((movement) => {\r\n  console.log(movement);\r\n}, Cesium.ScreenSpaceEventType.LEFT_CLICK);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u555f\u7528 ",(0,s.jsx)(n.code,{children:"setInputAction"})," \u4e26\u6307\u5b9a\u4e8b\u4ef6\u985e\u578b\u70ba ",(0,s.jsx)(n.code,{children:"LEFT_CLICK"}),"\uff0c",(0,s.jsx)(n.br,{}),"\n","\u73fe\u5728\u5728\u756b\u9762\u4e0a\u96a8\u4fbf\u9ede\u64ca\u90fd\u80fd\u770b\u5230 console \u5e36\u51fa\u7684\u8cc7\u6599\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{position: wt} \r\n  position: wt\r\n    x: 753.8210172653198\r\n    y: 348.2755460739136\r\n  [[Prototype]]: Object\r\n  [[Prototype]]: Object\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Cesium \u53ef\u4ee5\u7528 ",(0,s.jsx)(n.a,{href:"https://cesium.com/learn/cesiumjs/ref-doc/Scene.html",children:(0,s.jsx)(n.code,{children:"Scene"})})," \u4e0b\u9762\u7684 ",(0,s.jsx)(n.code,{children:"pick"})," \u65b9\u6cd5\uff0c\u53bb\u8fa8\u8b58\u9ede\u64ca\u7684\u4f4d\u7f6e\uff0c",(0,s.jsx)(n.br,{}),"\n","\u5982\u679c ",(0,s.jsx)(n.code,{children:"pick"})," \u5230\u7684\u6771\u897f\u662f Cesium \u88e1\u9762\u7684\u4e00\u500b\u7269\u4ef6\uff0c\u90a3\u9ebc\u53ef\u4ee5\u7528 ",(0,s.jsx)(n.a,{href:"https://cesium.com/learn/cesiumjs/ref-doc/global.html",children:(0,s.jsx)(n.code,{children:"defined"})}),"\u65b9\u6cd5\u6307\u5411\u5b83\u7684\u5be6\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"handler.setInputAction((movement) => {\r\n  const pickedObject = viewer.scene.pick(movement.position);\r\n\r\n  if (Cesium.defined(pickedObject.id)) {\r\n    console.log(pickedObject.id);\r\n  }\r\n}, Cesium.ScreenSpaceEventType.LEFT_CLICK);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u73fe\u5728\u5df2\u7d93\u80fd\u770b\u5230\u9ede\u64ca\u7684 ",(0,s.jsx)(n.code,{children:"billboard"})," \u8cc7\u6599\u4e86\uff0c",(0,s.jsx)(n.br,{}),"\n","\u5982\u679c\u662f\u8207\u5f8c\u7aef\u5354\u4f5c\u7684\u8a71\uff0c\u901a\u5e38\u6703\u5728\u9ede\u64ca\u5230 ",(0,s.jsx)(n.code,{children:"billboard"})," \u6642\u53d6\u51fa\u6211\u5011\u5148\u524d\u8ce6\u4e88\u5b83\u7684 ",(0,s.jsx)(n.code,{children:"id"}),"\uff0c",(0,s.jsx)(n.br,{}),"\n","\u518d\u8ddf\u5f8c\u7aef\u62ff\u66f4\u8a73\u7d30\u7684\u8cc7\u6599\uff0c\u9019\u908a\u6211\u5011\u76f4\u63a5\u628a JSON \u7684\u8cc7\u6599\u76f4\u63a5\u5b9a\u7fa9\u5230 ",(0,s.jsx)(n.code,{children:"billboard"})," \u88e1\u9762\u5c31\u53ef\u4ee5\u4e86\uff0c",(0,s.jsx)(n.br,{}),"\n","\u6240\u4ee5\u8981\u7a0d\u5fae\u6539\u5beb\u4e00\u4e0b ",(0,s.jsx)(n.code,{children:"addBillboard"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'function addBillboard(data, dataSource) {\r\n  dataSource.entities.add({\r\n    name: data["\u65c5\u5bbf\u540d\u7a31"],\r\n    id: data.seq,\r\n    address: data["\u5730\u5740"],\r\n    phone: data["\u96fb\u8a71"],\r\n    website: data["\u7db2\u5740"],\r\n    email: data["\u96fb\u5b50\u90f5\u4ef6"],\r\n    position: Cesium.Cartesian3.fromDegrees(\r\n      data["\u7d93\u5ea6Lng"],\r\n      data["\u7def\u5ea6Lat"]\r\n    ),\r\n    billboard: {\r\n      image: pinBuilder.fromText("\u6469\u9435", Cesium.Color.PINK, 100),\r\n      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,\r\n      width: 64,\r\n      height: 64,\r\n    },\r\n  });\r\n}\r\n// \u65c5\u9928\u7684\u8cc7\u6599\u5927\u6982\u6709\u9019\u4e9b\r\n// {\r\n//   "seq": 390,\r\n//   "\u5e8f\u865f": "390",\r\n//   "\u985e\u5225": "\u65c5\u9928",\r\n//   "\u661f\u7b49": "",\r\n//   "\u65c5\u5bbf\u540d\u7a31": "\u9e97\u99a8\u9e97\u767b\u7cbe\u54c1\u5546\u65c5",\r\n//   "\u7e23\u5e02": "\u9ad8\u96c4\u5e02",\r\n//   "\u9109\u93ae": "\u9cf3\u5c71\u5340",\r\n//   "\u5730\u5740": "830\u9ad8\u96c4\u5e02\u9cf3\u5c71\u5340\u66f9\u516c\u8def77\u865f",\r\n//   "\u96fb\u8a71": "07-7462128",\r\n//   "\u50b3\u771f": "07-7462129",\r\n//   "\u623f\u9593\u6578": "20",\r\n//   "\u96fb\u5b50\u90f5\u4ef6": "leesing.hotel@gmail.com",\r\n//   "\u7db2\u5740": "http://www.leesing-hotel.com",\r\n//   "\u90f5\u905e\u5340\u865f": "830",\r\n//   "\u7d93\u5ea6Lng": "120.357025599",\r\n//   "\u7def\u5ea6Lat": "22.6295505022"\r\n// }\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Entity"})," \u7d66\u6211\u5011\u5f88\u5927\u7684\u5f48\u6027\u53ef\u4ee5\u81ea\u8a02\u5c6c\u6027\uff0c\u4f46\u9019\u9ebc\u505a\u4e5f\u662f\u6bd4\u8f03\u5371\u96aa\u7684\uff0c",(0,s.jsx)(n.br,{}),"\n","\u6709\u53ef\u80fd\u6703\u8907\u5beb\u5230\u539f\u578b\u934a\u7684\u6771\u897f\uff0c\u6240\u4ee5\u4e00\u822c\u53ea\u6703\u5b58 id\uff0c\u7136\u5f8c\u518d\u62ff\u9019\u500b id \u53bb\u7d22\u5f15\u8cc7\u6599\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u73fe\u5728\u7a0d\u5fae\u8abf\u6574\u4e00\u4e0b\u7248\u9762\uff0c\u5c31\u53ef\u4ee5\u628a\u8cc7\u6599\u585e\u5230\u756b\u9762\u4e0a\u5566\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'handler.setInputAction((movement) => {\r\n  const pickedObject = viewer.scene.pick(movement.position);\r\n\r\n  if (Cesium.defined(pickedObject.id)) {\r\n    const infoBox = document.querySelector(".infoBox");\r\n    const { name, address, phone, website, email } = pickedObject.id;\r\n\r\n    infoBox.innerHTML = /* HTML */ `\r\n      <div class="infoBox-content">\r\n        <h2>${name}</h2>\r\n        <p>\u5730\u5740\uff1a${address}</p>\r\n        <p>\u96fb\u8a71\uff1a${phone}</p>\r\n        ${website ? `<p>\u7db2\u7ad9\uff1a<a href="${website}">${website}</a></p>` : ""}\r\n        ${email\r\n          ? `<p>\u96fb\u5b50\u4fe1\u7bb1\uff1a<a href="mailto:${email}">${email}</a></p>`\r\n          : ""}\r\n      </div>\r\n    `;\r\n  }\r\n}, Cesium.ScreenSpaceEventType.LEFT_CLICK);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u76ee\u524d Cesium \u9084\u662f\u6703\u5728\u9ede\u64ca\u6642\u5f48\u51fa\u9810\u8a2d\u7684 infoBox\uff0c\u9084\u6703\u6709\u4e00\u500b\u7da0\u8272\u9396\u5b9a\u6846\uff0c",(0,s.jsx)(n.br,{}),"\n","\u9019\u662f\u53ef\u4ee5\u95dc\u6389\u7684\uff0c\u901a\u5e38\u521d\u59cb\u5316\u6642\u6703\u5e36\u5165 options \u53bb\u95dc\u6389\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const viewer = new Cesium.Viewer("cesiumContainer", {\r\n  infoBox: false,\r\n  selectionIndicator: false,\r\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.del,{children:"\u9019\u6a23\u9ad8\u96c4\u745f\u745f\u7db2\u5df2\u7d93\u5b8c\u6210\u5f97\u5dee\u4e0d\u591a\u5566\uff01"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u5716\u5c64",children:"\u5716\u5c64"}),"\n",(0,s.jsxs)(n.p,{children:["GIS \u7cfb\u7d71\u88e1\u9762\u5f88\u591a\u6771\u897f\u53ef\u4ee5\u900f\u904e\u5716\u5c64\u7684\u65b9\u5f0f\u758a\u52a0\u6216\u6df7\u5408\u6e32\u67d3\uff0c",(0,s.jsx)(n.br,{}),"\n","\u5305\u542b\u6a21\u578b\u3001\u5730\u5f62\u3001\u7b49\u9ad8\u7dda\u7b49\u7b49\uff0c\u985e\u4f3c Photoshop \u7684\u5716\u5c64\u529f\u80fd\uff0c",(0,s.jsx)(n.br,{}),"\n","\u662f\u53ef\u4ee5\u958b\u958b\u95dc\u95dc\u7684\uff0c\u5305\u542b\u524d\u9762\u6211\u5011\u751f\u6210\u7684 ",(0,s.jsx)(n.code,{children:"Billboard"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["Cesium \u900f\u904e ",(0,s.jsx)(n.code,{children:"ImageryProvider"})," \u7ba1\u7406\u756b\u9762\u7684",(0,s.jsx)(n.strong,{children:"\u5e95\u5716"}),"\uff0c",(0,s.jsx)(n.br,{}),"\n","\u7db2\u8def\u4e0a\u6709\u5f88\u591a\u5730\u5716\u670d\u52d9 API \u662f\u6709\u63d0\u4f9b\u5e95\u5716\u53ef\u4ee5\u4e32\u63a5\u7684\uff0c\u4f46\u5927\u591a\u8981\u5148\u7533\u8acb API Key\uff0c",(0,s.jsx)(n.br,{}),"\n","\u9019\u88e1\u6211\u5011\u4f7f\u7528\u514d\u8cbb\u7684\u300c",(0,s.jsx)(n.a,{href:"https://maps.nlsc.gov.tw/S09SOA/homePage.action?Language=ZH",children:"\u53f0\u7063\u901a\u7528\u96fb\u5b50\u5730\u5716"}),"\u300d\u5373\u53ef\uff08",(0,s.jsx)(n.del,{children:"\u8b93\u5927\u5bb6\u77e5\u9053\u653f\u5e9c\u6709\u5728\u505a\u4e8b"}),"\uff09\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["GIS \u662f\u6709\u570b\u969b\u898f\u7bc4\u7684\uff0c\u6240\u4ee5\u770b\u4e0d\u61c2\u9019\u4e9b\u5bc6\u5bc6\u9ebb\u9ebb\u7684\u4ee3\u865f\u6c92\u95dc\u4fc2\uff0c",(0,s.jsx)(n.br,{}),"\n","GPT \u6703\u544a\u8a34\u4f60\u89e3\u7b54\uff08\uff1f\uff09\uff0c\u5982\u4e0b\u5716\u6240\u793a\uff0c\u6211\u5011\u53ea\u9700\u8981\u64f7\u53d6\u5230\u9019\u4e9b\u8cc7\u8a0a\u5373\u53ef\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/penspulse326/penspulse326.github.io/images/2023/1722267426000age58o.png",alt:"gh"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ImageryProvider"})," \u6709\u597d\u5e7e\u7a2e\uff0c\u9019\u7a2e\u7b2c\u4e09\u65b9\u7db2\u8def\u670d\u52d9\u7684\u5e95\u5716\uff0c",(0,s.jsx)(n.br,{}),"\n","\u8981\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://cesium.com/learn/cesiumjs/ref-doc/WebMapServiceImageryProvider.html",children:"WebMapServiceImageryProvider"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const taiwanMap = new Cesium.WebMapTileServiceImageryProvider({\r\n  url: "https://wmts.nlsc.gov.tw/wmts",\r\n  style: "default",\r\n  format: "image/jpeg",\r\n  tileMatrixSetID: "EPSG:3857",\r\n  maximumLevel: 19,\r\n  layer: "EMAP",\r\n});\r\n\r\nviewer.imageryLayers.addImageryProvider(taiwanMap);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u767c\u73fe\u525b\u525b\u770b\u5230\u7684\u898f\u683c\uff0cCesium \u90fd\u6709\u6307\u5b9a\u8981\u586b\u5beb\uff0c",(0,s.jsx)(n.br,{}),"\n","\u56e0\u6b64\u6211\u5011\u53ea\u8981\u586b\u683c\u5b50\u5c31\u597d\uff0cCesium \u6703\u81ea\u52d5\u53bb\u89e3\u6790 url \u88e1\u9762\u7684 xml \u8cc7\u6599\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u6709\u7559\u610f\u904e Google Map \u7684\u4ecb\u9762\uff0c\u61c9\u8a72\u6703\u767c\u73fe\u7db2\u9801\u7248\u6216 App \u7248\u90fd\u6703\u6709\u9019\u500b\u6309\u9215\uff0c",(0,s.jsx)(n.br,{}),"\n","\u88e1\u9762\u5c31\u662f\u958b\u95dc\u5716\u5c64\u7684\u908f\u8f2f\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/penspulse326/penspulse326.github.io/images/2023/1722268260000qoo0pn.png",alt:"gh"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u5011\u4e5f\u53ef\u4ee5\u5be6\u4f5c\u4e00\u500b\u6309\u9215\u4f86\u9054\u5230\u958b\u95dc\u5716\u5c64\u7684\u6548\u679c\uff0c",(0,s.jsx)(n.br,{}),"\n","\u5716\u5c64\u6709 ",(0,s.jsx)(n.code,{children:"show"})," \u9019\u500b\u5c6c\u6027\u63a7\u5236\u986f\u793a\u8207\u5426\uff0c\u4f46\u662f\u5fc5\u9808\u5148\u628a\u525b\u525b ",(0,s.jsx)(n.code,{children:"addImageryProvider"})," \u7684\u7d50\u679c\u5b58\u8d77\u4f86\uff0c\r\n",(0,s.jsx)(n.code,{children:"addImageryProvider"})," \u6703\u8fd4\u56de\u4e00\u500b ",(0,s.jsx)(n.code,{children:"Layer"})," \u7269\u4ef6\uff0c\u88e1\u9762\u624d\u6709 ",(0,s.jsx)(n.code,{children:"show"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const taiwanMapLayer = viewer.imageryLayers.addImageryProvider(taiwanMap);\r\n\r\nbtnToggleMap.addEventListener("click", () => {\r\n  const isShow = taiwanMapLayer.show;\r\n  const text = isShow ? "\u95dc\u9589\u53f0\u7063 E-map" : "\u958b\u555f\u53f0\u7063 E-map";\r\n\r\n  taiwanMapLayer.show = !isShow;\r\n  btnToggleMap.textContent = text;\r\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5230\u76ee\u524d\u70ba\u6b62\u7b97\u662f\u5927\u529f\u544a\u6210\uff0c\u5df2\u7d93\u5b8c\u6210\u4e00\u500b\u7c21\u55ae\u7684\u5716\u53f0\u7cfb\u7d71\u56c9\uff5e"}),"\n",(0,s.jsxs)(n.p,{children:["\u5b8c\u6574\u7a0b\u5f0f\u78bc\u53ef\u53c3\u8003\uff1a",(0,s.jsx)(n.a,{href:"https://codepen.io/shin9626/pen/xxogOKw",children:"CodePen \u9023\u7d50"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cesium.com/learn/cesiumjs/ref-doc/index.html",children:"CesiumJS"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var s=r(6540);const i={},c=s.createContext(i);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
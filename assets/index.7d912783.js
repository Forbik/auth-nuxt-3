import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";import{f as $,g as i,o as s,c as r,K as h,I as l,b as d,a as o,w as M,d as p,t as u,H as P,x as g,i as _,m as k,l as m,L as B,M as C}from"./entry.aa7cec8e.js";import{_ as N,u as V}from"./products.c2897993.js";import{_ as I}from"./nuxt-link.2d79c499.js";import"./useEndpoint.df2d85eb.js";const S={},j=$('<div class="flex items-center justify-center lg:h-80 mb-4 bg-gray-300"><svg class="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20"><path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path><path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"></path></svg></div><div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div><div class="h-2 bg-gray-200 rounded-full mb-2.5"></div><div class="h-2 bg-gray-200 rounded-full"></div><span class="sr-only">Loading...</span>',5);function A(t,a){return j}const G=L(S,[["render",A]]),H=i({__name:"ProductGrid",props:{numberOfElements:{type:Number,default:12}},setup(t){return(a,c)=>{const e=G;return s(!0),r(l,null,h(t.numberOfElements,n=>(s(),r("div",{key:n+"-product-loader",role:"status",class:"max-w-xs animate-pulse p-4 border-r border-b border-gray-200"},[d(e)]))),128)}}}),z={class:"goods-tile"},Z={class:"flex justify-center items-center w-full overflow-hidden h-80"},D={class:"mt-4 flex justify-between"},E={class:"text-sm text-gray-700"},O=o("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1),T={class:"mt-1 text-sm text-gray-500"},F={class:"text-sm font-medium text-gray-900"},K=i({__name:"ProductItem",props:{product:{type:Object,default:()=>({})}},setup(t){return(a,c)=>{const e=N,n=I;return s(),r("div",z,[o("div",Z,[d(e,{src:t.product.thumbnail,loading:"lazy",alt:t.product.description,class:"max-h-full max-w-full"},null,8,["src","alt"])]),o("div",D,[o("div",null,[o("h3",E,[d(n,{to:`/products/${t.product.id}`},{default:M(()=>[O,p(" "+u(t.product.title),1)]),_:1},8,["to"])]),o("p",T,u(t.product.brand),1)]),o("p",F," $"+u(t.product.price),1)])])}}});const q=i({__name:"ProductGrid",props:{products:{type:Array,default:()=>[]}},setup(t){return(a,c)=>{const e=K;return s(!0),r(l,null,h(t.products,n=>(s(),r("div",{key:n.id,class:"products-grid__cell group relative p-4 border-r border-b border-gray-200"},[d(e,{product:n},null,8,["product"])]))),128)}}});const J=["disabled"],Q=o("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),R=i({__name:"LoadMore",props:{isLoading:{type:Boolean,default:!1}},emits:["loadMore"],setup(t,{emit:a}){const c=()=>{a("loadMore")};return(e,n)=>(s(),r("button",{class:P(["flex w-full justify-center items-center mt-10 px-4 py-2 font-semibold leading-6 text-sm rounded-md text-white transition ease-in-out duration-150",t.isLoading?"bg-blue-500 hover:bg-blue-400 cursor-not-allowed":"bg-blue-700 hover:bg-blue-600"]),disabled:t.isLoading,onClick:c},[t.isLoading?(s(),r(l,{key:0},[Q,p(" Loading... ")],64)):(s(),r(l,{key:1},[p(" Load more ")],64))],10,J))}}),U={class:"products bg-white"},W={class:"mx-auto max-w-2xl px-2 py-8 sm:px-2 sm:py-10 lg:max-w-7xl lg:px-8"},X=o("h2",{class:"text-2xl font-bold tracking-tight text-gray-900"}," Trending products ",-1),Y={key:0,class:"products-grid mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200"},tt={class:"products-grid mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200"},dt=i({__name:"index",setup(t){const a=g(!1),c=g(!1),e=V(),n=_(()=>e.limit??12),f=_(()=>e.products??[]),x=_(()=>e.products.length<e.total);k(async()=>{e.products.length===0&&(a.value=!0,await e.fetchProducts().then(()=>{a.value=!1}))});const b=async()=>{c.value=!0,await e.fetchProducts(void 0,!0).then(()=>{c.value=!1})};return(et,ot)=>{const v=H,y=q,w=R;return s(),r("div",U,[o("div",W,[X,a.value?(s(),r("div",Y,[d(v,{"number-of-elements":m(n)},null,8,["number-of-elements"])])):(s(),r(l,{key:1},[o("div",tt,[d(y,{products:m(f)},null,8,["products"])]),B(d(w,{"is-loading":c.value,onLoadMore:b},null,8,["is-loading"]),[[C,m(x)]])],64))])])}}});export{dt as default};
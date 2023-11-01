import{_ as J}from"./nuxt-link.c03595a6.js";import{O as De,i as Pe,H as N,B as H,m as U,v as x,l as V,A as $,y as C,h as S,f as M,P as Z,Q as Me,q as Oe,F as fe,E as Ce,o as I,L as G,w,a as p,b as _,k as E,c as D,R as q,T as $e,G as A,d as F,t as Y,K as Te}from"./entry.1051b4bd.js";import{u as oe}from"./auth.fd0c7679.js";import{_ as pe}from"./_plugin-vue_export-helper.c27b6911.js";function R(e,n,...r){if(e in n){let t=n[e];return typeof t=="function"?t(...r):t}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(t=>`"${t}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,R),l}var j=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(j||{}),Re=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Re||{});function T({visible:e=!0,features:n=0,ourProps:r,theirProps:l,...t}){var u;let a=me(l,r),s=Object.assign(t,{props:a});if(e||n&2&&a.static)return z(s);if(n&1){let c=(u=a.unmount)==null||u?0:1;return R(c,{0(){return null},1(){return z({...t,props:{...a,hidden:!0,style:{display:"none"}}})}})}return z(s)}function z({props:e,attrs:n,slots:r,slot:l,name:t}){var u,a;let{as:s,...c}=Ae(e,["unmount","static"]),i=(u=r.default)==null?void 0:u.call(r,l),o={};if(l){let h=!1,d=[];for(let[v,m]of Object.entries(l))typeof m=="boolean"&&(h=!0),m===!0&&d.push(v);h&&(o["data-headlessui-state"]=d.join(" "))}if(s==="template"){if(i=ve(i??[]),Object.keys(c).length>0||Object.keys(n).length>0){let[h,...d]=i??[];if(!Fe(h)||d.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${t} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(c).concat(Object.keys(n)).map(f=>f.trim()).filter((f,y,O)=>O.indexOf(f)===y).sort((f,y)=>f.localeCompare(y)).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let v=me((a=h.props)!=null?a:{},c),m=De(h,v);for(let f in v)f.startsWith("on")&&(m.props||(m.props={}),m.props[f]=v[f]);return m}return Array.isArray(i)&&i.length===1?i[0]:i}return Pe(s,Object.assign({},c,o),{default:()=>i})}function ve(e){return e.flatMap(n=>n.type===N?ve(n.children):[n])}function me(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},r={};for(let l of e)for(let t in l)t.startsWith("on")&&typeof l[t]=="function"?(r[t]!=null||(r[t]=[]),r[t].push(l[t])):n[t]=l[t];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(r).map(l=>[l,void 0])));for(let l in r)Object.assign(n,{[l](t,...u){let a=r[l];for(let s of a){if(t instanceof Event&&t.defaultPrevented)return;s(t,...u)}}});return n}function Ae(e,n=[]){let r=Object.assign({},e);for(let l of n)l in r&&delete r[l];return r}function Fe(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ne=0;function je(){return++Ne}function L(){return je()}var b=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(b||{});function Le(e){throw new Error("Unexpected object: "+e)}var k=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(k||{});function Be(e,n){let r=n.resolveItems();if(r.length<=0)return null;let l=n.resolveActiveIndex(),t=l??-1,u=(()=>{switch(e.focus){case 0:return r.findIndex(a=>!n.resolveDisabled(a));case 1:{let a=r.slice().reverse().findIndex((s,c,i)=>t!==-1&&i.length-c-1>=t?!1:!n.resolveDisabled(s));return a===-1?a:r.length-1-a}case 2:return r.findIndex((a,s)=>s<=t?!1:!n.resolveDisabled(a));case 3:{let a=r.slice().reverse().findIndex(s=>!n.resolveDisabled(s));return a===-1?a:r.length-1-a}case 4:return r.findIndex(a=>n.resolveId(a)===e.id);case 5:return null;default:Le(e)}})();return u===-1?l:u}function g(e){var n;return e==null||e.value==null?null:(n=e.value.$el)!=null?n:e.value}let he=Symbol("Context");var P=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(P||{});function ge(){return H(he,null)}function be(e){U(he,e)}function ae(e,n){if(e)return e;let r=n??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function xe(e,n){let r=x(ae(e.value.type,e.value.as));return V(()=>{r.value=ae(e.value.type,e.value.as)}),$(()=>{var l;r.value||g(n)&&g(n)instanceof HTMLButtonElement&&!((l=g(n))!=null&&l.hasAttribute("type"))&&(r.value="button")}),r}var He=Object.defineProperty,Ue=(e,n,r)=>n in e?He(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,se=(e,n,r)=>(Ue(e,typeof n!="symbol"?n+"":n,r),r);class Ve{constructor(){se(this,"current",this.detect()),se(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let ee=new Ve;function te(e){if(ee.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let n=g(e);if(n)return n.ownerDocument}return document}function Ke({container:e,accept:n,walk:r,enabled:l}){$(()=>{let t=e.value;if(!t||l!==void 0&&!l.value)return;let u=te(e);if(!u)return;let a=Object.assign(c=>n(c),{acceptNode:n}),s=u.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,a,!1);for(;s.nextNode();)r(s.currentNode)})}let Q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var X=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(X||{}),Ge=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ge||{}),ze=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ze||{});function ye(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Q)).sort((n,r)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var ne=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ne||{});function re(e,n=0){var r;return e===((r=te(e))==null?void 0:r.body)?!1:R(n,{0(){return e.matches(Q)},1(){let l=e;for(;l!==null;){if(l.matches(Q))return!0;l=l.parentElement}return!1}})}function we(e){let n=te(e);C(()=>{n&&!re(n.activeElement,0)&&qe(e)})}var We=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(We||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function qe(e){e==null||e.focus({preventScroll:!0})}let Ye=["textarea","input"].join(",");function Qe(e){var n,r;return(r=(n=e==null?void 0:e.matches)==null?void 0:n.call(e,Ye))!=null?r:!1}function _e(e,n=r=>r){return e.slice().sort((r,l)=>{let t=n(r),u=n(l);if(t===null||u===null)return 0;let a=t.compareDocumentPosition(u);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Xe(e,n){return Je(ye(),n,{relativeTo:e})}function Je(e,n,{sorted:r=!0,relativeTo:l=null,skipElements:t=[]}={}){var u;let a=(u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?u:document,s=Array.isArray(e)?r?_e(e):e:ye(e);t.length>0&&s.length>1&&(s=s.filter(m=>!t.includes(m))),l=l??a.activeElement;let c=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,s.indexOf(l))-1;if(n&4)return Math.max(0,s.indexOf(l))+1;if(n&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),o=n&32?{preventScroll:!0}:{},h=0,d=s.length,v;do{if(h>=d||h+d<=0)return 0;let m=i+h;if(n&16)m=(m+d)%d;else{if(m<0)return 3;if(m>=d)return 1}v=s[m],v==null||v.focus(o),h+=c}while(v!==a.activeElement);return n&6&&Qe(v)&&v.select(),2}function B(e,n,r){ee.isServer||$(l=>{document.addEventListener(e,n,r),l(()=>document.removeEventListener(e,n,r))})}function Ze(e,n,r){ee.isServer||$(l=>{window.addEventListener(e,n,r),l(()=>window.removeEventListener(e,n,r))})}function et(e,n,r=S(()=>!0)){function l(u,a){if(!r.value||u.defaultPrevented)return;let s=a(u);if(s===null||!s.getRootNode().contains(s))return;let c=function i(o){return typeof o=="function"?i(o()):Array.isArray(o)||o instanceof Set?o:[o]}(e);for(let i of c){if(i===null)continue;let o=i instanceof HTMLElement?i:g(i);if(o!=null&&o.contains(s)||u.composed&&u.composedPath().includes(o))return}return!re(s,ne.Loose)&&s.tabIndex!==-1&&u.preventDefault(),n(u,s)}let t=x(null);B("pointerdown",u=>{var a,s;r.value&&(t.value=((s=(a=u.composedPath)==null?void 0:a.call(u))==null?void 0:s[0])||u.target)},!0),B("mousedown",u=>{var a,s;r.value&&(t.value=((s=(a=u.composedPath)==null?void 0:a.call(u))==null?void 0:s[0])||u.target)},!0),B("click",u=>{t.value&&(l(u,()=>t.value),t.value=null)},!0),B("touchend",u=>l(u,()=>u.target instanceof HTMLElement?u.target:null),!0),Ze("blur",u=>l(u,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ue(e){return[e.screenX,e.screenY]}function tt(){let e=x([-1,-1]);return{wasMoved(n){let r=ue(n);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(n){e.value=ue(n)}}}var nt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(nt||{});let ke=Symbol("DisclosureContext");function le(e){let n=H(ke,null);if(n===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,le),r}return n}let Se=Symbol("DisclosurePanelContext");function rt(){return H(Se,null)}let lt=M({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:n,attrs:r}){let l=x(e.defaultOpen?0:1),t=x(null),u=x(null),a={buttonId:x(`headlessui-disclosure-button-${L()}`),panelId:x(`headlessui-disclosure-panel-${L()}`),disclosureState:l,panel:t,button:u,toggleDisclosure(){l.value=R(l.value,{0:1,1:0})},closeDisclosure(){l.value!==1&&(l.value=1)},close(s){a.closeDisclosure();let c=(()=>s?s instanceof HTMLElement?s:s.value instanceof HTMLElement?g(s):g(a.button):g(a.button))();c==null||c.focus()}};return U(ke,a),be(S(()=>R(l.value,{0:P.Open,1:P.Closed}))),()=>{let{defaultOpen:s,...c}=e,i={open:l.value===0,close:a.close};return T({theirProps:c,ourProps:{},slot:i,slots:n,attrs:r,name:"Disclosure"})}}}),ie=M({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:n,slots:r,expose:l}){let t=le("DisclosureButton"),u=rt(),a=S(()=>u===null?!1:u.value===t.panelId.value);V(()=>{a.value||e.id!==null&&(t.buttonId.value=e.id)}),Z(()=>{a.value||(t.buttonId.value=null)});let s=x(null);l({el:s,$el:s}),a.value||$(()=>{t.button.value=s.value});let c=xe(S(()=>({as:e.as,type:n.type})),s);function i(){var d;e.disabled||(a.value?(t.toggleDisclosure(),(d=g(t.button))==null||d.focus()):t.toggleDisclosure())}function o(d){var v;if(!e.disabled)if(a.value)switch(d.key){case b.Space:case b.Enter:d.preventDefault(),d.stopPropagation(),t.toggleDisclosure(),(v=g(t.button))==null||v.focus();break}else switch(d.key){case b.Space:case b.Enter:d.preventDefault(),d.stopPropagation(),t.toggleDisclosure();break}}function h(d){switch(d.key){case b.Space:d.preventDefault();break}}return()=>{var d;let v={open:t.disclosureState.value===0},{id:m,...f}=e,y=a.value?{ref:s,type:c.value,onClick:i,onKeydown:o}:{id:(d=t.buttonId.value)!=null?d:m,ref:s,type:c.value,"aria-expanded":t.disclosureState.value===0,"aria-controls":t.disclosureState.value===0||g(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:i,onKeydown:o,onKeyup:h};return T({ourProps:y,theirProps:f,slot:v,attrs:n,slots:r,name:"DisclosureButton"})}}}),ot=M({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:n,slots:r,expose:l}){let t=le("DisclosurePanel");V(()=>{e.id!==null&&(t.panelId.value=e.id)}),Z(()=>{t.panelId.value=null}),l({el:t.panel,$el:t.panel}),U(Se,t.panelId);let u=ge(),a=S(()=>u!==null?(u.value&P.Open)===P.Open:t.disclosureState.value===0);return()=>{var s;let c={open:t.disclosureState.value===0,close:t.close},{id:i,...o}=e,h={id:(s=t.panelId.value)!=null?s:i,ref:t.panel};return T({ourProps:h,theirProps:o,slot:c,attrs:n,slots:r,features:j.RenderStrategy|j.Static,visible:a.value,name:"DisclosurePanel"})}}}),ce=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function de(e){var n,r;let l=(n=e.innerText)!=null?n:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return l;let u=!1;for(let s of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),u=!0;let a=u?(r=t.innerText)!=null?r:"":l;return ce.test(a)&&(a=a.replace(ce,"")),a}function at(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let r=e.getAttribute("aria-labelledby");if(r){let l=r.split(" ").map(t=>{let u=document.getElementById(t);if(u){let a=u.getAttribute("aria-label");return typeof a=="string"?a.trim():de(u).trim()}return null}).filter(Boolean);if(l.length>0)return l.join(", ")}return de(e).trim()}function st(e){let n=x(""),r=x("");return()=>{let l=g(e);if(!l)return"";let t=l.innerText;if(n.value===t)return r.value;let u=at(l).trim().toLowerCase();return n.value=t,r.value=u,u}}var ut=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ut||{}),it=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(it||{});function ct(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Ie=Symbol("MenuContext");function K(e){let n=H(Ie,null);if(n===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,K),r}return n}let dt=M({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:r}){let l=x(1),t=x(null),u=x(null),a=x([]),s=x(""),c=x(null),i=x(1);function o(d=v=>v){let v=c.value!==null?a.value[c.value]:null,m=_e(d(a.value.slice()),y=>g(y.dataRef.domRef)),f=v?m.indexOf(v):null;return f===-1&&(f=null),{items:m,activeItemIndex:f}}let h={menuState:l,buttonRef:t,itemsRef:u,items:a,searchQuery:s,activeItemIndex:c,activationTrigger:i,closeMenu:()=>{l.value=1,c.value=null},openMenu:()=>l.value=0,goToItem(d,v,m){let f=o(),y=Be(d===k.Specific?{focus:k.Specific,id:v}:{focus:d},{resolveItems:()=>f.items,resolveActiveIndex:()=>f.activeItemIndex,resolveId:O=>O.id,resolveDisabled:O=>O.dataRef.disabled});s.value="",c.value=y,i.value=m??1,a.value=f.items},search(d){let v=s.value!==""?0:1;s.value+=d.toLowerCase();let m=(c.value!==null?a.value.slice(c.value+v).concat(a.value.slice(0,c.value+v)):a.value).find(y=>y.dataRef.textValue.startsWith(s.value)&&!y.dataRef.disabled),f=m?a.value.indexOf(m):-1;f===-1||f===c.value||(c.value=f,i.value=1)},clearSearch(){s.value=""},registerItem(d,v){let m=o(f=>[...f,{id:d,dataRef:v}]);a.value=m.items,c.value=m.activeItemIndex,i.value=1},unregisterItem(d){let v=o(m=>{let f=m.findIndex(y=>y.id===d);return f!==-1&&m.splice(f,1),m});a.value=v.items,c.value=v.activeItemIndex,i.value=1}};return et([t,u],(d,v)=>{var m;h.closeMenu(),re(v,ne.Loose)||(d.preventDefault(),(m=g(t))==null||m.focus())},S(()=>l.value===0)),U(Ie,h),be(S(()=>R(l.value,{0:P.Open,1:P.Closed}))),()=>{let d={open:l.value===0,close:h.closeMenu};return T({ourProps:{},theirProps:e,slot:d,slots:n,attrs:r,name:"Menu"})}}}),ft=M({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${L()}`}},setup(e,{attrs:n,slots:r,expose:l}){let t=K("MenuButton");l({el:t.buttonRef,$el:t.buttonRef});function u(i){switch(i.key){case b.Space:case b.Enter:case b.ArrowDown:i.preventDefault(),i.stopPropagation(),t.openMenu(),C(()=>{var o;(o=g(t.itemsRef))==null||o.focus({preventScroll:!0}),t.goToItem(k.First)});break;case b.ArrowUp:i.preventDefault(),i.stopPropagation(),t.openMenu(),C(()=>{var o;(o=g(t.itemsRef))==null||o.focus({preventScroll:!0}),t.goToItem(k.Last)});break}}function a(i){switch(i.key){case b.Space:i.preventDefault();break}}function s(i){e.disabled||(t.menuState.value===0?(t.closeMenu(),C(()=>{var o;return(o=g(t.buttonRef))==null?void 0:o.focus({preventScroll:!0})})):(i.preventDefault(),t.openMenu(),ct(()=>{var o;return(o=g(t.itemsRef))==null?void 0:o.focus({preventScroll:!0})})))}let c=xe(S(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var i;let o={open:t.menuState.value===0},{id:h,...d}=e,v={ref:t.buttonRef,id:h,type:c.value,"aria-haspopup":"menu","aria-controls":(i=g(t.itemsRef))==null?void 0:i.id,"aria-expanded":t.menuState.value===0,onKeydown:u,onKeyup:a,onClick:s};return T({ourProps:v,theirProps:d,slot:o,attrs:n,slots:r,name:"MenuButton"})}}}),pt=M({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${L()}`}},setup(e,{attrs:n,slots:r,expose:l}){let t=K("MenuItems"),u=x(null);l({el:t.itemsRef,$el:t.itemsRef}),Ke({container:S(()=>g(t.itemsRef)),enabled:S(()=>t.menuState.value===0),accept(o){return o.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:o.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(o){o.setAttribute("role","none")}});function a(o){var h;switch(u.value&&clearTimeout(u.value),o.key){case b.Space:if(t.searchQuery.value!=="")return o.preventDefault(),o.stopPropagation(),t.search(o.key);case b.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeItemIndex.value!==null){let d=t.items.value[t.activeItemIndex.value];(h=g(d.dataRef.domRef))==null||h.click()}t.closeMenu(),we(g(t.buttonRef));break;case b.ArrowDown:return o.preventDefault(),o.stopPropagation(),t.goToItem(k.Next);case b.ArrowUp:return o.preventDefault(),o.stopPropagation(),t.goToItem(k.Previous);case b.Home:case b.PageUp:return o.preventDefault(),o.stopPropagation(),t.goToItem(k.First);case b.End:case b.PageDown:return o.preventDefault(),o.stopPropagation(),t.goToItem(k.Last);case b.Escape:o.preventDefault(),o.stopPropagation(),t.closeMenu(),C(()=>{var d;return(d=g(t.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case b.Tab:o.preventDefault(),o.stopPropagation(),t.closeMenu(),C(()=>Xe(g(t.buttonRef),o.shiftKey?X.Previous:X.Next));break;default:o.key.length===1&&(t.search(o.key),u.value=setTimeout(()=>t.clearSearch(),350));break}}function s(o){switch(o.key){case b.Space:o.preventDefault();break}}let c=ge(),i=S(()=>c!==null?(c.value&P.Open)===P.Open:t.menuState.value===0);return()=>{var o,h;let d={open:t.menuState.value===0},{id:v,...m}=e,f={"aria-activedescendant":t.activeItemIndex.value===null||(o=t.items.value[t.activeItemIndex.value])==null?void 0:o.id,"aria-labelledby":(h=g(t.buttonRef))==null?void 0:h.id,id:v,onKeydown:a,onKeyup:s,role:"menu",tabIndex:0,ref:t.itemsRef};return T({ourProps:f,theirProps:m,slot:d,attrs:n,slots:r,features:j.RenderStrategy|j.Static,visible:i.value,name:"MenuItems"})}}}),W=M({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${L()}`}},setup(e,{slots:n,attrs:r,expose:l}){let t=K("MenuItem"),u=x(null);l({el:u,$el:u});let a=S(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),s=st(u),c=S(()=>({disabled:e.disabled,get textValue(){return s()},domRef:u}));V(()=>t.registerItem(e.id,c)),Z(()=>t.unregisterItem(e.id)),$(()=>{t.menuState.value===0&&a.value&&t.activationTrigger.value!==0&&C(()=>{var f,y;return(y=(f=g(u))==null?void 0:f.scrollIntoView)==null?void 0:y.call(f,{block:"nearest"})})});function i(f){if(e.disabled)return f.preventDefault();t.closeMenu(),we(g(t.buttonRef))}function o(){if(e.disabled)return t.goToItem(k.Nothing);t.goToItem(k.Specific,e.id)}let h=tt();function d(f){h.update(f)}function v(f){h.wasMoved(f)&&(e.disabled||a.value||t.goToItem(k.Specific,e.id,0))}function m(f){h.wasMoved(f)&&(e.disabled||a.value&&t.goToItem(k.Nothing))}return()=>{let{disabled:f}=e,y={active:a.value,disabled:f,close:t.closeMenu},{id:O,...Ee}=e;return T({ourProps:{id:O,ref:u,role:"menuitem",tabIndex:f===!0?void 0:-1,"aria-disabled":f===!0?!0:void 0,disabled:void 0,onClick:i,onFocus:o,onPointerenter:d,onMouseenter:d,onPointermove:v,onMousemove:v,onPointerleave:m,onMouseleave:m},theirProps:{...r,...Ee},slot:y,attrs:r,slots:n,name:"MenuItem"})}}});const vt={class:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},mt={class:"relative flex h-16 items-center justify-between"},ht={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},gt=p("span",{class:"absolute -inset-0.5"},null,-1),bt=p("span",{class:"sr-only"},"Open main menu",-1),xt=p("svg",{class:"block h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})],-1),yt=p("svg",{class:"hidden h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),wt={class:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"},_t={class:"flex flex-shrink-0 items-center"},kt=p("svg",{fill:"#63b81e",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"35px",height:"35px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve",stroke:"#63b81e"},[p("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),p("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),p("g",{id:"SVGRepo_iconCarrier"},[p("g",{id:"2069a460dcf28295e231f3111e042b0b"},[p("path",{display:"inline","fill-rule":"evenodd","clip-rule":"evenodd",d:"M256,0.5C114.894,0.5,0.502,114.887,0.502,256.002 C0.502,397.107,114.894,511.5,256,511.5s255.498-114.393,255.498-255.498C511.498,114.887,397.106,0.5,256,0.5z M271.399,468.875 c-8.014-4.741-17.695-6.841-25.82-11.478c-3.73-2.129-6.454-6.903-10.521-8.604c-4.67-1.963-10.654-1.123-15.295-2.874 c-10.845-4.088-22.057-13.802-30.606-21.038c-2.158-1.829-7.078-4.166-5.734-7.647c17.462,13.989,42.329,15.715,60.244,27.729 c18.085,12.13,34.624,23.637,50.68,36.341C286.178,480.265,279.641,473.749,271.399,468.875z M357.459,424.882 c-10.563-6.204-25.45-10.782-34.424-16.255c-8.7-5.298-18.123-19.092-27.733-21.999c-5.626-1.696-15.532,0.387-21.994-0.952 c-7.572-1.563-17.586-9.489-25.815-14.343c-24.145-14.238-53.57-29.986-77.457-41.119c5.248,13.532,15.308,27.953,25.816,39.206 c5.572,5.968,12.567,13.153,19.125,19.125c19.433,17.694,44.18,29.064,65.982,45.901c-20.289-9.743-52.155-23.291-73.63-37.293 c-12.039-7.852-22.614-11.402-32.516-20.081c-6.383-5.602-12.438-16.044-19.125-22.947c-6.633-6.865-16.218-14.476-23.902-22.002 c-5.964-5.83-18.988-17.736-27.733-17.212c-18.269,1.098-16.991,36.932-10.517,51.636c8.001,18.206,26.922,29.725,43.027,44.949 c16.514,15.615,31.601,30.407,43.989,41.119c-25.134-10.566-40.351-31.052-67.896-39.206c1.979,9.244,14.197,16.351,21.042,23.907 c-6.936-2.887-14.022-7.557-21.042-12.435c-14.105-9.806-28.681-14.001-41.119-26.772c-13.049-13.411-21.924-33.063-30.598-53.553 c-6.092-14.389-20.46-45.798-16.26-66.939c1.231-6.167,8.525-14.047,13.39-21.99c9.498-15.52,17.058-28.847,22.947-47.814 c2.877-9.257,2.699-21.383,6.695-27.732c4.258-6.766,14.813-9.544,21.038-14.343c21.652,14.492,18.451,43.049,30.602,62.153 c4.217,6.632,11.27,8.898,16.256,13.39c9.244,8.33,16.921,20.743,26.776,30.599c9.307,9.307,18.904,19.939,28.686,27.732 c8.338,6.646,19.004,12.588,28.693,21.038c17.94,15.657,34.429,31.509,59.288,40.167c15.49,5.394,38.645,5.768,41.119,22.946 c29.509,15.116,48.359,40.887,87.017,46.858C394.985,454.462,375.183,435.287,357.459,424.882z M439.701,314.911 c-2.836-6.325-6.77-12.542-10.524-19.121c-7.282-12.792-11.146-28.07-21.99-37.302c-18.281,15.819-29.271,37.248-45.901,54.514 c-8.321,8.638-17.412,15.361-26.772,22.951c-9.078,7.348-16.842,17.391-28.689,21.037c13.444-25.454,38.915-40.1,57.374-61.2 c18.88-21.587,26.07-50.525,42.076-76.5c0.503-0.773,1.002-1.555,0.956-2.869c3.677,3.335,8.126,5.896,12.435,8.604 c6.237,14.879,7.572,28.307,14.342,43.988c3.123,7.231,9.86,14.326,14.343,21.994c4.778,8.167,7.036,16.971,10.518,24.859 c6.645,15.054,22.489,27.958,5.738,43.988C448.035,351.884,447.395,332.11,439.701,314.911z"})])])],-1),St={class:"hidden sm:ml-6 sm:block"},It={class:"flex space-x-4"},Et={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},Dt=p("button",{type:"button",class:"relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"},[p("span",{class:"absolute -inset-1.5"}),p("span",{class:"sr-only"},"View notifications"),p("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"})])],-1),Pt=p("span",{class:"absolute -inset-1.5"},null,-1),Mt=p("span",{class:"sr-only"},"Open user menu",-1),Ot=p("img",{class:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""},null,-1),Ct={key:1,class:"hidden sm:ml-6 sm:block"},$t={class:"flex space-x-4"},Tt={class:"space-y-1 px-2 pb-3 pt-2"},Rt=M({__name:"AppHeader",setup(e){const n=Me(),r=x([{name:"Home",href:"/",current:n.path==="/"},{name:"About Us",href:"/about",current:n.path==="/about"},{name:"Contacts",href:"/contacts",current:n.path==="/contacts"}]);Oe(()=>n.path,s=>{r.value.forEach(c=>{c.current=c.href===s})});const l=fe(),{logUserOut:t}=oe(),{authenticated:u}=Ce(oe()),a=()=>{t(),l.push("/login")};return(s,c)=>{const i=J;return I(),G(E(lt),{as:"nav",class:"bg-gray-800"},{default:w(()=>[p("div",vt,[p("div",mt,[p("div",ht,[_(E(ie),{class:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},{default:w(()=>[gt,bt,xt,yt]),_:1})]),p("div",wt,[p("div",_t,[_(i,{to:"/"},{default:w(()=>[kt]),_:1})]),p("div",St,[p("div",It,[(I(!0),D(N,null,q(r.value,o=>(I(),G(i,{key:o.name,to:o.href,class:A([o.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"]),"aria-current":o.current?"page":void 0},{default:w(()=>[F(Y(o.name),1)]),_:2},1032,["to","class","aria-current"]))),128))])])]),p("div",Et,[E(u)?(I(),D(N,{key:0},[Dt,_(E(dt),{as:"div",class:"relative ml-3"},{default:w(()=>[p("div",null,[_(E(ft),{class:"relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"},{default:w(()=>[Pt,Mt,Ot]),_:1})]),_($e,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:w(()=>[_(E(pt),{class:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:w(()=>[_(E(W),null,{default:w(({active:o})=>[p("a",{href:"#",class:A([o?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},"Your Profile",2)]),_:1}),_(E(W),null,{default:w(({active:o})=>[p("a",{href:"#",class:A([o?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},"Settings",2)]),_:1}),_(E(W),null,{default:w(({active:o})=>[p("a",{href:"#",class:A([o?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"]),onClick:a},"Sign out",2)]),_:1})]),_:1})]),_:1})]),_:1})],64)):(I(),D("div",Ct,[p("div",$t,[_(i,{to:"/login",class:"text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"},{default:w(()=>[F(" Login ")]),_:1})])]))])])]),_(E(ot),{class:"sm:hidden"},{default:w(()=>[p("div",Tt,[(I(!0),D(N,null,q(r.value,o=>(I(),G(E(ie),{key:o.name,as:"a",href:o.href,class:A([o.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"]),"aria-current":o.current?"page":void 0},{default:w(()=>[F(Y(o.name),1)]),_:2},1032,["href","class","aria-current"]))),128)),_(i,{to:"/login",class:"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"},{default:w(()=>[F(" Login ")]),_:1})])]),_:1})]),_:1})}}}),At={class:"bg-white shadow"},Ft={class:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"},Nt={class:"text-3xl font-bold tracking-tight text-gray-900"},jt={__name:"BreadCrumb",setup(e){const n=fe(),r=()=>{const u=n.currentRoute.value.fullPath.split("/").filter(Boolean);let a="/";const s=u.map(c=>{const i={text:!c||c===""?"Home":c.charAt(0).toUpperCase()+c.slice(1),to:a+c};return a+=c+"/",i});return s.length===0&&s.push({text:"Home",to:"/"}),s},l=x(r());return $(()=>{l.value=r()}),(t,u)=>{const a=J;return I(),D("header",At,[p("div",Ft,[p("h1",Nt,[p("ul",null,[(I(!0),D(N,null,q(l.value,(s,c)=>(I(),D("li",{key:c},[_(a,{to:s.to,title:s.text,"aria-current":c===l.value.length-1?"page":null},{default:w(()=>[F(Y(s.text),1)]),_:2},1032,["to","title","aria-current"])]))),128))])])])])}}},Lt={},Bt={class:"bg-slate-100"},Ht={class:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},Ut={class:"flex flex-col items-center justify-between sm:flex-row py-4"},Vt=p("svg",{fill:"#63b81e",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"35px",height:"35px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve",stroke:"#63b81e"},[p("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),p("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),p("g",{id:"SVGRepo_iconCarrier"},[p("g",{id:"2069a460dcf28295e231f3111e042b0b"},[p("path",{display:"inline","fill-rule":"evenodd","clip-rule":"evenodd",d:"M256,0.5C114.894,0.5,0.502,114.887,0.502,256.002 C0.502,397.107,114.894,511.5,256,511.5s255.498-114.393,255.498-255.498C511.498,114.887,397.106,0.5,256,0.5z M271.399,468.875 c-8.014-4.741-17.695-6.841-25.82-11.478c-3.73-2.129-6.454-6.903-10.521-8.604c-4.67-1.963-10.654-1.123-15.295-2.874 c-10.845-4.088-22.057-13.802-30.606-21.038c-2.158-1.829-7.078-4.166-5.734-7.647c17.462,13.989,42.329,15.715,60.244,27.729 c18.085,12.13,34.624,23.637,50.68,36.341C286.178,480.265,279.641,473.749,271.399,468.875z M357.459,424.882 c-10.563-6.204-25.45-10.782-34.424-16.255c-8.7-5.298-18.123-19.092-27.733-21.999c-5.626-1.696-15.532,0.387-21.994-0.952 c-7.572-1.563-17.586-9.489-25.815-14.343c-24.145-14.238-53.57-29.986-77.457-41.119c5.248,13.532,15.308,27.953,25.816,39.206 c5.572,5.968,12.567,13.153,19.125,19.125c19.433,17.694,44.18,29.064,65.982,45.901c-20.289-9.743-52.155-23.291-73.63-37.293 c-12.039-7.852-22.614-11.402-32.516-20.081c-6.383-5.602-12.438-16.044-19.125-22.947c-6.633-6.865-16.218-14.476-23.902-22.002 c-5.964-5.83-18.988-17.736-27.733-17.212c-18.269,1.098-16.991,36.932-10.517,51.636c8.001,18.206,26.922,29.725,43.027,44.949 c16.514,15.615,31.601,30.407,43.989,41.119c-25.134-10.566-40.351-31.052-67.896-39.206c1.979,9.244,14.197,16.351,21.042,23.907 c-6.936-2.887-14.022-7.557-21.042-12.435c-14.105-9.806-28.681-14.001-41.119-26.772c-13.049-13.411-21.924-33.063-30.598-53.553 c-6.092-14.389-20.46-45.798-16.26-66.939c1.231-6.167,8.525-14.047,13.39-21.99c9.498-15.52,17.058-28.847,22.947-47.814 c2.877-9.257,2.699-21.383,6.695-27.732c4.258-6.766,14.813-9.544,21.038-14.343c21.652,14.492,18.451,43.049,30.602,62.153 c4.217,6.632,11.27,8.898,16.256,13.39c9.244,8.33,16.921,20.743,26.776,30.599c9.307,9.307,18.904,19.939,28.686,27.732 c8.338,6.646,19.004,12.588,28.693,21.038c17.94,15.657,34.429,31.509,59.288,40.167c15.49,5.394,38.645,5.768,41.119,22.946 c29.509,15.116,48.359,40.887,87.017,46.858C394.985,454.462,375.183,435.287,357.459,424.882z M439.701,314.911 c-2.836-6.325-6.77-12.542-10.524-19.121c-7.282-12.792-11.146-28.07-21.99-37.302c-18.281,15.819-29.271,37.248-45.901,54.514 c-8.321,8.638-17.412,15.361-26.772,22.951c-9.078,7.348-16.842,17.391-28.689,21.037c13.444-25.454,38.915-40.1,57.374-61.2 c18.88-21.587,26.07-50.525,42.076-76.5c0.503-0.773,1.002-1.555,0.956-2.869c3.677,3.335,8.126,5.896,12.435,8.604 c6.237,14.879,7.572,28.307,14.342,43.988c3.123,7.231,9.86,14.326,14.343,21.994c4.778,8.167,7.036,16.971,10.518,24.859 c6.645,15.054,22.489,27.958,5.738,43.988C448.035,351.884,447.395,332.11,439.701,314.911z"})])])],-1),Kt=p("p",{class:"mt-4 text-sm text-gray-500 sm:mt-0 dark:text-black-300"}," © Copyright 2023. All Rights Reserved. ",-1);function Gt(e,n){const r=J;return I(),D("footer",Bt,[p("div",Ht,[p("div",Ut,[_(r,{to:"/"},{default:w(()=>[Vt]),_:1}),Kt])])])}const zt=pe(Lt,[["render",Gt]]),Wt={},qt={class:"flex flex-col h-screen justify-between"},Yt={class:"mb-auto mainContent"},Qt={class:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"};function Xt(e,n){const r=Rt,l=jt,t=zt;return I(),D("div",qt,[_(r),_(l),p("div",Yt,[p("div",Qt,[Te(e.$slots,"default")])]),_(t)])}const nn=pe(Wt,[["render",Xt]]);export{nn as default};

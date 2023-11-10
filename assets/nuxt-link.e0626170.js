import{F as _,f as S,h as y,M as q,v as b,l as R,a2 as k,a3 as A,s as N,a4 as T,i as x,a5 as B,P as E,a6 as L,a7 as w,a8 as I,U as C,X as U}from"./entry.46ad5b36.js";async function P(t,r=_()){const{path:c,matched:e}=r.resolve(t);if(!e.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(c)))return;const l=r._preloadPromises=r._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>P(t,r));r._routePreloaded.add(c);const i=e.map(a=>{var s;return(s=a.components)==null?void 0:s.default}).filter(a=>typeof a=="function");for(const a of i){const s=Promise.resolve(a()).catch(()=>{}).finally(()=>l.splice(l.indexOf(s)));l.push(s)}await Promise.all(l)}const O=(...t)=>t.find(r=>r!==void 0),V="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function j(t){const r=t.componentName||"NuxtLink",c=(e,l)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const i=t.trailingSlash==="append"?w:I;if(typeof e=="string")return i(e,!0);const a="path"in e?e.path:l(e).path;return{...e,name:void 0,path:i(a,!0)}};return S({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const i=_(),a=y(()=>{const n=e.to||e.href||"";return c(n,i.resolve)}),s=y(()=>e.external||e.target&&e.target!=="_self"?!0:typeof a.value=="object"?!1:a.value===""||q(a.value,{acceptRelative:!0})),v=b(!1),f=b(null),p=n=>{var d;f.value=e.custom?(d=n==null?void 0:n.$el)==null?void 0:d.nextElementSibling:n==null?void 0:n.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!M()){const d=C();let h,o=null;R(()=>{const g=F();k(()=>{h=A(()=>{var m;(m=f==null?void 0:f.value)!=null&&m.tagName&&(o=g.observe(f.value,async()=>{o==null||o(),o=null;const u=typeof a.value=="string"?a.value:i.resolve(a.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",u).catch(()=>{}),!s.value&&P(a.value,i).catch(()=>{})]),v.value=!0}))})})}),N(()=>{h&&T(h),o==null||o(),o=null})}return()=>{var g,m;if(!s.value){const u={ref:p,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(v.value&&(u.class=e.prefetchedClass||t.prefetchedClass),u.rel=e.rel),x(B("RouterLink"),u,l.default)}const n=typeof a.value=="object"?((g=i.resolve(a.value))==null?void 0:g.href)??null:a.value||null,d=e.target||null,h=e.noRel?null:O(e.rel,t.externalRelAttribute,n?V:"")||null,o=()=>U(n,{replace:e.replace});return e.custom?l.default?l.default({href:n,navigate:o,get route(){if(!n)return;const u=E(n);return{path:u.pathname,fullPath:u.pathname,get query(){return L(u.search)},hash:u.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:n}},rel:h,target:d,isExternal:s.value,isActive:!1,isExactActive:!1}):null:x("a",{ref:f,href:n,rel:h,target:d},(m=l.default)==null?void 0:m.call(l))}}})}const D=j({componentName:"NuxtLink"});function F(){const t=C();if(t._observer)return t._observer;let r=null;const c=new Map,e=(i,a)=>(r||(r=new IntersectionObserver(s=>{for(const v of s){const f=c.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&f&&f()}})),c.set(i,a),r.observe(i),()=>{c.delete(i),r.unobserve(i),c.size===0&&(r.disconnect(),r=null)});return t._observer={observe:e}}function M(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{D as _};

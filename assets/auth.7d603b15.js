import{I as i,E as r,J as u}from"./entry.1051b4bd.js";import{u as s,a as t}from"./auth.fd0c7679.js";const f=i(e=>{const{authenticated:n}=r(s()),a=t("token");if(a.value&&(n.value=!0),a.value&&(e==null?void 0:e.name)==="login")return u("/");if(!a.value&&(e==null?void 0:e.name)!=="login")return u("/login")});export{f as default};

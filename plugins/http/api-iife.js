if("__TAURI__"in window){var __TAURI_PLUGIN_HTTP__=function(e){"use strict";async function t(e,t={},r){return window.__TAURI_INTERNALS__.invoke(e,t,r)}"function"==typeof SuppressedError&&SuppressedError;const r="Request canceled";return e.fetch=async function(e,n){const a=n?.signal;if(a?.aborted)throw new Error(r);const i=n?.maxRedirections,o=n?.connectTimeout,s=n?.proxy,d=n?.danger,c=n?.clientCert,u=n?.clientKey;n&&(delete n.maxRedirections,delete n.connectTimeout,delete n.proxy,delete n.danger,delete n.clientCert,delete n.clientKey);const l=n?.headers?n.headers instanceof Headers?n.headers:new Headers(n.headers):new Headers,f=new Request(e,n),_=await f.arrayBuffer(),h=0!==_.byteLength?Array.from(new Uint8Array(_)):null;for(const[e,t]of f.headers)l.get(e)||l.set(e,t);const y=(l instanceof Headers?Array.from(l.entries()):Array.isArray(l)?l:Object.entries(l)).map((([e,t])=>[e,"string"==typeof t?t:t.toString()]));if(a?.aborted)throw new Error(r);const p=await t("plugin:http|fetch",{clientConfig:{method:f.method,url:f.url,headers:y,data:h,maxRedirections:i,connectTimeout:o,proxy:s,danger:d,clientCert:c,clientKey:u}}),w=()=>t("plugin:http|fetch_cancel",{rid:p});if(a?.aborted)throw w(),new Error(r);a?.addEventListener("abort",(()=>{w()}));const{status:g,statusText:T,url:A,headers:R,rid:b}=await t("plugin:http|fetch_send",{rid:p}),m=await t("plugin:http|fetch_read_body",{rid:b}),U=new Response(m instanceof ArrayBuffer&&0!==m.byteLength?m:m instanceof Array&&m.length>0?new Uint8Array(m):null,{status:g,statusText:T});return Object.defineProperty(U,"url",{value:A}),Object.defineProperty(U,"headers",{value:new Headers(R)}),U},e}({});Object.defineProperty(window.__TAURI__,"http",{value:__TAURI_PLUGIN_HTTP__})}

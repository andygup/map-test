import{dK as P,dL as N,dM as x,dN as v,dO as S,dP as b,dQ as R,dR as A,dS as U,dT as O,s as K,dU as $,K as F,V,dV as J,R as z,dW as C}from"./index-CC72Q5ax.js";import{i as H}from"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import{p as y}from"./resourceExtension-BD0_wZpo.js";function B(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=L(e,t,n);for(const c of o){const i=P(t,c,n);for(const r in s)i[r]=s[r]}}}function L(e,o,t){if((e==null?void 0:e.type)==="resource")return M(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=C;return{read:n,write:s}}}}function M(e,o,t){const n=N(o,t);return{type:String,read:(s,c,i)=>{const r=x(s,c,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,c,i,r){if(!(r!=null&&r.resources))return typeof s=="string"?void(c[i]=v(s,r)):void(c[i]=s.write({},r));const a=W(s),d=v(a,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},S.NO),l=n.type!==String&&(!H(this)||(r==null?void 0:r.origin)&&this.originIdOf(t)>b(r.origin)),p={object:this,propertyName:t,value:s,targetUrl:d,dest:c,targetPropertyName:i,context:r,params:e};r!=null&&r.portalItem&&d&&!R(d)?l&&(e!=null&&e.contentAddressed)?g(p):l?Q(p):T(p):r!=null&&r.portalItem&&(d==null||A(d)!=null||U(d)||l)?g(p):c[i]=d}}}}function g(e){var h;const{targetUrl:o,params:t,value:n,context:s,dest:c,targetPropertyName:i}=e;if(!s.portalItem)return;const r=O(o),a=I(n,o,s);if(t!=null&&t.contentAddressed&&a.type!=="json")return void((h=s.messages)==null?void 0:h.push(new K("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${a.type} with content addressing. Content addressing is only supported for json resources.`,{content:a})));const d=t!=null&&t.contentAddressed&&a.type==="json"?$(a.jsonString):(r==null?void 0:r.filename)??F(),l=V((t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),d),p=`${l}.${y(a)}`;if(t!=null&&t.contentAddressed&&s.resources&&a.type==="json"){const m=s.resources.toKeep.find(({resource:f})=>f.path===p)??s.resources.toAdd.find(({resource:f})=>f.path===p);if(m)return void(c[i]=m.resource.itemRelativeUrl)}const u=s.portalItem.resourceFromPath(p);U(o)&&s.resources&&s.resources.pendingOperations.push(J(o).then(m=>{u.path=`${l}.${y({type:"blob",blob:m})}`,c[i]=u.itemRelativeUrl}).catch(()=>{}));const j=(t==null?void 0:t.compress)??!1;s.resources&&w({...e,resource:u,content:a,compress:j,updates:s.resources.toAdd}),c[i]=u.itemRelativeUrl}function Q(e){const{context:o,targetUrl:t,params:n,value:s,dest:c,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),a=I(s,t,o),d=y(a),l=z(r.path),p=(n==null?void 0:n.compress)??!1;d===l?(o.resources&&w({...e,resource:r,content:a,compress:p,updates:o.resources.toUpdate}),c[i]=t):g(e)}function T({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function w({object:e,propertyName:o,updates:t,resource:n,content:s,compress:c}){const i=r=>{Y(e,o,r)};t.push({resource:n,content:s,compress:c,finish:i})}function I(e,o,t){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(t))}}function W(e){return e==null?null:typeof e=="string"?e:e.url}function Y(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{B as j};

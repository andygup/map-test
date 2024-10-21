import{hE as S,bg as O,f as v,et as x,dx as C,hF as F,hG as k,cm as R}from"./index-C5AN6gIb.js";import{t as A,n as w}from"./vec3f32-nZdmKIgz.js";import{a as U,b as B,d as J}from"./PointCloudUniqueValueRenderer-DYRB2ru4.js";import{w as N,l as V,c as T,I as q}from"./I3SBinaryReader-Cwxfyz08.js";function E(l,t,a,n){const{rendererJSON:i,isRGBRenderer:d}=l;let o=null,s=null;if(t&&d)o=t;else if(t&&(i==null?void 0:i.type)==="pointCloudUniqueValueRenderer"){s=U.fromJSON(i);const e=s.colorUniqueValueInfos;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const u=(c?c(t[r]):t[r])+"";for(let f=0;f<e.length;f++)if(e[f].values.includes(u)){o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;break}}}else if(t&&(i==null?void 0:i.type)==="pointCloudStretchRenderer"){s=B.fromJSON(i);const e=s.stops;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const u=c?c(t[r]):t[r],f=e.length-1;if(u<e[0].value)o[3*r]=e[0].color.r,o[3*r+1]=e[0].color.g,o[3*r+2]=e[0].color.b;else if(u>=e[f].value)o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;else for(let b=1;b<e.length;b++)if(u<e[b].value){const p=(u-e[b-1].value)/(e[b].value-e[b-1].value);o[3*r]=e[b].color.r*p+e[b-1].color.r*(1-p),o[3*r+1]=e[b].color.g*p+e[b-1].color.g*(1-p),o[3*r+2]=e[b].color.b*p+e[b-1].color.b*(1-p);break}}}else if(t&&(i==null?void 0:i.type)==="pointCloudClassBreaksRenderer"){s=J.fromJSON(i);const e=s.colorClassBreakInfos;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const u=c?c(t[r]):t[r];for(let f=0;f<e.length;f++)if(u>=e[f].minValue&&u<=e[f].maxValue){o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;break}}}else o=new Uint8Array(3*n).fill(255);if(a&&(s!=null&&s.colorModulation)){const e=s.colorModulation.minValue,c=s.colorModulation.maxValue,r=.3;for(let u=0;u<n;u++){const f=a[u],b=f>=c?1:f<=e?r:r+(1-r)*(f-e)/(c-e);o[3*u]=b*o[3*u],o[3*u+1]=b*o[3*u+1],o[3*u+2]=b*o[3*u+2]}}return o}function z(l,t){if(l.encoding==null||l.encoding===""){const a=N(t,l);if(a.vertexAttributes.position==null)return;const n=V(t,a.vertexAttributes.position),i=a.header.fields,d=[i.offsetX,i.offsetY,i.offsetZ],o=[i.scaleX,i.scaleY,i.scaleZ],s=n.length/3,e=new Float64Array(3*s);for(let c=0;c<s;c++)e[3*c]=n[3*c]*o[0]+d[0],e[3*c+1]=n[3*c+1]*o[1]+d[1],e[3*c+2]=n[3*c+2]*o[2]+d[2];return e}if(l.encoding==="lepcc-xyz")return T(t).result}function h(l,t,a){return l!=null&&l.attributeInfo.useElevation?t?G(t,a):null:l!=null&&l.attributeInfo.storageInfo?q(l.attributeInfo.storageInfo,l.buffer,a):null}function G(l,t){const a=new Float64Array(t);for(let n=0;n<t;n++)a[n]=l[3*n+2];return a}function X(l,t,a,n,i){const d=l.length/3;let o=0;for(let s=0;s<d;s++){let e=!0;for(let c=0;c<n.length&&e;c++){const{filterJSON:r}=n[c],u=i[c].values[s];switch(r.type){case"pointCloudValueFilter":{const f=r.mode==="exclude";r.values.includes(u)===f&&(e=!1);break}case"pointCloudBitfieldFilter":{const f=$(r.requiredSetBits),b=$(r.requiredClearBits);((u&f)!==f||u&b)&&(e=!1);break}case"pointCloudReturnFilter":{const f=15&u,b=u>>>4&15,p=b>1,D=f===1,I=f===b;let y=!1;for(const m of r.includedReturns)if(m==="last"&&I||m==="firstOfMany"&&D&&p||m==="lastOfMany"&&I&&p||m==="single"&&!p){y=!0;break}y||(e=!1);break}}}e&&(a[o]=s,l[3*o]=l[3*s],l[3*o+1]=l[3*s+1],l[3*o+2]=l[3*s+2],t[3*o]=t[3*s],t[3*o+1]=t[3*s+1],t[3*o+2]=t[3*s+2],o++)}return o}function g(l){switch(l){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function $(l){let t=0;for(const a of l||[])t|=1<<a;return t}class Y{transform(t){const a=this._transform(t),n=[a.points.buffer,a.rgb.buffer];a.pointIdFilterMap!=null&&n.push(a.pointIdFilterMap.buffer);for(const i of a.attributes)"buffer"in i.values&&S(i.values.buffer)&&i.values.buffer!==a.rgb.buffer&&n.push(i.values.buffer);return Promise.resolve({result:a,transferList:n})}_transform(t){const a=z(t.schema,t.geometryBuffer);let n=a.length/3,i=null;const d=new Array,o=h(t.primaryAttributeData,a,n);t.primaryAttributeData!=null&&o&&d.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:o});const s=h(t.modulationAttributeData,a,n);t.modulationAttributeData!=null&&s&&d.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:s});let e=E(t.rendererInfo,o,s,n);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const r=t.filterAttributesData.filter(O).map(u=>{const f=h(u,a,n),b={attributeInfo:u.attributeInfo,values:f};return d.push(b),b});i=new Uint32Array(n),n=X(a,e,i,t.filterInfo,r)}for(const r of t.userAttributesData){const u=h(r,a,n);d.push({attributeInfo:r.attributeInfo,values:u})}3*n<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*n))),_(a,n,t.elevationOffset);const c=Z(a,n,x.fromData(t.obbData),v.fromJSON(t.inSR),v.fromJSON(t.outSR));return{obbData:t.obbData,points:c,rgb:e,attributes:d,pointIdFilterMap:i}}}function Z(l,t,a,n,i){if(!C(l,n,0,l,i,0,t))throw new Error("Can't reproject");const d=A(a.center),o=w(),s=w(),e=A(a.halfSize);F(M,a.quaternion);const c=new Float32Array(3*t);for(let r=0;r<t;r++){let u=3*r;o[0]=l[u]-d[0],o[1]=l[u+1]-d[1],o[2]=l[u+2]-d[2],k(s,o,M),e[0]=Math.max(e[0],Math.abs(s[0])),e[1]=Math.max(e[1],Math.abs(s[1])),e[2]=Math.max(e[2],Math.abs(s[2])),c[u++]=o[0],c[u++]=o[1],c[u]=o[2]}return a.halfSize=e,c}function _(l,t,a){if(a!==0)for(let n=0;n<t;n++)l[3*n+2]+=a}const M=R();function K(){return new Y}export{K as default};

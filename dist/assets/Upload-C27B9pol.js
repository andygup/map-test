import{b1 as g,b2 as m,M as u,s as v,aU as b,b3 as _,X as l,Y as n,a3 as w,b4 as T,b5 as R,b6 as k,b7 as x,b8 as F,b9 as S}from"./index-C-FXvluM.js";import{i as E,e as P,h as j}from"./progressUtils-DP8A_uOL.js";let i=class extends g{constructor(){super({}),this.files=[],this.progress=0,this._uploadTask=null,this._layer=null}destroy(){this.cancel(),this.files=[],this._layer=null,this._uploadTask=null}get state(){const e=this._uploadTask;return e&&this.files.length!==0?e.finished?e.error?"error":"success":"pending":"default"}get result(){var e;return((e=this._uploadTask)==null?void 0:e.value)??null}get error(){var e;return((e=this._uploadTask)==null?void 0:e.error)??null}uploadTo(e){this.cancel(),this.files=[],this._layer=e,this._uploadTask=m(async s=>{var f;const o=await z(e);u(s),this.progress=0,this.files=o;const t=E(P.upload,d=>{this.progress=d},"Upload.uploadTo");if(o.length===0)return null;u(s);const r=await e.extractAndFilterFiles(o);u(s),r.length>0&&(this.files=r);const a=await e.convertMesh(r,{signal:s,onProgress:t.makeOnProgress("createFromFiles")});if(u(s),!a)throw new v("editor:upload","could not upload or convert model");const p=r.reduce((d,y)=>d+y.size,0),h=t.simulate("loadMesh",j(p));try{await a.load()}finally{h.remove()}if(b("enable-feature:georeferenced-uploads")&&a.metadata.georeferenced){if(await _(e.spatialReference,(f=a.origin)==null?void 0:f.spatialReference))return{type:"georeferenced",mesh:a};if((e.spatialReference.isWebMercator||e.spatialReference.isWGS84)&&await M(a,e.spatialReference))return{type:"georeferenced-reprojected",mesh:a}}return a.spatialReference=e.spatialReference,a.vertexSpace.origin=[0,0,0],{type:"non-georeferenced",mesh:a}})}retry(){this._layer&&this.uploadTo(this._layer)}cancel(){var e;(e=this._uploadTask)==null||e.abort()}};l([n()],i.prototype,"files",void 0),l([n()],i.prototype,"progress",void 0),l([n()],i.prototype,"state",null),l([n()],i.prototype,"result",null),l([n()],i.prototype,"error",null),l([n()],i.prototype,"_uploadTask",void 0),l([n()],i.prototype,"_layer",void 0),i=l([w("esri.widgets.Editor.Upload")],i);let c=null;async function z(e){const{resolve:s,promise:o}=T(),t=document.createElement("input");t.type="file",t.multiple=!1,t.accept=[...R(e.infoFor3D),".zip"].join(","),t.style.display="none",document.body.appendChild(t);const r=k(t,"change",()=>s(t.files?Array.from(t.files):[]));return c?c(t):t.click(),o.finally(()=>{r.remove(),t.remove()})}function D(e,s){c=o=>{s==null||s(),Promise.resolve().then(()=>e).then(t=>{if(!c)return;const r=new DataTransfer;t.forEach(a=>r.items.add(a)),o.files=r.files,o.dispatchEvent(new Event("change"))})}}function G(){c=null}async function M(e,s){if(await x(e.spatialReference,s),!e.vertexSpace.origin)return!1;const[o,t,r]=e.vertexSpace.origin,a=new F({x:o,y:t,z:r,spatialReference:e.spatialReference}),p=S(a,s);return!!p&&(e.vertexSpace.origin=[p.x,p.y,p.z??0],e.spatialReference=s,!0)}export{i as Upload,G as clearPromptForFilesStub,D as stubFilePickerToSelect};
import{aE as o,aF as l,hd as d,aL as m,aM as y,aP as p,aR as h,aQ as N,D as C}from"./index-C5AN6gIb.js";let t=class extends y{constructor(r){super(r),this.namedTraceConfigurations=[]}};o([l({type:[d],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],t.prototype,"namedTraceConfigurations",void 0),t=o([m("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],t);const $=t;async function O(r,a,i){const e=p(r),s=a.toJSON();a.globalIds&&a.globalIds.length>0&&(s.globalIds=JSON.stringify(a.globalIds)),a.creators&&a.creators.length>0&&(s.creators=JSON.stringify(a.creators)),a.tags&&a.tags.length>0&&(s.tags=JSON.stringify(a.tags)),a.names&&a.names.length>0&&(s.names=JSON.stringify(a.names));const n={...s,f:"json"},g=h({...e.query,...n}),c=N(g,{...i,method:"post"}),u=`${e.path}/traceConfigurations/query`,{data:f}=await C(u,c);return $.fromJSON(f)}export{O as queryNamedTraceConfigurations};

import{X as i,Y as m,a3 as y,a4 as d,a7 as f,a9 as g,a8 as v,U as $,gE as w,ak as j,Z as S}from"./index-C-FXvluM.js";import{d as k}from"./Association-B52OFC3Z.js";let n=class extends d{constructor(s){super(s),this.associations=[]}};i([m({type:[k],json:{write:!0}})],n.prototype,"associations",void 0),n=i([y("esri.rest.networks.support.QueryAssociationsResult")],n);const I=n;function J(e){const{returnDeletes:s,elements:r,gdbVersion:o,moment:a}=e.toJSON();return{returnDeletes:s,elements:JSON.stringify(r.map(t=>({globalId:t.globalId,networkSourceId:t.networkSourceId,terminalId:t.terminalId}))),types:JSON.stringify(e.types.map(t=>S.toJSON(t))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:o,moment:a}}async function N(e,s,r){const o=f(e),a={...J(s),f:"json"},t=g({...o.query,...a}),c=v(t,{...r,method:"post"}),p=`${o.path}/associations/query`,{data:u}=await $(p,c),l=I.fromJSON(u);return s.types.includes("connectivity")&&w(j.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),l}export{N as queryAssociations};
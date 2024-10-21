import{u as a}from"./workerHelper-Dj2GLcWc.js";import{f as l,u as c,p as u,E as p,d,m as f}from"./edgeProcessing-Bd6CVQt5.js";import"./InterleavedLayout-Bq7Nk9sY.js";import"./BufferView-CNNe45YH.js";import"./index-C5AN6gIb.js";import"./types-D0PSWh4d.js";import"./Util-DZ-J3OpH.js";import"./deduplicate-Bon-NhLh.js";import"./Indices-BRKmhTP5.js";import"./glUtil-C6KhMg1m.js";import"./enums-BlUEVwJR.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Normals-BE87b4Vz.js";class S{async extract(t){const e=o(t),s=l(e),n=[e.data.buffer];return{result:g(s,n),transferList:n}}async extractComponentsEdgeLocations(t){const e=o(t),s=c(e.data,e.skipDeduplicate,e.indices,e.indicesLength),n=u(s,D),r=[];return{result:a(n.regular.instancesData,r),transferList:r}}async extractEdgeLocations(t){const e=o(t),s=c(e.data,e.skipDeduplicate,e.indices,e.indicesLength),n=u(s,L),r=[];return{result:a(n.regular.instancesData,r),transferList:r}}}function o(i){return{data:p.createView(i.dataBuffer),indices:i.indicesType==="Uint32Array"?new Uint32Array(i.indices):i.indicesType==="Uint16Array"?new Uint16Array(i.indices):i.indices,indicesLength:i.indicesLength,writerSettings:i.writerSettings,skipDeduplicate:i.skipDeduplicate}}function g(i,t){return t.push(i.regular.lodInfo.lengths.buffer),t.push(i.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(i.regular.instancesData,t),lodInfo:{lengths:i.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(i.silhouette.instancesData,t),lodInfo:{lengths:i.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:i.averageEdgeLength}}class m{allocate(t){return d.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,s){t.position0.setVec(e,s.position0),t.position1.setVec(e,s.position1)}}class h{allocate(t){return f.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,s){t.position0.setVec(e,s.position0),t.position1.setVec(e,s.position1),t.componentIndex.set(e,s.componentIndex)}}const L=new m,D=new h;export{S as default};

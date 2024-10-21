import{bm as u,c5 as p,K as l,c6 as s}from"./index-C5AN6gIb.js";import{a as f,i as d}from"./MeshLocalVertexSpace-CTAY8X8I.js";function a(){return l.getLogger("esri.geometry.Mesh")}function w(e){return!t(e)}function t(e){return e.origin!=null}function y(e){return t(e.vertexSpace)}function S(e,r){if(!t(e))return null;const[i,o,n]=e.origin;return new u({x:i,y:o,z:n,spatialReference:r})}function $(e,r){const{x:i,y:o,z:n,spatialReference:g}=e,c=[i,o,n??0];return(r==null?void 0:r.geographic)!==void 0&&(p(a(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),r.vertexSpace&&a().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),((r==null?void 0:r.vertexSpace)??m(r==null?void 0:r.geographic)??v(g))==="local"?new f({origin:c}):new d({origin:c})}function v(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function m(e){return e==null?void 0:e?"local":"georeferenced"}function b(e,r){return e.type===r.type&&(e.origin===r.origin||e.origin!=null&&r.origin!=null&&s(e.origin,r.origin))}export{t as a,y as g,b as m,w as p,$ as s,S as u};

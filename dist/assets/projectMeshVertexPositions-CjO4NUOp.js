import{n as i,fB as n}from"./index-C-FXvluM.js";import{b as s}from"./MeshLocalVertexSpace-cD48CuiV.js";import{B as p}from"./vertexSpaceConversion-B-Meq4J1.js";import"./meshVertexSpaceUtils-6Oit8r3Z.js";import"./vec3-Ba3sX4Tq.js";import"./BufferView-Dk0MoByh.js";import"./vec4-BXZ1pugf.js";function h(t,e){const o=p(t,s.absolute);if(!o)return null;let r=o.position;return i(t.spatialReference,e)||(r=new Float64Array(o.position.length),n(o.position,t.spatialReference,0,r,e,0))?r:null}export{h as projectMeshVertexPositions};

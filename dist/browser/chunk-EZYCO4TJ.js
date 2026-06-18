import{D as _,E as c}from"./chunk-OTPLH2CI.js";var S=()=>_.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder"),h=class{constructor(){this._includedModules=new Map}include(e,n){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,n),e(this.builder,n))}},v=class extends h{constructor(){super(...arguments),this.vertex=new m,this.fragment=new m,this.attributes=new b,this.varyings=new f,this.outputs=new F}get attributeNames(){return this.attributes.names}get builder(){return this}generate(e,n=!1){let t=this.attributes.generateSource(e),i=this.varyings.generateSource(e),s=e==="vertex"?this.vertex:this.fragment,a=s.uniforms.generateSource(),o=s.code.generateSource(),u=s.main.generateSource(n),T=this.debugName?`// ${this.debugName}
`:"",w=e==="vertex"?D:E,y=s.constants.generateSource(),A=this.outputs.generateSource(e);return`#version 300 es
${T}
${w}
${y.join(`
`)}
${a.join(`
`)}
${t.join(`
`)}
${i.join(`
`)}
${A.join(`
`)}
${o.join(`
`)}
${u.join(`
`)}`}generateBind(e){let n=new Map;this.vertex.uniforms.entries.forEach(s=>{let a=s.bind[0];a&&n.set(s.name,a)}),this.fragment.uniforms.entries.forEach(s=>{let a=s.bind[0];a&&n.set(s.name,a)});let t=Array.from(n.values()),i=t.length;return s=>{for(let a=0;a<i;++a)t[a](e,s)}}generateBindPass(e){let n=new Map;this.vertex.uniforms.entries.forEach(s=>{let a=s.bind[1];a&&n.set(s.name,a)}),this.fragment.uniforms.entries.forEach(s=>{let a=s.bind[1];a&&n.set(s.name,a)});let t=Array.from(n.values()),i=t.length;return(s,a)=>{for(let o=0;o<i;++o)t[o](e,s,a)}}generateBindDraw(e){let n=new Map;this.vertex.uniforms.entries.forEach(s=>{let a=s.bind[2];a&&n.set(s.name,a)}),this.fragment.uniforms.entries.forEach(s=>{let a=s.bind[2];a&&n.set(s.name,a)});let t=Array.from(n.values()),i=t.length;return(s,a,o)=>{for(let u=0;u<i;++u)t[u](e,o,s,a)}}},l=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(let n of e)this._add(n);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new c("shaderbuilder:duplicate-uniform",`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else S().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(({name:e,arraySize:n,type:t})=>n!=null?`uniform ${t} ${e}[${n}];`:`uniform ${t} ${e};`)}get entries(){return Array.from(this._entries.values())}},d=class{constructor(){this._entries=new Map}add(e,n){if(this._entries.has(e))throw new c("shaderbuilder:duplicate-input",`Duplicate input for ${e}`);this._entries.set(e,n)}get(e){let n=this._entries.get(e);if(n==null)throw new c("shaderbuilder:input-resolver-error",`No resolver for input ${e} found.`);return n()}},p=class{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(e){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];if(e)throw new c("shaderbuilder:missing-main","Shader does not contain main function body.");return[]}},g=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},m=class extends h{constructor(){super(...arguments),this.uniforms=new l(this),this.main=new p(this),this.code=new g(this),this.constants=new $(this),this.inputs=new d}get builder(){return this}},b=class{constructor(){this._entries=new Array}add(e,n){this._entries.push([e,n])}generateSource(e){return e==="fragment"?[]:this._entries.map(n=>`in ${n[1]} ${n[0]};`)}get names(){return this._entries.map(([e])=>e)}},f=class{constructor(){this._entries=new Map}add(e,n,t){this._entries.has(e)?S().warn(`Ignoring duplicate varying ${n} ${e}`):this._entries.set(e,{type:n,invariant:t?.invariant??!1})}generateSource(e){let n=new Array;return this._entries.forEach((t,i)=>n.push((t.invariant&&e==="vertex"?"invariant ":"")+(t.type==="int"?"flat ":"")+(e==="vertex"?"out":"in")+` ${t.type} ${i};`)),n}},F=(()=>{class r{constructor(){this._entries=new Map}add(n,t,i=0){let s=this._entries.get(i);s?.name!==n||s?.type!==t?this._entries.set(i,{name:n,type:t}):S().warn(`Fragment shader output location ${i} occupied`)}static{this.DEFAULT_TYPE="vec4"}static{this.DEFAULT_NAME="fragColor"}generateSource(n){if(n==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:r.DEFAULT_NAME,type:r.DEFAULT_TYPE});let t=new Array;return this._entries.forEach((i,s)=>t.push(`layout(location = ${s}) out ${i.type} ${i.name};`)),t}}return r})(),$=class r{constructor(e){this._stage=e,this._entries=new Set}add(e,n,t){let i="ERROR_CONSTRUCTOR_STRING";switch(n){case"float":i=r._numberToFloatStr(t);break;case"int":i=r._numberToIntStr(t);break;case"uint":i=r._numberToUintStr(t);break;case"bool":i=t.toString();break;case"vec2":i=`vec2(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])})`;break;case"vec3":i=`vec3(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])})`;break;case"vec4":i=`vec4(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])},                            ${r._numberToFloatStr(t[3])})`;break;case"ivec2":i=`ivec2(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])})`;break;case"ivec3":i=`ivec3(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])})`;break;case"ivec4":i=`ivec4(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])},                             ${r._numberToIntStr(t[3])})`;break;case"uvec2":i=`uvec2(${r._numberToUintStr(t[0])},                             ${r._numberToUintStr(t[1])})`;break;case"uvec3":i=`uvec3(${r._numberToUintStr(t[0])},                             ${r._numberToUintStr(t[1])},                             ${r._numberToUintStr(t[2])})`;break;case"uvec4":i=`uvec4(${r._numberToUintStr(t[0])},                             ${r._numberToUintStr(t[1])},                             ${r._numberToUintStr(t[2])},                             ${r._numberToUintStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${n}(${Array.prototype.map.call(t,s=>r._numberToFloatStr(s)).join(", ")})`}return this._entries.add(`const ${n} ${e} = ${i};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToUintStr(e){return`${e.toFixed(0)}u`}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}},E=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp int;
  precision highp sampler2D;
  precision highp usampler2D;
  precision highp sampler2DArray;
  precision highp sampler2DShadow;
#else
  precision mediump float;
  precision mediump int;
  precision mediump sampler2D;
  precision mediump usampler2D;
  precision mediump sampler2DArray;
  precision mediump sampler2DShadow;
#endif`,D=`precision highp float;
 precision highp int;
 precision highp sampler2D;
 precision highp usampler2D;
 precision highp sampler2DArray;
 precision highp sampler2DShadow;


 invariant gl_Position;
 `;export{v as a};

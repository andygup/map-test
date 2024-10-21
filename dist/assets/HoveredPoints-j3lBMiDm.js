import{X as l,Y as c,a3 as p,b1 as v,bO as m,cv as P,ek as b,el as x,em as y}from"./index-CC72Q5ax.js";let d=class extends v{constructor(e){super(e),this._hoveredPoints=new m}initialize(){this.addHandles(P(()=>this._hoveredPoints.toArray().map(({anchor:e,element:o})=>({screenLocation:e.screenLocation,element:o})),e=>{for(const{screenLocation:o,element:t}of e)o&&(t.style.transform=`translate(${o.x}px, ${o.y}px)`)},b))}destroy(){this._hoveredPoints.drain(e=>this._destroyHoveredPoint(e))}update(e){var n;const o=this.view,t=this._hoveredPoints,s=e.length;for(;this._hoveredPoints.length>s;)this._destroyHoveredPoint(this._hoveredPoints.pop());for(;this._hoveredPoints.length<s;){const i=this._makeHoveredPoint();t.push(i),(n=o.surface)==null||n.appendChild(i.element)}for(let i=0;i<s;++i){const h=t.at(s-1-i),a=e[i];this._updateHoveredPoint(h,a)}}_makeHoveredPoint(){const{size:e,borderStyle:o,borderColor:t,borderWidth:s,boxShadow:n}=y().hoveredPointsStyle,i=this.view,h=new x({view:i,screenLocationEnabled:!0}),a=document.createElement("div"),r=a.style;return r.position="absolute",r.top="0",r.left="0",r.contain="strict",r.boxSizing="border-box",r.width=`${e}px`,r.height=`${e}px`,r.marginTop=`-${e/2}px`,r.marginLeft=`-${e/2}px`,r.border=`${o} ${s}px ${t}`,r.borderRadius=`${e}px`,r.boxShadow=n,{anchor:h,element:a}}_updateHoveredPoint({anchor:e,element:o},t){e.screenLocationEnabled=!0,e.location=t.hoveredPoint;const s=o.style;s.display="block",s.background=t.color.toCss()}_destroyHoveredPoint({anchor:e,element:o}){var t;e.destroy(),(t=this.view.surface)==null||t.removeChild(o)}};l([c()],d.prototype,"view",void 0),l([c()],d.prototype,"_hoveredPoints",void 0),d=l([p("esri.widgets.ElevationProfile.support.HoveredPoints")],d);export{d as a};

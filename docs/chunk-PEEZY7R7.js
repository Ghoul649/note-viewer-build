import{$a as q,Aa as H,Bb as x,Cb as U,E as W,Ea as a,Fa as l,Ga as k,H as F,Ha as X,Ia as B,Ja as V,La as h,Ma as _,N as w,Na as L,Oa as A,Qa as j,Ra as N,Sa as R,T as p,Ta as K,U as m,Ua as C,Wa as Q,Ya as G,Za as Z,_a as $,ab as y,c as I,ga as d,ha as g,i as Y,qb as O,sb as z,ta as v,xa as f,y as D,ya as b,yb as J,za as T}from"./chunk-PDX7JBNS.js";var u=(()=>{let i=class i{get zoomY(){return this._zoomY}set zoomY(e){e=Math.min(Math.max(e,.5),8),this._zoomY=e,localStorage.setItem("zoomY",e.toString())}get zoomX(){return this._zoomX}set zoomX(e){e=Math.min(Math.max(e,.0625),16),this._zoomX=e,localStorage.setItem("zoomX",e.toString())}get notes(){return this._service.config}get notes$(){return this._service.context$.pipe(Y(e=>e.config))}constructor(e){this._service=e,this._zoomY=+(localStorage.getItem("zoomY")??"1"),this._zoomX=+(localStorage.getItem("zoomX")??"1")}};i.\u0275fac=function(t){return new(t||i)(F(x))},i.\u0275prov=W({token:i,factory:i.\u0275fac});let n=i;return n})();var ae=["*"];function se(n,i){if(n&1&&(X(0),a(1,"div",1),C(2),l(),k(3,"div",2),B()),n&2){let s=i.$implicit,e=i.index,t=_();d(),b("height",t.keyHeight*t.context.zoomY,"px"),T("black",s.isBlack),d(),Q(" ",t.keyHeight*t.context.zoomY>8?s.name:""," "),d(),b("height",t.keyHeight*t.context.zoomY,"px")("top",t.keyHeight*e*t.context.zoomY,"px"),T("black",s.isBlack)("dividing",s.baseNote==="C"||s.baseNote==="F")}}var te=(()=>{let i=class i{constructor(e){this.context=e,this.trackBy=(t,o)=>o.index,this.keyHeight=M}};i.\u0275fac=function(t){return new(t||i)(g(u))},i.\u0275cmp=w({type:i,selectors:[["app-keyboard"]],standalone:!0,features:[y],ngContentSelectors:ae,decls:2,vars:2,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],[1,"key"],[1,"highlighter"]],template:function(t,o){t&1&&(L(),v(0,se,4,13,"ng-container",0),A(1)),t&2&&f("ngForOf",o.context.notes.notes)("ngForTrackBy",o.trackBy)},dependencies:[z,O],styles:["[_nghost-%COMP%]{position:relative;display:block;border-style:solid;border-color:#000;border-width:0px 1px;box-sizing:border-box}.key[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;overflow:hidden;font-size:8px;box-sizing:border-box;border:2px outset rgba(0,0,0,.3333333333);border-top-color:#fff9;border-left:none;background-color:#aaa;color:#222}.key.black[_ngcontent-%COMP%]{background-color:#222;color:#aaa}.highlighter[_ngcontent-%COMP%]{position:absolute;left:0;width:100vw;box-sizing:border-box}.highlighter[_ngcontent-%COMP%]:not(.black){background-color:var(--white-key-bg, rgba(255, 255, 255, .0666666667))}.highlighter[_ngcontent-%COMP%]:hover{background-color:var(--selected-key-bg, rgba(255, 255, 255, .1333333333));-webkit-backdrop-filter:brightness(3);backdrop-filter:brightness(3)}.highlighter.dividing[_ngcontent-%COMP%]{border-bottom:2px solid var(--key-divider-bg, rgba(255, 255, 255, .1333333333))}"]});let n=i;return n})();var ce=["canvas"];function le(n,i){if(n&1&&k(0,"canvas",2,0),n&2){let s=i.index,e=_();b("width",e.blockWidth*e.viewport.zoomX,"px")("height",e.blockHeight*e.viewport.zoomY,"px")("left",s*e.blockWidth*e.viewport.zoomX,"px"),f("width",e.blockLength)("height",e.blockVerticalLength)}}var oe=(()=>{let i=class i{constructor(e,t){this._service=e,this.viewport=t,this.contexts=[],this.blocksCount=0,this.blockLength=0,this.blockWidth=0,this.blocks=[],this.blockVerticalLength=0,this.blockHeight=0,this._subscription=new I,this._service.context$.subscribe(o=>{this.renderedData=new ImageData(o.render.data,o.render.length,o.render.height),this.blockVerticalLength=o.render.height,this.blockHeight=o.config.count*M,this.blockLength=128,this.blockWidth=this.blockLength*o.config.tickLength/o.sampleRate*ie,this.blocksCount=Math.ceil(o.render.length/this.blockLength);let r=[];for(let c=0;c<this.blocksCount;c++)r[c]={};this.blocks=r,this._dataChangesSubscription=o.render.changes.subscribe(c=>{this.drawArea(c.from,c.to)})})}ngOnInit(){}ngOnDestroy(){this._subscription.unsubscribe(),this._dataChangesSubscription?.unsubscribe()}ngAfterViewInit(){let e=this.canvases.changes.pipe(D(!0)).subscribe(()=>{this.contexts=this.canvases.map(t=>t.nativeElement.getContext("2d"))});this._subscription.add(e)}_drawBlock(e,t,o){this.contexts[e].putImageData(this.renderedData,-this.blockLength*e,0,t,0,o,this.blockVerticalLength)}drawArea(e=0,t=this.renderedData.width){let o=Math.floor(e/this.blockLength);for(;e<t;){let r=(o+1)*this.blockLength;if(t<r){this._drawBlock(o,e,t-e);break}this._drawBlock(o,e,r-e),e=r,o++}}};i.\u0275fac=function(t){return new(t||i)(g(x),g(u))},i.\u0275cmp=w({type:i,selectors:[["app-spectrogram-renderer"]],viewQuery:function(t,o){if(t&1&&j(ce,5),t&2){let r;N(r=R())&&(o.canvases=r)}},standalone:!0,features:[y],decls:1,vars:1,consts:[["canvas",""],[3,"width","height","left",4,"ngFor","ngForOf"],[3,"width","height"]],template:function(t,o){t&1&&v(0,le,2,8,"canvas",1),t&2&&f("ngForOf",o.blocks)},dependencies:[z,O],styles:["canvas[_ngcontent-%COMP%]{position:absolute;image-rendering:pixelated}"]});let n=i;return n})();function pe(n,i){if(n&1){let s=V();a(0,"button",12),h("click",function(){p(s);let t=_();return m(t.service.startWorker())}),a(1,"span",13),C(2,"troubleshoot"),l()()}}function me(n,i){if(n&1){let s=V();a(0,"button",14),h("click",function(){p(s);let t=_();return m(t.service.suspendWorker())}),a(1,"span",13),C(2,"settings"),l()()}}function he(n,i){if(n&1){let s=V();a(0,"button",15),h("click",function(){p(s);let t=_();return m(t.service.startWorker())}),a(1,"span",13),C(2,"troubleshoot"),l()()}}var M=12,ie=256,Ve=(()=>{let i=class i{constructor(e,t){this.viewport=e,this.service=t,this.noteHeight=M,this.keyboardWidth=100,this.previewResize=null}ngOnInit(){}ngOnDestroy(){}onWheel(e,t){if(!e.ctrlKey&&!e.altKey)return;e.stopPropagation(),e.preventDefault();let o=Math.pow(2,e.deltaY/-400);if(e.ctrlKey){let r=this.viewport.zoomY;this.viewport.zoomY*=o,t.scrollTop*=this.viewport.zoomY/r}if(e.altKey){let r=this.viewport.zoomX;this.viewport.zoomX*=o,t.scrollLeft*=this.viewport.zoomX/r}}};i.\u0275fac=function(t){return new(t||i)(g(u),g(x))},i.\u0275cmp=w({type:i,selectors:[["app-viewport"]],standalone:!0,features:[q([u]),y],decls:14,vars:10,consts:[["scrollContainer",""],[1,"scroll-container",3,"wheel"],[1,"scrollable-content"],[3,"valueChange","value","min","max"],[1,"icon-button","large","centered-item","floating-btn"],[1,"icon-button","rotating-animation","large","floating-btn","at-right-corner"],[1,"icon-button","large","floating-btn","at-right-corner"],["path","view/zoom/zoom_in_x",3,"click"],["path","view/zoom/zoom_out_x",3,"click"],["path","view/zoom/zoom_in_y",3,"click"],["path","view/zoom/zoom_out_y",3,"click"],["path","view/zoom/reset",3,"click"],[1,"icon-button","large","centered-item","floating-btn",3,"click"],[1,"mat-icon"],[1,"icon-button","rotating-animation","large","floating-btn","at-right-corner",3,"click"],[1,"icon-button","large","floating-btn","at-right-corner",3,"click"]],template:function(t,o){if(t&1){let r=V();a(0,"div",1,0),h("wheel",function(S){p(r);let ne=K(1);return m(o.onWheel(S,ne))}),a(2,"div",2),k(3,"app-spectrogram-renderer"),l(),a(4,"app-keyboard")(5,"app-resize-handle",3),$("valueChange",function(S){return p(r),Z(o.keyboardWidth,S)||(o.keyboardWidth=S),m(S)}),l()()(),v(6,pe,3,0,"button",4)(7,me,3,0,"button",5)(8,he,3,0,"button",6),a(9,"app-toolbar-action",7),h("click",function(){return p(r),m(o.viewport.zoomX=o.viewport.zoomX*2)}),l(),a(10,"app-toolbar-action",8),h("click",function(){return p(r),m(o.viewport.zoomX=o.viewport.zoomX/2)}),l(),a(11,"app-toolbar-action",9),h("click",function(){return p(r),m(o.viewport.zoomY=o.viewport.zoomY*2)}),l(),a(12,"app-toolbar-action",10),h("click",function(){return p(r),m(o.viewport.zoomY=o.viewport.zoomY/2)}),l(),a(13,"app-toolbar-action",11),h("click",function(){return p(r),o.viewport.zoomX=1,m(o.viewport.zoomY=1)}),l()}if(t&2){let r;d(2),b("height",o.viewport.notes.count*o.noteHeight*o.viewport.zoomY)("left",o.keyboardWidth,"px"),d(2),b("width",o.keyboardWidth,"px"),d(),G("value",o.keyboardWidth),f("min",20)("max",200),d(),H((r=o.service.analyzerState)==="initialized"?6:r==="analyzing"?7:r==="suspended"?8:-1)}},dependencies:[z,te,oe,U,J],styles:["[_nghost-%COMP%]{display:block;position:relative;background-color:#000}.scroll-container[_ngcontent-%COMP%]{overflow:scroll;position:absolute;inset:0}.scrollable-content[_ngcontent-%COMP%]{position:absolute;top:0}app-keyboard[_ngcontent-%COMP%]{position:sticky;left:0}app-resize-handle[_ngcontent-%COMP%]{display:block;cursor:e-resize;position:absolute;top:0;bottom:0;right:0;translate:50% 0;border-right-style:solid;border-right-width:5px;border-color:#0000}app-resize-handle[_ngcontent-%COMP%]:hover{border-color:#fff2}app-resize-handle.dragging[_ngcontent-%COMP%]{border-color:#fff9}.floating-btn[_ngcontent-%COMP%]{position:absolute;z-index:2}.at-right-corner[_ngcontent-%COMP%]{top:16px;right:32px}"]});let n=i;return n})();export{M as BASE_NOTE_HEIGHT,ie as BASE_SECOND_WIDTH,Ve as ViewportComponent};

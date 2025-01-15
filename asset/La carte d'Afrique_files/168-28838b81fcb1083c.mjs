"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[168],{720687:(e,t,n)=>{n.d(t,{default:()=>r});var a=n(934980);let i=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,r={css:(0,a.Ll)([i]),animation:"pulsing 2s infinite"}},717307:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(297728),i=n(2968),r=n(730212),o=n(410150);function s({dangerouslySkipActivation:e=!1}={}){let t;let{isAuthenticated:n}=(0,r.B)(),l=(0,o.HG)(),{checkExperiment:u}=(0,a.F)();return n&&l&&(t=u("dweb_grid_loading_state",{dangerouslySkipActivation:e}).group),{isInGridLoadingStateExp:(0,i.Z)(t??""),isInGridLoadingStateDefaultExp:"enabled"===t,isInGridInfiniteScrollExp:"enabled_infinite_scroll"===t||"employees"===t,gridLoadingStateGroup:t}}},934980:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>o,XF:()=>r});let a=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),i=(e,t)=>a(t/2,e/2,2*Math.random()*Math.PI),r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,o=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},31723:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var a=n(667294),i=n(616550),r=n(883119),o=n(717307),s=n(573706),l=n(986782);function u(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let m={},p=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class d{constructor(){u(this,"idMap",new Map),u(this,"objMap",new WeakMap)}get(e){let t=p(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=p(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=p(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}var c=n(587435),h=n(39260),y=n(876594),f=n(720687),g=n(512541),x=n(785893);let{css:b,animation:_}=f.default,w={backgroundColor:y._VP,animation:_,borderRadius:y.Ev2};function v({data:e}){let{height:t}=e;return/*#__PURE__*/(0,x.jsxs)(a.Fragment,{children:[/*#__PURE__*/(0,x.jsx)(g.Z,{unsafeCSS:b}),/*#__PURE__*/(0,x.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:w},"data-test-id":"skeleton-pin",children:/*#__PURE__*/(0,x.jsx)(r.xu,{height:t})})]})}var M=n(679482),C=n(297728),S=n(730212),$=n(410150),k=n(827423),E=n(415787),j=n(855746);function G({analyticsData:e,children:t,idx:n,isMeasuring:i,masonryV2ExpName:r,masonryV2ExpGroup:o}){let s=(0,$.ZP)(),{isAuthenticated:u}=(0,S.B)(),m=(0,j.MM)();return(0,a.useEffect)(()=>{if(e.current[n]){let{fetchTimestamp:t,measureTimestamp:a,hasRendered:l,pageCount:p}=e.current[n]??{},d={deviceType:s,experimentName:r,experimentGroup:o,handlerId:m,isAuthenticated:u,pageCount:p};i&&!a&&(e.current[n].measureTimestamp=Date.now(),(0,E.LY)("webapp.masonry.itemMeasureStart",Date.now()-t,{tags:d})),i||l||((0,E.LY)("webapp.masonry.itemRenderStart",Date.now()-a,{tags:d}),e.current[n].hasRendered=!0)}},[i]),/*#__PURE__*/(0,x.jsx)(l.Z,{name:"MasonryItem",children:t})}function R(e){let{align:t,cacheKey:n,id:u,isFetching:p,isGridCentered:y=!0,items:f,layout:b,loadItems:_,masonryRef:w,optOutFluidGridExperiment:R=!1,renderItem:I,scrollContainerRef:W,virtualize:A=!0,_getColumnSpanConfig:D,_dynamicHeights:L,useLoadingState:B}=e,N=(0,$.ZP)(),{isAuthenticated:Z,isRTL:F}=(0,S.B)(),{logContextEvent:P}=(0,s.v)(),T=(0,C.F)(),O="desktop"===N,H=(0,j.MM)(),V=(0,a.useRef)(f.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),{experimentalColumnWidth:z,experimentalGutter:X,anyEnabled:Y,group:K}=(0,c.Z)("flexible"!==b&&!R),U=e.serverRender??!!O,J="flexible"===b||"uniformRowFlexible"===b||"desktop"!==N||Y,q=(J&&b?.startsWith("uniformRow")?"uniformRowFlexible":void 0)??(U?"serverRenderedFlexible":"flexible"),Q=e.columnWidth??z??M.yF;J&&(Q=Math.floor(Q));let ee=e.gutterWidth??X??(O?M.oX:1),et=e.minCols??M.yc,en=(0,a.useRef)(0),ea=Q+ee,ei=function(e){if(null==e)return;let t=function(e){let t=m[e];return t&&t.screenWidth===window.innerWidth||(m[e]={screenWidth:window.innerWidth}),m[e]}(e);return t.measurementCache||(t.measurementCache=new d),t.measurementCache}(n),er=(0,a.useCallback)(()=>W?.current||window,[W]),eo=(0,a.useRef)(!0),{anyEnabled:es,group:el}=D?T.checkExperiment("web_masonry_mixed_early_bailout"):{anyEnabled:!1,group:""},eu=es?e=>e<=3?2*ee:3*ee:void 0,{anyEnabled:em}=L?T.checkExperiment("dynamic_heights_v2"):{anyEnabled:!1},ep=y&&eo.current?"centered":"",{className:ed,styles:ec}=function(e){let t=`m_${Object.keys(e).sort().reduce((t,n)=>{let a=e[n];return null==a||"object"==typeof a||"function"==typeof a?t:"boolean"==typeof a?t+(a?"t":"f"):t+a},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:a,isRTL:i,itemWidth:r,maxColumns:o,minColumns:s,items:l,_getColumnSpanConfig:u}=e,m=u?l.map((e,t)=>({index:t,columnSpanConfig:u(e)??1})).filter(e=>1!==e.columnSpanConfig):[],p=r+a,d=Array.from({length:o+1-s},(e,t)=>t+s).map(e=>{let l=e===s?0:e*p,u=e===o?null:(e+1)*p-.01,{styles:d,numberOfVisibleItems:c}=m.reduce((i,o)=>{let{columnSpanConfig:s}=o,l=Math.min(function({columnCount:e,columnSpanConfig:t}){return"number"==typeof t?t:t[e<=2?"sm":e<=4?"md":e<=8?"lg":"xl"]??1}({columnCount:e,columnSpanConfig:s}),e),u=null!=o.index&&i.numberOfVisibleItems>=l+o.index,m=n?100/e*l:r*l+a*(l-1),{numberOfVisibleItems:p}=i;return u?p-=l-1:o.index<p&&(p+=1),{styles:i.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:a,width:i,flexible:r}){let o="number"==typeof n?n:btoa(JSON.stringify(n));return r?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:s,visible:u,width:m,flexible:n})),numberOfVisibleItems:p}},{styles:"",numberOfVisibleItems:e}),h=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*p}px;
      }

      .${t} .static {
        width: ${r}px !important;
      }
    `;return{minWidth:l,maxWidth:u,styles:`
      .${t} .static:nth-child(-n+${c}) {
        position: static !important;
        visibility: visible !important;
        float: ${i?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${a/2}px;
      }

      ${h}

      ${d}
    `}}),c=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),h=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),y=`
    ${c.join("")}
    @supports not (container-type: inline-size) {
      ${h.join("")}
    }
  `;return{className:t,styles:`
  .masonryContainer {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${y}
  `}}({gutterWidth:ee,flexible:J,items:f,isRTL:F,itemWidth:Q,maxColumns:e.maxColumns??Math.max(f.length,M.g5),minColumns:et,_getColumnSpanConfig:D}),eh=`${ep} ${ed}`.trim(),{anyEnabled:ey,expName:ef,group:eg,isMeasureAllEnabled:ex}=(0,h.Z)(),{isInGridLoadingStateExp:eb,gridLoadingStateGroup:e_}=(0,o.Z)({dangerouslySkipActivation:!0}),ew=(0,k.Nx)((0,i.TH)())&&(eb||"control"===e_),ev=(0,a.useRef)(),eM=(0,a.useRef)(f.length),eC=(0,a.useRef)(0);(0,a.useEffect)(()=>{ew&&f.forEach((e,t)=>{V.current[t]||(V.current[t]={fetchTimestamp:Date.now(),measureTimestamp:0,hasRendered:!1,pageCount:eC.current})}),eM.current=f.length,eC.current+=1},[f]),(0,a.useEffect)(()=>{eo.current&&(eo.current=!1)},[]),(0,a.useEffect)(()=>{let e=()=>en.current+=1;return ew&&(ev.current=Date.now(),window.addEventListener("scroll",e)),()=>{if(ew){let t=V.current;window.removeEventListener("scroll",e);let n=t.filter(e=>!!e.measureTimestamp).length,a=t.filter(e=>e.hasRendered).length,i=eM.current,r={gridLoadingStateGroup:e_};(0,E.LY)("webapp.masonry.timeSpent",ev.current?Date.now()-ev.current:0,{tags:r}),(0,E.S0)("webapp.masonry.itemsFetched",i,{tags:r}),(0,E.S0)("webapp.masonry.itemsMeasured",n,{tags:r}),(0,E.S0)("webapp.masonry.itemsMeasuredPercentage",Math.floor(n/i*100),{tags:r}),(0,E.S0)("webapp.masonry.itemsRendered",a,{tags:r}),(0,E.S0)("webapp.masonry.itemsRenderedPercentage",Math.floor(a/i*100),{tags:r}),(0,E.S0)("webapp.masonry.scrollCount",en.current,{tags:r})}}},[]);let eS=(0,a.useCallback)((e,t,n)=>{let a=e.reduce((e,t)=>e+t),i=a/e.length;(0,E.S0)("webapp.masonry.multiColumnWhitespace.average",i,{sampleRate:1,tags:{earlyBailoutExperimentGroup:el||"unknown",experimentalMasonryGroup:eg||"unknown",fluidGridGroup:K||"unknown",handlerId:H,isAuthenticated:Z,multiColumnItemSpan:e.length}}),(0,E.S0)("webapp.masonry.twoColWhitespace",i,{sampleRate:1,tags:{columnWidth:Q,minCols:et}}),el&&(0,E.S0)("webapp.masonry.graphIterations",t,{sampleRate:1,tags:{columnSpan:n,exprimentGroup:el}}),P({event_type:15878,component:14468,aux_data:{total_whitespace_px:a}}),P({event_type:16062,component:14468,aux_data:{average_whitespace_px:i}}),P({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(t=>{t>=50&&((0,E.nP)("webapp.masonry.multiColumnWhitespace.over50",{sampleRate:1,tags:{earlyBailoutExperimentGroup:el||"unknown",experimentalMasonryGroup:eg||"unknown",fluidGridGroup:K||"unknown",handlerId:H,isAuthenticated:Z,multiColumnItemSpan:e.length}}),P({event_type:16261,component:14468})),t>=100&&((0,E.nP)("webapp.masonry.multiColumnWhitespace.over100",{sampleRate:1,tags:{earlyBailoutExperimentGroup:el||"unknown",experimentalMasonryGroup:eg||"unknown",fluidGridGroup:K||"unknown",handlerId:H,isAuthenticated:Z,multiColumnItemSpan:e.length}}),P({event_type:16262,component:14468}))}),(0,E.nP)("webapp.masonry.multiColumnWhitespace.count",{sampleRate:1,tags:{earlyBailoutExperimentGroup:el||"unknown",experimentalMasonryGroup:eg||"unknown",fluidGridGroup:K||"unknown",handlerId:H,isAuthenticated:Z,multiColumnItemSpan:e.length}})},[Q,el,P,et,Z,H,K,eg]),{_items:e$,_renderItem:ek}=function({initialLoadingStatePinCount:e=50,infiniteScrollPinCount:t=10,isFetching:n,items:i=[],renderItem:r,useLoadingState:s}){let{isInGridInfiniteScrollExp:l}=(0,o.Z)(),u=s&&n&&0===i.length,m=s&&n&&l&&i.length>0,p=(0,a.useMemo)(()=>Array.from({length:m?t:e}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236,key:`skeleton-pin-${n}`,isSkeleton:!0}],[]),[e,t,m]);return{_items:(0,a.useMemo)(()=>u?p:m?[...i,...p]:i,[u,m,i,p]),_renderItem:(0,a.useMemo)(()=>s?e=>{let{itemIdx:t,data:n}=e;return t>=i.length&&n&&"object"==typeof n&&"key"in n&&"height"in n?/*#__PURE__*/(0,x.jsx)(v,{data:n},n.key):r(e)}:r,[s,r,i.length])}}({useLoadingState:B,items:f,renderItem:(0,a.useCallback)(e=>ew?/*#__PURE__*/(0,x.jsx)(G,{analyticsData:V,idx:e.itemIdx,isMeasuring:e.isMeasuring,masonryV2ExpGroup:eg,masonryV2ExpName:ef,children:/*#__PURE__*/(0,x.jsx)(l.Z,{name:"MasonryItem",children:I(e)})}):/*#__PURE__*/(0,x.jsx)(l.Z,{name:"MasonryItem",children:I(e)}),[I]),isFetching:p});return/*#__PURE__*/(0,x.jsx)("div",{className:"masonryContainer","data-test-id":"masonry-container",id:u,style:Y?{padding:`0 ${ee/2}px`}:void 0,children:/*#__PURE__*/(0,x.jsxs)("div",{className:eh,children:[U&&eo.current?/*#__PURE__*/(0,x.jsx)(g.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:ec}):null,/*#__PURE__*/(0,x.jsx)(r.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?ea*e.maxColumns:void 0,children:ey?/*#__PURE__*/(0,x.jsx)(r.GX,{ref:e=>{w&&(w.current=e)},_dynamicHeights:L,_dynamicHeightsV2Experiment:em,_earlyBailout:eu,_getColumnSpanConfig:D,_logTwoColWhitespace:eS,_measureAll:ex,align:t,columnWidth:Q,gutterWidth:ee,items:e$,layout:J?q:b??"basic",loadItems:_,measurementStore:ei,minCols:et,renderItem:ek,scrollContainer:er,virtualBufferFactor:.3,virtualize:A}):/*#__PURE__*/(0,x.jsx)(r.Rk,{ref:e=>{w&&(w.current=e)},_dynamicHeights:L,_dynamicHeightsV2Experiment:em,_earlyBailout:eu,_getColumnSpanConfig:D,_logTwoColWhitespace:eS,align:t,columnWidth:Q,gutterWidth:ee,items:e$,layout:J?q:b??"basic",loadItems:_,measurementStore:ei,minCols:et,renderItem:ek,scrollContainer:er,virtualBufferFactor:.3,virtualize:A})})]})})}},39260:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(297728),i=n(730212),r=n(855746);function o(e){let{isAuthenticated:t}=(0,i.B)(),{expName:n,anyEnabled:o,group:s}=function({experimentsClient:e,handlerId:t,isAuthenticated:n,skipActivation:a}){let{checkExperiment:i}=e,r=i(n?"web_masonry_v2_auth":"web_masonry_v2_unauth",{dangerouslySkipActivation:a});return r.group?{expName:n?"web_masonry_v2_auth":"web_masonry_v2_unauth",...r}:"www/[username]/[slug].js"!==t||n?"www/pin/[id].js"!==t||n?{expName:"",anyEnabled:!1,group:""}:{expName:"web_masonry_v2_unauth_pin",...i("web_masonry_v2_unauth_pin",{dangerouslySkipActivation:a})}:{expName:"web_masonry_v2_unauth_board",...i("web_masonry_v2_unauth_board",{dangerouslySkipActivation:a})}}({experimentsClient:(0,a.F)(),handlerId:(0,r.MM)(),isAuthenticated:t,skipActivation:e?.skipActivation??!1});return{expName:n,anyEnabled:o,group:s,isMeasureAllEnabled:"enabled_measure_all"===s||"enabled_measure_all_impression_fix"===s,isImpressionFixEnabled:"control_impression_fix"===s||"enabled_impression_fix"===s||"enabled_measure_all_impression_fix"===s}}},2968:(e,t,n)=>{n.d(t,{Z:()=>a});let a=e=>e.startsWith("enabled")||e.startsWith("employee")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/168-28838b81fcb1083c.mjs.map
"use strict";(globalThis.webpackChunk_stlite_desktop=globalThis.webpackChunk_stlite_desktop||[]).push([[6134],{26134:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r(5057),a=r(60913),i=r(4153),n=r(96266);const d=528;function o(e){let{element:t,width:r,endpoints:o}=e;const c=(0,s.useRef)(null),{type:l,url:u,startTime:h}=t,m=(0,i.O0)(u);(0,s.useEffect)((()=>{c.current&&(c.current.currentTime=h)}),[h]),(0,s.useEffect)((()=>{const e=c.current,r=()=>{e&&(e.currentTime=t.startTime)};return e&&e.addEventListener("loadedmetadata",r),()=>{e&&e.removeEventListener("loadedmetadata",r)}}),[t]);const f=e=>{const{startTime:r}=t;return r?"".concat(e,"?start=").concat(r):e};if(l===a.nk.Type.YOUTUBE_IFRAME){const e=0!==r?.75*r:d;return(0,n.jsx)("iframe",{"data-testid":"stVideo",title:m,src:f(m),width:r,height:e,style:{colorScheme:"light dark"},frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0})}return(0,n.jsx)("video",{"data-testid":"stVideo",ref:c,controls:!0,src:o.buildMediaURL(m),className:"stVideo",style:{width:r,height:0===r?d:void 0}})}}}]);
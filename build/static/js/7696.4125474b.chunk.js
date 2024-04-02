"use strict";(globalThis.webpackChunk_stlite_desktop=globalThis.webpackChunk_stlite_desktop||[]).push([[7696],{52955:(e,t,i)=>{i.d(t,{K:()=>o});var s=i(50120);class o{constructor(){this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}manageFormClearListener(e,t,i){null!=this.formClearListener&&this.lastWidgetMgr===e&&this.lastFormId===t||(this.disconnect(),(0,s.bM)(t)&&(this.formClearListener=e.addFormClearedListener(t,i),this.lastWidgetMgr=e,this.lastFormId=t))}disconnect(){var e;null===(e=this.formClearListener)||void 0===e||e.disconnect(),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}}},87696:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var s=i(5057),o=i(8708),n=i.n(o),a=i(55790),r=i(47206),l=i(59500),d=i(52955),h=i(60913),m=i(50120),u=i(88084),c=i.n(u),g=i(38944),p=i(93905),f=i(21034),b=i(98790),v=i(82160),T=i(59990);const y=(0,v.Z)("div",{target:"ew7r33m3"})((e=>{let{disabled:t,theme:i}=e;return{alignItems:"center",backgroundColor:t?i.colors.gray:i.colors.primary,borderTopLeftRadius:"100%",borderTopRightRadius:"100%",borderBottomLeftRadius:"100%",borderBottomRightRadius:"100%",borderTopStyle:"none",borderBottomStyle:"none",borderRightStyle:"none",borderLeftStyle:"none",boxShadow:"none",display:"flex",height:i.radii.xl,justifyContent:"center",width:i.radii.xl,":focus":{outline:"none"},":focus-visible":{boxShadow:"0 0 0 0.2rem ".concat((0,T.DZ)(i.colors.primary,.5))}}}),""),R=(0,v.Z)("div",{target:"ew7r33m2"})((e=>{let{disabled:t,theme:i}=e;return{fontFamily:i.genericFonts.codeFont,fontSize:i.fontSizes.sm,paddingBottom:i.spacing.twoThirdsSmFont,color:t?i.colors.gray:i.colors.primary,top:"-22px",position:"absolute",whiteSpace:"nowrap",backgroundColor:i.colors.transparent,lineHeight:i.lineHeights.base,fontWeight:"normal"}}),""),V=(0,v.Z)("div",{target:"ew7r33m1"})((e=>{let{theme:t}=e;return{paddingBottom:t.spacing.none,paddingLeft:t.spacing.none,paddingRight:t.spacing.none,paddingTop:t.spacing.twoThirdsSmFont,justifyContent:"space-between",alignItems:"center",display:"flex"}}),""),x=(0,v.Z)("div",{target:"ew7r33m0"})((e=>{let{disabled:t,theme:i}=e;return{lineHeight:i.lineHeights.base,fontWeight:"normal",fontSize:i.fontSizes.sm,fontFamily:i.genericFonts.codeFont,color:t?i.colors.fadedText40:"inherit"}}),"");var C=i(96266);class w extends s.PureComponent{constructor(e){super(e),this.formClearHelper=new d.K,this.state=void 0,this.sliderRef=s.createRef(),this.thumbRef=[],this.thumbValueRef=[],this.commitWidgetValueDebounced=void 0,this.commitWidgetValue=e=>{this.props.widgetMgr.setDoubleArrayValue(this.props.element,this.state.value,e)},this.onFormCleared=()=>{this.setState(((e,t)=>({value:t.element.default})),(()=>this.commitWidgetValue({fromUi:!0})))},this.handleChange=e=>{let{value:t}=e;this.setState({value:t},(()=>this.commitWidgetValueDebounced({fromUi:!0})))},this.renderThumb=s.forwardRef(((e,t)=>{var i;const{$value:o,$thumbIndex:a}=e,r=a||0;this.thumbRef[r]=t,(i=this.thumbValueRef)[r]||(i[r]=s.createRef());const l=o?this.formatValue(o[a]):"",d=n()(e,["role","style","aria-valuemax","aria-valuemin","aria-valuenow","tabIndex","onKeyUp","onKeyDown","onMouseEnter","onMouseLeave","draggable"]),h={};return(this.props.element.options.length>0||this.isDateTimeType())&&(h["aria-valuetext"]=l),(0,C.jsx)(y,{...d,disabled:!0===e.$disabled,ref:this.thumbRef[r],"aria-valuetext":l,"aria-label":this.props.element.label,children:(0,C.jsx)(R,{className:"StyledThumbValue","data-testid":"stThumbValue",disabled:!0===e.$disabled,ref:this.thumbValueRef[r],children:l})})})),this.renderTickBar=()=>{const{disabled:e,element:t}=this.props,{max:i,min:s}=t;return(0,C.jsxs)(V,{"data-testid":"stTickBar",children:[(0,C.jsx)(x,{disabled:e,"data-testid":"stTickBarMin",children:this.formatValue(s)}),(0,C.jsx)(x,{disabled:e,"data-testid":"stTickBarMax",children:this.formatValue(i)})]})},this.commitWidgetValueDebounced=(0,m.Ds)(200,this.commitWidgetValue.bind(this)),this.state={value:this.initialValue}}get initialValue(){const e=this.props.widgetMgr.getDoubleArrayValue(this.props.element);return void 0!==e?e:this.props.element.default}componentDidMount(){setTimeout((()=>{this.thumbValueAlignment()}),0),this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}componentDidUpdate(){this.maybeUpdateFromProtobuf()}componentWillUnmount(){this.formClearHelper.disconnect()}maybeUpdateFromProtobuf(){const{setValue:e}=this.props.element;e&&this.updateFromProtobuf()}updateFromProtobuf(){const{value:e}=this.props.element;this.props.element.setValue=!1,this.setState({value:e},(()=>{this.commitWidgetValue({fromUi:!1})}))}get value(){const{min:e,max:t}=this.props.element,{value:i}=this.state;let s=i[0],o=i.length>1?i[1]:i[0];return s>o&&(s=o),s<e&&(s=e),s>t&&(s=t),o<e&&(o=e),o>t&&(o=t),i.length>1?[s,o]:[s]}isDateTimeType(){const{dataType:e}=this.props.element;return e===h.iR.DataType.DATETIME||e===h.iR.DataType.DATE||e===h.iR.DataType.TIME}formatValue(e){const{format:t,options:i}=this.props.element;return this.isDateTimeType()?c().utc(e/1e3).format(t):i.length>0?(0,l.sprintf)(t,i[e]):(0,l.sprintf)(t,e)}alignValueOnThumb(e,t,i){if(e&&t&&i){const s=e.getBoundingClientRect(),o=t.getBoundingClientRect(),n=i.getBoundingClientRect(),a=o.left+o.width/2,r=a-n.width/2<s.left,l=a+n.width/2>s.right;i.style.left=r?"0":"",i.style.right=l?"0":""}}thumbValueAlignment(){var e,t,i,s;const o=this.sliderRef.current,n=null===(e=this.thumbRef[0])||void 0===e?void 0:e.current,a=null===(t=this.thumbRef[1])||void 0===t?void 0:t.current,r=null===(i=this.thumbValueRef[0])||void 0===i?void 0:i.current,l=null===(s=this.thumbValueRef[1])||void 0===s?void 0:s.current;if(this.alignValueOnThumb(o,n,r),this.alignValueOnThumb(o,a,l),o&&n&&a&&r&&l){const e=o.getBoundingClientRect(),t=n.getBoundingClientRect(),i=a.getBoundingClientRect(),s=r.getBoundingClientRect(),d=l.getBoundingClientRect();if(s.right+16>d.left){d.left-16-s.width>e.left?r.style.right="".concat(d.width+16-(i.right-t.right),"px"):l.style.left="".concat(s.width+16-(i.left-t.left),"px")}}}render(){var e;const{disabled:t,element:i,theme:s,width:o,widgetMgr:n}=this.props,{colors:r,fonts:l,fontSizes:d,spacing:h}=s,u={width:o};return this.formClearHelper.manageFormClearListener(n,i.formId,this.onFormCleared),this.thumbValueAlignment(),(0,C.jsxs)("div",{ref:this.sliderRef,className:"stSlider","data-testid":"stSlider",style:u,children:[(0,C.jsx)(g.O,{label:i.label,disabled:t,labelVisibility:(0,m.iF)(null===(e=i.labelVisibility)||void 0===e?void 0:e.value),children:i.help&&(0,C.jsx)(p.dT,{children:(0,C.jsx)(f.Z,{content:i.help,placement:b.u.TOP_RIGHT})})}),(0,C.jsx)(a.Z,{min:i.min,max:i.max,step:i.step,value:this.value,onChange:this.handleChange,disabled:t,overrides:{Root:{style:{paddingTop:h.twoThirdsSmFont}},Thumb:this.renderThumb,Tick:{style:{fontFamily:l.monospace,fontSize:d.sm}},Track:{style:{backgroundColor:"none !important",paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:h.twoThirdsSmFont}},InnerTrack:{style:e=>{let{$disabled:t}=e;return{height:"4px",...t?{background:r.darkenedBgMix25}:{}}}},TickBar:this.renderTickBar}})]})}}const F=(0,r.b)(w)}}]);
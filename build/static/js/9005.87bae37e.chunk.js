"use strict";(globalThis.webpackChunk_stlite_desktop=globalThis.webpackChunk_stlite_desktop||[]).push([[9005],{94778:(t,e,r)=>{r.d(e,{Z:()=>p});r(5057);var n,o=r(50120),i=r(93905),a=r(82160);const s=(0,r(21371).F4)(n||(l=["\n  50% {\n    color: rgba(0, 0, 0, 0);\n  }\n"],u||(u=l.slice(0)),n=Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(u)}}))));var l,u;const c=(0,a.Z)("span",{target:"edlqvik0"})((t=>{let{includeDot:e,shouldBlink:r,theme:n}=t;return{...e?{"&::before":{opacity:1,content:'"\u2022"',animation:"none",color:n.colors.gray,margin:"0 5px"}}:{},...r?{color:n.colors.red,animationName:"".concat(s),animationDuration:"0.5s",animationIterationCount:5}:{}}}),"");var d=r(96266);const p=t=>{let{dirty:e,value:r,maxLength:n,className:a,type:s="single",inForm:l}=t;const u=[],p=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.push((0,d.jsx)(c,{includeDot:u.length>0,shouldBlink:e,children:t},u.length))};if(e){const t=l?"submit form":"apply";if("multiline"===s){const e=(0,o.Ge)()?"\u2318":"Ctrl";p("Press ".concat(e,"+Enter to ").concat(t))}else"single"===s&&p("Press Enter to ".concat(t))}return n&&("chat"!==s||e)&&p("".concat(r.length,"/").concat(n),e&&r.length>=n),(0,d.jsx)(i.X7,{"data-testid":"InputInstructions",className:a,children:u})}},52955:(t,e,r)=>{r.d(e,{K:()=>o});var n=r(50120);class o{constructor(){this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}manageFormClearListener(t,e,r){null!=this.formClearListener&&this.lastWidgetMgr===t&&this.lastFormId===e||(this.disconnect(),(0,n.bM)(e)&&(this.formClearListener=t.addFormClearedListener(e,r),this.lastWidgetMgr=t,this.lastFormId=e))}disconnect(){var t;null===(t=this.formClearListener)||void 0===t||t.disconnect(),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}}},39005:(t,e,r)=>{r.r(e),r.d(e,{default:()=>b});var n=r(5057),o=r(30124),i=r(60913),a=r(52955),s=r(94778),l=r(38944),u=r(93905),c=r(21034),d=r(98790),p=r(50120),h=r(96216);const f=(0,r(82160).Z)("div",{target:"e11y4ecf0"})((t=>{let{width:e}=t;return{position:"relative",width:e}}),"");var m=r(96266);class y extends n.PureComponent{constructor(){var t;super(...arguments),t=this,this.formClearHelper=new a.K,this.state={dirty:!1,value:this.initialValue},this.commitWidgetValue=function(e){let r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.props.widgetMgr.setStringValue(t.props.element,t.state.value,e),r&&t.setState({dirty:!1})},this.onFormCleared=()=>{this.setState(((t,e)=>{var r;return{value:null!==(r=e.element.default)&&void 0!==r?r:null}}),(()=>this.commitWidgetValue({fromUi:!0})))},this.onBlur=()=>{this.state.dirty&&this.commitWidgetValue({fromUi:!0})},this.onChange=t=>{const{value:e}=t.target,{element:r}=this.props,{maxChars:n}=r;0!==n&&e.length>n||((0,p.$b)(this.props.element)?this.setState({dirty:!0,value:e},(()=>{this.commitWidgetValue({fromUi:!0},!1)})):this.setState({dirty:!0,value:e}))},this.onKeyPress=t=>{"Enter"===t.key&&(this.state.dirty&&this.commitWidgetValue({fromUi:!0}),(0,p.$b)(this.props.element)&&this.props.widgetMgr.submitForm(this.props.element.formId))}}get initialValue(){var t;const e=this.props.widgetMgr.getStringValue(this.props.element);return null!==(t=null!==e&&void 0!==e?e:this.props.element.default)&&void 0!==t?t:null}componentDidMount(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}componentDidUpdate(){this.maybeUpdateFromProtobuf()}componentWillUnmount(){this.formClearHelper.disconnect()}maybeUpdateFromProtobuf(){const{setValue:t}=this.props.element;t&&this.updateFromProtobuf()}updateFromProtobuf(){const{value:t}=this.props.element;this.props.element.setValue=!1,this.setState({value:null!==t&&void 0!==t?t:null},(()=>{this.commitWidgetValue({fromUi:!1})}))}getTypeString(){return this.props.element.type===i.oi.Type.PASSWORD?"password":"text"}render(){var t;const{dirty:e,value:r}=this.state,{element:n,width:i,disabled:a,widgetMgr:y}=this.props,{placeholder:b}=n;return this.formClearHelper.manageFormClearListener(y,n.formId,this.onFormCleared),(0,m.jsxs)(f,{className:"row-widget stTextInput","data-testid":"stTextInput",width:i,children:[(0,m.jsx)(l.O,{label:n.label,disabled:a,labelVisibility:(0,p.iF)(null===(t=n.labelVisibility)||void 0===t?void 0:t.value),children:n.help&&(0,m.jsx)(u.dT,{children:(0,m.jsx)(c.Z,{content:n.help,placement:d.u.TOP_RIGHT})})}),(0,m.jsx)(o.Z,{value:null!==r&&void 0!==r?r:"",placeholder:b,onBlur:this.onBlur,onChange:this.onChange,onKeyPress:this.onKeyPress,"aria-label":n.label,disabled:a,type:this.getTypeString(),autoComplete:n.autocomplete,overrides:{Input:{style:{minWidth:0,"::placeholder":{opacity:"0.7"},lineHeight:"1.4",paddingRight:".5rem",paddingLeft:".5rem",paddingBottom:".5rem",paddingTop:".5rem"}},Root:{props:{"data-testid":"textInputRootElement"},style:{borderLeftWidth:"1px",borderRightWidth:"1px",borderTopWidth:"1px",borderBottomWidth:"1px"}}}}),i>h.A.hideWidgetDetails&&(0,m.jsx)(s.Z,{dirty:e,value:null!==r&&void 0!==r?r:"",maxLength:n.maxChars,inForm:(0,p.$b)({formId:n.formId})})]})}}const b=y},30124:(t,e,r)=>{r.d(e,{Z:()=>x});var n=r(5057),o=r(80099),i=r(91224),a=r(97135),s=r(4547),l=r(18150);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}var c=["Root","StartEnhancer","EndEnhancer"],d=["startEnhancer","endEnhancer","overrides"];function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},p.apply(this,arguments)}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=j(t);if(e){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===u(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}(this,r)}}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function w(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(j,t);var e,r,u,f=g(j);function j(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,j);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return w(v(t=f.call.apply(f,[this].concat(r))),"state",{isFocused:t.props.autoFocus||!1}),w(v(t),"onFocus",(function(e){t.setState({isFocused:!0}),t.props.onFocus(e)})),w(v(t),"onBlur",(function(e){t.setState({isFocused:!1}),t.props.onBlur(e)})),t}return e=j,(r=[{key:"render",value:function(){var t=this.props,e=t.startEnhancer,r=t.endEnhancer,u=t.overrides,f=u.Root,y=u.StartEnhancer,b=u.EndEnhancer,g=m(u,c),v=m(t,d),j=h((0,o.jb)(f,s.fC),2),w=j[0],O=j[1],x=h((0,o.jb)(y,s.Fp),2),P=x[0],S=x[1],E=h((0,o.jb)(b,s.Fp),2),I=E[0],W=E[1],T=(0,i.t)(this.props,this.state);return n.createElement(w,p({"data-baseweb":"input"},T,O,{$adjoined:F(e,r),$hasIconTrailing:this.props.clearable||"password"==this.props.type}),C(e)&&n.createElement(P,p({},T,S,{$position:l.Xf.start}),"function"===typeof e?e(T):e),n.createElement(a.Z,p({},v,{overrides:g,adjoined:F(e,r),onFocus:this.onFocus,onBlur:this.onBlur})),C(r)&&n.createElement(I,p({},T,W,{$position:l.Xf.end}),"function"===typeof r?r(T):r))}}])&&y(e.prototype,r),u&&y(e,u),Object.defineProperty(e,"prototype",{writable:!1}),j}(n.Component);function F(t,e){return C(t)&&C(e)?l.y4.both:C(t)?l.y4.left:C(e)?l.y4.right:l.y4.none}function C(t){return Boolean(t||0===t)}w(O,"defaultProps",{autoComplete:"on",autoFocus:!1,disabled:!1,name:"",onBlur:function(){},onFocus:function(){},overrides:{},required:!1,size:l.NO.default,startEnhancer:null,endEnhancer:null,clearable:!1,type:"text",readOnly:!1});const x=O}}]);
"use strict";(globalThis.webpackChunk_stlite_desktop=globalThis.webpackChunk_stlite_desktop||[]).push([[8801],{52955:(e,t,i)=>{i.d(t,{K:()=>l});var s=i(50120);class l{constructor(){this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}manageFormClearListener(e,t,i){null!=this.formClearListener&&this.lastWidgetMgr===e&&this.lastFormId===t||(this.disconnect(),(0,s.bM)(t)&&(this.formClearListener=e.addFormClearedListener(t,i),this.lastWidgetMgr=e,this.lastFormId=t))}disconnect(){var e;null===(e=this.formClearListener)||void 0===e||e.disconnect(),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}}},28801:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var s=i(5057),l=i(47206),o=i(52955),r=i(92703),a=i(50120),n=i(96266);class d extends s.PureComponent{constructor(){super(...arguments),this.formClearHelper=new o.K,this.state={value:this.initialValue},this.commitWidgetValue=e=>{this.props.widgetMgr.setIntValue(this.props.element,this.state.value,e)},this.onFormCleared=()=>{this.setState(((e,t)=>{var i;return{value:null!==(i=t.element.default)&&void 0!==i?i:null}}),(()=>this.commitWidgetValue({fromUi:!0})))},this.onChange=e=>{this.setState({value:e},(()=>this.commitWidgetValue({fromUi:!0})))}}get initialValue(){var e;const t=this.props.widgetMgr.getIntValue(this.props.element);return null!==(e=null!==t&&void 0!==t?t:this.props.element.default)&&void 0!==e?e:null}componentDidMount(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}componentDidUpdate(){this.maybeUpdateFromProtobuf()}componentWillUnmount(){this.formClearHelper.disconnect()}maybeUpdateFromProtobuf(){const{setValue:e}=this.props.element;e&&this.updateFromProtobuf()}updateFromProtobuf(){const{value:e}=this.props.element;this.props.element.setValue=!1,this.setState({value:null!==e&&void 0!==e?e:null},(()=>{this.commitWidgetValue({fromUi:!1})}))}render(){const{options:e,help:t,label:i,labelVisibility:s,formId:l,placeholder:o}=this.props.element,{disabled:d,widgetMgr:h}=this.props,m=(0,a.le)(this.props.element.default)&&!d;return this.formClearHelper.manageFormClearListener(h,l,this.onFormCleared),(0,n.jsx)(r.ZP,{label:i,labelVisibility:(0,a.iF)(null===s||void 0===s?void 0:s.value),options:e,disabled:d,width:this.props.width,onChange:this.onChange,value:this.state.value,help:t,placeholder:o,clearable:m})}}const h=(0,l.b)(d)}}]);
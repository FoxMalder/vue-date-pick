!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueDatePick=e():t.VueDatePick=e()}("undefined"!=typeof self?self:this,function(){return r={},i.m=n=[function(t,e,n){},function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){"use strict";n.r(e);function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var v=/,|\.|-| |:|\/|\\/,m=/D+/,y=/M+/,g=/Y+/,b=/h+/i,_=/m+/,C=/s+/,o=/A/;function D(t,e){return void 0!==t?t.toString().length>e?t:new Array(e-t.toString().length+1).join("0")+t:void 0}function S(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function s(t,e){for(var n=[],r=t;r<=e;r++)n.push(r);return n}function a(t){var e=t%12;return 0==e?12:e}function u(t){return 12<=t}function l(t,e,n){return Math.min(Math.max(t,e),n)}var c={props:{value:{type:String,default:""},format:{type:String,default:"YYYY-MM-DD"},displayFormat:{type:String},editable:{type:Boolean,default:!0},hasInputElement:{type:Boolean,default:!0},inputAttributes:{type:Object},selectableYearRange:{type:[Number,Object,Function],default:40},startPeriod:{type:Object},parseDate:{type:Function},formatDate:{type:Function},pickTime:{type:Boolean,default:!1},pickMinutes:{type:Boolean,default:!0},pickSeconds:{type:Boolean,default:!1},use12HourClock:{type:Boolean,default:!1},isDateDisabled:{type:Function,default:function(){return!1}},nextMonthCaption:{type:String,default:"Next month"},prevMonthCaption:{type:String,default:"Previous month"},setTimeCaption:{type:String,default:"Set time:"},mobileBreakpointWidth:{type:Number,default:500},weekdays:{type:Array,default:function(){return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},months:{type:Array,default:function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}},startWeekOnSunday:{type:Boolean,default:!1}},data:function(){return{inputValue:this.valueToInputFormat(this.value),direction:void 0,positionClass:void 0,opened:!this.hasInputElement,currentPeriod:this.startPeriod||this.getPeriodFromValue(this.value,this.format)}},computed:{valueDate:function(){var t=this.value,e=this.format;return t?this.parseDateString(t,e):void 0},isReadOnly:function(){return!this.editable||this.inputAttributes&&this.inputAttributes.readonly},isValidValue:function(){var t=this.valueDate;return!this.value||Boolean(t)},currentPeriodDates:function(){var e=this,t=this.currentPeriod,n=t.year,r=t.month,i=[],o=new Date(n,r,1),s=new Date,a=this.startWeekOnSunday?1:0,u=o.getDay()||7;if(1-a<u)for(var l=u-(2-a);0<=l;l--){var c=new Date(o);c.setDate(-l),i.push({outOfRange:!0,date:c})}for(;o.getMonth()===r;)i.push({date:new Date(o)}),o.setDate(o.getDate()+1);for(var p=7-i.length%7,d=1;d<=p;d++){var h=new Date(o);h.setDate(d),i.push({outOfRange:!0,date:h})}return i.forEach(function(t){t.disabled=e.isDateDisabled(t.date),t.today=S(t.date,s),t.dateKey=[t.date.getFullYear(),t.date.getMonth()+1,t.date.getDate()].join("-"),t.selected=!!e.valueDate&&S(t.date,e.valueDate)}),function(t,e){var n=[];for(;t.length;)n.push(t.splice(0,e));return n}(i,7)},yearRange:function(){var t=this.currentPeriod.year,e=this.selectableYearRange,n=i(e),r=[];return"number"===n?r=s(t-e,t+e):"object"===n?r=s(e.from,e.to):"function"===n&&(r=e(this)),r.indexOf(t)<0&&(r.push(t),r=r.sort()),r},currentTime:function(){var t=this.valueDate;if(t){var e=t.getHours(),n=t.getMinutes(),r=t.getSeconds();return{hours:e,minutes:n,seconds:r,isPM:u(e),hoursFormatted:(this.use12HourClock?a(e):e).toString(),minutesFormatted:D(n,2),secondsFormatted:D(r,2)}}},directionClass:function(){return this.direction?"vdp".concat(this.direction,"Direction"):void 0},weekdaysSorted:function(){if(this.startWeekOnSunday){var t=this.weekdays.slice();return t.unshift(t.pop()),t}return this.weekdays}},watch:{value:function(t){this.isValidValue&&(this.inputValue=this.valueToInputFormat(t),this.currentPeriod=this.getPeriodFromValue(t,this.format))},currentPeriod:function(t,e){var n=new Date(t.year,t.month).getTime(),r=new Date(e.year,e.month).getTime();this.direction=n!==r?r<n?"Next":"Prev":void 0,n!==r&&this.$emit("periodChange",{year:t.year,month:t.month})}},beforeDestroy:function(){this.removeCloseEvents(),this.teardownPosition()},methods:{valueToInputFormat:function(t){return this.displayFormat&&this.formatDateToString(this.parseDateString(t,this.format),this.displayFormat)||t},getPeriodFromValue:function(t,e){var n=this.parseDateString(t,e)||new Date;return{month:n.getMonth(),year:n.getFullYear()}},parseDateString:function(t,e){return t?this.parseDate?this.parseDate(t,e):this.parseSimpleDateString(t,e):void 0},formatDateToString:function(t,e){return t?this.formatDate?this.formatDate(t,e):this.formatSimpleDateToString(t,e):""},parseSimpleDateString:function(t,e){for(var n,r,i,o,s,a,u=t.split(v),l=e.split(v),c=l.length,p=0;p<c;p++)l[p].match(m)?n=parseInt(u[p],10):l[p].match(y)?r=parseInt(u[p],10):l[p].match(g)?i=parseInt(u[p],10):l[p].match(b)?o=parseInt(u[p],10):l[p].match(_)?s=parseInt(u[p],10):l[p].match(C)&&(a=parseInt(u[p],10));var d=new Date([D(i,4),D(r,2),D(n,2)].join("-"));if(!isNaN(d)){var h=new Date(i,r-1,n);return[[i,"setFullYear"],[o,"setHours"],[s,"setMinutes"],[a,"setSeconds"]].forEach(function(t){var e=f(t,2),n=e[0],r=e[1];void 0!==n&&h[r](n)}),h}},formatSimpleDateToString:function(e,n){return n.replace(g,function(t){return Number(e.getFullYear().toString().slice(-t.length))}).replace(y,function(t){return D(e.getMonth()+1,t.length)}).replace(m,function(t){return D(e.getDate(),t.length)}).replace(b,function(t){return D(o.test(n)?a(e.getHours()):e.getHours(),t.length)}).replace(_,function(t){return D(e.getMinutes(),t.length)}).replace(C,function(t){return D(e.getSeconds(),t.length)}).replace(o,function(t){return u(e.getHours())?"PM":"AM"})},incrementMonth:function(t){var e=0<arguments.length&&void 0!==t?t:1,n=new Date(this.currentPeriod.year,this.currentPeriod.month),r=new Date(n.getFullYear(),n.getMonth()+e);this.currentPeriod={month:r.getMonth(),year:r.getFullYear()}},processUserInput:function(t){var e=this.parseDateString(t,this.displayFormat||this.format);this.inputValue=t,this.$emit("input",e?this.formatDateToString(e,this.format):t)},toggle:function(){return this.opened?this.close():this.open()},open:function(){this.opened||(this.opened=!0,this.currentPeriod=this.startPeriod||this.getPeriodFromValue(this.value,this.format),this.addCloseEvents(),this.setupPosition()),this.direction=void 0},close:function(){this.opened&&(this.opened=!1,this.direction=void 0,this.removeCloseEvents(),this.teardownPosition())},closeViaOverlay:function(t){this.hasInputElement&&t.target===this.$refs.outerWrap&&this.close()},addCloseEvents:function(){var e=this;this.closeEventListener||(this.closeEventListener=function(t){return e.inspectCloseEvent(t)},["click","keyup","focusin"].forEach(function(t){return document.addEventListener(t,e.closeEventListener)}))},inspectCloseEvent:function(t){t.keyCode?27===t.keyCode&&this.close():t.target===this.$el||this.$el.contains(t.target)||this.close()},removeCloseEvents:function(){var e=this;this.closeEventListener&&(["click","keyup","focusin"].forEach(function(t){return document.removeEventListener(t,e.closeEventListener)}),delete this.closeEventListener)},setupPosition:function(){var t=this;this.positionEventListener||(this.positionEventListener=function(){return t.positionFloater()},window.addEventListener("resize",this.positionEventListener)),this.positionFloater()},positionFloater:function(){function t(){var t=r.$refs.outerWrap.getBoundingClientRect(),e=t.height,n=t.width;window.innerWidth>r.mobileBreakpointWidth?(i.top+i.height+e>window.innerHeight&&0<i.top-e&&(o="vdpPositionBottom"),i.left+n>window.innerWidth&&(s="vdpPositionRight"),r.positionClass=["vdpPositionReady",o,s].join(" ")):r.positionClass="vdpPositionFixed"}var r=this,i=this.$el.getBoundingClientRect(),o="vdpPositionTop",s="vdpPositionLeft";this.$refs.outerWrap?t():this.$nextTick(t)},teardownPosition:function(){this.positionEventListener&&(this.positionClass=void 0,window.removeEventListener("resize",this.positionEventListener),delete this.positionEventListener)},clear:function(){this.$emit("input","")},selectDateItem:function(t){var e;t.disabled||(e=new Date(t.date),this.currentTime&&(e.setHours(this.currentTime.hours),e.setMinutes(this.currentTime.minutes),e.setSeconds(this.currentTime.seconds)),this.$emit("input",this.formatDateToString(e,this.format)),this.hasInputElement&&!this.pickTime&&this.close())},set12HourClock:function(t){var e=new Date(this.valueDate),n=e.getHours();e.setHours("PM"===t?n+12:n-12),this.$emit("input",this.formatDateToString(e,this.format))},inputHours:function(t){var e,n=new Date(this.valueDate),r=n.getHours(),i=l(parseInt(t.target.value,10)||0,this.use12HourClock?1:0,this.use12HourClock?12:23);n.setHours(this.use12HourClock?(e=i,u(r)?12===e?e:e+12:12===e?0:e):i),t.target.value=D(i,1),this.$emit("input",this.formatDateToString(n,this.format))},inputTime:function(t,e){var n=new Date(this.valueDate),r=l(parseInt(e.target.value)||0,0,59);e.target.value=D(r,2),n[t](r),this.$emit("input",this.formatDateToString(n,this.format))},onTimeInputFocus:function(t){t.target.select&&t.target.select()}}};n(1);var p,d,h,P,T,k,w,M,F,E,I,O,x=(d=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"vdpComponent",class:{vdpWithInput:n.hasInputElement}},[n._t("default",[n.hasInputElement?r("input",n._b({attrs:{type:"text",readonly:n.isReadOnly},domProps:{value:n.inputValue},on:{input:function(t){n.editable&&n.processUserInput(t.target.value)},focus:function(t){n.editable&&n.open()},click:function(t){n.editable&&n.open()}}},"input",n.inputAttributes,!1)):n._e(),n._v(" "),n.editable&&n.hasInputElement&&n.inputValue?r("button",{staticClass:"vdpClearInput",attrs:{type:"button"},on:{click:n.clear}}):n._e()],{open:n.open,close:n.close,toggle:n.toggle,inputValue:n.inputValue,processUserInput:n.processUserInput,valueToInputFormat:n.valueToInputFormat}),n._v(" "),r("transition",{attrs:{name:"vdp-toggle-calendar"}},[n.opened?r("div",{ref:"outerWrap",staticClass:"vdpOuterWrap",class:[n.positionClass,{vdpFloating:n.hasInputElement}],on:{click:n.closeViaOverlay}},[r("div",{staticClass:"vdpInnerWrap"},[r("header",{staticClass:"vdpHeader"},[r("button",{staticClass:"vdpArrow vdpArrowPrev",attrs:{title:n.prevMonthCaption,type:"button"},on:{click:function(t){return n.incrementMonth(-1)}}},[n._v(n._s(n.prevMonthCaption))]),n._v(" "),r("button",{staticClass:"vdpArrow vdpArrowNext",attrs:{type:"button",title:n.nextMonthCaption},on:{click:function(t){return n.incrementMonth(1)}}},[n._v(n._s(n.nextMonthCaption))]),n._v(" "),r("div",{staticClass:"vdpPeriodControls"},[r("div",{staticClass:"vdpPeriodControl"},[r("button",{key:n.currentPeriod.month,class:n.directionClass,attrs:{type:"button"}},[n._v("\n                                "+n._s(n.months[n.currentPeriod.month])+"\n                            ")]),n._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:n.currentPeriod.month,expression:"currentPeriod.month"}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});n.$set(n.currentPeriod,"month",t.target.multiple?e:e[0])}}},n._l(n.months,function(t,e){return r("option",{key:t,domProps:{value:e}},[n._v("\n                                    "+n._s(t)+"\n                                ")])}),0)]),n._v(" "),r("div",{staticClass:"vdpPeriodControl"},[r("button",{key:n.currentPeriod.year,class:n.directionClass,attrs:{type:"button"}},[n._v("\n                                "+n._s(n.currentPeriod.year)+"\n                            ")]),n._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:n.currentPeriod.year,expression:"currentPeriod.year"}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});n.$set(n.currentPeriod,"year",t.target.multiple?e:e[0])}}},n._l(n.yearRange,function(t){return r("option",{key:t,domProps:{value:t}},[n._v("\n                                    "+n._s(t)+"\n                                ")])}),0)])])]),n._v(" "),r("table",{staticClass:"vdpTable"},[r("thead",[r("tr",n._l(n.weekdaysSorted,function(t,e){return r("th",{key:e,staticClass:"vdpHeadCell"},[r("span",{staticClass:"vdpHeadCellContent"},[n._v(n._s(t))])])}),0)]),n._v(" "),r("tbody",{key:n.currentPeriod.year+"-"+n.currentPeriod.month,class:n.directionClass},n._l(n.currentPeriodDates,function(t,e){return r("tr",{key:e,staticClass:"vdpRow"},n._l(t,function(e){return r("td",{key:e.dateKey,staticClass:"vdpCell",class:{selectable:!e.disabled,selected:e.selected,disabled:e.disabled,today:e.today,outOfRange:e.outOfRange},attrs:{"data-id":e.dateKey},on:{click:function(t){return n.selectDateItem(e)}}},[r("div",{staticClass:"vdpCellContent"},[n._v(n._s(e.date.getDate()))])])}),0)}),0)]),n._v(" "),n.pickTime&&n.currentTime?r("div",{staticClass:"vdpTimeControls"},[r("span",{staticClass:"vdpTimeCaption"},[n._v(n._s(n.setTimeCaption))]),n._v(" "),r("div",{staticClass:"vdpTimeUnit"},[r("pre",[r("span",[n._v(n._s(n.currentTime.hoursFormatted))]),r("br")]),n._v(" "),r("input",{staticClass:"vdpHoursInput",attrs:{type:"number",pattern:"\\d*",readonly:n.isReadOnly},domProps:{value:n.currentTime.hoursFormatted},on:{input:function(t){return t.preventDefault(),n.inputHours(t)},focusin:n.onTimeInputFocus}})]),n._v(" "),n.pickMinutes?r("span",{staticClass:"vdpTimeSeparator"},[n._v(":")]):n._e(),n._v(" "),n.pickMinutes?r("div",{staticClass:"vdpTimeUnit"},[r("pre",[r("span",[n._v(n._s(n.currentTime.minutesFormatted))]),r("br")]),n._v(" "),n.pickMinutes?r("input",{staticClass:"vdpMinutesInput",attrs:{type:"number",pattern:"\\d*",readonly:n.isReadOnly},domProps:{value:n.currentTime.minutesFormatted},on:{input:function(t){return n.inputTime("setMinutes",t)},focusin:n.onTimeInputFocus}}):n._e()]):n._e(),n._v(" "),n.pickSeconds?r("span",{staticClass:"vdpTimeSeparator"},[n._v(":")]):n._e(),n._v(" "),n.pickSeconds?r("div",{staticClass:"vdpTimeUnit"},[r("pre",[r("span",[n._v(n._s(n.currentTime.secondsFormatted))]),r("br")]),n._v(" "),n.pickSeconds?r("input",{staticClass:"vdpSecondsInput",attrs:{type:"number",pattern:"\\d*",readonly:n.isReadOnly},domProps:{value:n.currentTime.secondsFormatted},on:{input:function(t){return n.inputTime("setSeconds",t)},focusin:n.onTimeInputFocus}}):n._e()]):n._e(),n._v(" "),n.use12HourClock?r("button",{staticClass:"vdp12HourToggleBtn",attrs:{type:"button",disabled:n.isReadOnly},on:{click:function(t){return n.set12HourClock(n.currentTime.isPM?"AM":"PM")}}},[n._v("\n                        "+n._s(n.currentTime.isPM?"PM":"AM")+"\n                    ")]):n._e()]):n._e()])]):n._e()])],2)},P=!(h=[]),w=k=T=null,O="function"==typeof(p=c)?p.options:p,d&&(O.render=d,O.staticRenderFns=h,O._compiled=!0),P&&(O.functional=!0),k&&(O._scopeId="data-v-"+k),w?(F=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),T&&T.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(w)},O._ssrRegister=F):T&&(F=M?function(){T.call(this,(O.functional?this.parent:this).$root.$options.shadowRoot)}:T),F&&(O.functional?(O._injectStyles=F,E=O.render,O.render=function(t,e){return F.call(e),E(t,e)}):(I=O.beforeCreate,O.beforeCreate=I?[].concat(I,F):[F])),{exports:p,options:O});e.default=x.exports}],i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2).default;function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}var n,r});
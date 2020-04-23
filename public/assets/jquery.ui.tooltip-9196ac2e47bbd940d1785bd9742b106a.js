!function(a,l){function o(t,e){var i,o,n,s=t.nodeName.toLowerCase();return"area"===s?(o=(i=t.parentNode).name,!(!t.href||!o||"map"!==i.nodeName.toLowerCase())&&(!!(n=a("img[usemap=#"+o+"]")[0])&&r(n))):(/input|select|textarea|button|object/.test(s)?!t.disabled:"a"===s&&t.href||e)&&r(t)}function r(t){return a.expr.filters.visible(t)&&!a(t).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var t,e,i=0,n=/^ui-id-\d+$/;a.ui=a.ui||{},a.extend(a.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({focus:(t=a.fn.focus,function(e,i){return"number"==typeof e?this.each(function(){var t=this;setTimeout(function(){a(t).focus(),i&&i.call(t)},e)}):t.apply(this,arguments)}),scrollParent:function(){var t;return t=a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?a(document):t},zIndex:function(t){if(t!==l)return this.css("zIndex",t);if(this.length)for(var e,i,o=a(this[0]);o.length&&o[0]!==document;){if(("absolute"===(e=o.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(o.css("zIndex"),10),!isNaN(i)&&0!==i))return i;o=o.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++i)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(e){return function(t){return!!a.data(t,e)}}):function(t,e,i){return!!a.data(t,i[3])},focusable:function(t){return o(t,!isNaN(a.attr(t,"tabindex")))},tabbable:function(t){var e=a.attr(t,"tabindex"),i=isNaN(e);return(i||0<=e)&&o(t,!i)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(t,i){function o(t,e,i,o){return a.each(n,function(){e-=parseFloat(a.css(t,"padding"+this))||0,i&&(e-=parseFloat(a.css(t,"border"+this+"Width"))||0),o&&(e-=parseFloat(a.css(t,"margin"+this))||0)}),e}var n="Width"===i?["Left","Right"]:["Top","Bottom"],s=i.toLowerCase(),r={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+i]=function(t){return t===l?r["inner"+i].call(this):this.each(function(){a(this).css(s,o(this,t)+"px")})},a.fn["outer"+i]=function(t,e){return"number"!=typeof t?r["outer"+i].call(this,t):this.each(function(){a(this).css(s,o(this,t,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=(e=a.fn.removeData,function(t){return arguments.length?e.call(this,a.camelCase(t)):e.call(this)})),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.support.selectstart="onselectstart"in document.createElement("div"),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.extend(a.ui,{plugin:{add:function(t,e,i){var o,n=a.ui[t].prototype;for(o in i)n.plugins[o]=n.plugins[o]||[],n.plugins[o].push([e,i[o]])},call:function(t,e,i){var o,n=t.plugins[e];if(n&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(o=0;o<n.length;o++)t.options[n[o][0]]&&n[o][1].apply(t.element,i)}},hasScroll:function(t,e){if("hidden"===a(t).css("overflow"))return!1;var i=e&&"left"===e?"scrollLeft":"scrollTop",o=!1;return 0<t[i]||(t[i]=1,o=0<t[i],t[i]=0,o)}})}(jQuery),function(u,a){var i=0,l=Array.prototype.slice,n=u.cleanData;u.cleanData=function(t){for(var e,i=0;null!=(e=t[i]);i++)try{u(e).triggerHandler("remove")}catch(o){}n(t)},u.widget=function(t,i,e){var o,n,s,r,a={},l=t.split(".")[0];t=t.split(".")[1],o=l+"-"+t,e||(e=i,i=u.Widget),u.expr[":"][o.toLowerCase()]=function(t){return!!u.data(t,o)},u[l]=u[l]||{},n=u[l][t],s=u[l][t]=function(t,e){if(!this._createWidget)return new s(t,e);arguments.length&&this._createWidget(t,e)},u.extend(s,n,{version:e.version,_proto:u.extend({},e),_childConstructors:[]}),(r=new i).options=u.widget.extend({},r.options),u.each(e,function(e,o){var n,s;u.isFunction(o)?a[e]=(n=function(){return i.prototype[e].apply(this,arguments)},s=function(t){return i.prototype[e].apply(this,t)},function(){var t,e=this._super,i=this._superApply;return this._super=n,this._superApply=s,t=o.apply(this,arguments),this._super=e,this._superApply=i,t}):a[e]=o}),s.prototype=u.widget.extend(r,{widgetEventPrefix:n&&r.widgetEventPrefix||t},a,{constructor:s,namespace:l,widgetName:t,widgetFullName:o}),n?(u.each(n._childConstructors,function(t,e){var i=e.prototype;u.widget(i.namespace+"."+i.widgetName,s,e._proto)}),delete n._childConstructors):i._childConstructors.push(s),u.widget.bridge(t,s)},u.widget.extend=function(t){for(var e,i,o=l.call(arguments,1),n=0,s=o.length;n<s;n++)for(e in o[n])i=o[n][e],o[n].hasOwnProperty(e)&&i!==a&&(u.isPlainObject(i)?t[e]=u.isPlainObject(t[e])?u.widget.extend({},t[e],i):u.widget.extend({},i):t[e]=i);return t},u.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;u.fn[s]=function(i){var t="string"==typeof i,o=l.call(arguments,1),n=this;return i=!t&&o.length?u.widget.extend.apply(null,[i].concat(o)):i,t?this.each(function(){var t,e=u.data(this,r);return e?u.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,o))!==e&&t!==a?(n=t&&t.jquery?n.pushStack(t.get()):t,!1):void 0:u.error("no such method '"+i+"' for "+s+" widget instance"):u.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):this.each(function(){var t=u.data(this,r);t?t.option(i||{})._init():u.data(this,r,new e(i,this))}),n}},u.Widget=function(){},u.Widget._childConstructors=[],u.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=u(e||this.defaultElement||this)[0],this.element=u(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=u.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=u(),this.hoverable=u(),this.focusable=u(),e!==this&&(u.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=u(e.style?e.ownerDocument:e.document||e),this.window=u(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:u.noop,_getCreateEventData:u.noop,_create:u.noop,_init:u.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(u.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:u.noop,widget:function(){return this.element},option:function(t,e){var i,o,n,s=t;if(0===arguments.length)return u.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(o=s[t]=u.widget.extend({},this.options[t]),n=0;n<i.length-1;n++)o[i[n]]=o[i[n]]||{},o=o[i[n]];if(t=i.pop(),1===arguments.length)return o[t]===a?null:o[t];o[t]=e}else{if(1===arguments.length)return this.options[t]===a?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(r,a,t){var l,h=this;"boolean"!=typeof r&&(t=a,a=r,r=!1),t?(a=l=u(a),this.bindings=this.bindings.add(a)):(t=a,a=this.element,l=this.widget()),u.each(t,function(t,e){function i(){if(r||!0!==h.options.disabled&&!u(this).hasClass("ui-state-disabled"))return("string"==typeof e?h[e]:e).apply(h,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||u.guid++);var o=t.match(/^(\w+)\s*(.*)$/),n=o[1]+h.eventNamespace,s=o[2];s?l.delegate(s,n,i):a.bind(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?o[t]:t).apply(o,arguments)}var o=this;return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){u(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){u(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){u(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){u(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var o,n,s=this.options[t];if(i=i||{},(e=u.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],n=e.originalEvent)for(o in n)o in e||(e[o]=n[o]);return this.element.trigger(e,i),!(u.isFunction(s)&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},u.each({show:"fadeIn",hide:"fadeOut"},function(s,r){u.Widget.prototype["_"+s]=function(e,t,i){"string"==typeof t&&(t={effect:t});var o,n=t?!0===t||"number"==typeof t?r:t.effect||r:s;"number"==typeof(t=t||{})&&(t={duration:t}),o=!u.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),o&&u.effects&&u.effects.effect[n]?e[s](t):n!==s&&e[n]?e[n](t.duration,t.easing,i):e.queue(function(t){u(this)[s](),i&&i.call(e[0]),t()})}})}(jQuery),function(x,n){function W(t,e,i){return[parseFloat(t[0])*(h.test(t[0])?e/100:1),parseFloat(t[1])*(h.test(t[1])?i/100:1)]}function C(t,e){return parseInt(x.css(t,e),10)||0}function e(t){var e=t[0];return 9===e.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:x.isWindow(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}x.ui=x.ui||{};var s,T=Math.max,E=Math.abs,N=Math.round,o=/left|center|right/,r=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,h=/%$/,i=x.fn.position;x.position={scrollbarWidth:function(){if(s!==n)return s;var t,e,i=x("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=i.children()[0];return x("body").append(i),t=o.offsetWidth,i.css("overflow","scroll"),t===(e=o.offsetWidth)&&(e=i[0].clientWidth),i.remove(),s=t-e},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),o="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:o?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=x.isWindow(e[0]);return{element:e,isWindow:i,isDocument:!!e[0]&&9===e[0].nodeType,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:i?e.width():e.outerWidth(),height:i?e.height():e.outerHeight()}}},x.fn.position=function(c){if(!c||!c.of)return i.apply(this,arguments);c=x.extend({},c);var d,f,p,g,m,t,v=x(c.of),b=x.position.getWithinInfo(c.within),w=x.position.getScrollInfo(b),y=(c.collision||"flip").split(" "),_={};return t=e(v),v[0].preventDefault&&(c.at="left top"),f=t.width,p=t.height,g=t.offset,m=x.extend({},g),x.each(["my","at"],function(){var t,e,i=(c[this]||"").split(" ");1===i.length&&(i=o.test(i[0])?i.concat(["center"]):r.test(i[0])?["center"].concat(i):["center","center"]),i[0]=o.test(i[0])?i[0]:"center",i[1]=r.test(i[1])?i[1]:"center",t=a.exec(i[0]),e=a.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],c[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===y.length&&(y[1]=y[0]),"right"===c.at[0]?m.left+=f:"center"===c.at[0]&&(m.left+=f/2),"bottom"===c.at[1]?m.top+=p:"center"===c.at[1]&&(m.top+=p/2),d=W(_.at,f,p),m.left+=d[0],m.top+=d[1],this.each(function(){var i,t,r=x(this),a=r.outerWidth(),l=r.outerHeight(),e=C(this,"marginLeft"),o=C(this,"marginTop"),n=a+e+C(this,"marginRight")+w.width,s=l+o+C(this,"marginBottom")+w.height,h=x.extend({},m),u=W(_.my,r.outerWidth(),r.outerHeight());"right"===c.my[0]?h.left-=a:"center"===c.my[0]&&(h.left-=a/2),"bottom"===c.my[1]?h.top-=l:"center"===c.my[1]&&(h.top-=l/2),h.left+=u[0],h.top+=u[1],x.support.offsetFractions||(h.left=N(h.left),h.top=N(h.top)),i={marginLeft:e,marginTop:o},x.each(["left","top"],function(t,e){x.ui.position[y[t]]&&x.ui.position[y[t]][e](h,{targetWidth:f,targetHeight:p,elemWidth:a,elemHeight:l,collisionPosition:i,collisionWidth:n,collisionHeight:s,offset:[d[0]+u[0],d[1]+u[1]],my:c.my,at:c.at,within:b,elem:r})}),c.using&&(t=function(t){var e=g.left-h.left,i=e+f-a,o=g.top-h.top,n=o+p-l,s={target:{element:v,left:g.left,top:g.top,width:f,height:p},element:{element:r,left:h.left,top:h.top,width:a,height:l},horizontal:i<0?"left":0<e?"right":"center",vertical:n<0?"top":0<o?"bottom":"middle"};f<a&&E(e+i)<f&&(s.horizontal="center"),p<l&&E(o+n)<p&&(s.vertical="middle"),T(E(e),E(i))>T(E(o),E(n))?s.important="horizontal":s.important="vertical",c.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})},x.ui.position={fit:{left:function(t,e){var i,o=e.within,n=o.isWindow?o.scrollLeft:o.offset.left,s=o.width,r=t.left-e.collisionPosition.marginLeft,a=n-r,l=r+e.collisionWidth-s-n;e.collisionWidth>s?0<a&&l<=0?(i=t.left+a+e.collisionWidth-s-n,t.left+=a-i):t.left=0<l&&a<=0?n:l<a?n+s-e.collisionWidth:n:0<a?t.left+=a:0<l?t.left-=l:t.left=T(t.left-r,t.left)},top:function(t,e){var i,o=e.within,n=o.isWindow?o.scrollTop:o.offset.top,s=e.within.height,r=t.top-e.collisionPosition.marginTop,a=n-r,l=r+e.collisionHeight-s-n;e.collisionHeight>s?0<a&&l<=0?(i=t.top+a+e.collisionHeight-s-n,t.top+=a-i):t.top=0<l&&a<=0?n:l<a?n+s-e.collisionHeight:n:0<a?t.top+=a:0<l?t.top-=l:t.top=T(t.top-r,t.top)}},flip:{left:function(t,e){var i,o,n=e.within,s=n.offset.left+n.scrollLeft,r=n.width,a=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,h=l-a,u=l+e.collisionWidth-r-a,c="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,d="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];h<0?((i=t.left+c+d+f+e.collisionWidth-r-s)<0||i<E(h))&&(t.left+=c+d+f):0<u&&(0<(o=t.left-e.collisionPosition.marginLeft+c+d+f-a)||E(o)<u)&&(t.left+=c+d+f)},top:function(t,e){var i,o,n=e.within,s=n.offset.top+n.scrollTop,r=n.height,a=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,h=l-a,u=l+e.collisionHeight-r-a,c="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,d="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,f=-2*e.offset[1];h<0?(o=t.top+c+d+f+e.collisionHeight-r-s,t.top+c+d+f>h&&(o<0||o<E(h))&&(t.top+=c+d+f)):0<u&&(i=t.top-e.collisionPosition.marginTop+c+d+f-a,t.top+c+d+f>u&&(0<i||E(i)<u)&&(t.top+=c+d+f))}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},function(){var t,e,i,o,n,s=document.getElementsByTagName("body")[0],r=document.createElement("div");for(n in t=document.createElement(s?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},s&&x.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"}),i)t.style[n]=i[n];t.appendChild(r),(e=s||document.documentElement).insertBefore(t,e.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",o=x(r).offset().left,x.support.offsetFractions=10<o&&o<11,t.innerHTML="",e.removeChild(t)}()}(jQuery),function(l){function h(t,e){var i=(t.attr("aria-describedby")||"").split(/\s+/);i.push(e),t.data("ui-tooltip-id",e).attr("aria-describedby",l.trim(i.join(" ")))}function n(t){var e=t.data("ui-tooltip-id"),i=(t.attr("aria-describedby")||"").split(/\s+/),o=l.inArray(e,i);-1!==o&&i.splice(o,1),t.removeData("ui-tooltip-id"),(i=l.trim(i.join(" ")))?t.attr("aria-describedby",i):t.removeAttr("aria-describedby")}var o=0;l.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var t=l(this).attr("title")||"";return l("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(t,e){var i=this;if("disabled"===t)return this[e?"_disable":"_enable"](),void(this.options[t]=e);this._super(t,e),"content"===t&&l.each(this.tooltips,function(t,e){i._updateContent(e)})},_disable:function(){var o=this;l.each(this.tooltips,function(t,e){var i=l.Event("blur");i.target=i.currentTarget=e[0],o.close(i,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=l(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=l(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,e=l(t?t.target:this.element).closest(this.options.items);e.length&&!e.data("ui-tooltip-id")&&(e.attr("title")&&e.data("ui-tooltip-title",e.attr("title")),e.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&e.parents().each(function(){var t,e=l(this);e.data("ui-tooltip-open")&&((t=l.Event("blur")).target=t.currentTarget=this,i.close(t,!0)),e.attr("title")&&(e.uniqueId(),i.parents[this.id]={element:this,title:e.attr("title")},e.attr("title",""))}),this._updateContent(e,t))},_updateContent:function(e,i){var t,o=this.options.content,n=this,s=i?i.type:null;if("string"==typeof o)return this._open(i,e,o);(t=o.call(e[0],function(t){e.data("ui-tooltip-open")&&n._delay(function(){i&&(i.type=s),this._open(i,e,t)})}))&&this._open(i,e,t)},_open:function(t,i,e){function o(t){a.of=t,n.is(":hidden")||n.position(a)}var n,s,r,a=l.extend({},this.options.position);e&&((n=this._find(i)).length?n.find(".ui-tooltip-content").html(e):(i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),n=this._tooltip(i),h(i,n.attr("id")),n.find(".ui-tooltip-content").html(e),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:o}),o(t)):n.position(l.extend({of:i},this.options.position)),n.hide(),this._show(n,this.options.show),this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){n.is(":visible")&&(o(a.of),clearInterval(r))},l.fx.interval)),this._trigger("open",t,{tooltip:n}),s={keyup:function(t){if(t.keyCode===l.ui.keyCode.ESCAPE){var e=l.Event(t);e.currentTarget=i[0],this.close(e,!0)}},remove:function(){this._removeTooltip(n)}},t&&"mouseover"!==t.type||(s.mouseleave="close"),t&&"focusin"!==t.type||(s.focusout="close"),this._on(!0,i,s)))},close:function(t){var i=this,e=l(t?t.currentTarget:this.element),o=this._find(e);this.closing||(clearInterval(this.delayedShow),e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title")),n(e),o.stop(!0),this._hide(o,this.options.hide,function(){i._removeTooltip(l(this))}),e.removeData("ui-tooltip-open"),this._off(e,"mouseleave focusout keyup"),e[0]!==this.element[0]&&this._off(e,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&l.each(this.parents,function(t,e){l(e.element).attr("title",e.title),delete i.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:o}),this.closing=!1)},_tooltip:function(t){var e="ui-tooltip-"+o++,i=l("<div>").attr({id:e,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return l("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[e]=t,i},_find:function(t){var e=t.data("ui-tooltip-id");return e?l("#"+e):l()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var o=this;l.each(this.tooltips,function(t,e){var i=l.Event("blur");i.target=i.currentTarget=e[0],o.close(i,!0),l("#"+t).remove(),e.data("ui-tooltip-title")&&(e.attr("title",e.data("ui-tooltip-title")),e.removeData("ui-tooltip-title"))})}})}(jQuery);
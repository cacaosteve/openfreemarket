!function(a,l){function s(t,e){var i,s,o,n=t.nodeName.toLowerCase();return"area"===n?(s=(i=t.parentNode).name,!(!t.href||!s||"map"!==i.nodeName.toLowerCase())&&(!!(o=a("img[usemap=#"+s+"]")[0])&&r(o))):(/input|select|textarea|button|object/.test(n)?!t.disabled:"a"===n&&t.href||e)&&r(t)}function r(t){return a.expr.filters.visible(t)&&!a(t).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var t,e,i=0,o=/^ui-id-\d+$/;a.ui=a.ui||{},a.extend(a.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({focus:(t=a.fn.focus,function(e,i){return"number"==typeof e?this.each(function(){var t=this;setTimeout(function(){a(t).focus(),i&&i.call(t)},e)}):t.apply(this,arguments)}),scrollParent:function(){var t;return t=a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?a(document):t},zIndex:function(t){if(t!==l)return this.css("zIndex",t);if(this.length)for(var e,i,s=a(this[0]);s.length&&s[0]!==document;){if(("absolute"===(e=s.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(s.css("zIndex"),10),!isNaN(i)&&0!==i))return i;s=s.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++i)})},removeUniqueId:function(){return this.each(function(){o.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(e){return function(t){return!!a.data(t,e)}}):function(t,e,i){return!!a.data(t,i[3])},focusable:function(t){return s(t,!isNaN(a.attr(t,"tabindex")))},tabbable:function(t){var e=a.attr(t,"tabindex"),i=isNaN(e);return(i||0<=e)&&s(t,!i)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(t,i){function s(t,e,i,s){return a.each(o,function(){e-=parseFloat(a.css(t,"padding"+this))||0,i&&(e-=parseFloat(a.css(t,"border"+this+"Width"))||0),s&&(e-=parseFloat(a.css(t,"margin"+this))||0)}),e}var o="Width"===i?["Left","Right"]:["Top","Bottom"],n=i.toLowerCase(),r={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+i]=function(t){return t===l?r["inner"+i].call(this):this.each(function(){a(this).css(n,s(this,t)+"px")})},a.fn["outer"+i]=function(t,e){return"number"!=typeof t?r["outer"+i].call(this,t):this.each(function(){a(this).css(n,s(this,t,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=(e=a.fn.removeData,function(t){return arguments.length?e.call(this,a.camelCase(t)):e.call(this)})),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.support.selectstart="onselectstart"in document.createElement("div"),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.extend(a.ui,{plugin:{add:function(t,e,i){var s,o=a.ui[t].prototype;for(s in i)o.plugins[s]=o.plugins[s]||[],o.plugins[s].push([e,i[s]])},call:function(t,e,i){var s,o=t.plugins[e];if(o&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;s<o.length;s++)t.options[o[s][0]]&&o[s][1].apply(t.element,i)}},hasScroll:function(t,e){if("hidden"===a(t).css("overflow"))return!1;var i=e&&"left"===e?"scrollLeft":"scrollTop",s=!1;return 0<t[i]||(t[i]=1,s=0<t[i],t[i]=0,s)}})}(jQuery),function(c,a){var i=0,l=Array.prototype.slice,o=c.cleanData;c.cleanData=function(t){for(var e,i=0;null!=(e=t[i]);i++)try{c(e).triggerHandler("remove")}catch(s){}o(t)},c.widget=function(t,i,e){var s,o,n,r,a={},l=t.split(".")[0];t=t.split(".")[1],s=l+"-"+t,e||(e=i,i=c.Widget),c.expr[":"][s.toLowerCase()]=function(t){return!!c.data(t,s)},c[l]=c[l]||{},o=c[l][t],n=c[l][t]=function(t,e){if(!this._createWidget)return new n(t,e);arguments.length&&this._createWidget(t,e)},c.extend(n,o,{version:e.version,_proto:c.extend({},e),_childConstructors:[]}),(r=new i).options=c.widget.extend({},r.options),c.each(e,function(e,s){var o,n;c.isFunction(s)?a[e]=(o=function(){return i.prototype[e].apply(this,arguments)},n=function(t){return i.prototype[e].apply(this,t)},function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=n,t=s.apply(this,arguments),this._super=e,this._superApply=i,t}):a[e]=s}),n.prototype=c.widget.extend(r,{widgetEventPrefix:o&&r.widgetEventPrefix||t},a,{constructor:n,namespace:l,widgetName:t,widgetFullName:s}),o?(c.each(o._childConstructors,function(t,e){var i=e.prototype;c.widget(i.namespace+"."+i.widgetName,n,e._proto)}),delete o._childConstructors):i._childConstructors.push(n),c.widget.bridge(t,n)},c.widget.extend=function(t){for(var e,i,s=l.call(arguments,1),o=0,n=s.length;o<n;o++)for(e in s[o])i=s[o][e],s[o].hasOwnProperty(e)&&i!==a&&(c.isPlainObject(i)?t[e]=c.isPlainObject(t[e])?c.widget.extend({},t[e],i):c.widget.extend({},i):t[e]=i);return t},c.widget.bridge=function(n,e){var r=e.prototype.widgetFullName||n;c.fn[n]=function(i){var t="string"==typeof i,s=l.call(arguments,1),o=this;return i=!t&&s.length?c.widget.extend.apply(null,[i].concat(s)):i,t?this.each(function(){var t,e=c.data(this,r);return e?c.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,s))!==e&&t!==a?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:c.error("no such method '"+i+"' for "+n+" widget instance"):c.error("cannot call methods on "+n+" prior to initialization; attempted to call method '"+i+"'")}):this.each(function(){var t=c.data(this,r);t?t.option(i||{})._init():c.data(this,r,new e(i,this))}),o}},c.Widget=function(){},c.Widget._childConstructors=[],c.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=c(e||this.defaultElement||this)[0],this.element=c(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=c.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=c(),this.hoverable=c(),this.focusable=c(),e!==this&&(c.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=c(e.style?e.ownerDocument:e.document||e),this.window=c(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:c.noop,_getCreateEventData:c.noop,_create:c.noop,_init:c.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:c.noop,widget:function(){return this.element},option:function(t,e){var i,s,o,n=t;if(0===arguments.length)return c.widget.extend({},this.options);if("string"==typeof t)if(n={},t=(i=t.split(".")).shift(),i.length){for(s=n[t]=c.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)s[i[o]]=s[i[o]]||{},s=s[i[o]];if(t=i.pop(),1===arguments.length)return s[t]===a?null:s[t];s[t]=e}else{if(1===arguments.length)return this.options[t]===a?null:this.options[t];n[t]=e}return this._setOptions(n),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(r,a,t){var l,h=this;"boolean"!=typeof r&&(t=a,a=r,r=!1),t?(a=l=c(a),this.bindings=this.bindings.add(a)):(t=a,a=this.element,l=this.widget()),c.each(t,function(t,e){function i(){if(r||!0!==h.options.disabled&&!c(this).hasClass("ui-state-disabled"))return("string"==typeof e?h[e]:e).apply(h,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||c.guid++);var s=t.match(/^(\w+)\s*(.*)$/),o=s[1]+h.eventNamespace,n=s[2];n?l.delegate(n,o,i):a.bind(o,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){c(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){c(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){c(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){c(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var s,o,n=this.options[t];if(i=i||{},(e=c.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(s in o)s in e||(e[s]=o[s]);return this.element.trigger(e,i),!(c.isFunction(n)&&!1===n.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},c.each({show:"fadeIn",hide:"fadeOut"},function(n,r){c.Widget.prototype["_"+n]=function(e,t,i){"string"==typeof t&&(t={effect:t});var s,o=t?!0===t||"number"==typeof t?r:t.effect||r:n;"number"==typeof(t=t||{})&&(t={duration:t}),s=!c.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),s&&c.effects&&c.effects.effect[o]?e[n](t):o!==n&&e[o]?e[o](t.duration,t.easing,i):e.queue(function(t){c(this)[n](),i&&i.call(e[0]),t()})}})}(jQuery),function(o){var n=!1;o(document).mouseup(function(){n=!1}),o.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(t){if(!0===o.data(t.target,e.widgetName+".preventClickEvent"))return o.removeData(t.target,e.widgetName+".preventClickEvent"),t.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&o(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!n){this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var e=this,i=1===t.which,s=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&o(t.target).closest(this.options.cancel).length;return!(i&&!s&&this._mouseCapture(t))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?(t.preventDefault(),!0):(!0===o.data(t.target,this.widgetName+".preventClickEvent")&&o.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return e._mouseMove(t)},this._mouseUpDelegate=function(t){return e._mouseUp(t)},o(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0))}},_mouseMove:function(t){return o.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return o(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&o.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(_){_.widget("ui.draggable",_.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var e=this.options;return!(this.helper||e.disabled||0<_(t.target).closest(".ui-resizable-handle").length)&&(this.handle=this._getHandle(t),!!this.handle&&(_(!0===e.iframeFix?"iframe":e.iframeFix).each(function(){_("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(_(this).offset()).appendTo("body")}),!0))},_mouseStart:function(t){var e=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),_.ui.ddmanager&&(_.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,_.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this._setContainment(),!1===this._trigger("start",t)?(this._clear(),!1):(this._cacheHelperProportions(),_.ui.ddmanager&&!e.dropBehaviour&&_.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),_.ui.ddmanager&&_.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,e){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!e){var i=this._uiHash();if(!1===this._trigger("drag",t,i))return this._mouseUp({}),!1;this.position=i.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),_.ui.ddmanager&&_.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var e=this,i=!1;return _.ui.ddmanager&&!this.options.dropBehaviour&&(i=_.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1),("original"!==this.options.helper||_.contains(this.element[0].ownerDocument,this.element[0]))&&("invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||!0===this.options.revert||_.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?_(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==e._trigger("stop",t)&&e._clear()}):!1!==this._trigger("stop",t)&&this._clear()),!1},_mouseUp:function(t){return _("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),_.ui.ddmanager&&_.ui.ddmanager.dragStop(this,t),_.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return!this.options.handle||!!_(t.target).closest(this.element.find(this.options.handle)).length},_createHelper:function(t){var e=this.options,i=_.isFunction(e.helper)?_(e.helper.apply(this.element[0],[t])):"clone"===e.helper?this.element.clone().removeAttr("id"):this.element;return i.parents("body").length||i.appendTo("parent"===e.appendTo?this.element[0].parentNode:e.appendTo),i[0]===this.element[0]||/(fixed|absolute)/.test(i.css("position"))||i.css("position","absolute"),i},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),_.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&_.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&_.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i,s=this.options;s.containment?"window"!==s.containment?"document"!==s.containment?s.containment.constructor!==Array?("parent"===s.containment&&(s.containment=this.helper[0].parentNode),(i=(e=_(s.containment))[0])&&(t="hidden"!==e.css("overflow"),this.containment=[(parseInt(e.css("borderLeftWidth"),10)||0)+(parseInt(e.css("paddingLeft"),10)||0),(parseInt(e.css("borderTopWidth"),10)||0)+(parseInt(e.css("paddingTop"),10)||0),(t?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(e.css("borderRightWidth"),10)||0)-(parseInt(e.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(e.css("borderBottomWidth"),10)||0)-(parseInt(e.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=e)):this.containment=s.containment:this.containment=[0,0,_(document).width()-this.helperProportions.width-this.margins.left,(_(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[_(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,_(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,_(window).scrollLeft()+_(window).width()-this.helperProportions.width-this.margins.left,_(window).scrollTop()+(_(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&_.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:s.scrollTop(),left:s.scrollLeft()}),{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*i}},_generatePosition:function(t){var e,i,s,o,n=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&_.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=t.pageX,l=t.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(i=this.relative_container.offset(),e=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):e=this.containment,t.pageX-this.offset.click.left<e[0]&&(a=e[0]+this.offset.click.left),t.pageY-this.offset.click.top<e[1]&&(l=e[1]+this.offset.click.top),t.pageX-this.offset.click.left>e[2]&&(a=e[2]+this.offset.click.left),t.pageY-this.offset.click.top>e[3]&&(l=e[3]+this.offset.click.top)),n.grid&&(s=n.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY,l=e?s-this.offset.click.top>=e[1]||s-this.offset.click.top>e[3]?s:s-this.offset.click.top>=e[1]?s-n.grid[1]:s+n.grid[1]:s,o=n.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX,a=e?o-this.offset.click.left>=e[0]||o-this.offset.click.left>e[2]?o:o-this.offset.click.left>=e[0]?o-n.grid[0]:o+n.grid[0]:o)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,e,i){return i=i||this._uiHash(),_.ui.plugin.call(this,t,[e,i]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),_.Widget.prototype._trigger.call(this,t,e,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),_.ui.plugin.add("draggable","connectToSortable",{start:function(e,t){var i=_(this).data("ui-draggable"),s=i.options,o=_.extend({},t,{item:i.element});i.sortables=[],_(s.connectToSortable).each(function(){var t=_.data(this,"ui-sortable");t&&!t.options.disabled&&(i.sortables.push({instance:t,shouldRevert:t.options.revert}),t.refreshPositions(),t._trigger("activate",e,o))})},stop:function(t,e){var i=_(this).data("ui-draggable"),s=_.extend({},e,{item:i.element});_.each(i.sortables,function(){this.instance.isOver?(this.instance.isOver=0,i.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===i.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,s))})},drag:function(i,s){var o=_(this).data("ui-draggable"),n=this;_.each(o.sortables,function(){var t=!1,e=this;this.instance.positionAbs=o.positionAbs,this.instance.helperProportions=o.helperProportions,this.instance.offset.click=o.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(t=!0,_.each(o.sortables,function(){return this.instance.positionAbs=o.positionAbs,this.instance.helperProportions=o.helperProportions,this.instance.offset.click=o.offset.click,this!==e&&this.instance._intersectsWith(this.instance.containerCache)&&_.contains(e.instance.element[0],this.instance.element[0])&&(t=!1),t})),t?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=_(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return s.helper[0]},i.target=this.instance.currentItem[0],this.instance._mouseCapture(i,!0),this.instance._mouseStart(i,!0,!0),this.instance.offset.click.top=o.offset.click.top,this.instance.offset.click.left=o.offset.click.left,this.instance.offset.parent.left-=o.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=o.offset.parent.top-this.instance.offset.parent.top,o._trigger("toSortable",i),o.dropped=this.instance.element,o.currentItem=o.element,this.instance.fromOutside=o),this.instance.currentItem&&this.instance._mouseDrag(i)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",i,this.instance._uiHash(this.instance)),this.instance._mouseStop(i,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),o._trigger("fromSortable",i),o.dropped=!1)})}}),_.ui.plugin.add("draggable","cursor",{start:function(){var t=_("body"),e=_(this).data("ui-draggable").options;t.css("cursor")&&(e._cursor=t.css("cursor")),t.css("cursor",e.cursor)},stop:function(){var t=_(this).data("ui-draggable").options;t._cursor&&_("body").css("cursor",t._cursor)}}),_.ui.plugin.add("draggable","opacity",{start:function(t,e){var i=_(e.helper),s=_(this).data("ui-draggable").options;i.css("opacity")&&(s._opacity=i.css("opacity")),i.css("opacity",s.opacity)},stop:function(t,e){var i=_(this).data("ui-draggable").options;i._opacity&&_(e.helper).css("opacity",i._opacity)}}),_.ui.plugin.add("draggable","scroll",{start:function(){var t=_(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var e=_(this).data("ui-draggable"),i=e.options,s=!1;e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName?(i.axis&&"x"===i.axis||(e.overflowOffset.top+e.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?e.scrollParent[0].scrollTop=s=e.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-e.overflowOffset.top<i.scrollSensitivity&&(e.scrollParent[0].scrollTop=s=e.scrollParent[0].scrollTop-i.scrollSpeed)),i.axis&&"y"===i.axis||(e.overflowOffset.left+e.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?e.scrollParent[0].scrollLeft=s=e.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-e.overflowOffset.left<i.scrollSensitivity&&(e.scrollParent[0].scrollLeft=s=e.scrollParent[0].scrollLeft-i.scrollSpeed))):(i.axis&&"x"===i.axis||(t.pageY-_(document).scrollTop()<i.scrollSensitivity?s=_(document).scrollTop(_(document).scrollTop()-i.scrollSpeed):_(window).height()-(t.pageY-_(document).scrollTop())<i.scrollSensitivity&&(s=_(document).scrollTop(_(document).scrollTop()+i.scrollSpeed))),i.axis&&"y"===i.axis||(t.pageX-_(document).scrollLeft()<i.scrollSensitivity?s=_(document).scrollLeft(_(document).scrollLeft()-i.scrollSpeed):_(window).width()-(t.pageX-_(document).scrollLeft())<i.scrollSensitivity&&(s=_(document).scrollLeft(_(document).scrollLeft()+i.scrollSpeed)))),!1!==s&&_.ui.ddmanager&&!i.dropBehaviour&&_.ui.ddmanager.prepareOffsets(e,t)}}),_.ui.plugin.add("draggable","snap",{start:function(){var i=_(this).data("ui-draggable"),t=i.options;i.snapElements=[],_(t.snap.constructor!==String?t.snap.items||":data(ui-draggable)":t.snap).each(function(){var t=_(this),e=t.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:e.top,left:e.left})})},drag:function(t,e){var i,s,o,n,r,a,l,h,c,p,u=_(this).data("ui-draggable"),d=u.options,f=d.snapTolerance,g=e.offset.left,m=g+u.helperProportions.width,v=e.offset.top,b=v+u.helperProportions.height;for(c=u.snapElements.length-1;0<=c;c--)a=(r=u.snapElements[c].left)+u.snapElements[c].width,h=(l=u.snapElements[c].top)+u.snapElements[c].height,m<r-f||a+f<g||b<l-f||h+f<v||!_.contains(u.snapElements[c].item.ownerDocument,u.snapElements[c].item)?(u.snapElements[c].snapping&&u.options.snap.release&&u.options.snap.release.call(u.element,t,_.extend(u._uiHash(),{snapItem:u.snapElements[c].item})),u.snapElements[c].snapping=!1):("inner"!==d.snapMode&&(i=Math.abs(l-b)<=f,s=Math.abs(h-v)<=f,o=Math.abs(r-m)<=f,n=Math.abs(a-g)<=f,i&&(e.position.top=u._convertPositionTo("relative",{top:l-u.helperProportions.height,left:0}).top-u.margins.top),s&&(e.position.top=u._convertPositionTo("relative",{top:h,left:0}).top-u.margins.top),o&&(e.position.left=u._convertPositionTo("relative",{top:0,left:r-u.helperProportions.width}).left-u.margins.left),n&&(e.position.left=u._convertPositionTo("relative",{top:0,left:a}).left-u.margins.left)),p=i||s||o||n,"outer"!==d.snapMode&&(i=Math.abs(l-v)<=f,s=Math.abs(h-b)<=f,o=Math.abs(r-g)<=f,n=Math.abs(a-m)<=f,i&&(e.position.top=u._convertPositionTo("relative",{top:l,left:0}).top-u.margins.top),s&&(e.position.top=u._convertPositionTo("relative",{top:h-u.helperProportions.height,left:0}).top-u.margins.top),o&&(e.position.left=u._convertPositionTo("relative",{top:0,left:r}).left-u.margins.left),n&&(e.position.left=u._convertPositionTo("relative",{top:0,left:a-u.helperProportions.width}).left-u.margins.left)),!u.snapElements[c].snapping&&(i||s||o||n||p)&&u.options.snap.snap&&u.options.snap.snap.call(u.element,t,_.extend(u._uiHash(),{snapItem:u.snapElements[c].item})),u.snapElements[c].snapping=i||s||o||n||p)}}),_.ui.plugin.add("draggable","stack",{start:function(){var e,t=this.data("ui-draggable").options,i=_.makeArray(_(t.stack)).sort(function(t,e){return(parseInt(_(t).css("zIndex"),10)||0)-(parseInt(_(e).css("zIndex"),10)||0)});i.length&&(e=parseInt(_(i[0]).css("zIndex"),10)||0,_(i).each(function(t){_(this).css("zIndex",e+t)}),this.css("zIndex",e+i.length))}}),_.ui.plugin.add("draggable","zIndex",{start:function(t,e){var i=_(e.helper),s=_(this).data("ui-draggable").options;i.css("zIndex")&&(s._zIndex=i.css("zIndex")),i.css("zIndex",s.zIndex)},stop:function(t,e){var i=_(this).data("ui-draggable").options;i._zIndex&&_(e.helper).css("zIndex",i._zIndex)}})}(jQuery),function(a){function u(t,e,i){return e<t&&t<e+i}a.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(i)?i:function(t){return t.is(i)},this.proportions=function(t){if(!arguments.length)return e||(e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight});e=t},a.ui.ddmanager.droppables[t.scope]=a.ui.ddmanager.droppables[t.scope]||[],a.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,e=a.ui.ddmanager.droppables[this.options.scope];t<e.length;t++)e[t]===this&&e.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,e){"accept"===t&&(this.accept=a.isFunction(e)?e:function(t){return t.is(e)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var e=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),e&&this._trigger("activate",t,
this.ui(e))},_deactivate:function(t){var e=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),e&&this._trigger("deactivate",t,this.ui(e))},_over:function(t){var e=a.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(e)))},_out:function(t){var e=a.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(e)))},_drop:function(t,e){var i=e||a.ui.ddmanager.current,s=!1;return!(!i||(i.currentItem||i.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=a.data(this,"ui-droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope===i.options.scope&&t.accept.call(t.element[0],i.currentItem||i.element)&&a.ui.intersect(i,a.extend(t,{offset:t.element.offset()}),t.options.tolerance))return!(s=!0)}),!s&&(!!this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(i)),this.element)))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),a.ui.intersect=function(t,e,i){if(!e.offset)return!1;var s,o=(t.positionAbs||t.position.absolute).left,n=(t.positionAbs||t.position.absolute).top,r=o+t.helperProportions.width,a=n+t.helperProportions.height,l=e.offset.left,h=e.offset.top,c=l+e.proportions().width,p=h+e.proportions().height;switch(i){case"fit":return l<=o&&r<=c&&h<=n&&a<=p;case"intersect":return l<o+t.helperProportions.width/2&&r-t.helperProportions.width/2<c&&h<n+t.helperProportions.height/2&&a-t.helperProportions.height/2<p;case"pointer":return s=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,u((t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,h,e.proportions().height)&&u(s,l,e.proportions().width);case"touch":return(h<=n&&n<=p||h<=a&&a<=p||n<h&&p<a)&&(l<=o&&o<=c||l<=r&&r<=c||o<l&&c<r);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,e){var i,s,o=a.ui.ddmanager.droppables[t.options.scope]||[],n=e?e.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();t:for(i=0;i<o.length;i++)if(!(o[i].options.disabled||t&&!o[i].accept.call(o[i].element[0],t.currentItem||t.element))){for(s=0;s<r.length;s++)if(r[s]===o[i].element[0]){o[i].proportions().height=0;continue t}o[i].visible="none"!==o[i].element.css("display"),o[i].visible&&("mousedown"===n&&o[i]._activate.call(o[i],e),o[i].offset=o[i].element.offset(),o[i].proportions({width:o[i].element[0].offsetWidth,height:o[i].element[0].offsetHeight}))}},drop:function(t,e){var i=!1;return a.each((a.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&a.ui.intersect(t,this,this.options.tolerance)&&(i=this._drop.call(this,e)||i),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,e)))}),i},dragStart:function(t,e){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||a.ui.ddmanager.prepareOffsets(t,e)})},drag:function(n,r){n.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(n,r),a.each(a.ui.ddmanager.droppables[n.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var t,e,i,s=a.ui.intersect(n,this,this.options.tolerance),o=!s&&this.isover?"isout":s&&!this.isover?"isover":null;o&&(this.options.greedy&&(e=this.options.scope,(i=this.element.parents(":data(ui-droppable)").filter(function(){return a.data(this,"ui-droppable").options.scope===e})).length&&((t=a.data(i[0],"ui-droppable")).greedyChild="isover"===o)),t&&"isover"===o&&(t.isover=!1,t.isout=!0,t._out.call(t,r)),this[o]=!0,this["isout"===o?"isover":"isout"]=!1,this["isover"===o?"_over":"_out"].call(this,r),t&&"isout"===o&&(t.isout=!1,t.isover=!0,t._over.call(t,r)))}})},dragStop:function(t,e){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||a.ui.ddmanager.prepareOffsets(t,e)}}}(jQuery);
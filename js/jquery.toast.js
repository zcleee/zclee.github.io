"function"!=typeof Object.create&&(Object.create=function(t){function o(){}return o.prototype=t,new o}),function(s,o){"use strict";var i={_positionClasses:["bottom-left","bottom-right","top-right","top-left","bottom-center","top-center","mid-center"],_defaultIcons:["success","error","info","warning"],init:function(t,o){this.prepareOptions(t,s.toast.options),this.process()},prepareOptions:function(t,o){var i={};"string"==typeof t||t instanceof Array?i.text=t:i=t,this.options=s.extend({},o,i)},process:function(){this.setup(),this.addToDom(),this.position(),this.bindToast(),this.animate()},setup:function(){var t="";if(this._toastEl=this._toastEl||s("<div></div>",{class:"jq-toast-single"}),t+='<span class="jq-toast-loader"></span>',this.options.allowToastClose&&(t+='<span class="close-jq-toast-single">&times;</span>'),this.options.text instanceof Array){this.options.heading&&(t+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),t+='<ul class="jq-toast-ul">';for(var o=0;o<this.options.text.length;o++)t+='<li class="jq-toast-li" id="jq-toast-item-'+o+'">'+this.options.text[o]+"</li>";t+="</ul>"}else this.options.heading&&(t+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),t+=this.options.text;this._toastEl.html(t),!1!==this.options.bgColor&&this._toastEl.css("background-color",this.options.bgColor),!1!==this.options.textColor&&this._toastEl.css("color",this.options.textColor),this.options.textAlign&&this._toastEl.css("text-align",this.options.textAlign),!1!==this.options.icon&&(this._toastEl.addClass("jq-has-icon"),-1!==s.inArray(this.options.icon,this._defaultIcons)&&this._toastEl.addClass("jq-icon-"+this.options.icon)),!1!==this.options.class&&this._toastEl.addClass(this.options.class)},position:function(){"string"==typeof this.options.position&&-1!==s.inArray(this.options.position,this._positionClasses)?"bottom-center"===this.options.position?this._container.css({left:s(o).outerWidth()/2-this._container.outerWidth()/2,bottom:20}):"top-center"===this.options.position?this._container.css({left:s(o).outerWidth()/2-this._container.outerWidth()/2,top:20}):"mid-center"===this.options.position?this._container.css({left:s(o).outerWidth()/2-this._container.outerWidth()/2,top:s(o).outerHeight()/2-this._container.outerHeight()/2}):this._container.addClass(this.options.position):"object"==typeof this.options.position?this._container.css({top:this.options.position.top?this.options.position.top:"auto",bottom:this.options.position.bottom?this.options.position.bottom:"auto",left:this.options.position.left?this.options.position.left:"auto",right:this.options.position.right?this.options.position.right:"auto"}):this._container.addClass("bottom-left")},bindToast:function(){var o=this;this._toastEl.on("afterShown",function(){o.processLoader()}),this._toastEl.find(".close-jq-toast-single").on("click",function(t){t.preventDefault(),"fade"===o.options.showHideTransition?(o._toastEl.trigger("beforeHide"),o._toastEl.fadeOut(function(){o._toastEl.trigger("afterHidden")})):"slide"===o.options.showHideTransition?(o._toastEl.trigger("beforeHide"),o._toastEl.slideUp(function(){o._toastEl.trigger("afterHidden")})):(o._toastEl.trigger("beforeHide"),o._toastEl.hide(function(){o._toastEl.trigger("afterHidden")}))}),"function"==typeof this.options.beforeShow&&this._toastEl.on("beforeShow",function(){o.options.beforeShow()}),"function"==typeof this.options.afterShown&&this._toastEl.on("afterShown",function(){o.options.afterShown()}),"function"==typeof this.options.beforeHide&&this._toastEl.on("beforeHide",function(){o.options.beforeHide()}),"function"==typeof this.options.afterHidden&&this._toastEl.on("afterHidden",function(){o.options.afterHidden()})},addToDom:function(){var t=s(".jq-toast-wrap");if(0===t.length?(t=s("<div></div>",{class:"jq-toast-wrap"}),s("body").append(t)):this.options.stack&&!isNaN(parseInt(this.options.stack,10))||t.empty(),t.find(".jq-toast-single:hidden").remove(),t.append(this._toastEl),this.options.stack&&!isNaN(parseInt(this.options.stack),10)){var o=t.find(".jq-toast-single").length-this.options.stack;0<o&&s(".jq-toast-wrap").find(".jq-toast-single").slice(0,o).remove()}this._container=t},canAutoHide:function(){return!1!==this.options.hideAfter&&!isNaN(parseInt(this.options.hideAfter,10))},processLoader:function(){if(!this.canAutoHide()||!1===this.options.loader)return!1;var t=this._toastEl.find(".jq-toast-loader"),o=(this.options.hideAfter-400)/1e3+"s",i=this.options.loaderBg,s=t.attr("style")||"";s=s.substring(0,s.indexOf("-webkit-transition")),s+="-webkit-transition: width "+o+" ease-in;                       -o-transition: width "+o+" ease-in;                       transition: width "+o+" ease-in;                       background-color: "+i+";",t.attr("style",s).addClass("jq-toast-loaded")},animate:function(){var t=this;if(this._toastEl.hide(),this._toastEl.trigger("beforeShow"),"fade"===this.options.showHideTransition.toLowerCase()?this._toastEl.fadeIn(function(){t._toastEl.trigger("afterShown")}):"slide"===this.options.showHideTransition.toLowerCase()?this._toastEl.slideDown(function(){t._toastEl.trigger("afterShown")}):this._toastEl.show(function(){t._toastEl.trigger("afterShown")}),this.canAutoHide()){t=this;o.setTimeout(function(){"fade"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.fadeOut(function(){t._toastEl.trigger("afterHidden")})):"slide"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.slideUp(function(){t._toastEl.trigger("afterHidden")})):(t._toastEl.trigger("beforeHide"),t._toastEl.hide(function(){t._toastEl.trigger("afterHidden")}))},this.options.hideAfter)}},reset:function(t){"all"===t?s(".jq-toast-wrap").remove():this._toastEl.remove()},update:function(t){this.prepareOptions(t,this.options),this.setup(),this.bindToast()}};s.toast=function(t){var o=Object.create(i);return o.init(t,this),{reset:function(t){o.reset(t)},update:function(t){o.update(t)}}},s.toast.options={text:"",heading:"",showHideTransition:"fade",allowToastClose:!0,hideAfter:3e3,loader:!0,loaderBg:"#9EC600",stack:5,position:"bottom-left",bgColor:!1,textColor:!1,textAlign:"left",icon:!1,beforeShow:function(){},afterShown:function(){},beforeHide:function(){},afterHidden:function(){}}}(jQuery,window,document);
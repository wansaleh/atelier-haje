(function(){/**
@license Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
 */
(function(){var $,t;$=this.jQuery||window.jQuery,t=$(window),$.fn.stick_in_parent=function(i){var o,s,e,n,r,c,l,a,p,u,f,d;for(null==i&&(i={}),d=i.sticky_class,c=i.inner_scrolling,f=i.recalc_every,u=i.parent,p=i.offset_top,a=i.spacer,e=i.bottoming,null==p&&(p=0),null==u&&(u=void 0),null==c&&(c=!0),null==d&&(d="is_stuck"),o=$(document),null==e&&(e=!0),n=function(i,s,n,r,l,h,g,k){var m,v,_,y,b,w,x,C,I,j,z,A;if(!i.data("sticky_kit")){if(i.data("sticky_kit",!0),b=o.height(),x=i.parent(),null!=u&&(x=x.closest(u)),!x.length)throw"failed to find stick parent";if(_=!1,m=!1,z=null!=a?a&&i.closest(a):$("<div />"),z&&z.css("position",i.css("position")),C=function(){var t,e,c;if(!k)return b=o.height(),t=parseInt(x.css("border-top-width"),10),e=parseInt(x.css("padding-top"),10),s=parseInt(x.css("padding-bottom"),10),n=x.offset().top+t+e,r=x.height(),_&&(_=!1,m=!1,null==a&&(i.insertAfter(z),z.detach()),i.css({position:"",top:"",width:"",bottom:""}).removeClass(d),c=!0),l=i.offset().top-(parseInt(i.css("margin-top"),10)||0)-p,h=i.outerHeight(!0),g=i.css("float"),z&&z.css({width:i.outerWidth(!0),height:h,display:i.css("display"),"vertical-align":i.css("vertical-align"),"float":g}),c?A():void 0},C(),h!==r)return y=void 0,w=p,j=f,A=function(){var u,v,I,A,Q,M;if(!k)return I=!1,null!=j&&(j-=1,0>=j&&(j=f,C(),I=!0)),I||o.height()===b||(C(),I=!0),A=t.scrollTop(),null!=y&&(v=A-y),y=A,_?(e&&(Q=A+h+w>r+n,m&&!Q&&(m=!1,i.css({position:"fixed",bottom:"",top:w}).trigger("sticky_kit:unbottom"))),l>A&&(_=!1,w=p,null==a&&("left"!==g&&"right"!==g||i.insertAfter(z),z.detach()),u={position:"",width:"",top:""},i.css(u).removeClass(d).trigger("sticky_kit:unstick")),c&&(M=t.height(),h+p>M&&(m||(w-=v,w=Math.max(M-h,w),w=Math.min(p,w),_&&i.css({top:w+"px"}))))):A>l&&(_=!0,u={position:"fixed",top:w},u.width="border-box"===i.css("box-sizing")?i.outerWidth()+"px":i.width()+"px",i.css(u).addClass(d),null==a&&(i.after(z),"left"!==g&&"right"!==g||z.append(i)),i.trigger("sticky_kit:stick")),_&&e&&(null==Q&&(Q=A+h+w>r+n),!m&&Q)?(m=!0,"static"===x.css("position")&&x.css({position:"relative"}),i.css({position:"absolute",bottom:s,top:"auto"}).trigger("sticky_kit:bottom")):void 0},I=function(){return C(),A()},v=function(){return k=!0,t.off("touchmove",A),t.off("scroll",A),t.off("resize",I),$(document.body).off("sticky_kit:recalc",I),i.off("sticky_kit:detach",v),i.removeData("sticky_kit"),i.css({position:"",bottom:"",top:"",width:""}),x.position("position",""),_?(null==a&&("left"!==g&&"right"!==g||i.insertAfter(z),z.remove()),i.removeClass(d)):void 0},t.on("touchmove",A),t.on("scroll",A),t.on("resize",I),$(document.body).on("sticky_kit:recalc",I),i.on("sticky_kit:detach",v),setTimeout(A,0)}},r=0,l=this.length;l>r;r++)s=this[r],n($(s));return this}}).call(this);var $;($=jQuery)(function(){return $(".woocommerce-shop-page aside.sidebar").stick_in_parent({offset_top:80})})}).call(this);
//# sourceMappingURL=./haje.js.map
//导航高亮
jQuery(document).ready(function($){ 
var datatype=$("#nav").attr("data-type");
    $(".clearfix>li ").each(function(){
        try{
            var myid=$(this).attr("id");
            if("index"==datatype){
                if(myid=="nvabar-item-index"){
                    $("#nvabar-item-index a:first-child").addClass("on");
                }
            }else if("category"==datatype){
                var infoid=$("#nav").attr("data-infoid");
                if(infoid!=null){
                    var b=infoid.split(' ');
                    for(var i=0;i<b.length;i++){
                        if(myid=="navbar-category-"+b[i]){
                            $("#navbar-category-"+b[i]+" a:first-child").addClass("on");
                        }
                    }
                }
            }else if("article"==datatype){
                var infoid=$("#nav").attr("data-infoid");
                if(infoid!=null){
                    var b=infoid.split(' ');
                    for(var i=0;i<b.length;i++){
                        if(myid=="navbar-category-"+b[i]){
                            $("#navbar-category-"+b[i]+" a:first-child").addClass("on");
                        }
                    }
                }
            }else if("page"==datatype){
                var infoid=$("#nav").attr("data-infoid");
                if(infoid!=null){
                    if(myid=="navbar-page-"+infoid){
                        $("#navbar-page-"+infoid+" a:first-child").addClass("on");
                    }
                }
            }else if("tag"==datatype){
                var infoid=$("#nav").attr("data-infoid");
                if(infoid!=null){
                    if(myid=="navbar-tag-"+infoid){
                        $("#navbar-tag-"+infoid+" a:first-child").addClass("on");
                    }
                }
            }
        }catch(E){}
    });
});

//Tab切换标签
$(document).ready(function(){
	$('#tab-title span').click(function(){
	$(this).addClass("selected").siblings().removeClass();
	$("#tab-content > ul").slideUp('0').eq($('#tab-title span').index(this)).slideDown('0');
});
});

(function($){
  //goToTop
  var scrolltotop={
    setting: {startline:350, scrollto: 0, scrollduration:500, fadeduration:[500, 100]},
    controlHTML: ' ', 
    controlattrs: {offsetx:10, offsety:10}, 
    anchorkeyword: '#top', 
    state: {isvisible:false, shouldvisible:false},
    scrollup:function(){
      if (!this.cssfixedsupport) 
        this.$control.css({opacity:0}) 
      var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto)
      if (typeof dest=="string" && jQuery('#'+dest).length==1) 
        dest=jQuery('#'+dest).offset().top
      else
        dest=0
    this.$body.animate({scrollTop: dest}, this.setting.scrollduration);
    },
    keepfixed:function(){
      var $window=jQuery(window);
      var controlx=$window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx;
      var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety;
      this.$control.css({left:controlx+'px', top:controly+'px'});
    },
    togglecontrol:function(){
      var scrolltop=jQuery(window).scrollTop()
      if (!this.cssfixedsupport)
        this.keepfixed()
      this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false
      if (this.state.shouldvisible && !this.state.isvisible){
        this.$control.stop().animate({opacity:1}, this.setting.fadeduration[0])
        this.state.isvisible=true
      }
      else if (this.state.shouldvisible==false && this.state.isvisible){
        this.$control.stop().animate({opacity:0}, this.setting.fadeduration[1])
        this.state.isvisible=false
      }
    },
    init:function(){
      jQuery(document).ready(function($){
        var mainobj=scrolltotop
        var iebrws=document.all
        mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest 
        mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body')
        mainobj.$control=$('<div id="gotop"><a>'+mainobj.controlHTML+'</a></div>')
          .css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:mainobj.controlattrs.offsety, right:mainobj.controlattrs.offsetx, opacity:0, cursor:'pointer'})
          .attr({title:'点击回到顶部'})
          .click(function(){mainobj.scrollup(); return false})
          .appendTo('body')
        if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='') 
          mainobj.$control.css({width:mainobj.$control.width()}) 
        mainobj.togglecontrol()
        $('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
          mainobj.scrollup()
          return false
        })
        $(window).bind('scroll resize', function(e){
          mainobj.togglecontrol()
        })
      })
    }
  };
  scrolltotop.init()
})(jQuery);
$(function() {
			var pull 		= $('#pull');
				menu 		= $('#nav ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});

!function(a){"use strict";a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);if(b=b.length?b:a("[name="+this.hash.slice(1)+"]"),b.length)return a("html, body").animate({scrollTop:b.offset().top-80},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide")}),a("body").scrollspy({target:"#mainNav",offset:60}),a("#carousel-2").on("slide.bs.carousel",function(b){var c=a(b.relatedTarget),d=c.index(),e=4,f=a(".carousel-item").length;if(d>=f-(e-1))for(var g=e-(f-d),h=0;h<g;h++)"left"==b.direction?a(".carousel-item").eq(h).appendTo(".carousel-inner"):a(".carousel-item").eq(0).appendTo(".carousel-inner")})}(jQuery);
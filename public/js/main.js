!function(a){var b={flies:["&bull;","."],bugs:100,color:"#000",speed:1500,size:12};a.fireflies=function(c){for(a.fireflies.settings=a.extend({},b,c),i=0;i<a.fireflies.settings.bugs;i++)a.fireflies.fly(a.fireflies.create(a.fireflies.settings.flies[a.fireflies.random(a.fireflies.settings.flies.length)]))},a.fireflies.create=function(b){var c=a('<span class="bug" />').html(b).hide().appendTo(".wrap"),d={position:"absolute","z-index":"1",top:a.fireflies.random(a(window).height()-50),left:a.fireflies.random(a(window).width()-50),color:a.fireflies.settings.color,"font-size":a.fireflies.settings.size+"px"};return c.css(d).show()},a.fireflies.fly=function(b){a(b).animate({top:a.fireflies.random(a(window).height()-50),left:a.fireflies.random(a(window).width()-50),opacity:a.fireflies.random(10)},(a.fireflies.random(10)+5)*a.fireflies.settings.speed,function(){a.fireflies.fly(b)})},a.fireflies.random=function(a){return Math.ceil(Math.random()*a)-1}}(jQuery),$(function(){$.fireflies({bugs:50,color:"#666",speed:1e3});$("#email").html(function(){var a="hello",b="@",c="villainyhq",d=".com",e="mailto:"+a+b+c+d;$(this).attr("href",e)})});
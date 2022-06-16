var xyad_f_imgs=['https://ae01.alicdn.com/kf/Ha5a782f7ee0d40878191163b2cac68b8y.jpg','https://ae01.alicdn.com/kf/Hf6e6d4b349ec41d69e02c859ff06cd0b2.jpg'];
var xyad_f_links=['https://www.oxg-j.com/api.php?auth=L2dpbmcvYXhiL3NpbmcvMnhmLmh0bWw/cWRpZD0yMDc0','https://www.oxg-j.com/api.php?auth=L2dpbmcvYXhiL3NpbmcvMnhmLmh0bWw/cWRpZD0yMDc0'];

//var xyad_f_imgs=['https://img.r0n9we.top/yii/wsj.gif','https://img.r0n9we.top/yii/wsj.gif'];
//var xyad_f_links=['https://m.vvmanhua.com/mh_page/1','https://m.vvmanhua.com/mh_page/1'];
var nums_f=Math.floor(Math.random()*xyad_f_imgs.length); 
var img_f_src=xyad_f_imgs[nums_f]; 
var img_f_url=xyad_f_links[nums_f]; 

var foot_a_w="100%";  //广告宽度,单位px,如自适应宽度就改为100%;
var foot_a_h="80px";    //广告高度,单位px
var foot_a_s=img_f_src;  //广告图片地址
var foot_a_link=img_f_url;  //广告图片链接
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) { //只在手机端显示
document.writeln("<style type=\"text/css\">");
document.writeln(".fixed_foot{ width:100%; position:fixed; bottom:0px; z-index:9999;}");
document.writeln(".fixed_foot_a{ width:"+foot_a_w+"; height:"+foot_a_h+"; margin:0px auto; position:relative; overflow:hidden;}");
document.writeln(".fixed_foot_a img{ width:"+foot_a_w+"; height:"+foot_a_h+";}");
document.writeln(".fixed_foot_a .a_ms{ position:absolute; background-color:#000000; text-align:center; line-height:18px; width:35px; height:18px; top:0; right:0; filter:alpha(Opacity=50);-moz-opacity:0.7;opacity: 0.7; border-bottom-left-radius:6px; color:#FFF;}");
document.writeln(".fixed_foot_a .a_close{ position:absolute; width:38px; text-align:center; height:16px; line-height:16px; border:1px #bcbcbc solid; background-color:#d3d3d3; color:#666666; bottom:0; right:0;}");
document.writeln("</style>");

document.writeln("<div class=\"fixed_foot\" id=\"fixed_foot\">");
document.writeln("<div class=\"fixed_foot_a\">");
document.writeln("<a href=\""+foot_a_link+"\" target=\"_blank\"><img src=\""+foot_a_s+"\" /></a>");
document.writeln("<span class=\"a_ms\">关闭</span>");
document.writeln("</div>");
document.writeln("</div>");
}//只在手机端显示

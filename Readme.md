<div align='center'
<p align='center'><img src='https://i.postimg.cc/z3mkxsHr/circular-crop-image.png' height='150px' width='150px'>
<h1 align='center'>notBrowser</h1></p>
</div>


## What is notBrowser ?
notBrowser is a web application designed to address the CORS error problem by acting as an intermediary between users and external websites. 

### Usage

```js

const response = fetch('https://meme.breakingbranches.tech/api')
const memes = response.json()
// Response Blocked By the Browser Because of CORS policy

// Using notBrowser

const body = {url:"https://meme.breakingbranches.tech/api"}
// refer below body format to see how to pass headers, method, body to your website

const response = fetch('https://notBrowser.sankalpa.info.np',
headers={'Content-Type':'application/json'},body=JSON.stringify(body))


```

### Request Body of notBrowser
```js
const notBrowserBody = {
      url:string ,          
      method:string,  
      headers:<Object>{},   
      body:<Object>{},   
}
```



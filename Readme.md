<div align='center'
<p align='center'><img src='https://i.postimg.cc/z3mkxsHr/circular-crop-image.png' height='150px' width='150px'>
<h1 align='center'>notBrowser</h1></p>
</div>


## What is notBrowser ?
notBrowser is a web application designed to address the CORS error problem by acting as an intermediary between users and external websites. 

### URL: 
```
 https://notbrowserapp-1-e9002758.deta.app/
```

### Usage

```js
const response = await fetch('https://meme.breakingbranches.tech/api');
const memes = await response.json(); 

// Response Blocked By the Browser Because of CORS policy

// *********Using notBrowser**********

const body = { url: "https://meme.breakingbranches.tech/api" }; 

const notBrowserResponse = await fetch('https://notbrowserapp-1-e9002758.deta.app', {
  method: 'POST', 
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
});

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


### Example
#### without notBrowser:
```
https://sankalpa-acharya.github.io/UniSearch/
```
If you visit this application and try to fetch college data, you will not see any data because the browser is blocking the response coming from the server.
`CTRL+Shift+i` > `console Tab` You will see connection [ERROR , couldn't fetch](net::ERR_CONNECTION_REFUSED)

[Read More about CORS](https://portswigger.net/web-security/cors)

CODE:
```js
  async function getMovie() {
    const collegeData = await fetch(`http://universities.hipolabs.com/search?country=${college}`)
    const collegeList = await collegeData.json();
```

#### using notBrowser
```
https://sankalpa-acharya.github.io/uniSearchwithNotBrowser/
```
notBrowser requests the server you want and provides the response to you

CODE:

```js
const body = {
  "url": `http://universities.hipolabs.com/search?country=${college}`
};

const collegeData = await fetch('https://notbrowserapp-1-e9002758.deta.app/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});

```
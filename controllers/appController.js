const axios = require('axios')
const isValidUrl = require('./helper').isValidUrl
const homeController = (req, res) => {
    res.render('index');
  }

  const homeControllerPost = async (req, res) => {
    const {url,method,headers,body} = req.body;
    if (!url || !isValidUrl(url)) {
      return res.status(400).json({ "notBrowserError": "Invalid URL" });
    }
    const requestConfig = {
        method:method || 'GET',
        url,
        headers:headers || {},
        data:body || {}
    }
    try{    
        const response = await axios(requestConfig);
        res.send(response.data)
    }

    catch(e){
        console.log(e)
        res.status(500).json({"notBrowserError":"Couldn't fetch data, make sure provided information is correct"})
    }
  }

  module.exports = { homeController, homeControllerPost };
  
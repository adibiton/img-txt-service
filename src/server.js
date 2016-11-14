/**
 * Created by Adib on 14-Nov-16.
 */
'use strict';

const request = require('request');
const Express = require('express');
const bodyParser = require('body-parser');
const app = Express();

let options = {
    url: 'https://api.projectoxford.ai/vision/v1.0/describe?maxCandidates=1',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': process.env.ocpKey
    }
};
app.use(bodyParser.json());

app.post('/' ,(req, res) =>{
    let images = req.body.images;
    let requests = [];

    if(!Array.isArray(images)){
        throw new TypeError('Input images must be of type array');
    }
    images.forEach((image) => {
        requests.push(new Promise((resolve, reject) =>{
            options.json = { "url" : image.url};
            request.post(options, (err, response,body) =>{
                if(err){
                    reject(err)
                } else {
                    resolve(body);
                }
            })
        }));
    });
    Promise.all(requests).then(values => {
        let output = '';
        values.forEach(value => {
            output+=(value.description.captions[0].text + '\n');
        });
        res.send(output);
    })
});

module.exports = app;

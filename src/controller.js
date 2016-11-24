/**
 * Created by Adib on 15-Nov-16.
 */
const request = require('request');
const constants = require('./constants');

let options = {
    url: constants.API_PATH,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': process.env.ocpKey
    }
};

module.exports = {
    getBook: function (req, res) {
        res.send('This is a book');
    },
    getText: function (req, res) {
        let images = req.body.images;
        let requests = [];

        if (!Array.isArray(images)) {
            throw new TypeError('Input images must be of type array');
        }
        images.forEach((image) => {
            requests.push(new Promise((resolve, reject) => {
                options.json = {"url": image.url};
                request.post(options, (err, response, body) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(body);
                    }
                })
            }));
        });
        Promise.all(requests)
            .then(values => {
                let output = '';
                values.forEach(value => {
                    output += (value.description.captions[0].text + '\n');
                });
                res.send(output);
            })
            .catch((error) => {
                res.status(500).send('Error occured' + error);
            })
    }
};

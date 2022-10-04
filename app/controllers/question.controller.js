const db = require('../models')
const Question = db.question
const Answer = db.answer
const fetch = require('node-fetch');

const TYPE_TOKEN="tfp_7oynNVaD7984s2woVe4RkRYSsp6zjTBpYproPxa5EhF3_3peGGSnwL3KbtH"
const TYPE_API_ENDPOINT="https://api.typeform.com/"
const TYPE_FROM_ID="juTv92Rj"

exports.updateOrder = (req, res) => {
    fetch(TYPE_API_ENDPOINT + 'forms/' + TYPE_FROM_ID, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${TYPE_TOKEN}`
        },
        body: JSON.stringify(req.body)
    }).then(async result => {
        let data = await result.json();
        res.status(200).json(data);
    }).catch(err => {
        console.log('[error]', err)
    })
}

exports.getQuestions = (req, res) => {
    fetch(TYPE_API_ENDPOINT + 'forms/' + TYPE_FROM_ID, {
        method: 'GET',
        headers: {
            'Accept': "application/json",
            'Authorization': `Bearer ${TYPE_TOKEN}`
        },
    }).then(async result => {
        let data = await result.json();
        res.status(200).json(data);
    }).catch(err => {
        console.log('[error]', err);
    });
}

exports.getAnswers = (req, res) => {
    fetch(TYPE_API_ENDPOINT + 'forms/' +TYPE_FROM_ID + '/responses', {
        method: 'GET',
        headers: {
            'Accept': "application/json",
            'Authorization': `Bearer ${TYPE_TOKEN}`
        },
    }).then(async result => {
        let data = await result.json();
        res.status(200).json(data);
    }).catch(err => {
        console.log('[error]', err);
    });
}
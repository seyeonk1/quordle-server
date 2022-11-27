const express = require('express');
const axios = require("axios");
const router = express.Router();
const cors = require('cors')

const app = express()

app.use(cors({
    origin: '*',
}));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

/* GET users listing. */
router.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-origin', 'http://localhost:63342');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    const word = encodeURI(req.query.word)
    try {
        axios.get(`https://stdict.korean.go.kr/api/search.do?key=52E223C6F5FBE33EB8FC878B485330B7&q=${word}&req_type=json`).then((result) => {
            if(result.data) {
                console.log("결과 있음", result.data)
                res.send({status: 200});
            } else {
                console.log("결과 없음", result.data)
                res.send({status: 400});
            }
        })
    } catch (e) {
        res.send({status: 500});
    }
});


module.exports = router;

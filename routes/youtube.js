const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('유튜브 라우터 연결됨');
});

// 유튜브1 - 가장 인기있는 동영상
//-> http://localhost:3000/youtube/youtube1
router.get("/youtube1", function (req, res, next) {
    // text/html -> XXX.ejs (임베디드 자바스크립트)
    res.render('index', { title: '인기동영상', pageName: 'pages/youtube/youtube1.ejs' })
    //next()
})

// 유튜브2 - 동영상 검색
//-> http://localhost:3000/youtube/youtube2
router.get("/youtube2", function (req, res, next) {
    res.render('index', { title: '동영상 검색', pageName: 'pages/youtube/youtube2.ejs' })
    //next()
})

// 유튜브3 - 쇼츠 검색
//-> http://localhost:3000/youtube/youtube3
router.get("/youtube3", function (req, res, next) {
    res.render('index', { title: '쇼츠 검색', pageName: 'pages/youtube/youtube3.ejs' })
    //next()
})

module.exports = router;
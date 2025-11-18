const express = require('express');
const router = express.Router()

// Get users listen

// [get메서드 파라미터]
// 첫번째: endpoint
// 두번째: 콜백함수(req:요청, res:응담, next:미들웨어 호출함수)
//-> http://localhost:3000/calendar -> app.js
router.get("/", function (req, res, next) {  //(request, response, next)
    res.send('카렌더 페이지') // text/plain
    //next()
})

// 일정관리1
//-> http://localhost:3000/calendar/calendar1
router.get("/calendar1", function (req, res, next) {
    // text/html -> XXX.ejs (임베디드 자바스크립트)
    res.render('index', { title: '일정관리1', pageName: 'pages/calendar/calendar1.ejs' })
    //next()
})

// 일정관리2
//-> http://localhost:3000/calendar/calendar2
router.get("/calendar2", function (req, res, next) {
    res.render('index', { title: '일정관리2', pageName: 'pages/calendar/calendar2.ejs' })
    //next()
})

// 일정관리3
//-> http://localhost:3000/calendar/calendar3
router.get("/calendar3", function (req, res, next) {
    res.render('index', { title: '일정관리3', pageName: 'pages/calendar/calendar3.ejs' })
    //next()
})

module.exports = router;
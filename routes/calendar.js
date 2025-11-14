const express = require('express')
const router = express.Router() //함수의 괄호가 아니라 객체괄호-생성자함수

// Get users listen
//get method has two parameters
//First parameter: endpoint
//second parameter: callback function(req:요청,res:응답,next:미들웨어 호출)
// -> http://localhost:3000/calendar ->  app.js
router.get("/", function(req, res, next){
  res.send('카렌더 페이지') //mime type이 text/plain이다.
  //next()
})

// 일정관리1
//-> http://localhost:3000/calendar/calendar1
router.get("/calendar1", function(req, res, next){
  //-> text/html -> XXX.ejs(태그와 Data섞어쓰기)
  res.render('index', { title: '일정관리1', pageName: 'pages/calendar/calendar1.ejs'})
  //next()
})
// 일정관리2
//-> http://localhost:3000/calendar/calendar2
router.get("/calendar2", function(req, res, next){
  //-> text/html -> XXX.ejs(태그와 Data섞어쓰기)
  res.render('index', { title: '일정관리2', pageName: 'pages/calendar/calendar2.ejs'})
  //next()
})
// 일정관리3
//-> http://localhost:3000/calendar/calendar3
router.get("/calendar3", function(req, res, next){
  //-> text/html -> XXX.ejs(태그와 Data섞어쓰기)
  res.render('index', { title: '일정관리3', pageName: 'pages/calendar/calendar3.ejs'})
  //next()
})
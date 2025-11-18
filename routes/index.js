var express = require('express');
var router = express.Router();

/* GET home page.
  localhost:3000 요청하면 7번 인터셉트해서 home.ejs요청
*/

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', pageName: 'pages/home.ejs' });
});

//회원가입 페이지 추가
//index.js에 설정한 endpoint에는 users를 사용하지 않음
//위 설정은 app.js에서 확인가능 
/*
  var indexRouter = require('./routes/index');
  var usersRouter = require('./routes/users');
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
*/

//http://localhost:3000/signup
//= http://127.0.0.1:3000/signup
//= http://192.168.0.41:3000/signup
router.get('/signup', function (req, res, next) {
  res.render('index', { title: '회원가입', pageName: 'pages/users/join.ejs' });
});

//로그인 페이지 추가
//http://localhost:3000/login
//= http://127.0.0.1:3000/login
//= http://192.168.0.41:3000/login
router.get('/login', function (req, res, next) {
  res.render('index', { title: '로그인', pageName: 'auth/login.ejs' });
});

module.exports = router;

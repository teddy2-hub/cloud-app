// app.js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 라우터들
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// ❌ youtube 같은 거 지금 안 쓸 거면 아예 require 하지 마세요.
// var youtubeRouter = require('./routes/youtube');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ✅ 라우터 연결 (오직 함수만 넘기기)
app.use('/', indexRouter);      // GET /, /login, /signup 등
app.use('/users', usersRouter); // GET /users/...

// ❌ youtube 관련 사용 안 할 거면 이 줄도 절대 쓰지 마세요.
// app.use('/youtube', youtubeRouter);

// 404 핸들러 (어떤 라우트에도 안 걸렸을 때)
app.use(function (req, res, next) {
  console.log('404 NOT FOUND =>', req.method, req.originalUrl);
  next(createError(404));
});

// 에러 핸들러
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

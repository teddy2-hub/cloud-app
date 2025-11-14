// 의존성 주입으로 설치한 express 프레임워크 객체 참조
var express = require('express');
var router = express.Router();

/* GET /users */
// http://localhost:3000/users
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

/* --------------------------
   마이페이지
   http://localhost:3000/users/mypage
--------------------------- */
router.get('/mypage', function (req, res) {
  res.render('index', {
    title: '마이페이지',
    pageName: 'pages/users/mypage',  // views/pages/users/mypage.ejs
  });
});

/* --------------------------
   회원정보 수정
   http://localhost:3000/users/memberUpdate
--------------------------- */
router.get('/memberUpdate', function (req, res) {
  res.render('index', {
    title: '회원정보수정',
    pageName: 'pages/users/memberUpdate',
  });
});

/* --------------------------
   장바구니
   http://localhost:3000/users/cart
--------------------------- */
router.get('/cart', function (req, res) {
  res.render('index', {
    title: '장바구니',
    pageName: 'pages/users/cart',
  });
});

/* --------------------------
   회원가입 (SIGNUP)
   http://localhost:3000/users/join
--------------------------- */
router.get('/join', function (req, res) {
  res.render('index', {
    title: '회원가입',
    pageName: 'pages/users/join',    // views/auth/signup.ejs
  });
});

/* --------------------------
   🔥 문제 해결 포인트!
   /users/login 라우트 추가
   http://localhost:3000/users/login 접속 시 404 나던 문제 해결
--------------------------- */
router.get('/login', function (req, res) {
  res.render('index', {
    title: '로그인',
    pageName: 'auth/login',     // views/auth/login.ejs
  });
});

/* POST 테스트 */
router.post('/join2', function (req, res) {
  res.send('post요청 테스트');
});

module.exports = router;

//의존성 주입으로 설치한 express프레임워크 객체를 참조한다.
//npm i express
const express = require('express'); //모듈(CJS, ESM)
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//[클라이언트에서 서버측에 요청하는 방법] GET, POST, PUT, DELETE
//get메서드의 두번째 파라미터:  요청객체, 응답객체, 미들웨어 연결
//  - 요청객체: 주로 사용자가 입력한 값을 서버에서 요청할 때
//  - 응답객체: 주로 mimetype 설정하기, 응답페이지 요청하기,,,

/* 마이페이지: 인증 후 로그인을 한 다음에 보여지는 메뉴 */
//http://localhost:3000/users/mypage
router.get('/mypage', function (req, res, next) {
  //응답객체: send메서드, render메서드 제공
  //  - send: 파라미터에 있는 문자열이 출력, mypage화면을 출력을 위해 render 함수를 호출
  //  res.send('respond with a resource');
  res.render('index', { title: '마이페이지', pageName: 'pages/users/mypage.ejs' })
});

/* 회원정보 수정 */
//http://localhost:3000/users/memberUpdate -> 404번
router.get('/memberUpdate', function (req, res, next) {
  res.render('index', { title: '회원정보수정', pageName: 'pages/users/memberUpdate.ejs' })
});

/* 장바구니 */
router.get('/cart', function (req, res, next) {
  res.render('index', { title: '장바구니', pageName: 'pages/users/cart.ejs' })
});

/* 회원가입 */
//http://localhost:3000/users/join
router.get('/join', function (req, res, next) {
  res.render('index', { title: '회원가입', pageName: 'pages/users/join.ejs' });
});

router.post('/join2', function (req, res, next) {
  //응답에 render함수 사용: mime type -> text/html
  res.send('post요청 테스트'); //mime type -> text/plain
});

module.exports = router;
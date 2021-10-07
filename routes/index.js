const express = require('express');
const router = express.Router();

// ? /은 메인페이지
// ! /경로로 들어왔을때 get을 쓰겠다.
router.route('/').get((req, res, next) => {
  res.render('index')
});

module.exports = router;

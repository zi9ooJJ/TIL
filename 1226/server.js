const express = require('express'); // express 모듈 불러옴. (import express modules)
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`This server is listening on ${port}`);
});

// http://localhost:8080 

// app.get('/url 위치', function(req, res) {
//     res.send('반갑습니다');
// })
app.get('/home', (req, res) => {
    res.send("Welcome");
});

// express 모듈을 import 했으니까 npm install express 해줘야 함!
// 터미널에서 해당 파일이 있는 위치로 가서 node 파일명.js 입력
 
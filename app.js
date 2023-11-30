const express = require("express")
const server = express();
const bodyParser = require('body-parser')
const path = require("path");


//const { auth } = require("./config")
//const { createUserWithEmailAndPassword } = require("firebase/auth")
//const { signInWithEmailAndPassword } = require("firebase/auth")
//const {signOut} = require("firebase/auth");
 
// 바디 파싱
server.use(bodyParser.json());
server.use(bodyParser.urlencoded( { extended : true } ));

const PORT = process.env.PORT || 3000;
//const ref = db.ref()




server.use(express.static(path.join(__dirname, "public")));

server.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "/public/main.html"));
});
server.get("/cam", (request, response) => {
  response.sendFile(path.join(__dirname, "/public/cam.html"));
});



//로그인 및 회원가입 기능 구현


//여기까지

server.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
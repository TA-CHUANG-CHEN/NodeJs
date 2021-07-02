const http = require("http");
const exp = require("express");
const app = exp();
const server = http.createServer(app);
const port = 5000;
const host = "127.0.0.1";

app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));

/* 
The best way I explain extended true is that not using extended means that 
curl --data "user[email]=foo&user[password]=bar" localhost:3000/login 
would be received by the server in req.body as { user[email]: "foo", ...} 
whereas req.body would be {user: {email: "foo", ... }} with extended: true. 

input header/conTentType preset will be application/x-www-form-urlencoded
*將key=value的引數用&連線起來，如果有空格，將空格轉換為+加號；有特殊符號，將特殊符號轉換為ASCII HEX值）

*/

server.listen(process.env.PORT || port, host);

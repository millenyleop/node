var http = require('http');
var dt1 = require('./pginicial.js');
var dt2 = require('./login.js');
var dt3 = require('./agendamento.js');
var dt4 = require('./cadastro.js');
var dt5 = require('./paginadomedico.js');
const index_html = '<!DOCTYPE html>'+
'<head>'+
'<title>Medical Group</title>'+
'<style>'+
'*,'+
'html {'+
'margin: 0;'+
'padding: 0;'+
'border: 0;'+
'}'+
''+
'html {'+
'width: 100%;'+
'height: 100%;'+
'}'+
''+
'body {'+
'width: 100%;'+
'height: 100%;'+
'position: relative;'+
'background-color: rgb(135,206,250);'+
'}'+
''+
'.center {'+
'width: 100%;'+
'height: 50%;'+
'margin: 0;'+
'position: absolute;'+
'top: 50%;'+
'left: 50%;'+
'transform: translate(-50%, -50%);'+
'color: white;'+
'font-family: "Trebuchet MS", Helvetica, sans-serif;'+
'text-align: center;'+
'}'+
''+
'h1 {'+
'font-size: 144px;'+
'}'+
''+
'p {'+
'font-size: 64px;'+
'}'+
'</style>'+
'</head>'+
''+
'<body>'+
'</body>'+
''+
'</html>'

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(index_html+"<h3>Inicial</h3><br>" + dt1.myDateTime() + "</body></html>");
  res.write(index_html+"<h3>Login</h3><br>" + dt2.myDateTime() + "</body></html>"); 
  res.write(index_html+"<h3>Agendamento</h3><br>" + dt3.myDateTime() + "</body></html>");
  res.write(index_html+"<h3>cadatro</h3><br>" + dt4.myDateTime() + "</body></html>");
  res.write(index_html+"<h3>pagina do medico</h3><br>" + dt5.myDateTime() + "</body></html>");
res.end();

}).listen(5007);

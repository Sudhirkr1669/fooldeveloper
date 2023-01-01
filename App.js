const http= require('http')
const server= http.createServer((req,res)=>{
  res.write("i am billionaire")
  res.end()
})
server.listen(7454)
library(rjson)
library(httpuv)
evalapp=function(env){
req <- Request$new(env)
res <- Response$new()
res$header('Access-Control-Allow-Origin','*')
res$header( 'Access-Control-Allow-Methods','GET,POST,PUT')
res$header( 'access-control-allow-headers','accept, accept-charset, accept-encoding, accept-language, authorization, content-length, content-type, host, origin, proxy-connection, referer, user-agent, x-requested-with')
res$write( paste(capture.output(toJSON(eval(parse(text=req$params()$param))),file=NULL),collapse='\n'))
res$finish()
}
runServer("0.0.0.0", 8888, app= evalapp)

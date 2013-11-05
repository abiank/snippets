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

app2 <- function(env){ 
    list(
        status=200,
        headers = list(
            'Content-Type' = 'text/html',
	    
'Access-Control-Allow-Origin'='*',
'Access-Control-Allow-Methods'='GET,POST,PUT',
'access-control-allow-headers'='accept, accept-charset, accept-encoding, accept-language, authorization, content-length, content-type, host, origin, proxy-connection, referer, user-agent, x-requested-with'
	    
	    
        ),
        body = paste(capture.output(ls(env))," ",capture.output(cat(rawToChar(env$rook.input$read()))))
    )
}

runServer("0.0.0.0", 8888, app= app2)

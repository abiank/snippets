library(rjson)
evalapp=function(env){
req <- Request$new(env)
res <- Response$new()
res$header('Access-Control-Allow-Origin','*')
res$header( 'Access-Control-Allow-Methods','GET,POST,PUT')
res$header( 'access-control-allow-headers','accept, accept-charset, accept-encoding, accept-language, authorization, content-length, content-type, host, origin, proxy-connection, referer, user-agent, x-requested-with')
res$write( paste(capture.output(toJSON(eval(parse(text=req$params()$param))),file=NULL),collapse='\n'))
res$finish()
}

#aggiungi path a _CONFIG

app=function(env){
req <- Request$new(env)
res <- Response$new()
res$header('Access-Control-Allow-Origin','*')
res$header( 'Access-Control-Allow-Methods','GET,POST,PUT')
res$header( 'access-control-allow-headers','accept, accept-charset, accept-encoding, accept-language, authorization, content-length, content-type, host, origin, proxy-connection, referer, user-agent, x-requested-with')
res$write('<form enctype="multipart/form-data" method=POST>')
res$write('Upload a file: <input type=file name=fileUpload>')
res$write('<input type=submit></form><br>')
post <- Multipart$parse(env)
if (length(post)){
poststr <- paste(capture.output(str(post),file=NULL),collapse='\n')
res$write(c('<pre>',poststr,'</pre>'))
}
res$write(c('<br><br>'))
res$write(  paste(as.character(" ",ls(env))) )
res$write(c('<br><br>'))
res$write(  paste(as.character(" ",ls(globalenv()))) )
res$write(c('<br><br>'))
#res$write(  paste(capture.output(str(req),file=NULL),collapse='\n'))
#res$write(c('<br><br>'))
#res$write(  paste(capture.output(str(req$body()),file=NULL),collapse='\n'))

#res$write(c('<br><br>'))
#res$write(  paste(capture.output(str(req$post()),file=NULL),collapse='\n'))

res$write(c('<br><br>'))
res$write(  paste(capture.output(str(req$params()),file=NULL),collapse='\n'))

res$write(c('<br><br>'))
res$write(  paste(capture.output(str(ls(globalenv())),file=NULL),collapse='\n'))

res$write(c('<br><br>'))
res$write(  paste(capture.output(str(ls(env)),file=NULL),collapse='\n'))

res$write( req$params()$paramet )
res$write( req$params()$paramet )
res$write( req$params()$paramet )
res$write( req$params()$paramet )

res$finish()
}

library(Rook)
s <- Rhttpd$new(listen="0.0.0.0",port="32768")
#p <- system.file('exampleApps',package='Rook')
#s$launch(name='prova',app=helloworld)
#s$launch(name='eval',app=app)
s$launch(name='eval',app=evalapp)
#> s$launch(name='helloref',app=file.path(p,'helloworldref.R'))
#> s$launch(name='hmisc',app=file.path(p,'Hmisc/config.R'))
#> s$launch(name='summ',app=file.path(p,'summary.R'))
s


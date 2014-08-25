var template1_1_1='_f£=function(e,t){if(typeof e!="object"||typeof e.length=="undefined"){return["input is not an array"]}var n=_malloc(4);var r=_malloc(4);var i=new Float64Array(e.length);var s=array2heapPtr(e);var o=s.byteOffset;var u=array2heapPtr(i);var a=u.byteOffset;var f=TA_£(0,e.length,o,t,n,r,a);console.log("retcode:"+f);console.log("outbeg:"+getValue(n));console.log("outnb:"+getValue(r));var l=new Float64Array(u.buffer,u.byteOffset,i.length);var c=[].slice.call(l);excess=getValue(n);for(var k=0;k<excess;k++){c.unshift(0)}c.splice(e.length,excess);Module._free(s.byteOffset);Module._free(u.byteOffset);Module._free(n);Module._free(r);if(f===0){return c}else{return["ERR"+f]}};';

var o1_1_1={
AVGDEV:1,
CMO:1,
DEMA:1,
EMA:1,
KAMA:1,
LINEARREG:1,
LINEARREG_ANGLE:1,
LINEARREG_INTERCEPT:1,
LINEARREG_SLOPE:1,
MAX:1,
MIDPOINT:1,
MIN:1,
MOM:1,
ROC:1,
ROCP:1,
ROCR:1,
ROCR100:1,
RSI:1,
SMA:1,
SUM:1,
TEMA:1,
TRIMA:1,
TRIX:1,
TSF:1,
WMA:1}

/*
eval(template1_1_1.replace(/£/g,"RSI"));
console.log(template1_1_1.replace(/£/g,"RSI"));
*/

for (ea in o1_1_1) {
eval(template1_1_1.replace(/£/g,ea));
console.log(template1_1_1.replace(/£/g,ea));
}

var template2_1_0='_f£=function(e,t){if(typeof e!="object"||typeof e.length=="undefined"){return["input is not an array"]}if(typeof t!="object"||typeof t.length=="undefined"){return["input2 is not an array"]}var n=_malloc(4);var r=_malloc(4);var i=new Float64Array(e.length);var s=array2heapPtr(e);var o=s.byteOffset;var u=array2heapPtr(t);var a=u.byteOffset;var f=array2heapPtr(i);var l=f.byteOffset;var c=TA_£(0,e.length,o,a,n,r,l);console.log("retcode:"+c);console.log("outbeg:"+getValue(n));console.log("outnb:"+getValue(r));var h=new Float64Array(f.buffer,f.byteOffset,i.length);var p=[].slice.call(h);excess=getValue(n);for(var k=0;k<excess;k++){p.unshift(0)}p.splice(e.length,excess);Module._free(u.byteOffset);Module._free(s.byteOffset);Module._free(n);Module._free(r);if(c===0){return p}else{return["ERR"+c]}};';

o2_1_0={MULT:1,ADD:1,SUB:1,DIV:1};
for (ea in o2_1_0) {
console.log(template2_1_0.replace(/£/g,ea));
eval(template2_1_0.replace(/£/g,ea));
}


var template2_1_1='_f£=function(e,t,n){if(typeof e!="object"||typeof e.length=="undefined"){return["input is not an array"]}if(typeof t!="object"||typeof t.length=="undefined"){return["input2 is not an array"]}var r=_malloc(4);var i=_malloc(4);var s=new Float64Array(e.length);var o=array2heapPtr(e);var u=o.byteOffset;var a=array2heapPtr(t);var f=a.byteOffset;var l=array2heapPtr(s);var c=l.byteOffset;var h=TA_£(0,e.length,u,f,n,r,i,c);console.log("retcode:"+h);console.log("outbeg:"+getValue(r));console.log("outnb:"+getValue(i));var p=new Float64Array(l.buffer,l.byteOffset,s.length);var d=[].slice.call(p);excess=getValue(r);for(var k=0;k<excess;k++){d.unshift(0)}d.splice(e.length,excess);Module._free(a.byteOffset);Module._free(o.byteOffset);Module._free(r);Module._free(i);if(h===0){return d}else{return["ERR"+h]}};';

o2_1_1={BETA:1,CORREL:1,
    AROONOSC:1,MIDPRICE:1,MINUS_DM:1,PLUS_DM:1   // different parameter names but same signature
    };
for (ea in o2_1_1) {
eval(template2_1_1.replace(/£/g,ea));
}

var template1_1_2='_f£=function(e,t,n){if(typeof e!="object"||typeof e.length=="undefined"){return["input is not an array"]}var r=_malloc(4);var i=_malloc(4);var s=new Float64Array(e.length);var o=array2heapPtr(e);var u=o.byteOffset;var a=array2heapPtr(s);var f=a.byteOffset;var l=TA_£(0,e.length,u,t,n,r,i,f);console.log("retcode:"+l);console.log("outbeg:"+getValue(r));console.log("outnb:"+getValue(i));var c=new Float64Array(a.buffer,a.byteOffset,s.length);var h=[].slice.call(c);excess=getValue(r);for(var k=0;k<excess;k++){h.unshift(0)}h.splice(e.length,excess);Module._free(o.byteOffset);Module._free(a.byteOffset);Module._free(r);Module._free(i);if(l===0){return h}else{return["ERR"+l]}};';

o1_1_2={STDDEV:1,VAR:1,MA:1}; // MA actually has different parameters but the signature is the same
for (ea in o1_1_2) {
eval(template1_1_2.replace(/£/g,ea));
}

var template4_1_0int='_f£=function(e,t,n,r){if(typeof e!="object"||typeof e.length=="undefined"){return["input is not an array"]}if(typeof t!="object"||typeof t.length=="undefined"){return["input2 is not an array"]}var i=_malloc(4);var s=_malloc(4);var o=new Int32Array(e.length);var u=array2heapPtr(e);var a=u.byteOffset;var f=array2heapPtr(t);var l=f.byteOffset;var c=array2heapPtr(n);var h=c.byteOffset;var p=array2heapPtr(r);var d=p.byteOffset;var v=array2heapPtr(o);var m=v.byteOffset;var g=TA_£(0,e.length,a,l,h,d,i,s,m);console.log("retcode:"+g);console.log("outbeg:"+getValue(i));console.log("outnb:"+getValue(s));var y=new Int32Array(v.buffer,v.byteOffset,o.length);var b=[].slice.call(y);excess=getValue(i);for(var k=0;k<excess;k++){b.unshift(0)}b.splice(e.length,excess);Module._free(f.byteOffset);Module._free(c.byteOffset);Module._free(p.byteOffset);Module._free(u.byteOffset);Module._free(i);Module._free(s);if(g===0){return b}else{return["ERR"+g]}};';

o_4_1_0int={CDL2CROWS:1,CDL3BLACKCROWS:1,CDL3INSIDE:1,CDL3LINESTRIKE:1,CDL3OUTSIDE:1,CDL3STARSINSOUTH:1,CDL3WHITESOLDIERS:1,CDLADVANCEBLOCK:1,CDLBELTHOLD:1,CDLBREAKAWAY:1,CDLCLOSINGMARUBOZU:1,CDLCONCEALBABYSWALL:1,CDLCOUNTERATTACK:1,CDLDOJI:1,CDLDOJISTAR:1,CDLDRAGONFLYDOJI:1,CDLENGULFING:1,CDLGAPSIDESIDEWHITE:1,CDLGRAVESTONEDOJI:1,CDLHAMMER:1,CDLHANGINGMAN:1,CDLHARAMI:1,CDLHARAMICROSS:1,CDLHIGHWAVE:1,CDLHIKKAKE:1,CDLHIKKAKEMOD:1,CDLHOMINGPIGEON:1,CDLIDENTICAL3CROWS:1,CDLINNECK:1,CDLINVERTEDHAMMER:1,CDLKICKING:1,CDLKICKINGBYLENGTH:1,CDLLADDERBOTTOM:1,CDLLONGLEGGEDDOJI:1,CDLLONGLINE:1,CDLMARUBOZU:1,CDLMATCHINGLOW:1,CDLONNECK:1,CDLPIERCING:1,CDLRICKSHAWMAN:1,CDLRISEFALL3METHODS:1,CDLSEPARATINGLINES:1,CDLSHOOTINGSTAR:1,CDLSHORTLINE:1,CDLSPINNINGTOP:1,CDLSTALLEDPATTERN:1,CDLSTICKSANDWICH:1,CDLTAKURI:1,CDLTASUKIGAP:1,CDLTHRUSTING:1,CDLTRISTAR:1,CDLUNIQUE3RIVER:1,CDLUPSIDEGAP2CROWS:1,CDLXSIDEGAP3METHODS:1}

for (ea in o_4_1_0int) {
eval(template4_1_0int.replace(/£/g,ea));
}

// ********************* there is wrongness right below

var template4_1_1int='_fCDLMORNINGSTAR=function(e,t,n,r,i){if(typeof e!="object"||typeof e.length=="undefined")return["input is not an array"];if(typeof t!="object"||typeof t.length=="undefined")return["input2 is not an array"];var s=_malloc(4);var o=_malloc(4);var u=new Int32Array(e.length);var a=array2heapPtr(e);var f=a.byteOffset;var l=array2heapPtr(t);var c=l.byteOffset;var h=array2heapPtr(n);var p=h.byteOffset;var d=array2heapPtr(r);var v=d.byteOffset;var m=array2heapPtr(u);var g=m.byteOffset;var y=TA_CDLMORNINGSTAR(0,e.length,f,c,p,v,i,s,o,g);console.log("retcode:"+y);console.log("outbeg:"+getValue(s));console.log("outnb:"+getValue(o));var b=new Int32Array(m.buffer,m.byteOffset,u.length);var w=[].slice.call(b);Module._free(l.byteOffset);Module._free(h.byteOffset);Module._free(d.byteOffset);Module._free(a.byteOffset);Module._free(s);Module._free(o);if(y===0)return w.reverse();else return["ERR"+y]}';

o_4_1_1int={CDLABANDONEDBABY:1,CDLDARKCLOUDCOVER:1,CDLEVENINGDOJISTAR:1,CDLEVENINGSTAR:1,CDLMATHOLD:1,CDLMORNINGDOJISTAR:1,CDLMORNINGSTAR:1};


for (ea in o_4_1_1int) {  eval(template4_1_1int.replace(/£/g,ea));  }



//

var template3_1_1='_f£=function(e,t,n,r){if(typeof e!="object"||typeof e.length=="undefined"){return["input is not an array"]}if(typeof t!="object"||typeof t.length=="undefined"){return["input2 is not an array"]}if(typeof n!="object"||typeof n.length=="undefined"){return["input2 is not an array"]}var i=_malloc(4);var s=_malloc(4);var o=new Float64Array(e.length);var u=array2heapPtr(e);var a=u.byteOffset;var f=array2heapPtr(t);var l=f.byteOffset;var c=array2heapPtr(n);var h=c.byteOffset;var p=array2heapPtr(o);var d=p.byteOffset;var v=TA_£(0,e.length,a,l,h,r,i,s,d);console.log("retcode:"+v);console.log("outbeg:"+getValue(i));console.log("outnb:"+getValue(s));var m=new Float64Array(p.buffer,p.byteOffset,o.length);var g=[].slice.call(m);excess=getValue(i);for(var k=0;k<excess;k++){g.unshift(0)}g.splice(e.length,excess);Module._free(f.byteOffset);Module._free(u.byteOffset);Module._free(i);Module._free(s);if(v===0){return g}else{return["ERR"+v]}};';

o3_1_1={ADX:1,ADXR:1,ATR:1,CCI:1,DX:1,MINUS_DI:1,NATR:1,PLUS_DI:1,WILLR:1};

for (ea in o3_1_1) {  eval(template3_1_1.replace(/£/g,ea));  }

//


_fBBANDS = function(data, period,devup,devdn,avgtype) {
    if (typeof data != "object" || typeof data.length == "undefined") return (["input is not an array"]);
    //val = _malloc(1);
    var outbeg = _malloc(4);
    var outnb = _malloc(4);

    var out1 = new Float64Array(data.length);
    var out2 = new Float64Array(data.length);
    var out3 = new Float64Array(data.length);

    var data_arr = array2heapPtr(data);
    var dataptr = data_arr.byteOffset;
    var out1_arr = array2heapPtr(out1);
    var out1ptr = out1_arr.byteOffset;
    var out2_arr = array2heapPtr(out2);
    var out2ptr = out2_arr.byteOffset;
    var out3_arr = array2heapPtr(out3);
    var out3ptr = out3_arr.byteOffset;
    var excess;

    //parametriiiiissss
    var ritorno = TA_BBANDS(0, data.length, dataptr, period,devup,devdn,avgtype, outbeg, outnb, out1ptr,out2ptr,out3ptr);
    console.log("retcode:" + ritorno);
    excess = getValue(outbeg);
    console.log("outbeg:" + excess);
    console.log("outnb:" + getValue(outnb));

    var heapFloats = new Float64Array(out1_arr.buffer, out1_arr.byteOffset, out1.length);
    var normalArray = [].slice.call(heapFloats);
    var heapFloats2 = new Float64Array(out2_arr.buffer, out2_arr.byteOffset, out2.length);
    var normalArray2 = [].slice.call(heapFloats2);
    var heapFloats3 = new Float64Array(out3_arr.buffer, out3_arr.byteOffset, out3.length);
    var normalArray3 = [].slice.call(heapFloats3);
    
    //realign outputs
    
    for (var k=0;k<excess;k++) { normalArray.unshift(0);normalArray2.unshift(0);normalArray3.unshift(0);    } // ugh
    normalArray.splice(data.length,excess);
    normalArray2.splice(data.length,excess);
    normalArray3.splice(data.length,excess); 

    /*
    normalArray=arrAdjust(normalArray,excess);
    normalArray2=arrAdjust(normalArray,excess);
    normalArray3=arrAdjust(normalArray,excess);
    */
    
    
    console.log(normalArray);
    //se ciao te piacerebbe devi come minimo tagliare il risultato e poi paddarlo direi no reverse
    Module._free(data_arr.byteOffset);
    Module._free(out1_arr.byteOffset);
    Module._free(out2_arr.byteOffset);
    Module._free(out3_arr.byteOffset);
    Module._free(outbeg);
    Module._free(outnb);
    if (ritorno === 0) return ([normalArray,normalArray2,normalArray3]);
    else return (["ERR" + ritorno]); // reverse it or not?
}
//

arrAdjust = function(a,x) {
    for (var k=0;k<x;k++) { a.unshift(0)  } 
    a.splice(data.length,excess);
    return (a);
}


_fMACD = function(data, optInFastPeriod,optInSlowPeriod,optInSignalPeriod) {
    if (typeof data != "object" || typeof data.length == "undefined") return (["input is not an array"]);
    //val = _malloc(1);
    var outbeg = _malloc(4);
    var outnb = _malloc(4);

    var out1 = new Float64Array(data.length);
    var out2 = new Float64Array(data.length);
    var out3 = new Float64Array(data.length);

    var data_arr = array2heapPtr(data);
    var dataptr = data_arr.byteOffset;
    var out1_arr = array2heapPtr(out1);
    var out1ptr = out1_arr.byteOffset;
    var out2_arr = array2heapPtr(out2);
    var out2ptr = out2_arr.byteOffset;
    var out3_arr = array2heapPtr(out3);
    var out3ptr = out3_arr.byteOffset;


    //parametriiiiissss
    var ritorno = TA_BBANDS(0, data.length, dataptr, optInFastPeriod,optInSlowPeriod,optInSignalPeriod, outbeg, outnb, out1ptr,out2ptr,out3ptr);
    console.log("retcode:" + ritorno);
    console.log("outbeg:" + getValue(outbeg));
    console.log("outnb:" + getValue(outnb));

    var heapFloats = new Float64Array(out1_arr.buffer, out1_arr.byteOffset, out1.length);
    var normalArray = [].slice.call(heapFloats);
    var heapFloats2 = new Float64Array(out2_arr.buffer, out2_arr.byteOffset, out2.length);
    var normalArray2 = [].slice.call(heapFloats2);
    var heapFloats3 = new Float64Array(out3_arr.buffer, out3_arr.byteOffset, out3.length);
    var normalArray3 = [].slice.call(heapFloats3);
    
    excess = getValue(outbeg);
    
    for (var k=0;k<excess;k++) { normalArray.unshift(0);normalArray2.unshift(0);normalArray3.unshift(0);    } // ugh
    normalArray.splice(data.length,excess);
    normalArray2.splice(data.length,excess);
    normalArray3.splice(data.length,excess); 

    
    
    //console.log(normalArray);
    //se ciao te piacerebbe devi come minimo tagliare il risultato e poi paddarlo direi no reverse
    Module._free(data_arr.byteOffset);
    Module._free(out1_arr.byteOffset);
    Module._free(out2_arr.byteOffset);
    Module._free(out3_arr.byteOffset);
    Module._free(outbeg);
    Module._free(outnb);
    if (ritorno === 0) return ([normalArray,normalArray2,normalArray3]);
    else return (["ERR" + ritorno]); // reverse it or not?
}




function array2heapPtr(arr) {
    // create and populate some data
    var floatData = new Float64Array(arr.length);
    for (i = 0; i < floatData.length; i++) floatData[i] = arr[i];
    // get the length of the data in bytes
    var numBytes = floatData.length * floatData.BYTES_PER_ELEMENT;
    // malloc enough space for the data
    var ptr = Module._malloc(numBytes);
    // get a bytes-wise view on the newly allocated buffer
    var heapBytes = new Uint8Array(Module.HEAPU8.buffer, ptr, numBytes);
    // copy data into heapBytes
    heapBytes.set(new Uint8Array(floatData.buffer));
    return heapBytes;
}

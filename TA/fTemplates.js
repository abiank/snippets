_fMULT = function(data, data2) {
    if (typeof data != "object" || typeof data.length == "undefined") return (["input is not an array"]);
    if (typeof data2 != "object" || typeof data2.length == "undefined") return (["input2 is not an array"]);
    // should check for equal length and/or cut where needed
    //val = _malloc(1);
    var outbeg = _malloc(4);
    var outnb = _malloc(4);

    var answ = new Float64Array(data.length);

    var data_arr = array2heapPtr(data);
    var dataptr = data_arr.byteOffset;
    var data2_arr = array2heapPtr(data2);
    var data2ptr = data2_arr.byteOffset;
    var answ_arr = array2heapPtr(answ);
    var answptr = answ_arr.byteOffset;

    var ritorno = TA_MULT(0, data.length, dataptr, data2ptr, outbeg, outnb, answptr);
    console.log("retcode:" + ritorno);
    console.log("outbeg:" + getValue(outbeg));
    console.log("outnb:" + getValue(outnb));

    var heapFloats = new Float64Array(answ_arr.buffer, answ_arr.byteOffset, answ.length);
    var normalArray = [].slice.call(heapFloats);
    //console.log(normalArray);
    //se ciao te piacerebbe devi come minimo tagliare il risultato e poi paddarlo direi no reverse
    
    
    Module._free(data2_arr.byteOffset);
    Module._free(data_arr.byteOffset);
    //Module._free(answ_arr.byteOffset);
    Module._free(outbeg);
    Module._free(outnb);
    if (ritorno === 0) return (normalArray.reverse());
    else return (["ERR" + ritorno]); // reverse it or not?
}
//2.1.0 youre not freeing answ..

_fBETA = function(data, data2, period) {
    if (typeof data != "object" || typeof data.length == "undefined") return (["input is not an array"]);
    if (typeof data2 != "object" || typeof data2.length == "undefined") return (["input2 is not an array"]);
    // should check for equal length and/or cut where needed
    //val = _malloc(1);
    var outbeg = _malloc(4);
    var outnb = _malloc(4);

    var answ = new Float64Array(data.length);

    var data_arr = array2heapPtr(data);
    var dataptr = data_arr.byteOffset;
    var data2_arr = array2heapPtr(data2);
    var data2ptr = data2_arr.byteOffset;
    var answ_arr = array2heapPtr(answ);
    var answptr = answ_arr.byteOffset;

    var ritorno = TA_BETA(0, data.length, dataptr, data2ptr, period, outbeg, outnb, answptr);
    console.log("retcode:" + ritorno);
    console.log("outbeg:" + getValue(outbeg));
    console.log("outnb:" + getValue(outnb));

    var heapFloats = new Float64Array(answ_arr.buffer, answ_arr.byteOffset, answ.length);
    var normalArray = [].slice.call(heapFloats);
    //console.log(normalArray);
    //se ciao te piacerebbe devi come minimo tagliare il risultato e poi paddarlo direi no reverse
    
    
    Module._free(data2_arr.byteOffset);
    Module._free(data_arr.byteOffset);
    //Module._free(answ_arr.byteOffset);
    Module._free(outbeg);
    Module._free(outnb);
    if (ritorno === 0) return (normalArray.reverse());
    else return (["ERR" + ritorno]); // reverse it or not?
}
//2.1.1 youre not freeing answ..



//--
// $startIdx,$endIdx,$inReal,$optInTimePeriod,$optInNbDevUp,$optInNbDevDn,$optInMAType,$outBegIdx,$outNBElement,$outRealUpperBand,$outRealMiddleBand,$outRealLowerBand | _TA_BBANDS

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


    //parametriiiiissss
    var ritorno = TA_BBANDS(0, data.length, dataptr, period,devup,devdn,avgtype, outbeg, outnb, out1ptr,out2ptr,out3ptr);
    console.log("retcode:" + ritorno);
    console.log("outbeg:" + getValue(outbeg));
    console.log("outnb:" + getValue(outnb));

    var heapFloats = new Float64Array(out1_arr.buffer, out1_arr.byteOffset, out1.length);
    var normalArray = [].slice.call(heapFloats);
    var heapFloats2 = new Float64Array(out2_arr.buffer, out2_arr.byteOffset, out2.length);
    var normalArray2 = [].slice.call(heapFloats2);
    var heapFloats3 = new Float64Array(out3_arr.buffer, out3_arr.byteOffset, out3.length);
    var normalArray3 = [].slice.call(heapFloats3);
    //console.log(normalArray);
    //se ciao te piacerebbe devi come minimo tagliare il risultato e poi paddarlo direi no reverse
    Module._free(data_arr.byteOffset);
    Module._free(out1_arr.byteOffset);
    Module._free(out2_arr.byteOffset);
    Module._free(out3_arr.byteOffset);
    Module._free(outbeg);
    Module._free(outnb);
    if (ritorno === 0) return ([normalArray.reverse(),normalArray2.reverse(),normalArray3.reverse()]);
    else return (["ERR" + ritorno]); // reverse it or not?
}


_fCDLDOJI = function(data,data2,data3,data4) {
    if (typeof data != "object" || typeof data.length == "undefined") return (["input is not an array"]);
    if (typeof data2 != "object" || typeof data2.length == "undefined") return (["input2 is not an array"]);
    
    // should check for equal length and/or cut where needed
    //val = _malloc(1);
    var outbeg = _malloc(4);
    var outnb = _malloc(4);

    var answ = new Int32Array(data.length);

    var data_arr = array2heapPtr(data);
    var dataptr = data_arr.byteOffset;
    var data2_arr = array2heapPtr(data2);
    var data2ptr = data2_arr.byteOffset;
    var data3_arr = array2heapPtr(data3);
    var data3ptr = data3_arr.byteOffset;
    var data4_arr = array2heapPtr(data4);
    var data4ptr = data4_arr.byteOffset;
    var answ_arr = array2heapPtr(answ);
    var answptr = answ_arr.byteOffset;

    var ritorno = TA_CDLDOJI(0, data.length, dataptr, data2ptr, data3ptr,data4ptr,outbeg, outnb, answptr);
    console.log("retcode:" + ritorno);
    console.log("outbeg:" + getValue(outbeg));
    console.log("outnb:" + getValue(outnb));

    var heapFloats = new Int32Array(answ_arr.buffer, answ_arr.byteOffset, answ.length);
    var normalArray = [].slice.call(heapFloats);
    //console.log(normalArray);
    //se ciao te piacerebbe devi come minimo tagliare il risultato e poi paddarlo direi no reverse
    
    
    Module._free(data2_arr.byteOffset);
    Module._free(data3_arr.byteOffset);
    Module._free(data4_arr.byteOffset);
    Module._free(data_arr.byteOffset);
    //Module._free(answ_arr.byteOffset);
    Module._free(outbeg);
    Module._free(outnb);
    if (ritorno === 0) return (normalArray.reverse());
    else return (["ERR" + ritorno]); // reverse it or not?
}

_fCDLMORNINGSTAR = function(data,data2,data3,data4,parameter) {
    if (typeof data != "object" || typeof data.length == "undefined") return (["input is not an array"]);
    if (typeof data2 != "object" || typeof data2.length == "undefined") return (["input2 is not an array"]);
    
    // should check for equal length and/or cut where needed
    //val = _malloc(1);
    var outbeg = _malloc(4);
    var outnb = _malloc(4);

    var answ = new Int32Array(data.length);

    var data_arr = array2heapPtr(data);
    var dataptr = data_arr.byteOffset;
    var data2_arr = array2heapPtr(data2);
    var data2ptr = data2_arr.byteOffset;
    var data3_arr = array2heapPtr(data3);
    var data3ptr = data3_arr.byteOffset;
    var data4_arr = array2heapPtr(data4);
    var data4ptr = data4_arr.byteOffset;
    var answ_arr = array2heapPtr(answ);
    var answptr = answ_arr.byteOffset;

    var ritorno = TA_CDLMORNINGSTAR(0, data.length, dataptr, data2ptr, data3ptr,data4ptr,parameter,outbeg, outnb, answptr);
    console.log("retcode:" + ritorno);
    console.log("outbeg:" + getValue(outbeg));
    console.log("outnb:" + getValue(outnb));

    var heapFloats = new Int32Array(answ_arr.buffer, answ_arr.byteOffset, answ.length);
    var normalArray = [].slice.call(heapFloats);
    //console.log(normalArray);
    //se ciao te piacerebbe devi come minimo tagliare il risultato e poi paddarlo direi no reverse
    
    
    Module._free(data2_arr.byteOffset);
    Module._free(data3_arr.byteOffset);
    Module._free(data4_arr.byteOffset);
    Module._free(data_arr.byteOffset);
    //Module._free(answ_arr.byteOffset);
    Module._free(outbeg);
    Module._free(outnb);
    if (ritorno === 0) return (normalArray.reverse());
    else return (["ERR" + ritorno]); // reverse it or not?
}



_fADX = function(data, data2, data3, period) {
    if (typeof data != "object" || typeof data.length == "undefined") return (["input is not an array"]);
    if (typeof data2 != "object" || typeof data2.length == "undefined") return (["input2 is not an array"]);
    if (typeof data3 != "object" || typeof data3.length == "undefined") return (["input2 is not an array"]);
    // should check for equal length and/or cut where needed
    //val = _malloc(1);
    var outbeg = _malloc(4);
    var outnb = _malloc(4);

    var answ = new Float64Array(data.length);

    var data_arr = array2heapPtr(data);
    var dataptr = data_arr.byteOffset;
    var data2_arr = array2heapPtr(data2);
    var data2ptr = data2_arr.byteOffset;
    var data3_arr = array2heapPtr(data3);
    var data3ptr = data3_arr.byteOffset;    
    var answ_arr = array2heapPtr(answ);
    var answptr = answ_arr.byteOffset;

    var ritorno = TA_ADX(0, data.length, dataptr, data2ptr, data3ptr, period, outbeg, outnb, answptr);
    console.log("retcode:" + ritorno);
    console.log("outbeg:" + getValue(outbeg));
    console.log("outnb:" + getValue(outnb));

    var heapFloats = new Float64Array(answ_arr.buffer, answ_arr.byteOffset, answ.length);
    var normalArray = [].slice.call(heapFloats);
    //console.log(normalArray);
    //se ciao te piacerebbe devi come minimo tagliare il risultato e poi paddarlo direi no reverse
    
    
    Module._free(data2_arr.byteOffset);
    Module._free(data_arr.byteOffset);
    //Module._free(answ_arr.byteOffset);
    Module._free(outbeg);
    Module._free(outnb);
    if (ritorno === 0) return (normalArray.reverse());
    else return (["ERR" + ritorno]); // reverse it or not?
}
//3.1.1 youre not freeing answ..
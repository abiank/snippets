function htmstring(col,wi,he) {
var color = encodeHex(col);
var data = generatePixel(color);
return "<img src='"+data+"' width="+wi+" height="+he+">";
}

function encodeHex(s) {
    s = s.substring(1, 7);
    if (s.length < 6) {
        s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
    }
    return encodeRGB(
    parseInt(s[0] + s[1], 16), parseInt(s[2] + s[3], 16), parseInt(s[4] + s[5], 16)
    );
}

function encodeRGB(r, g, b) {
    return encode_triplet(0, r, g) + encode_triplet(b, 255, 255);
}

function encode_triplet(e1, e2, e3) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    enc1 = e1 >> 2;
    enc2 = ((e1 & 3) << 4) | (e2 >> 4);
    enc3 = ((e2 & 15) << 2) | (e3 >> 6);
    enc4 = e3 & 63;
    return keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
}


function generatePixel(color) {
    return "data:image/gif;base64,R0lGODlhAQABAPAA" + color + "/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
}

tmp2hex = function(t){
    var dif = t-23;
    if (dif < 0) return "#08"+Math.round(Math.abs(dif)).toString(16);
    if (dif > 0) return "#"+Math.round(Math.abs(dif)).toString(16);+"80";
    return 0;
}


console.log(102);

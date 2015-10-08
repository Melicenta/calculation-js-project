function pow(x, n) {
    var result = 1;
    if (n < 0) {
        n = n * (-1);
        for (var i = 0; i < n; i++) {
           // result = Math.sqrt(-1);
            result *= (-1)*1 / x;

        }
        console.log("this is n < 0 ",result);
}
if (n > 0 && (n ^ 0) === n) {
    for (var i = 0; i < n; i++) {
        result *= x;
    }
    console.log("this is n > 0 ",result);
}
if ((n ^ 0) !== n && x > 0){
    var dec = n*150; //this is to convert decimal fraction into integer and then to take an sqrt from the x
    for (var i = 0; i < n; i++) {
    result = Math.sqrt(x);
    }
    console.log("this is n with floating point ",result);
}
return result;
}
 alert( pow(5,-1));
 alert( pow(5,3));
 alert( pow(1,0.5));

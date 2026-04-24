var myAtoi = function(s) {
    let i = 0;
    let n = s.length;
    
    while (i < n && s[i] === " ") i++;
    
    let sign = 1;
    if (i < n && (s[i] === "+" || s[i] === "-")) {
        if (s[i] === "-") sign = -1;
        i++;
    }
    
    let result = 0;
    while (i < n && s[i] >= "0" && s[i] <= "9") {
        result = result * 10 + (s[i] - "0");
        i++;
        
        if (sign * result > 2**31 - 1) return 2**31 - 1;
        if (sign * result < -(2**31)) return -(2**31);
    }
    
    return sign * result;
};
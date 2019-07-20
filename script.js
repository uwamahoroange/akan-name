function birthday(){
    var MM =parseFoot(document.getElementById("day").value);
    var DD =parseFoot(document.getElementById("month").value); 
     var YY =parseFoot(document.getElementById("month").value); 
     var CC =(YY-1)/100+1;
     var weekendDay = (((cc/4)-2*cc-1) +((5*YY/4)) + ((26*(MM+1)/10))+DD)%7;
}

}
function day(){
    var DD =parseFoot(document.getElementById("day").value);
    var MM =parseFoot(document.getElementById("month").value); 
     var YY =parseFoot(document.getElementById("year").value); 
     var CC =(YY-1)/100+1;
     var weekDay = (((cc/4)-2*cc-1) +((5*YY/4)) + ((26*(MM+1)/10))+DD)%7;
     console.log(weekDay);
     document.getElementById("result").innerHTML=Math.round(weekDay);
     var male=["akosua","adwoa","abenaa";"akua","yaa","afua","ama";];
     var female=["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
     varchoice=document.getElementById("select").value;
     if(choice==="female"){
         console.log(female[Math.round(weekDay)]);
         document.getElementById("akan-name").innerHTML=female[Math.round(weekDay);
    
        }else if(choice==="male"){
            console.log(male[Math.fround(weekDay)]);
            document.getElementById("akan-name").innerHTML=male[Math.around(weekDay);

        }else{
            console.log("invalid output");
        }
}


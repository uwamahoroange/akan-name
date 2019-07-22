
function day() {
    var DD = parseFloat(document.getElementById("day").value);
    var MM = parseFloat(document.getElementById("month").value);
    var YY = parseFloat(document.getElementById("year").value);
    var cc = (YY - 1) / 100 + 1;
    var weekday =( ( (cc/4) -2*cc-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    document.getElementById("result").innerHTML = Math.round(weekday);

    var males = ["kwasi", "kwadwo", "kwabena", "kwaku", "kofi", "kwame"];
    var females = ["akosua", "Adwoa", "abenaa", "akua", "yaa", "afua", "ama"];

    var choice = document.getElementById("select").value;
    if (choice === "male") {
        //   {
            console.log(males[Math.round(weekday)]);
        document.getElementById("name").innerHTML = males[Math.round(weekday)];

    }else if (choice === "female") {
        // if (weekday === 7) {
            console.log(females[Math.round(weekday)]);
        document.getElementById("name").innerHTML = females[Math.round(weekday)];
    }else{
           console.log("invalid");
       }
    }

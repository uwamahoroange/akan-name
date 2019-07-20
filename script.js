function weekday() {
    var DD = parseFloat(document.getElementById("day")).value;
    var MM = parseFloat(document.getElementById("month")).value;
    var YY = parseFloat(document.getElementById("year")).value;
    var cc = (YY - 1) / 100 + 1;
    var weekday = Math.round((((cc / 4) - 2 * cc - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
    
    var female = ["kwasi", "kwadwo", "kwabena", "kwaku", "kofi", "kwame"];
    var male = ["akosua", "Adwoa", "abenaa", "akua", "yaa", "afua", "ama"];
    var choice = document.getElementById("result").value;
    if (choice === "male") {
        if(weekday===7) {
            document.getElementById("result").innerHTML = male[weekday];
        }
    } else if (choice === "female") {
        if(weekday===7) {
            document.getElementById("result").innerHTML = female[weekday];
        }
    }
    
}


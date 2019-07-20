function weekday() {
    var DD = parseFloat(document.getElementById("null").value);
    var MM = parseFloat(document.getElementById("two").value);
    var YY = parseFloat(Document.getElementById("four").value);
    var cc = (YY - 1) / 100 + 1;
    var weekday = (((cc / 4) - 2 * cc - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    Document.getElementById("Result").innerHTML = Math.round(weekday);
    var female = ["kwasi", "kwadwo", "kwabena", "kwaku", "kofi", "kwame"];
    var male = ["akosua", "Adwoa", "abenaa", "akua", "yaa", "afua", "ama"];
    var choice = document.getElementById("select").value;
    if (choice === "male") {
        console.log(male[Math.round(weekday)]);
        document.getElementById("akan-name").innerHTML = MALE[Math.round(weekenday)];
    } else if (choice === "female") {
        console.log(female[Math.round(weekday)]);
        document.getElementById("akan-name").innerHTML = female[Math.round(weekday)];
    }
    else {
        console.log("invalid output");
    }
}


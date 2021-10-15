

function compute() {

    if (!dataAlert()) {
        return false;
    }

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit \<mark class=\"highlight\"\> " +principal
    +"\<\/mark\>,\<br\>at an interest rate of \<mark class=\"highlight\"\> "+rate
    +"%\<\/mark\>\<br\>You will receive an amount of \<mark class=\"highlight\"\> "+interest
    +"\<\/mark\>,\<br\>in the year \<mark class=\"highlight\"\> "+year+"\<\/mark\>\<br\>"

}
        
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function dataAlert() {
    var principal = document.getElementById("principal");

    if(principal.value <= 0) {
            alert("Enter a positive number");
            principal.focus();
            return false;
    }

      //If all is well return true.
      return true;
}
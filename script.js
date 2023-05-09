function convert() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
  
    if (celsius !== "") {
      var result = (celsius * 9/5) + 32;
      document.getElementById("result").innerHTML = celsius + "°C = " + result + "°F";
    } else if (fahrenheit !== "") {
      var result = (fahrenheit - 32) * 5/9;
      document.getElementById("result").innerHTML = fahrenheit + "°F = " + result + "°C";
    } else {
      document.getElementById("result").innerHTML = "Please enter a temperature";
    }
  }
  
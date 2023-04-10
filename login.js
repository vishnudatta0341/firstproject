var x = localStorage.setItem("user", "qaifi");
var y = localStorage.setItem("pass", "qaifi");
function authen() {
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  password.type='text';
  if (
    email == localStorage.getItem('user') &&
    password == localStorage.getItem('pass')
  ) {
    window.location.assign("orders.html");
    alert("Login Successfully");
  } else {
    alert("Please Enter Valid Credentials");
  }
}

 var typed = new Typed('#typed', {
  strings: [ 'Im a Himal oli','Benjamin Graham', 'a web developer', 'author'],
 typeSpeed: 50,
   loop: true,
});


// console.log(document)
//document.getElementById("testing1").style.color="blue";

document.getElementById("backbtn").addEventListener("click",function() {
  // console.log("clicked");
  // document.getElementById("clientsid").style.color="red";
  document.querySelector(".feedback").scrollBy({
    left: -100,
    behavior: "smooth"
  })
 })


document.getElementById("endbtn").addEventListener("click",function() {
  // console.log("clicked");
  // document.getElementById("clientsid").style.color="red";
  document.querySelector(".feedback").scrollBy({
    left: 100,
    behavior: "smooth"
  })
 })

 // form validation
 function validateForm() {
  var name = document.getElementById("name").value; 
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;

  if (name.length == 0) {
    document.getElementById("name-error").innerHTML = "Name is required";
    return false;
  } else {
    document.getElementById("name-error").innerHTML ="";
  }
  if (password1.length == 0) {
    document.getElementById("password1-error").innerHTML = "password is required"
    return false;
  }else {
    document.getElementById("password1-error").innerHTML ="";
  }

  if (password1.length <8) {
    document.getElementById("passwoed1-error").innerHTML = "password must be at least 8 characters"
    return false;
  }else { 
    document.getElementById(password1-error).innerHTML = "";
  }
  if(password2.length == 0) {
    document.getElementById("password2-error").innerHTML = "password is required"
    return false;
  }else {
    document.getElementById(password2-error).innerHTML = "";
  }
  if (password1 !=password2) {
    document.getElementById("password2-error").innerHTML = "password do not match";
    return false;
  }
 }
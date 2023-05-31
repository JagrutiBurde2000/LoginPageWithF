var loginForm=document.getElementById("loginForm")
var SignForm=document.getElementById("signupForm")
var User=document.getElementById("userData" )

//for Login

var loginName=document.getElementById("name")
var loginEmail=document.getElementById("email")
var loginPassword=document.getElementById("password")

//for signup
var signupName=document.getElementById("username")
var signupEmail=document.getElementById("signupEmail")
var signupPassword=document.getElementById("signupPassword")
var confirmPassword=document.getElementById("confirmPassword")


//Storing userDAta
var storedName=document.getElementById("loggedInUsername")
var storedEmail=document.getElementById("loggedInEmail")

//button

var loginbutton=document.getElementById("loginbutton")
var signupbtn=document.getElementById("signupbtn")

var signUp=document.getElementById("SignUp")
var goToLogin=document.getElementById("return")
var logoutBtn=document.getElementById("logout")

var storedLoginData={
    name:"",
    email:"",
    password:""
};


loginbutton.addEventListener("click",()=>{
    var name=loginName.value;
    var email=loginEmail.value;
    var password=loginPassword.value;

    if(name && email && password){
        displayUserData(name, email)
    }else{
        alert("please fill all the required fields")
    }
})


function displayUserData(name, email){
    storedLoginData.name=name;
    storedLoginData.email=email;
    storedLoginData.password=password;

storedName.innerHTML="Logged in as: "+name;
storedEmail.innerHTML="Email: "+email

loginForm.style.display="none"
User.style.display="block"
}

logoutBtn.addEventListener("click",()=>{
    User.style.display="none"
    loginForm.style.display="block";

    loginName.value="";
    loginEmail.value="";
    loginPassword.value="";
})

signupbtn.addEventListener("click",()=>{
    loginForm.style.display="none";
    signupForm.style.display="block";

    signupName.value = "";
    signupEmail.value ="";
    signupPassword.value = "";
    confirmPassword.value="";
})


signUp.addEventListener("click",()=>{
    var username=signupName.value;
    var email=signupEmail.value;
    var password=signupPassword.value;
    var confirmpassword=confirmPassword.value;


    if(username && email && password && confirmpassword){
       if(password===confirmpassword){
        signupForm.style.display="none";
        loginForm.style.display="block"
  
        signupName.value = "";
        signupEmail.value ="";
        signupPassword.value = "";
        confirmPassword.value="";

       }else{
        alert("Passwords do not match. Please re-enter.");
       }
    }else{
        alert("Please fill in all required fields.");
    }
})


goToLogin.addEventListener("click",()=>{
    signupForm.style.display = "none";
    loginForm.style.display = "block";
})
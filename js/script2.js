const admin = [
  {
      email:"admin@mail.ru",
      psw:"123123",
      name: "admin",
  },
]
localStorage.setItem("admin", JSON.stringify(admin));
 


function myValidation(){  
    if(validation())
    {
        
    }
    return false;     
}

function validation(){
    
    var password = document.reg.psw.value;
    var email = document.reg.email.value; 
    if (email==null || email==""){
        alert("Вы забыли ввести email");  
        var error = document.getElementById("email");
        error.classList.add("error");
      return false;  
    }
    else {
        var sucess = document.getElementById("email");
        sucess.classList.remove("error"); 
    }

    if(password.length<6){  
        alert("Пароль должен включать в себя 6 символов");
        var error = document.getElementById("psw");
        error.classList.add("error");  
      return false;  
      }
      else {
        var sucess = document.getElementById("psw");
        sucess.classList.remove("error");
    }
    admincheck();
}


let name = localStorage.getItem('name')?localStorage.getItem('name'):''

function saveData(){

let email,psw;

email=document.getElementById("email").value;
psw=document.getElementById("psw").value;

let user_records=new Array();

user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email && v.psw==psw})){

alert("Вход действителен");

let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]

    localStorage.setItem('name',current_user.name);
    localStorage.setItem('email',current_user.email);

  window.location.href="index3.html"
}
else
{
  alert('Вход не действителен');
}

}

function admincheck(){

  let email,psw;

  email=document.getElementById("email").value;
  psw=document.getElementById("psw").value;
  
  let admin_records=new Array();
  let user_records=new Array();
  user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  admin_records=JSON.parse(localStorage.getItem("admin"))?JSON.parse(localStorage.getItem("admin")):[]

  if(admin_records.some((v)=>{return v.email==email && v.psw==psw})){
  
  alert("Вход действителен");
  
  let current_user=admin_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
  
      localStorage.setItem('name',current_user.name);
      localStorage.setItem('email',current_user.email);
  
    window.location.href="index4.html"
  }
  else if(user_records.some((v)=>{return v.email==email && v.psw==psw}))
  {
    alert("Вход действителен");

    let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]

    localStorage.setItem('name',current_user.name);
    localStorage.setItem('email',current_user.email);

    window.location.href="index3.html"
  }
  else{
      alert('Вход не действителен');
  }
}
  
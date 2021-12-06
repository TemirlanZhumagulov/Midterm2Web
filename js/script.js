function myValidation(){  
    if(validation())
    {

    }
    return false;     
}

function validation(){
    var name = document.reg.name.value;
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

    if (name==null || name==""){
        alert("Вы забыли ввести имя");  
        var error = document.getElementById("name");
        error.classList.add("error");
      return false;  
    }
    else {
        var sucess = document.getElementById("name");
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
    
    saveData();  
}

function saveData(){

  let email,name,psw;
  
  name = document.getElementById("name").value;
  
  email = document.getElementById("email").value;
  
  psw = document.getElementById("psw").value;
  
  let user_records=new Array();
  
  user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records.some((v)=>{return v.email==email}))
  {
  alert("Такой email уже зарегистрирован");
  }
  else if(email==="admin@mail.ru"){
    alert("Вам не разрешено использовать такой email");
  }
  else
  {
  user_records.push({

  "name":name,

  "email":email,

  "psw":psw

  })

  localStorage.setItem("users",JSON.stringify(user_records));
  
  alert("Данные сохранены");
  }
  }
    
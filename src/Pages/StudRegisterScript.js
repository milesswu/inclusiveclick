var form = document.getElementById("register");

function checkBlankAndValidate(u, p1, p2){
    var error = document.getElementById("error");
    if(u === ""){
        error.innerHTML = "Username must not be blank";
        var popup = document.getElementById("error");
        popup.classList.toggle("show");
        return false;
    }
    if(p1 === ""){
        error.innerHTML = "Password must not be blank";
        var popup = document.getElementById("error");
        popup.classList.toggle("show");
        return false;
    }
    if(p1 != p2){
        
        error.innerHTML = "Passwords must match!";
        var popup = document.getElementById("error");
        popup.classList.toggle("show");
        return false;
    }
    return true;
}

form.onsubmit = function(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        console.log("State");
        if(xhttp.readyState === 4){
            var resp = JSON.parse(xhttp.responseText);
            if(resp.success)
                console.log("successfully registered user")
            }
        }

    if(checkBlankAndValidate(username, password, password2)){
        xhttp.open("POST", "https://rocky-badlands-35742.herokuapp.com/student/register", true);
        xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        console.log("Got message to POST");
        xhttp.send(JSON.stringify({"username":username, "password":password}));
        return false;
    }else{
        document.getElementById("password").value = "";
        document.getElementById("password2").value = "";
        return false;
    }
};

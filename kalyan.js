function toggleMode() {

    document.body.classList.toggle("dark");

    let btn = document.getElementById("themeBtn");

    if(document.body.classList.contains("dark")){
        btn.innerHTML = "Light Mode";
    }
    else{
        btn.innerHTML = "Dark Mode";
    }

}

function sendMessage(event) {

    event.preventDefault();

    alert("Message Sent Successfully!");

}

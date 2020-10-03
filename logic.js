function changeBackgroundColor(){
    setInterval(() => {
        let body = document.getElementById("cenas");
        if(body.style.backgroundColor == "yellow"){
            body.style.backgroundColor = "green";
        } else {
            body.style.backgroundColor = "yellow";
        }
    }, 1000);
    
}

changeBackgroundColor();


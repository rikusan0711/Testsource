function clickTest(){
    target = document.getElementById("anime-test");
    if (target.className == null || target.className == ""){
        console.log("test");
        target.className = "active";
    }else{
        target.className = "";
    }
}
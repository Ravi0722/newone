function showMenu(){
    var m = document.querySelector(".popup");
    m . classList.add("smenu");
}
function closeMenu(){
    var m = document.querySelector(".popup");
    m . classList.remove("smenu");
}
 function notice(){
    setTimeout(
        function(){
            alert("welcome");
        },
        4000
    )
 }
 function year(){
 var date = new Date();
   document.getElementById("tt").innerText=date.getFullYear();
  
 }
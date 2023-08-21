let btn = document.querySelector("button");
let bodys =  document.querySelector("body");
btn.addEventListener("click",function()
{
   
    bodys.classList.toggle("myDark");
    if(btn.innerHTML == "Dark Mode")
    {
        btn.innerHTML = "Light Mode";
    }
    else
    {
        btn.innerHTML = "Dark Mode";
    }
    
})
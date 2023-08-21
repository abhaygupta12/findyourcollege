
let pop = document.querySelector(".bg-model");
let body = document.getElementById("body");
let cross = document.getElementById("cross");
let sign = document.getElementById("sign");

sign.addEventListener("click",function(){
   
    pop.classList.add("active");
})
  cross.addEventListener("click",function()
  {
      pop.classList.remove("active");
      
  })























//   let url = "http://localhost:1298/city";

//   function getCity()
//   {
//     document.getElementById("city").innerHTML="";
//       fetch(url)  // return promise data receive or not
//       .then((res) =>res.json()) // promise complete means data fetch
//       .then((data)=>
//       //now put the fetched data into select
//       {
//           for(i=0;i<data.length;i++)
//           {
//              let element = document.createElement("option"); //<option></option>
//               // put data in option first
//               //1. pick DElhi
//               let text = document.createTextNode(data[i].cityName);//Delhi
//               element.appendChild(text); //<option>Delhi</option>
//               element.value = data[i]._id;//<option value="1">Delhi</option>
//               // send this option(element) to html
//               document.getElementById("city").appendChild(element);
  
//           }
//       })
//   }
//   window.onload=getCity();
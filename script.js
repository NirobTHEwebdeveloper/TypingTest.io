// let shop = document.getElementById("shop")

// let shopdetails =[{
//   id:"Nirob",
//   name: "Exclusive shirt",
//   Disc: "Fannel shirt with new crafts ongoing",
//   Price: "$70",
//   Image:"img-1.jpg"
  

// },{
//   id:"NirobInzamam",
//   name: "Exclusive Formal Shirt",
//   Disc: "Fannel shirt with new crafts ongoing",
//   Price: "$88",
//   Image:"img-2.jpg"
  
// },{
//   id:"InzamamNirob",
//   name: "Exclusive t shirt",
//   Disc: "Fannel shirt with new crafts ongoing",
//   Price: "$48",
//   Image:"img-3.jpg"
  
// },{
//   id:"InzamamNirobkhan",
//   name: "Exclusive blazzer coat",
//   Disc: "Fannel shirt with new crafts ongoing",
//   Price: "$110",
//   Image:"img-4.jpg"
  
// }]

// let basket = [];

// let generateShop =()=>{
//   return (shop.innerHTML = shopdetails.map((x)=>{
//     let {id,name,Price, Disc,Image} = x;
//     return `<div id = product-id-${id} class="item">
//     <img width="217" src="${x.Image}" alt="">
//     <div class="details">
//       <h3>${x.name}</h3>
//       <p>${x.Disc}</p>
//       <div class="price-quantity">
//         <h2>${x.Price}</h2>
//         <div class="buttons">
//           <i onclick="decrement(${id})" class="bi bi-dash"></i>
//           <div id = ${id} class="quantity">0</div>
//           <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
//         </div>
//       </div>
//     </div>
//   </div>
//   `

   
// }).join(""))
// }

// generateShop();

// // Increment decrement update(+- for product quantity):

// let increment = (id)=>{
//   let selectedItem = id;
//   let search = basket.find((x)=> x.id === selectedItem.id);


//   if(search === 0)return;
//   else{

//   search.item += 1;
// }
 
//   console.log(basket);
// };




// let decrement = (id)=>{
//   let selectedItem = id;
//   let search = basket.find((x)=> x.id === selectedItem.id);


//   if(search.item === 0)return;

//   else {

//   search.item -= 1;
// }
 
//   console.log(basket);
// };
  
// let update = ()=>{}
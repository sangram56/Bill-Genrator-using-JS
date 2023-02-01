var name, email; //global variable
//food price variable
var chicken_price=100, pizza_price=200;
//for quantity
var chickenq=0;
var pizzaq=0;
//storing the value
var chickenPriceShow="",pizzzaPriceShow="";




//fetch the name and email
document.getElementById("name").addEventListener("keyup", function () {
  //  name=this.value;
document.getElementById("name2").innerHTML = this.value;
});

document.getElementById("email").addEventListener("keyup", function () {
  // email=this.value;
  document.getElementById("email2").innerHTML = this.value;
});





//fetch the food price
document.getElementById("chicken").addEventListener("keyup",function(){
    if(this.value == "" || this.value ==0){
        chickenPriceShow=" ";
        chickenq=0;
        showbill();
    }else{
        chickenq=this.value;
        chickenPriceShow=" <tr><td>chicke 65</td><td>rs. "+chicken_price+"</td><td>"+chickenq+"</td><td>"+chicken_price+"x"+chickenq+"= "+chicken_price * chickenq+"</td></tr>";
         showbill();
    }

})

document.getElementById("pizza").addEventListener("keyup",function(){
    if(this.value == "" || this.value ==0){
       pizzzaPriceShow=" ";
       pizzaq=0;
       showbill();
    }else{
        pizzaq=this.value;
       pizzzaPriceShow=" <tr><td>Pizza</td><td>rs. "+pizza_price+"</td><td>"+pizzaq+"</td><td>"+pizza_price+"x"+pizzaq+"= "+pizza_price * pizzaq+"</td></tr>";
       showbill();
    }

})

function showbill(){
    document.getElementById("BillStatement").innerHTML=chickenPriceShow+pizzzaPriceShow;
    document.getElementById("amount").innerHTML=chicken_price * chickenq + pizza_price * pizzaq;
}





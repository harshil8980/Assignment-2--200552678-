document.addEventListener("DOMContentLoaded", function (event) {
  var orderButton = document.getElementById("order-btn");
  orderButton.addEventListener("click", function () {
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var sauce = document.getElementById("sauce").value;
    var price;
    //Prices according to the size
   // var sauce = document.querySelector('input[name="sauce"]:checked');
    if(size=="small")
    {
      price=9.99;
    }   
    else if(size=="medium")
    {
      price=10.99;
    }
    else if(size=="large")
    {
      price=12.99;
    }
      alert("Order Placed Successfully (:\n Size: "+size+"\n Type of pizza: "+crust+"\n Name of the sauce: "+sauce+"\n Price is: "+price);
   
    // Check if a sauce is selected
  });
});
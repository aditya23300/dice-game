//alert("hi");
//for first image random generation
var r = Math.random();
var randomNumber = Math.floor(r*6) + 1;//random no generator btw 1 and 6.
var randomDiceImage = "dice" + randomNumber + ".png";//made and stored the image name.
var randomImageSource = "images/" + randomDiceImage; //stored the complete address of the image to be produced.
var image1 = document.querySelectorAll("img")[0]; //selected the first image element
image1.setAttribute("src",randomImageSource);//changing the src attribute of img element 1 to our random image address.


//for second image random generation
var r2 = Math.random();
var randomNumber2 = Math.floor(r2*6) + 1;//random no generator btw 1 and 6.
var randomDiceImage2 = "dice" + randomNumber2 + ".png";//made and stored the image name.
var randomImageSource2 = "images/" + randomDiceImage2; //stored the complete address of the image to be produced.
var image2 = document.querySelectorAll("img")[1]; //selected the second image element
image2.setAttribute("src",randomImageSource2);//changing the src attribute of img element 2 to our random image address.

//displaying winner message...
if(randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!⭐";
}
else if(randomNumber < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins!⭐";
}
else{
  document.querySelector("h1").innerHTML = "⭐Draw!!!⭐";
}

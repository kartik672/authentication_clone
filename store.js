// const img1 = document.getElementsByClassName("img1");
// const img2 = document.getElementsByClassName("img2");
const img3 = document.getElementsByClassName("img3")[0];
const img4 = document.getElementsByClassName("img4")[0];
const img5 = document.getElementsByClassName("img5")[0];
// const imgchange = document.getElementsByClassName("imgchanger");

// function changeImageOnHover(){
//     img1.src = 
// }
// img1.addEventListener("mouseover", function(){
//     imgchange.src = "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70";

// })
const img1 = document.getElementsByClassName("img1")[0];
const img2 = document.getElementsByClassName("img2")[0];
const imgchange = document.getElementsByClassName("imgchanger")[0];

img2.addEventListener("mouseover", function(){
    imgchange.src = "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70";
    imgchange.style.width = "500px";
});
// img2.addEventListener("click", function(){
//     imgchange.src = "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=70";
//     imgchange.style.width = "500px";
// });
img2.addEventListener("mouseout", function(){
    imgchange.src = "./iphone14bgremoveimg1.png";
    imgchange.style.width = "400px";
});
img1.addEventListener("mouseover", function(){
    imgchange.src = "./iphone14bgremoveimg1.png";
    imgchange.style.width = "400px";
});
// img1.addEventListener("click", function(){
//     imgchange.src = "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70";
//     imgchange.style.width = "400px";
// });
img1.addEventListener("mouseout", function(){
    imgchange.src = "./iphone14bgremoveimg1.png";
    imgchange.style.width = "300px";
});
img3.addEventListener("mouseover", function(){
    imgchange.src = "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/b/z/-original-imaghxcpwuhbghgh.jpeg?q=70";
    imgchange.style.width = "500px";
});
img3.addEventListener("mouseout", function(){
    imgchange.src = "./iphone14bgremoveimg1.png";
    imgchange.style.width = "400px";
});
img4.addEventListener("mouseover", function(){
    imgchange.src = "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/i/7/-original-imaguypzzhbzm5an.jpeg?q=70";
    imgchange.style.width = "500px";
});
img4.addEventListener("mouseout", function(){
    imgchange.src = "./iphone14bgremoveimg1.png";
    imgchange.style.width = "400px";
});
img5.addEventListener("mouseover", function(){
    imgchange.src = "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/1/d/y/-original-imaghxcpvtta2hzs.jpeg?q=70";
    imgchange.style.width = "500px";
});
img5.addEventListener("mouseout", function(){
    imgchange.src = "./iphone14bgremoveimg1.png";
    imgchange.style.width = "400px";
});

const GB128 = document.getElementById("128GB");
const GB256 = document.getElementById("256GB");
const GB512 = document.getElementById("512GB");
const heading = document.getElementById("heading");

GB128.addEventListener("click",()=>{
    heading.innerHTML = "APPLE iPhone 14 (Blue, 128 GB)"
})
GB256.addEventListener("click",()=>{
    heading.innerHTML = "APPLE iPhone 14 (Blue, 256 GB)"
})
GB512.addEventListener("click",()=>{
    heading.innerHTML = "APPLE iPhone 14 (Blue, 512 GB)"
})

const red = document.getElementById("red")
const blue = document.getElementById("blue")
const black = document.getElementById("black")
const white = document.getElementById("white")

red.addEventListener("click",()=>{
    imgchange.src="./rediphone14removebg.png"
    heading.innerHTML = "APPLE iPhone 14 (Red, 128 GB)"
})
blue.addEventListener("click",()=>{
    imgchange.src="./iphone14bgremoveimg1.png"
    heading.innerHTML = "APPLE iPhone 14 (blue, 128 GB)"
})
black.addEventListener("click",()=>{
    imgchange.src="./blackiphone14removebg.png"
    heading.innerHTML = "APPLE iPhone 14 (black, 128 GB)"
})
white.addEventListener("click",()=>{
    imgchange.src="./whiteiphone14removebg.png"
    heading.innerHTML = "APPLE iPhone 14 (white, 128 GB)"
})

let btn = document.querySelector(".button1");

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This will create a smooth scroll effect
    });
});



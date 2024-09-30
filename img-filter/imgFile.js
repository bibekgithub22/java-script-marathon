let imgArr = ["img1.jpg", "img2.png", "img3.webp", "img4.gif"];

let prefixArr = [];

for (let i = 0; i < imgArr.length; i++) {
  let imgName = imgArr[i].split(".")[0];

  prefixArr.push(imgName);
}

console.log(prefixArr);
// console.log(prefixArr.join());  //use this to get output as string

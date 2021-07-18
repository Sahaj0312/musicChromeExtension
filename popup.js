import {obj} from './background.js'

const o = obj


let butn = document.getElementById("button");
butn.addEventListener("click", reset);



function reset() {
    document.getElementById("pic").innerHTML = "";
    document.getElementById("link").innerHTML = "";
    document.getElementById("showRecc").innerHTML = "";
    setup()
}

function setup() {
    var i = generateRandomIndex(0,o["song"].length)
    var img = o["image"][i]
    var link = o["link"][i]
    var song = o["song"][i]
    var artist = o["artist"][i]
    display(img,link,song,artist)
}



function display(i,l,s,a) {
    var img = document.createElement("img");
    img.src = i
    document.getElementById("pic").appendChild(img);
    var link = document.createElement("a");
    link.innerHTML = "listen";
    link.href = l
    link.target="_blank"
    link.style.color = "black"
    document.getElementById("link").appendChild(link);
    var bod = document.getElementById("showRecc")
    bod.style.color = "black"
    bod.innerHTML = s + " by " + a
}


const generateRandomIndex = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
};




  

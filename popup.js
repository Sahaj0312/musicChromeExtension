let butn = document.getElementById("button");
butn.addEventListener("click", reset);


function reset() {
    document.getElementById("pic").innerHTML = "";
    document.getElementById("link").innerHTML = "";
    document.getElementById("showRecc").innerHTML = "";
    ratata()


}


function ratata() {
    
    getData("https://musicrecc.herokuapp.com/rec",(data) => {
    var img = document.createElement("img");
    img.src = data["image"]
    document.getElementById("pic").appendChild(img);
    var link = document.createElement("a");
    link.innerHTML = "listen";
    link.href = data["link"];
    link.target="_blank"
    link.style.color = "black"
    document.getElementById("link").appendChild(link);
    var bod = document.getElementById("showRecc")
    bod.style.color = "black"
    bod.innerHTML = data["song"] + " by " + data["artist"]
});

   


}

function getData(url,cb) {
    fetch(url)
      .then(response => response.json())
      .then(result => cb(result));
  }

  

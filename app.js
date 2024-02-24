const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log(h1.className);
}

h1.addEventListener("click", handleTitleClick);

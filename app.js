const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.className === clickedClass){
        h1.classname = "";
    } else{
        h1.classname = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);

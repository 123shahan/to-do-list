const tittle = document.querySelector(".tittle");

const inputList = document.querySelector(".input-list");

const button = document.querySelector(".button");

const infoList = document.querySelector(".info-list");


button.addEventListener("click", function(){

    const newLi = document.createElement("li");

    infoList.classList.remove("box");

    const liContent = document.createTextNode(inputList.value);

    newLi.appendChild(liContent);

    infoList.appendChild(newLi);

    inputList.value = "";

    newLi.addEventListener("click",function(){

        newLi.style.textDecoration = "line-through";
    });

    newLi.addEventListener("dblclick",function(){

        infoList.removeChild(newLi);
    });

});

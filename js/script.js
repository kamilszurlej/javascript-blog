'use strict';

function titleClickHandler(){
    console.log('Link was clicked!');
    console.log(event);

    //remove class 'active' from all links

    //add class 'active' to clicked link

    //remove class 'active from all articles

    //get 'href' attribute from the clicked link

    //find the correct article using the selector (value of 'href' attribute)

    //add class 'active' to the correct article

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
}
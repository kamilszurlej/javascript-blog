'use strict';

//5.3
function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;

    //remove class 'active' from all links
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }

    //add class 'active' to clicked link
    clickedElement.classList.add('active');

    //remove class 'active' from all articles
    const activeArticles = document.querySelectorAll('.posts article');
    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }

    //get 'href' attribute from the clicked link
    const clickedElementHref = clickedElement.getAttribute('href');

    //find the correct article using the selector (value of 'href' attribute)
    const targetArticle = document.querySelector(clickedElementHref);
    
    //add class 'active' to the correct article
    targetArticle.classList.add('active');
}

//5.4
const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles',
      titleList = document.querySelector(optTitleListSelector);
;

function generateTitleLinks(){
    //remove content of titleList
    function clearMessages(){
        titleList.innerHTML = '';
    }
    clearMessages();

    //find all articles and save them to articles
    let html = '';
    const articles = document.querySelectorAll(optArticleSelector);
    for(let article of articles){
        //get article id
        const articleId = article.getAttribute('id');

        //find title element
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

        //create html of the link
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

        //insert saved html to links list
        titleList.insertAdjacentHTML('beforeend', linkHTML);
        html = html + linkHTML;
    }
    titleList.innerHTML = html;
}
generateTitleLinks();

const links = document.querySelectorAll('.titles a');
for(let link of links){
    link.addEventListener('click', titleClickHandler);
}
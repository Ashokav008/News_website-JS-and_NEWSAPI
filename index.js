let source = 'the-times-of-india';
let apiKey = 'a7311ebe091f43d4974168dc9f75dce4';
// ------------------------Option Selecting--------------
// ------------------------Option Selecting--------------
// ------------------------Option Selecting--------------
let span_Category = document.querySelector("#category");
let category = "technology";
let drp_downItem = document.getElementsByClassName("dropdown-item")
    // console.log(drp_downItem);
let i;
drp_downItem[0].addEventListener('click', EventHandeler1);
drp_downItem[1].addEventListener('click', EventHandeler2);
drp_downItem[2].addEventListener('click', EventHandeler3);
drp_downItem[3].addEventListener('click', EventHandeler4);

function EventHandeler1() {

    // console.log("clicked on 1st event");
    category = "technology";
    span_Category.innerHTML = "Technology"
    backend();

}

function EventHandeler2() {

    // console.log("clicked on 2nd event");
    category = "business";
    span_Category.innerHTML = "Business"
    backend();

}

function EventHandeler3() {

    // console.log("clicked on 3rd event");
    category = "entertainment";
    span_Category.innerHTML = "Entertainment"
    backend();

}

function EventHandeler4() {

    // console.log("clicked on 4th event");
    category = "sports";
    span_Category.innerHTML = "Sports"
    backend();

}

function backend() {
    let newsAccordion = document.querySelector("#newsAccordion");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`, true);

    //what to do when response is in process

    //what to do when response is ready 
    xhr.onload = function() {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            // console.log(articles);

            let newsHtml = "";


            articles.forEach(function(element, index) {
                let news = `<div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                 <b>Breaking News ${index+1}:</b> ${element["title"]}
                    </button>
                  </h2>
                  <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                   <div class="accordion-body"> ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a>
                  </div>
                </div>
                </div>`;
                newsHtml += news;

            });
            newsAccordion.innerHTML = newsHtml;
        } else {
            console.log("Some error Occured");
        }
    }
    xhr.send();
}
backend();
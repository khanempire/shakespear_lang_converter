var inputText=document.querySelector("#translate-input");
var button=document.querySelector("#btn-button");
var output=document.querySelector("#translate-output");

var url="https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(input){
    return url + "?" + "text=" + input;
}

function clickHandler(){
    var input=inputText.value;
    console.log(input);

    fetch(getTranslationURL(input))
    .then(response =>response.json())
    .then(json => {
        var translatedValue=json.contents.translated;
        output.innerText=translatedValue;
    })
    .catch(error => console.log(error));
}

button.addEventListener("click",clickHandler);


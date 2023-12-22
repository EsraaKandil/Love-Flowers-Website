let img = document.querySelector('.img');
let container = document.querySelector('.container');


function flowers(flower){

    img.src = flower;


}
function colors(color){
    container .Style.background = color ;


}

let names = document.getElementById("last name").value;
let email = document.getElementById("email").value;
let massage = document.getElementById("massage").value;
let  sentbtn= document.getElementById(" sentbtn").value;
let popup = document.getElementById("ok").value;
let ok = document.getElementById("ok").value;
if(names!=null && email!=null && massage!=null){
    sentbtn.addEventListener("click",function(e){
        e.preventDefault();
        popup.classlist.toggle('hidden')

    });
}


ok.addEventListener("click",function(e){
    e.preventDefault();
    popup.classlist.toggle('hidden')


});


function massage (){

}
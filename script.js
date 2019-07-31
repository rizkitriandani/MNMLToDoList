//
var btn = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");
var ls = document.querySelectorAll("li.item");
var dels = document.querySelectorAll("button.del");

//FITUR CHECK DAN UNCHECK LIST
document.getElementById("list").addEventListener("click", function(e) {
   
    if (e.target && e.target.matches("li.item")) {
      e.target.classList.toggle("done") ; // new class name here
    //   alert("clicked " + e.target.innerText);
    }
  });


  //FITUR DELETE LIST
//   document.getElementById("list").addEventListener("click", function(e) {
   
//     if (e.target && e.target.matches("button.del")) {
//      console.log(e.target.index);
//     }
//   });

// for(i=0; i < dels.length; i++) {

//     dels[i].index = i;
  
//     dels[i].addEventListener('click', function(e) {
      
//     console.log(e.target.index); 
//     var parent = document.getElementById("list");
//     var childList = document.getElementsByClassName("item")[e.target.index];
//     var childBtn = document.getElementsByClassName("del")[e.target.index];
//     parent.removeChild(childList);
//     parent.removeChild(childBtn);
//     },false);
//   }

for(var i = 0; i < dels.length; i++){
  
	dels[i].addEventListener("click", removeParent, false);
}

//fungsi untuk menghapus list. menghapus parentNode. hanya berguna bila button merupakan child dari parent
function removeParent(evt) {
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
  }





//SPESIFIK DIGUNAKAN UNTUK MENGECEK APAKAH INPUTAN ITU KOSONG ATAU TIDAK DAN LANGSUNG PROSES
function sbmit(){
        if(inputLength() > 0){ //kenapa harus ditambah dengan .length? karen input.value itu return string, sedangkan pembandingnaya adalah angka.
            tambahElemen();
        }else{
            window.alert("Data tidak boleh kosong!");
        }
}

//UNTUK EVENT LISTENER KLIK BUTTON
btn.addEventListener("click", sbmit);



input.addEventListener("keypress", function(event){
    if(event.keyCode === 13){ //kenapa harus ditambah dengan .length? karen input.value itu return string, sedangkan pembandingnaya adalah angka.
        sbmit();
    }
});

function inputLength(){
    return input.value.length;
}

function tambahElemen(){
        var li = document.createElement("li");
        var newBtn = document.createElement("button");
        li.className = "item";
        newBtn.className ="del";
        newBtn.onclick = removeParent;
        newBtn.appendChild(document.createTextNode("Delete"));
        li.appendChild(document.createTextNode(input.value)); //untuk mendapat value dari elemen tsb.
        li.appendChild(newBtn); 
        ul.appendChild(li);
        input.value="";
}






//VERSI ANDREI



// btn.addEventListener("click", function(){
//     if(inputLength() > 0){ //kenapa harus ditambah dengan .length? karen input.value itu return string, sedangkan pembandingnaya adalah angka.
//         tambahElemen();
//     }else{
//         window.alert("Data tidak boleh kosong!");
//     }
// });

// input.addEventListener("keypress", function(event){
//     if(inputLength() > 0 && event.keyCode === 13){ //kenapa harus ditambah dengan .length? karen input.value itu return string, sedangkan pembandingnaya adalah angka.
//         tambahElemen();
//     }else{
//         window.alert("Data tidak boleh kosong!");
//     }
// });

// function inputLength(){
//     return input.value.length;
// }

// function tambahElemen(){
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value)); //untuk mendapat value dari elemen tsb.
//         ul.appendChild(li);
//         input.value="";
// }

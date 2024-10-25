function toCheck(){
    let userInput = document.getElementById("userInp").value;
    if(userInput.indexOf("a")!=-1 || userInput.indexOf("e")!=-1 ||userInput.indexOf("i")!=-1 ||
    userInput.indexOf("o")!=-1 ||userInput.indexOf("u")!=-1){
       let answer = document.getElementById("answer")
       answer.innerText = "There is a vowel in that string !"
    }else if(userInput===""){
      alert("Enter something first in the box !")
    }else{
       let answer = document.getElementById("answer")
       answer.innerText = "These contains only consonants    !"
    }
}
function addingLikes(element){
  alert('Ninja was liked');
  element.innerText ++;
}

function logIn(element){
    if(element.innerText === "Log In"){
      element.innerText = "Log Out";}
    else if(element.innerText === "Log Out"){
      element.innerText = "Log In";
    }
}
  



function addDefinition(element){
  element.remove();
}
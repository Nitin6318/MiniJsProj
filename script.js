let myStatus = document.querySelector("h5");

let addFriend = document.querySelector("#add");

let check = 0;

addFriend.addEventListener("click", function(){
    if(check == 0){
        myStatus.innerHTML = "Friends";
        myStatus.style.color = "green";
        addFriend.innerHTML = "Remove Friend";
        check = 1;
    }
    else {
        myStatus.innerHTML = "Stranger";
        myStatus.style.color = "rgb(239, 42, 45)";
        addFriend.innerHTML = "Add Friend";
        check = 0;
    }
   
})

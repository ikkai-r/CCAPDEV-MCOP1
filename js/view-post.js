// Reference Code: https://youtu.be/a4OA7QbHEho


let commentContainer = document.getElementById("comment");
let shareButton = document.querySelector(".share-cont");
let upvoteAlready = false;
let upvote = document.querySelector(".votes-cont i.fa-circle-up");
let downvoteAlready = false;
let downvote = document.querySelector(".votes-cont i.fa-circle-down");
console.log(upvote);

function createTextarea (){
    let div = document.createElement("div");
    div.setAttribute("class", "comment-textarea");

    div.innerHTML += `
    <div class="comment-textarea" contenteditable="true" placeholder="add text here" ></div>
    <div class="d-flex justify-content-between">
        <button class="comment-pill" id="comment-cancel" style="background-color: #DBDBDB;">cancel</button>
        <button class="submit-comment comment-pill" id="submit-comment" style="background-color: #D4A373;">send</button>
    </div>`;

    return div;
}

function addReply(text) {
    let div = document.createElement("div");
    div.setAttribute("class", "row comment");

    div.innerHTML += `
        <div class="col-1">
            <div><i class="fa-solid fa-up" style="color: #292F33;"></i></div>
            <div class="comment-vote-cont">2</div>
            <div><i class="fa-solid fa-down" style="color: #D4A373"></i></div>
        </div>
        <div class="col-11">
            <div class="row">
                <div class="col-1">
                    <img src="img/profile-pic.png" class="comment-profile-pic"/>
                </div>
                <div class="col-11">
                    <div class="comment-username">CreativeUsername</div>
                    <div class="comment-username">May 23, 2023</div>
                </div>
            </div>
            <div class="comment-content">${text}</div>
            <div class="comment-reply">reply</div>
            <div class="comment-hide-reply">hide replies</div>
        </div>`;

    
}


commentContainer.addEventListener("click", function(e){
    let replyClicked = e.target.classList.contains("comment-reply");
    // let submitClicked = e.target.;
    let closest = e.target.closest(".all-comment");

    if (replyClicked){
        console.log("reply clicked!");
        closest.appendChild(createTextarea ());
    }

    document.getElementById("submit-comment").onclick = function submitComment() {
        console.log("submit-button clicked!");
        const commentTextarea = e.target.closest(".comment-textarea");
        if (commentTextarea.children.value[0]) {
            closest.appendChild(addReply(commentTextarea.children[0].value));
            commentTextarea.remove();
        }
     };
    

    // if (submitClicked){
    //     console.log("submit-button clicked!");
    //     const commentTextarea = e.target.closest(".comment-textarea");
    //     if (commentTextarea.children[0].value) {
    //         closest.appendChild(addReply(commentTextarea.children[0].value));
    //         commentTextarea.remove();
    //     }
    // }
});

function copyLink() {
    let link = window.location.href;
    navigator.clipboard.writeText(link);
    alert("Copied share link!");

}

shareButton.addEventListener("click", function(){
    console.log("share link clicked!");
    copyLink();
    
});

upvote.addEventListener("click", function(){
    let upvoteNumber = document.querySelectorAll(".votes-cont span")[0].innerText;
    let downvoteNumber = document.querySelectorAll(".votes-cont span")[2].innerText;
    
    if (downvoteAlready && !upvoteAlready){
        console.log(upvoteNumber + " prior upvotes - post has already been downvoted. removed the downvote and upvoted the post instead")
        document.querySelectorAll(".votes-cont span")[2].innerHTML = parseInt(downvoteNumber) - 1;
        document.querySelectorAll(".votes-cont span")[0].innerHTML = parseInt(upvoteNumber) + 1;
        upvoteAlready = true;
        downvoteAlready = false;

    }
    else if (!upvoteAlready){
        document.querySelectorAll(".votes-cont span")[0].innerHTML = parseInt(upvoteNumber) + 1;
        console.log(upvoteNumber + " prior upvotes - upvoted the post!");
        upvoteAlready = true;
    }
    else{
        console.log("post has been already upvoted");
    }
    
    
});


downvote.addEventListener("click", function(){
    let upvoteNumber = document.querySelectorAll(".votes-cont span")[0].innerText;
    let downvoteNumber = document.querySelectorAll(".votes-cont span")[2].innerText;
    
    if (upvoteAlready && !downvoteAlready){
        console.log(downvoteNumber + " prior downvotes - post has already been upvoted. removed the upvoted and downvoted the post instead")
        document.querySelectorAll(".votes-cont span")[0].innerHTML = parseInt(upvoteNumber) - 1;
        document.querySelectorAll(".votes-cont span")[2].innerHTML = parseInt(downvoteNumber) + 1;
        downvoteAlready = true;
        upvoteAlready = false;

    }
    else if (!downvoteAlready){
        document.querySelectorAll(".votes-cont span")[2].innerHTML = parseInt(downvoteNumber) + 1;
        console.log(downvoteNumber + " prior downvotes - downvoted the post!");
        downvoteAlready = true;
    }
    else{
        console.log("post has been already downvoted");
    }
    
    
});


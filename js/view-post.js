// Reference Code: https://youtu.be/a4OA7QbHEho

let commentContainer = document.getElementById("comment-container");
var isCommenting = 0;

let shareButton = document.querySelector(".share-cont");
let upvoteAlready = false;
let upvote = document.querySelector(".votes-cont i.fa-circle-up");
let downvoteAlready = false;
let downvote = document.querySelector(".votes-cont i.fa-circle-down");
console.log(upvote);

function createTextarea (){
    let div = document.createElement("div");
    div.setAttribute("class", "commenting mt-2");
    div.setAttribute("id", "commenting");

    div.innerHTML += `
    <textarea class="comment-textarea" contenteditable="true" placeholder="add text here" ></textarea>
    <div class="d-flex justify-content-between">
        <button class="cancel-comment pill" id="comment-cancel" style="background-color: #DBDBDB;">cancel</button>
        <button class="submit-comment pill" id="submit-comment" style="background-color: #D4A373;">send</button>
    </div>`;

    return div;
}

function addReply(text) {
    let div = document.createElement("div");
    div.setAttribute("class", "all-comment");

    div.innerHTML += `
    <div class="row comment" id="comment">
        <!-- Votes. Except the icons wont appear im crying -->
        <div class="col-1" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div><i class="fa-regular fa-circle-up" style="color: #292F33; font-size: x-large"></i></div>
            <div class="comment-vote-cont">2</div>
            <div><i class="fa-regular fa-circle-down" style="color: #292F33; font-size: x-large"></i></div>
        </div>
        <div class="col-11">
            <!-- Username and Date Commented -->
            <div class="row">
                <div class="col-1">
                    <img src="img/profile-pic.png" class="comment-profile-pic">
                </div>
                <div class="col-11">
                    <div class="comment-username">CreativeUsername</div>
                    <div class="comment-username">May 23, 2023</div>
                </div>
            </div>
            <!-- Comment contents -->
            <div class="comment-content">
                ${text}
            </div>
            <span id="comment-reply"class="comment-reply">reply</span>
            <span class="comment-hide-reply">hide replies</span>
            <!-- Write a comment -->
            <!-- <div class="comment-writer">
                <div class="comment-textarea" contenteditable="true" placeholder="add text here" ></div>
                <div class="d-flex justify-content-between">
                    <button class="submit comment-pill" style="background-color: #DBDBDB;">cancel</button>
                    <button class="submit comment-pill" style="background-color: #D4A373;">send</button>
                </div>
            </div> -->
        </div>
    </div>`;

    return div;
}


commentContainer.addEventListener("click", function(e){
    let closest = e.target.closest(".all-comment");

    $(".comment-reply").unbind().click(function(){
        console.log("reply clicked!");
        if (isCommenting == 0){
            console.log("success");
            closest.appendChild(createTextarea ());
            isCommenting = 1;
        } else {
            console.log("failed");
        }
        
    });

    $(".comment-cancel").unbind().click(function(){
        console.log("reply clicked!");
        const commentTextarea = $(".commenting");
        commentTextarea.remove();
        isCommenting = 0;
    });


    $(".submit-comment").unbind().click(function () {
        console.log("submit-button clicked!");
        const commentTextarea = $(".comment-textarea");
        console.log(commentTextarea.val());
        if (commentTextarea.val) {
            console.log("success");
            closest.appendChild(addReply(commentTextarea.val()));
            $(".commenting").remove();
            isCommenting = 0;
        } else {
            console.log("failed");
        }
     });
});

function copyLink() {
    navigator.clipboard.writeText("view-post.html");
    alert("Copied the text ");
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


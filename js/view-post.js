// Reference Code for Nested Comments: https://youtu.be/a4OA7QbHEho

let commentContainer = document.getElementById("comment-container");
var isCommenting = 0;
var element;

let alreadyVoted = false;

let shareButton = document.querySelector(".share-cont");
let upvoteAlready = false;
let upvote = document.getElementById("upvote-btn");
let downvoteAlready = false;
let downvote = document.querySelector(".votes-cont i.fa-circle-down");

function createTextarea () {
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

function convertDateToTxt() {
    const date = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];
    
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    // Format the date
    let formattedDate = monthNames[month] + " " + day + ", " + year;
    
    return formattedDate;
          
}

function addReply(text) {
    let div = document.createElement("div");
    div.setAttribute("class", "all-comment");

    let commentNumber = document.getElementById("comment-amnt").innerText;
    document.getElementById("comment-amnt").innerHTML = parseInt(commentNumber) + 1;
    document.getElementById("comment-bar-amnt").innerHTML = parseInt(commentNumber) + 1;
    let date = convertDateToTxt();
    div.innerHTML += `
    <div class="row comment" id="comment">
        <div class="col-1 com-votes-cont" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div><i class="fa-regular fa-circle-up comment-proper-votes" style="color: #292F33; font-size: x-large"></i></div>
            <div class="comment-vote-cont"><span class="com-prop-amnt">0</span></div>
            <div><i class="fa-regular fa-circle-down comment-proper-votes" style="color: #292F33; font-size: x-large"></i></div>
        </div>
        <div class="col-11">
            <!-- Username and Date Commented -->
            <div class="row">
                <div class="col-1">
                    <img src="img/profile.png" class="comment-profile-pic">
                </div>
                <div class="col-11">
                    <div class="comment-username">helpvirus</div>
                    <div class="comment-username">`+date+`</div>
                </div>
            </div>
            <!-- Comment contents -->
            <div class="comment-content">
                ${text}
            </div>
            <span class="comment-reply" onclick="onClickRep(event)">reply</span>
            <span class="comment-time-reply">1s ago</span>
            <!-- Write a comment -->
            <!-- <div class="comment-writer">
                <div class="comment-textarea" contenteditable="true" placeholder="add text here" ></div>
                <div class="d-flex justify-content-between">
                    <button class="submit comment-pill " style="background-color: #DBDBDB;">cancel</button>
                    <button class="submit comment-pill" style="background-color: #D4A373;">send</button>
                </div>
            </div> -->
        </div>
    </div>`;
    
    const referenceTime = new Date();
    let timeReplyElement = div.querySelector('.comment-time-reply');

    function updateTimeReply() { 
        var currentTime = new Date();

        console.log(currentTime);
        console.log(referenceTime);

        var timeDiff = Math.floor((currentTime - referenceTime) / 1000);

        var timeText;
        if (timeDiff < 60) {
        timeText = timeDiff + "s ago";
        } else {
        var minutes = Math.floor(timeDiff / 60);
        timeText = minutes + (minutes === 1 ? " minute ago" : "m ago");
        }

        timeReplyElement.textContent = timeText;
    }

    setInterval(updateTimeReply, 2000);

    return div;
}


function onClickRep(e) {
    let closest = e.target.closest(".all-comment");
    
    if (isCommenting == 0) {
        closest.appendChild(createTextarea ());
        element = document.getElementById("comment-cancel");
        isCommenting = 1;
        element.addEventListener("click", onClickCancel);
    } 
};

function onClickCancel(e) {
    let closest = e.target.closest(".all-comment");

    const commentTextarea = $(".commenting");
    commentTextarea.remove();
    isCommenting = 0;
}

$(".comment-container").click(function (e) {

    let closest = e.target.closest(".all-comment");

    $(".submit-comment").unbind().click(function () {
        const commentTextarea = $(".comment-textarea");
        if (commentTextarea.val) {

            if(commentTextarea.val() !== "") {
                closest.appendChild(addReply(commentTextarea.val()));
                $(".commenting").remove();
            } else {
                const commentTextarea = $(".commenting");
                commentTextarea.remove();
            }
            isCommenting = 0;
        } 
     });
});

$

function copyLink() {
    navigator.clipboard.writeText("view-post.html");
    $('#copyLinkModal').modal('show');

    setTimeout(function() {
        $('#copyLinkModal').modal('hide');
    }, 1500)
}

upvote.addEventListener("click", function(){
    let upvoteNumber = document.querySelectorAll(".votes-cont span")[0].innerText;
    let downvoteNumber = document.querySelectorAll(".votes-cont span")[2].innerText;
    
    if (downvoteAlready && !upvoteAlready){
        document.querySelectorAll(".votes-cont span")[2].innerHTML = parseInt(downvoteNumber) - 1;
        document.querySelectorAll(".votes-cont span")[0].innerHTML = parseInt(upvoteNumber) + 1;
        upvoteAlready = true;
        downvoteAlready = false;
    }
    else if (!upvoteAlready){

        document.querySelectorAll(".votes-cont span")[0].innerHTML = parseInt(upvoteNumber) + 1;        upvoteAlready = true;
    }

    upvote.classList.remove("fa-regular");
    upvote.classList.add("fa-solid");
    downvote.classList.add("fa-regular");
    downvote.classList.remove("fa-solid");
    
    
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

    downvote.classList.remove("fa-regular");
    downvote.classList.add("fa-solid");
    upvote.classList.add("fa-regular");
    upvote.classList.remove("fa-solid");
    
    
});

$(document).on("click", ".comment-proper-votes", function () {
    var voteCount = $(this).closest(".com-votes-cont").find(".comment-vote-cont .com-prop-amnt");

    if($(this).hasClass('fa-circle-up')) {
        //upvote
        if($(this).hasClass('fa-regular')) {
            var downVoteElement = $(this).closest(".com-votes-cont").find(".fa-circle-down.comment-proper-votes");  

            if(downVoteElement.hasClass('fa-solid')) {
                downVoteElement.removeClass('fa-solid');
                downVoteElement.addClass('fa-regular');
                voteCount.text(parseInt(voteCount.text()) + 1);
            } 
    
            $(this).removeClass('fa-regular');
            $(this).addClass('fa-solid');
            voteCount.text(parseInt(voteCount.text()) + 1);
        } else {
            $(this).removeClass('fa-solid');
            $(this).addClass('fa-regular');
            voteCount.text(parseInt(voteCount.text()) - 1);
        }

    } else {
        //downvote
        if($(this).hasClass('fa-regular')) {
            var upVoteElement = $(this).closest(".com-votes-cont").find(".fa-circle-up.comment-proper-votes"); 

            if(upVoteElement.hasClass('fa-solid')) {
                upVoteElement.removeClass('fa-solid');
                upVoteElement.addClass('fa-regular');
                voteCount.text(parseInt(voteCount.text()) - 1);
            }
    
            $(this).removeClass('fa-regular');
            $(this).addClass('fa-solid');
            voteCount.text(parseInt(voteCount.text()) - 1);
        } else {
            $(this).removeClass('fa-solid');
            $(this).addClass('fa-regular');
            voteCount.text(parseInt(voteCount.text()) + 1);
        }
    } 

});



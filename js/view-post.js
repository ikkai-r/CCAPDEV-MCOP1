// Reference Code: https://youtu.be/a4OA7QbHEho

let commentContainer = document.getElementById("comment");

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
    navigator.clipboard.writeText("view-post.html");
}

$(".upvote-btn").click(function () {

    if($(this).hasClass('fa-regular')) {
        $(this).removeClass('fa-regular');
        $(this).addClass('fa-solid');

        if(!$(this).hasClass('clicked')) {
            var currentUpvotes = parseInt($('#upvote-amnt').text());
            $('#upvote-amnt').text(currentUpvotes+1);
        } 

        $(this).addClass('clicked');
        $(this).removeClass('unclicked');

    } else {
        $(this).removeClass('fa-solid');
        $(this).addClass('fa-regular');

        if(!$(this).hasClass('unclicked')) {
            var currentUpvotes = parseInt($('#upvote-amnt').text());
            $('#upvote-amnt').text(currentUpvotes-1);
        } 

        $(this).addClass('unclicked');
        $(this).removeClass('clicked');
    }
    
})


$(".downvote-btn").click(function () {

    if($(this).hasClass('fa-regular') ) {
        $(this).removeClass('fa-regular');
        $(this).addClass('fa-solid');

        if(!$(this).hasClass('clicked')) {
            var currentdownvotes = parseInt($('#downvote-amnt').text());
            $('#downvote-amnt').text(currentdownvotes+1);
        } 

        $(this).addClass('clicked');
        $(this).removeClass('unclicked');

    } else {
        $(this).removeClass('fa-solid');
        $(this).addClass('fa-regular');

        if(!$(this).hasClass('unclicked')) {
            var currentdownvotes = parseInt($('#downvote-amnt').text());
            $('#downvote-amnt').text(currentdownvotes-1);
        } 

        $(this).addClass('unclicked');
        $(this).removeClass('clicked');
    }
    
})


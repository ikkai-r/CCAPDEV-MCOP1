$(".add-tag").click(function () {
    if($(this).hasClass('fa-circle-plus')) {
        $(this).removeClass('fa-circle-plus');
        $(this).addClass('fa-circle-minus');
    } else {
        $(this).removeClass('fa-circle-minus');
        $(this).addClass('fa-circle-plus');
    }
    
});

let upvote = document.querySelector("#upvote-btn");
let downvote = document.querySelector("#downvote-btn");
let vote = document.querySelector(".left-bar-header").innerText;

let upvoteAlready = false;
let downvoteAlready = false;

upvote.addEventListener("click", function(){

    if (downvoteAlready && !upvoteAlready){
        
        document.querySelector("#vote-ctr").innerText = parseInt(vote) + 2;
        upvoteAlready = true;
        downvoteAlready = false;
    }
    else if (!upvoteAlready){
        
        document.querySelector("#vote-ctr").innerText = parseInt(vote) + 1;        
        upvoteAlready = true;
    }

    
    vote = document.querySelector("#vote-ctr").innerText;
    upvote.classList.add("fa-solid");
    upvote.classList.remove("fa-regular");
    downvote.classList.add("fa-regular");
    downvote.classList.remove("fa-solid");
    
    
});


downvote.addEventListener("click", function(){

    if (upvoteAlready && !downvoteAlready){
        document.querySelector("#vote-ctr").innerText = parseInt(vote) - 2;
        upvoteAlready = false;
        downvoteAlready = true;

    }
    else if (!downvoteAlready){
        document.querySelector("#vote-ctr").innerText = parseInt(vote) - 1; 
        downvoteAlready = true;
    }

    vote = document.querySelector("#vote-ctr").innerText;
    downvote.classList.remove("fa-regular");
    downvote.classList.add("fa-solid");
    upvote.classList.add("fa-regular");
    upvote.classList.remove("fa-solid");
    
    
});


function copyLink(url) {
    navigator.clipboard.writeText(url);
    $('#copyLinkModal').modal('show');

    setTimeout(function() {
        $('#copyLinkModal').modal('hide');
    }, 1500)
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
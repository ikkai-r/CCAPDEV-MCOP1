var loadFile = function (event) {
    var image = document.getElementById("edit-pfp");
    image.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("edit-pfp-bg").style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) + ")"
};

var backLoad = function (event) {
    var image = document.getElementById("edit-pfp");
    image.src = "./img/profile.png";
    document.getElementById("edit-pfp-bg").style.backgroundImage = "url(./img/profile.png)"
    document.getElementById("bio-area").value = "i'm a great placeholder, just like how i am easily replaced";
};

var saveChanges = function (event) {
    var image = document.getElementById("upfp");
    image.src = URL.createObjectURL(event.target.files[0]);
}
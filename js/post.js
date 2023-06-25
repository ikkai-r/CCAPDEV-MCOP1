document.getElementById("date").innerHTML = convertDateToTxt();

document.getElementById("add-tag-area").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      var text = document.getElementById("add-tag-area").innerText;
      document.getElementById("add-tag-area").innerText = "";

      if(text !== "") {
        createNewDiv(text);
      }
    }
  });
  
  function createNewDiv(text) {
    var newDiv = document.createElement("div");
    newDiv.textContent = text;
    newDiv.className = "postcom-tags post-tags-cont mt-2";
    document.getElementById("tag-grp").appendChild(newDiv);
  }
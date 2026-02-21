// ADD PROFILE
function addProfile() {

    // get values from input boxes
    var name = document.getElementById("name").value;
    var teach = document.getElementById("teach").value;
    var learn = document.getElementById("learn").value;

    // check if empty
    if (name == "" || teach == "" || learn == "") {
        alert("Please fill all fields");
        return;
    }

    // create profile box
    var profile = document.createElement("div");
    profile.className = "profile";

    profile.innerHTML =
        "<b>" + name + "</b><br>" +
        "Can Teach: " + teach + "<br>" +
        "Wants to Learn: " + learn + "<br><br>" +
        "<button onclick='deleteProfile(this)'>Delete</button>";

    // add profile to page
    document.getElementById("profiles").appendChild(profile);

    // clear inputs
    document.getElementById("name").value = "";
    document.getElementById("teach").value = "";
    document.getElementById("learn").value = "";
}


// DELETE PROFILE
function deleteProfile(button) {
    button.parentElement.remove();
}


// SEARCH PROFILE
function searchProfile() {

    var input = document.getElementById("search").value.toLowerCase();
    var profiles = document.getElementsByClassName("prscofile");

    for (var i = 0; i < profiles.length; i++) {

        var text = profiles[i].innerText.toLowerCase();

        if (text.includes(input)) {
            profiles[i].style.display = "block";
        } else {
            profiles[i].style.display = "none";
        }
    }
}

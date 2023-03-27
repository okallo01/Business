function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// send message
document.getElementById("mgs").addEventListener("click", SendMgs);

function SendMgs() {
    var Name_input = document.forms["the_form"]["Name"].value;
    var Email_input = document.forms["the_form"]["Email"].value;
    var Message_input = document.forms["the_form"]["Message"].value;
    
    if (Email_input.toLowerCase().indexOf("@") === -1 || Name_input == "" || Message_input == "") {
      alert("Please fill out all the input.....");
    } else {
        alert("Message send successfuly!!");
        window.location.reload()
    }
  }
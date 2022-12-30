function validation() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    let reason = document.forms["myForm"]["reason"].value;
  
    if (fname != "" && lname != "" && email != "" && reason != "") {
      alert("Sucessful");
      return false;
    }
  }
  
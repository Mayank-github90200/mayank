function validateForm() {
    let x = document.forms["myForm"]["first name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
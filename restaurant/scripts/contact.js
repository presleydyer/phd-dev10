function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    if(name == "") {
        alert("Name is a required field");
        document.forms["contactForm"]["name"].focus();
        return false;
    }
    if(email == "") {
        alert("Email is a required field");
        document.forms["contactForm"]["email"].focus();
        return false;
    }
    if(phone == "") {
        alert("Phone Number is a required field");
        document.forms["contactForm"]["phone"].focus();
        return false;
    }

    alert("Form submission is valid!");
    return false;
}
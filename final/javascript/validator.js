function validateForm() {
    var invalid = 0;
    
    if (!validateName()) invalid++;
    if (!validateEmail()) invalid++;
    if (!validateSubject()) invalid++;
    if (!validateComments()) invalid++;

    if (invalid == 0) {
        return true;
    } else {
        document.getElementById("submitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        return false;
    }
}

function validateName() {
    var validName = false;

    var name = document.getElementById("name").value;
    var errorMessages = "";

    if (name == null || name == "" || name.length > 70 ) {
        errorMessages += "<p>The name is required and cannot be greater than 70 characters</p>";
    } else if (name.match("^[a-zA-Z]+$") == null) {
        errorMessages += "<p>Invalid character in name (accepts only alphabetical values)</p>";
    } else {
        validName = true;
    }

    document.getElementById("nameError").innerHTML = errorMessages;

    return validName;
}

function validateEmail() {
    var validEmail = false;
    var userEmail = document.getElementById("email").value;
    var errorMessages = "";
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");

    if (userEmail == null || userEmail == "") {
        errorMessages += "<p>Email is required</p>";
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email</p>";
    } else {
        validEmail = true;
    }
    
    document.getElementById("emailError").innerHTML = errorMessages;
    return validEmail;
}

function validateSubject() {
    var validSubject = false;
    var subject = document.getElementById("subject").value;
    var errorMessages = "";

    if (subject == null || subject == "") {
        errorMessages += "<p>Subject is required</p>";
    } else {
        validSubject = true;
    }

    document.getElementById("subjectError").innerHTML = errorMessages;
    return validSubject;
}

function validateComments() {
    var validComments = false;
    var comments = document.getElementById("comments").value;
    var errorMessages = "";

    if (comments == null || comments == "") {
        errorMessages += "<p>Please leave a comment!</p>"
    } else {
        validComments = true;
    }

    document.getElementById("commentsError").innerHTML = errorMessages;
    return validComments;
}
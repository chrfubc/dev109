function validateForm() {
    var invalid = 0;
    if (!validateFirstName()) invalid++;
    if (!validateLastName()) invalid++;
    if (!validateEmail()) invalid++;
    if (!validatePhone()) invalid++;
    if (!validateUsername()) invalid++;
    if (!validatePassword()) invalid++;
    if (!validateAddress()) invalid++;
    if (!validateCity()) invalid++;
    if (!validateZipCode()) invalid++;

    if (invalid == 0) {
        return true;
    } else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        // event.preventDefault();
        return false;
    }
}

//FirstName.addEventListener('blur', firstName, false);
function validateFirstName() {
    //1) Create variable
    var validFirstName = false;

    //2) read value from HTML
    var firstName = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstName == null || firstName == "" || firstName.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
    } else if (firstName.match("^[a-zA-Z]+$") == null) {
        errorMessages += "<p>Invalid character in first name (accepts only alphabetical values)</p>";
    } else {
        validFirstName = true;
    }

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return validFirstName;
}

function validateLastName() {
    //1) Create variable
    var validLastname = false;

    //2) read value from HTML
    var lastName = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastName == null || lastName == "" || lastName.length > 50 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
    } else if (lastName.match("^[a-zA-Z]+$") == null) {
        errorMessages += "<p>Invalid character in last name (accepts only alphabetical values)</p>";
    } else {
        validLastname = true;
    }
    
    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return validLastname;
}

function validateEmail() {
    var validEmail = false;
    var userEmail = document.getElementById("Email").value;
    var errorMessages = ""
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");

    if (userEmail == null || userEmail == "") {
        errorMessages += "<p>Email is required</p>";
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email</p>";
    } else {
        validEmail = true;
    }
    
    document.getElementById("email").innerHTML = errorMessages;
    return validEmail;
}

function validatePhone() {
    var validPhone = false;
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";
   
    // EC todo: auto insert dashes (-) between area code, prefix, and line number, and validate as such.
    if (phone == null || phone == "" || phone.length > 15) {
        errorMessages += "<p>Phone number is required and cannot be greater than 15 characters</p>"
    } else if (!phone.match("^[0-9]+$")) {
        errorMessages += "<p>Invalid phone number</p>"
    } else {
        validPhone = true;
    }

    document.getElementById("phone").innerHTML = errorMessages;
    return validPhone;
}

function validateUsername() {
    var username = document.getElementById("Username").value;
    document.getElementById("username").innerHTML = "";
    if (username == null || username == "" || username.length > 12 ) {
        document.getElementById("username").innerHTML = "<p>Username is required and cannot be greater than 12 characters</p>";
        return false;
    }
    return true;
}

function validatePassword() {
    var validPassword = false;
    var password = document.getElementById("Password").value;
    var errorMessages = "";

    // EC todo: require 1 UPPER, 1 lower, 1 number, and 1 special character.
    if (password == null || password == "" || password.length > 7 ) {
        errorMessages += "<p>Password is required and cannot be greater than 7 characters</p>";
    } else {
        validPassword = true;
    }

    document.getElementById("password").innerHTML = errorMessages;
    return validPassword;
}

function validateAddress() {
    var address = document.getElementById("Address").value;
    document.getElementById("address").innerHTML = "";
    if (address == null || address == "") {
        document.getElementById("address").innerHTML = "<p>Address is required</p>"
        return false;
    }
    return true;
}

function validateCity() {
    var city = document.getElementById("City").value;
    document.getElementById("city").innerHTML = "";
    if (city == null || city == "") {
        document.getElementById("city").innerHTML = "<p>City is required</p>"
        return false;
    }
    return true;
}

function validateZipCode() {
    var country = document.getElementById("Country").value;
    document.getElementById("zipcode").innerHTML = "";
    if (country == "USA") {
        var zipCode = document.getElementById("ZipCode").value;
        var errorMessages = "";

        if (zipCode == null || zipCode == "" || zipCode.length != 5) {
            errorMessages += "<p>Zip code is required and must be 5 characters</p>"
        } else if (!zipCode.match("^[0-9]+$")) {
            errorMessages += "<p>Invalid zip code</p>"
        } else {
            return true;
        }

        document.getElementById("zipcode").innerHTML = errorMessages;
        return false;
    }

    return true;
}
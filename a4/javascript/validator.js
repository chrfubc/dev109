function validateForm() {
    if (validateFirstName() //&&
       // lastName()
    ) {
        return true;
    }
    else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        //event.preventDefault();
        return false;
    }
}

//FirstName.addEventListener('blur', firstName, false);
function validateFirstName() {
    //1) Create variable
    var validFirstname = false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname == null || firstname == "" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
    } else if (firstname.match("^[a-zA-Z]+$") == null) {
        errorMessages += "<p>Invalid character in last name (accepts only alphabetical values)</p>";
    } else {
        validFirstname = true;
    }

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
}

function validateLastName() {
    //1) Create variable
    var validLastname = false;

    //2) read value from HTML
    var validLastname = document.getElementById("LastName").value;

    //3) Do validation
    //4) Send error message to HMTL
    //5) return status of each field

    return validLastname;
}

let contact_name = document.getElementById("contact_name");
let contact_email = document.getElementById("contact_email");
let contact_subject = document.getElementById("contact_subject");
let contact_message = document.getElementById("contact_message");

let contact_name_error = document.getElementById("contact_name_error");
let contact_email_error = document.getElementById("contact_email_error");
let contact_subject_error = document.getElementById("contact_subject_error");
let contact_message_error = document.getElementById("contact_message_error");

let contact_btn = document.getElementById("contact_btn");

contact_btn.addEventListener("click", function (e) {
    e.preventDefault();

    let valid = true;

    
    if (!contact_name.value) {
        contact_name.classList.add("border-red-500", "border-2");
        contact_name_error.innerText = "Name required";
        valid = false;
    } else {
        contact_name_error.innerText = "";
    }

   
    if (!contact_email.value) {
        contact_email.classList.add("border-red-500", "border-2");
        contact_email_error.innerText = "Email required";
        valid = false;
    } else {
        contact_email_error.innerText = "";
    }

    
    if (!contact_subject.value) {
        contact_subject.classList.add("border-red-500", "border-2");
        contact_subject_error.innerText = "Subject required";
        valid = false;
    } else {
        contact_subject_error.innerText = "";
    }

    
    if (!contact_message.value) {
        contact_message.classList.add("border-red-500", "border-2");
        contact_message_error.innerText = "Message required";
        valid = false;
    } else {
        contact_message_error.innerText = "";
    }

    if (valid) {
        alert("Message sent successfully!");

        contact_name.value = "";
        contact_email.value = "";
        contact_subject.value = "";
        contact_message.value = "";
    }

    let isValid =
    contact_name.value &&
    contact_email.value &&
    contact_subject.value &&
    contact_message.value;

if (isValid) {
    alert("Contact message sent successfully!");
}
});


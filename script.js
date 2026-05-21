let full_name = document.getElementById("full_name");
let dept_input = document.getElementById("dept_input");
let number_input = document.getElementById("number_input");
let email_input = document.getElementById("email_input");
let date_input = document.getElementById("date_input");
let time_input = document.getElementById("time_input");
let duration_input = document.getElementById("duration_input");
let type_input = document.getElementById("type_input");
let available_input = document.getElementById("available_input");
let message_input = document.getElementById("message_input");
let full_name_error = document.getElementById("full_name_error");
let dept_input_error = document.getElementById("dept_input_error");
let number_input_error = document.getElementById("number_input_error");
let email_input_error = document.getElementById("email_input_error");
let date_input_error = document.getElementById("date_input_error");
let time_input_error = document.getElementById("time_input_error");
let duration_input_error = document.getElementById("duration_input_error");
let type_input_error = document.getElementById("type_input_error");
let available_input_error = document.getElementById("available_input_error");
let message_input_error = document.getElementById("message_input_error");
let summary_name = document.getElementById("summary_name");
let summary_dept = document.getElementById("summary_dept");
let summary_date = document.getElementById("summary_date");
let summary_time = document.getElementById("summary_time");
let summary_duration = document.getElementById("summary_duration");
let summary_room = document.getElementById("summary_room");
let btn_submit = document.getElementById("btn_submit");


let result = document.getElementById("result");

btn_submit.addEventListener("click", function (e) {
    e.preventDefault();

    if (full_name.value == "" || full_name.value == null) {
        full_name.classList.add("border-2", "border-red-500");
        full_name_error.innerHTML = "Full name required";
    } else {
        full_name.classList.remove("border-red-500");
        full_name_error.innerHTML = "";
    }

     if (dept_input.value == "" || dept_input.value == null) {
        dept_input.classList.add("border-2", "border-red-500");
        dept_input_error.innerHTML = "Department required";
    } else {
        dept_input.classList.remove("border-red-500");
        dept_input_error.innerHTML = "";
    }

     if (number_input.value == "" || number_input.value == null) {
        number_input.classList.add("border-2", "border-red-500");
        number_input_error.innerHTML = "Number required";
    } else {
        number_input.classList.remove("border-red-500");
        number_input_error.innerHTML = "";
    }

     if (email_input.value == "" || email_input.value == null) {
        email_input.classList.add("border-2", "border-red-500");
        email_input_error.innerHTML = "Email required";
    } else {
        email_input.classList.remove("border-red-500");
        email_input_error.innerHTML = "";
    }

     if (date_input.value == "" || date_input.value == null) {
        date_input.classList.add("border-2", "border-red-500");
        date_input_error.innerHTML = "Date required";
    } else {
        date_input.classList.remove("border-red-500");
        date_input_error.innerHTML = "";
    }

     if (time_input.value == "" || time_input.value == null) {
        time_input.classList.add("border-2", "border-red-500");
        time_input_error.innerHTML = "Time required";
    } else {
        time_input.classList.remove("border-red-500");
        time_input_error.innerHTML = "";
    }

     if (duration_input.value == "" || duration_input.value == null) {
        duration_input.classList.add("border-2", "border-red-500");
        duration_input_error.innerHTML = "Duration required";
    } else {
        duration_input.classList.remove("border-red-500");
        duration_input_error.innerHTML = "";
    }

     if (type_input.value == "" || type_input.value == null) {
        type_input.classList.add("border-2", "border-red-500");
        type_input_error.innerHTML = "Room type required";
    } else {
        type_input.classList.remove("border-red-500");
        type_input_error.innerHTML = "";
    }

     if (available_input.value == "" || available_input.value == null) {
        available_input.classList.add("border-2", "border-red-500");
        available_input_error.innerHTML = "Available Room required";
    } else {
        available_input.classList.remove("border-red-500");
        available_input_error.innerHTML = "";
    }

     if (message_input.value == "" || message_input.value == null) {
        message_input.classList.add("border-2", "border-red-500");
        message_input_error.innerHTML = "Message required";
    } else {
        message_input.classList.remove("border-red-500");
        message_input_error.innerHTML = "";
    }

    let isValid =
    full_name.value &&
    dept_input.value &&
    number_input.value &&
    email_input.value &&
    date_input.value &&
    time_input.value &&
    duration_input.value &&
    type_input.value &&
    available_input.value &&
    message_input.value;

if (isValid) {

    summary_name.innerHTML = full_name.value;
    summary_dept.innerHTML = dept_input.value;
    summary_date.innerHTML = date_input.value;
    summary_time.innerHTML = time_input.value;
    summary_duration.innerHTML = duration_input.value;
    summary_room.innerHTML = available_input.value;

    alert("Booking successful!");
}
});



// get the updated url from the QuerySubjectHome.js
let querySubjects = window.location.search;
// parse the query string’s parameters using URLSearchParams
urlParams = new URLSearchParams(querySubjects);


// This will check the input value on click and change events 
// then change the style class accordingly.
function checkNames(){
    let name_object = document.getElementById("name");
    if (name_object.value !== ""){
        document.getElementById("name").classList.remove("empty-input-text");
        document.getElementById("name").classList.add("filled-input-text");
    }
    else{
        document.getElementById("name").classList.remove("filled-input-text");
        document.getElementById("name").classList.add("empty-input-text");
    }
}



// This will check the input value on change event
// then validate the input value and alert a message and change the style class accordingly.
function checkAndValidateEmail(){
    let email_object = document.getElementById("email");

    if(email_object.value === ""){
        document.getElementById("email").classList.remove("filled-input-text");
        document.getElementById("email").classList.add("empty-input-text");
    }
    else if (email_object.value.includes("@") == false){
        document.getElementById("email").classList.remove("filled-input-text");
        alert("Please enter a valid email ('@' is missing)");
        document.getElementById("email").classList.add("empty-input-text");
    }
    else if(email_object.value.includes(".") == false){
        document.getElementById("email").classList.remove("filled-input-text");
        alert("Please enter a valid email ('.' is missing)");
        document.getElementById("email").classList.add("empty-input-text");
    }
    else{
        document.getElementById("email").classList.remove("empty-input-text");
        document.getElementById("email").classList.add("filled-input-text");
    }
}


// This will check the input value on click event
// then validate the input value and change the style class accordingly.
function checkEmail(){
    let email_object = document.getElementById("email");

    if(email_object.value === ""){
        document.getElementById("email").classList.remove("filled-input-text");
        document.getElementById("email").classList.add("empty-input-text");
    }
    else if (email_object.value.includes("@") ==false){
        document.getElementById("email").classList.remove("filled-input-text");
        document.getElementById("email").classList.add("empty-input-text");
     
    }
    else if(email_object.value.includes(".") ==false){
        document.getElementById("email").classList.remove("filled-input-text");
        document.getElementById("email").classList.add("empty-input-text");
    }
    else{
        document.getElementById("email").classList.remove("empty-input-text");
        document.getElementById("email").classList.add("filled-input-text");
    }
}

// This will check the selected value on click and change events 
// then change the style class accordingly.
function checkSubject(){
    let subject_object = document.getElementById("subject");
    if (subject_object[subject_object.selectedIndex].value != ""){
        document.getElementById("subject").classList.remove("empty-select");
        document.getElementById("subject").classList.add("filled-select");
    }
    else{
        document.getElementById("subject").classList.remove("filled-select");
        document.getElementById("subject").classList.add("empty-select");
    }
}


// This will check the input value on click and change events 
// then change the style class accordingly.
function checkDetails(){
    let textarea_object = document.getElementById("details");
    if (textarea_object.value !== ""){
        document.getElementById("details").classList.remove("empty-textarea");
        document.getElementById("details").classList.add("filled-textarea");
    }
    else{
        document.getElementById("details").classList.remove("filled-textarea");
        document.getElementById("details").classList.add("empty-textarea");
    }
}

// this will run on click event in view query button 
// will run all the validation function and update the respective arrays
function viewQueryButton(){
    let unfilled_fields = [];
    let filled_fields = [];
    validateName(unfilled_fields, filled_fields);
    validateEmail(unfilled_fields, filled_fields);
    validateSubject(unfilled_fields,filled_fields);
    validateDetails(unfilled_fields, filled_fields);

    if(unfilled_fields.length == 0){
        printFilledFields(filled_fields);
    } else{
        printUnfilledFields(unfilled_fields);
    }
}

// will move between query-form-container and filled-query using styles
function editQueryForm(){
    document.getElementById("filled-query").style.display = "none";
    document.getElementById("query-form-container").style.display = "block";
}


function mailForm(){
    document.getElementById("filled-query").style.display = "none";
    document.getElementById("query-form").submit();
}

// this will validate the input data and update the respective array
// will change the style if user haven't entered anything
function validateName(unfilled_fields, filled_fields){
    let name= document.getElementById("name").value;
    if(name != ""){
        filled_fields[filled_fields.length] = (name);
    }
    else{
        unfilled_fields[unfilled_fields.length] = ("Name");
        document.getElementById("name").classList.add("empty-input-text");
    }
}
// this will validate the input data and update the respective array
// will change the style if user haven't entered anything
function validateEmail(unfilled_fields, filled_fields){
    let email = document.getElementById("email").value;
    if(email != ""){
        filled_fields[filled_fields.length] = (email);
    }
    else{
        unfilled_fields[unfilled_fields.length] = ("Email");
        document.getElementById("email").classList.add("empty-input-text");
    }
}
// this will validate the selected data and update the respective array
// will change the style if user haven't selected anything   
function validateSubject(unfilled_fields,filled_fields){
    let subject_array = []
    subject_array = document.getElementById("subject");

    if (subject_array.selectedIndex != ""){
        filled_fields[filled_fields.length] = String(subject_array[subject_array.selectedIndex].value);
    }
    else{
        unfilled_fields[Object.keys(unfilled_fields).length] = ("Subject");
        document.getElementById("subject").classList.add("empty-select");
    }
}
// this will validate the input data and update the respective array
// will change the style if user haven't entered anything
function validateDetails(unfilled_fields, filled_fields){
    let details = document.getElementById("details").value;
    if (details != ""){
        filled_fields[filled_fields.length] = (details)
    }
    else{
        unfilled_fields[unfilled_fields.length] = ("Details");
        document.getElementById("details").classList.add("empty-textarea");
    }
}

// this will print inside the tags which have below element IDs
// and change the styles on query-form-container and filled-query
function printFilledFields(filled_fields){
    const element_ids = ["filled-name","filled-email", "filled-subject","filled-details"]
    for (let index=0; index<4; index++){
        document.getElementById(element_ids[index]).innerHTML = filled_fields[index];
    }
    document.getElementById("query-form-container").style.display = "none";
    document.getElementById("filled-query").style.display = "block";
}

// will alert the missing input fields
function printUnfilledFields(unfilled_fields){
    if (unfilled_fields.length == 1){
        let unfilled_field_string = unfilled_fields.join(" , ");
        alert("Unfilled field is [" + unfilled_field_string + "] Please fil it!");
    }

    else if(unfilled_fields.length != 0 ){
        let unfilled_field_string = unfilled_fields.join(" , ");
        alert("Unfilled fields are [" + unfilled_field_string +"] Please fill them!");
    }
}



// if user select a subject from the main page that will be updated on the query form
// will return the first value associated with the "button" parameter 
if (urlParams.get("button")==="Tickets-button"){
    let subject_name="Tickets"
    document.getElementById("subject").value=subject_name;
    document.getElementById("subject").classList.remove("empty-select");
    document.getElementById("subject").classList.add("filled-select");

}else if (urlParams.get("button")==="Deliver-button"){
    let subject_name="Delivery"
    document.getElementById("subject").value=subject_name;
    document.getElementById("subject").classList.remove("empty-select");
    document.getElementById("subject").classList.add("filled-select");

}else if (urlParams.get("button")==="Product-button"){
    let subject_name="Product"
    document.getElementById("subject").value=subject_name;
    document.getElementById("subject").classList.remove("empty-select");
    document.getElementById("subject").classList.add("filled-select");

}else if (urlParams.get("button")==="Website-button"){
    let subject_name="Website"
    document.getElementById("subject").value=subject_name;
    document.getElementById("subject").classList.remove("empty-select");
    document.getElementById("subject").classList.add("filled-select");

}else if (urlParams.get("button")==="Complains-button"){
    let subject_name="Complains"
    document.getElementById("subject").value=subject_name;
    document.getElementById("subject").classList.remove("empty-select");
    document.getElementById("subject").classList.add("filled-select");
}else if (urlParams.get("button")==="Other-button"){
    let subject_name="Other"
    document.getElementById("subject").value=subject_name;
    document.getElementById("subject").classList.remove("empty-select");
    document.getElementById("subject").classList.add("filled-select");
}else{}



document.getElementById("name").addEventListener("change",checkNames);
document.getElementById("name").addEventListener("click",checkNames);

document.getElementById("email").addEventListener("change",checkAndValidateEmail);
document.getElementById("email").addEventListener("click",checkEmail);

document.getElementById("subject").addEventListener("change",checkSubject);
document.getElementById("subject").addEventListener("click",checkSubject);

document.getElementById("details").addEventListener("change",checkDetails);
document.getElementById("details").addEventListener("click",checkDetails);

document.getElementById("view-query-button").addEventListener("click",viewQueryButton);
document.getElementById("edit-query-button").addEventListener("click",editQueryForm);
document.getElementById("send-query-button").addEventListener("click",mailForm);
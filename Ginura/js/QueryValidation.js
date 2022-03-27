document.getElementById("name").addEventListener("change",checkNames);
document.getElementById("name").addEventListener("click",checkNames);
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


document.getElementById("email").addEventListener("change",checkAndValidateEmail);
document.getElementById("email").addEventListener("click",checkEmail);
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
    else if(email_object.value.includes(".") ==false){
        document.getElementById("email").classList.remove("filled-input-text");
        alert("Please enter a valid email ('.' is missing)");
        document.getElementById("email").classList.add("empty-input-text");
    }
    else{
        document.getElementById("email").classList.remove("empty-input-text");
        document.getElementById("email").classList.add("filled-input-text");
    }
}

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

document.getElementById("subject").addEventListener("change",checkSubject);
document.getElementById("subject").addEventListener("click",checkSubject);
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


document.getElementById("details").addEventListener("change",checkDetails);
document.getElementById("details").addEventListener("click",checkDetails);
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

document.getElementById("view-query-button").addEventListener("click",viewQueryButton);
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

document.getElementById("edit-query-button").addEventListener("click",editQueryForm);
function editQueryForm(){
    document.getElementById("filled-query").style.display = "none";
    document.getElementById("query-form-container").style.display = "block";
}

document.getElementById("send-query-button").addEventListener("click",mailForm);
function mailForm(){
    document.getElementById("filled-query").style.display = "none";
    document.getElementById("query-form").submit();
}

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

function printFilledFields(filled_fields){
    const element_ids = ["filled-name","filled-email", "filled-subject","filled-details"]
    for (let index=0; index<4; index++){
        document.getElementById(element_ids[index]).innerHTML = filled_fields[index];
    }
    document.getElementById("query-form-container").style.display = "none";
    document.getElementById("filled-query").style.display = "block";
}


function printUnfilledFields(unfilled_fields){
    if (unfilled_fields.length == 1){
        let unfilled_field_string = unfilled_fields.join(" , ");
        alert("Unfilled field is [" + unfilled_field_string + "] Please fil it!");
    }

    else if(unfilled_fields.length !=0 ){
        let unfilled_field_string = unfilled_fields.join(" , ");
        alert("Unfilled fields are [" + unfilled_field_string +"] Please fill them!");
    }
}

let storage = window.localStorage;
function getSelectedSubjectMainPage(clicked_id){
    window.open("../Ginura/QueryForm.html","_self");

    if(clicked_id==="Tickets-button"){
        let subject = "Tickets";
        storage.setItem("selected-subject",subject);
   
    }else if(clicked_id === "Deliver-button"){
        let subject = "Delivery";
        storage.setItem("selected-subject",subject);

    }else if(clicked_id === "Product-button"){
        let subject = "Product";
        storage.setItem("selected-subject",subject);

    }else if(clicked_id === "Website-button"){
        let subject = "Website";
        storage.setItem("selected-subject",subject);

    }else if(clicked_id === "Complains-button"){
        let subject = "Complains";
        storage.setItem("selected-subject",subject);

    }else{
        let subject = "Other";
        storage.setItem("selected-subject",subject);
    }
}

function selectSubjectQueryForm(){
    let storage = window.localStorage;
    let subject = storage.getItem("selected-subject")
    document.getElementById("subject").value=subject;
    document.getElementById("subject").classList.remove("empty-select");
    document.getElementById("subject").classList.add("filled-select");
}


function changeToSubjects(){
    document.getElementById("ghosting-title").classList.remove("display");
    document.getElementById("ghosting-title").classList.add("not-display");
    document.getElementById("query-subjects-box").classList.remove("not-display");
    document.getElementById("query-subjects-box").classList.add("display");
}


function backToQuestion(){
    document.getElementById("query-subjects-box").classList.remove("display");
    document.getElementById("query-subjects-box").classList.add("not-display");
    document.getElementById("ghosting-title").classList.remove("not-display");
    document.getElementById("ghosting-title").classList.add("display");

}


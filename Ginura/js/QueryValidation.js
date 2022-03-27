function checkNames(inputRef){
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

function checkAndValidateEmail(emailRef){
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

function checkEmail(emailRef){
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

function checkSubject(subjectRef){
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


function checkDetails(textRef){
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

function viewQueryButton(myQueryFormRef){
    let unfilled_fields = [];
    let filled_fields = [];
    validateName(myQueryFormRef, unfilled_fields, filled_fields);
    validateEmail(myQueryFormRef, unfilled_fields, filled_fields);
    validateSubject(myQueryFormRef,unfilled_fields,filled_fields);
    validateDetails(myQueryFormRef,unfilled_fields, filled_fields);

    if(unfilled_fields.length == 0){
        printFilledFields(myQueryFormRef,filled_fields);
    } else{
        printUnfilledFields(myQueryFormRef,unfilled_fields);
    }
}

function editQueryForm(editQueryFormRef){
    document.getElementById("filled-query").style.display = "none";
    document.getElementById("query-form-container").style.display = "block";
}

function mailForm(){
    document.getElementById("filled-query").style.display = "none";
    document.getElementById("query-form").submit();
}

function validateName(myQueryFormRef, unfilled_fields, filled_fields){
    let name= myQueryFormRef.name.value;
    if(name != ""){
        filled_fields[filled_fields.length] = (myQueryFormRef.name.value);
    }
    else{
        unfilled_fields[unfilled_fields.length] = ("Name");
        document.getElementById("name").classList.add("empty-input-text");
    }
}

function validateEmail(myQueryFormRef, unfilled_fields, filled_fields){
    let email = myQueryFormRef.email.value;
    if(email != ""){
        filled_fields[filled_fields.length] = (myQueryFormRef.email.value);
    }
    else{
        unfilled_fields[unfilled_fields.length] = ("Email");
        document.getElementById("email").classList.add("empty-input-text");
    }
}
    
function validateSubject(myQueryFormRef,unfilled_fields,filled_fields){
    let subject_array = []
    subject_array = myQueryFormRef.subject;

    if (subject_array.selectedIndex != ""){
        filled_fields[filled_fields.length] = String(subject_array[subject_array.selectedIndex].value);
    }
    else{
        unfilled_fields[Object.keys(unfilled_fields).length] = ("Subject");
        document.getElementById("subject").classList.add("empty-select");
    }
}

function validateDetails(myQueryFormRef, unfilled_fields, filled_fields){
    let details = myQueryFormRef.details.value;
    if (details != ""){
        filled_fields[filled_fields.length] = (myQueryFormRef.details.value)
    }
    else{
        unfilled_fields[unfilled_fields.length] = ("Details");
        document.getElementById("details").classList.add("empty-textarea");
    }
}

function printFilledFields(filled_fields){
    const element_ids = ["filled-name","filled-email", "filled-subject","filled-details"]
    for (let index=0; index<4; index++){
        document.getElementById(element_ids[index]).innerHTML = filled_fields[index].value;
    }
    document.getElementById("query-form-container").style.display = "none";
    document.getElementById("filled-query").style.display = "block";
}


function printUnfilledFields(myQueryFormRef,unfilled_fields){
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
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
    }
}

function validateEmail(myQueryFormRef, unfilled_fields, filled_fields){
    let email = myQueryFormRef.email.value;
    if(email != ""){
        filled_fields[filled_fields.length] = (myQueryFormRef.email.value);
    }
    else{
        unfilled_fields[unfilled_fields.length] = ("Email");
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
    }
}

function validateDetails(myQueryFormRef, unfilled_fields, filled_fields){
    let details = myQueryFormRef.details.value;
    if (details != ""){
        filled_fields[filled_fields.length] = (myQueryFormRef.details.value)
    }
    else{
        unfilled_fields[unfilled_fields.length] = ("Details");
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
    if (unfilled_fields.length != 0){
        let unfilled_field_string = unfilled_fields.join(" , ");
        alert(unfilled_field_string);
    }
}
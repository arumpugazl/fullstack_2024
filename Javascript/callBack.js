//Callback:


SubmitForm("Form Submitted Successfully", databaseSharing)//Hoisting function
function databaseSharing ()
{
    console.log("Data Stored Successfully");
}
 function SubmitForm(formMsg,dbs)
 {
    setTimeout(()=>{
        dbs()
        console.log(formMsg)

    },10000)
 }
// function ResubmitForm(message,dbs)
//{
// setTimeout(()=>{
//   dbs();
// console.log(message)
// },2000)
//}
//ResubmitForm("Form is resubmitted successfully",databaseSharing)



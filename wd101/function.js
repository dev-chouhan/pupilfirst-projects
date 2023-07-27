let passCheck = (pass1, pass2) => {
    let len = Math.min(pass1.length, pass2.length);
    let reqLen = len <= 8;
    let isequal = pass1 === pass2;

    let isvalid = reqLen && isequal;

    if(isvalid){
        return {status: "Success"};
    } else {
        let reasons = [];
        if(reqLen){
            reasons.push("Fix: Length must be atleast 8.");
        }
        if(!isequal){
            reasons.push("Fix: Both passwords are not equal.");
        }

        return {status: "failed", reason: reasons};
    }
};

let pas1 = "abcd123";
let pas2 = "abcd123";

let returnedVal = passCheck(pas1, pas2);
if(returnedVal.status === "success"){
    console.log("Password is valid!");
} else {
    console.log("Password is invalid!");
    console.log(returnedVal.reason);
}
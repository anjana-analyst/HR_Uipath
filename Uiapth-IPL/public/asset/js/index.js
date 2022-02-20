function myalert() { 
            
    document.getElementById("EmployeeId").value = Math.floor((Math.random() * 999) + 100);
    document.getElementById("EmployeeEmail").value = document.getElementById("fname").value+"."+document.getElementById("lname").value+"@uipathrec.com";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("designation").value = "";
} 

function ResetAlert() { 
    
    document.getElementById("EmployeeId").value = '';
    document.getElementById("EmployeeEmail").value = '';
} 

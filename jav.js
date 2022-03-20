function kingKong()
{
    var a = document.getElementById('fname').value;
    var b = document.getElementById('lname').value;
    var g = document.getElementById('age').value;
    var e = document.getElementById('mail').value.indexOf("@");

    if(a.length>=20 ){
alert('First Name should be below 20 characters.')
    }

    if (a.length == 1 || a.length == 2 || a.length == 3 || a.length == 4){
        alert('First Name should at least have 5 characters.')
    }

    if (a.length == 0) {
        alert('Please fill up the First Name column.')
    }

    if (b.length >= 10) {
        alert('Last Name should be below 10 characters.')}

    if (b.length == 1, b.length == 2, b.length == 3) {
        alert('Last Name should at least have 4 characters.')
    }

    if (b.length == 0) {
        alert('Please fill up the Last Name column.')}

    if (isNaN(g) || g < 1 || g > 100) {
        alert("The age must be a number between 1 and 100.")
    }


    if (e == -1) {
        alert("Not a valid e-mail!");
        submitOK = "false";}

    else{  
        
    }
}

/* Slide 09 (#3) */
function signUp_Admin(){
    var adminEmail=document.getElementById("admin_username").value;
    var adminPassword=document.getElementById("admin_password").value;
    var adminName=document.getElementById("admin_fName").value;
    var adminSurname=document.getElementById("admin_sName").value;
    auth.createUserWithEmailAndPassword(adminEmail, adminPassword).then((success) => {
        var user = auth.currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
            console.log(uid);
        }
        var firebaseRef = firebase.database().ref();
            var userData = {
                userFullName: adminName,
                userSurname: adminSurname,
                userEmail: adminEmail,
            }
            firebaseRef.child(uid).set(userData);
            swal('Your Account Created','Your account was created successfully, you can log in now.',
            ).then((value) => {
                setTimeout(function(){
                    window.location.replace("./admin.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                icon: 'error',
                title: 'Error',
                text: "Error",
            })
        });
}

/* Slide 09 (#4) */
function signIn_Admin(){
    var userSIEmail=document.getElementById("admin_uname").value;
    var userSIPassword=document.getElementById("admin_passname").value;
    auth.signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
        swal({
            icon: 'success',
            title: 'Succesfully signed in', 
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("./admin.html");
            }, 1000)
        });
    }).catch((error) => {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     swal({
         icon: 'error',
         title: 'Error',
         text: "Error",
     })
 });
}

/* Slide 09 (#5) */
function signUp_User(){
    var usersEmail=document.getElementById("user_username").value;
    var usersPassword=document.getElementById("user_password").value;
    var usersName=document.getElementById("user_fName").value;
    var usersSurname=document.getElementById("user_sName").value;
    auth.createUserWithEmailAndPassword(usersEmail, usersPassword).then((success) => {
        var user = auth.currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
            console.log(uid);
        }
        var firebaseRef = firebase.database().ref();
            var userData = {
                userFullName: usersName,
                userSurname: usersSurname,
                userEmail: usersEmail,
            }
            firebaseRef.child(uid).set(userData);
            swal('Your Account Created','Your account was created successfully, you can log in now.',
            ).then((value) => {
                setTimeout(function(){
                    window.location.replace("./users.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                icon: 'error',
                title: 'Error',
                text: "Error",
            })
        });
}

/* Slide 09 (#6) */
function signIn_User(){
    var userSIEmail=document.getElementById("user_uname").value;
    var userSIPassword=document.getElementById("user_passname").value;
    auth.signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
        swal({
            icon: 'success',
            title: 'Succesfully signed in', 
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("./users.html");
            }, 1000)
        });
    }).catch((error) => {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     swal({
         icon: 'error',
         title: 'Error',
         text: "Error",
     })
 });
}
function logoutUsers(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        swal({
            icon: 'success',
            title: 'Succesfully Logged Out', 
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("./index.html");
            }, 1000)
        });
      }).catch((error) => {
        // An error happened.
        var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                icon: 'error',
                title: 'Error',
                text: "Error",
            })
      });      
}

function saveReport() {
    let userID = auth.currentUser.uid;
    alert(userID);
    // let userID="Mahika";
    let name = document.getElementById("nameField").value;
    let phone = document.getElementById("phoneField").value;
    let email = document.getElementById("emailField").value;
    let location = document.getElementById("locationField").value;
    let description = document.getElementById("descriptionField").value;

    firebase.database().ref('ReportedIssues/' + userID + '/').set({
        name: name,
        phoneNumber: phone,
        email: email,
        location: location,
        description: description
    })
        .then(() => {
            // alert('Report Saved!')
            swal({
                icon: 'success',
                title: 'Report Saved', 
            })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                icon: 'error',
                title: 'Error',
                text: "Error",
            })
        });
    var brRef = firebase.database().ref("Reports");
    brRef.push({
        name: name,
        phoneNumber: phone,
        email: email,
        location: location,
        description: description
    })
        .then(() => {
            // alert('Data Saved!')
            swal({
                icon: 'success',
                title: 'Data Saved', 
            })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                icon: 'error',
                title: 'Error',
                text: "Error",
            })
        });
}


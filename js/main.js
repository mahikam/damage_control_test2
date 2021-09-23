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
            alert('Report Saved!')
        })
        .catch((error) => {
            console.error("Error writing Report: ", error);
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
            alert('Data Saved!')
        })
        .catch((error) => {
            console.error("Error writing Data: ", error);
        });
}


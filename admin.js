function FetchAllData(){
    // alert("entered to fetch");
    firebase.database().ref('Reports').once('value',function(snapshot){
        snapshot.forEach(
            
            function(ChildSnapshot){
                let name = ChildSnapshot.val().name;
                let email = ChildSnapshot.val().email;
                let loc =  ChildSnapshot.val().location;
                let des = ChildSnapshot.val().description;
                
                // alert("desc:"+des);

                var rowElement=document.createElement("TR");

                rowElement.innerHTML= `<td>${name}</td><td>${email}</td><td>${loc}</td><td>${des}</td><td><button onClick="getValues(this)">INSPECT</button></td>`;

                document.getElementById("table_reportData").appendChild(rowElement);

    //             var str = `<tr><td>${name}</td><td>${email}</td><td>${loc}</td><td>${des}</td></tr>`
	//  document.getElementById("table_reportData").appendChild = str;
	
            }
        )
    });
    document.getElementById("report_issues_table").style.display="inline-table";
}

function getValues(e){
	//var val = e.parentElement.firstChild.innerHTML;
    //document.getElementById("demo").innerHTML = val;
    //alert(val);
    
    var tdList = e.parentElement.parentElement.childNodes;
    // document.getElementById("demo").innerHTML = tdList;
    
    // alert("Email value: "+tdList[1].innerText);
    document.getElementById("A_userEmailField").value = tdList[1].innerText;
    
    // alert("Location value: "+tdList[2].innerText);
    document.getElementById("A_locationField").value = tdList[2].innerText;
      
    // alert("Scroll to the Inspections Slide to Fill out an Inspection Form!")
    swal('Scroll to the Inspections Slide to Fill out an Inspection Form',)
    // alert("Column 3 value, third cell : "+tdList[2].innerText);
    // document.getElementById("col3").value = tdList[2].innerText;
}


function saveInspection() {
    let userID = auth.currentUser.uid;
    alert(userID);
    // let userID="Mahika";
    let name = document.getElementById("A_nameField").value;
    let phone = document.getElementById("A_phoneField").value;
    let email = document.getElementById("A_emailField").value;
    let reporter_email = document.getElementById("A_userEmailField").value;
    let location = document.getElementById("A_locationField").value;
    let description = document.getElementById("A_descriptionField").value;
    firebase.database().ref('Inspections/' + userID + '/').set({
        name: name,
        phoneNumber: phone,
        email: email,
        reporter_email: reporter_email,
        location: location,
        description: description
    })
        .then(() => {
            // alert('Inspection Saved!')
            swal({
                icon: 'success',
                title: 'Inspection Saved', 
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
    var brRef = firebase.database().ref("InspectionForms");
    brRef.push({
        name: name,
        phoneNumber: phone,
        email: email,
        reporter_email: reporter_email,
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

function logoutAdmin(){
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
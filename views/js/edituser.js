$(document).ready(function() {
  const url = location.search;
  const urlId = new URLSearchParams(url);
  const id = urlId.get("id");
  console.log(id);
  // const id = "5e6dfacfd9126e7641a67491";
  const getUser = () => {
    const user = $.ajax({
      url: `/user/${id}`,
      type: `GET`,
      dataType: "json",
      async: false,
      success: data => {
        console.log("data find");
      },
      error: data => {
        console.log(`data not found`);
      }
    }).responseText;
    // console.log(user);
    const userArr = JSON.parse(user);
    const form = document.forms["editUserForm"];
    form.elements["name"].value = userArr.name;
    form.elements["email"].value = userArr.email;
    form.elements["dob"].value = userArr.dob;
    form.elements["age"].value = userArr.age;
    form.elements["gender"].value = userArr.gender;
    form.elements["countrycode"].value = userArr.countrycode;
    form.elements["contactnumber"].value = userArr.contactnumber;
    form.elements["skills"].value = userArr.skills;
    form.elements["address"].value = userArr.address;
    form.elements["pincode"].value = userArr.pincode;
  };
  getUser();
  const updateButton = $(".updateUser");
  const updateForm = $("#editUserForm");
  const updateHandler = e => {
    e.preventDefault();
    $.ajax({
      url: `user/${id}`,
      type: "PUT",
      data: updateForm.serialize(),
      success: res => {
        console.log(res);
      }
    });
    tata.success("Data Updated !", "User List", {
      position: "mm",
      duration: 5000
    });
    window.location = "index.html";
  };
  updateButton.on("click", updateHandler);
  //2.update password
  const updatePasswordForm = $("#updatePasswordForm");
  const updatePassword = $(".update-password");
  const updatePasswordHandler = e => {
    e.preventDefault();
    const data = updatePasswordForm.serialize();
    console.log(data);
    $.ajax({
      url: `user/${id}`,
      type: "PUT",
      data: updatePasswordForm.serialize(),
      success: res => {
        console.log(res);
      }
    });
    tata.success("Password Updated !", "User List", {
      position: "mm",
      duration: 5000
    });
    //alert("Password Updated");
    window.location = "index.html";
  };
  updatePassword.on("click", updatePasswordHandler);
  const updateLocation = $(".updateLocation");
  const updateLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(lat);
        console.log(long);
        $.ajax({
          url: `user/${id}`,
          type: "PUT",
          // data: { location: lat, location: long },
          data: "location=" + lat + "&location=" + long,
          success: res => {
            console.log(res);
          }
        });
      },
      function(error) {
        console.log("The Locator was denied. :(");
      }
    );
    tata.success("Location Updated !", "User List", {
      position: "mm",
      duration: 5000
    });
    window.location = "index.html";
    //alert("Location Updated");
  };
  updateLocation.on("click", updateLocationHandler);
});

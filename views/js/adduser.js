(function() {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      $("#long").val(position.coords.latitude);
      $("#lat").val(position.coords.longitude);
    },
    function(error) {
      console.log("The Locator was denied. :(");
    }
  );
})();
const insertForm = $("#addUserForm");
const insertSubmitHandler = e => {
  e.preventDefault();
  $.ajax({
    url: "/user",
    type: "POST",
    data: insertForm.serialize(),
    success: data => {
      //   tata.success("Data Inserted Successfully !", "User List", {
      //     position: "mm",
      //     duration: 5000
      //   });
      alert("Data Insert Successfully !");
      window.location = "index.html";
    },
    error: data => {
      //   tata.error("User Validation Failed !", "User List", {
      //     position: "mm",
      //     duration: 5000
      //   });
      alert("User Vaildation Failed");
      window.location = "createUser.html";
    }
  });
};
insertForm.on("submit", insertSubmitHandler);

"use strict";
const userRows = arr => {
  const rows = arr
    .map(
      (user, i) =>
        `<tr id="row_${user._id}">
    <td>${i + 1}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.age}</td>
    <td>${user.gender}</td>
    <td>${user.contactnumber}</td>
    <td>${user.skills}</td>
    <td>${user.address}</td>
    <td>${user.pincode}</td>
    <td>${user.location}</td>
    <td>
    <a class="btn btn-teal" href="editUser.html?id=${user._id}">Edit</a>
    </td>
    <td>
    <button id="${
      user._id
    }" class="deleteButton btn btn-danger" value="">Delete</button>
    </td>
  </tr>`
    )
    .join("");
  return rows;
};
$(document).ready(function() {
  //1.get all data
  const displayUser = () => {
    const userJson = $.ajax({
      url: "/user",
      type: "GET",
      dataType: "json",
      async: false,
      success: data => {
        // console.log(data);
      }
    }).responseText;
    const userArr = JSON.parse(userJson);
    const tbody = document.querySelector("#tbody");
    const rows = userRows(userArr);
    // console.log(rows);
    if (userArr.length > 0) {
      tbody.innerHTML = rows;
    } else {
      $("#userData").text("No Data Found");
      tata.error("No Data Found !", "User List", {
        position: "mm",
        duration: 8000
      });
    }
  };
  displayUser();
  //2.delete data
  const deleteUser = () => {
    const userId = $(".deleteButton").attr("id");
    //console.log(id);
    $.ajax({
      url: `/user/${userId}`,
      type: "DELETE",
      success: data => {
        $(`#row_${userId}`).remove();
      },
      error: data => {
        tata.error("No Data Deleted !", "User List", {
          position: "mm",
          duration: 8000
        });
      }
    });
    tata.success("Data Deleted Successfully !", "User List", {
      position: "mm",
      duration: 5000
    });
  };
  $(".deleteButton").on("click", deleteUser);
});

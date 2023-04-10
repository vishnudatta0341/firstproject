function logout() {
  window.location.assign("index.html");
}
function reset() {
  var x = document.getElementById("inputbox1").value="";
}
fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData);
    let tableData = "";
    objectData.map((values) => {
      tableData += `
        <tr>
        <td>${values.id}</td>
        <td><img src="${values.profilePic}"/></td>
        <td>${values.fullName}</td>
        <td>${values.dob}</td>
        <td>${values.gender}</td>
        <td>${values.currentCity},${values.currentCountry}</td>
        </tr>`;
    });
    document.getElementById("tbody").innerHTML = tableData;
  });

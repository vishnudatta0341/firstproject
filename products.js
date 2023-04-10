function logout(){
    window.location.assign("index.html");
};
fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products").then((data)=>{
    console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData);
    let tableData="";
    objectData.map((values)=>{
        tableData +=`
        <tr>
        <td>${values.id}</td>
        <td>${values.medicineName}</td>
        <td>${values.medicineBrand}</td>
        <td>${values.expiryDate}</td>
        <td>${values.unitPrice}</td>
        <td>${values.stock}</td>
        </tr>`;
    });
    document.getElementById("tbody").innerHTML=tableData;
});
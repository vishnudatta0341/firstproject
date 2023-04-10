function logout() {
  window.location.assign("index.html");
}
fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
  .then((data) => {console.log(data);
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData);
    //filtering json data
    // let newf = objectData.filter((newf) => {
    //   return newf.orderStatus == "New";
    // });
    // console.log(newf);
    // let packedf = objectData.filter((packedf) => {
    //   return packedf.orderStatus == "Packed";
    // });
    // console.log(packedf);
    // let transit = objectData.filter((transit) => {
    //   return transit.orderStatus == "InTransit";
    // });
    // console.log(transit);
    // let deliver = objectData.filter((deliver) => {
    //   return deliver.orderStatus == "Delivered";
    // });
    // console.log(deliver);
    // let newPack = objectData.filter((newPacked) => {
    //   let newPacked1 =
    //     (newf.orderStatus == "New" + packedf.orderStatus) == "Packed";
    //   return newPacked1;
    // });
    // console.log(newPacked1);
    // if (
    //   document.getElementById("newf").checked == true &&
    //   document.getElementById("packed").checked == true &&
    //   document.getElementById("intransit").checked == true
    // ){
    //   objectData=newf + packedf + transit;
    // }else if(document.getElementById("newf").checked == true &&
    // document.getElementById("packed").checked == true){
    //   objectData=newf + packedf;
    // }else if(document.getElementById("newf").checked == true &&
    // document.getElementById("packed").checked == true){
    //   objectData=newf;
    // }else{
    //   objectData=objectData;
    // }
    let tableData = "";
    objectData.map((values) => {
      tableData += `
     <tr>
     <td>${values.id}</td>
     <td>${values.customerName}</td>
     <td>${values.orderDate},${values.orderTime}</td>
     <td>${values.amount}</td>
     <td>${values.orderStatus}</td>
     </tr>`;
    });
    document.getElementById("tbody").innerHTML = tableData;
    return objectData;
  })
  .then((selection) => {
    if (
        document.getElementById("newf").checked == true &&
        document.getElementById("packed").checked == true &&
        document.getElementById("intransit").checked == true
      ){
        objectData=newf + packedf + transit;
      }else if(document.getElementById("newf").checked == true &&
      document.getElementById("packed").checked == true){
        objectData=newf + packedf;
      }else if(document.getElementById("newf").checked == true &&
      document.getElementById("packed").checked == true){
        objectData=newf;
      }else{
        objectData=objectData;
      }
  });
// assingning to checkbox
// var x= document.getElementById('box1').innerHTML;
// console.log(x);
// function check() {
//   if (document.getElementById('newf').checked==true) {
//   box1.style.display='block';
//   }else{
//     box1.style.display='none';
//   }
// }

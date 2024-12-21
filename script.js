// function insert_Row() {
//     //Write your code here
//    let table=document.getElementById('sampleTable');
//   table.innerHTML = `<tr>
//     <td>New Cell1</td>
//     <td>New Cell2</td>
//   </tr>`+table.innerHTML 
	
// }


function insert_Row() {
  let table = document.getElementById('sampleTable');
  let newRow = table.insertRow(0);

  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = "New Cell1";

  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = "New Cell2"; 
}
Your current approach of using innerHTML to add a new row will work, but it’s not the best practice. This is because innerHTML causes the browser to serialise the HTML content into a string, wipe out existing DOM within the element, and re-parse the string back into new DOM elements. This can be inefficient, especially for large tables.

Let’s use the insertRow and insertCell methods instead. Here’s how you can modify your function:

function insert_Row() {
    let table = document.getElementById('sampleTable');
    let newRow = table.insertRow(0); 

    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = "New Cell1"; 

    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = "New Cell2";
}
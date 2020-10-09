
/* addData()
* @param: none
* creates a new instance of DataService, calls getData
*/
const addDataRows = () => {
    const addRow = new DataService().getData();
    console.log(addRow);

    const dataRow = document.getElementById("rows");

    addRow.forEach(Object => {  //creates a new row for each object in dataRow
        createRow(dataRow, Object);
    })
};


//Creates a New Row for an object
 createRow=(parentElem, rowData) => {
    tableRow = parentElem.insertRow(0);

    nameCol = tableRow.insertCell(0);
    genderCol = tableRow.insertCell(1);
    addressCol = tableRow.insertCell(2);
    ageCol = tableRow.insertCell(3);
    phoneNumCol = tableRow.insertCell(4);

    nameCol.innerHTML = rowData.name;
    genderCol.innerHTML = rowData.gender;
    addressCol.innerHTML = rowData.address;
    ageCol.innerHTML = rowData.age;
    phoneNumCol.innerHTML = rowData.phoneNumber;
}; 
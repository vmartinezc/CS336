
/* addData()
* @param: none
* creates a new instance of DataService, calls getData
*/
async function addDataRows(){
    getfetchData = new DataService();
    await getfetchData.fetchData();
    const addRow = getfetchData.getData();
    // const fetchDay = new DataService.fetchDay();
    // console.log(addRow);
    // console.log(fetchDay);

    const dataRow = document.getElementById("rows");

    addRow.forEach(Object => {  //creates a new row for each object in dataRow
        createRow(dataRow, Object);
    })
};


//Creates a New Row for an object
 createRow =( parentElem, rowData) => {
    tableRow = parentElem.insertRow(0);

    nameCol = tableRow.insertCell(0);
    genderCol = tableRow.insertCell(1);
    addressCol = tableRow.insertCell(2);
    ageCol = tableRow.insertCell(3);
    phoneNumCol = tableRow.insertCell(4);
    fetchCol = tableRow.insertCell(5);

    imageFetched = document.createElement('img');
    imageFetched.src = rowData.picture;
    fetchCol.appendChild(imageFetched);

    //Gets the HTML data for each column
    nameCol.innerHTML = rowData.name;
    genderCol.innerHTML = rowData.gender;
    addressCol.innerHTML = rowData.address;
    ageCol.innerHTML = rowData.age;
    phoneNumCol.innerHTML = rowData.phone;
}; 
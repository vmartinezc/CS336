import { DataService, Person } from './dataService';
/* addData()
* @param: none
* creates a new instance of DataService, calls getData
*/
async function addDataRows() {
    const getfetchData: DataService = new DataService();
    await getfetchData.fetchData();
    const addRow: Array<Person> = getfetchData.getData();

    const dataRow = document.getElementById("rows");
    addRow.forEach(Object => {  //creates a new row for each object in dataRow
        createRow(dataRow, Object);
    })
};


//Creates a New Row for an object
function createRow(parentElem: any, rowData: any) {

    const table: Array<String | Number> = [
        rowData.name.title + " " + rowData.name.first + " " + rowData.name.last,
        rowData.gender,
        rowData.location.street.number + " " + rowData.location.street.name + " " + rowData.location.city + " " + rowData.location.country,
        rowData.dob.age,
        rowData.cell,
        rowData.picture.large
    ];
    const tableRow = parentElem.insertRow(0);

    const nameCol = tableRow.insertCell(0);
    const genderCol = tableRow.insertCell(1);
    const addressCol = tableRow.insertCell(2);
    const ageCol = tableRow.insertCell(3);
    const phoneNumCol = tableRow.insertCell(4);
    const fetchCol = tableRow.insertCell(5);

    const imageFetched = document.createElement('img');
    imageFetched.src = rowData.picture;
    fetchCol.appendChild(imageFetched);

    //Gets the HTML data for each column
    nameCol.innerHTML = rowData.name;
    genderCol.innerHTML = rowData.gender;
    addressCol.innerHTML = rowData.address;
    ageCol.innerHTML = rowData.age;
    phoneNumCol.innerHTML = rowData.phone;
}; 
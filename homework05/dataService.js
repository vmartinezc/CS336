/* Homework 05
* Valeria Martinez Castro
*  CS 336 @ Calvin Uni
* 10-06-2020
*/

class DataService {
    constructor(){};


    data = [
        {
        name: 'Valeria',
        gender:'Female',
        address:'My House',
        age: 22,
        phoneNumber: '3019865745',
    },
    {
        name: 'Ariel',
        gender:'Male',
        address:'His House',
        age: 17,
        phoneNumber: '22216656',

    },
    {
        name: 'Alejandro',
        gender:'Male',
        address:'Ariel\'s House',
        age: 9,
        phoneNumber: '22216656',

    },
    {
        name: 'Toño',
        gender:'Male',
        address:'904',
        age: 23,
        phoneNumber: '6165342378',

    },
    ];

    getData(numRecords){
           return (numRecords ? this.data.filter((record, idx) => idx < numRecords) : this.data);
    }
}

//Testing outputs

//const d = new DataService();
//console.log(d.getData(1)); 
//Expect output: First record only

//console.log(d.getData(2)); 
//Expect output: First 2 records

//console.log(d.getData());
//Expect output: All records


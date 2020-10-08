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
    ];

    getData(numRecords){
           return (numRecords ? this.data.filter((record, idx) => idx < numRecords) : this.data);
    }
}

const p = new DataService();
console.log(p.getData(3));



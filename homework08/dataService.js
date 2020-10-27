/* Homework 06
* Valeria Martinez Castro
*  CS 336 @ Calvin Uni
* 21-06-2020
*/
export class DataService {
    //dynamic array
    constructor() {
        this.data = [];
    }
    ;
    // data = [];
    //data array with at least 3 objects
    /*
    data = [
        {
        name: 'Valeria',
        gender:'Female',
        address:'My House',
        age: 22,
        phoneNumber: '3019865745',
    },
    { ≤
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

    */
    /* getData()
    * @params: numRecords, an integer
    * if param n is passed fecth n objects in order
    * else, return whole array
    */
    getData(numRecords) {
        return (numRecords ? this.data.filter((record, idx) => idx < numRecords) : this.data);
    }
    //Asynchronous call that uses await, try & catch
    async fetchData() {
        const promise = new Promise((resolve, reject) => {
            resolve(fetch('https://randomuser.me/api/?results=10'));
            reject("Fetch error");
        });
        try {
            const fetchedData = await promise;
            return new Promise(async (resolve, reject) => {
                if (!fetchedData.ok) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        fetchedData.status);
                    return;
                }
                const dataResults = new Promise((resolve, reject) => {
                    resolve(dataResults); //this keeps giving me an error, eventho I declared the
                    //resolveJsonModule
                    // resolve(dataResults.json());
                    reject("Parsing failed");
                });
                const jsonData = await dataResults;
                this.data.push(jsonData.results);
            });
        }
        //  console.log(JSON.stringify(data, undefined, 2));
        //    data.results.forEach(results => {
        //     let {title, first, last} = results.name;
        //     const name = title + ' ' + first + ' ' + last;
        //     const gender = results.gender;
        //     const address = results.location.street.number + ' ' + results.location.street.name;
        //     const age = results.dob.age;
        //     const phone = results.phone;
        // const picture = results.picture.thumbnail
        // this.data.push({ //returns promise & parses the fetchedData as JSON
        //     "name" : name,
        //     "gender": gender,
        //     "address": address,
        //     "age" : age,
        //     "phone" : phone,
        //     "picture" : picture            
        // }); 
        // });
        catch (err) {
            console.log('Fetch Error :-S', err);
        }
    }
}
//     Testing outputs     //
//Create instance for testing 
//const d = new DataService();
//console.log(d.fetchData()); 
//Expect output: First record only
//console.log(d.getData(2)); 
//Expect output: First 2 records
//console.log(d.getData());
//Expect output: All records

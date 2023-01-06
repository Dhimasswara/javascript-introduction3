import fetch from 'node-fetch';
// Synchronous
// const loadDataSync = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//         // console.log(data);
//         data.forEach((item, index) => {
//         console.log(`No ${index + 1}. ${item.name}`);
//         return data;
//     });
//     });
// }
// loadDataSync()

// Asynchronous
console.log(`\n-->10 Filtered Names From API<--\n`);
const loadData = async () => {
    try {
        const url = await fetch("https://jsonplaceholder.typicode.com/users")
        const userData = await url.json();
        loadUserData(userData);
    }catch(error){
        console.log(`Message -> ${error}`);
    }
}
const loadUserData = (data) => {
    const output = data.map((el,id) => {   
        console.log(`No ${id+1}. ${el.name}`);
        return el.name;
    })

}
loadData();




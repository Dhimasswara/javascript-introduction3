const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            } else {
                reject(`Rejected : Hari ini bukan hari kerja`)
            }
        },3000)
    })
    
}

cekHariKerja("sss")
.then((result) => {
    console.log(`Hari ${result}, adalah hari kerja`);
})
.catch((error) => {
    console.log(error);
})

// async function hariKerja (day) {
// 	try {
// 		const hari = await cekHariKerja(day);	
//         console.log(`${hari} adalah hari kerja`);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// hariKerja('kamis')












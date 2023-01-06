const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", 
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        if (!error){
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000);
}

function tampilkanMonth (error, month) {
    try {
        if (error){
            console.log(error);
        }
        const showAllMonth = month.map((m) => {
            return m;
        });
        console.log(`All Month : ${showAllMonth}`);
    } catch (error) {
        console.log(error);
    }
}

getMonth(tampilkanMonth);
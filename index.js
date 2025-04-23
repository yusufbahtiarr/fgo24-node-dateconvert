import moment from "moment";
import readline from "readline/promises";


async function mainDate1(){
  try {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const input = await rl.question('Masukkan tanggal : ');
    if (moment(input,'DD-MM-YYYY').isValid()) {
      console.log(moment(input,'DD-MM-YYYY').format('DD/MM/YYYY'));
      rl.close();
    }
    else { 
      let err = new Error("false");
      rl.close();
      throw err;
    }
  } catch (err) {
    if(err.message === "false"){
      console.log("Format tanggal salah");
    }
  }
}

mainDate1();

// tanpa external package
// function mainDate2() {
//   rl.question('Masukkan tanggal : ', function(input) {
//     let temp = new Date(input.split('-').reverse().join('-'));
//     if (temp === 'Invalid Date') {
//       console.log("Format tanggal salah");
//       mainDate2();
//     } else {
//       let newDate = temp.getDate()+'/'+temp.getMonth()+'/'+temp.getFullYear();
//       console.log(newDate);
//       rl.close();
//     }
//   });
// }

// mainDate2();

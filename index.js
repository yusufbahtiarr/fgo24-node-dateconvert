import moment from "moment";
import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// external package
async function mainDate1(){
  try {
    const input = await rl.question('Masukkan tanggal : ');
    if (moment(input,'DD-MM-YYYY').isValid()) {
      console.log(moment(input,'DD-MM-YYYY').format('DD/MM/YYYY'));
      rl.close();
    }else if (!moment(input,'DD-MM-YYYY').isValid()){
      const err = new Error('format_invalid');
      rl.close();
      throw err;
    } else { 
      let err = new Error("not_valid");
      rl.close();
      throw err;
    }
  } catch (err) {
    if(err.message === "format_invalid"){
      console.log("Format tanggal salah");
    }
    if(err.message === "not valid"){
      console.log("Input tanggal tidak valid ");
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

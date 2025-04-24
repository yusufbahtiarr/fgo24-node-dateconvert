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
async function mainDate2() {
  try {
    const inputDate = await  rl.question('Masukkan tanggal : ');
    if (inputDate === ""){
      rl.close();
      throw new Error("kosong");
    }
    let container = new Date(inputDate.split('-').reverse().join('-'));
    if (isNaN(container)) {
      const error = new Error('false');
      rl.close();
      throw error;
    } else {
      let joinDate = `${container.getDate()}/${container.getMonth() + 1}/${container.getFullYear()}`
      console.log(joinDate);
      rl.close();
    }
  } catch (y) {
    if(y.message === 'false'){
      console.log('input format tanggal salah');
    }
    if(y.message === 'kosong'){
      console.log('input tidak boleh kosong');
    }
  }
}
mainDate2();

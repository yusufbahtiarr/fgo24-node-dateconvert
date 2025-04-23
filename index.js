import moment from "moment";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pakai external package
function mainDate1(){
  rl.question('Masukkan Tanggal: ', (answer) => {
    if(moment(answer,"DD-MM-YYYY").isValid()){
      console.log(moment(answer, "DD-MM-YYYY").format("DD/MM/YYYY"));
      rl.close();
    }else{
      console.log("Format Tanggal Salah!");
      mainDate1();
    }
  });
}
mainDate1();

// tanpa external package
function mainDate2() {
  rl.question('Masukkan tanggal : ', function(input) {
    let temp = new Date(input.split('-').reverse().join('-'));
    if (temp === 'Invalid Date') {
      console.log("Format tanggal salah");
      mainDate2();
    } else {
      let newDate = temp.getDate()+'/'+temp.getMonth()+'/'+temp.getFullYear();
      console.log(newDate);
      rl.close();
    }
  });
}

// mainDate2();

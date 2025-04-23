import moment from "moment";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukkan Tanggal: ', (answer) => {
    changeFormatDate(answer)
    rl.close();
});

const changeFormatDate = (date) => {
    moment.updateLocale(date, {invalidDate: "Data tanggal tidak valid"})    
    console.log(moment(date, "DD-MM-YYYY").format("DD/MM/YYYY"));
        
}

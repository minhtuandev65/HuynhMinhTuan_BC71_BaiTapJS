document.addEventListener("DOMContentLoaded", function () {
    var sum = document.getElementById("sum");
    var payroll = document.getElementById("payroll");

    // Input: inputDay, inputLate
    // Process: a = 100000, diTreDuoi4Lan = inputLate * 20000, diTre5Lan = a + 80000, diTreTren5Lan = (diTre5Lan + ((inputLate - 5) * a)), tongLuong = inputDay * a, tongLuongDiTre = tongLuong - diTre5Lan, tongLuongDiTre = tongLuong - diTreTren5Lan, tongLuongDiTre = tongLuong - diTreDuoi4Lan
    // Output: total
    function cal() {
        var inputDay = parseInt(document.getElementById("inputDay").value.trim());
        var inputLate = parseInt(document.getElementById("inputLate").value.trim());
        let notiDay = document.getElementById("notiDay");
        let notiLate = document.getElementById("notiLate");
        const a = 100000;
        const diTreDuoi4Lan = inputLate * 20000;
        const diTre5Lan = a + 80000;
        const diTreTren5Lan = (diTre5Lan + ((inputLate - 5) * a));
        const tongLuong = inputDay * a;
        let total = null;

        sum.innerText = "";
        sum.style.color = "black";
        notiDay.innerText = "*";
        notiDay.style.color = "black";
        notiLate.innerText = "*";
        notiLate.style.color = "black";

        if (inputDay === "" || isNaN(inputDay)) {
            notiDay.innerText = "Nhập số ngày đi làm";
            notiDay.style.color = "red";
            return;
        }else if(inputDay < 0){
            notiDay.innerText = "Số ngày đi làm là số dương";
            notiDay.style.color = "red";
            return;
        }else if(inputLate === "" || isNaN(inputLate)){
            notiLate.innerText = "Nhập số ngày đi trễ";
            notiLate.style.color = "red";
            return;
        }else if (inputLate < 0){
            notiLate.innerText = "Số ngày đi trễ là số dương";
            notiLate.style.color = "red";
            return;
        }else if(inputLate > 15){
            sum.innerText = "Mày bị đuổi việc!!!!!!!!"
            sum.style.color = "red";
        }else{
            if (inputLate === 5)
                total = tongLuong - diTre5Lan;
            else if (inputLate > 5)
                total = tongLuong - diTreTren5Lan;
            else
                total = tongLuong - diTreDuoi4Lan;
    
            sum.innerText = `Tổng Lương = ${total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND` ;
        }
    }
    payroll.addEventListener("click", cal);
});
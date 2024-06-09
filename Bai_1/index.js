document.addEventListener("DOMContentLoaded", function () {
    var sum = document.getElementById("sum");
    var payroll = document.getElementById("payroll");

    function cal() {
        const inputDay = parseInt(document.getElementById("inputDay").value.trim());
        const inputLate = parseInt(document.getElementById("inputLate").value.trim());
        let notiDay = document.getElementById("notiDay");
        let notiLate = document.getElementById("notiLate");
        const a = 100000;
        const diTreDuoi4Lan = inputLate * 20000;
        const diTre5Lan = a + 80000;
        const diTreTren5Lan = (diTre5Lan + ((inputLate - 5) * a));
        const tongLuong = inputDay * a;
        let tongLuongDiTre = 0;

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
                tongLuongDiTre = tongLuong - diTre5Lan;
            else if (inputLate > 5)
                tongLuongDiTre = tongLuong - diTreTren5Lan;
            else
                tongLuongDiTre = tongLuong - diTreDuoi4Lan;
    
            sum.innerText = "Tổng Lương = " + tongLuongDiTre;
        }
    }
    payroll.addEventListener("click", cal);
});
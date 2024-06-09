document.addEventListener("DOMContentLoaded", function(){
    var nhapN = document.getElementById("nhapN");
    var total = document.getElementById("total");
    var tinhLuong = document.getElementById("tinhLuong");
    var diTre = document.getElementById("nhapA");

    function cal (){
        var inputN = parseInt(nhapN.value);
        var inputA = parseInt(diTre.value);
        var a = 100000;
        var diTreDuoi4Lan = inputA * 20000;
        var diTre5Lan = a + 80000;
        var diTreTren5Lan = (diTre5Lan + ((inputA-5)*a));
        var tongLuong = inputN * a;
        var tongLuongDiTre = 0;

        if (inputA === 5)
            tongLuongDiTre = tongLuong - diTre5Lan;
        else if (inputA > 5) 
            tongLuongDiTre = tongLuong - diTreTren5Lan;
        else
            tongLuongDiTre = tongLuong - diTreDuoi4Lan;
            
        total.innerText = "Tổng Lương = " + tongLuongDiTre;
        
    }
    tinhLuong.addEventListener("click", cal);
});
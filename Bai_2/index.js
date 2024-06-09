document.addEventListener("DOMContentLoaded", function(){
    var nhapCacSoDiv = document.getElementById("nhapCacSo");
    var tongDiv = document.getElementById("tong");
    var soDaNhap = document.getElementById("soDaNhap")
    var arr = [];

    function nhapSo() {
        var soLuong = parseInt(document.getElementById("soLuong").value);
        var tong = 0;

        if (!isNaN(soLuong) && soLuong > 0) {
            nhapCacSoDiv.innerHTML = "";
            tongDiv.innerHTML = "";
            for(var i = 0; i < soLuong; i++){
                var so = parseFloat(prompt("Nhập số thứ " + (i+1) + ": "));
                if(!isNaN(so)){
                    arr.push(so);
                    var p = document.createElement("p");
                    p.innerText = "Các số đã nhập " + (i+1) + ": " + so;
                    nhapCacSoDiv.appendChild(p);
                    tong += so;
                }
                else{
                    alert("Số đã nhập không hợp lệ");
                    break;
                }
            }
            tongDiv.innerText = "Tổng của mảng = " + tong;
        } else {
            alert("Vui lòng nhập một số nguyên dương.");
        }
    }
    nhapCacSoDiv.addEventListener("click", nhapSo);
});
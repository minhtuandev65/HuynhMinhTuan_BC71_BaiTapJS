document.addEventListener("DOMContentLoaded", function(){
    var nhapCacSoDiv = document.getElementById("nhapCacSo");
    var tongDiv = document.getElementById("tong");
    var soDaNhap = document.getElementById("soDaNhap")
    var arr = [];

    // Input: quantity,number
    // Process: total += number;
    // Output: total
    function nhapSo() {
        var quantity = parseFloat(document.getElementById("quantity").value);
        var total = 0;

        if (!isNaN(quantity) && quantity > 0) {
            nhapCacSoDiv.innerHTML = "";
            tongDiv.innerHTML = "";
            for(var i = 0; i < quantity; i++){
                var number = parseFloat(prompt("Nhập số thứ " + (i+1) + ": "));
                if(!isNaN(number)){
                    arr.push(number);
                    var p = document.createElement("p");
                    p.innerText = "Các số đã nhập " + (i+1) + ": " + number;
                    nhapCacSoDiv.appendChild(p);
                    total += number;
                }
                else{
                    alert("Số đã nhập không hợp lệ");
                    break;
                }
            }
            tongDiv.innerText = "Tổng của mảng = " + total;
        } else {
            alert("Vui lòng nhập một số nguyên dương.");
        }
    }
    nhapCacSoDiv.addEventListener("click", nhapSo);
});
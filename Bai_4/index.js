document.addEventListener("DOMContentLoaded", function () {
    var countRectangular = document.getElementById("count");


    // Input: lengthRectangular, widthRectangular, chose
    // Process: areaRectangular = lengthRectangular * widthRectangular, perimeterRectangular = (lengthRectangular + widthRectangular) * 2
    // Output: areaRectangular, perimeterRectangular
    function rectangularCalculation() {
        var lengthRectangular = parseFloat(document.getElementById("inputLength").value);
        var widthRectangular = parseFloat(document.getElementById("inputWidth").value);
        var lengthRectangularInput = document.getElementById("inputLength").value.trim();
        var widthRectangularInput = document.getElementById("inputWidth").value.trim();
        var chose = document.getElementById("chose").value;
        var notiLength = document.getElementById("notiLength");
        var notiWidth = document.getElementById("notiWidth");
        let areaRectangular = 0;
        let perimeterRectangular = 0;
        areaRectangular = "";
        perimeterRectangular = "";
        notiLength.innerText = "*";
        notiLength.style.color = "black";
        notiWidth.innerText = "*";
        notiWidth.style.color = "black";

        if (lengthRectangularInput === "" || widthRectangularInput === "" || isNaN(lengthRectangular) || isNaN(widthRectangular)) {
             if (lengthRectangularInput === "" || isNaN(lengthRectangular)) {
                notiLength.innerText = "Phải nhập chiều dài";
                notiLength.style.color = "red";
                return;
            }
             if (widthRectangularInput === "" || isNaN(widthRectangular)) {
                notiWidth.innerText = "Phải nhập chiều rộng";
                notiWidth.style.color = "red";
                return;
            }
        } else {
            switch (chose) {
                case "area":
                    areaRectangular = lengthRectangular * widthRectangular;
                    document.getElementById("result").innerText = "Diện tích hình chữ nhật = " + areaRectangular;
                    break;
                case "perimeter":
                    perimeterRectangular = (lengthRectangular + widthRectangular) * 2;
                    document.getElementById("result").innerText = "Chu vi hình chữ nhật = " + perimeterRectangular;
                    break;
                default:
                    document.getElementById("result").innerText = "Mời chọn tính diện tích hoặc tính chu vi."
                    document.getElementById("result").style.color = "red";
                    break;
            }
        }
    }
    countRectangular.addEventListener("click", rectangularCalculation);
});
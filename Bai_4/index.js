document.addEventListener("DOMContentLoaded", function () {
    var countRectangular = document.getElementById("count");

    function rectangularCalculation() {
        const lengthRectangular = parseFloat(document.getElementById("inputLength").value);
        const widthRectangular = parseFloat(document.getElementById("inputWidth").value);
        const lengthRectangularInput = document.getElementById("inputLength").value.trim();
        const widthRectangularInput = document.getElementById("inputWidth").value.trim();
        const chose = document.getElementById("chose").value;
        var notiLength = document.getElementById("notiLength");
        var notiWidth = document.getElementById("notiWidth");
        let areaRectangular = 0;
        let perimeterRectangular = 0;
        areaRectangular = "";
        perimeterRectangular = "";
        notiLength.innerText = "*";
        notiLength.style.color ="black";
        notiWidth.innerText = "*";
        notiWidth.style.color = "black";

        if (lengthRectangularInput === "" || widthRectangularInput === "" || isNaN(lengthRectangular) || isNaN(widthRectangular)) {
            if (lengthRectangularInput === "" || isNaN(lengthRectangular)) {
                notiLength.innerText = "Phải nhập chiều dài";
                notiLength.style.color = "red";
                return;
            }
            if (widthRectangularInput === "" || isNaN(widthRectangular)) {
                notiWidth.innerText = "Phải nhập chiều rồng";
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
                    break;
            }
        }
    }
    countRectangular.addEventListener("click", rectangularCalculation);
});
// BÀI TẬP SỐ 1 

/**
 * B1: Nhập vào số ngày đi làm 
 * B2: Khai báo 2 biến : salaryOneDay, salaryEarn, numberOfWorkingDay
 * Tính tiền lương  bằng công thức salaryEarn = salaryOneDay * numberOfWorkingDay
 * B3: Trả về kết quả là tiền lương
 */
var calcualteSalary = document.getElementById('btnSalaryCal');
calcualteSalary.onclick = function () {
    var salaryEarnText = document.getElementById('salaryEarnText');
    var numberOfWorkingDay = document.getElementById('numberOfWorkingDays');
    var salaryOneDay = 100000;
    if (numberOfWorkingDay.value < 0) {
        salaryEarnText.innerHTML = 'Số ngày đi làm phải >= 0'
    }
    else {
        var salaryEarn = salaryOneDay * numberOfWorkingDay.value;
        salaryEarnText.innerHTML = 'Lương tháng của bạn là : ' + salaryEarn + "VNĐ";
    }
}

//  BÀI TẬP SỐ 2 

/**
 * B1:Nhập vào 5 số thực
 * B2: Khai báo 5 biến (a,b,c,d,e) chứa 5 số thực và biến chứa kết quả (average)
 * => Tính kết quả theo công thức:
 * average = (a + b + c + d + e)/5
 * B3: Trả về kết quả trung bình
 */

var calculateAverage = document.getElementById('btnAverageCal');
calculateAverage.onclick = function () {
    var a = parseFloat(document.getElementById('txtNumberOne').value);
    var b = parseFloat(document.getElementById('txtNumberTwo').value);
    var c = parseFloat(document.getElementById('txtNumberThree').value);
    var d = parseFloat(document.getElementById('txtNunberFour').value);
    var e = parseFloat(document.getElementById('txtNumberFive').value);

    console.log(typeof a)
    var average = (a + b + c + d + e) * 1 / 5;
    console.log(average);
    var averageResult = document.getElementById('averageResult');
    averageResult.innerHTML = 'Giá trị trung bình của 5 số thực : ' + average;
}


// BÀI TẬP SỐ 3 

/**
 * B1: Nhập vào số tiền cần quy đổi
 * B2: Khai báo biến defaulftMoney, inputMoney, outputMoney
 * Tính kết quả theo công thức outputMoney = defaultMoney * inputMoney
 * B3: Trả về kết quả outputMoney
 */

var btnChangeMoney = document.getElementById('btnChangeMoney');
var defaultMoney = 23500;
btnChangeMoney.onclick = function () {
    var inputMoney = document.getElementById('txtMoneyUSD').value;
    var moneyResult = document.getElementById('moneyResult');
    if (inputMoney < 0) {
        moneyResult.innerHTML = "Tiền phải lớn hơn 0";
    } else {
        var outputMoney = inputMoney * defaultMoney;

        moneyResult.innerHTML = 'Số tiền VNĐ là: ' + outputMoney + "VNĐ";
    }

}

// BÀI TẬP SỐ 4 
/**
 * B1: Nhập vào chiều dài và chiều rộng hình chữ nhật
 * B2: Khai báo 3 biến width , length, squareResult, perimeterResult
 * Tính diện tính bằng công thức squareResult = width * length
 * Tính chu vi bằng công thức perimeterResult = (width + length)*2
 * B3: Trả về kết quả chu vi và diện tích của hình chữ nhật
 */

var btnCalculate = document.getElementById('btnCalculate');
btnCalculate.onclick = function () {
    var length = parseFloat(document.getElementById('txtLength').value);
    var width = parseFloat(document.getElementById('txtWidth').value);
    var result = document.getElementById('result');
    if (width <= 0 || length <= 0) {
        result.innerHTML = 'Chiều dài và rộng phải > 0';
    } else {
        var squareResult = width * length;
        var perimeterResult = (width + length) * 2;

        result.innerHTML = 'Diện tích và chu vi của hình chữ nhật lần lượt là: ' + squareResult + " ," + perimeterResult;
    }

}

// BÀI TẬP SỐ 5
/**
 * B1: Nhập vào 1 số có 2 chữ só
 * B2: Khai báo biến inputNumber để chứa số có 2 chữ số
 * Dùng dòng for để tính tổng các chữ số 
 * B3: Trả về kết quả
 */

var btnSumNumber = document.getElementById('btnSumNumber');
btnSumNumber.onclick = function () {
    var inputNumber = Math.abs(document.getElementById('txtNumber').value);

    var sum = 0;
    do {
        sum += inputNumber % 10;
        inputNumber = parseInt(inputNumber / 10);
    } while (inputNumber >= 1);
    var sumResult = document.getElementById('sumResult');
    sumResult.innerHTML = 'Tổng các chữ số là: ' + sum;
}
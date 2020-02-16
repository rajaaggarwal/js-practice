function calculateSum() {
    var num1 = document.getElementById('txtNum1').value;
    var num2 = document.getElementById('txtNum2').value;

    var sum = parseInt(num1) + parseInt(num2);

    document.getElementById('txtResult').value = sum;
}
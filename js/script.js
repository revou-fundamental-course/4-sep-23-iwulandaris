document.getElementById('square-form1').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const sideLength1 = parseFloat(document.getElementById('sideLength1').value);

    if (!isNaN(sideLength1)) {

        const area = sideLength1 * sideLength1;

        document.getElementById('side1').textContent = sideLength1;
        document.getElementById('side2').textContent = sideLength1;
        document.getElementById('area-result').textContent = area;

    } else {
        alert('Panjang sisi harus berupa angka.');
    }
    const resetSideLengthButton1 = document.getElementById("resetSideLength1");
    function resetSideLength1() {
        document.getElementById('sideLength1').value = "";
    }
    resetSideLengthButton1.addEventListener("click", resetSideLength1);
});
document.getElementById('square-form2').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const sideLength2= parseFloat(document.getElementById('sideLength2').value);

    if (!isNaN(sideLength2)) {

        const perimeter = 4 * sideLength2;

        document.getElementById('side3').textContent = sideLength2;
        document.getElementById('perimeter-result').textContent = perimeter;
    } else {
        alert('Panjang sisi harus berupa angka.');
    }
    const resetSideLengthButton2 = document.getElementById("resetSideLength2");
    function resetSideLength2() {
        document.getElementById('sideLength2').value = "";
    }
    resetSideLengthButton2.addEventListener("click", resetSideLength2);
});
//Persegi Panjang
document.getElementById('square-form3').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const sideLength3 = parseFloat(document.getElementById('sideLength3').value);
    const sideLength4 = parseFloat(document.getElementById('sideLength4').value);

    if (!isNaN(sideLength3) && !isNaN(sideLength4)) {

        const area = sideLength3 * sideLength4;

        document.getElementById('side4').textContent = sideLength3;
        document.getElementById('side5').textContent = sideLength4;
        document.getElementById('area-resultpj').textContent = area;
        //document.getElementById('perimeter-result').textContent = perimeter;
    } else {
        alert('Panjang sisi harus berupa angka.');
    }
    const resetSideLengthButton3 = document.getElementById("resetSideLength3");
    function resetSideLength3() {
        document.getElementById('sideLength3').value = "";
        document.getElementById('sideLength4').value = "";
    }
    resetSideLengthButton3.addEventListener("click", resetSideLength3);
});
document.getElementById('square-form4').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const sideLength5 = parseFloat(document.getElementById('sideLength5').value);
    const sideLength6 = parseFloat(document.getElementById('sideLength6').value);

    if (!isNaN(sideLength5) && !isNaN(sideLength6)) {

        const perimeter = 2 * (sideLength5 + sideLength6);

        document.getElementById('side6').textContent = sideLength5;
        document.getElementById('side7').textContent = sideLength6;
        document.getElementById('perimeter-resultpj').textContent = perimeter;
    } else {
        alert('Panjang sisi harus berupa angka.');
    }
    const resetSideLengthButton4 = document.getElementById("resetSideLength4");
    function resetSideLength4() {
        document.getElementById('sideLength5').value = "";
        document.getElementById('sideLength6').value = "";
    }
    resetSideLengthButton4.addEventListener("click", resetSideLength4);
});
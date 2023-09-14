document.getElementById('square-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const sideLength = parseFloat(document.getElementById('sideLength').value);

    if (!isNaN(sideLength)) {

        const area = sideLength * sideLength;
        const perimeter = 4 * sideLength;

        document.getElementById('side1').textContent = sideLength;
        document.getElementById('side2').textContent = sideLength;
        document.getElementById('side3').textContent = sideLength;
        document.getElementById('area-result').textContent = area;
        document.getElementById('perimeter-result').textContent = perimeter;
    } else {
        alert('Panjang sisi harus berupa angka.');
    }
    const resetSideLengthButton = document.getElementById("resetSideLength");
    function resetSideLength() {
        document.getElementById('sideLength').value = "";
    }
    resetSideLengthButton.addEventListener("click", resetSideLength);
});
  

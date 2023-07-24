function buttonClicked(value) {
    document.getElementById('result').value += value;
  }
  
  function calculate() {
    const result = document.getElementById('result').value;
    const calculation = eval(result);
    document.getElementById('result').value = calculation;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
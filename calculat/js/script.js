function insert(num) {
    document.getElementById('result').value += num;
  }

  function calculate() {
    let result = document.getElementById('result').value;
    let calculation = eval(result);
    document.getElementById('result').value = calculation;
  }

  function clearAll() {
    document.getElementById('result').value = '';
  }


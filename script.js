function calculate() {
    var input = document.getElementById('input').value;
    input = input.replace(/x/g, '*');
    var output = eval(input);
    output = parseFloat(output.toFixed(10)); 
    document.getElementById('output').innerHTML =  output;
}
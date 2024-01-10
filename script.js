function calculate() {
    var input = document.getElementById('input').value;
    input = input.replace(/x/g, '*');
    try {
        var output = eval(input);
        output = parseFloat(output.toFixed(10));
        document.getElementById('output').innerHTML = output;

        
        var li = document.createElement("li");
        li.textContent = input + " = " + output;
        document.getElementById('history-list').prepend(li); 
    } catch (error) {
        document.getElementById('output').innerHTML = "Error: Invalid Input";
    }
}


document.getElementById('history-container').style.display = 'none';

document.getElementById('history-button').addEventListener('click', function() {
    var historyContainer = document.getElementById('history-container');
    if (historyContainer.style.display === 'none') {
        historyContainer.style.display = 'block';
        historyContainer.style.animation = 'slideDown 0.5s ease';
        this.textContent = 'Hide History';
    } else {
        historyContainer.style.animation = 'slideUp 0.5s ease';
        
        setTimeout(function() {
            historyContainer.style.display = 'none';
        }, 500);
        this.textContent = 'Show History';
    }
});

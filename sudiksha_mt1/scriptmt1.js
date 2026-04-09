function calculate() {
    const n = document.getElementById("num").value;
    const output = document.getElementById("output");
    let sum = 0;

    if (!n || n < 1) {
        output.innerText = "Enter a positive number.";
        return;
    }

    for(i = 0; i <= n ; i ++ ){
        sum += i;
    }

    output.innerHTML = `Total Sum: <strong>${sum}</strong>`;
    }
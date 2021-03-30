const calculator = {
    button(num) {
        const result = document.getElementById('result').innerHTML += num.value;
        console.log(result);
    },

    reset() {
        document.getElementById('result').innerHTML = '';
    },

    delete() {
        let result = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
    },

    calculate() {
        let result = document.getElementById('result').innerHTML;
        if(result){
            document.getElementById('result').innerHTML = eval(result);
        }
    }
}
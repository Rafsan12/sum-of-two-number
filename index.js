const num1 = document.getElementById("num-1");
const num2 = document.getElementById("num-2");
const total = document.getElementById("total");

const result = () => {
    const input1 = parseFloat(num1.value) || 0; // Use 0 if input is not a valid number
    const input2 = parseFloat(num2.value) || 0; // Use 0 if input is not a valid number

    total.value = input1 + input2;
}

num1.addEventListener("keypress", function(event) {
    if(event.key === "Enter") { // Corrected from "enter" to "Enter"
        result();
    }
});

num2.addEventListener("keypress", function(event) {
    if(event.key === "Enter") { // Corrected from "enter" to "Enter"
        result();
    }
});

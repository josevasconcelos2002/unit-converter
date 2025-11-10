document.addEventListener("DOMContentLoaded", () => {
    const weightConvertForms = document.getElementById("weightConvertForms");
    const weightConvertResult = document.getElementById("weightConvertResult");
    const weightConvertResultP = document.getElementById("weightConvertResultP");

    const weight = document.getElementById("weight");
    const unitFrom = document.getElementById("unitFromWeight");
    const unitTo = document.getElementById("unitToWeight");
    
    const links = document.querySelectorAll("a[href]");
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("underline", "font-bold");
        } else {
            link.classList.remove("underline", "font-bold");
        }
    });

    weightConvertResult.addEventListener("submit", (event) => {
        event.preventDefault();

        weightConvertResult.classList.toggle("hidden");
        weightConvertForms.classList.toggle("hidden");

        if(weight.classList.contains("border-red-500"))
            weight.classList.remove("border-red-500");

        weight.value = "";
        unitFrom.value = "";
        unitTo.value = "";
    });

    weightConvertForms.addEventListener('submit', (event) => {
        event.preventDefault();


        if (Number(weight.value) <= 0) {
            alert("Weight value must be greater than 0!");
            if(!weight.classList.contains("border-red-500"))
                weight.classList.add("border-red-500");
            return;
        }

        const convertedValue = convertWeight(weight.value, unitFrom.value, unitTo.value);

        weightConvertForms.classList.toggle("hidden");
        weightConvertResult.classList.toggle("hidden");
        weightConvertResultP.textContent = "Result: " + weight.value + unitFrom.value + " = " + convertedValue + unitTo.value;
    });

    function convertWeight(weight, from, to) {
        const toKgs = {
            mg: 0.000001,
            g: 0.001,
            kg: 1,
            oz: 0.0283495231,
            lb: 0.45359237
        };

        if (!toKgs[from] || !toKgs[to]) {
            throw new Error("Invalid Weight Unit");
        }

        const valueInKgs = weight * toKgs[from];
        const convertedValue = valueInKgs / toKgs[to];

        return convertedValue;
    }
});
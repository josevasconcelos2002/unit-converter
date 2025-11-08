document.addEventListener("DOMContentLoaded", () => {
    const temperatureConvertForms = document.getElementById("temperatureConvertForms");
    const temperatureConvertResult = document.getElementById("temperatureConvertResult");
    const temperatureConvertResultP = document.getElementById("temperatureConvertResultP");

    const temperature = document.getElementById("temperature");
    const unitFrom = document.getElementById("unitFromTemperature");
    const unitTo = document.getElementById("unitToTemperature");
    
    const links = document.querySelectorAll("a[href]");
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("underline", "font-bold");
        } else {
            link.classList.remove("underline", "font-bold");
        }
    });

    temperatureConvertResult.addEventListener("submit", (event) => {
        event.preventDefault();

        temperatureConvertResult.classList.add("hidden");
        temperatureConvertForms.classList.remove("hidden");

        temperature.value = "";
        unitFrom.value = "";
        unitTo.value = "";
    });

    temperatureConvertForms.addEventListener('submit', (event) => {
        event.preventDefault();


        if (Number(temperature.value) <= 0 || !unitFrom.value || !unitTo.value) {
            alert("Temperature must be higher than 0!");
            temperature.value = 0;
            return;
        }

        const convertedValue = convertTemperature(temperature.value, unitFrom.value, unitTo.value);

        temperatureConvertForms.classList.toggle("hidden");
        temperatureConvertResult.classList.toggle("hidden");
        temperatureConvertResultP.textContent = "Result: " + temperature.value + unitFrom.value + " = " + convertedValue + unitTo.value;
    });

    function convertTemperature(temperature, from, to) {
        const toCelsius = {
            C: (t) => t,                       
            F: (t) => (t - 32) * (5 / 9),      
            K: (t) => t - 273.15               
        };

        const fromCelsius = {
            C: (t) => t,                       
            F: (t) => (t * 9 / 5) + 32,        
            K: (t) => t + 273.15               
        };

        if (!toCelsius[from] || !fromCelsius[to]) {
            throw new Error("Invalid Temperature Unit");
        }

        const valueInCelsius = toCelsius[from](Number(temperature));
        const convertedValue = fromCelsius[to](valueInCelsius);

        return convertedValue;
    }

});
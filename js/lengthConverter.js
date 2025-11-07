document.addEventListener("DOMContentLoaded", () => {

    const lengthConvertForms = document.getElementById("lengthConvertForms");
    const lengthConvertResult = document.getElementById("lengthConvertResult");
    const lengthConvertResultP = document.getElementById("lengthConvertResultP");

    const length = document.getElementById("length");
    const unitFrom = document.getElementById("unitFromLength");
    const unitTo = document.getElementById("unitToLength");

    lengthConvertResult.addEventListener('submit', (event) => {
        event.preventDefault();

        lengthConvertResult.classList.toggle("hidden");
        lengthConvertForms.classList.toggle("hidden");

        length.value = "";
        unitFrom.value = "";
        unitTo.value = "";
    });




    lengthConvertForms.addEventListener('submit', (event) => {
        event.preventDefault();


        if (Number(length.value) <= 0 || !unitFrom.value || !unitTo.value) {
            alert("Length must be higher than 0!");
            length.value = 0;
            return;
        }

        const convertedValue = convertLength(length.value, unitFrom.value, unitTo.value);

        lengthConvertForms.classList.toggle("hidden");
        lengthConvertResult.classList.toggle("hidden");
        lengthConvertResultP.textContent = "Result: " + length.value + unitFrom.value + " = " + convertedValue + unitTo.value;
    });

    function convertLength(length, from, to) {
        const toMeters = {
            m: 1,
            cm: 0.01,
            mm: 0.001,
            km: 1000,
            in: 0.0254,
            ft: 0.3048,
            yd: 0.9144,
            mi: 1609.34,
        };

        if (!toMeters[from] || !toMeters[to]) {
            throw new Error("Invalid Unit");
        }

        const valueInMeters = length * toMeters[from];
        const convertedValue = valueInMeters / toMeters[to];

        return convertedValue;
    }
});
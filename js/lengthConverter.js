document.addEventListener("DOMContentLoaded", () => {

    const lengthConvertForms = document.getElementById("lengthConvertForms");
    const lengthConvertResult = document.getElementById("lengthConvertResult");
    const lengthConvertResultP = document.getElementById("lengthConvertResultP");

    const length = document.getElementById("length");
    const unitFrom = document.getElementById("unitFromLength");
    const unitTo = document.getElementById("unitToLength");


    const links = document.querySelectorAll("a[href]");
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("underline", "font-bold");
        } else {
            link.classList.remove("underline", "font-bold");
        }
    });
    
    lengthConvertResult.addEventListener('submit', (event) => {
        event.preventDefault();

        lengthConvertResult.classList.toggle("hidden");
        lengthConvertForms.classList.toggle("hidden");

        if(length.classList.contains("border-red-500"))
            length.classList.remove("border-red-500");

        length.value = "";
        unitFrom.value = "";
        unitTo.value = "";
    });




    lengthConvertForms.addEventListener('submit', (event) => {
        event.preventDefault();


        if (Number(length.value) <= 0) {
            alert("Length value must be greater than 0!");
            if(!length.classList.contains("border-red-500"))
                length.classList.add("border-red-500");
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
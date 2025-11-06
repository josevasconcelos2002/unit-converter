const lengthConvertForms = document.getElementById("lengthConvertForms");

lengthConvertForms.addEventListener('submit', (event) => {
    event.preventDefault();

    const length = document.getElementById("length").value;
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;


    if(Number(length) <= 0 || !unitFrom || !unitTo){
        alert("Length must be higher than 0!");
        length.value = 0;
        return;
    }

    alert(`Convert ${length} ${unitFrom} → ${unitTo}`);
    convertLength(length, unitFrom, unitTo);
});

function convertLength(length, from, to){
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
        throw new Error("Unidade inválida");
    }

    const valueInMeters = length * toMeters[from];
    const convertedValue = valueInMeters / toMeters[to];

    
    alert("Valor convertido: " + convertedValue);
    return convertedValue;
}
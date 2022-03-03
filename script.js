function compute()
{
    const prin = document.getElementById("principal");
    const rate = document.getElementById("rate");
    const years = document.getElementById("years");
    if (prin.value == "" || prin.value < 1) {
        alert("Amount must be greater than 0");
        prin.focus();
        return;
    }

    if (years.value == "" || years.value < 1) {
        alert("Number of years must be greater than 0");
        prin.focus();
        return;
    }
    const actualYears = years.value;    
    let futureYear = (Number(new Date().getFullYear().toString()) *1) + (actualYears *1);
    const amount = prin.value * (rate.value/100) * years.value;


    const newElement = 
    `
If you deposit <mark>${prin.value}</mark>,
at an interest rate of <mark>${rate.value}%</mark>.
You will receive an amount of <mark>${amount}</mark>,
in the year <mark>${futureYear}</mark>`;

document.getElementById("solution").innerHTML = newElement;           
}
        

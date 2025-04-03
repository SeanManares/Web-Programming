function calculate() {
    const cost =parseFloat(document.getElementById("cost").value);  /*this is to get the values from the input of the user*/
    const total =cost * parseFloat(document.getElementById("purchased").value); /*this calculates the total cost by multiplying cost to purchased */
    /*this displays the total cost */
    document.getElementById("total").innerText = `Total Cost: AED ${total.toFixed(2)}`;  /* the dollar sign is part of Js feature called template strings for easy string interpolation where we can embed expressions inside a string*/
}            
    //toFixed returns a string representation of a number without using exponential notation and with exactly digits after the decimal point. The number is rounded if necessary, and the fractional part is padded with 2 so that it has the specified length
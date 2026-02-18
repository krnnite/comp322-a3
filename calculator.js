// necessary functions
function check_prompt(result, is_operator) {
    let valid_arithmetic = ['/','*','-','+','%'];
    if (result === null) return 0;
    if (is_operator === true && !valid_arithmetic.includes(result)) return 1;
    if (is_operator === false && Number.isNaN(Number(result))) return 1;
    return -1;
}
function get_avg(arr) {
    let sum = 0;
    if (arr.length === 0) return sum;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
function get_sum(arr) {
    let sum = 0;
    if (arr.length === 0) return sum;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let result_array = [];
document.write("<table class='myTable'>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
// loop prompt for user input
while (true) {
    // gather user input
    let num1 = prompt("Enter the first number");
    if (check_prompt(num1, false) === 0) break;
    let num2 = prompt("Enter the second number");
    if (check_prompt(num2, false) === 0) break;
    let num_operator = prompt("Enter valid arithmetic operator");
    if (check_prompt(num_operator, true) === 0) break;

    let result
    // error handling for input
    if (check_prompt(num_operator, true) === 1) {
        // do not push result to array
        result = "computation error";
    } else if (check_prompt(num1, false) === 1) {
        result = "wrong input number";
    } else if (check_prompt(num2, false) === 1) {
        result = "wrong input number";
    } else {
        result = eval(num1 + num_operator + num2);
        result_array.push(result);
    }

    document.write("<tr><td>"+num1+"</td><td>"+num_operator+"</td><td>"+num2+"</td><td>"+result+"</td></tr>");
}
document.write("<tr><th>min</th><th>max</th><th>average</th><th>total</th></tr>");
document.write("<tr><td>"+Math.min(...result_array)+"</td><td>"+Math.max(...result_array)+"</td><td>"+get_avg(result_array)+"</td><td>"+get_sum(result_array)+"</td></tr>");
document.write("</table>")
function AutoFare(distance) {
    let charge = 30; 
    if (distance > 4 && distance <= 9) {
        charge += (distance - 4) * 10; 
    } else if (distance > 9 && distance <= 19) {
        charge += 5 * 10; 
        charge += (distance - 9) * 15; 
    } else if (distance > 19) {
        charge += 5 * 10; 
        charge += 10 * 15; 
        charge += (distance - 19) * 20; 
    }

    return charge;
}
let price = AutoFare(19.5);
console.log("Auto Rickshaw Fare:", price);
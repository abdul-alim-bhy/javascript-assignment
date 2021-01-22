



// Constructing a function to calculate kilometer to meter.
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var desireMeter = kilometerToMeter(10);
console.log(desireMeter);


// Constructing a function to calculate total budget.

function budgetCalculator(watch, phone, laptop) {
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}
var estimateCost = budgetCalculator(10, 30, 100);
console.log(estimateCost);


// Constructing a function to calculate hotel cost.



function hotelCost(day) {
    var bill = 0;
    if (day <= 10) {
        bill = day * 100;

    } else if (day <= 20) {
        var firstBill = 10 * 100;
        var remainingDay = day - 10;
        var secondBill = remainingDay * 80;
        bill = firstBill + secondBill;
    } else {
        var firstBill = 10 * 100;
        var secondBill = 10 * 80;
        var remainingDay = day - 20;
        var thirdBill = remainingDay * 50;
        bill = firstBill + secondBill + thirdBill;

    }
    return bill;

}
var totalBill = hotelCost(40);
console.log(totalBill);


// Calculate mega Friend using function.

var friendName = ["Liam", "Oliver", "William", "James", "Benjamin", "Ethan", "Sophia", "Isabella", "Charlotte"];

function megaFriend(arr) {
  var longestName = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > longestName.length) {
        longestName = arr[i];
    }
  }
  return longestName;
}

console.log(megaFriend(friendName));
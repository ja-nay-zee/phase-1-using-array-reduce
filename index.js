const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// function totalBatteries(batteryBatches) {
//     let totalSum = 0
//     for (const batteryBatch of batteryBatches) {
//         totalSum += batteryBatch.batteryBatches;
//     }
//     return totalSum;
// }

// console.log(totalBatteries.reduce(batteryBatches, totalSum));

let totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total
    }
  )

  ///////// ^^ anonymous function ^^ ////// 
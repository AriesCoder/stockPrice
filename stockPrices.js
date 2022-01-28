const stockPrices = [7,8,6,13,9,22,4,1,21]

const best = arr => {
    if(arr.length <= 1){
        return 0
    }
    let lowestPrice = arr[0]
    let profit = 0
    let bestProfit = 0
    for(let i = 1; i < arr.length; i++){
        if(arr[i] <= lowestPrice){
            lowestPrice = arr[i]
        }else{
            profit = arr[i] - lowestPrice
        }

        if(profit > bestProfit){
            bestProfit = profit
        }
    
    }
    return bestProfit
}

console.log(best(stockPrices))

//--------------------------------------

// function stockProfits(arr1, arr2){
//     if(arr1.length <= 1){
//         return 0
//     }
//     //finds the highest sell price value and its index
//     let sellPrice = arr1[arr1.length-1]
//     let sellIndex = arr1.length-1
        
//     for(let i = arr1.length-2; i > 0; i--){
//         if(arr1[i] > sellPrice){
//             sellPrice = arr1[i]
//             sellIndex = i
//         }       
//     }
//     //finds lowest buy price and its index
//     let buyPrice = arr1[sellIndex-1]
//     for(let i = sellIndex-2; i >=0; i--){
//         if(arr1[i] < buyPrice){
//             buyPrice = arr1[i]
//         }
//     }
//     //gets profit
//     let profit = sellPrice - buyPrice
//     arr2.push(profit)

//     arr1 = arr1.slice(sellIndex+1, arr1.length)
   
//     stockProfits(arr1, arr2)
//     return arr2
// }

// function best(arr1){
    
//     //checks if an array is descending
//     let isDescendingArr = true
//     for (let i = 0; i < arr1.length-1 && isDescendingArr; i++){
//         if(arr1[i] < arr1 [i+1]){
//             isDescendingArr = false
//             break
//         }        
//     }
//     if(isDescendingArr){
//         return 0
//     }

//     const profitsArr = []
//     //call the function stockProfits
//     stockProfits(arr1, profitsArr)

//     //get the highest profit
//     let bestProfit = profitsArr[0]
    
//     for(let i = 0; i < profitsArr.length; i++){
//         if(profitsArr[i]> bestProfit){
//             bestProfit = profitsArr[i]
//         }
//     }    
//     return bestProfit
// }

// console.log(best(stockPrices))

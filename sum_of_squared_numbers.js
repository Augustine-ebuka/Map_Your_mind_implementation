//function that squares number 
function sqr(num) {
    return num * num;
}

//main function
//collects lists of numbers as arguments
function sumOfSquares([...items]) {
    var sum = 0
    for (let index = 0; index < items.length; index++) {
        const sq = sqr(items[index])
        sum += sq
    }
    console.log(sum)      
}

//test sample
const items = [2, 2, 2, 1, 5, 9, 7];
sumOfSquares(items)

//Output: 168



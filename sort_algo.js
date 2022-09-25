
//algorith that sort 3 numbers. assume the numbers are a,b,c
function sort_algo(a, b, c) {
    const algo =[]
    if ((a > b) && (a > c) && (b > c)) {
        // console.log(`${c} - ${b} - ${a}`)  
        algo.push(c, b, a)
        console.log(algo)
    }
    else if ((b > c) && (b > a) && (c > a)) {
        algo.push(a, c, b)
        console.log(algo)
    }
    else if ((c > a) && (c > b) && (a > b)) {
        algo.push(b, a, c)
        console.log(algo)
    }
    else if ((a > c) && (a > b) && (c > b)) {
        algo.push(b, c, a)
        console.log(algo)
    }
    else if ((b > a) && (b > c) && (a > c)) {
        algo.push(c, a, b)
        console.log(algo)
    }
    else if ((c > b) && (c > a) && (b > a)) {
        algo.push(a, b, c)
        console.log(algo)
    }
    else if ((a == b) && (a > c)) {
        algo.push(c, a, b)
        console.log(algo)
    }
    else if ((a == c) && (a > b)) {
        algo.push(b, a, c)
        console.log(algo)

    } else {
        algo.push(a,b,c)
        console.log(algo) 
    }
}

 sort_algo(3, 5, 1)
//output:[1,3,5]


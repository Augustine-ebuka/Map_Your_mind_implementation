

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


//  i run first
//  i run second
//  i run third

sort_algo(1,1,2)
function functionA() {
    console.log('i am A');
}
function functionB() {
    functionA()
    console.log('i am B') 
}
console.log('i run first');
functionB()
const d1 = 85
const d2 = 54
const d3 = 41
const k1 = 23
const k2 = 34
const k3 = 27

davg = (d1 + d2 + d3) / 3
kavg = (k1 + k2 + k3) / 3
calcavg = (a,b,c) => (a + b + c)/3
function decide (avg1, avg2){
    console.log (
        ((avg1 >= avg2 * 2) || (avg2 >= avg1 * 2) ) ?
        (avg1 >=avg2*2 ? 
            (`Dolphines have won the match with the score Dolphins : ${avg1} and Koalas: ${avg2}`) : (`Koalas have won the match with the score Koalas: ${avg2} and dolphines: ${avg1}`)
        ) : (` Draw match with scores Dolphines : ${avg1} and Koalases: ${avg2}`)
    )
}

decide(calcavg(d1,d2,d3), calcavg(k1,k2,k3))
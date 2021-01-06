const dolphine=(96+108+89)/3
const koalas=(88+91+110)/3
if (dolphine<100 && koalas<100) console.log(`Both the Teams didnt win the tropy since they didnt meet the minimum requirements`)
else if (dolphine>koalas) console.log(`Dolphine won the trophy with the score of ${dolphine}`)
else if (dolphine<koalas) console.log(`koalas has won the trophy with the score of ${koalas}`)
else console.log(`Draw!!! Both the teams koalas and dolphines ended have same score of ${koalas}.`)
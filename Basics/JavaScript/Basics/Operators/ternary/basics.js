const bill=430 //40 and 275 (test values)

console.log(`
                Bill
                ****

        Actual Bill: ${bill}

        Tip: ${(bill>=50 && bill<=300)? 0.15*bill: 0.20*bill}

        Total: ${bill + ((bill>=50 && bill<=300)? 0.15*bill: 0.20*bill)}
`)

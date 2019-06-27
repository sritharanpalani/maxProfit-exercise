console.log('Maximum Profit Problem');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
readline.question(`Enter time period: `, (givenTime) => {
        var property = [
            { time : 5, amount : 1500, name: 'Theatre' },
            { time : 4, amount : 1000, name: 'Mall' },
            { time : 10, amount : 3000, name: 'CommercialPlace' },
        ]
    
    
        var result = [];
        
        for (const item of property) {
            let periodTekenToBuild = Math.trunc(givenTime / item.time);
            var maximumAmount = 0;
        
            for (let index = 1; index <= periodTekenToBuild; index++) {
                let amount = (givenTime - (index * item.time)) * item.amount;
                maximumAmount += amount
            }
        
            result.push({name: item.name, maximumProfit: maximumAmount, solution: periodTekenToBuild });
        } 

        let profit = result.sort((a,b) => {
            return b.maximumProfit - a.maximumProfit;
        })
        console.log('this is final result ====', profit);
    readline.close()
})
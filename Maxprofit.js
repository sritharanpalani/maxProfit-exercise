console.log('Maximum Profit Problem');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
readline.question(`Enter time period: `, (givenTime) => {

    const  profitMaker = (property) => {

        var result = [];

        for (const item of property) {

            let periodTekenToBuild = Math.trunc(givenTime / item.time);
            let remainingTime = givenTime % item.time;
            var solutionT = 0
            
            var maximumAmount = 0;

            for (let index = 1; index <= periodTekenToBuild; index++) {
                
                let amount = (givenTime - (index * item.time)) * item.amount;
                maximumAmount += amount
            }

            
            if(givenTime > 9 && remainingTime > 6) {
                let Theatre = property[0];
                let amount = (remainingTime - Theatre.time) * Theatre.amount;
                maximumAmount += amount;
                solutionT = 1
            }
            
            result.push({
                name: solutionT === 1 ? `${item.name}, Theatre` : item.name, 
                maximumProfit: maximumAmount, 
                solution: solutionT === 1 ? `${periodTekenToBuild}, ${solutionT}` : periodTekenToBuild,
            });
        } 

        let profit = result.sort((a,b) => {
            return b.maximumProfit - a.maximumProfit;
        })
        console.log('Final result ====', profit);

    }

    profitMaker( [
        { time : 5, amount : 1500, name: 'Theatre' },
        { time : 4, amount : 1000, name: 'Mall' },
        { time : 10, amount : 3000, name: 'CommercialPlace' },
    ]);
    readline.close()
})


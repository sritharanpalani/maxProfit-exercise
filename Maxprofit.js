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
            var solutionM = 0;
            
            var maximumAmount = 0;

            if(remainingTime === 0) {
                let remainPeriod = periodTekenToBuild - 1
                maximumAmount += yeatCalculator((remainPeriod), item)
                let balancePeriod = givenTime - ((remainPeriod) * item.time)

                if(balancePeriod > 4 && balancePeriod < 6) {
                    let amount = counter(property[1], balancePeriod);
                    maximumAmount += amount
                    solutionM += 1
                } else if (balancePeriod > 6 ) {
                    let amount = counter(property[0], balancePeriod)
                    maximumAmount += amount
                    solutionT += 1

                    if(balancePeriod === 10) {
                        let amount = counter(property[1], (balancePeriod-5))
                        maximumAmount += amount
                        solutionM += 1
                    }
                }
                periodTekenToBuild = remainPeriod
            } else {
                maximumAmount = yeatCalculator(periodTekenToBuild, item)

                if(remainingTime === 5) {
                    let amount = counter(property[1], remainingTime);
                    maximumAmount += amount;
                    solutionM += 1;
                } else if (givenTime > 9 && remainingTime > 6) {
                    let amount  = counter(property[0], remainingTime)
                    maximumAmount += amount;
                    solutionT += 1
                } else {

                }
            }
            
            result.push({
                name: `${item.name} ${solutionT !== 0 ? ', Theatre': ''} ${solutionM !== 0 ? ', Mall' : ''}`, 
                maximumProfit: maximumAmount, 
                solution: `${periodTekenToBuild} ${solutionT !== 0 ? solutionT: ''} ${solutionM !== 0 ? solutionM : ''}`,
            });
        } 


        let maxVal = result.reduce((max,p) =>  p.maximumProfit > max ? p.maximumProfit : max, result[0].maximumProfit)

        let sortedProfit = result.filter((a) => a.maximumProfit === maxVal);

        console.log('Final result', sortedProfit);

    }

    const counter = (property, remainingTime) => {
        return amount = (remainingTime - property.time) * property.amount;
    }

    const yeatCalculator = (period, item) => {
        let amount = 0
        for (let index = 1; index <= period; index++) {
              amount += (givenTime -(index * item.time)) * item.amount;
        }

        return amount;
    }

    profitMaker( [
        { time : 5, amount : 1500, name: 'Theatre' },
        { time : 4, amount : 1000, name: 'Mall' },
        { time : 10, amount : 3000, name: 'CommercialPlace' },
    ]);
    readline.close()

})


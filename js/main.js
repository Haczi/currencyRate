const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const amountOne = document.querySelector('.amount-one')
const amountTwo = document.querySelector('.amount-two')
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const calculate = () => {
    
	fetch(`https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
		.then(res => res.json())
		.then(data => {
            
			calculateChange(data)
            
		})      
    }
    const swap = () => {
 
        let nameSwap = currencyOne.value
        currencyOne.value = currencyTwo.value
       currencyTwo.value = nameSwap;
     
       calculate()
    }

    const calculateChange = (data) => {
        
                console.log(data)
    
                let amount1 = parseFloat(amountOne.value)
    
                const currencyRate = Object.values(data.rates)
                let amount2 = amount1 * currencyRate
                amountTwo.value = amount2.toFixed(2)
rateInfo.textContent = `${amount1} ${currencyOne.value} = ${amount2} ${currencyTwo.value}`
    }
    
    

amountOne.addEventListener('input', calculate)
currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
swapBtn.addEventListener('click', swap)

calculate()
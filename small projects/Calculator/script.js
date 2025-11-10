let calculation = localStorage.getItem('Result') || '';
       document.querySelector('.js-value-display').innerHTML = `${calculation} `
        function updateCalculation(n) {
            calculation += n;
            console.log(calculation);
            localStorage.setItem('Result', calculation);
            document.querySelector('.js-value-display').innerHTML = `${calculation} `
        }

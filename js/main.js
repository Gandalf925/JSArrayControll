'use strict'

{
  const scores = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  console.log(scores[0]);

  scores[2] = 44;
  console.log(scores[2]);

  console.log(scores.length);

  console.log(`${scores[0]}`);
  console.log(`${scores[1]}`);
  console.log(`${scores[2]}`);


  for (let i = 0; i < scores.length; i++){
    console.log(`score ${i} = ${scores[i]}`);
  }
  
  scores.unshift(33);
  
    for (let i = 0; i < scores.length; i++){
      console.log(`score ${i} = ${scores[i]}`);
    }
    
    scores.shift();
    
    
    for (let i = 0; i < scores.length; i++){
      console.log(`score ${i} = ${scores[i]}`);
    }
    
    scores.push(9);
    
    for (let i = 0; i < scores.length; i++){
      console.log(`score ${i} = ${scores[i]}`);
    }
    
    scores.pop();
    for (let i = 0; i < scores.length; i++){
      console.log(`score ${i} = ${scores[i]}`);
    }
    
    scores.splice(1,2,100);
    for (let i = 0; i < scores.length; i++){
      console.log(`score ${i} = ${scores[i]}`);
    }
    
    scores.splice(5,0,1000);
    for (let i = 0; i < scores.length; i++){
      console.log(`score ${i} = ${scores[i]}`);
    }
    
    const otherScores = [10, 20];
    const score = [1,3,5, ...otherScores];
    for (let i = 0; i < score.length; i++){
      console.log(`score ${i} = ${score[i]}`);
    }

    function sum(a , b){
      console.log(a + b);
    }

    sum(...otherScores);

    const equal = [10, 20, 30, 40, 50];

    const [a,b,c,d,e] = equal;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    
    
    const [f,g, ...others] = equal;
    console.log(f);
    console.log(g);
    console.log(others);
    // console.log(a);

    let x = 300;
    let y = 600;

    [x,y] = [y,x];

    console.log(x);
    console.log(y);

    const plices = [1,2,3,4,5];

    plices.forEach((plice, index) => {
      console.log(`Plice ${index + 1}: ${plice}`);
    });

    const prices = [180, 190, 200];

    // const updatePrices = prices.map((price) =>{
    //   return price + 20;
    // });

    const updatePrices = prices.map(price => price + 50);


    console.log(updatePrices);

    const numbers = [1,4,7,8,10];

    const evenNumbers = numbers.filter(number => number % 2 === 0);
    console.log(evenNumbers);

    console.log(numbers[numbers.length - 2]);

    let text = 'Hello World';
    console.log(text.split(' ')[0]);


}
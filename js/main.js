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


  const point = {x: 100, y: 180};

  point.x = 200;
  point['y'] = 300;
  point.z = 90;

  console.log(point);
  console.log(point.x);
  console.log(point['y']);
  console.log(point.z)
  console.log(point)
  
  delete point.z;
  
  console.log(point)


  const otherProps = {
    r:4,
    color: 'red',
    ...point
  };
  
  console.log(otherProps);

  const keys = Object.keys(point);
  console.log(keys);

  keys.forEach(key => console.log(`Key: ${key} Value: ${point[key]}`));

  const points = [
    {x: 100, y: 200},
    {x: 13000, y: 260},
    {x: 1000, y: 600},
  ];

  console.log(points[1].y);

  let l = [1, 3];
  let m = l;
  l[0] = 5;
  console.log(l);
  console.log(m);
  m = [...l];
  m[0] = 100;
  
  console.log(l);
  console.log(m)

  // --------------

  const str = 'hello';

  console.log(str.length);

  console.log(str.substring(2, 4));

  const date = [2021, 2, 1];

  console.log(date.join('/'));

  const time = '17:08:34';

  console.log(time.split(':'));

  const [hour, minute, second] = time.split(':');

  console.log(hour);
  console.log(minute);
  console.log(second);


  {
    const scores = [10,3,9];
    let sum = 0;
    scores.forEach(score => sum += score);

    const avg = sum / scores.length;

    console.log(sum);
    console.log(avg);

    console.log(Math.floor(avg)); //少数以下削除
    console.log(Math.ceil(avg)); //切り上げ
    console.log(Math.round(avg)); //四捨五入
    console.log(avg.toFixed(3)); //小数点以下3桁まで

    console.log(Math.random());
    console.log(Math.floor(Math.random() * 3) +1);

    const day = new Date();
    console.log(day);

    console.log(day.getDate());
    console.log(day.getDay());
    console.log(day.getFullYear());
    console.log(day.getMonth() +1);
    console.log(day.getHours());
    console.log(day.getMinutes());
    console.log(day.getSeconds());

  }

  {
    const d = new Date(1987, 8);
    d.setHours(10,20,30);
    // d.setDate(31);
    d.setDate(d.getDate() + 3);
    console.log(d);
  }

  {
    // alert("HELLO!");
    // const answer = confirm("Are you READY!?");
    // answer === true ? alert("OK!"): alert("NOOOOOOO!");
  }

  {
    // let i = 0;
    // let x = 0;

    // function showTime() {
    //   console.log(new Date());
    //   i++;
    //   i > 2 ? clearInterval(intervalID): x++;
    // }
    // const intervalID = setInterval(showTime, 1000);
  }



  {
    // let i = 0;
    // function showTime() {
    //   console.log(new Date());
    //   const clearTimeId = setTimeout(showTime, 1000);
    //   i++;
    //   if(i > 2){
    //     clearTimeout(clearTimeId);
    //   }

    // }

    // showTime();
  }

  {
    // const name = 'utsunomiya';
    const name = 5;

    try {
      console.log(name.toUpperCase());
    } catch (e){
      console.log(e);
    }
    console.log('Finished!');
  }

  {
    const post = [
      {
        text: 'JavaScriptの勉強中',
        likeCount: 0,
        show() {
          console.log(`${this.text} - ${this.likeCount}いいね`);
        }
      },
      {
        text: '楽しかね。',
        likeCount: 0,
        show() {
          console.log(`${this.text} - ${this.likeCount}いいね`);
        }
      }
    ]

    
    post[0].show();
    post[1].show();

  }

  {
    class Toukou{
      constructor(message){
        this.message = message;
        this.likeCount = 0;
      }

      show(){
        console.log(`${this.message} - ${this.likeCount}いいね`);
      }

      like(){
        this.likeCount++;
      }

      static info(){
        console.log('Post class version 1.0');
      }
    }
    
    class SponsordToukou extends Toukou{
      constructor(text,sponsor){
        super(text);
        this.sponsor = sponsor; 
      }

      show(){
        super.show();
        console.log(`...sponsored by ${this.sponsor}`);
      }
    }

    const message = [
      new Toukou('JavaScriptのクラス作成中'),
      new Toukou('目が痛いわ'),
      new SponsordToukou('お金が欲しいな',"ドットインストール"),
    ];

    message[0].show();
    message[1].show();
    message[1].like();
    message[1].like();
    message[0].show();
    message[1].show();
    Toukou.info();

    message[2].show();

    

  }
}



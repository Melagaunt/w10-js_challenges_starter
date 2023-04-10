'use strick';
//starterCode
(function () {
  document.write("hello from tallest-mountain.js");
})();

//introMsg
(function () {
  document.write("<br /><br />");
  let title = '## The Tallest Mountain'
  let nlLog = '\n'
  let nlDoc = '<br /><br />'
  let msg = 'Create an array that contains a bunch of numbers representing the heights of various mountains. Write some code that identifies the height of the tallest of the available mountains and prints it out.'
  console.log(title + nlLog + msg);
  document.getElementById('instructions').innerHTML =
    document.getElementById('instructions').innerHTML
    + (title + nlDoc + msg);
})();

//MVP
(function () {
  const mountainHeight = [
    29029
    , 29029
    , 28251
    , 28169
    , 24836
    , 24590
  ]

  let maxHeight = Math.max(...mountainHeight)
  let minHeight = Math.min(...mountainHeight)
  console.log('Max Height from 1dimention Array: ' + maxHeight);
  document.getElementById('printArea').innerHTML = (
    document.getElementById('printArea').innerHTML
    + 'Max Height from 1dimention Array: '
    + maxHeight
    +'<br />'
  )
  console.log('Min Height from 1dimention Array: ' + minHeight);
  document.getElementById('printArea').innerHTML = (
    document.getElementById('printArea').innerHTML
    + 'Min Height from 1dimention Array: '
    + minHeight
    +'<br />'
  )
})();



//Extra Credit Work.
//Using Classes & Arrays together.
(function () {
  //A single Mountain.
  class Mountain {
    constructor(name, country, height) {
      this.name = name;
      this.country = country;
      this.height = height;
    }
    identity() {
      // console.log(
      return (
        this.name
        + ', is located in '
        + this.country
        + '. It has a height of '
        + this.height
        + '.'
      )
    }
  }

  //collection of mountains
  class Mountains {
    constructor() {
      this.mountains = []
    }
    //create Mountain, add to collection
    newMountain(name, country, height) {
      let m = new Mountain(name, country, height)
      this.mountains.push(m)
      return m
    }
    get allMountains() {
      return this.mountains
    }
    get countMountains() {
      return this.mountains.length
    }
    get maxMountains() {
      return Math.max.apply(Math, array.map())
    }


    //sort name
    sortNameAZ() {
      tallest.mountains.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
    sortNameZA() {
      tallest.mountains.sort((a, b) => (a.name > b.name) ? -1 : 1);
    }
    //sort Country
    sortCountryAZ() {
      tallest.mountains.sort((a, b) => (a.country > b.country) ? 1 : -1);
    }
    sortCountryZA() {
      tallest.mountains.sort((a, b) => (a.country > b.country) ? -1 : 1);
    }
    //sort name
    sortHeightAZ() {
      tallest.mountains.sort((a, b) => (a.height > b.height) ? 1 : -1);
    }
    sortHeightZA() {
      tallest.mountains.sort((a, b) => (a.height > b.height) ? -1 : 1);
    }
  }

  let tallest = new Mountains()
  tallest.newMountain('Nepal', 'Mount Everest', '29,029 feet')
  tallest.newMountain('China', 'Mount Everest', '29,029 feet')
  tallest.newMountain('Pakistan', 'K2', '28,251 feet')
  tallest.newMountain('India', 'Kangchenjunga', '28,169 feet')
  tallest.newMountain('Bhutan', 'Gangkhar Puensum', '24,836 feet')
  tallest.newMountain('Tajikistan', 'Ismoil Somoni Peak', '24,590 feet')

  console.log(tallest.allMountains)
  console.log(tallest.countMountains)
  document.write(tallest.allMountains.forEach(mountain => mountain.identity()));
  document.write(tallest.allMountains)

  // let a = sortNameAZ();
  // document.getElementById('printArea').innerHTML =
  // document.getElementById('printArea').innerHTML
  // + tallest.allMountains.country;

  // document.getElementById('printArea').innerHTML =
  // document.getElementById('printArea').innerHTML
  // + tallest.allMountains.forEach(mountain => mountain.identity());



  // console.log(Math.max(...tallest.mountains.height))

  console.log(Math.max(1, 3, 2));
  // Expected output: 3

  console.log(Math.max(-1, -3, -2));
  // Expected output: -1

  const array1 = [1, 3, 2];

  console.log(Math.max(...array1));
  // Expected output: 3







  const users = [
    { name: 'Nicole', age: 31 },
    { name: 'Chris', age: 33 },
    { name: 'Yaatree', age: 2 },
    { name: 'Sanne', age: 29 },
  ];

  const highest = users.reduce((previous, current) => {
    return current.age > previous.age ? current : previous;
  });

  console.log('highest', highest);
  // { name: 'Chris', age: 33 }


  const lowest = users.reduce((previous, current) => {
    return current.age < previous.age ? current : previous;
  });

  console.log('lowest', lowest);
  // { name: 'Yaatree', age: 2 


  const highest2 = users.reduce((prev, cur) => (cur.age > prev.age ? cur : prev));
  console.log('highest2', highest2);
  const lowest2 = users.reduce((prev, cur) => (cur.age < prev.age ? cur : prev));
  console.log('lowest2', lowest2);

  console.log(Mountains.mountain)
  console.log(Mountains[0])
  console.log(tallest.mountains[0])

  console.log(tallest.mountains[0].name)

  console.log(Mountain.length)
  for (i = 0; i < Mountain.length; i++) {
    console.log(tallest.mountains[i].name)
  }

  function buildMsg() {
    for (i = 0; i < Mountain.length; i++) {
      console.log(tallest.mountains[i].name)
    }
  }
  // let pArea = buildMsg
  const object = { a: 1, b: 2, c: 3 };

  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }

  // Expected output:
  // "a: 1"
  // "b: 2"
  // "c: 3"

  // console.log()
  // console.log(mountains.name)  
  // tallest.allMountains.forEach(mountain => mountain.identity());
  // console.log('----LINEBREAK---');

  // tallest.allMountains.sort();
  // tallest.allMountains.forEach(mountain => mountain.identity());
  // console.log('----LINEBREAK---');

  // tallest.allMountains.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name));
  // tallest.allMountains.forEach(mountain => mountain.identity());
  // console.log('----LINEBREAK---');

  // tallest.mountains.sort();
  // tallest.allMountains.forEach(mountain => mountain.identity());
  // console.log('----LINEBREAK---');

  // tallest.mountains.sort((a, b) => (a.name > b.name) ? 1 : -1);
  // tallest.allMountains.forEach(mountain => mountain.identity());
  // console.log('----LINEBREAK---');

  // tallest.mountains.sort((a, b) => (a.country > b.country) ? 1 : -1);
  // tallest.allMountains.forEach(mountain => mountain.identity());
  // console.log('----LINEBREAK---');

  // tallest.mountains.sort((a, b) => (a.height > b.height) ? 1 : -1);
  // tallest.allMountains.forEach(mountain => mountain.identity());
  // console.log('----LINEBREAK---');

  // tallest.mountains.sort((a, b) => (a.height > b.height) ? -1 : -1);
  // tallest.allMountains.forEach(mountain => mountain.identity());
  // console.log('----LINEBREAK---');



  // Mountains = [];

  // Mountains.push('name', 'country', 'height')

  // console.log(Mountains);
  // const mountain1 = new Mountain('Nepal', 'Mount Everest', '29,029 feet')
  // const mountain2 = new Mountain('China', 'Mount Everest', '29,029 feet')
  // const mountain3 = new Mountain('Pakistan', 'K2', '28,251 feet')
  // const mountain4 = new Mountain('India', 'Kangchenjunga', '28,169 feet')
  // const mountain5 = new Mountain('Bhutan', 'Gangkhar Puensum', '24,836 feet')
  // const mountain6 = new Mountain('Tajikistan', 'Ismoil Somoni Peak', '24,590 feet')

  // Mountains.push(mountain1, mountain2, mountain3, mountain4, mountain5, mountain6)
  // console.log(Mountains);
  // console.log(Mountains);
  // for (i = 0; i < Mountains.length; i++) {
  //   Mountains[mountain + i.name];


  // Nepal: Mount Everest — 29,029 feet.
  // China: Mount Everest — 29,029 feet.
  // Pakistan: K2 — 28,251 feet.
  // India: Kangchenjunga — 28,169 feet.
  // Bhutan: Gangkhar Puensum — 24,836 feet.
  // Tajikistan: Ismoil Somoni Peak — 24,590 feet.


  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // console.log(fruits);
  // fruits.sort();
  // console.log(fruits);
  // fruits.push('test');
  // console.log(fruits);


})();






// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   static adultAge = 18;

//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   set fullName(fullName) {
//     let nameParts = fullName.split(' ');
//     this.firstName = nameParts[0];
//     this.lastName = nameParts[1];
//   }

//   isAdult() {
//     return this.age >= 18;
//   }

// }



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

(function () {
  document.write(
    '<br />'
    + '<br />'
    + '<strong>Another Self Executing Anonymous Function</strong>'
  )
})();
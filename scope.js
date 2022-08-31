// scope

const myName = "Rijuan";


function first(){
  const age = 27;

  if(age >= 18){
    const NID = true;
    var passport = true;
  }

  function second(){
    const job = "programmer";
    console.log(`${myName} is a ${age}-years and is a ${job}`);

    console.log(passport)
  }
  second()
}

first()
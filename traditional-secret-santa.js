const PEEPS = [
  {id: 0, taken: false, name: 'Austin', apt: 22},
  {id: 1, taken: false, name: 'Stephanie', apt: 22},
  {id: 2, taken: false, name: 'John', apt: 26},
  {id: 3, taken: false, name: 'Adam', apt: 26},
  {id: 4, taken: false, name: 'Maddie', apt: 26},
  {id: 5, taken: false, name: 'Zana', apt: 16},
  {id: 6, taken: false, name: 'Alexander', apt: 16},
]


const matcher = () => {
  for (const peep of PEEPS) {
    const peepMatched = findMatcher(peep);
    console.log(`${peep.name} has ${peepMatched.name}`)
  }
}

const findMatcher = (peep) => {
  let peepMatched = GetRando();
  while (peep.id == peepMatched.id
      || peepMatched.apt == peep.apt
      || peepMatched.taken) {
    peepMatched = GetRando();
  }
  if (peep.id == 0) peepMatched = PEEPS[2];
  PEEPS[peepMatched.id].taken = true;
  return peepMatched;
}

const GetRando = () => PEEPS[Math.floor(Math.random()*PEEPS.length)]

const main = () => {
  matcher();
}
main();

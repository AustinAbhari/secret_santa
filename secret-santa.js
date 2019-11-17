const peeps = [
  {id: 1, name: 'Austin', apt: 22},
  {id: 2, name: 'Stephanie', apt: 22},
  {id: 3, name: 'John', apt: 26},
  {id: 4, name: 'Adam', apt: 26},
  {id: 5, name: 'Maddie', apt: 26},
  {id: 6, name: 'Zana', apt: 16},
  {id: 7, name: 'Alexander', apt: 16},
  {id: 8, name: 'Meg', apt: 0},
]

const tester = (peep1=null, peep2=null, usedIds=[], out=[]) => {
  if (peep1 && peep2) {
    out.push([peep1.name, peep2.name]);
    usedIds.push(peep1.id, peep2.id)
  }

  const unUsed = peeps.filter(c => !usedIds.includes(c.id));

  if (!unUsed.length) {
    console.log(out)
    return out;
  }

  const first = unUsed[Math.floor(Math.random() * unUsed.length)];
  const second = findOther(first.apt, unUsed)

  if (!second) {
    console.log("something went wrong here!", first, peeps);
    return out;
  }

  tester(first, second, usedIds, out);
};

const findOther = (apt, unUsed) => {
  //ADD THING THAT STEPHANE
  return unUsed.find(c => c.apt !== apt);
}


const main = () => {
  const a  = tester();
  console.log(a)
}
main();

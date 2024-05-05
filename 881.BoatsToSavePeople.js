var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b);
  
    let numberOfBoats = 0;
  
    let lightWeight = 0;
    let hightWeight = people.length - 1;
  
    while (lightWeight <= hightWeight) {
      if (people[lightWeight] + people[hightWeight] <= limit) {
        lightWeight++;
      }
      hightWeight--;
  
      numberOfBoats++;
    }
    return numberOfBoats
  };
  
  console.log(numRescueBoats([1, 2], 3));
  
  console.log(numRescueBoats([3, 2, 2, 1], 3));
  
  console.log(numRescueBoats([3, 5, 3, 4], 5));
  
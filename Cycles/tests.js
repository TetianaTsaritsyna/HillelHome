const pow = function (x, y) { 
    var stupin = x;
    for (let i = 1; i < y; i++) {
        stupin = stupin * x;
        
    }
    return stupin;
  };
  
  const stupin = pow(2, 5);
  console.log(stupin);
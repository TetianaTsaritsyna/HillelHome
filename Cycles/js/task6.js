function checkProbabilityTheory(count) 
{
    var i = 1;
    var evenNumber = 0;
    var notEvenNumber = 0;
    do {
        i++;
        const min = 100;
        const max = 1000;
        const randomInRange = Math.floor(Math.random() * (max - min)) + min;
        x = randomInRange;
        
            if (x % 2 === 0) { evenNumber++; }
            else notEvenNumber++; 
     console.log (randomInRange);
            
        }
    while (i <= count);
    console.log("evenNumber = " +  evenNumber);
    console.log("notEvenNumber = " +  notEvenNumber);   
    var percentOfEvent = evenNumber / count * 100;
    var percentOfNotEvent = notEvenNumber / count * 100;
    if ((percentOfEvent / percentOfNotEvent) == (50 / 50)) {console.log('revenues are equal to 50/50');}
    else console.log('revenues are not equal to 50/50');
}

checkProbabilityTheory(5);

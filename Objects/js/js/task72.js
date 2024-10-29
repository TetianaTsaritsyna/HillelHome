var services = {
    "стрижка": "60 грн",
    "гоління": "280 грн",
    "Миття голови": "10 грн"
    };
    services['Розбити скло'] = "200 грн";


    function maxPrice(object) {
        var maxValue = 0;
       
            for (const key in services) 
                {
                if ((Number.parseInt(services[key])) > maxValue) 
                    {
                        maxValue = (Number.parseInt(services[key])); 
                             
                        }
                 }
    
        console.log("Максимальний price - " + maxValue);
        
    }

function price(object) {
    let sum = 0;
for (let key in services) {

    sum += Number.parseInt(services[key]);
    
};
console.log("Загальна вартість наданих послуг - " + sum);
} 

function minPrice(object) {
    var minValue = Number.parseInt(services["стрижка"]);      
           
    for (const key in services) 
        { //var minValue = (Number.parseInt(services[key]));
        if ((Number.parseInt(services[key])) < minValue) 
            {
                minValue = (Number.parseInt(services[key])); 
                     
                }
         }

console.log("Мінімальний price - " + minValue);
} 


price(services);
maxPrice(services);
minPrice(services);

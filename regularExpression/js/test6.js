var text = "Wonderful Joyful Happiness Time Task Apple";
var findingText = text.match(/\b[^aA\s]{6,}\b/g);

console.log(findingText);
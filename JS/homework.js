'number' + 3 + 3 //складаємо все разом і отримаємо number33

null + 3 // 0+3 = 3

5 && "qwerty" = qwerty// повертає останнє значення тому що всі true

+'40' + +'2' + "hillel"; //42hillel: +'40' - перетворює рядок в число, +'2' - перетворює рядок в число, 40+2 =42 і додати hillel

'10' - 5 === 6; //false: 10-5=5 не дорівнює 6 

true + false = 1 //1+0=1

'4px' - 3 = NaN // 4px: px = undefined перетворює в NaN

'4' - 3 = 1 //перетворює в числа 4-3 

'6' + 3 ** 0; //61: 3 в 0 степіні це 1, перетворюємо в рядок і додаємо '6' і '1'

12 / '6' = 2 // 12/6

'10' + (5 === 6); // 10false: 5 не дорівнює 6 і це false і перетворємо в рядок

null == '' // тому що null !== undefined поверне true

3 ** (9 / 3); //27: 9/3 = 3; 3*3*3 =27

!!'false' == !!'true' // !!'false' :  'false' - true, !true = false, !false = true; !!'true': 'true' - true, !true = false, !false = true; true == true

0 || '0' && 1 // 1:  '0' && 1 true i true = всі true тому повертаємо останнє значення 1; 0 або 1 = false || true - беремо значення true - 1

(+null == false) < 1; //false: +null перетворює в  число - 0, 0 це false; false == false це правдиво і перетворюємо true в 1;  1< 1 це false

false && true || true // true: false && true = false;  false || true = true

false && (false || true); //false: false || true = true; false && true = false

(+null == false) < 1 ** 5; //false:  +null == false - 0=0 -  true; 1 ** 5 = 1 - true; 1<1 - false
function thbs(a, b, c, ...config) {
        console.log(config);
         console.log(config.length);
    
 }
    
     thbs(1, 2, "hello", true, 7, 'mean', '99') 
    


     /**
 * Speard Operator 
 * ...extsingIterablevarivle
 * 
 */

let listName = ['vandana', 'bharath', 'Chinnu'];
console.log(listName); //
let listTop = ['baba', ...listName];
console.log(listTop); // 

var str = "foo hello";
console.log(str);

// conver string into array 
var chars = [...str];
console.log(chars);
console.log(chars.length);
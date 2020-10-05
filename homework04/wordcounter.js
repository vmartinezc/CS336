/* Word and Character counter
* Valeria Martinez Castro (vam6)
* CS 336 
* 10-04-2020
*/


/* countCharacters()
*  @param: obj -> this 
* function used to count characters and words in a text area
*using DOM functions and ternary operators
*/
function countCharacters(obj){

    //Use DOM functions to get the text input from the user
    document.getElementById("count-chars").innerHTML = obj.value.length;

    //ternary operation; if the characters are great than one display Characters, otherwise, display character
    var characters = obj.value.length > 1 ? 'Characters' : 'Character';
    document.getElementById('output-char').innerHTML = characters;
  
    //Use regular expressions to find the spaces
    var spaces = obj.value.match(/\S+/g);

    //ternary operation; counting words by counting the spaces
    var words = spaces ? spaces.length : 0;
    document.getElementById('output-words').innerHTML = words;
    //ternary operation; if the characters are great than one display Characters, otherwise, display character
    var displayWords = words == 1 ? 'Word' : 'Words';
    document.getElementById('display-words').innerHTML = displayWords;
   
    
}


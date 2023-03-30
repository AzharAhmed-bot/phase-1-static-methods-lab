class Formatter {
  //add static methods here
  static capitalize(word){
    const spliting=word.split("");
    spliting[0]=spliting[0].charAt(0).toUpperCase()+spliting[0].substring(2)
    

 return spliting.join('')
  }
  static sanitize(string){
   return string.replace(/[^a-zA-Z0-9-' ]/g,'')

  }
  static titleize(sentence) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    
    const words = sentence.split(' ');
    const capitalizedWords = words.map((word, index) => {
      if (exceptions.includes(word) && index !== 0) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
    
    return capitalizedWords.join(' ');
     

  }
  
}
//const result=Formatter.capitalize("crocodile")
//console.log(result);

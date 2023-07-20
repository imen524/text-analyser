function Footer ({value , isClicked}) {
    const findLongestWord = (text) => {

        const wordsArray = text.replace(/[^\w\s]/g, "").split(/\s+/);
        let longestWord = "";
        for (const word of wordsArray) {
          if (word.length > longestWord.length) {
            longestWord = word;
          }
        }
        return longestWord;
      };
      const longestWord = findLongestWord(value);
      const averageTime = isClicked ? 1 : 0;
    
   
   
   return( <div>
        <h1>Average Reading Time: ~{averageTime} minute</h1>
        <h1>Longest Word: {longestWord} </h1>
    </div> )
}

export default Footer;
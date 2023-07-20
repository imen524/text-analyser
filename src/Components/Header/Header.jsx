

function Header({value}) {


    const wordCount = value.trim().split(/\s+/).filter((word) => word !== "").length;
   
  const calculateCharacterCount = (text) => {
    text = text.replace(/\s/g, "");
    return text.length;
  };

  const calculateSentenceCount = (text) => {
    text = text.trim();
    const sentencesArray = text.split(/[.!?]/);
    const filteredSentencesArray = sentencesArray.filter((sentence) => sentence.trim() !== "");
    return filteredSentencesArray.length;
  };
  const calculateParagraphCount = (text) => {
    // Use a regular expression to split the text by paragraphs (double line breaks)
    const paragraphsArray = text.split(/\n\s*/);

    // Filter out any empty elements from the array
    const filteredParagraphsArray = paragraphsArray.filter((paragraph) => paragraph.trim() !== "");

    // Return the count of paragraphs
    return filteredParagraphsArray.length;
  };

  // Calculate paragraph count
  const paragraphCount = calculateParagraphCount(value);

  // Calculate sentence count
  const sentenceCount = calculateSentenceCount(value);

  // Calculate character count
  const characterCount = calculateCharacterCount(value);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
          {wordCount}
          </h6>
          <p className="font-bold">Words</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
          {characterCount}
          </h6>
          <p className="font-bold">Characters</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
          {sentenceCount}
          </h6>
          <p className="font-bold">Sentences</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
          {paragraphCount}
          </h6>
          <p className="font-bold">Paragraph</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
          0
          </h6>
          <p className="font-bold">Pronouns</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
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
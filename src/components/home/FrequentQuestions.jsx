const FrequentQuestions = () => {
  return (
    <div className="my-12">
      <h1 className="my-8 text-3xl font-bold text-center">Frequent Questions</h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Is the products are authentic?
        </div>
        <div className="collapse-content">
          <p>Yes, Authentic!</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How long this will take to ship?
        </div>
        <div className="collapse-content">
          <p>Within 5-7 days</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Any replacement warenty?
        </div>
        <div className="collapse-content">
          <p>Yes, if anything goes worng will replace those products</p>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;

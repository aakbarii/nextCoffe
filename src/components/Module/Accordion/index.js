const Accordion = ({ item, index, activeIndex, handleToggle }) => {
    return (
      <div className="mb-5">
        <div className="md:w-2/3 mx-auto">
          <div className="border border-gray-200 rounded-2xl">
            <h2 id={`heading-${item.key}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full lg:p-5 py-5 px-1 font-medium rtl:text-right text-gray-500 border-b border-gray-200 hover:bg-gray-100 transition-all"
                aria-expanded={activeIndex === index}
                aria-controls={`body-${item.key}`}
                onClick={() => handleToggle(index)}
              >
                <span className='text-gray-900 text-lg'>{item.label}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`body-${item.key}`}
              className={`overflow-hidden transition-max-height duration-300 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
              aria-labelledby={`heading-${item.key}`}
            >
              <div className="p-5 border-t border-gray-200">
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Accordion;
  
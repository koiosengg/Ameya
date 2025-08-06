import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Is smoking allowed?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius. Lectus egestas nunc facilisis id lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Urna lorem semper invarius. Lectus egestas nunc facilisis id lorem ipsum dolor sit",
    },
    {
      question: "Can I bring extra guests?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius. Lectus egestas nunc facilisis id lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Urna lorem semper invarius. Lectus egestas nunc facilisis id lorem ipsum dolor sit",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius. Lectus egestas nunc facilisis id lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Urna lorem semper invarius. Lectus egestas nunc facilisis id lorem ipsum dolor sit",
    },
    {
      question: "Do you offer adventure activities?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius. Lectus egestas nunc facilisis id lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur. Urna lorem semper invarius. Lectus egestas nunc facilisis id lorem ipsum dolor sit",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="section-template">
      <div className="section-template-heading">
        <h2>
          Got Questions? <br />
          We've Got Answers!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna lorem semper in varius.
          <br className="desktop" />
          Lectus egestas nunc facilisis id.
        </p>
      </div>
      <div className="faq">
        {faqData.map((faq, index) => (
          <React.Fragment key={index}>
            <div
              className={`faq-set ${activeIndex === index ? "active-faq" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-set-heading">
                <h3>{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id={`mask${index}`}
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask={`url(#mask${index})`}>
                    <path
                      d="M11 21V13H3V11H11V3H13V11H21V13H13V21H11Z"
                      fill="#1C1B1F"
                    />
                    <path d="M5 13V11H19V13H5Z" fill="#1C1B1F" />
                  </g>
                </svg>
              </div>
              <div className="faq-set-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
            <div className="faq-line"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

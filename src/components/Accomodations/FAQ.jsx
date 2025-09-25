import React, { useState } from "react";
import { Link } from "react-router-dom";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const faqData = [
    {
      question: "Do they serve breakfast?",
      answer: "There are breakfast options available.",
    },
    {
      question: "Can I park there?",
      answer:
        "Free private parking is available on site (reservation is not needed).",
    },
    {
      question: "Is there an airport shuttle service?",
      answer:
        "Ameya Coorg Home Stay has an airport shuttle service for an additional fee. You can request it directly after booking your stay.",
    },
    {
      question: "Is there a restaurant?",
      answer: "Unfortunately, there's no restaurant at Ameya Coorg Home Stay.",
    },
    {
      question: "Are there rooms with a private bathroom?",
      answer:
        "There are still rooms available with a private bathroom. For example: Deluxe Double or Twin Room with Balcony",
    },
    {
      question: "What are the check-in and check-out times?",
      answer:
        "✓ Check-in from 11:00 to 00:00 ✓ Check-out until 10:30, If you'd like to request an early or late check-in or check-out, you can make a special request when you book. Note: Special requests can't be guaranteed. If early or late check-in or check-out is essential to your travel plans, check the cancellation options before booking.",
    },
    {
      question: "Is there a swimming pool?",
      answer: "Ameya Coorg Home Stay doesn't have a swimming pool.",
    },
    {
      question: "Are there rooms with a balcony?",
      answer:
        "There are still rooms available with a balcony. For example: Deluxe Double or Twin Room with Balcony",
    },
    {
      question: "Is there a spa?",
      answer:
        "Unfortunately, there's no spa or wellness center at Ameya Coorg Home Stay.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const displayedFaqs = isExpanded ? faqData : faqData.slice(0, 5);

  return (
    <div className="faq">
      {displayedFaqs.map((faq, index) => (
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
                  id="mask3"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  style={{ maskType: "alpha" }}
                >
                  <rect width="24" height="24" fill="#D9D9D9"></rect>
                </mask>
                <g mask="url(#mask3)">
                  <path
                    d="M11 21V13H3V11H11V3H13V11H21V13H13V21H11Z"
                    fill="#1C1B1F"
                  ></path>
                  <path d="M5 13V11H19V13H5Z" fill="#1C1B1F"></path>
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

      {/* Only show link if more than 5 FAQs */}
      {faqData.length > 5 && (
        <Link
          className="tertiary-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <p>{isExpanded ? "See less" : "Read more"}</p>
        </Link>
      )}
    </div>
  );
}

export default FAQ;

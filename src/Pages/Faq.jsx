
import React, { useState } from "react";
import { assets } from "../assets/assets";
import Banner from "../Components/Banner";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "01 How long will my case take?",
      answer:
        "The amount of time it takes to resolve a case varies based on invidiual circumstances and other factors. However, we will keep you thoroughly updated through every step with us.",
      open: false,
    },
    {
      question: "02 Do you offer free consultations?",
      answer:
        "Yes! You can request a free consultation with us via our website.",
      open: false,
    },
    {
      question: "03 What happens if I can't afford legal representation?",
      answer:
        "You can request a free consultation with us via our website and we will provide you with all the information during your appointment.",
      open: false,
    },
    {
      question: "04 What are your office hours?",
      answer:
        "We are open Monday to Friday, 10:00 until 17:00. We are closed on weekends and bank holidays.",
      open: false,
    },
    {
      question: "05 How long has your firm been in practice?",
      answer:
        "Exchange Legal Services began its operations in late 2022. Although we are a relatively new firm, our team consists of highly experienced and skilled legal professionals dedicated to providing top-tier legal services.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false,
      }))
    );
  };

  return (
    <div>
      <Banner />
      <div className="faq-container">
        <div className="faq-bg-img">
          <img src={assets.FaqBg} alt="" />
        </div>
        <div className="faq-inner">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq ${faq.open ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-header">
                <h3>{faq.question}</h3>
                <span className={`arrow ${faq.open ? "rotate" : ""}`}>
                  &#8599;
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

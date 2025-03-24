
import React, { useState } from "react";
import { assets } from "../assets/assets";
import Banner from "../Components/Banner";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "01. How long will my case take?",
      answer:
        "The amount of time it takes to resolve a case varies based on invidiual circumstances and other factors. However, we will keep you thoroughly updated through every step with us.",
      open: false,
    },
    {
      question: "02. Do you offer free consultations?",
      answer:
        "Yes! You can request a free consultation with us via our website.",
      open: false,
    },
    {
      question: "03. What happens if I can't afford legal representation?",
      answer:
        "You can request a free consultation with us via our website and we will provide you with all the information during your appointment.",
      open: false,
    },
    {
      question: "04. What are your office hours?",
      answer:
        "We are open Monday to Friday, 10:00 until 17:00. We are closed on weekends and bank holidays.",
      open: false,
    },
    {
      question: "05. How long has your firm been in practice?",
      answer:
        "Exchange Legal Services began its operations in late 2022. Although we are a relatively new firm, our team consists of highly experienced and skilled legal professionals dedicated to providing top-tier legal services.",
      open: false,
    },
    {
      question: "06. What areas of law do you specialise in?",
      answer:
        "At Exchange Legal Services, we specialise in a wide range of legal areas, including:",
      open: false,
    },
    {
      question: "07. What's the process for settling a case out of court?",
      answer:
        "There are many ways through which a case may be settled out of court. For example, through negotiation, mediation, conciliation, arbitration, etc. We will provide you with all the information during your appointment.",
      open: false,
    },
    {
      question: "08. Can I change barristers/solicitors if I'm not satisfied?",
      answer:
        "Yes. However, we are confident that you’ll appreciate the services provided by Exchange Legal Services. We have put together a dedicated team which will diligently handle your case, drawing upon our extensive experience and expertise.",
      open: false,
    },
    {
      question: "09. What's the likelihood of winning my case?",
      answer:
        "While the success of a case varies based on individual circumstances and other factors, we will keep you thoroughly updated through every step with us.",
      open: false,
    },
    {
      question:
        "10. What are your fees for handling licensing applications and attending Crown or Magistrate Courts?",
      answer:
        "For licensing applications and attending Crown or Magistrate Courts, our fees are as follows:",
      open: false,
    },
    {
      question: "11. Do you offer virtual consultations?",
      answer: "Absolutely! We can arrange for video or phone consultations.",
      open: false,
    },
    {
      question: "12. Can I represent myself in court?",
      answer:
        "Certainly. While it’s possible to represent yourself in court, having the guidance and support of our experienced legal team will significantly increase your chances of success. We will assist you in navigating the complexities of legal proceedings.",
      open: false,
    },
    {
      question: "13 What is your address?",
      answer:
        "Our address is 1 Oaks Court, Warwick Road, Borehamwood, Hertfordshire, WD6 1GS, United Kingdom.",
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
      <Banner bannerImg={assets.faqbg} />
      <div className="faq-container">
        {/* <div className="faq-bg-img">
          <img src={assets.FaqBg} alt="" />
        </div> */}
        <div className="faq-inner">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq ${faq.open ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-header">
                <h3>{faq.question}</h3>
                <span className="arrow">
                <img className="downarrow" src={assets.downarrow} alt="" />
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

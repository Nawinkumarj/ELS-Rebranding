import React, { useRef } from "react";
import Banner from "../Components/Banner";


const sections = [
  {
    id: "cookies",
    title: "What are cookies",
    content: (
      <ul>
        <li>
          Cookies are small text files that are stored on your device when you
          visit a website. They are used to remember your preferences, login
          information, and other details about your visit.
        </li>
        <li>
          There are two main types of cookies: session cookies and persistent
          cookies. Session cookies are deleted when you close your browser,
          while persistent cookies remain on your device until they expire or
          you delete them.
        </li>
      </ul>
    ),
  },
  {
    id: "why",
    title: "Why We Use Cookies",
    content: (
      <ul>
        <li>
          We use cookies to improve the functionality of our website and provide
          a better user experience for our visitors. Specifically, we use
          cookies to:
        </li>

        <li>Remember your preferences, such as language and font size</li>
        <li>Keep you logged in to your account</li>
        <li>
          Analyze how visitors use our website and track website performance
        </li>
        <li>Display personalized content and advertising</li>
      </ul>
    ),
  },
  {
    id: "types",
    title: "What types of cookies do we use",
    content: (
      <ul>
        <li>
          <strong>Session cookies:</strong> These cookies will only exist whilst
          the user is reading or navigating our website. When the user closes
          the browser these cookies are usually removed.
        </li>
        <li>
          <strong>Persistent cookies:</strong> These cookies will exist on users
          computer until a future date. Our website cookies have an expiry date
          of _______.
        </li>
        <li>
          <strong>Third-Party Cookies:</strong> These cookies are set out by
          third-party domains which are issued from our social media platforms
          and Google Analytics.
        </li>
        <li>
          <strong>First-Party Cookies:</strong> These are cookies set out by the
          website domain.
        </li>
      </ul>
    ),
  },
  {
    id: "manage",
    title: "How can you manage cookies?",
    content: (
      <ul>
        <li>
          Most web browsers allow you to control the use of cookies through
          their settings. You can choose to accept or reject cookies, or you can
          set your browser to notify you when a website attempts to set a
          cookie.
        </li>
        <li>
          Please note that disabling cookies may affect the functionality of our
          website.
        </li>
      </ul>
    ),
  },
  {
    id: "changes",
    title: "Changes to our policy",
    content:
      "We may update this cookie policy from time to time. Any changes will be posted on this page and the updated policy will take effect immediately.",
  },
  {
    id: "contact",
    title: "Contact us",
    content:
      "If you have any questions or concerns about our use of cookies, please contact us at info@exchangelegalservices.com.",
  },
];

const Cookies = () => {
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Banner />
      <div className="cookies-top-content">
        <h2>
          This cookie policy explains how our law firm uses cookies and similar
          technologies on our website. By using our website, you consent to our
          use of cookies in accordance with this policy.
        </h2>
      </div>
      <div className="cookies-container">
        <nav className="cookies-sidebar">
          {sections.map((section) => (
            <button
              key={section.id}
              className="cookies-nav-btn"
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </nav>
        <main className="cookies-content">
          {sections.map((section) => (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="cookies-section"
            >
              <h2>{section.title}</h2>
              {typeof section.content === "string" ? (
                <p>{section.content}</p>
              ) : (
                section.content
              )}
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Cookies;

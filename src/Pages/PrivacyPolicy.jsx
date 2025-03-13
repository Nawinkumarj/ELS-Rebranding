import React, { useRef } from "react";
import Banner from "../Components/Banner";
const PrivacyPolicy = () => {
  const sectionRefs = useRef({});

  const sections = [
    {
      id: "Regulatory Information, Privacy Policy, Legal Notices",
      title: "Regulatory Information, Privacy Policy, Legal Notices",
      content: (
        <ul>
          <li>
            Exchange Legal Services Limited is registered in England and Wales
            with the registered number: 13914498. Our registered office is Unit
            1c, Second Floor, 1 Oaks Court, Warwick Road, Borehamwood,
            Hertfordshire, WD6 1GS.
          </li>
          <li>
            Exchange Legal Services Limited is authorised and regulated by the
            Solicitors Regulation Authority (SRA) with SRA number: 8001070. More
            information on the SRA is available on their website at
            www.sra.org.uk under Standards and Regulations.
          </li>
        </ul>
      ),
    },
    {
      id: "Data-protection",
      title: "Data Protection",
      content: (
        <ul>
          <li>
            Exchange Legal Services takes the security and protection of data
            seriously. For more information, see our Privacy Policy.
          </li>
        </ul>
      ),
    },
    {
      id: "Privacy Policy and Client Confidentiality",
      title: "Privacy Policy and Client Confidentiality",
      content: (
        <ul>
          <li>
            We take our clients’ confidentiality seriously, and the protection
            of information is a fundamental feature of our relationships with
            our clients. Exchange Legal Services Limited has specific common
            law, statutory, and regulatory obligations regarding the maintenance
            of our clients’ confidentiality and the protection and processing of
            personal data as we are a professional services firm, regulated by
            the Solicitors Regulation Authority.
          </li>
          <li>
            This Privacy Notice explains how and why we process personal data we
            may collect from you or that you may provide to us. This notice is
            to be read alongside any other documents referred to in it. When we
            process and use your personal data, we do so in accordance with the
            UK General Data Protection Regulations (GDPR). We are responsible
            for your personal data for the purposes of UK GDPR. We will only use
            your personal data according to your engagement and instructions to
            us, the UK GDPR, our professional duty of confidentiality, and other
            relevant legislation.
          </li>
          <li>
            In the event that the EU GDPR applies to our activities, we will
            then comply with the EU GDPR.
          </li>
        </ul>
      ),
    },
    {
      id: "Data We May Collect ",
      title: "Data We May Collect ",
      content: (
        <ul>
          <li className="policy-list">
            Personal data such as your full name, date of birth, and National
            Insurance Number
          </li>
          <li className="policy-list">
            Contact details such as your address, telephone and/or mobile
            number, and personal email address.
          </li>
          <li className="policy-list">
            Information to enable us to check and verify your identity; e.g.
            Passport or Driving License .
          </li>
          <li className="policy-list">
            Information relating to the matter in which you are seeking our
            advice or representation .
          </li>
          <li className="policy-list">
            Special category data such as data revealing your racial or ethnic
            origin, political opinions, health, religious beliefs, philosophical
            beliefs, or trade union membership .
          </li>
        </ul>
      ),
    },
    {
      id: "Our Lawful Basis for Processing Your Personal Data",
      title: "Our Lawful Basis for Processing Your Personal Data",
      content: (
        <ul>
          <li>
            <strong>Contract:</strong>
            We will process your personal data to allow us to perform our
            contract with you and to take steps at your request.
          </li>
          <li>
            <strong>Legitimate Interest:</strong>
            Exchange Legal Services has a legitimate interest in our clients’
            personal data in order to provide our legal services and to comply
            with our legal and regulatory obligations. .
          </li>
        </ul>
      ),
    },
    {
      id: "Data Retention",
      title: "Data Retention",
      content: (
        <ul>
          <li>
            Your personal data will only be kept for a specified period after we
            have finished advising you or acting on your behalf. These reasons
            are as follows:
          </li>
          <li className="policy-list-point">
            To provide you with the services you have requested .
          </li>
          <li className="policy-list-point">
            To respond to any questions, complaints or claims made by you on
            your behalf.
          </li>
          <li className="policy-list-point">
            To maintain records required by the law .
          </li>
          <li className="policy-list-point">To show that we treated you fairly.</li>
        </ul>
      ),
    },
    {
      id: "How Long We Keep Your Personal Data For",
      title: "How Long We Keep Your Personal Data For",
      content: (
        <ul>
          <li>
            We retain your personal data for no longer than is necessary for the
            purpose(s) for which it was provided. What this means in practice
            will vary between different types of data.
          </li>
          <li>
            When determining the relevant retention periods, we take into
            account several factors, including:
          </li>
          <li className="policy-list-point">
            Legal obligation(s) under applicable law to retain data for a
            certain period of time.
          </li>
          <li className="policy-list-point">
            Statute of limitations under applicable law .
          </li>
          <li className="policy-list-point">Potential or actual disputes .</li>
          <li className="policy-list-point">
            Guidelines secured by relevant data protection authorities .
          </li>
          <li>
            Otherwise, we will securely erase your personal data from our
            systems when it is no longer required.
          </li>
        </ul>
      ),
    },
    {
      id: "Your Rights as a Data Subject",
      title: "Your Rights as a Data Subject",
      content: (
        <ul>
          <li>As a data subject, you have the right to:</li>
          <li className="policy-list-point">
            Be provided with clear, transparent, and easily understandable
            information about how we use your personal data .
          </li>
          <li className="policy-list-point">
            Obtain access to your data, so that you are aware and can review
            that we are handling it in accordance with data protection law .
          </li>
          <li className="policy-list-point">
            Have your personal data corrected if it is inaccurate or incomplete.
          </li>
          <li className="policy-list-point">
            Request the deletion or removal of your personal data where there is
            no compelling reason for us to keep using it.
          </li>
          <li className="policy-list-point">
            “Restrict” or “block” further use of your personal data.
          </li>
          <li className="policy-list-point">
            Obtain and reuse your personal data in a structured format in
            certain circumstances.
          </li>
          <li className="policy-list-point">
            Object to us processing your personal data for our legitimate
            business interests or for direct marketing purposes.
          </li>
          <li className="policy-list-point">
            Withdraw your consent at any time, if you have given us your consent
            to process your personal data for a particular purpose.
          </li>
          <li className="policy-list-point">
            Make a complaint to the Information Commissioner’s Office (ICO) if
            you are unhappy with how we have handled your personal data or
            believe our processing of your personal data does not comply.
          </li>
        </ul>
      ),
    },
    {
      id: "Website Privacy Notice",
      title: "Website Privacy Notice",
      content: (
        <ul>
          <li>
            This privacy notice relates only to your use of our website. This
            privacy notice does not cover any links to third-party websites. We
            are not responsible for the content of those sites either. Those
            third-party sites may also gather information about you in
            accordance with their own privacy notices separate from our own. For
            privacy information regarding any third-party sites, please consult
            their privacy policies..
          </li>
        </ul>
      ),
    },
    {
      id: "Copyright",
      title: "Copyright",
      content: (
        <ul>
          <li>
            Copyright throughout this website belongs to Exchange Legal Services
            Limited. Printed copies of this website can be made for personal
            usage or to provide information to a third party. However, this must
            be on a non-frequent basis and free of charge. The recipient must be
            aware of our Copyright notice and the copies must not be tampered
            with.
          </li>
          <li>
            Permission is given to download and view our information on a
            personal computer or monitor. Permanent storage or copying of these
            pages (in whole or in part) is prohibited.
          </li>
        </ul>
      ),
    },
    {
      id: "Cookie Policy",
      title: "Cookie Policy",
      content: (
        <ul>
          <li>
            This cookie policy explains how our law firm uses cookies on our
            website. By using our website, you consent to our use of cookies in
            accordance with this policy.
          </li>
          <li>By using our website, you consent to our use of cookies.</li>
          <li>Cookies help display information tailored to your interests.</li>
          <li>For more information, see our Privacy Policy.</li>
        </ul>
      ),
    },
    {
      id: "What are Cookies?",
      title: "What are Cookies?",
      content: (
        <ul>
          <li>
            We collect information about the use of our site through cookies.
            Cookies are information that files stored on your devices help
            websites remember who you are and information about your visit.
            Cookies can help to display the information on our site in a way
            that matches your interests.
          </li>
        </ul>
      ),
    },
    {
      id: "What Cookies Are Used on This Site? ",
      title: "What Cookies Are Used on This Site? ",
      content: (
        <ul>
          <li>
            <strong> Essential Cookies:</strong>
            Some cookies on our site are essential for us to provide you with
            the service that you have requested. For example, cookies are used
            to enable you to log onto our website, which allows communication
            between your browser and our website.
          </li>
          <li>
            <strong>Analytics Cookies:</strong>
            We use analytics cookies to help us understand how users engage with
            our website. For example, by counting the number of users visiting
            our website or using a particular feature or function on the
            website.
          </li>
          <li>
            <strong> User Cookies: </strong>
            We use user cookies to improve your experience by remembering your
            preferences so we know how you like to use our website .
          </li>
          <li>
            <strong>Social Sharing:</strong>
            We use third-party cookies to allow you to share content directly on
            social media platforms.
          </li>
        </ul>
      ),
    },
    {
      id: "How Can I Reject or opt out of Receiving Cookies?",
      title: "How Can I Reject or opt out of Receiving Cookies?",
      content: (
        <ul>
          <li>
            You may refuse to accept cookies by activating the setting on your
            web browser which allows you to reject cookies or select specific
            cookies. Please note that disabling cookies may affect the
            functionality of our website for you.
          </li>
        </ul>
      ),
    },
    {
      id: "Changes To This Privacy Policy",
      title: "Changes To This Privacy Policy",
      content: (
        <ul>
          <li>
            This privacy policy was last updated in July 2024. This Privacy
            Policy may be updated from time to time, so you may want to review
            it each time you provide personal data to Exchange Legal Services
            Limited. Any changes will be posted on this page and the updated
            policy will take effect immediately.
          </li>
        </ul>
      ),
    },
    {
      id: "TV Advertisement Offer Details",
      title: "TV Advertisement Offer Details",
      content: (
        <ul>
          <li className="policy-list">
            Offer available to new enquiries only; existing clients are not
            eligible.
          </li>
          <li className="policy-list">
            Limited to 30 minutes; additional time may incur standard fees.
          </li>
          <li className="policy-list">
            Appointments must be booked in advance, subject to availability.
          </li>
          <li className="policy-list">
            Covers initial legal advice only; further services require a
            separate agreement and may incur fees.
          </li>
          <li className="policy-list">
            Cannot be combined with other offers; the firm may modify or
            withdraw this offer without notice..
          </li>
          <li className="policy-list">
            The consultation does not create an attorney-client relationship;
            seek independent legal advice if needed..
          </li>
          <li className="policy-list">
            Terms are governed by the laws of England and Wales.
          </li>
        </ul>
      ),
    },
    {
      id: "How to Contact Us",
      title: "How to Contact Us",
      content: (
        <ul>
          <li>
            If you have any questions or concerns regarding how we handle your
            personal data, please contact us by email at
            info@exchangelegalservices.com.
          </li>
        </ul>
      ),
    },
  ];

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Banner />
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
              {section.content}
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;

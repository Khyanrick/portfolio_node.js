"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What technologies do you use?",
    answer:
      "I primarily work with Flutter, Next.js, Django, Python, JavaScript, PostgreSQL, Linux, and Git.",
  },
  {
    question: "Are you available for internships?",
    answer:
      "Yes. I am currently looking for internship opportunities in Software Development, Backend Development, and Mobile App Development.",
  },
  {
    question: "What kinds of projects do you build?",
    answer:
      "I enjoy building full-stack web applications, Flutter mobile apps, backend APIs, Backend System Design, and Linux-based projects.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me through the contact form on this website, via email, or through my LinkedIn profile.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="section-title">
        <h2>Frequently Asked Questions</h2>

        <p>
          Here are some common questions about me and my work.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
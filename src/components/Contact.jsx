import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="section-title">Contact</h2>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-[var(--secondary-color)] text-xl" />
            <a href="mailto:qiuyif@bu.edu" className="text-[var(--text-color)] hover:text-[var(--secondary-color)]">
              qiuyif@bu.edu
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-[var(--secondary-color)] text-xl" />
            <a href="tel:+18574980925" className="text-[var(--text-color)] hover:text-[var(--secondary-color)]">
              +1 (857)-498-0925
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[var(--secondary-color)] text-xl" />
            <span className="text-[var(--text-color)]">Boston, MA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

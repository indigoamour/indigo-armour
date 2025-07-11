import React from "react";
import Footer from "@/components/footer"

const page = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-neutral-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl text-neutral-100 font-bold mb-4">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 space-y-8 text-gray-800">
          <p>
            Indigo Amour respects your privacy and is committed to protecting
            your personal data. This Privacy Policy outlines how we collect,
            use, and safeguard your information.
          </p>

          <div>
            <h2 className="font-bold text-2xl mb-2">What We Collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Shipping and Billing Address</li>
              <li>
                Payment Information (securely processed through Razorpay –
                never stored by us)
              </li>
              <li>Browsing behavior on our website for analytics</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Usage of Your Data</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To process and fulfill your orders efficiently</li>
              <li>To provide customer support and respond to queries</li>
              <li>
                To send updates regarding your order, offers, or promotions
                (only if you opt in)
              </li>
              <li>To improve our website functionality and user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Data Protection</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                We do not store or retain any of your sensitive payment
                information.
              </li>
              <li>
                All transactions are securely handled by our trusted payment
                gateway partner, Razorpay.
              </li>
              <li>
                We implement appropriate security measures to prevent
                unauthorized access, alteration, disclosure, or destruction of
                your personal data.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">
              Third-Party Disclosure
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                We do not sell, trade, or rent your personal information to
                third parties.
              </li>
              <li>
                We may share relevant data only with trusted partners like
                courier/delivery companies to ensure successful order
                fulfillment.
              </li>
              <li>
                These service providers are contractually obligated to handle
                your data with care and confidentiality.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Your Rights</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>You can request to access, update, or delete your data.</li>
              <li>
                You can opt out of promotional communications at any time.
              </li>
              <li>
                To exercise your rights or raise concerns, please contact us at{" "}
                <strong>indigoamour.dev@gmail.com</strong>.
              </li>
            </ul>
          </div>

          <p>
            By using our website, you consent to our Privacy Policy. We may
            update this policy periodically, and all changes will be posted on
            this page.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;

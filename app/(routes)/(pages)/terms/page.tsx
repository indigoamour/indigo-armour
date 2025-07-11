import React from "react";
import Footer from "@/components/footer"

const page = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-neutral-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl text-neutral-100 font-bold mb-4">
            Terms & Conditions
          </h1>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 space-y-8 text-gray-800">
          <p>
            Welcome to Indigo Amour. By accessing and using our website, you
            agree to the following terms and conditions. Please read them
            carefully before making a purchase.
          </p>

          <div>
            <h2 className="font-bold text-2xl mb-2">Product Description</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                We make every effort to display accurate descriptions, colors,
                and images of our products.
              </li>
              <li>
                As our products are handcrafted, slight variations in color,
                texture, or finish may occur. These are natural and not defects.
              </li>
              <li>
                Sizes and measurements mentioned on product pages are
                approximate and for reference only.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Pricing</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                All product prices listed on the website are inclusive of all
                applicable taxes unless stated otherwise.
              </li>
              <li>
                Indigo Amour reserves the right to change prices at any time
                without prior notice.
              </li>
              <li>
                In case of a pricing error, we reserve the right to cancel the
                order and issue a full refund.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Use of Content</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                All content including images, text, graphics, and designs on
                this site are the intellectual property of Indigo Amour.
              </li>
              <li>
                Reproduction, copying, or redistribution of any part of the site
                without permission is strictly prohibited.
              </li>
              <li>
                Any unauthorized use may result in legal action or penalties.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Order Cancellation</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Orders can be canceled by customers within 12 hours of placing
                them.
              </li>
              <li>
                Indigo Amour reserves the right to cancel any order at its
                discretion if it appears fraudulent, violates our policies, or
                is due to an unforeseen error.
              </li>
              <li>
                If we cancel an order, the amount will be refunded in full to
                the original payment method.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Users must provide accurate information during checkout and
                registration.
              </li>
              <li>
                Users agree not to misuse the website or attempt to compromise
                its functionality.
              </li>
              <li>
                Any form of abusive language, fraud, or violation of these terms
                may result in account termination.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Limitation of Liability</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Indigo Amour is not liable for any indirect or consequential
                damages resulting from the use of our site or products.
              </li>
              <li>
                We are not responsible for delays caused by third-party delivery
                services or unforeseen circumstances.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Governing Law</h2>
            <p>
              These terms shall be governed and interpreted in accordance with
              the laws of India. Any disputes arising shall be subject to the
              exclusive jurisdiction of the courts of Uttar Pradesh.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Contact Information</h2>
            <p>
              For detailed information or if you have any questions about our
              Terms & Conditions, please contact us at{" "}
              <strong>indigoamour.dev@gmail.com</strong> before placing your
              order.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;

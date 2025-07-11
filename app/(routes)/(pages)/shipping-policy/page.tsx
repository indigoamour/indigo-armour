import React from "react";
import Footer from "@/components/footer"

const page = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-neutral-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl text-neutral-100 font-bold mb-4">
            🚚 Shipping Policy
          </h1>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 space-y-8 text-gray-800">
          <p>
            At Indigo Amour, we are committed to delivering your handcrafted
            treasures as swiftly and safely as possible. Our shipping policy
            outlines how and when your order will reach you.
          </p>

          <div>
            <h2 className="font-bold text-2xl mb-2">Order Processing</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                All orders are processed within <strong>2–3 business days</strong>.
              </li>
              <li>
                Orders placed on weekends or holidays will be processed on the
                next working day.
              </li>
              <li>
                Once your order is shipped, you will receive a tracking number
                via email or SMS.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Delivery Time</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Metro Cities:</strong> 4–6 business days after dispatch.
              </li>
              <li>
                <strong>Other Areas:</strong> 6–10 business days after dispatch.
              </li>
              <li>
                Remote areas may take slightly longer depending on accessibility
                and courier availability.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Shipping Charges</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Free shipping</strong> on all orders above ₹5000.
              </li>
              <li>
                A flat ₹200 shipping fee applies to orders below ₹5000.
              </li>
              <li>
                Shipping charges are non-refundable in case of order return,
                unless the return is due to product defect or error.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Shipping Delays</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                During peak seasons, festivals, or sales, orders may experience
                slight delays.
              </li>
              <li>
                We work closely with our logistics partners to ensure timely
                delivery, but external factors such as weather or strikes may
                affect timelines.
              </li>
              <li>
                We appreciate your patience and understanding in such cases.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Delivery Partners</h2>
            <p>
              We use reputed logistics partners to ensure your order is safely
              delivered. A signature may be required upon delivery for high
              value orders.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-2">Questions?</h2>
            <p>
              For any shipping-related queries or updates, feel free to contact
              us at <strong>indigoamour.dev@gmail.com</strong>. We’re here to
              help!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;

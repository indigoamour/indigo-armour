import React from "react";
import Footer from "@/components/footer";

const page = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-neutral-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl text-neutral-100 font-bold mb-4">
            Cancellation and Refunds Policy
          </h1>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 space-y-8">
          <p>
            At Indigo Amour, we take immense pride in the quality and
            craftsmanship of every product we offer. We strive to provide a
            seamless shopping experience and understand that sometimes
            cancellations, returns, or refunds may be necessary.
          </p>

          {/* Order Cancellation */}
          <div>
            <h2 className="font-bold text-2xl mb-2">Order Cancellation</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Orders can be canceled within 12 hours of placement.</li>
              <li>Once dispatched, cancellations are not permitted.</li>
              <li>
                To request cancellation, please contact our support team at
                <strong> indigoamour.dev@gmail.com </strong> with your Order ID.
              </li>
            </ul>
          </div>

          {/* Returns */}
          <div>
            <h2 className="font-bold text-2xl mb-2">Returns</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Returns are accepted only in the following cases:</li>
              <ul className="ml-6 list-disc list-inside">
                <li>Product received is damaged or defective.</li>
                <li>Incorrect item delivered.</li>
              </ul>
              <li>Return requests must be raised within 3 days of delivery.</li>
              <li>
                Items must be unused, unwashed, and returned in original
                packaging with all tags intact.
              </li>
              <li>
                Reverse pickup is subject to availability of our logistics
                partner in your area.
              </li>
            </ul>
          </div>

          {/* Refunds */}
          <div>
            <h2 className="font-bold text-2xl mb-2">Refunds</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Once the returned product passes the quality inspection, the
                refund will be initiated.
              </li>
              <li>
                Refunds are processed within 7–10 business days to the original
                payment method.
              </li>
              <li>
                For COD (Cash on Delivery) orders, the refund will be issued as
                store credit or UPI bank transfer.
              </li>
              <li>
                Shipping and COD charges are non-refundable unless the return is
                due to a mistake on our end.
              </li>
            </ul>
          </div>

          {/* Non-Returnable Items */}
          <div>
            <h2 className="font-bold text-2xl mb-2">Non-Returnable Items</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Custom-made or personalized items.</li>
              <li>Items purchased during clearance sales or promotions.</li>
              <li>Used or damaged products not due to transit issues.</li>
            </ul>
          </div>

          {/* Need Help? */}
          <div>
            <h2 className="font-bold text-2xl mb-2">Need Help?</h2>
            <p>
              If you have any questions about our cancellation or refund policy,
              please reach out to our support team. We are here to assist you
              from Monday to Saturday, 10 AM to 6 PM (IST).
            </p>
            <p className="mt-2">
              <strong>Email:</strong> indigoamour.dev@gmail.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;

import Layout from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                When you place an order with RIWA Beauty, we collect the following information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Delivery address</li>
                <li>Order details and preferences</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use your information solely for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Processing and delivering your orders</li>
                <li>Communicating with you about your order status</li>
                <li>Providing customer support</li>
                <li>Sending promotional messages (only with your consent)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or share your personal information with third parties except as necessary to fulfill your orders (e.g., delivery services) or as required by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-bold mb-4">4. WhatsApp Communication</h2>
              <p className="text-muted-foreground">
                Orders are processed via WhatsApp. By placing an order, you agree to receive order-related messages through WhatsApp. Your chat history and order details are stored on your device and WhatsApp's servers according to their privacy policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground">
                We take reasonable measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of promotional communications</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us via WhatsApp or email at hello@riwabeauty.com.
              </p>
            </section>

            <section className="p-6 bg-accent/50 rounded-2xl">
              <p className="text-sm text-muted-foreground">
                By using our website and services, you consent to this Privacy Policy. We may update this policy from time to time, and any changes will be posted on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;

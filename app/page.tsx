export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Cloud Outage Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Calculate Revenue Impact of{" "}
          <span className="text-[#58a6ff]">Cloud Outages</span> Instantly
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track your business metrics during cloud outages, calculate lost revenue, determine SLA credits owed, and generate ready-to-submit compensation claims — automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Calculating — $79/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: "$2.3M+", label: "Average annual loss from cloud outages for mid-size SaaS" },
            { stat: "94%", label: "Of SLA claims go unfiled due to lack of documentation" },
            { stat: "<2 min", label: "To generate a full compensation claim report" }
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-extrabold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-sm text-[#8b949e]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$79</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Real-time outage detection for AWS, GCP, Azure",
              "Automated revenue loss calculation",
              "SLA credit estimator with provider rules",
              "One-click compensation claim PDF export",
              "Slack & email alerts during active outages",
              "Unlimited team members"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started — $79/mo
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">7-day free trial. No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the revenue impact calculation work?",
              a: "You input your average revenue per hour (or connect your billing system). When an outage is detected, we multiply your downtime duration by your revenue rate and apply your specific SLA terms to calculate credits owed."
            },
            {
              q: "Which cloud providers are supported?",
              a: "We currently support AWS, Google Cloud, Azure, Cloudflare, and Vercel. We monitor official status pages and third-party uptime sources to detect outages in real time."
            },
            {
              q: "Can I use the reports to actually claim SLA credits?",
              a: "Yes. Our reports are formatted to meet the documentation requirements of major cloud providers' SLA claim processes, including timestamps, affected services, and calculated credit amounts."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Outage Impact Calculator. All rights reserved.
      </footer>
    </main>
  );
}

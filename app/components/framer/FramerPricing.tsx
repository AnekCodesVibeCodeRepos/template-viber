export function FramerPricing() {
  const plans = [
    {
      name: "Starter",
      price: "$50",
      period: "/month",
      description: "Perfect for small teams getting started with AI automation.",
      features: [
        "Up to 5 automated workflows",
        "Basic AI chatbot",
        "Email support",
        "Analytics dashboard",
        "1 integration",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Pro",
      price: "$90",
      period: "/month",
      description: "For growing businesses that need advanced AI capabilities.",
      features: [
        "Unlimited automated workflows",
        "Advanced AI chatbot with training",
        "Priority support",
        "Advanced analytics & reporting",
        "10 integrations",
        "Custom AI model fine-tuning",
        "Dedicated account manager",
      ],
      cta: "Get Started",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with complex needs.",
      features: [
        "Everything in Pro",
        "Custom AI development",
        "On-premise deployment",
        "SLA guarantee",
        "Unlimited integrations",
        "White-label options",
        "24/7 dedicated support",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#04070d] py-24" id="pricing">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60%] w-[120%] -rotate-[13deg] bg-gradient-to-t from-cyan-500/[0.02] to-transparent rounded-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#04070d] px-4 py-1.5">
            <svg className="h-3.5 w-3.5 text-cyan-300" viewBox="0 0 18.531 18.531" fill="currentColor">
              <path d="M 0.219 9.219 C 0.079 9.079 0 8.888 0 8.69 L 0 0 L 8.69 0 C 8.888 0 9.079 0.079 9.219 0.219 L 18.531 9.531 C 18.823 9.823 18.823 10.298 18.531 10.591 L 10.594 18.531 C 10.301 18.823 9.826 18.823 9.533 18.531 Z" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">Pricing</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e4e9f2] sm:text-4xl lg:text-5xl">
            Flexible Plans for <span className="italic font-normal">Everyone</span>
          </h2>
          <p className="max-w-md text-base text-white/40">
            Choose a plan that fits your goals and scale as you grow
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative rounded-2xl border p-8 transition-all ${
                plan.featured
                  ? "border-cyan-500/20 bg-gradient-to-b from-cyan-500/[0.06] to-[#04070d]"
                  : "border-white/[0.06] bg-[#04070d] hover:border-white/10 hover:bg-white/[0.02]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300 px-3 py-1 text-xs font-semibold text-black">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative z-10">
                <p className="mb-2 text-sm font-medium text-white/60">{plan.name}</p>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#d5dbe6]">{plan.price}</span>
                  {plan.period && <span className="text-sm text-white/30">{plan.period}</span>}
                </div>
                <p className="mb-8 text-sm text-white/30">{plan.description}</p>

                <a
                  href="#"
                  className={`mb-8 block w-full rounded-lg py-3 text-center text-sm font-medium transition-all ${
                    plan.featured
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/10 bg-white/[0.03] text-white/80 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/50">
                      <svg className="h-4 w-4 flex-shrink-0 text-cyan-400/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

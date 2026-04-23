import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/monthly-service')({
  component: MonthlyServicePage,
})

function MonthlyServicePage() {
  const plans = [
    {
      name: "Basic Plan",
      price: "95",
      features: [
        "Fluid top-off",
        "Tire pressure checks",
        "Visual inspection",
        "Brake check"
      ],
      featured: false
    },
    {
      name: "Standard Plan",
      price: "120",
      features: [
        "Everything in Basic",
        "Battery test",
        "Belt inspection",
        "Oil change"
      ],
      featured: true
    },
    {
      name: "Premium Plan",
      price: "180",
      features: [
        "Complete maintenance support",
        "Minor repairs",
        "Diagnostics",
        "Emergency calls"
      ],
      featured: false
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <section className="bg-[#f4f7fb] py-16 text-center border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <h1 className="text-4xl font-bold text-[#0d47a1] mb-2">Monthly Service Plans</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Keep your vehicle in better shape with recurring maintenance and inspection support.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`flex flex-col rounded-xl p-8 transition-all text-center bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] ${
                  plan.featured 
                    ? "border-2 border-[#f57c00] md:scale-105 relative z-10" 
                    : ""
                }`}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-[#f57c00] my-4">
                  ${plan.price} <span className="text-lg text-slate-400">/ month</span>
                </div>
                <ul className="text-left space-y-3 mb-8 flex-grow list-disc pl-5 text-slate-600">
                  {plan.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
                <a 
                  href="tel:8036060492"
                  className="w-full py-3 px-6 rounded-lg font-bold text-center bg-[#f57c00] hover:bg-[#cf6800] text-white transition-colors"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-[#f4f7fb]">
        <div className="container mx-auto px-4 max-w-[800px]">
          <h2 className="text-3xl font-bold text-[#0d47a1] mb-6">Why Choose a Monthly Plan?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Monthly service helps catch problems early, supports better vehicle reliability, and gives you a consistent maintenance routine.
            It is a smart choice for busy drivers, families, work vehicles, and anyone who wants fewer surprises from their car.
          </p>

          <h2 className="text-3xl font-bold text-[#0d47a1] mb-6">Need Help Choosing?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The Basic Plan is great for routine checks, the Standard Plan adds more maintenance value, and the Premium Plan is best for
            drivers who want more complete support and emergency help.
          </p>
        </div>
      </section>
    </div>
  )
}

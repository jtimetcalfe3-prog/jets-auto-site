import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative py-24 lg:py-32 overflow-hidden bg-[#0d47a1]"
        style={{
          backgroundImage: 'linear-gradient(rgba(13, 71, 161, 0.88), rgba(13, 71, 161, 0.88)), url("https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative mx-auto px-4 max-w-[1100px]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Mobile Auto Repair Across the Upstate
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-[760px]">
              Jets Auto LLC provides dependable mobile auto repair, diagnostics, maintenance, and after-hours emergency calls
              across Greenville, Anderson, Spartanburg, Laurens, and surrounding Upstate South Carolina areas. We come to you
              to help get your vehicle back on the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-[#f57c00] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#cf6800] transition-colors text-center"
              >
                Schedule Service
              </Link>
              <a 
                href="tel:8036060492" 
                className="inline-block bg-white text-[#0d47a1] px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-colors text-center"
              >
                Call 803-606-0492
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <h2 className="text-3xl font-bold text-[#0d47a1] mb-6">
            Convenient, Honest, Dependable Auto Service
          </h2>
          <p className="max-w-[760px] text-lg text-slate-600 mb-12">
            Car trouble can stop your whole day. Jets Auto LLC offers mobile auto repair and maintenance so you can get
            professional service at your home, workplace, roadside location, or other approved location when possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mobile Service",
                desc: "We bring many repair and maintenance services directly to your location for added convenience."
              },
              {
                title: "Emergency Calls",
                desc: "We offer after-hours emergency calls for urgent vehicle situations when mobile support is possible."
              },
              {
                title: "Wide Service Area",
                desc: "Serving Greenville, Anderson, Spartanburg, Laurens, and surrounding Upstate South Carolina communities."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f4f7fb]">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <h2 className="text-3xl font-bold text-[#0d47a1] mb-12">
            Auto Services We Provide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Diagnostics",
                desc: "We inspect vehicle problems and help identify the cause of warning lights, poor performance, and no-start issues."
              },
              {
                title: "Brake Service",
                desc: "Brake inspections, brake checks, and common brake repairs to help support safe driving."
              },
              {
                title: "Battery, Starter & Alternator",
                desc: "We inspect and service common starting and charging system issues."
              },
              {
                title: "Oil Changes & Maintenance",
                desc: "Routine maintenance helps reduce wear and keep your car in better condition."
              },
              {
                title: "Tune-Ups & Minor Repairs",
                desc: "We handle many common repair and maintenance needs for everyday vehicles."
              },
              {
                title: "Emergency Mobile Calls",
                desc: "When available, we provide urgent after-hours support for customers dealing with sudden car problems."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-transparent hover:border-[#0d47a1] transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0d47a1] text-white text-center">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <h2 className="text-3xl font-bold mb-4 text-white">Need Mobile Auto Repair Today?</h2>
          <p className="text-lg mb-8 opacity-90">Call Jets Auto LLC to schedule service or ask about after-hours emergency availability.</p>
          <a 
            href="tel:8036060492" 
            className="inline-block bg-[#f57c00] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#cf6800] transition-colors shadow-lg"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  )
}

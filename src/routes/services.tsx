import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  const services = [
    {
      title: "Diagnostics",
      desc: "Vehicle scans, warning light checks, no-start troubleshooting, and general issue diagnosis."
    },
    {
      title: "Brake Service",
      desc: "Brake inspections, brake pad service, and common brake-related repairs."
    },
    {
      title: "Battery Service",
      desc: "Battery testing, battery replacement support, and inspection of common battery-related issues."
    },
    {
      title: "Starter & Alternator Service",
      desc: "Inspection and service for common starting and charging system problems."
    },
    {
      title: "Oil Changes",
      desc: "Routine oil changes and maintenance support to help protect engine performance."
    },
    {
      title: "Tune-Ups",
      desc: "Basic tune-up services to help improve engine performance and reliability."
    },
    {
      title: "Fluid Checks & Top-Offs",
      desc: "Inspection and topping off of vehicle fluids as needed during maintenance service."
    },
    {
      title: "Belt & Hose Inspection",
      desc: "Visual inspection of important under-hood components during service visits."
    },
    {
      title: "Tire Pressure Checks",
      desc: "Quick tire pressure inspection as part of maintenance support and monthly plans."
    },
    {
      title: "Visual Vehicle Inspections",
      desc: "General visual inspections to help catch visible issues before they become bigger problems."
    },
    {
      title: "Minor Repairs",
      desc: "Many common minor repairs can be handled on-site depending on the vehicle and issue."
    },
    {
      title: "Emergency Calls",
      desc: "After-hours emergency mobile support is available for urgent situations when service can be performed on location."
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Full-service mobile auto repair and maintenance for many common vehicle issues.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="flex flex-col bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need Help With a Different Car Issue?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            If your problem is not listed here, contact Jets Auto LLC. We handle a wide range of vehicle repair and maintenance needs,
            and we will let you know if the work can be done as a mobile service.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-10 py-4 text-lg font-bold text-white shadow-sm hover:bg-blue-500 transition-all"
          >
            Request Service
          </Link>
        </div>
      </section>
    </div>
  )
}

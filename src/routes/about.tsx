import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">About Jets Auto LLC</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Mobile auto repair built around convenience, dependability, and honest service.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Jets Auto LLC is a mobile auto repair business serving customers throughout the Upstate of South Carolina.
                We help drivers with diagnostics, maintenance, minor repairs, brake service, battery issues, and many other
                common vehicle problems at their location when mobile repair is possible.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Goal</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our goal is to make car repair more convenient for everyday drivers by bringing dependable service directly
                to them. We believe customers deserve clear communication, honest work, and practical solutions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Customers Call Us</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Vehicle problems are stressful and time-consuming. Jets Auto LLC helps take some of that pressure off by
                offering mobile service during regular hours and after-hours emergency call availability for urgent situations.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Area</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We serve Greenville, Anderson, Spartanburg, Laurens, and surrounding Upstate South Carolina areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Ready to experience mobile service?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
              href="tel:8036060492" 
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 transition-all"
            >
              Call 803-606-0492
            </a>
            <button 
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition-all"
            >
              Contact Online
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

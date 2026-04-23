import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    location: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitRequest = useMutation(api.requests.submit)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      await submitRequest({
        name: formData.name,
        phone: formData.phone,
        vehicle: formData.vehicle || undefined,
        location: formData.location || undefined,
        message: formData.message,
      })
      setSubmitted(true)
      setFormData({ name: '', phone: '', vehicle: '', location: '', message: '' })
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex flex-col">
      {/* Page Banner */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">Contact Jets Auto LLC</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Call, email, or send a request for mobile auto repair or monthly maintenance service.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Business</p>
                  <p className="text-xl font-bold text-slate-900">Jets Auto LLC</p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Service Area</p>
                  <p className="text-lg text-slate-700">Greenville, Anderson, Spartanburg, Laurens, and surrounding Upstate areas</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:8036060492" className="text-xl font-bold text-blue-600 hover:text-blue-500">803-606-0492</a>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:truebadeaux@yahoo.com" className="text-lg font-bold text-blue-600 hover:text-blue-500 break-all">truebadeaux@yahoo.com</a>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-lg text-slate-700 font-semibold">8:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Emergency Service</p>
                    <p className="text-lg text-red-600 font-bold">After-hours calls available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Request Service Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Request Service</h2>
              
              {submitted ? (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                  <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Request Received!</h3>
                  <p className="text-lg text-slate-600 mb-8">
                    Thank you. Your request has been received. We will contact you soon.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all"
                        placeholder="803-000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="vehicle" className="block text-sm font-bold text-slate-700 mb-2">Vehicle Make / Model</label>
                      <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all"
                        placeholder="e.g. 2018 Ford F-150"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-bold text-slate-700 mb-2">Your City / Location</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all"
                        placeholder="e.g. Greenville"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Describe the issue</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all resize-none"
                      placeholder="What's going on with your vehicle?"
                    ></textarea>
                  </div>

                  {error && <p className="text-red-600 font-medium text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-blue-200"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

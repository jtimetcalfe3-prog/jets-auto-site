import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  Link,
} from '@tanstack/react-router'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Jets Auto LLC | Mobile Auto Repair in the Upstate of SC',
      },
      {
        name: 'description',
        content: 'Jets Auto LLC provides mobile auto repair, maintenance, diagnostics, and after-hours emergency calls across Greenville, Anderson, Spartanburg, Laurens, and surrounding Upstate South Carolina areas.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  notFoundComponent: () => <div>Route not found</div>,
  component: RootComponent,
})

function RootComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <RootDocument>
      <header className="sticky top-0 z-50 bg-white text-slate-900 shadow-sm border-b border-slate-100">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 max-w-[1100px]">
          <Link to="/" className="text-2xl font-bold tracking-tight text-[#0d47a1]">
            Jets Auto LLC
          </Link>
          
          <button 
            className="md:hidden text-2xl text-[#0d47a1]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white md:relative md:top-0 md:block md:w-auto border-b md:border-none border-slate-100`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <li>
                <Link to="/" className="font-semibold text-slate-700 hover:text-[#f57c00] transition-colors [&.active]:text-[#f57c00]" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="font-semibold text-slate-700 hover:text-[#f57c00] transition-colors [&.active]:text-[#f57c00]" onClick={() => setIsMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/services" className="font-semibold text-slate-700 hover:text-[#f57c00] transition-colors [&.active]:text-[#f57c00]" onClick={() => setIsMenuOpen(false)}>Services</Link>
              </li>
              <li>
                <Link to="/monthly-service" className="font-semibold text-slate-700 hover:text-[#f57c00] transition-colors [&.active]:text-[#f57c00]" onClick={() => setIsMenuOpen(false)}>Monthly Service</Link>
              </li>
              <li>
                <Link to="/contact" className="font-semibold text-slate-700 hover:text-[#f57c00] transition-colors [&.active]:text-[#f57c00]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-[#1f2937] text-slate-300 py-12">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Jets Auto LLC</h2>
            <p className="font-semibold">Mobile Auto Repair Across the Upstate of South Carolina</p>
            <div className="space-y-1 text-sm">
              <p><strong>Service Area:</strong> Greenville, Anderson, Spartanburg, Laurens, and surrounding areas</p>
              <p><strong>Phone:</strong> <a href="tel:8036060492" className="text-[#9ec5ff] hover:underline">803-606-0492</a></p>
              <p><strong>Email:</strong> <a href="mailto:truebadeaux@yahoo.com" className="text-[#9ec5ff] hover:underline">truebadeaux@yahoo.com</a></p>
              <p><strong>Hours:</strong> 8:00 AM - 6:00 PM | After-Hours Emergency Calls Available</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-xs opacity-50">
            &copy; {new Date().getFullYear()} Jets Auto LLC. All rights reserved.
          </div>
        </div>
      </footer>
      <Scripts />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-full bg-slate-50 font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}

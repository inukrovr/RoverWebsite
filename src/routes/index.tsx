import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/rovr logo.png" alt="Rover Logistics" className="w-10 h-10 rounded-lg object-contain" />
            <span className="font-bold text-xl tracking-tight">Rover Logistics</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#why-us" className="hover:text-blue-400 transition-colors">Why Us</a>
            <a href="#jobs" className="hover:text-blue-400 transition-colors">Jobs</a>
          </nav>
          <a
            href="#jobs"
            className="bg-blue-500 hover:bg-blue-400 text-gray-950 font-bold px-5 py-2 rounded-lg transition-colors text-sm"
          >
            Apply Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gray-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 rounded-full px-4 py-1.5 text-blue-400 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Now Hiring · New Braunfels, TX
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
              New Braunfels'
              <br />
              <span className="text-blue-500">Amazon DSP</span>
              <br />
              Partner
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Rover Logistics delivers for Amazon across the Hill Country and beyond. Join a local team that treats drivers right — competitive pay, flexible shifts, and a culture built on respect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#jobs"
                className="bg-blue-500 hover:bg-blue-400 text-gray-950 font-black text-lg px-8 py-4 rounded-xl transition-colors text-center"
              >
                See Open Positions
              </a>
              <a
                href="#about"
                className="border border-gray-600 hover:border-blue-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Deliveries Daily' },
              { value: 'Day & Night', label: 'Shift Options' },
              { value: 'New Braunfels', label: 'Local HQ' },
              { value: 'Amazon DSP', label: 'Certified Partner' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-blue-500">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                Last Mile &amp; Middle Mile
                <br />
                <span className="text-gray-400">Delivery Done Right</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As an Amazon Delivery Service Partner, Rover Logistics operates two critical legs of the delivery network serving Central Texas 24/7.
              </p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Last Mile Delivery</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Our cargo van drivers handle the final leg — residential and business deliveries across New Braunfels and surrounding communities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Middle Mile Transport</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Our box truck drivers move freight between Amazon and USPS stations overnight, keeping the supply chain flowing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/Main.png"
                  alt="Delivery Vehicles"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-500 text-gray-950 rounded-2xl p-5 font-black text-sm shadow-2xl">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section id="why-us" className="py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-3">Why Work With Us</p>
            <h2 className="text-4xl md:text-5xl font-black">More Than Just a Driving Job</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">We're a local company that invests in our people. Here's what sets us apart.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
                title: 'Competitive Pay',
                desc: 'Earn up to $21–$25/hr depending on role and experience, with weekly direct deposit.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
                title: 'Paid Time Off',
                desc: 'Accrue PTO from day one. We believe rest makes better drivers and better people.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                ),
                title: 'Health Benefits',
                desc: 'Medical, dental, and vision coverage available for full-time employees.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
                title: 'Consistent Schedules',
                desc: 'Know your hours in advance. Daytime and overnight shifts available to fit your life.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                ),
                title: 'Locally Owned',
                desc: "We're your neighbors in New Braunfels — not a faceless corporation. Your voice matters here.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ),
                title: 'Fast Hiring',
                desc: 'Quick application process. Get on the road in as little as one week after applying.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="jobs" className="py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-3">Join Our Team</p>
            <h2 className="text-4xl md:text-5xl font-black">Open Positions</h2>
            <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">Two shifts, one mission. Find the schedule that works for you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Job 1 - Last Mile Cargo Van */}
            <div className="bg-gray-900 border border-gray-700 rounded-3xl overflow-hidden flex flex-col hover:border-blue-500/60 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80"
                  alt="Cargo van delivery driver"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-gray-950 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Daytime Shift
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-white mb-1">Last Mile Cargo Van Driver</h3>
                <p className="text-blue-400 font-semibold mb-6 text-sm">DSX9, 1150 Schwab Rd, New Braunfels, TX78132</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Pay', value: '$21 / hr' },
                    { label: 'Shift', value: '4 Days · ~10 hrs' },
                    { label: 'Schedule', value: 'Mon – Sat' },
                    { label: 'Start Time', value: '9:30 AM' },
                  ].map((d) => (
                    <div key={d.label} className="bg-gray-800 rounded-xl p-3">
                      <div className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">{d.label}</div>
                      <div className="text-white font-bold text-sm">{d.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {[
                      'Valid driver\'s license with clean record',
                      'Ability to lift up to 50 lbs',
                      'Smartphone capable of running delivery app',
                      'Pass background check & drug screen',
                      'No CDL required',
                    ].map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-3">Perks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Weekly Pay', 'PTO', 'Health Benefits', 'Uniform Provided', 'Amazon Equipment'].map((perk) => (
                      <span key={perk} className="bg-gray-800 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-700">
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://www.indeed.com/job/amazon-dsp-package-delivery-driver-ed3a847442909c26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-blue-500 hover:bg-blue-400 text-gray-950 font-black text-base py-4 px-6 rounded-xl text-center transition-colors block"
                >
                  Apply Now — Cargo Van Driver
                </a>
              </div>
            </div>

            {/* Job 2 - Middle Mile Box Truck */}
            <div className="bg-gray-900 border border-gray-700 rounded-3xl overflow-hidden flex flex-col hover:border-blue-400/60 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/pallet.png"
                  alt="Person pulling a pallet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-400 text-gray-950 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Overnight Shift
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-white mb-1">Middle Mile Box Truck Driver</h3>
                <p className="text-blue-400 font-semibold mb-6 text-sm">7850 Old Bastrop Rd, New Braunfels, TX78130</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Pay', value: '$22.25/ hr' },
                    { label: 'Shift', value: 'Nights · ~10 hrs' },
                    { label: 'Schedule', value: 'Sun – Thu' },
                    { label: 'Start Time', value: '8:00 PM – 10:00 PM' },
                  ].map((d) => (
                    <div key={d.label} className="bg-gray-800 rounded-xl p-3">
                      <div className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">{d.label}</div>
                      <div className="text-white font-bold text-sm">{d.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {[
                      'Valid driver\'s license — Class C minimum',
                      'Box truck or large vehicle experience preferred',
                      'Ability to lift up to 50 lbs',
                      'Pass background check & drug screen',
                      'Comfortable with overnight hours',
                    ].map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-3">Perks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Weekly Pay', 'Night Differential', 'PTO', 'Health Benefits', 'Fuel Provided'].map((perk) => (
                      <span key={perk} className="bg-gray-800 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-700">
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://www.indeed.com/job/box-truck-delivery-driver-17bce9af27860772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-blue-400 hover:bg-blue-300 text-gray-950 font-black text-base py-4 px-6 rounded-xl text-center transition-colors block"
                >
                  Apply Now — Box Truck Driver
                </a>
              </div>
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-300 rounded-3xl p-8 md:p-12 text-gray-950 text-center">
            <h3 className="text-3xl md:text-4xl font-black mb-3">Ready to Roll?</h3>
            <p className="text-gray-900 text-lg mb-6 max-w-lg mx-auto">
              Join the Rover team and start earning competitive pay as part of Amazon's delivery network in New Braunfels.
            </p>
            <a
              href="#jobs"
              className="inline-block bg-gray-950 hover:bg-gray-800 text-white font-black text-lg px-8 py-4 rounded-xl transition-colors"
            >
              View All Positions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <img src="/ROVR logo.png" alt="Rover Logistics" className="w-8 h-8 rounded-lg object-contain" />
            <span className="font-bold text-gray-300">Rover Logistics</span>
            <span>·</span>
            <span>New Braunfels, TX</span>
          </div>
          <p>© {new Date().getFullYear()} Rover Logistics LLC. Amazon DSP Partner.</p>
        </div>
      </footer>
    </div>
  )
}

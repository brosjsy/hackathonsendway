'use client'

import { ChevronRight, Send, MapPin, Clock, AlertCircle, Lock, Globe, Check, DollarSign, Users, Shield, Star, TrendingUp, Search } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [searchFrom, setSearchFrom] = useState('London')
  const [searchTo, setSearchTo] = useState('Lagos')

  return (
    <main className="min-h-screen bg-white text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-gray-900">
              Sendways <span className="text-sm text-blue-500 font-normal">& Co</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Browse trips</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Post a trip</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Track</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">How it works</a>
            <button className="px-4 py-2 text-gray-700 text-sm">Login</button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 transition font-medium">
              Post a trip
            </button>
            <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
              ?
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full">
              <AlertCircle className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-semibold text-blue-500">Escrow protected · Identity verified</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900">
            Send anything, anywhere,<br />with someone already going.
          </h1>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Travelers carry your package on journeys they are already making. You pay a fraction of courier prices. Money is held safely until it is delivered.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-12 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
                <input 
                  type="text" 
                  value={searchFrom}
                  onChange={(e) => setSearchFrom(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="London"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">To</label>
                <input 
                  type="text"
                  value={searchTo}
                  onChange={(e) => setSearchTo(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Lagos"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">When</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="This week"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Weight</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="5 kg"
                />
              </div>
              <button className="w-full px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition font-semibold flex items-center justify-center gap-2">
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap text-center">
            <div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-orange-500" />
                <span className="font-semibold text-gray-900">4.8 avg traveler rating</span>
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">9 transport modes</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">40+ active corridors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Deliveries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <h2 className="text-xl font-bold text-gray-900">Live deliveries right now</h2>
          </div>
          <p className="text-gray-600 mb-8">Packages moving across the network this minute. The busiest hubs are pulsing.</p>

          {/* Map visualization with routes */}
          <div className="bg-gray-900 rounded-2xl p-6 h-80 relative overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              {/* World map background */}
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#333" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="1000" height="400" fill="#1a1a2e" />
              <rect width="1000" height="400" fill="url(#grid)" opacity="0.1"/>
              
              {/* Routes */}
              <path d="M 200 200 Q 500 100 800 200" stroke="#2AB5C3" strokeWidth="3" fill="none" opacity="0.6" strokeDasharray="20 10" />
              <path d="M 150 250 Q 450 300 750 280" stroke="#2AB5C3" strokeWidth="3" fill="none" opacity="0.4" strokeDasharray="20 10" />
              
              {/* Cities */}
              <circle cx="150" cy="250" r="12" fill="#ffffff" />
              <circle cx="500" cy="200" r="15" fill="#F55200" />
              <circle cx="800" cy="200" r="12" fill="#F55200" />
              <circle cx="250" cy="150" r="10" fill="#2AB5C3" opacity="0.7" />
              
              <text x="160" y="280" fill="#ffffff" fontSize="14" fontWeight="bold">London</text>
              <text x="480" y="230" fill="#F55200" fontSize="14" fontWeight="bold">Hub</text>
            </svg>

            {/* Live stats overlay */}
            <div className="absolute bottom-0 right-0 bg-gray-800/95 backdrop-blur rounded-tl-2xl p-6 text-white">
              <div className="text-4xl font-bold text-gray-100 mb-2">362</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Active deliveries</div>
              <div className="mt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>London → Lagos</span><span className="text-blue-400">108 live</span></div>
                  <div className="flex justify-between"><span>Paris → Dakar</span><span className="text-blue-400">64 live</span></div>
                  <div className="flex justify-between"><span>Dubai → Nairobi</span><span className="text-blue-400">89 live</span></div>
                  <div className="flex justify-between"><span>Toronto → Lagos</span><span className="text-blue-400">47 live</span></div>
                  <div className="flex justify-between"><span>Amsterdam → Accra</span><span className="text-blue-400">39 live</span></div>
                  <div className="flex justify-between"><span>Brussels → Kinshasa</span><span className="text-blue-400">15 live</span></div>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-semibold transition">
                Browse these routes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Every way to travel section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Every way to travel is a way to send</h2>
          <p className="text-gray-600 mb-10">No matter how you're going to your destination, your package can go too.</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Flight', weight: 'up to', amount: '23 kg' },
              { label: 'Train', weight: 'up to', amount: '238 kg' },
              { label: 'Car', weight: 'up to', amount: '50 kg' },
              { label: 'Bus', weight: 'up to', amount: '250 kg' },
              { label: 'Motorbike', weight: 'up to', amount: '8 kg' },
              { label: 'Ferry', weight: 'up to', amount: '500 kg' },
              { label: 'Truck', weight: 'up to', amount: '38 kg' },
              { label: 'Bicycle', weight: 'up to', amount: '', special: true },
              { label: 'Ship', weight: 'up to', amount: '2000 kg' },
              { label: 'Yak boat', weight: 'up to', amount: '15 kg' },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 text-center hover:border-orange-500 transition">
                <div className="font-bold text-gray-900 mb-2">{item.label}</div>
                <div className="text-xs text-gray-600">{item.weight}</div>
                <div className="text-sm font-semibold text-blue-600">{item.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built on infrastructure section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Powered by</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Built on infrastructure you can trust</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Stripe', desc: 'E-commerce payments & identity' },
              { name: 'Supabase', desc: 'Database, auth & realtime' },
              { name: 'Mapbox', desc: 'Maps & route geocoding' },
              { name: 'Aviatianstack', desc: 'Live flight lookup' },
              { name: 'Resend', desc: 'Email & identity digest' },
              { name: 'Fraunhofer', desc: 'Local routing index' },
            ].map((partner, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-gray-900">{partner.name}</div>
                  <div className="text-sm text-gray-600">{partner.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two column section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left side - For travelers */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-4">For travelers</div>
            <h3 className="text-3xl font-bold mb-6">Earn on trips you&apos;re already taking.</h3>
            <ol className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="font-bold text-orange-400 flex-shrink-0">1</span>
                <span>Post your trip</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-orange-400 flex-shrink-0">2</span>
                <span>Match with senders. Agree the trip. Hold capacity for the traveler.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-orange-400 flex-shrink-0">3</span>
                <span>Deliver. The sender gets you. Confirm delivery and release is to you instantly.</span>
              </li>
            </ol>
            <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition font-semibold">
              Open a trip
            </button>
          </div>

          {/* Right side - For senders */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-4">For senders</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Get it there for a fraction of courier prices.</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="font-bold text-blue-500 flex-shrink-0">1</span>
                <span className="text-gray-700">Find a verified traveler whose route fits your request</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-blue-500 flex-shrink-0">2</span>
                <span className="text-gray-700">Pay into escrow. The traveler can't access the paid early</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-blue-500 flex-shrink-0">3</span>
                <span className="text-gray-700">Confirm on arrival. Both of you leave a review</span>
              </li>
            </ol>
            <button className="mt-8 px-6 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-full hover:border-orange-500 transition font-semibold">
              Browse trips
            </button>
          </div>
        </div>
      </section>

      {/* Active corridors section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Active corridors</h2>
            <a href="#" className="text-blue-500 hover:text-blue-600 text-sm font-semibold">See all routes</a>
          </div>
          <p className="text-gray-600 mb-10">Where travelers are moving right now.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { from: 'London', to: 'Lagos', range: '£25-40', color: 'orange' },
              { from: 'Paris', to: 'Dakar', range: '€18-30', color: 'orange' },
              { from: 'Amsterdam', to: 'Accra', range: '€15-28', color: 'orange' },
              { from: 'Dubai', to: 'Nairobi', range: '$15-25', color: 'orange' },
              { from: 'Toronto', to: 'Lagos', range: 'C$30-50', color: 'orange' },
              { from: 'Cairo', to: 'Milan', range: '$12-22', color: 'orange' },
            ].map((corridor, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-500 transition cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-gray-500">per kg</span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">{corridor.from} → {corridor.to}</div>
                  <div className="font-bold text-gray-900">{corridor.range}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Your next trip can pay for itself.</h2>
          <p className="text-lg text-teal-100 mb-8">
            Join the dispersive delivery network. Verified travelers, escrow payment, delivered to you instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition font-semibold">
              Post a trip
            </button>
            <button className="px-8 py-3 bg-white text-teal-700 rounded-full hover:bg-gray-100 transition font-semibold">
              Send a package
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-xl font-bold text-gray-900 mb-2">Sendways & Co</div>
              <p className="text-gray-600 text-sm">Peer-to-peer delivery for dispersed networks</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">Browse trips</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Post a trip</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Trust & safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Newsroom</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">Help center</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Dispute resolution</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Published items</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <p>&copy; 2024 Sendways & Co CAC registered.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900 transition">Terms</a>
              <a href="#" className="hover:text-gray-900 transition">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

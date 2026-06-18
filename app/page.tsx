'use client'

import { ChevronRight, Send, MessageSquare, Shield, Zap, Users, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Send className="w-8 h-8 text-primary" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sendways
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition">Pricing</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition">Contact</a>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-20 right-0 w-96 h-96 opacity-20" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="180" stroke="#2AB5C3" strokeWidth="2" fill="none" opacity="0.5" />
            <circle cx="200" cy="200" r="120" stroke="#F55200" strokeWidth="2" fill="none" opacity="0.3" />
            <path d="M 100 200 Q 200 100 300 200" stroke="#2AB5C3" strokeWidth="3" fill="none" opacity="0.4" strokeDasharray="10 5" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
            <span className="text-sm font-semibold text-secondary flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Next Generation Communication
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-balance">
              Communication Made
            </span>
            {' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Effortless
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Streamline your team&apos;s messaging with our intuitive platform. Connect, collaborate, and communicate seamlessly across all channels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 group">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
            <button className="px-8 py-4 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/5 transition">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-border/30">
            <div>
              <p className="text-3xl font-bold text-primary mb-1">10K+</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary mb-1">99%</p>
              <p className="text-sm text-muted-foreground">Uptime SLA</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-1">24/7</p>
              <p className="text-sm text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep your team connected and productive
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'Real-Time Messaging',
                description: 'Instant message delivery with read receipts and typing indicators'
              },
              {
                icon: Users,
                title: 'Team Collaboration',
                description: 'Create channels, share files, and collaborate seamlessly'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'End-to-end encryption and advanced security features'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized for speed with sub-second message delivery'
              },
              {
                icon: Send,
                title: 'Multiple Channels',
                description: 'Email, SMS, Push, and more in one unified platform'
              },
              {
                icon: Users,
                title: 'API Integration',
                description: 'Simple APIs for seamless third-party integration'
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl border border-border/30 bg-card/30 hover:bg-card/60 hover:border-primary/50 transition duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sign Up',
                description: 'Create your account and set up your workspace in seconds'
              },
              {
                step: '02',
                title: 'Invite Team',
                description: 'Add team members and organize them into channels'
              },
              {
                step: '03',
                title: 'Start Communicating',
                description: 'Begin messaging and collaborating with your team'
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-8">
                    <ChevronRight className="w-8 h-8 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your team&apos;s needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$29',
                period: 'per month',
                features: [
                  'Up to 5 team members',
                  '1GB storage',
                  'Basic support',
                  'Email & SMS channels'
                ],
                highlighted: false
              },
              {
                name: 'Professional',
                price: '$79',
                period: 'per month',
                features: [
                  'Up to 50 team members',
                  '100GB storage',
                  'Priority support',
                  'All communication channels',
                  'Advanced analytics',
                  'Custom integrations'
                ],
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'contact sales',
                features: [
                  'Unlimited team members',
                  'Unlimited storage',
                  '24/7 dedicated support',
                  'White-label solution',
                  'Custom features',
                  'SLA guarantee'
                ],
                highlighted: false
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl border transition duration-300 ${
                  plan.highlighted
                    ? 'border-secondary bg-card/60 ring-2 ring-secondary/30 scale-105'
                    : 'border-border/30 bg-card/30 hover:border-primary/50'
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block mb-4 px-3 py-1 bg-secondary/20 border border-secondary/40 rounded-full">
                    <span className="text-sm font-semibold text-secondary">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                    plan.highlighted
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                      : 'border border-primary/30 text-primary hover:bg-primary/5'
                  }`}
                >
                  Get Started
                </button>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using Sendways to streamline their messaging
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 group">
                Start Your Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-4 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/5 transition">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Send className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">Sendways</span>
              </div>
              <p className="text-muted-foreground text-sm">Communication made effortless</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">&copy; 2024 Sendways. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">GitHub</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

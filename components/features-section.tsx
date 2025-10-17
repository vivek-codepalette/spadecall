import React from 'react'
import { Zap, Shield, BarChart3, Layers, Globe, CreditCard } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process payments in milliseconds with our optimized infrastructure built for speed and reliability.',
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your data is protected with enterprise-grade encryption and compliance with global security standards.',
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Methods',
    description: 'Accept credit cards, digital wallets, and local payment methods from customers worldwide.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track your revenue, conversion rates, and customer insights with powerful analytics dashboard.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Accept payments in 135+ currencies and expand your business to international markets seamlessly.',
  },
  {
    icon: Layers,
    title: 'Easy Integration',
    description: 'Get started in minutes with our simple API and comprehensive documentation for developers.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 md:text-5xl">
            Everything you need to accept payments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for startups and growing businesses. Get all the tools you need to manage payments, subscriptions, and revenue.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl border bg-card p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


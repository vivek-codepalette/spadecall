import React from 'react'

const stats = [
  { value: '99.9%', label: 'Uptime guarantee' },
  { value: '150+', label: 'Countries supported' },
  { value: '$2B+', label: 'Payments processed' },
  { value: '50ms', label: 'Average response time' },
]

export default function StatsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


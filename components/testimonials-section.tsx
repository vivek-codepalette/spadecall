import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO at TechFlow',
    content: 'Switching to this payment platform was the best decision we made. Setup took less than an hour and our conversion rates increased by 30%.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder of ShopLocal',
    content: 'The analytics dashboard gives us insights we never had before. We can finally understand our revenue streams in real-time.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'CTO at CloudSpace',
    content: 'Developer experience is outstanding. The API documentation is clear, and we had our integration running in production within a day.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 md:text-5xl">
            Loved by startups worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of companies that trust us with their payment processing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-card p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-primary font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


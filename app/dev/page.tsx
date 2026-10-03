import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { BlogCard } from '@/components/ui/BlogCard'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { Code, Globe, Wrench } from 'lucide-react'

export default function DevPage() {
  return (
    <div className="min-h-screen bg-[--color-bg-light]">
      {/* Typography */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold mb-8 border-b pb-4">Typography</h2>
        <div className="space-y-4">
          <p className="font-display text-9xl">Anton Display</p>
          <p className="font-body text-7xl font-extrabold">Jakarta 800</p>
          <p className="font-body text-5xl font-bold">Jakarta 700</p>
          <p className="font-body text-3xl font-semibold">Jakarta 600</p>
          <p className="font-body text-xl font-medium">Jakarta 500 — body large</p>
          <p className="font-body text-base">Jakarta 400 — default body text</p>
          <p className="font-body text-sm text-[--color-text-muted]">Jakarta 400 — muted small</p>
          <p className="font-inter text-base">Inter 400 — alternate body</p>
        </div>
      </SectionWrapper>

      {/* Colors */}
      <SectionWrapper variant="light">
        <h2 className="text-2xl font-bold mb-8 border-b pb-4">Brand Colors</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { label: 'Navy', bg: '#061A3A', text: '#fff' },
            { label: 'Blue', bg: '#0878F9', text: '#fff' },
            { label: 'Royal', bg: '#0754D8', text: '#fff' },
            { label: 'Cyan', bg: '#11C5F5', text: '#000' },
            { label: 'Slate', bg: '#566274', text: '#fff' },
            { label: 'White', bg: '#FFFFFF', text: '#000' },
            { label: 'Lime', bg: '#cff601', text: '#000' },
            { label: 'BG Light', bg: '#f8f7f4', text: '#000' },
          ].map(({ label, bg, text }) => (
            <div
              key={label}
              className="w-24 h-24 rounded-md flex items-end p-2 shadow-card"
              style={{ backgroundColor: bg, color: text }}
            >
              <span className="text-xs font-medium">{label}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Buttons */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold mb-8 border-b pb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <Button href="/contact">Primary (link)</Button>
          <Button href="/services" variant="secondary">
            Secondary
          </Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary" isLoading>
            Loading
          </Button>
        </div>
        <div className="bg-[--color-bg-navy] p-6 rounded-md flex flex-wrap gap-4">
          <Button variant="outline">Outline on dark</Button>
          <Button>Primary on dark</Button>
        </div>
      </SectionWrapper>

      {/* Badges */}
      <SectionWrapper variant="light">
        <h2 className="text-2xl font-bold mb-8 border-b pb-4">Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="cyan">Cyan</Badge>
          <Badge variant="green">Green</Badge>
          <Badge variant="yellow">Yellow</Badge>
          <Badge variant="purple">Purple</Badge>
        </div>
      </SectionWrapper>

      {/* Service Cards */}
      <SectionWrapper>
        <h2 className="text-2xl font-bold mb-8 border-b pb-4">Service Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServiceCard
            name="iOS App Development"
            href="/services/ios-app-development"
            icon={<Code size={18} />}
            description="Native iOS apps built with Swift and SwiftUI."
          />
          <ServiceCard
            name="WordPress Development"
            href="/services/wordpress-development"
            icon={<Globe size={18} />}
            description="Custom WordPress themes and plugin development."
          />
          <ServiceCard
            name="Website Maintenance"
            href="/services/website-maintenance"
            icon={<Wrench size={18} />}
            description="Ongoing support, updates, and monitoring."
          />
        </div>
        <h3 className="text-lg font-semibold mt-8 mb-4">Compact variant</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg">
          <ServiceCard name="iOS App Development" href="#" variant="compact" />
          <ServiceCard name="Android App Development" href="#" variant="compact" />
          <ServiceCard name="Web App Development" href="#" variant="compact" />
        </div>
      </SectionWrapper>

      {/* Blog Cards */}
      <SectionWrapper variant="light">
        <h2 className="text-2xl font-bold mb-8 border-b pb-4">Blog Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard
            title="How We Build Scalable Next.js Agency Sites"
            excerpt="A walkthrough of our static-first architecture for agency websites using Next.js and Cloudflare."
            slug="nextjs-agency-site"
            date="2026-10-01"
            author="Shardwise"
            tags={['Next.js', 'Architecture']}
          />
          <BlogCard
            title="Shopify vs Custom Development: Which Is Right for You?"
            excerpt="We compare the tradeoffs of Shopify and custom-built e-commerce for growing businesses."
            slug="shopify-vs-custom"
            date="2026-09-15"
            author="Shardwise"
            tags={['Shopify', 'E-commerce']}
          />
          <BlogCard
            title="What Is AEO and Why It Matters for Your Business"
            excerpt="Answer Engine Optimization is the next frontier of SEO. Here is what you need to know."
            slug="what-is-aeo"
            date="2026-09-01"
            author="Shardwise"
            tags={['SEO', 'AEO']}
          />
        </div>
      </SectionWrapper>

      {/* Animated Text */}
      <SectionWrapper variant="navy">
        <h2 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4 text-white">
          Animated Text
        </h2>
        <AnimatedText as="h1" className="font-display text-6xl text-white" delay={0}>
          We Build Digital Products
        </AnimatedText>
        <AnimatedText as="p" className="text-xl text-[--accent-cyan] mt-4" delay={150}>
          Websites, apps, and experiences that scale.
        </AnimatedText>
        <div className="mt-8 flex gap-4">
          <AnimatedText as="span" delay={300}>
            <Button>Start a Project</Button>
          </AnimatedText>
          <AnimatedText as="span" delay={400}>
            <Button variant="outline">View Services</Button>
          </AnimatedText>
        </div>
      </SectionWrapper>
    </div>
  )
}

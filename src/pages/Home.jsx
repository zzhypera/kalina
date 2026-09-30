import { ArrowRight, BookOpen, HeartHandshake, Mountain, ScrollText } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import InfoCard from '../components/InfoCard'

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-overlay">
          <span className="eyebrow">Digital Kabilin · Group 3</span>
          <h1>Kalinga</h1>
          <p className="hero-subtitle">Cordillera</p>
          <p className="hero-copy">
            A digital heritage prototype exploring Kalinga culture, knowledge, identity,
            and the living communities of the Cordillera.
          </p>
          <Link className="button primary" to="/community">
            Explore the Story <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <div className="weave" aria-hidden="true" />

      <section className="intro-section container">
        <SectionTitle
          eyebrow="Our purpose"
          title="Rooted in heritage. Alive today."
          text="Digital Kabilin uses Information Technology as a way to document, organize, and share Indigenous cultural heritage while keeping accuracy, respect, and community context at the center."
        />
        <div className="card-grid four">
          <InfoCard icon={<Mountain />} title="Place" text="Explore community, geography, and the relationship between people and place." />
          <InfoCard icon={<BookOpen />} title="Knowledge" text="Discover language, oral traditions, livelihood, and environmental knowledge." />
          <InfoCard icon={<ScrollText />} title="Heritage" text="Document history, traditions, arts, crafts, clothing, music, and food." />
          <InfoCard icon={<HeartHandshake />} title="Living Culture" text="Understand Indigenous communities as living, changing communities today." />
        </div>
      </section>

      <section className="feature-band">
        <div className="container split">
          <div>
            <span className="eyebrow">Featured</span>
            <h2>A digital space for cultural heritage</h2>
            <p>
              Browse the community profile, cultural heritage, language and Indigenous knowledge,
              present-day life, and interactive digital heritage features.
            </p>
          </div>
          <Link className="button light-button" to="/digital-heritage">
            Open Digital Heritage <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}
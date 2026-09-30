import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import InfoCard from '../components/InfoCard'
import { heritageTopics, heritageHighlights, heritageNote } from '../data/heritage'

export default function Heritage() {
  return (
    <>
      <PageHero
        eyebrow="History & Cultural Heritage"
        title="A heritage that continues"
        text="Document history, customs, traditions, arts, and cultural expressions with context and care."
        image="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="container page-section">
        <SectionTitle
          eyebrow="Heritage themes"
          title="Stories, practices, and expressions"
          text="Each topic below is a research area for the group. Replace the prototype descriptions with verified findings."
        />
        <div className="card-grid">
          {heritageTopics.map(item => <InfoCard key={item.title} title={item.title} text={item.text} />)}
        </div>

        <div className="heritage-highlight">
          <div>
            <span className="eyebrow">Explore</span>
            <h2>Research areas</h2>
          </div>
          <div className="tag-list">
            {heritageHighlights.map(item => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div className="note-box warning">
          <strong>Ethical reminder</strong>
          <p>{heritageNote}</p>
        </div>
      </section>
    </>
  )
}
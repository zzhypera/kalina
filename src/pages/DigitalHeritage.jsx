import { Image, Map, Clock3, BarChart3, PlayCircle, MousePointer2 } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Gallery from '../components/Gallery'
import Timeline from '../components/Timeline'
import MapPreview from '../components/MapPreview'
import { gallery, galleryNote } from '../data/gallery'
import { timeline } from '../data/timeline'

export default function DigitalHeritage() {
  const features = [
    [<Image />, 'Photo Gallery', 'Organize verified and properly credited images.'],
    [<Map />, 'Interactive Map', 'Show the geographic context of the community.'],
    [<Clock3 />, 'Digital Timeline', 'Connect historical periods and cultural change.'],
    [<BarChart3 />, 'Infographics', 'Turn verified information into accessible visuals.'],
    [<PlayCircle />, 'Video / Audio', 'Add approved stories, recordings, or educational media.'],
    [<MousePointer2 />, 'Interactive Features', 'Create respectful ways to explore and learn.']
  ]

  return (
    <>
      <div className="digital-hero">
        <div className="container">
          <span className="eyebrow">Digital Heritage</span>
          <h1>Preserving the past,<br />creating access for the future.</h1>
          <p>Interactive features turn research into an experience while keeping source credits and cultural ethics visible.</p>
        </div>
      </div>

      <section className="container page-section">
        <SectionTitle eyebrow="Digital features" title="Explore the prototype" />
        <div className="feature-grid">
          {features.map(([icon, title, text]) => (
            <div className="feature-tile" key={title}>
              <div className="card-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="digital-block">
          <SectionTitle eyebrow="Interactive map" title="Where is Kalinga?" text="Prototype map visualization. Replace with a verified geographic map and appropriate attribution." />
          <MapPreview />
        </div>

        <div className="digital-block">
          <SectionTitle eyebrow="Digital timeline" title="Key periods to research" />
          <Timeline items={timeline} />
        </div>

        <div className="digital-block">
          <SectionTitle eyebrow="Gallery" title="Visual heritage" text={galleryNote} />
          <Gallery items={gallery} />
        </div>
      </section>
    </>
  )
}
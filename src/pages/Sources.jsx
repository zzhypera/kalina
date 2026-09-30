import { ExternalLink, ShieldCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { sources, ethics } from '../data/sources'

export default function Sources() {
  return (
    <>
      <PageHero
        eyebrow="Sources & Acknowledgments"
        title="Research with responsibility"
        text="Keep references, media credits, interview acknowledgments, and contributor information transparent."
        image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="container page-section">
        <SectionTitle
          eyebrow="References"
          title="Where the information comes from"
          text="The prototype includes starting points only. Add every source actually used by the group and verify its relevance before submission."
        />
        <div className="source-list">
          {sources.map(source => (
            <article className="source-card" key={source.name}>
              <div>
                <span className="eyebrow">Reference</span>
                <h3>{source.name}</h3>
                <p>{source.description}</p>
              </div>
              {source.url && (
                <a href={source.url} target="_blank" rel="noreferrer" className="source-link">
                  Visit source <ExternalLink size={15} />
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="ethics-panel">
          <div className="ethics-heading">
            <ShieldCheck size={28} />
            <div>
              <span className="eyebrow">Ethical requirements</span>
              <h2>Document with care</h2>
            </div>
          </div>
          <ul>
            {ethics.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="acknowledgments">
          <h2>Acknowledgments</h2>
          <p>Add community members, cultural workers, interview participants, photographers, researchers, and other contributors here after obtaining appropriate permission.</p>
        </div>
      </section>
    </>
  )
}
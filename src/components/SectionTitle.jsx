export default function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className={light ? 'section-title light' : 'section-title'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
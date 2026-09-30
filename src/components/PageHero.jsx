export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <div className="page-hero" style={image ? { backgroundImage: `url(${image})` } : undefined}>
      <div className="page-hero-overlay">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}
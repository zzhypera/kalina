export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <article className="timeline-item" key={item.title}>
          <div className="timeline-dot">{index + 1}</div>
          <div>
            <span className="timeline-period">{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
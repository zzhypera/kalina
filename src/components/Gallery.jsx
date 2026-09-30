import { useState } from 'react'

export default function Gallery({ items }) {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Place', 'Community', 'Craft']
  const visible = filter === 'All' ? items : items.filter(item => item.type === filter)

  return (
    <div>
      <div className="filter-row">
        {filters.map(item => (
          <button
            key={item}
            className={filter === item ? 'filter active' : 'filter'}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {visible.map(item => (
          <figure className="gallery-item" key={item.title}>
            <img src={item.image} alt={item.title} />
            <figcaption>
              <span>{item.type}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
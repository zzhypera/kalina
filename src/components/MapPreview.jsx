import { MapPin } from 'lucide-react'

export default function MapPreview() {
  return (
    <div className="map-preview">
      <div className="map-shape shape-one" />
      <div className="map-shape shape-two" />
      <div className="map-pin pin-one"><MapPin size={18} /></div>
      <div className="map-pin pin-two"><MapPin size={18} /></div>
      <div className="map-label">Kalinga</div>
      <div className="map-caption">Cordillera Administrative Region · Philippines</div>
    </div>
  )
}
import React from "react";

import { MapPin, Users, Languages, Map } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import InfoCard from '../components/InfoCard'
import MapPreview from '../components/MapPreview'
import { communityInfo, communityFacts } from '../data/community'

export default function Community() {
  const icons = [<MapPin />, <Users />, <Languages />, <Map />]

  return (
    <>
      <PageHero
        eyebrow="The Community"
        title={communityInfo.title}
        text={communityInfo.subtitle}
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85"
      />

       <section className="container page-section">
  <SectionTitle
    eyebrow="Profile & Identity"
    title="Who are the Kalinga people?"
    text={communityInfo.overview}
  />

  <div className="card-grid four">
    {communityFacts.map((fact, i) => (
      <InfoCard
        key={fact.label}
        icon={icons[i]}
        title={fact.label}
        text={fact.value}
      />
    ))}
  </div>

  <div className="split content-block">
    <div>
      <span className="eyebrow">Identity</span>
      <h2>Community, place, and continuity</h2>
      {communityInfo.identity.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>

    <div className="map-card">
      <iframe
        className="map-frame"
        title="Map centered on Kalinga Province, Philippines"
        src="https://www.openstreetmap.org/export/embed.html?bbox=120.75%2C16.75%2C121.95%2C18.05&layer=mapnik&marker=17.45%2C121.31"
        loading="lazy"
      />

      <div className="map-card-footer">
        <span>Kalinga Province · Cordillera Administrative Region</span>
        <a
          href="https://www.openstreetmap.org/?mlat=17.45&mlon=121.31#map=9/17.45/121.31"
          target="_blank"
          rel="noreferrer"
        >
          View larger map ↗
        </a>
      </div>

      <p className="map-attribution">
        Map data ©{" "}
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
          OpenStreetMap contributors
        </a>
      </p>
    </div>
  </div>

  <div className="note-box">
    <strong>Research note</strong>
    <p>{communityInfo.note}</p>
  </div>
</section>
    </>
  )
}
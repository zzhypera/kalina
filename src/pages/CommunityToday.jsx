
import React from "react";
import {
  GraduationCap,
  RefreshCw,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import InfoCard from "../components/InfoCard";

const topics = [
  {
    icon: <UsersRound />,
    title: "Present-day life",
    text: "Research contemporary community life and the ways traditions continue alongside social and economic change.",
  },
  {
    icon: <GraduationCap />,
    title: "Education & transmission",
    text: "Document how knowledge and cultural practices are taught, remembered, and passed to younger generations.",
  },
  {
    icon: <RefreshCw />,
    title: "Contemporary practices",
    text: "Show cultural continuity as well as adaptation, innovation, and new forms of expression.",
  },
  {
    icon: <ShieldCheck />,
    title: "Preservation & revitalization",
    text: "Identify documented initiatives, community efforts, and challenges connected to cultural preservation.",
  },
];

export default function CommunityToday() {
  return (
    <>
      <PageHero
        eyebrow="The Community Today"
        title="Living heritage, present tense"
        text="Present-day Kalinga communities are not only subjects of history—they are living communities shaping their future."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="container page-section">
        <SectionTitle
          eyebrow="Today"
          title="Culture continues to change and adapt"
          text="Use this page to connect historical heritage with current community realities and verified preservation efforts."
        />

        <div className="card-grid four">
          {topics.map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>

        <div className="today-panel">
          <h2>Challenges to research</h2>

          <ul>
            <li>Access to reliable and community-grounded information</li>
            <li>Transmission of knowledge between generations</li>
            <li>Documentation and responsible digital preservation</li>
            <li>
              Balancing public education with cultural privacy and restrictions
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}



import React from "react";
import { Languages, Sprout, Volume2, Hammer, Leaf } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import InfoCard from "../components/InfoCard";
import { knowledgeAreas } from "../data/language";

const icons = [Languages, Volume2, Sprout, Leaf, Hammer];

export default function LanguageKnowledge() {
  return (
    <>
      <PageHero
        eyebrow="Language & Indigenous Knowledge"
        title="Words, wisdom, and living knowledge"
        text="Explore language, oral traditions, livelihood, environmental knowledge, and traditional technologies."
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="container page-section">
        <SectionTitle
          eyebrow="Knowledge systems"
          title="Knowledge passed across generations"
          text="This section is designed for carefully researched content that recognizes Indigenous knowledge as dynamic and community-held."
        />

        <div className="card-grid">
          {knowledgeAreas.map((item, index) => {
            const Icon = icons[index];

            return (
              <InfoCard
                key={item.title}
                icon={<Icon />}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>

        <div className="quote-panel">
          <span className="eyebrow">Digital preservation</span>
          <h2>Document with context, not just content.</h2>
          <p>
            A digital heritage project should explain where information came
            from, who may share it, and why it matters to the community.
          </p>
        </div>
      </section>
    </>
  );
};


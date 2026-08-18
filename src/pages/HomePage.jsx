import React from 'react';
import Hero from '../components/Hero';
import AITwinPlayground from '../components/AITwinPlayground';
import ProjectGrid from '../components/ProjectGrid';
import SkillsGrid from '../components/SkillsGrid';
import EducationTimeline from '../components/EducationTimeline';
import FAQSection from '../components/FAQSection';
import ContactCTA from '../components/ContactCTA';
import AITwinChatWidget from '../components/AITwinChatWidget';

export default function HomePage({ onOpenContact, onOpenBooking }) {
  return (
    <div className="min-h-screen">
      <Hero onOpenContact={onOpenContact} onOpenBooking={onOpenBooking} />
      <AITwinPlayground />
      <ProjectGrid />
      <SkillsGrid />
      <EducationTimeline />
      <FAQSection />
      <ContactCTA onOpenContact={onOpenContact} onOpenBooking={onOpenBooking} />
      <AITwinChatWidget />
    </div>
  );
}

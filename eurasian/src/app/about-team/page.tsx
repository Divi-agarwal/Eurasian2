import TeamMemberCard from "@/components/about/team-member-card";
import '@/styles/about-team.css';

const teamMembers = [
  {
    name: "Dr. Eleanor Vance",
    title: "Chief Security Architect",
    expertise: ["Cybersecurity Strategy", "AI Threat Modeling", "Cryptography"],
    imageUrl: "https://placehold.co/128x128.png",
    bio: "Eleanor leads our research and development, pioneering next-generation security solutions with over 20 years of experience.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Chen",
    title: "Head of Operations",
    expertise: ["Incident Response", "Security Operations", "Team Leadership"],
    imageUrl: "https://placehold.co/128x128.png",
    bio: "Marcus ensures the seamless operation of our security platform and rapid response to any emerging threats.",
    linkedin: "#",
  },
  {
    name: "Aisha Khan",
    title: "Lead Product Designer",
    expertise: ["User Experience (UX)", "Interface Design (UI)", "Security Software"],
    imageUrl: "https://placehold.co/128x128.png",
    bio: "Aisha is passionate about creating intuitive and elegant user experiences that make complex security accessible to everyone.",
    twitter: "#",
  },
   {
    name: "Robert Smith",
    title: "Principal Software Engineer",
    expertise: ["Backend Systems", "Scalable Architectures", "Data Security"],
    imageUrl: "https://placehold.co/128x128.png",
    bio: "Robert is the mastermind behind our robust and scalable backend, ensuring platform reliability and performance.",
    linkedin: "#",
  },
  {
    name: "Olivia Davis",
    title: "Customer Success Manager",
    expertise: ["Client Relations", "Onboarding", "Technical Support"],
    imageUrl: "https://placehold.co/128x128.png",
    bio: "Olivia is dedicated to ensuring our clients achieve maximum value and satisfaction from SecureBase.",
    linkedin: "#",
  },
  {
    name: "James Wilson",
    title: "Marketing Director",
    expertise: ["Brand Strategy", "Digital Marketing", "Content Creation"],
    imageUrl: "https://placehold.co/128x128.png",
    bio: "James spearheads our efforts to communicate the value and vision of SecureBase to the world.",
    linkedin: "#",
    twitter: "#",
  },
];

export default function AboutTeamPage() {
  return (
    <div className="about-team-container">
      <section className="about-team-section-center">
        <h1 className="about-team-title">Meet Our Team</h1>
        <p className="about-team-description">
          The dedicated professionals behind SecureBase, committed to your digital safety and peace of mind.
        </p>
      </section>

      <section className="about-team-grid">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </section>
    </div>
  );
}

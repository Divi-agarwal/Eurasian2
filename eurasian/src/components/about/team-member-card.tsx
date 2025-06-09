import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { LinkedinIcon, TwitterIcon, BriefcaseIcon } from "lucide-react";
import '../../styles/team-member-card.css'

interface TeamMemberCardProps {
  name: string;
  title: string;
  expertise: string[];
  imageUrl: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

export default function TeamMemberCard({ name, title, expertise, imageUrl, bio, linkedin, twitter }: TeamMemberCardProps) {
  return (
    <Card className="team-card">
      <CardHeader className="team-card-header">
        <Image
          src={imageUrl}
          alt={name}
          width={128}
          height={128}
          className="team-card-img"
          data-ai-hint="person professional"
        />
        <CardTitle className="team-card-title">{name}</CardTitle>
        <CardDescription className="team-card-role">
          <BriefcaseIcon className="team-card-role-icon" /> {title}
        </CardDescription>
      </CardHeader>
      <CardContent className="team-card-content">
        <p className="team-card-bio">{bio}</p>
        <div className="team-card-expertise">
          <h4 className="team-card-expertise-title">Expertise:</h4>
          <div className="team-card-expertise-list">
            {expertise.map((skill, index) => (
              <span key={index} className="team-card-skill">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="team-card-socials">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="team-card-social-link">
              <LinkedinIcon className="team-card-social-icon" />
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="team-card-social-link">
              <TwitterIcon className="team-card-social-icon" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

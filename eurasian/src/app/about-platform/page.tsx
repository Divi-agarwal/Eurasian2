import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import '@/styles/about-platform.css';

export default function AboutPlatformPage() {
  return (
    <div className="about-platform-container">
      <section className="about-platform-section-center">
        <h1 className="about-platform-title">About SecureBase Platform</h1>
        <p className="about-platform-description">
          Discover the core principles, innovative technology, and unwavering commitment that define SecureBase.
        </p>
      </section>

      <section>
        <Card className="about-platform-card-shadow">
          <CardHeader>
            <CardTitle className="about-platform-card-title">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="about-platform-card-content">
            <p>
              At SecureBase, our mission is to provide unparalleled security solutions that empower individuals and businesses to operate with confidence in an increasingly complex digital world. We believe that robust security should be accessible, elegant, and seamlessly integrated into your daily operations.
            </p>
            <p>
              We are dedicated to staying ahead of emerging threats through continuous innovation, leveraging the power of artificial intelligence and machine learning to deliver proactive and adaptive protection. Our platform is built on a foundation of trust, transparency, and a deep understanding of our clients&apos; needs.
            </p>
          </CardContent>
        </Card>
      </section>
      
      <section className="about-platform-grid">
        <div>
            <h2 className="about-platform-section-title">Platform Functionality</h2>
            <div className="about-platform-card-content">
                <p>SecureBase offers a comprehensive suite of security features designed to protect your most valuable assets:</p>
                <ul className="about-platform-list">
                    <li><strong>Advanced Threat Detection:</strong> Utilizing AI-powered algorithms to identify and neutralize threats in real-time.</li>
                    <li><strong>Data Encryption &amp; Privacy:</strong> State-of-the-art encryption protocols to ensure your data remains confidential.</li>
                    <li><strong>Secure Access Control:</strong> Granular control over user permissions and access levels.</li>
                    <li><strong>Continuous Monitoring:</strong> 24/7 surveillance of your systems to detect and respond to suspicious activity.</li>
                    <li><strong>Compliance &amp; Reporting:</strong> Tools to help you meet industry regulations and generate comprehensive security reports.</li>
                    <li><strong>User-Friendly Interface:</strong> An intuitive dashboard that makes managing your security simple and efficient.</li>
                </ul>
            </div>
        </div>
        <div className="about-platform-image-center">
            <Image 
                src="" 
                alt="Secure Platform Interface" 
                width={500} 
                height={250} 
                className="about-platform-image"
                data-ai-hint="technology security"
            />
        </div>
      </section>

      <section>
        <Card className="bg-primary text-primary-foreground about-platform-card-shadow">
          <CardHeader>
            <CardTitle className="about-platform-card-title">Why Choose SecureBase?</CardTitle>
          </CardHeader>
          <CardContent className="about-platform-card-content">
            <p>
              Choosing SecureBase means investing in peace of mind. Our platform is more than just software; it&apos;s a commitment to your security. We combine sophisticated technology with a human-centric approach, ensuring that you receive not only the best protection but also the support and guidance you need.
            </p>
            <ul className="about-platform-list">
                <li>Proactive defense mechanisms</li>
                <li>Scalable solutions for growing needs</li>
                <li>Expert support team</li>
                <li>Commitment to ethical practices</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

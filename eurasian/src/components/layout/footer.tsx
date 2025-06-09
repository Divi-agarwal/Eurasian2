import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="my-footer">
      <Separator />
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} SecureBase. All rights reserved.
        </p>
        <nav className="footer-nav">
          <Link href="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}

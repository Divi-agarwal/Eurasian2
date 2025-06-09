import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import '@/styles/support-faq.css';

const faqItems = [
	{
		question: "What is SecureBase?",
		answer: "SecureBase is a comprehensive security platform designed to protect digital assets for individuals and businesses. We offer advanced threat detection, data encryption, and secure access control among other features.",
	},
	{
		question: "How do I reset my password?",
		answer: "You can reset your password by navigating to the login page and clicking the &apos;Forgot Password&apos; link. Follow the on-screen instructions to receive a password reset email.",
	},
	{
		question: "What are the system requirements for SecureBase?",
		answer: "SecureBase is a web-based platform and can be accessed from any modern web browser. For specific integrations or on-premise solutions, please refer to our detailed documentation or contact support.",
	},
	{
		question: "How does SecureBase handle my data privacy?",
		answer: "We take data privacy very seriously. SecureBase employs state-of-the-art encryption and adheres to strict data protection regulations. For more details, please review our Privacy Policy.",
	},
	{
		question: "What payment methods do you accept?",
		answer: "We accept major credit cards (Visa, MasterCard, American Express) and bank transfers for enterprise plans. Please visit our pricing page or contact sales for more information.",
	},
	{
		question: "How can I contact support?",
		answer: "You can contact our support team through the &apos;Feedback&apos; form on our website, or by emailing support@securebase.example.com. Pro and Enterprise plan users have access to priority support channels.",
	},
];

export default function SupportFaqPage() {
	return (
		<div className="support-faq-container">
			<section className="support-faq-section-center">
				<h1 className="support-faq-title">Support & FAQ</h1>
				<p className="support-faq-description">
					Find answers to common questions about SecureBase. If you need further assistance, please don&apos;t hesitate to contact us.
				</p>
			</section>

			<section className="support-faq-accordion-section">
				<Accordion type="single" collapsible className="support-faq-accordion">
					{faqItems.map((item, index) => (
						<AccordionItem value={`item-${index}`} key={index}>
							<AccordionTrigger className="support-faq-trigger">
								{item.question}
							</AccordionTrigger>
							<AccordionContent className="support-faq-content">
								{item.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>
		</div>
	);
}

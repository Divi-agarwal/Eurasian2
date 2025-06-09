"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, ShieldCheckIcon } from "lucide-react";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about-platform", label: "About Platform" },
	{ href: "/support-faq", label: "Support" },
	{ href: "/about-team", label: "Our Team" },
	{ href: "/feedback", label: "Feedback" },
];

const authLinks = [
	{ href: "/login", label: "Login", variant: "outline" as const },
	{ href: "/signup", label: "Signup", variant: "default" as const },
];

export default function Navbar() {
	const router = useRouter();

	return (
		<header className="my-navbar">
			<div className="navbar-inner">
				<Link href="/" className="navbar-logo">
					<ShieldCheckIcon className="logo-icon" />
					<h1 className="navbar-title typing-effect">SecureBase</h1>
				</Link>

				<nav className="navbar-links">
					{navLinks.map((link) =>
						link.label === "Support" ? (
							<Button
								key={link.href}
								variant="ghost"
								className="navbar-link"
								onClick={() => router.push(link.href)}
							>
								{link.label}
							</Button>
						) : (
							<Button key={link.href} variant="ghost" asChild className="navbar-link">
								<Link href={link.href}>{link.label}</Link>
							</Button>
						)
					)}
				</nav>

				<div className="navbar-auth">
					{authLinks.map((link) => (
						<Button key={link.href} variant={link.variant} asChild size="sm" className="navbar-auth-btn">
							<Link href={link.href}>{link.label}</Link>
						</Button>
					))}
				</div>

				<div className="navbar-mobile">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon" className="navbar-mobile-btn">
								<MenuIcon className="mobile-menu-icon" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<nav className="navbar-mobile-links">
								{navLinks.map((link) =>
									link.label === "Support" ? (
										<Button
											key={link.href}
											variant="ghost"
											onClick={() => router.push(link.href)}
											className="navbar-mobile-link"
										>
											{link.label}
										</Button>
									) : (
										<Button
											key={link.href}
											variant="ghost"
											asChild
											className="navbar-mobile-link"
										>
											<Link href={link.href}>{link.label}</Link>
										</Button>
									)
								)}
								<hr />
								{authLinks.map((link) => (
									<Button
										key={link.href}
										variant={link.variant}
										asChild
										className="navbar-mobile-auth"
									>
										<Link href={link.href}>{link.label}</Link>
									</Button>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}

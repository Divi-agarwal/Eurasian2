"use client";

import { useActionState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const signupSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

type SignupState = {
  message: string;
  error?: string;
};

const initialState: SignupState = {
  message: "",
  error: "",
};

async function signupAction(
  _prevState: SignupState,
  formData: FormData
): Promise<SignupState> {
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (!res.ok) {
      return { message: "", error: data.error || "Signup failed" };
    }

    return { message: data.message };
  } catch {
    return {
      message: "",
      error: "Something went wrong. Please try again.",
    };
  }
}

// ✅ Utility to determine password strength
function getPasswordStrength(password: string) {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < 8) return "Weak";
  if ((hasUpper || hasLower) && hasNumber && !hasSpecial) return "Medium";
  if (hasUpper && hasLower && hasNumber && hasSpecial) return "Strong";
  return "Weak";
}

const strengthColors = {
  Weak: "text-red-600",
  Medium: "text-yellow-600",
  Strong: "text-green-600",
};

export default function SignupForm() {
  const [state, formAction] = useActionState(signupAction, initialState);
  const { toast } = useToast();
  const router = useRouter();

  const [passwordStrength, setPasswordStrength] = useState<"Weak" | "Medium" | "Strong">("Weak");

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (state.message && !state.error) {
      toast({
        title: "Success",
        description: state.message,
        variant: "default",
        open: true,
        onOpenChange: () => {},
      });
      form.reset();
      router.push("/login");
    }

    if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
        open: true,
        onOpenChange: () => {},
      });
    }
  }, [state, toast, form, router]);

  return (
    <Card className="signup-card">
      <CardHeader>
        <CardTitle className="signup-title">Create Account</CardTitle>
        <CardDescription className="signup-desc">
          Enter your details to join SecureBase.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="signup-form">
          <div className="signup-field">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" {...form.register("name")} placeholder="John Doe" />
            {form.formState.errors.name && (
              <p className="signup-error">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="signup-field">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...form.register("email")} placeholder="you@example.com" />
            {form.formState.errors.email && (
              <p className="signup-error">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="signup-field">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...form.register("password")}
              placeholder="••••••••"
              onChange={(e) => {
                form.setValue("password", e.target.value);
                setPasswordStrength(getPasswordStrength(e.target.value));
              }}
            />
            <p className={`signup-strength signup-strength--${passwordStrength.toLowerCase()}`}>
              Strength: {passwordStrength}
            </p>
            {form.formState.errors.password && (
              <p className="signup-error">{form.formState.errors.password.message}</p>
            )}
          </div>

          <div className="signup-field">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              {...form.register("confirmPassword")}
              placeholder="••••••••"
            />
            {form.formState.errors.confirmPassword && (
              <p className="signup-error">
                {form.formState.errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type="submit" className="signup-btn" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        <p className="signup-login-text">
          Already have an account?{" "}
          <Link href="/login" className="signup-login-link">
            Log in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

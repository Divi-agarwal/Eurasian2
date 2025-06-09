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
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(1, { message: "Password cannot be empty." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const initialState = {
  message: "",
  error: "",
};

async function loginAction(
  _prevState: unknown,
  formData: FormData
): Promise<{ message: string; error?: string }> {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return { message: "", error: data.error || "Login failed" };
    }

    return { message: data.message };
  } catch (err) {
    console.error(err);
    return {
      message: "",
      error: "Something went wrong. Please try again.",
    };
  }
}

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (state?.message && !state.error) {
      toast({
        title: "Success",
        description: state.message,
        open: true,
        onOpenChange: () => {},
      });
      form.reset();
      router.push("/"); // Redirect to homepage on successful login
    }
    if (state?.error) {
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
    <Card className="login-card">
      <CardHeader>
        <CardTitle className="login-title">Login to SecureBase</CardTitle>
        <CardDescription className="login-desc">
          Access your account to manage your security.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="login-form" noValidate>
          <div className="login-field">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              placeholder="you@example.com"
              aria-invalid={!!form.formState.errors.email}
              aria-describedby="email-error"
            />
            {form.formState.errors.email && (
              <p id="email-error" className="login-error">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          <div className="login-field">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...form.register("password")}
              placeholder="••••••••"
              aria-invalid={!!form.formState.errors.password}
              aria-describedby="password-error"
            />
            {form.formState.errors.password && (
              <p id="password-error" className="login-error">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>
          <div className="login-links">
            <Link href="#" className="login-link">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="login-btn" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
        <p className="login-signup-text">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="login-signup-link">
            Sign up
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

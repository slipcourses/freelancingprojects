"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    if (name === "name" && value.length < 2) return "Minimum 2 caractères";
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Email invalide";
    if (name === "message" && value.length < 10) return "Minimum 10 caractères";
    return undefined;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormErrors]) {
      const newErrors = { ...errors };
      delete newErrors[name as keyof FormErrors];
      setErrors(newErrors);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) setErrors({ ...errors, [name]: error });
  };

  const inputClasses = (field: keyof FormErrors) =>
    `w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 outline-none transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-400"
        : "border-[var(--foreground)]/10 focus:border-violet-500"
    }`;

  return (
    <section id="contact" className="px-4 py-28">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-violet-600 dark:text-violet-400">
            CONTACT
          </span>
          <h2 className="text-4xl font-extrabold text-[var(--foreground)] md:text-5xl">
            Travaillons{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
              ensemble
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">
            Un projet en tête ? On est là pour en discuter.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[var(--foreground)]/5 bg-[var(--surface)] p-8"
        >
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-3 rounded-xl bg-emerald-500/10 px-4 py-3"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                ✓
              </span>
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Message envoyé ! Nous vous répondrons rapidement.
              </span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Votre nom"
                className={inputClasses("name")}
              />
              {errors.name && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1 text-xs text-red-400">
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="votre@email.com"
                className={inputClasses("email")}
              />
              {errors.email && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1 text-xs text-red-400">
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                rows={5}
                placeholder="Décrivez votre projet..."
                className={inputClasses("message") + " resize-none"}
              />
              {errors.message && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1 text-xs text-red-400">
                  {errors.message}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
              className="w-full rounded-xl bg-violet-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Envoi en cours...
                </span>
              ) : (
                "Envoyer le message"
              )}
            </motion.button>
          </form>

          <div className="mt-6 border-t border-[var(--foreground)]/5 pt-6 text-center">
            <p className="text-xs text-[var(--muted)]">ou écrivez-nous à</p>
            <a
              href="mailto:contact@devteam.com"
              className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400"
            >
              contact@devteam.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

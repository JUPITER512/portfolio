import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, User, MessageSquare, Send, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { notify, loading, error } from "@utils/ToastFunction";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Section, Reveal } from "@components/Section";
import { cn } from "@utils/utils";
import { typeWriterJsonObject } from "@data/Data.json";

const { contactMe } = typeWriterJsonObject;

const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const formFields = [
  { id: "name", label: "Name", icon: User, type: "text", placeholder: "Jane Doe" },
  { id: "email", label: "Email", icon: Mail, type: "email", placeholder: "jane@company.com" },
  { id: "message", label: "Message", icon: MessageSquare, type: "textarea", placeholder: "Tell me about your project or role..." },
];

const schema = yup
  .object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
    message: yup.string().required("Message is required"),
  })
  .required();

const channels = [
  { label: "Email", value: contactMe.email, href: `mailto:${contactMe.email}`, Icon: Mail },
  { label: "LinkedIn", value: "syedalimurtaza1214", href: contactMe.linkedin, Icon: FaLinkedin },
  { label: "GitHub", value: "JUPITER512", href: contactMe.github, Icon: FaGithub },
];

const inputBase =
  "w-full rounded-xl border bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:ring-4";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [debouncedEmailError, setDebouncedEmailError] = useState("");
  const enteredEmail = watch("email");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedEmailError(
        enteredEmail && !emailPattern.test(enteredEmail) ? "Invalid email format" : ""
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, [enteredEmail]);

  const sendEmail = async (data) => {
    loading("Sending your message...");
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          to_name: import.meta.env.VITE_TO_NAME,
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      );
      notify("Message sent successfully!");
      reset();
    } catch (err) {
      console.error("Failed to send email:", err);
      error("Failed to send message");
    }
  };

  const disabled = isSubmitting || !isValid || !isDirty;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      subtitle="Have a project, a role, or just want to say hi? My inbox is always open and I'll get back to you as soon as I can."
    >
      <Toaster />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
        <Reveal className="flex flex-col gap-3">
          {channels.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="card group flex items-center gap-4 p-4"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 group-hover:text-white">
                <Icon className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-zinc-500">{label}</span>
                <span className="block truncate text-sm font-medium text-zinc-200">{value}</span>
              </span>
              <ArrowUpRight className="size-4 text-zinc-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit(sendEmail)}
            noValidate
            className="card space-y-5 p-6 hover:border-white/10 md:p-8"
          >
            {formFields.map(({ id, label, icon: Icon, type, placeholder }) => {
              const message = errors[id]?.message || (id === "email" && debouncedEmailError);
              const fieldClass = cn(
                inputBase,
                message
                  ? "border-red-500/50 focus:border-red-500/60 focus:ring-red-500/10"
                  : "border-white/10 focus:border-indigo-400/60 focus:ring-indigo-500/10"
              );
              return (
                <div key={id} className="space-y-2">
                  <label htmlFor={id} className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                    <Icon className="size-4 text-zinc-500" />
                    {label}
                  </label>
                  {type === "textarea" ? (
                    <textarea
                      {...register(id)}
                      id={id}
                      rows={5}
                      placeholder={placeholder}
                      aria-invalid={!!message}
                      className={cn(fieldClass, "resize-none")}
                    />
                  ) : (
                    <input
                      {...register(id)}
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      aria-invalid={!!message}
                      className={fieldClass}
                    />
                  )}
                  {message && <p className="text-xs text-red-400">{message}</p>}
                </div>
              );
            })}

            <button
              type="submit"
              disabled={disabled}
              className={cn(
                "btn w-full !rounded-xl !py-3",
                disabled
                  ? "cursor-not-allowed bg-white/10 text-zinc-500"
                  : "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20 hover:brightness-110"
              )}
            >
              <Send className="size-4" />
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default ContactMe;

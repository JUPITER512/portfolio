
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {Mail, User, MessageSquare } from "lucide-react";
import { Toaster } from "react-hot-toast";
import Button from "@components/Button";
import Textarea from "@components/TextArea";
import Input from "@components/Input";
import {notify,loading,error} from '@utils/ToastFunction'

const formFields = [
  { id: "name", label: "Name", icon: User, type: "text" },
  { id: "email", label: "Email", icon: Mail, type: "email" },
  { id: "message", label: "Message", icon: MessageSquare, type: "textarea" },
];



const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    loading("Sending your message...");

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          to_name: import.meta.env.VITE_TO_NAME,
          from_name: formData.name,
          from_email:formData.email,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      );
      notify("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send email:", err);
      error("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };
  console.log({
    p:import.meta.env.VITE_PUBLIC_KEY,
    s:import.meta.env.VITE_SERVICE_ID,
    t:import.meta.env.VITE_TEMPLATE_ID

  })
  return (
    <motion.div
      className="min-h-screen dark:bg-black bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.2] py-10 px-4 md:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="contactme"
    >
      <Toaster />

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white"
      >
        Contact Me
      </motion.h3>

      <div className="flex items-center justify-center flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center space-y-4"
        >
          <div className="text-lg dark:text-gray-300 space-y-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>Email me at</span>
            </motion.div>
            <motion.a
              href="mailto:syedalimurtaza36@gmail.com"
              className="font-bold block hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              syedalimurtaza36@gmail.com
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-lg"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl dark:shadow-2xl space-y-6"
          >
            <AnimatePresence mode="wait">
              {formFields.map(({ id, label, icon: Icon, type }) => (
                <motion.div
                  key={id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <motion.label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    animate={{
                      color: focusedField === id ? "#6366f1" : "",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {label}
                    </div>
                  </motion.label>

                  {type === "textarea" ? (
                    <Textarea
                      id={id}
                      value={formData[id]}
                      onChange={(e) => handleInputChange(id, e.target.value)}
                      onFocus={() => setFocusedField(id)}
                      onBlur={() => setFocusedField(null)}
                      className="min-h-[100px] resize-none"
                      placeholder={`Enter your ${label.toLowerCase()}`}
                    />
                  ) : (
                    <Input
                      type={type}
                      id={id}
                      value={formData[id]}
                      onChange={(e) => handleInputChange(id, e.target.value)}
                      onFocus={() => setFocusedField(id)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={`Enter your ${label.toLowerCase()}`}
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
      
    </motion.div>
  );
};

export default ContactMe;

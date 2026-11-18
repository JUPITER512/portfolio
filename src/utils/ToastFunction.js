import toast from "react-hot-toast";

const base = {
  duration: 3000,
  position: "top-center",
  style: {
    background: "#18181b",
    color: "#f4f4f5",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    fontSize: "14px",
  },
  ariaProps: { role: "status", "aria-live": "polite" },
};

// Reuse one id so loading -> success/error replaces the same toast
const ID = "contact-form";

export const notify = (msg) => toast.success(msg, { ...base, id: ID });
export const loading = (msg) => toast.loading(msg, { ...base, id: ID, duration: Infinity });
export const error = (msg) => toast.error(msg, { ...base, id: ID });

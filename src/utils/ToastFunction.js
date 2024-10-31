import toast from "react-hot-toast";
export const notify = (msg) =>
  toast.success(msg, {
    duration: 3000,
    position: "top-center",
    icon: "👏",
    style: {
      backgroundColor: "#1F2937",
      boxShadow: "revert",
      color: "white",
    },
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const loading = (msg) =>
  toast.loading(msg, {
    duration: 3000,
    position: "top-center",
    icon: "⏳",
    style: {
      backgroundColor: "gray",
      color: "white",
    },
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const error = (msg) =>
  toast.error(msg, {
    duration: 3000,
    position: "top-center",
    icon: "❌",
    style: {
      backgroundColor: "lightgrey",
      color: "white",
    },
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

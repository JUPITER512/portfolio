export const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Syed_Ali_Murtaza_CV_.pdf"; // Replace with your CV file path
    link.download = "Ali_Murtaza_CV"; // Set the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
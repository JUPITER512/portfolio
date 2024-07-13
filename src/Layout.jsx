import { Outlet } from "react-router-dom";
import StarsCanvas from "./Components/GlowingStars";
export const Layout = () => {
  return (
    <>
      <StarsCanvas/>
        <Outlet />
    </>
  );
};

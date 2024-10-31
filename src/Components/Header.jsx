import { FloatingDock } from "./FloatingDock";
import { links } from "@data/NavBarData";
export function Header() {
  return (
    <FloatingDock
    desktopClassName={"fixed top-[90vh] left-[50%] translate-x-[-50%] z-[50]"}
    mobileClassName={'fixed top-[90vh] right-[5%] z-[111150]'}
    items={links}
    />
    // <div className="flex items-center justify-center  w-full">
    // </div>
  );
}

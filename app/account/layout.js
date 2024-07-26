import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid lg:grid-cols-[12rem_1fr] xs:grid-cols-[3.5rem_1fr] h-full">
      <SideNavigation />
      <div className="py-1 lg:p-8 md:p-4 xs:p-[0.25rem]">{children}</div>
    </div>
  );
}

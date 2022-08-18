import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

type ComponentType = {
  as?: any; // eslint-disable-line
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<ComponentType> = ({ as, children }) => {
  const Component = as || "article";

  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <Navbar />
        <Component>{children}</Component>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

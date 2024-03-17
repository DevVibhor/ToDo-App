import { ReactNode } from "react";

type HeaderType = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
const Header = ({ image, children }: HeaderType) => {
  return (
    <header>
      <h1>My</h1>
      <img
        {...image}
        style={{ marginRight: 10, marginLeft: 10, height: 50, width: 50 }}
      />
      {children}
    </header>
  );
};

export default Header;

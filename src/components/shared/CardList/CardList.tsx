import { PropsWithChildren } from "react";
import "./Cardlist.css";

export const CardList = ({ children }: PropsWithChildren) => {
  return <div className="Card-list row gap">{children}</div>;
};

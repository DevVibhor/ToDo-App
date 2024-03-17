import { ReactNode } from "react";

type HintBoxType = {
  mode: "hint";
  children: ReactNode;
};
type WarningBox = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBox = HintBoxType | WarningBox;

const InfoBox = (props: InfoBox) => {
  const { mode, children } = props;

  if (mode === "hint") {
    return (
      <aside className={`infobox infobox-warning.warning`}>{children}</aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning.warning--${severity}`}>
      <h2>Warning</h2>
      {children}
    </aside>
  );
};

export default InfoBox;

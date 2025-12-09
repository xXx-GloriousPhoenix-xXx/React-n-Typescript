import { type ReactNode, type FC } from "react";
import cl from "./InfoBox.module.css";

type HintMode = { type: "hint" };
type WarningMode = { type: "warning", level: "low" | "medium" | "high" };
interface IInfoBox {
    mode: HintMode | WarningMode;
    children: ReactNode;
}

const InfoBox: FC<IInfoBox> = ({mode, children}) => {
    if (mode.type === "hint") {
        return (
            <aside className={[
                cl.InfoBox,
                cl.InfoBoxHint
            ].join(" ")}>
                <p>{children}</p>
            </aside>
        );
    }

    const levelClass = {
        low: cl.InfoBoxWarningLow,
        medium: cl.InfoBoxWarningMedium,
        high: cl.InfoBoxWarningHigh
    }[mode.level];

    return ( 
        <aside className={[
            cl.InfoBox,
            cl.InfoBoxWarning,
            levelClass
        ].join(" ")}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
}
 
export default InfoBox;
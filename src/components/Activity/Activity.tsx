import { CSSProperties } from "react"
import { ActivityType } from "../../utils/types/ActivityType";


export interface CSSPropertiesWithVars extends CSSProperties {
    '--bgColor': string;
}

export const Activity: React.FC<ActivityType> = ({important, bgColor, text}) => {
    return (
        <p className={`activity ${important===true? ' activity--important':''}`} style={{ '--bgColor': bgColor} as React.CSSProperties}>{text}</p>
    );
};
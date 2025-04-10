import { X } from "lucide-react";
import React from "react";

const StyledDescription = ({ text }: { text: string }) => {
    let styled = text;
    styled = styled.replaceAll("*", "×");

    return <p>{styled}</p>;
};

export default StyledDescription;

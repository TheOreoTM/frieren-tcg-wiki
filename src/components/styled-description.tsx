import React from "react";

export function StyledDescription({ text }: { text: string }) {
    return (
        <div>
            {text.split("\n").map((line, idx) => (
                <span key={idx}>
                    {line}
                    <br />
                </span>
            ))}
        </div>
    );
}

export default StyledDescription;

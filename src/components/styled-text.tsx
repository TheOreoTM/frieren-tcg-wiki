import React from "react";

export function StyledText({ text: inputText }: { text: string }) {
    let text = inputText;
    if (text.includes("<=")) {
        text = text.replaceAll("<=", "≤");
    }
    if (text.includes(">=")) {
        text = text.replaceAll(">=", "≥");
    }

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

export default StyledText;

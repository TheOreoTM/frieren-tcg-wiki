import { X } from "lucide-react";
import React from "react";

const StyledDescription = ({ text }: { text: string }) => {
  const parts = [];
  let cursor = 0;

  const regex = /`([^`]+)`|\{TIMES\}/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Push text before the match
    if (match.index > cursor) {
      parts.push(text.slice(cursor, match.index));
    }

    // Handle matched groups
    if (match[0].startsWith("`")) {
      parts.push(
        <pre key={parts.length} style={{ display: "inline" }}>
          {match[1]}
        </pre>
      );
    } else if (match[0] === "{TIMES}") {
      parts.push(<X />);
    }

    cursor = regex.lastIndex;
  }

  // Push remaining text
  if (cursor < text.length) {
    parts.push(text.slice(cursor));
  }

  return <p>{parts}</p>;
};

export default StyledDescription;

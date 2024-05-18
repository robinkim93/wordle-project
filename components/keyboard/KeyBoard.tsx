"use client";

import { KEYBOARD_MAP } from "@/lib/constant";
import React, { useEffect, useState } from "react";
import KeyButton from "./KeyButton";

const KeyBoard = () => {
  const [pushedKey, setPushedKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDownEvent = (event: KeyboardEvent) => {
      setPushedKey(event.key.toUpperCase());
    };

    window.addEventListener("keydown", handleKeyDownEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyDownEvent);
    };
  }, [pushedKey]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {KEYBOARD_MAP.top.map((key, index) => (
          <KeyButton
            key={index}
            pushedKey={pushedKey}
            setPushedKey={setPushedKey}
          >
            {key}
          </KeyButton>
        ))}
      </div>
      <div className="flex flex-row">
        {KEYBOARD_MAP.middle.map((key, index) => (
          <KeyButton
            key={index}
            pushedKey={pushedKey}
            setPushedKey={setPushedKey}
          >
            {key}
          </KeyButton>
        ))}
      </div>
      <div className="flex flex-row">
        {KEYBOARD_MAP.lower.map((key, index) => (
          <KeyButton
            key={index}
            pushedKey={pushedKey}
            setPushedKey={setPushedKey}
          >
            {key}
          </KeyButton>
        ))}
      </div>
    </div>
  );
};

export default KeyBoard;

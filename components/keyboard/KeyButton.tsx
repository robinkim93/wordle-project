"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface KeyButtonProps {
  children: string;
  pushedKey: string;
  setPushedKey: Dispatch<SetStateAction<string>>;
}

const KeyButton = ({ children, pushedKey, setPushedKey }: KeyButtonProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    if (children === pushedKey) {
      setIsClicked(!isClicked);
      setPushedKey("");
    }
  }, [pushedKey, children, isClicked, setPushedKey]);

  //   useEffect(() => {
  //     const handleKeyDownEvent = (event: KeyboardEvent) => {
  //       if (event.code === `Key${children}`) {
  //         setIsClicked(!isClicked);
  //       }
  //     };

  //     window.addEventListener("keydown", handleKeyDownEvent);

  //     return () => {
  //       window.removeEventListener("keydown", handleKeyDownEvent);
  //     };
  //   }, [children, isClicked]);

  return (
    <div className="w-[40px] h-[40px]">
      <Button
        className={cn("bg-black w-full h-full")}
        // onMouseDown={() => setIsClicked(!isClicked)}
        onTouchStart={() => setIsClicked(!isClicked)}
      >
        {children}
      </Button>
      <div className=""></div>
    </div>
  );
};

export default KeyButton;

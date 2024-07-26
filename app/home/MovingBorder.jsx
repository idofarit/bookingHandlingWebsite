"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorder({ children, className }) {
  return (
    <div>
      <Button borderRadius="0.5rem" className={className}>
        {children}
      </Button>
    </div>
  );
}

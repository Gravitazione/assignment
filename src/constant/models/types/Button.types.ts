import React from "react";

export type ButtonProps = {
    title: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled: boolean;
}
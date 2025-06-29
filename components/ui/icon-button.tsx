import { cn } from "@/lib/utils";
import Button from "./button";
import { MouseEventHandler } from "react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-3 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </Button>
  );
};

export default IconButton;

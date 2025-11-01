import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type UserAvatarProps = {
  src?: string | null;
  initials?: string;
  size?: number | string;
  className?: string;
};

export default function UserAvatar({
  src,
  initials = "U",
  size = 80,
  className,
}: UserAvatarProps) {
  const style = {
    width: typeof size === "number" ? `${size}px` : size,
    height: typeof size === "number" ? `${size}px` : size,
  } as const;
  return (
    <Avatar style={style} className={`ring-2 ring-white/10 ${className ?? ""}`}>
      <AvatarImage src={src ?? undefined} alt="user avatar" />
      <AvatarFallback className="bg-white/10 text-sm">{initials}</AvatarFallback>
    </Avatar>
  );
}

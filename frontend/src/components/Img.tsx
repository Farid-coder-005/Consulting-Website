import { useState } from "react";
import type { ImgHTMLAttributes } from "react";

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23e2e8f0'/%3E%3C/svg%3E";

type ImgProps = ImgHTMLAttributes<HTMLImageElement>;

export default function Img({ src, alt = "", className, ...rest }: ImgProps) {
  const [errored, setErrored] = useState(false);
  return (
    <img
      src={errored ? FALLBACK : src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setErrored(true)}
      {...rest}
    />
  );
}

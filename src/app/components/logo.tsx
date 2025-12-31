import Image from "next/image";

export const Logo = () => (
  <Image
    src="/logo.svg"
    alt="Codeflix"
    width={90}
    height={90}
    className="cursor-pointer" />
);

import Image from "next/image";
import logo from "@/../public/logo.png";
export default function Logo() {
  return (
    <div>
      <Image src={logo} alt='logo' loading="eager" />
    </div>
  );
}

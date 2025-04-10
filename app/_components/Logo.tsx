import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={"https://go.demo.nextjstemplates.com/images/logo/logo-dark.svg"}
          alt="Logo"
          width={200}
          height={180}
          className="cursor-pointer"
          quality={70}
        />
      </Link>
    </div>
  );
};

export default Logo;

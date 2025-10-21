import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo-pathchakro.png"
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="text-xl font-bold text-blue-600">Pathchakro</span>
      </Link>
    </div>
  );
};

export default Logo;

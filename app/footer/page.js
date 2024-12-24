import Link from "next/link";
import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="text-center p-10 flex justify-center">
      <p>Copyright © Your Website 2024</p>
      <div className="absolute right-20 bounce-custom">
        <Link href="/">
          <FaAngleDoubleUp
            style={{ fontSize: "25px" }}
            className="text-foreground"
          />
        </Link>
      </div>
    </div>
  );
}

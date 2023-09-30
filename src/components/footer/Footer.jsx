import Link from "next/link";
import React from "react";

function Footer() {
const date = new Date();
let year = date.getFullYear();
  return <div>
  <div>
    <h1>©{year} <Link href="/" className="no-underline hover:underline">Home</Link>.All Rights Reserved.</h1>
  </div>
  </div>;
}

export default Footer;

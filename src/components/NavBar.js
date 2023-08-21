import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const allLinks = links.map((links,index)=>{
    return <a key={index} href={'#' + links}>{links}</a>
  })

  return <nav>{allLinks}</nav>;
}

export default NavBar;

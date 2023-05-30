import React from 'react'
import Logo from "@/assets/Logo.png"

const Footer = () => {
  return <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/2 md:mt-0">
        <img src={ Logo } alt="logo" />
        <p className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>© Evogym All Rights Reserved</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
        <p className="my-5">Massa Orci sene</p>
        <p className="my-5">Bangmessi apa tu artine</p>
        <p className="my-5">Holo liveseundas</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5">Nakiri D Ayamae</p>
        <p>(123)456-1987</p>
      </div>
    </div>
  </footer>
}

export default Footer
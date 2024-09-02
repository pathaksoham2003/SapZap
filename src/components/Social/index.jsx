import React from 'react'
import {
    Facebook,
    Google,
    Instagram,
    LinkedIn,
    Whatsapp,
    Youtube,
  } from "../../assets";
  
const Social = () => {
    const handleSocialOpen= (url) => {
        window.open(url,"__blank")
    }
  return (<div className="flex mt-3 bg-black w-60">
    <img
      onClick={() =>
        handleSocialOpen(
          "https://mail.google.com/mail/?view=cm&fs=1&to=teammoneysutra@gmail.com"
        )
      }
      className=" w-[24px] mr-3"
      src={Google}
    />
    <img
      onClick={() =>
        handleSocialOpen(
          "https://www.facebook.com/MoneySutraInvestment/"
        )
      }
      className="w-[24px] mr-3"
      src={Facebook}
    />
    <img
      onClick={() => handleSocialOpen("https://wa.me/918793543098")}
      className="w-[24px] mr-3"
      src={Whatsapp}
    />
    <img
      onClick={() =>
        handleSocialOpen(
          "https://www.youtube.com/@MoneySutraFinServ"
        )
      }
      className="w-[24px] mr-3"
      src={Youtube}
    />
    <img
      onClick={() =>
        handleSocialOpen(
          "https://www.instagram.com/moneysutrainvestment"
        )
      }
      className="w-[24px] mr-3"
      src={Instagram}
    />
    <img
      onClick={() =>
        handleSocialOpen(
          "https://www.linkedin.com/in/cachaitanyapathak/"
        )
      }
      className="w-[24px] mr-3"
      src={LinkedIn}
    />
  </div>
  )
}

export default Social
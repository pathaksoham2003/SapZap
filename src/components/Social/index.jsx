import React from "react";
import {
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  Whatsapp,
  Youtube,
} from "../../assets";

const Social = () => {
  const handleSocialOpen = (url) => {
    window.open(url, "__blank");
  };
  return (
    <div className="flex justify-evenly mt-3 w-[200px] bg-primary/60 p-2 rounded-xl">
      <img
        onClick={() => handleSocialOpen("https://wa.me/917887557175")}
        className="w-[24px] mr-3"
        src={Whatsapp}
      />
      <img
        onClick={() =>
          handleSocialOpen(
            "https://mail.google.com/mail/?view=cm&fs=1&to=pathaksoham2003@gmail.com"
          )
        }
        className=" w-[24px] mr-3"
        src={Google}
      />
      {/* <img
      onClick={() =>
        handleSocialOpen(
          "https://www.facebook.com/MoneySutraInvestment/"
        )
      }
      className="w-[24px] mr-3"
      src={Facebook}
    /> */}
      <img
        onClick={() =>
          handleSocialOpen("https://www.youtube.com/@MoneySutraFinServ")
        }
        className="w-[24px] mr-3"
        src={Youtube}
      />
      {/* <img
      onClick={() =>
        handleSocialOpen(
          "https://www.instagram.com/moneysutrainvestment"
        )
      }
      className="w-[24px] mr-3"
      src={Instagram}
    /> */}
      <img
        onClick={() =>
          handleSocialOpen(
            "https://www.linkedin.com/in/soham-pathak-86726b22a/"
          )
        }
        className="w-[24px] mr-3"
        src={LinkedIn}
      />
    </div>
  );
};

export default Social;

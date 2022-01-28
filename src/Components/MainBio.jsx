import React from "react";
import Github from "../icon/github.svg";
import Gmail from "../icon/gmail.svg";
import Linkedin from "../icon/linkedIn.svg";
import Link from "./Link";
import Skills from "./Skills";

export default function MainBio({
  name,
  title,
  mobile,
  age,
  skills,
  email,
  github,
  linkedIn,
}) {
  return (
    <div className="main__container">
      <div className="person__name">{name}</div>
      <div className="person__age">{age} Years</div>
      <div className="person__title">{title}</div>
      <div className="person__mobile__no">Mobile No: {mobile}</div>
      <div className="person__skills">
        Skills: <Skills skills={skills} />
      </div>
      <div className="socail__link">
        {/* <div className="person__email"> */}
        <Link link={email} icon={Gmail} />
        {/* </div> */}
        {/* <div className="person__github"> */}
        <Link link={github} icon={Github} />
        {/* </div> */}
        {/* <div className="person__linkedIn"> */}
        <Link link={linkedIn} icon={Linkedin} />
        {/* </div> */}
      </div>
    </div>
  );
}

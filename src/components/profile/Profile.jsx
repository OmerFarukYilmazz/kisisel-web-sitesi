import "./profile.css";
import { DataContext } from "../../context/DataContext";
import React, { useContext } from "react";

/*
const aboutMe = {
  section: "About Me",
  name: "ÖMER FARUK YILMAZ",
  bdaytitle: "Birthday",
  bday: "03.09.1991",
  cityTitle: "City",
  city: "ANTALYA",
  educationTitle: "Education",
  education: {
    uni: "Esogü Uni/ Civil Engineer",
    type: "Bachelor's degree",
    year: "2017",
  },
  roleTitle: "Preferred Role",
  role: "Full-Stack Java Developer",
  aboutMe: [
    "I worked as a Civil Engineer for 3 years, then I changed my carreer for making dream real now I'm a full stack developer.",
    "",
  ],
};
const profile = "Profile";
*/
function Profile() {
  const { content, theme } = useContext(DataContext);
  console.log(theme);

  return (
    <div
      className={`profile-container ${
        theme === "dark" ? "dark:bg-darkBackground" : ""
      }`}
      id="profile"
    >
      <h1
        className={`profile-h1 ${
          theme === "dark" ? "dark:text-darkH1" : ""
        } text-title font-semibold mb-[10px] text-[36px] text-center md:text-[48px] md:text-left`}
      >
        {content.profile}
      </h1>
      <div className="profile-aboutme flex text-primary flex-wrap  justify-center md:justify-start ">
        <div className="basis-full md:basis-1/2 tracking-[1%]">
          <span
            className={`text-blue-600 ${
              theme === "dark" ? "dark:text-darkH2" : ""
            } font-medium text-3xl flex justify-center md:justify-start`}
          >
            {content.profile}
          </span>
          <div className="grid grid-cols-2 mt-[21px] text-[#000]">
            <div
              className={`grid ${
                theme === "dark" ? "dark:text-white" : ""
              } grid-rows-5 font-semibold place-content-center md:place-content-start`}
            >
              <p>{content.aboutMe.bdaytitle}</p>
              <p>{content.aboutMe.cityTitle}</p>
              <p>{content.aboutMe.educationTitle}</p>
              <br />
              <p>{content.aboutMe.roleTitle}</p>
            </div>
            <div
              className={`grid ${
                theme === "dark" ? "dark:text-white" : ""
              } grid-rows-5 md:basis-1/2 place-content-center md:place-content-start`}
            >
              <p>{content.aboutMe.bday}</p>
              <p>{content.aboutMe.city}</p>
              <p>{content.aboutMe.education.uni}</p>
              <p>
                {content.aboutMe.education.type} -{" "}
                {content.aboutMe.education.year}
              </p>
              <p>{content.aboutMe.role}</p>
            </div>
          </div>
        </div>
        <div className="basis-full md:basis-1/2 tracking-[1%] ">
          <span
            className={`text-blue-600 ${
              theme === "dark" ? "dark:text-darkH2" : ""
            } font-medium text-3xl flex justify-center md:justify-start`}
          >
            {content.aboutMe.section}
          </span>
          <div
            className={`aboutMe-aboutMe ${
              theme === "dark" ? "dark:text-white" : ""
            } space-y-4`}
          >
            {content.aboutMe.aboutMe}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;

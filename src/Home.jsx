import React from "react";
import image from "./public/Logo66.svg";

import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { useContextApp } from "./context/context";

const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
  },
];

const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaSketch />,
  },
];

const Home = () => {
  const { toggleHamburger, setToggleHamburger } = useContextApp();

  // console.log(useContextApp());

  return (
    <>
      <button
        className="btn-hamburger"
        onClick={() => setToggleHamburger(true)}
      >
        <FaBars />
      </button>

      <header
        className={`  ${toggleHamburger ? "header " : "header show--header"} `}
      >
        <nav className="navbar">
          <section className="navbar__header">
            <div className="logo">
              <img src={image} alt="logo__image" className="logo__image" />
              <h1 className="heading__logo">myShop</h1>
            </div>
            <div className="close" onClick={() => setToggleHamburger(false)}>
              <FaTimes />
            </div>
          </section>
          <ul className="nav-links">
            {links.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url}>
                    {item.icon} {item.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="social__links">
            {social.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url}>{item.icon}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Home;

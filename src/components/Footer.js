import React from "react";
import {
  faLinkedin,
  faInstagram,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FakeResume } from "../images/FakeResume.pdf";
import Collage from "../images/collage.png";

const Footer = () => {
  return (
    <footer className="bg-cover" style={{ backgroundImage: `url(${Collage})` }}>
      <div class="backdrop-brightness-75">
        <div class="pt-44 pb-44 mt-4 pl-8 text-center bottom-0 w-full">
          <p className="text-white text-left font-bold font-poppins">
            made with 💕
          </p>

          <p className="text-white text-3xl text-left font-bold font-poppins">
            SOPHIA ZHUANG
          </p>
          <div>
            {" "}
            <div class="text-right pr-8 pt-8 space-x-4 text-white">
              <a
                href="https://www.linkedin.com/in/sophiazhuang5/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="hover:text-pink-400"
                  size="2x"
                />
              </a>
              <a href="https://www.instagram.com/sophia.codes/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="hover:text-pink-400"
                  size="2x"
                />
              </a>
              <a
                href="https://open.spotify.com/user/sophiaxiezhuang?si=efa69e7c7d514610"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faSpotify}
                  className="hover:text-pink-400"
                  size="2x"
                />
              </a>
              <a href="mailto:sophiaxiezhuang@gmail.com" target="_blank">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="hover:text-pink-400"
                  size="2x"
                />
              </a>
              <a
                href="/Users/sophiazhuang/Desktop/Projects/Sophia's Personal Portfolio/sz-website/src/images/Resume.pdf"
                download="Resume.pdf"
              >
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="hover:text-pink-400"
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCoffee,
//   faMusic,
//   faCat,
//   faDog,
// } from "@fortawesome/free-solid-svg-icons";

// <link
//   rel="stylesheet"
//   type="text/css"
//   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
// ></link>;

// /**
//  * creates the footer for our page that includes links that
//  * direct users to top artists, albums and songs
//  **/
// const Footer = () => {
//     return (
//       <div className="footer">
//         <div className="footercontainer">
//           <div className="row">
//             <div className="footer-col">
//               <div className="header">
//                 {/* <img src={Spotify} alt="logoimage" className="logo"></img> */}
//                 {/* <h1 className="footername"> Sophia Zhuang</h1> */}
//                 <div class="text-white relative w-full text-xl font-semibold font-domine ml-3">
//                   SZ.
//                 </div>
//               </div>
//             </div>

//             <div className="footer-col">
//               <h4>Art-ify!</h4>
//               <ul>
//                 <li className="col_item">
//                   {" "}
//                   <a href="albums"> Albums </a>
//                 </li>
//                 <li className="col_item">
//                   {" "}
//                   <a href="songs"> Songs </a>
//                 </li>
//                 <li className="col_item">
//                   {" "}
//                   <a href="artists"> Artists </a>
//                 </li>
//               </ul>
//             </div>

//             <div className="footer-col">
//               <h4>Learn More</h4>
//               <ul>
//                 <li className="col_item">
//                   {" "}
//                   <a href="https://github.com/CS222SP22/course-project-mp-b">
//                     {" "}
//                     About Us{" "}
//                   </a>
//                 </li>
//                 <li className="col_item">
//                   {" "}
//                   <a href="https://www.spotify.com/us/"> About Spotify </a>
//                 </li>
//               </ul>
//             </div>

//             <div className="footer-col">
//               <h4>Connect</h4>
//               <div className="social-links">
//                 <a href="https://open.spotify.com/user/sophiaxiezhuang?si=jVp0QLygSqSDuj6GvSE88w&nd=1">
//                   <FontAwesomeIcon icon={faCoffee} className="icon" />
//                 </a>
//                 <a href="https://open.spotify.com/user/rayway____?si=btXi9OiUQsCPjcyVuyIHWA&nd=1">
//                   <FontAwesomeIcon icon={faMusic} className="icon" />
//                 </a>
//                 <a href="https://open.spotify.com/user/phyllisjiawang?si=9QN--7JlTqyakSGPhC4J-w&nd=1">
//                   <FontAwesomeIcon icon={faCat} className="icon" />
//                 </a>
//                 <a href="https://open.spotify.com/user/vaixkobk06qp3x4i65gh2fjq1?si=gdsZhE1ETqSItFcctzqvAg&nd=1">
//                   <FontAwesomeIcon icon={faDog} className="icon" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Footer;

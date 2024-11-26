import { InstagramIcon, YoutubeIcon } from "lucide-react";
import ProfileImage from "/ProfileImage.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full h-auto max-h-[100vh] about">
      <div className="w-full h-96 max-[1440px]:h-72 bg-[#444444] rounded-2xl ">
        <img
          src={ProfileImage}
          alt="Aditya Mane"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="info px-4">
        <div className="text-4xl my-4">About Me</div>
        <p className="my-4  text-lg">
          Hi, I’m Aditya Mane, passionate discus fish enthusiast. Over the
          years, I’ve developed a deep love for these beautiful creatures and
          have dedicated my time to understanding how to care for and maintain
          them. Through this blog, I aim to share practical tips, personal
          experiences, and expert advice on keeping discus fish happy and
          healthy. Whether you’re new to the hobby or an experienced aquarist, I
          hope to provide valuable insights to make your journey with discus
          fish enjoyable and fulfilling. Join me as we explore the fascinating
          world of discus fish care!
        </p>
        <div className="flex items-center my-4">
          <Link
            to="https://instagram.com/adityamane.jsx"
            target="_blank"
            className="mr-4"
          >
            <InstagramIcon />
          </Link>
          <Link
            to="https://www.youtube.com/@discusgallery4013"
            target="_blank"
            className="mr-4"
          >
            <YoutubeIcon size={30} />
          </Link>
        </div>
      </div>
      {/* <div className="image">
        <img src={ProfileImage} alt="" />
      </div>
      <div className="aboutInfo">
        <h1>About Me</h1>
        <p>
          Hi, I’m Aditya Mane, passionate discus fish enthusiast. Over the
          years, I’ve developed a deep love for these beautiful creatures and
          have dedicated my time to understanding how to care for and maintain
          them. Through this blog, I aim to share practical tips, personal
          experiences, and expert advice on keeping discus fish happy and
          healthy. Whether you’re new to the hobby or an experienced aquarist, I
          hope to provide valuable insights to make your journey with discus
          fish enjoyable and fulfilling. Join me as we explore the fascinating
          world of discus fish care!
        </p>
        <div className="socials">
          <div className="social">
            <a
              href="http://instagram.com/adityamane.jsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={30} />
            </a>
          </div>
          <div className="social">
            <a
              href="https://www.youtube.com/@discusgallery4013"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={35} />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;

// export default function About() {
//   return <div>About</div>;
// }

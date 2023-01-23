const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/hendrosetwn/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="linkedin-link"
          src="../assets/linkedin.png"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com/hendrosetwn"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="linkedin-link"
          src="../assets/twitter.png"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/hendrosetwn"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="linkedin-link"
          src="../assets/facebook.png"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/hendrosetwn"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="linkedin-link"
          src="../assets/instagram.png"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
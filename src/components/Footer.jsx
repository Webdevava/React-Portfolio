const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="flex items-center py-8 lg:p-12 pb-24 min-h-96 border-t-2 border-zinc-800 flex-col lg:flex-row justify-between gap-10 p-4">
      <div className="flex flex-col justify-between">
        <div className="my-4">
          <h1 className="text-4xl">Ankur Auti</h1>
          <p className="text-gray-600 font-bold">Web Developer</p>
        </div>
        <p className="text-sm text-zinc-500 ">
          © Copyright {year}. All rights Reserved.
        </p>
      </div>

      <div className="p-2 border border-zinc-800 rounded-lg flex flex-col justify-between h-fit gap-8 w-full  lg:w-fit">
        <div className="">
          <h2 className="text-xl font-bold text-gray-500 mb-2">Socials:</h2>
          <ul className="px-3 py-2 border border-zinc-800 flex gap-3 rounded-lg text-lg z-50 flex-col lg:flex-row w-full">
            <li className="hover:opacity-50">
              <a href="http://github.com/Webdevava" className="">
                Github
              </a>
            </li>
            <li className="hover:opacity-50">
              <a href="https://www.linkedin.com/in/ankur-auti-862953250/" className="">
                LinkedIn
              </a>
            </li>
            <li className="hover:opacity-50">
              {" "}
              <a href="https://twitter.com/ankur_auti" className="">
                Twitter/X
              </a>
            </li>
            <li className="hover:opacity-50">
              {" "}
              <a href="https://www.instagram.com/ankurauti382/" className="">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <a
          href="mailto:ankurauti@gmail.com"
          className="text-lg hover:opacity-50"
        >
          ankurauti@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;

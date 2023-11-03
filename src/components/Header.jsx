function Header() {
  return (
    <>
      <section
        className="relative w-screen h-screen bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url(./img/Movie-Wallpaper.svg)" }}
      >
        <header
          className="relative z-20 flex justify-between items-center h-20"
          style={{
            background:
              "linear-gradient(90.53deg, rgba(0, 0, 0, 0.75) 0.45%, rgba(102, 80, 165, 0.75) 105.51%)",
          }}
        >
          <div className="flex justify-evenly gap-10 items-center">
            <div
              className=" font-normal text-4xl text-[#FFC907] uppercase pl-6"
              style={{ fontFamily: " 'Griffy', cursive" }}
            >
              dramatic
            </div>
            <div>
              <i className="fa fa-bars text-white flex lg:hidden"></i>
              <ul
                className="hidden lg:flex gap-10 text-base font-bold "
                style={{ fontFamily: "Montserrat" }}
              >
                <li className="font-bold text-sm text-white uppercase ">
                  home
                </li>
                <li className="font-bold text-sm text-white uppercase ">
                  Tv Show
                </li>
                <li className="font-bold text-sm text-white uppercase ">
                  movies
                </li>
                <li className="font-bold text-sm text-white uppercase ">new</li>
              </ul>
            </div>
          </div>
          <div className="pr-6">
            <i className="fa fa-bars text-white flex lg:hidden"></i>
            <div className="hidden lg:flex justify-evenly gap-10 items-center">
              <div className="bg-[#3B567D] rounded-3xl px-[19px] py-[4px]">
                <input
                  className="bg-transparent outline-none text-white"
                  type="text"
                  placeholder="SEARCH"
                />
                <span className="text-white">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
              <img src="./img/gift.svg" alt="" />
              <img src="./img/Ring.svg" alt="" />
              <img src="./img/Ellipse.svg" alt="" />
            </div>
          </div>
        </header>
        <div
          name="side-bar"
          className="z-20 flex flex-col items-center justify-center w-10 lg:w-16 h-40 lg:h-80 border-0 rounded-r-3xl bg-gradient-to-t from-[#130B29] via-[#5436A9] to-[#5E47A1]  justify-evenly fixed left-0 top-[90px]"
        >
          <div className="w-full">
            <img className="w-1/2 mx-auto" src="./img/users.svg" alt="" />
          </div>
          <div className="w-full">
            <img className="w-1/2 mx-auto" src="./img/list.svg" alt="" />
          </div>
          <div className="w-full">
            <img className="w-1/2 mx-auto" src="./img/download.svg" alt="" />
          </div>
          <div className="w-full">
            <img className="w-1/2 mx-auto" src="./img/settings.svg" alt="" />
          </div>
        </div>
        <div
          className="z-20 relative px-[50px] md:px-[123px]"
          style={{ fontFamily: "Montserrat" }}
        >
          <img src="/img/Tamasha.svg" alt="" />
          <p className="mt-8 max-w-lg font-semibold text-xs text-white">
            Ved and Tara fall in love while on a holiday in Corsica and decide
            to keep their real identities undisclosed. Tara returns to Delhi and
            meets a new Ved, who is trying to discover his true self.
          </p>
          <p className="mt-4 font-semibold text-sm text-[#FF2E00] uppercase">
            GENRES
          </p>
          <p className="font-semibold text-sm text-white capitalize">
            Romance, Drama
          </p>
          <div className="flex my-[20px]">
            <div className="flex border-solid text-white rounded-3xl bg-[#5436A9] px-[18px] py-[8px] uppercase">
              watch
              <img className="ml-[10px]" src="./img/play.svg" alt="" />
            </div>
            <div className="flex border-solid text-white rounded-3xl bg-[#5C5C5C] px-[12px] py-[8px] uppercase ml-[10px]">
              my list
              <img className="ml-[10px]" src="./img/+.svg" alt="" />
            </div>
          </div>
          <div className="flex items-center text-white space-x-[11px] mt-[20px]">
            <img src="./img/imdb.svg" alt="" />
            <p className="text-xl font-semibold text-[#FFC907]">7.3</p>
            <p className="border border-solid rounded-[5px] px-[8px] h-[23px] text-[18px] leading-[21.94px] font-normal ">
              U/A
            </p>
            <p className="border border-solid rounded-[5px] px-[8px] h-[23px] text-[18px] leading-[21.94px] font-normal ">
              4K
            </p>
            <p className="text-xl font-semibold text-[#959595]">2015</p>
          </div>
          <p className="text-white uppercase font-semibold text-lg pt-[64px]">
            MOVIES YOU MUST WATCH
          </p>
        </div>
        <span className="z-10 absolute top-0 w-full h-full bg-gradient-to-r from-[#000000] via-[#000000AF] to-[#C4C4C400]"></span>
        <span className="z-10 absolute top-0 w-full h-full bg-gradient-to-t from-[#000000] via-[#C4C4C400] to-[#C4C4C400]"></span>
      </section>
    </>
  );
}

export default Header;

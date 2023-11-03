function Footer() {
  return (
    <>
      <footer className="bg-zinc-900 text-white pb-[50px] md:pb-0 px-[50px] md:px-0">
        <div className="max-w-[1218px] grid grid-cols-2 lg:grid-cols-5 gap-x-5 mx-auto">
          <div className="h-[34px] mt-20 flex items-center justify-center space-x-[13px] w-fit bg-[#362F33] px-[15px]">
            <img className="w-[18px]" src="./img/globe.svg" alt="" />
            <span className="opacity-[0.8]">English</span>
            <img className="w-[18px]" src="./img/Vector.svg" alt="" />
          </div>
          <div className="mt-20 leading-loose text-sm">
            <h3 className="leading-10 uppercase font-bold text-base">
              Navigation
            </h3>
            <p style={{ fontFamily: "Roboto" }}>Home</p>
            <p style={{ fontFamily: "Roboto" }}>FAQ</p>
            <p style={{ fontFamily: "Roboto" }}>Investor Relations</p>
            <p style={{ fontFamily: "Roboto" }}>Jobs</p>
            <p style={{ fontFamily: "Roboto" }}>About Us</p>
            <p style={{ fontFamily: "Roboto" }}>Help Centre</p>
          </div>
          <div className="mt-20 leading-loose text-sm">
            <h3 className="leading-10 uppercase font-bold text-base">LEGAL</h3>
            <p style={{ fontFamily: "Roboto" }}>Privacy Policy</p>
            <p style={{ fontFamily: "Roboto" }}>Terms of Service</p>
            <p style={{ fontFamily: "Roboto" }}>Cookie Preferences</p>
            <p style={{ fontFamily: "Roboto" }}>Corporate Information</p>
          </div>
          <div className="mt-20 leading-loose text-sm">
            <h3 className="uppercase font-bold text-base leading-10">
              TALK TO US
            </h3>
            <p style={{ fontFamily: "Roboto" }}>support@ercom.com</p>
            <p style={{ fontFamily: "Roboto" }}>+66 2399 1145</p>
          </div>
          <div className="mt-20 text-sm">
            <h3 className="uppercase font-bold text-base leading-10">
              Follow us
            </h3>
            <div className="flex mt-2">
              <img
                className="border border-solid border-white rounded-3xl px-4 py-3 mr-2"
                src="./img/Shape.svg"
                alt=""
              />
              <img
                className="border border-solid border-white rounded-3xl p-3 mr-2"
                src="./img/Group-14.svg"
                alt=""
              />
              <img
                className="border border-solid border-white rounded-3xl p-3 mr-2"
                src="./img/Twitter.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center my-5">
          <p>© 2022 Dramatic. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;

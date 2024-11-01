import Link from "next/link";
import { navLink } from "./constants";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {

      return (
            <header className="border-b border-gray-300 py-5 sticky z-50 top-0">
                  <Container className="flex items-center justify-between gap-10">
                        {/* Logo */}
                        <div>
                              <Logo />
                        </div>
                        {/* Input Field */}
                        <div>
                              <SearchInput />
                        </div>
                        {/* Nav Link */}
                        <div className="hidden md:inline-flex items-center gap-6 tracking-wide text-[14px] text-gray-800 font-medium uppercase ">
                              {
                                    navLink.map((item, index) => (
                                          <Link key={index} href={item?.path} className="hoverTop group">
                                                {item?.title}
                                                <span className="hoverBottom"></span>
                                          </Link>
                                    ))
                              }
                              <Link href={"/signin"} className="hoverTop group">
                                    Sing in
                                    <span className="hoverBottom"></span>
                              </Link>
                              <Link href={"/studio"} className="hoverTop group">
                                    Studio
                                    <span className="hoverBottom"></span>
                              </Link>
                        </div>
                        {/* Menu Bar Section */}
                        <div>
                              <IoMenuOutline size={30} className="inline-flex md:hidden cursor-pointer text-gray-700 hoverEffect"/>
                        </div>
                  </Container>
            </header>
      );
};

export default Header;
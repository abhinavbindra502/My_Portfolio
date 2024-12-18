import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/button";



export const Header = () => {
  return (
  <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
    <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"> </div>
    <div className="container">
      <div className="flex justify-between items-center border border-white/15 md:p-2 rounded-xl max-w-2xl mx-auto relative"> 
      <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block  "></div>
        <div>
           <div className="border p-1 rounded-lg inline-flix justify-center items-center border-white/15">
         <LogoIcon className="h-8 w-8" />
           </div>
         </div>
         <div>
          <nav className="flex gap-8 text-sm">
          <a href="#" className=" text-white/60 hover:text-white/90 transition">Home</a>
          <a href="#" className=" text-white/60 hover:text-white/90 transition">About</a>
          <a href="#" className=" text-white/60 hover:text-white/90 transition">Resume</a>
          <a href="#" className=" text-white/60 hover:text-white/90 transition">Contact</a>
          </nav>
        </div>
        <div className="flex gap-4 items-center">   
          <Button> Join Waitlist</Button>
          <MenuIcon className="md:hidden"/>
          </div>
        </div>
    </div>
  </header>);
};
 
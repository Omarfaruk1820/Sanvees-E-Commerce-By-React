import logo from "../../assets/logo/logo.webp"

const Footer = () => {
  return (
    <div className='bg-[#09090A] mt-10'>
      <footer className="footer p-10  text-base-content">
        <aside>
          <img className='w-20 h-16' src={logo} alt="" />
          <p className='text-xl text-white'>Sanvees -e-commerce Ltd.<br />Providing reliable tech since 2015</p>
        </aside>
        <nav className='text-white text-xl'>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className='text-white text-xl'>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className='text-white text-xl'>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center  p-4  text-base-content">
        
        <aside>
          <p className='text-white text-xl'>Copyright © 2024 - All right reserved by sanvees-e-commerce ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
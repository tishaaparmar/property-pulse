import Logo from '@/assets/styles/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    const currYear = new Date().getFullYear();
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-200 py-4 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="mb-4 md:mb-0">
            <Image src={Logo} alt="Logo" className="h-8 w-auto"></Image>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <Link href="/properties">Properties</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-2 md:mt-0">
              © {currYear} PropertyPulse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

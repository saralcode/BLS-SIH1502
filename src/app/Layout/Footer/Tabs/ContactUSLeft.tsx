import { MdLocationPin, MdAlternateEmail, MdCall } from "react-icons/md";

export default function ContactUSDetails({ isMainPage = false }) {
  return (
    <div>
      <h4
        className={`mt-0 h-16 font-bold mb-6 flex items-center justify-center text-center text-xl border-b-2 pb-2 ${
          isMainPage ? "border-blue-500 text-rose-500" : "text-inherit"
        } `}
      >
        {isMainPage ? "We are located in" : "Contact Us"}
      </h4>

      <div className="flex items-center justify-start ">
        <span>
          <MdLocationPin className="inline-block px-2 h-12 w-12" />
        </span>
        <p className="px-4 font-semibold italic font-sans my-2">
          Rasda, Labga, City:- Patratu, Dist:- Ramgarh (Jharkhand)
        </p>
      </div>

      <div className="flex items-center justify-start ">
        <span>
          <MdCall className="inline-block px-2 h-12 w-12" />
        </span>
        <p className="px-4 font-sans my-2">
          <a className="text-inherit block hover:scale-105 transition-all "  href="tel:+914495321542">
            +91 4495321542
          </a>
          <a className="text-inherit block hover:scale-105 transition-all " href="tel:+914495321542">
            +91 4495321542
          </a>
        </p>
      </div>
      <div className="flex items-center justify-start ">
        <span>
          <MdAlternateEmail className="inline-block px-2 h-12 w-12" />
        </span>
        <p className="px-4 font-sans my-2 whitespace-pre-wrap max-w-sm overflow-hidden ">
        <a className="text-inherit block  hover:scale-105 transition-all " href="mailto:registrar@dspmuranchi.ac.in">
          registrar@dspmuranchi.ac.in
          </a>
          <a className="text-inherit hover:scale-105 transition-all block"  href="mailto:support@dspmuranchi.ac.in">
          support@dspmuranchi.ac.in
          </a>
        </p>
      </div>
    </div>
  );
}

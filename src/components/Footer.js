import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#111] text-white mt-10">
      <div className="grid md:grid-cols-4 gap-8 p-10">
        <div>
          <h2 className="font-bold mb-3">About Us</h2> <hr />
          <p className="text-sm text-gray-300 mt-2">
            The Ultimate One-Stop Solution for all your Real Estate Property
            Needs. Openplot makes property administration simple and affordable
            for real estate business owners.
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-3">Properties for Sale</h2> <hr />
          <p> Properties for sale in Telangana</p>
          <p>Properties for sale in Rangareddy</p>
          <p>Properties for sale in Hanumakonda</p>
          <p>Properties for sale in Yadadri</p>
          <p>Properties for sale in Hyderabad</p>
          <p>Properties for sale in Sangareddy</p>
        </div>

        <div>
          <h2 className="font-bold mb-3">Company</h2> <hr />
          <p>For Partner</p>
          <p>Careers</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div>
          <h2 className="font-bold mb-3">Get in Touch</h2> <hr />
          <p className="flex gap-2 items-center">
            <FaPhoneAlt />
            +91 9914146969
          </p>
          <p className="flex gap-2 items-center">
            <FaPhoneAlt />
            +91 9281064844
          </p>
          <p className="flex gap-2 items-center">
            <FaEnvelope />
            support@openplot.com
          </p>
          <p className="flex gap-2 items-center">
            <FaMapMarkerAlt />
            Hyderabad, Telangana, India
          </p>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 p-4">
       © 2026 Openplot | Privacy Policy |Terms & Conditions| All Rights Reserved
      </div>
    </div>
  );
}

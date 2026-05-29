import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pl-24">
        
        {/* Brand */}
        <div>
          <h3 className="text-white font-bold text-xl">
            Coco Delight
          </h3>
          <p className="mt-4 leading-relaxed">
            Crafting joy through exceptional baked goods.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>

          <div className="space-y-4">
            <p className="flex items-center gap-3 flex-wrap">
              <FaMapMarkerAlt className="text-blue-500 shrink-0" />
              <span>HKA, Road 8, Brick City Estate, Phase 1, Kubwa, Abuja Federal Capital Territory</span>
            </p>

            <p className="flex items-center gap-3 flex-wrap">
              <FaPhone className="text-blue-500 shrink-0" />
              <span>+234 XXX XXX XXXX</span>
            </p>

            <p className="flex items-center gap-3 flex-wrap">
              <FaEnvelope className="text-blue-500 shrink-0" />
              <span className="break-all">
                cocodelight@gmail.com
              </span>
            </p>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Socials
          </h4>

          <div className="flex gap-4 text-xl">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
        © 2026 Coco Delight. All rights reserved.
      </div>
    </footer>
  );
}
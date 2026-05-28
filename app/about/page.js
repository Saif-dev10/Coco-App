import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GiChefToque } from "react-icons/gi";
import { FaGraduationCap, FaBell, FaMedal } from "react-icons/fa6";
import { FaMapMarkerAlt, } from "react-icons/fa";

const features = [
    {
      icon: <GiChefToque size={28} />,
      title: "Skilled & Creative Expertise",
      description:
        "Professional craftsmanship in cakes, pasteries, and event execution with creativity and attention to detail."
    },
    {
      icon: <FaGraduationCap size={28} />,
      title: "Training & Empowerment",
      description:
        "Hands-on practical training that equips individuals with real skills to become confident entrepreneurs."
    },
    {
      icon: <FaBell  size={28} />,
      title: "Memorable Experiences",
      description:
        "Elegent event decorations and catering services that transforms every occasion into unforgettable memories."
    },
    {
      icon: <FaMedal size={28} />,
      title: "Quality & Satisfaction",
      description:
        "We use carefully selected ingredients and maintain professional standards to exceed expectations."
    }
  ];

export default function About() {
  return (
    <>
    <section className="relative min-h-screen bg-[url('/bg-cake-3.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="text-white relative z-10 h-screen flex flex-col justify-center md:ml-55 lg:ml-140">
        <h1 className="text-2xl text-center px-2 md:text-4xl lg:text-5xl">Crafting Memorable Experiences Through Taste, Creativity, and Excellence</h1>

        <p className="text-sm w-full px-2 text-center md:text-sm mt-6 w-100">At Coco Delight, we creat memorable experiences through premium cakes, pastries, practical training, and elegant event services.</p>

        <div className="flex gap-8 mt-4 justify-center">
          <button className="bg-yellow-500 py-2 px-6 rounded-md active:bg-yellow-400 transition cursor-pointer">Explore Courses</button>
          <button className="border py-2 px-6 rounded-md active:bg-white/10 transition cursor-pointer">View our Work</button>
        </div>
        
      </div>
    </section>

    <section className="flex flex-col lg:flex-row px-6 sm:px-10 lg:px-14 bg-gray-100 py-10 gap-8 items-center">

  {/* Image */}
  <div className="bg-[url('/bg-cake-2.jpg')] bg-cover bg-center bg-no-repeat 
                  w-full lg:w-1/2 h-64 sm:h-80 lg:h-[340px] rounded-md">
  </div>

  {/* Content */}
  <div className="w-full lg:w-1/2 flex flex-col gap-6">

    <p className="font-bold text-2xl sm:text-3xl text-gray-800">
      Our Story
    </p>

    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
      What started as a passion for creating beautiful and delicious experiences 
      has grown into a brand trusted by families, event planners, and aspiring 
      entrepreneurs across Abuja.
    </p>

    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
      What started as a passion for creating beautiful and delicious experiences 
      has grown into a brand trusted by families, event planners, and aspiring 
      entrepreneurs across Abuja.
    </p>

    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
      What started as a passion for creating beautiful and delicious experiences 
      has grown into a brand trusted by families, event planners, and aspiring 
      entrepreneurs across Abuja.
    </p>

  </div>
</section>

    <section className="flex flex-col justify-center items-center">

      <div className="">
        {/* FEATURES */}
      <section className="py-18 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold">What We Stand For</h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            ------
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-14">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition"
              >
                <div className="text-blue-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl">{feature.title}</h3>
                <p className="text-gray-600 mt-3">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </section>

    <section className="px-6 sm:px-10 lg:px-14 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Card 1 */}
        <div className="border border-gray-300 p-6 hover:shadow-sm">
          <p className="text-xl sm:text-2xl font-bold">
            Why People Choose Coco Delight
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-[2.2fr_1fr] gap-6 items-start">

            {/* Text */}
            <div className="flex flex-col gap-3 text-sm sm:text-base min-w-0">
              <p>Practical learning with real-life experiences</p>
              <p>Premium ingredients for delicious results</p>
              <p>Professional service with attention to detail</p>
              <p>Elegant and customized event solutions</p>
              <p>Warm, friendly, and reliable customer care</p>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[url('/cake.jpg')] bg-cover bg-center h-48 rounded-md"></div>

              <div className="flex flex-col gap-3">
                <div className="bg-[url('/bg-cake.jpg')] bg-cover bg-center h-22 rounded-md"></div>
                <div className="bg-[url('/bg-cake-4.jpg')] bg-cover bg-center h-22 rounded-md"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 p-6 hover:shadow-sm">
          <p className="text-xl sm:text-2xl font-bold">
            Our Location
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-[2.2fr_1fr] gap-6 items-start">

            {/* Text */}
            <div className="flex flex-col gap-3 text-sm sm:text-base min-w-0">

              <p className="flex items-center gap-3 flex-wrap">
                <FaMapMarkerAlt className="text-blue-500 shrink-0" />
                <span>HKA, Road 8, Brick City Estate, Phase 1, Kubuwa, Abuja Federal Capital Territory</span>
              </p>

              <p className="flex items-center gap-3 flex-wrap">
                <FaMapMarkerAlt className="text-blue-500 shrink-0" />
                <span>HKA, Road 8, Brick City Estate, Phase 1, Kubuwa, Abuja Federal Capital Territory</span>
              </p>
            </div>

            {/* Images */}
            <div className="">
              <div className="bg-[url('/cake.jpg')] bg-cover bg-center h-48 rounded-md"></div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <Footer />
    </>
  )
}
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  FaBirthdayCake,
  FaTruck,
  FaClock,
  FaHeart,
  FaStar,
} from "react-icons/fa";
import Image from "next/image";

export default function Layout() {
  const features = [
    {
      icon: <FaBirthdayCake size={28} />,
      title: "Master Bakers",
      description:
        "Our expert bakers craft each item with passion and decades of experience."
    },
    {
      icon: <FaTruck size={28} />,
      title: "Fast Delivery",
      description:
        "Fresh from our oven to your doorstep within hours."
    },
    {
      icon: <FaClock size={28} />,
      title: "Always Fresh",
      description:
        "Baked daily using premium ingredients."
    },
    {
      icon: <FaHeart size={28} />,
      title: "Made with Love",
      description:
        "Every recipe is handcrafted with care."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "The best cakes I've ever tasted."
    },
    {
      name: "John Able",
      text: "Consistent quality every single time."
    },
    {
      name: "Naomi Paul",
      text: "Perfect for every event I organize."
    }
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-screen bg-[url('/cake.jpg')] bg-cover bg-center sm:bg-center lg:bg-center bg-no-repeat">
       <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-6 max-w-5xl mx-auto">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Taste the Delight in Every Bite
          </h1>

          <p className="text-white/80 text-lg md:text-xl mt-6 max-w-2xl">
            Handcrafted cakes and pastries made with love, delivered fresh to your door.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-500 px-8 py-3 rounded-lg text-white font-semibold cursor-pointer transition">
              Try Now
            </button>

            <button className="border border-white/50 hover:bg-white/10 active:bg-white/20 px-8 py-3 rounded-lg text-white font-semibold cursor-pointer transition">
              View Menu
            </button>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"
                >
                  <Image
                    src="/cake.jpg"
                    width={80}
                    height={80}
                    alt="profile image"
                    className="w-full h-full rounded-full"
                  ></Image>
                </div>
              ))}
            </div>
            <p className="text-white/70">
              Trusted by 10,000+ happy customers
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold">Good Food, Made Easy</h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine traditional baking with modern convenience.
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

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex justify-center text-yellow-500 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <FaStar key={s} />
                  ))}
                </div>

                <p className="italic text-gray-600">
                  {testimonial.text}
                </p>

                <h4 className="font-bold mt-6">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-center py-24 px-6">
        <h2 className="text-white text-5xl font-bold">
          Ready to Taste the Difference?
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Join thousands enjoying our freshly baked creations.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-500 px-8 py-4 rounded-lg text-white font-semibold cursor-pointer">
            Order Now
          </button>

          <button className="border border-gray-500 hover:border-white active:bg-white/20 px-8 py-4 rounded-lg text-white cursor-pointer">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
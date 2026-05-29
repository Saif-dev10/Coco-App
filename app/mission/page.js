import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

import { GiChefToque, GiRibbonMedal } from "react-icons/gi";

import {
  FaHeart,
  FaBullseye,
  FaEye,
  FaStar,
} from "react-icons/fa6";

import {
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

const coreValues = [
  {
    icon: <GiChefToque size={32} />,
    title: "Excellence",
    description:
      "We are committed to excellence in every cake, pastry, and event service we deliver, ensuring the highest standards of quality and creativity.",
  },
  {
    icon: <FaGraduationCap size={32} />,
    title: "Empowerment",
    description:
      "We believe in empowering individuals with practical vocational skills, creating opportunities for financial growth and creative expression.",
  },
  {
    icon: <FaHeart size={32} />,
    title: "Passion",
    description:
      "Our passion drives us to create happiness through quality food services and beautiful event experiences that bring joy to every celebration.",
  },
  {
    icon: <FaUsers size={32} />,
    title: "Customer Focus",
    description:
      "We put our clients first, using carefully selected ingredients and professional techniques to exceed expectations in everything we do.",
  },
];

const achievements = [
  {
    icon: <FaHandshake size={28} />,
    stat: "1000+",
    label: "Satisfied Clients",
  },
  {
    icon: <FaLightbulb size={28} />,
    stat: "Several",
    label: "Successful Trainees",
  },
  {
    icon: <GiRibbonMedal size={28} />,
    stat: "Years",
    label: "Of Trusted Service",
  },
  {
    icon: <FaStar size={28} />,
    stat: "Premium",
    label: "Quality Standard",
  },
];

export default function Mission() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-screen bg-[url('/mission-image.png')] bg-cover bg-center sm:bg-center lg:bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex h-[70vh] flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Our Mission & Vision
          </h1>

          <p className="mt-6 max-w-2xl text-base text-white/80 md:text-lg">
            Delivering exceptional experiences while empowering individuals to
            grow creatively and financially.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/social">
              <button className="rounded-md bg-blue-500 px-8 py-3 font-semibold text-white transition hover:bg-blue-400 active:bg-blue-300 cursor-pointer">
                Join Our Training
              </button>
            </Link>

            <button className="rounded-md border border-white/50 px-8 py-3 font-semibold text-white transition hover:bg-white/10 active:bg-white/20 cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-500 p-3 text-white">
                  <FaBullseye size={24} />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Our Purpose
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>

              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Our mission is to deliver exceptional cakes, pastries, catering,
                and event services while empowering individuals with practical
                vocational skills through professional training.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Cakes",
                  "Pastries",
                  "Small Chops",
                  "Catering",
                  "Training",
                  "Event Decor",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-80 w-full rounded-2xl bg-[url('/group-people.jpg')] bg-cover bg-center shadow-sm sm:h-96 lg:h-[450px]"></div>
          </div>
        </div>
      </section>

      {/* PASSION */}
      <section className="bg-gray-50 px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 h-80 w-full rounded-2xl bg-[url('/close-up-hands.jpg')] bg-cover bg-center shadow-sm sm:h-96 lg:order-1 lg:h-[450px]"></div>

            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-500 p-3 text-white">
                  <FaEye size={24} />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Our Drive
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Passion & Excellence
              </h2>

              <p className="leading-relaxed text-gray-700">
                At Coco-Delight Global Ventures, our passion is creating
                happiness through quality food services and beautiful event
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Core Values
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-left transition hover:shadow-xl"
              >
                <div className="mb-4 text-blue-500">{value.icon}</div>

                <h3 className="text-xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-gray-900 px-6 py-20 text-white sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Impact</h2>

          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-700 bg-gray-800 p-8"
              >
                <div className="mb-4 flex justify-center text-blue-500">
                  {item.icon}
                </div>

                <p className="text-3xl font-bold">{item.stat}</p>
                <p className="mt-2 text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Visit Our Location
            </h2>

            <div className="mt-8 flex items-start gap-4">
              <div className="rounded-lg bg-blue-500 p-2 text-white">
                <FaMapMarkerAlt size={18} />
              </div>

              <p className="text-gray-600">
                HK4, Road 8, Brick City Estate, Phase 1, Kubwa, Abuja
              </p>
            </div>
          </div>

          <div className="h-80 rounded-2xl bg-[url('/location-2.avif')] bg-cover bg-center shadow-sm sm:h-96"></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-900 px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          Be Part of Our Story
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base text-gray-400">
          Join hundreds of satisfied clients who trust Coco-Delight Global
          Ventures.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/social">
            <button className="rounded-lg bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-400 active:bg-blue-300 cursor-pointer">
              Explore Courses
            </button>
          </Link>

          <button className="rounded-lg border border-gray-500 px-8 py-4 text-white transition hover:border-white active:bg-white/10 cursor-pointer">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
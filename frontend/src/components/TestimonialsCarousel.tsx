import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

type Testimonial = {
    name: string
    role: string
    company: string
    education: string
    message: string
    image?: string
    rating?: number
}

const testimonials: Testimonial[] = [
  {
    name: "Ananya",
    role: "Web Development Intern",
    company: "ProjectsPlace",
    education: "BTech - CSE",
    message:
      "ProjectsPlace helped me transform my skills. The live projects boosted my confidence, and now I feel ready for the industry!",
    image: "/images/ananya.jpg",
    rating: 4,
  },
  {
    name: "Pavan",
    role: "AI/ML Intern",
    company: "ProjectsPlace",
    education: "BE - CSE",
    message:
    "Learning through the courses at ProjectsPlace was a game-changer. The hands-on projects helped me strengthen my skills and built the confidence I needed to step into the industry seamlessly.",
    image: "/images/ananya.jpg",
    rating: 4,
  },
  {
    name: "Rahul",
    role: "Python Developer Trainee",
    company: "ProjectsPlace",
    education: "MTech - AI",
    message:
      "I loved the internship experience. The mentors were supportive, and I got hands-on exposure to real-time problems.",
    image: "/images/rahul.jpg",
    rating: 5,
  },
  {
    name: "Meena",
    role: "MCA Student",
    company: "ProjectsPlace",
    education: "MCA",
    message:
      "Thanks to ProjectsPlace, I not only learned but also practiced with real-world projects. I even got placement support!",
    image: "https://thumb.ac-illust.com/11/118a7ffab0bac1bc965071d22c886443_t.jpeg",
    rating: 4,
  },
    {
    name: "Simran",
    role: "BSC Student",
    company: "ProjectsPlace",
    education: "BSC",
    message:
      "Loved the hands-on projects. They helped me crack my interviews! The team was always there for guidance whenever I was stuck, which gave me confidence to tackle challenges.",
    image: "/images/rahul.jpg",
    rating: 4,
  },

]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  // Autoplay every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Get 3 testimonials at once
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <section className="relative py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-300/30 via-transparent to-pink-300/30 blur-3xl"></div>

      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-800">
          What Our Students Say
        </h2>
        <p className="text-gray-600 mb-12 italic">
          Hear from our learners about their journey of growth, learning, and
          success with us.
        </p>

        {/* Carousel Row (3 at a time) */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleTestimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-white"
                />
                <div className="text-left">
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <span className="text-sm opacity-90">{t.role}</span>
                </div>
              </div><br></br>
                 {/* Education */}
              <p className="text-sm mb-2">
                <span className="font-semibold">Education: </span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 font-semibold rounded">
                  {t.education}
                </span>
              </p>

              {/* Message */}
              <div className="p-6">
                <p className="text-gray-700 italic mb-4">"{t.message}"</p>

                {/* ⭐ Rating */}
                <div className="flex justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < (t.rating || 0)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

         {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === currentIndex ? "bg-indigo-500 scale-125" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

        {/* Prev / Next Buttons (Static Below) */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="px-6 py-3 rounded-md bg-gray-300 text-white font-semibold bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-md hover:brightness-110 transition-colors duration-300"
          >
            ⬅ Previous
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-md bg-gray-300 text-white font-semibold bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-md hover:brightness-110 transition-colors duration-300"
          >
            Next ➡
          </button>
        </div>

       
      </div>
    </section>
  )
}










// import { useEffect, useState } from "react"
// import { motion } from "framer-motion"
// import { Star } from "lucide-react"

// type Testimonial = {
//   name: string
//   role: string
//   message: string
//   image?: string
//   rating?: number
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "Ananya",
//     role: "Web Development Intern",
//     message:
//       "ProjectsPlace helped me transform my skills. The live projects boosted my confidence, and now I feel ready for the industry!",
//     image: "/images/ananya.jpg",
//     rating: 5,
//   },
//   {
//     name: "Rahul",
//     role: "Python Developer Trainee",
//     message:
//       "I loved the internship experience. The mentors were supportive, and I got hands-on exposure to real-time problems.",
//     image: "/images/rahul.jpg",
//     rating: 4,
//   },
//   {
//     name: "Meena",
//     role: "MCA Student",
//     message:
//       "Thanks to ProjectsPlace, I not only learned but also practiced with real-world projects. I even got placement support!",
//     image: "https://thumb.ac-illust.com/11/118a7ffab0bac1bc965071d22c886443_t.jpeg",
//     rating: 5,
//   },
//   {
//     name: "Karan",
//     role: "Java Developer",
//     message: "This platform gave me real-world coding exposure. Highly recommend!",
//     image: "/images/karan.jpg",
//     rating: 4,
//   },
//   {
//     name: "Simran",
//     role: "Cloud Engineer",
//     message: "Loved the hands-on projects. They helped me crack my interviews!",
//     image: "/images/simran.jpg",
//     rating: 5,
//   },
// ]

// // Duplicate testimonials to make infinite loop seamless
// const loopedTestimonials = [...testimonials, ...testimonials]

// export default function TestimonialsCarousel() {
//   const [offset, setOffset] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset((prev) => prev - 1) // move left
//     }, 30) // speed of scroll
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="relative py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
//       <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-300/30 via-transparent to-pink-300/30 blur-3xl"></div>

//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4 text-indigo-800">What Our Students Say</h2>
//         <p className="text-gray-600 mb-12 italic">
//           Hear from our learners about their journey of growth, learning, and success with us.
//         </p>

//         {/* Continuous Scrolling Track */}
//         <motion.div
//           className="flex space-x-6"
//           style={{ transform: `translateX(${offset}px)` }}
//         >
//           {loopedTestimonials.map((t, idx) => (
//             <div
//               key={idx}
//               className="min-w-[320px] max-w-sm bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition transform"
//             >
//               {/* Card Header */}
//               <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 flex items-center gap-3">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-14 h-14 rounded-full border-2 border-white shadow-md"
//                 />
//                 <div className="text-left">
//                   <h4 className="font-bold text-lg">{t.name}</h4>
//                   <span className="text-sm opacity-90">{t.role}</span>
//                 </div>
//               </div>

//               {/* Message */}
//               <div className="p-6">
//                 <p className="text-gray-700 italic mb-4">"{t.message}"</p>

//                 {/* ⭐ Rating */}
//                 <div className="flex justify-center">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star
//                       key={i}
//                       size={20}
//                       className={`${
//                         i < (t.rating || 0)
//                           ? "text-yellow-400 fill-yellow-400 drop-shadow"
//                           : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }



// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Package,
//   Phone,
//   Sparkles,
//   Star,
//   Users,
// } from "lucide-react";

// export default function MissionPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-pink-50/30">
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         {/* Split Layout: Mission + Contact */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-16">
//           {/* Left: Mission */}
//           <AnimateOnScroll type="left">
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 bg-white border border-orange-200 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
//                 <Sparkles className="w-4 h-4" />
//                 OUR MISSION
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 Preserving
//                 <br />
//                 Our Heritage
//               </h1>

//               <p className="text-lg text-gray-600 leading-relaxed">
//                 To preserve, promote, and celebrate the cultural heritage of the
//                 Gujarati community while offering a welcoming space for social
//                 and religious activities in Bengaluru.
//               </p>

//               <div className="pt-4">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-600 transition-all shadow-lg group"
//                 >
//                   Learn More
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </div>
//             </div>
//           </AnimateOnScroll>

//           {/* Right: Contact Card */}
//           <AnimateOnScroll type="right" delay={0.1}>
//             <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 lg:p-10 text-white h-full flex flex-col justify-center shadow-2xl">
//               <div className="space-y-6">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm">
//                   <Phone className="w-8 h-8" />
//                 </div>

//                 <div>
//                   <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
//                   <p className="text-orange-50 text-lg">
//                     Have questions? We're here to help you with any queries
//                     about our community.
//                   </p>
//                 </div>

//                 <a
//                   href="tel:+916287678767"
//                   className="inline-block bg-white text-orange-600 px-8 py-4 rounded-2xl text-xl font-bold hover:bg-orange-50 transition-all hover:scale-105 shadow-xl"
//                 >
//                   +91 62876 78767
//                 </a>
//               </div>
//             </div>
//           </AnimateOnScroll>
//         </div>

//         {/* Stats Section - Horizontal Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <AnimateOnScroll delay={0.2} type="up">
//             <motion.div
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 transition-all shadow-sm hover:shadow-lg group"
//             >
//               <div className="flex items-center gap-5">
//                 <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl group-hover:scale-110 transition-transform">
//                   <Users className="w-8 h-8 text-orange-600" />
//                 </div>
//                 <div>
//                   <div className="text-4xl font-bold text-gray-900">1234</div>
//                   <div className="text-gray-600 font-medium">Happy Clients</div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimateOnScroll>

//           <AnimateOnScroll delay={0.3} type="up">
//             <motion.div
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 transition-all shadow-sm hover:shadow-lg group"
//             >
//               <div className="flex items-center gap-5">
//                 <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl group-hover:scale-110 transition-transform">
//                   <Package className="w-8 h-8 text-orange-600" />
//                 </div>
//                 <div>
//                   <div className="text-4xl font-bold text-gray-900">1234</div>
//                   <div className="text-gray-600 font-medium">Shipments</div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimateOnScroll>

//           <AnimateOnScroll delay={0.4} type="up">
//             <motion.div
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 transition-all shadow-sm hover:shadow-lg group"
//             >
//               <div className="flex items-center gap-5">
//                 <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl group-hover:scale-110 transition-transform">
//                   <Star className="w-8 h-8 text-orange-600" />
//                 </div>
//                 <div>
//                   <div className="text-4xl font-bold text-gray-900">1234</div>
//                   <div className="text-gray-600 font-medium">Reviews</div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimateOnScroll>
//         </div>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import {
  ArrowRight,
  Package,
  Phone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-pink-50/30">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Split Layout: Mission + Contact */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Mission */}
          <AnimateOnScroll type="fade-left">
            <div className="space-y-6">
              <AnimateOnScroll type="fade-down" delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-white border border-orange-200 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
                  <Sparkles className="w-4 h-4" />
                  OUR MISSION
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll type="fade-up" delay={0.15}>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Preserving
                  <br />
                  Our Heritage
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll type="fade-up" delay={0.2}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To preserve, promote, and celebrate the cultural heritage of
                  the Gujarati community while offering a welcoming space for
                  social and religious activities in Bengaluru.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll type="zoom-in" delay={0.25}>
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-600 transition-all shadow-lg group"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>

          {/* Right: Contact Card */}
          <AnimateOnScroll type="fade-right" delay={0.15}>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 lg:p-10 text-white h-full flex flex-col justify-center shadow-2xl">
              <AnimateOnScroll type="fade-down" delay={0.2}>
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <Phone className="w-8 h-8" />
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll type="fade-up" delay={0.25}>
                <div>
                  <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
                  <p className="text-orange-50 text-lg">
                    Have questions? We're here to help you with any queries
                    about our community.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll type="zoom-in" delay={0.3}>
                <a
                  href="tel:+916287678767"
                  className="inline-block bg-white text-orange-600 px-8 py-4 rounded-2xl text-xl font-bold hover:bg-orange-50 transition-all hover:scale-105 shadow-xl mt-6"
                >
                  +91 62876 78767
                </a>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimateOnScroll delay={0.2} type="fade-up">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 transition-all shadow-sm hover:shadow-lg group"
            >
              <div className="flex items-center gap-5">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">1234</div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3} type="fade-up">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 transition-all shadow-sm hover:shadow-lg group"
            >
              <div className="flex items-center gap-5">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                  <Package className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">1234</div>
                  <div className="text-gray-600 font-medium">Shipments</div>
                </div>
              </div>
            </motion.div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4} type="fade-up">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 transition-all shadow-sm hover:shadow-lg group"
            >
              <div className="flex items-center gap-5">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">1234</div>
                  <div className="text-gray-600 font-medium">Reviews</div>
                </div>
              </div>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}

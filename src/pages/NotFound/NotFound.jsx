// import { useState, useEffect } from "react";
// import {
//   Home,
//   Search,
//   ArrowLeft,
//   Sparkles,
//   RefreshCw,
//   MapPin,
//   Compass,
//   Zap,
// } from "lucide-react";

// const NotFound = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="mt-30 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
//       {/* Dynamic Gradient Orbs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl transition-all duration-1000 ease-out"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(251,99,50,0.3) 0%, transparent 70%)",
//             left: `${mousePosition.x}%`,
//             top: `${mousePosition.y}%`,
//             transform: `translate(-50%, -50%) scale(${mounted ? 1 : 0})`,
//           }}
//         />
//         <div
//           className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
//             right: "10%",
//             top: "20%",
//             animation: "float 15s ease-in-out infinite",
//           }}
//         />
//         <div
//           className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
//             left: "15%",
//             bottom: "15%",
//             animation: "float 20s ease-in-out infinite reverse",
//           }}
//         />
//       </div>

//       {/* Animated Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//             linear-gradient(to right, #000 1px, transparent 1px),
//             linear-gradient(to bottom, #000 1px, transparent 1px)
//           `,
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-primary/30 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `float ${
//                 8 + Math.random() * 10
//               }s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center py-12">
//         <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl w-full">
//           {/* Left Side - 404 Illustration */}
//           <div
//             className="order-2 lg:order-1 relative"
//             style={{
//               opacity: mounted ? 1 : 0,
//               transform: mounted ? "translateY(0)" : "translateY(30px)",
//               transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
//             }}
//           >
//             <div className="relative">
//               {/* Decorative Background Card */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 rounded-[3rem] rotate-3 scale-105 blur-sm" />

//               {/* Main Card */}
//               <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 sm:p-16 border border-white/20">
//                 {/* Glowing 404 */}
//                 <div className="relative text-center">
//                   <div className="absolute inset-0 flex items-center justify-center opacity-50 blur-3xl">
//                     <div className="text-[14rem] font-black bg-gradient-to-br from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
//                       404
//                     </div>
//                   </div>

//                   <h1
//                     className="relative text-[10rem] sm:text-[14rem] font-black bg-gradient-to-br from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent leading-none select-none"
//                     style={{
//                       transform: mounted ? "scale(1)" : "scale(0.8)",
//                       transition:
//                         "transform 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
//                     }}
//                   >
//                     404
//                   </h1>

//                   {/* Animated Icons Around 404 */}
//                   <div
//                     className="absolute -top-8 left-1/4 w-16 h-16 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center shadow-lg rotate-12"
//                     style={{
//                       animation: "float 6s ease-in-out infinite",
//                     }}
//                   >
//                     <Zap className="w-8 h-8 text-white" />
//                   </div>

//                   <div
//                     className="absolute -bottom-6 right-1/4 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg -rotate-12"
//                     style={{
//                       animation: "float 7s ease-in-out infinite 1s",
//                     }}
//                   >
//                     <Compass className="w-7 h-7 text-white" />
//                   </div>

//                   <div
//                     className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg rotate-45"
//                     style={{
//                       animation: "float 8s ease-in-out infinite 0.5s",
//                     }}
//                   >
//                     <MapPin className="w-6 h-6 text-white" />
//                   </div>
//                 </div>

//                 {/* Status Indicators */}
//                 <div className="flex justify-center gap-3 mt-12">
//                   <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border border-red-100">
//                     <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
//                     <span className="text-xs font-semibold text-red-600">
//                       Page Not Found
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Geometric Shapes */}
//               <div
//                 className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl rotate-12 opacity-20"
//                 style={{ animation: "float 10s ease-in-out infinite" }}
//               />
//               <div
//                 className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl -rotate-12 opacity-20"
//                 style={{ animation: "float 12s ease-in-out infinite 2s" }}
//               />
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div
//             className="order-1 lg:order-2 space-y-8"
//             style={{
//               opacity: mounted ? 1 : 0,
//               transform: mounted ? "translateX(0)" : "translateX(30px)",
//               transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
//             }}
//           >
//             {/* Badge */}
//             <div
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/20 shadow-lg"
//               style={{
//                 transform: mounted ? "translateY(0)" : "translateY(-20px)",
//                 transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s",
//               }}
//             >
//               <Sparkles className="w-4 h-4 text-primary animate-pulse" />
//               <span className="text-sm font-bold text-primary">Error 404</span>
//             </div>

//             {/* Main Heading */}
//             <div className="space-y-6">
//               <h2
//                 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1]"
//                 style={{
//                   transform: mounted ? "translateY(0)" : "translateY(20px)",
//                   transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s",
//                 }}
//               >
//                 Oops!
//                 <br />
//                 <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
//                   Lost in Space
//                 </span>
//               </h2>
//               <p
//                 className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium"
//                 style={{
//                   transform: mounted ? "translateY(0)" : "translateY(20px)",
//                   transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s",
//                 }}
//               >
//                 The page you're searching for has drifted into the digital
//                 cosmos. Let's navigate you back home!
//               </p>
//             </div>

//             {/* Info Cards */}
//             <div
//               className="grid sm:grid-cols-2 gap-4"
//               style={{
//                 transform: mounted ? "translateY(0)" : "translateY(20px)",
//                 transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s",
//               }}
//             >
//               <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
//                   <Search className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="font-bold text-gray-900 mb-2">Wrong URL?</h3>
//                 <p className="text-sm text-gray-600">
//                   Check the address or use our search
//                 </p>
//               </div>

//               <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
//                   <RefreshCw className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="font-bold text-gray-900 mb-2">Page Moved?</h3>
//                 <p className="text-sm text-gray-600">
//                   Content may have relocated
//                 </p>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div
//               className="flex flex-col sm:flex-row gap-4 pt-4"
//               style={{
//                 transform: mounted ? "translateY(0)" : "translateY(20px)",
//                 transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s",
//               }}
//             >
//               <a
//                 href="/"
//                 className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-primary via-orange-500 to-red-500 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-105"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <Home className="w-6 h-6 relative z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
//                 <span className="relative z-10">Return Home</span>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
//                   <div className="absolute inset-0 bg-white blur-xl" />
//                 </div>
//               </a>

//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   window.history.back();
//                 }}
//                 className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-gray-700 font-bold text-lg rounded-2xl border-2 border-gray-200 hover:border-primary hover:text-primary shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
//               >
//                 <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
//                 <span>Go Back</span>
//               </a>
//             </div>

//             {/* Quick Links */}
//             <div
//               className="pt-8 border-t-2 border-gray-100"
//               style={{
//                 transform: mounted ? "translateY(0)" : "translateY(20px)",
//                 transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s",
//               }}
//             >
//               <p className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">
//                 Quick Navigation
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 {[
//                   { name: "About Us", color: "from-blue-500 to-cyan-500" },
//                   { name: "Team", color: "from-purple-500 to-pink-500" },
//                   { name: "Gallery", color: "from-green-500 to-emerald-500" },
//                   { name: "Membership", color: "from-orange-500 to-red-500" },
//                   { name: "Contact", color: "from-indigo-500 to-purple-500" },
//                 ].map((link, i) => (
//                   <a
//                     key={link.name}
//                     href={`/${link.name.toLowerCase().replace(" ", "-")}`}
//                     className="group relative px-5 py-3 text-sm font-bold text-gray-700 bg-white rounded-xl border-2 border-gray-200 hover:border-transparent shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 overflow-hidden"
//                     style={{
//                       transform: mounted ? "translateY(0)" : "translateY(20px)",
//                       transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${
//                         1 + i * 0.1
//                       }s`,
//                     }}
//                   >
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//                     />
//                     <span className="relative z-10 group-hover:text-white transition-colors duration-300">
//                       {link.name}
//                     </span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) rotate(0deg);
//           }
//           25% {
//             transform: translateY(-25px) rotate(8deg);
//           }
//           50% {
//             transform: translateY(-15px) rotate(-8deg);
//           }
//           75% {
//             transform: translateY(-35px) rotate(5deg);
//           }
//         }

//         .bg-primary {
//           background-color: #fb6332;
//         }

//         .text-primary {
//           color: #fb6332;
//         }

//         .border-primary {
//           border-color: #fb6332;
//         }

//         .from-primary {
//           --tw-gradient-from: #fb6332;
//           --tw-gradient-to: rgb(251 99 50 / 0);
//           --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
//         }

//         .to-primary {
//           --tw-gradient-to: #fb6332;
//         }

//         .via-primary {
//           --tw-gradient-to: rgb(251 99 50 / 0);
//           --tw-gradient-stops: var(--tw-gradient-from), #fb6332, var(--tw-gradient-to);
//         }

//         .shadow-primary\/50 {
//           --tw-shadow-color: rgb(251 99 50 / 0.5);
//           --tw-shadow: var(--tw-shadow-colored);
//         }

//         .hover\:border-primary:hover {
//           border-color: #fb6332;
//         }

//         .hover\:text-primary:hover {
//           color: #fb6332;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default NotFound;
import { useState, useEffect } from "react";
import {
  Home,
  Search,
  ArrowLeft,
  Sparkles,
  RefreshCw,
  MapPin,
  Compass,
  Zap,
} from "lucide-react";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden pt-20 md:pt-24">
      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full opacity-30 blur-3xl transition-all duration-1000 ease-out animate-fade-in"
          style={{
            background:
              "radial-gradient(circle, rgba(251,99,50,0.3) 0%, transparent 70%)",
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full opacity-20 blur-3xl animate-float right-[10%] top-[20%] bg-gradient-radial-purple" />
        <div className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full opacity-20 blur-3xl animate-float-reverse left-[15%] bottom-[15%] bg-gradient-radial-blue" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-primary/30 rounded-full animate-float-particle particle-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center justify-center py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl w-full">
          {/* Left Side - 404 Illustration */}
          <div
            className={`order-2 lg:order-1 relative transition-all duration-1000 ease-out-back ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative">
              {/* Decorative Background Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] rotate-3 scale-105 blur-sm" />

              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-12 lg:p-16 border border-white/20">
                {/* Glowing 404 */}
                <div className="relative text-center">
                  <div className="absolute inset-0 flex items-center justify-center opacity-50 blur-3xl">
                    <div className="text-[8rem] sm:text-[10rem] lg:text-[14rem] font-black bg-gradient-to-br from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                      404
                    </div>
                  </div>

                  <h1
                    className={`relative text-[8rem] sm:text-[10rem] lg:text-[14rem] font-black bg-gradient-to-br from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent leading-none select-none transition-transform duration-1000 ease-out-back delay-200 ${
                      mounted ? "scale-100" : "scale-80"
                    }`}
                  >
                    404
                  </h1>

                  {/* Animated Icons Around 404 */}
                  <div className="absolute -top-4 sm:-top-6 lg:-top-8 left-1/4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg rotate-12 animate-float">
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  <div className="absolute -bottom-4 sm:-bottom-5 lg:-bottom-6 right-1/4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg -rotate-12 animate-float delay-1000">
                    <Compass className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>

                  <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg rotate-45 animate-float delay-500">
                    <MapPin className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-white" />
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 lg:mt-12">
                  <div className="flex items-center gap-2 bg-red-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-red-100">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-red-600">
                      Page Not Found
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Geometric Shapes */}
              <div className="absolute -top-4 sm:-top-5 lg:-top-6 -right-4 sm:-right-5 lg:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl sm:rounded-3xl rotate-12 opacity-20 animate-float" />
              <div className="absolute -bottom-6 sm:-bottom-7 lg:-bottom-8 -left-6 sm:-left-7 lg:-left-8 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl -rotate-12 opacity-20 animate-float delay-2000" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`order-1 lg:order-2 space-y-6 sm:space-y-8 transition-all duration-1000 ease-out-back delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-primary/20 shadow-lg transition-all duration-700 ease-out-back delay-400 ${
                mounted ? "translate-y-0" : "-translate-y-8"
              }`}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-primary">
                Error 404
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h2
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] transition-all duration-800 ease-out-back delay-500 ${
                  mounted ? "translate-y-0" : "translate-y-8"
                }`}
              >
                Oops!
                <br />
                <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Lost in Space
                </span>
              </h2>
              <p
                className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium transition-all duration-800 ease-out-back delay-600 ${
                  mounted ? "translate-y-0" : "translate-y-8"
                }`}
              >
                The page you're searching for has drifted into the digital
                cosmos. Let's navigate you back home!
              </p>
            </div>

            {/* Info Cards */}
            <div
              className={`grid sm:grid-cols-2 gap-3 sm:gap-4 transition-all duration-800 ease-out-back delay-700 ${
                mounted ? "translate-y-0" : "translate-y-8"
              }`}
            >
              <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-orange-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Search className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">
                  Wrong URL?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Check the address or use our search
                </p>
              </div>

              <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-purple-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <RefreshCw className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">
                  Page Moved?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Content may have relocated
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 transition-all duration-800 ease-out-back delay-800 ${
                mounted ? "translate-y-0" : "translate-y-8"
              }`}
            >
              <a
                href="/"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-primary via-orange-500 to-red-500 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Home className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="relative z-10">Return Home</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-white blur-xl" />
                </div>
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.back();
                }}
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-white text-gray-700 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-primary hover:text-primary shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-2 transition-transform duration-300" />
                <span>Go Back</span>
              </a>
            </div>

            {/* Quick Links */}
            <div
              className={`pt-6 sm:pt-8 border-t-2 border-gray-100 transition-all duration-800 ease-out-back delay-900 ${
                mounted ? "translate-y-0" : "translate-y-8"
              }`}
            >
              <p className="text-xs sm:text-sm font-bold text-gray-500 mb-3 sm:mb-4 uppercase tracking-wider">
                Quick Navigation
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  { name: "About Us", color: "from-blue-500 to-cyan-500" },
                  { name: "Team", color: "from-purple-500 to-pink-500" },
                  { name: "Gallery", color: "from-green-500 to-emerald-500" },
                  { name: "Membership", color: "from-orange-500 to-red-500" },
                  { name: "Contact", color: "from-indigo-500 to-purple-500" },
                ].map((link, i) => (
                  <a
                    key={link.name}
                    href={`/${link.name.toLowerCase().replace(" ", "-")}`}
                    className={`group relative px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-bold text-gray-700 bg-white rounded-lg sm:rounded-xl border-2 border-gray-200 hover:border-transparent shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 overflow-hidden animate-fade-in-up`}
                    style={{ animationDelay: `${1000 + i * 100}ms` }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-25px) rotate(8deg);
          }
          50% {
            transform: translateY(-15px) rotate(-8deg);
          }
          75% {
            transform: translateY(-35px) rotate(5deg);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(35px) rotate(-8deg);
          }
          50% {
            transform: translateY(15px) rotate(8deg);
          }
          75% {
            transform: translateY(25px) rotate(-5deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
          to {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 20s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-float-particle {
          animation: float 15s ease-in-out infinite;
        }

        .delay-200 { animation-delay: 200ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-2000 { animation-delay: 2000ms; }

        .ease-out-back {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .duration-700 { transition-duration: 700ms; }
        .duration-800 { transition-duration: 800ms; }
        .duration-1000 { transition-duration: 1000ms; }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .bg-gradient-radial-purple {
          background: radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%);
        }

        .bg-gradient-radial-blue {
          background: radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%);
        }

        .scale-80 { transform: scale(0.8); }

        .bg-primary {
          background-color: #fb6332;
        }

        .text-primary {
          color: #fb6332;
        }

        .border-primary {
          border-color: #fb6332;
        }

        .from-primary {
          --tw-gradient-from: #fb6332;
          --tw-gradient-to: rgb(251 99 50 / 0);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }

        .to-primary {
          --tw-gradient-to: #fb6332;
        }

        .via-primary {
          --tw-gradient-to: rgb(251 99 50 / 0);
          --tw-gradient-stops: var(--tw-gradient-from), #fb6332, var(--tw-gradient-to);
        }

        .shadow-primary\/50 {
          --tw-shadow-color: rgb(251 99 50 / 0.5);
          --tw-shadow: var(--tw-shadow-colored);
        }

        .hover\\:border-primary:hover {
          border-color: #fb6332;
        }

        .hover\\:text-primary:hover {
          color: #fb6332;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;

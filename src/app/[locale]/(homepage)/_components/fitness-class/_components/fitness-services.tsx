// import { Button } from "@/components/ui/button";
// import { useTranslations } from "use-intl";

// export default function FitnessServices() {
//   const t = useTranslations();
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Services Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
//             EMPOWERING YOU TO ACHIEVE{" "}
//             <span className="text-orange-500">YOUR FITNESS GOALS</span>
//           </h2>
//           <p className="text-center text-gray-600 mb-12">
//             We believe fitness is more than just a workout—it’s a lifestyle.
//             With top-of-the-line facilities, certified trainers, and a
//             supportive community, we’re here to inspire and guide you every step
//             of the way.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <img
//                 src="/trainer-1.jpg"
//                 alt="Personal Trainer"
//                 className="rounded-lg mx-auto mb-4 w-3/4 h-auto"
//               />
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Personal Trainer
//               </h3>
//               <p className="text-gray-600">
//                 Achieve your fitness goals with the guidance of our certified
//                 trainers.
//               </p>
//             </div>
//             <div className="text-center">
//               <img
//                 src="/trainer-2.jpg"
//                 alt="Cardio Programs"
//                 className="rounded-lg mx-auto mb-4 w-3/4 h-auto"
//               />
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Cardio Programs
//               </h3>
//               <p className="text-gray-600">
//                 From steady-state runs to interval sprints, our treadmill
//                 programs.
//               </p>
//             </div>
//             <div className="text-center">
//               <img
//                 src="/trainer-3.jpg"
//                 alt="Quality Equipment"
//                 className="rounded-lg mx-auto mb-4 w-3/4 h-auto"
//               />
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Quality Equipment
//               </h3>
//               <p className="text-gray-600">
//                 Our gym is equipped with the latest cardio & strength machines.
//               </p>
//             </div>
//             <div className="text-center">
//               <img
//                 src="/trainer-4.jpg"
//                 alt="Healthy Nutrition"
//                 className="rounded-lg mx-auto mb-4 w-3/4 h-auto"
//               />
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Healthy Nutrition
//               </h3>
//               <p className="text-gray-600">
//                 Fuel your fitness journey with customized meal plans for you.
//               </p>
//             </div>
//           </div>
//           <div className="text-center mt-12">
//             <Button className="bg-orange-500 text-white hover:bg-orange-600">
//               Get Started
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Workouts Section */}
//       <section className="py-16 bg-gray-200">
//         <div className="container mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
//             TRANSFORM YOUR BODY WITH OUR{" "}
//             <span className="text-orange-500">DYNAMIC UPCOMING WORKOUTS</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               <img
//                 src="/workout-1.jpg"
//                 alt="Group Workout"
//                 className="rounded-lg mb-4 w-full h-auto"
//               />
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Group Workout
//               </h3>
//               <Button variant="link" className="text-orange-500">
//                 Explore
//               </Button>
//             </div>
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               <img
//                 src="/workout-2.jpg"
//                 alt="Personal Training"
//                 className="rounded-lg mb-4 w-full h-auto"
//               />
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Personal Training
//               </h3>
//               <Button variant="link" className="text-orange-500">
//                 Explore
//               </Button>
//             </div>
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               <img
//                 src="/workout-3.jpg"
//                 alt="Muscle Building"
//                 className="rounded-lg mb-4 w-full h-auto"
//               />
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Muscle Building
//               </h3>
//               <Button variant="link" className="text-orange-500">
//                 Explore
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-8 px-4 md:py-16 md:px-8 lg:py-20 lg:px-12 bg-white text-gray-800">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
//             EMPOWERING YOU TO ACHIEVE{" "}
//             <span className="text-orange-500">YOUR FITNESS GOALS</span>
//           </h2>
//           <p className="text-center text-sm md:text-base lg:text-lg mb-6 text-gray-600">
//             We believe fitness is more than just a workout—it’s a lifestyle.
//             With top-of-the-line facilities, certified trainers, and a
//             supportive community, we’re here to inspire and guide you every step
//             of the way.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="text-center">
//               <img
//                 src="/trainer-1.jpg"
//                 alt="Personal Trainer"
//                 className="w-3/4 mx-auto mb-2 rounded-lg"
//               />
//               <h3 className="text-base md:text-lg font-semibold">
//                 Personal Trainer
//               </h3>
//               <p className="text-xs md:text-sm text-gray-600">
//                 Achieve your fitness goals with the guidance of our certified
//                 trainers.
//               </p>
//             </div>
//             <div className="text-center">
//               <img
//                 src="/trainer-2.jpg"
//                 alt="Cardio Programs"
//                 className="w-3/4 mx-auto mb-2 rounded-lg"
//               />
//               <h3 className="text-base md:text-lg font-semibold">
//                 Cardio Programs
//               </h3>
//               <p className="text-xs md:text-sm text-gray-600">
//                 From steady-state runs to interval sprints, our treadmill
//                 programs.
//               </p>
//             </div>
//             <div className="text-center">
//               <img
//                 src="/trainer-3.jpg"
//                 alt="Quality Equipment"
//                 className="w-3/4 mx-auto mb-2 rounded-lg"
//               />
//               <h3 className="text-base md:text-lg font-semibold">
//                 Quality Equipment
//               </h3>
//               <p className="text-xs md:text-sm text-gray-600">
//                 Our gym is equipped with the latest cardio & strength machines.
//               </p>
//             </div>
//             <div className="text-center">
//               <img
//                 src="/trainer-4.jpg"
//                 alt="Healthy Nutrition"
//                 className="w-3/4 mx-auto mb-2 rounded-lg"
//               />
//               <h3 className="text-base md:text-lg font-semibold">
//                 Healthy Nutrition
//               </h3>
//               <p className="text-xs md:text-sm text-gray-600">
//                 Fuel your fitness journey with customized meal plans for you.
//               </p>
//             </div>
//           </div>
//           <div className="mt-6 text-center">
//             <Button className="bg-orange-500 text-white w-full max-w-xs hover:bg-orange-600">
//               Get Started
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

export default function FitnessServices() {
  <div>fitness-services</div>;
}

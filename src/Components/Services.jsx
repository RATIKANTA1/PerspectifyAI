import service1 from '../assets/services1.jpg'
import service2 from '../assets/services2.jpg'
import service3 from '../assets/tele25.jpg'

  function Services() {
    return (
      <section id="services" className="bg-black py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Services</h2>
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-8">
          {/* Service 1 */}
          <div className="flex flex-col bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-800 duration-300 w-full sm:w-3/4 md:w-[47%] lg:w-1/3">
            <img
              src={service3}
              alt="Service 3"
              className="w-full h-42 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-500">Try PerspectifyAi</h3>
            <p className="mt-4 text-gray-300 text-lg text-justify leading-normal tracking-tight">
              Start Your Journey with PerspectifyAI. Create your own personalized via Telegram.
            </p>
            <a
              href="https://t.me/perspectifybot?start=1714227342318"
              className="px-3 py-2 bg-purple-300 hover:bg-purple-400 text-black mt-4 rounded-md font-semibold block"
              target="blank"
            >
              Telegram
            </a>
          </div>


          <div className="flex flex-col bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-800 duration-300 w-full sm:w-3/4 md:w-[47%] lg:w-1/3">
            <img
              src={service1}
              alt="Service 1"
              className="w-full h-42 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-500 hover:text-700">
              Financial Planning
            </h3>
            <p className="mt-4 text-gray-300 text-lg leading-normal tracking-tight text-justify">
              Tailored strategies to help you manage your money and investments effectively. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi natus perferendis, nihil optio quia culpa impedit necessitatibus cumque! Et ipsam assumenda cupiditate.
            </p>
          </div>
    
          {/* Service 2 */}
          <div className="flex flex-col bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-800 duration-300 w-full sm:w-3/4 md:w-[47%] lg:w-1/3">
            <img
              src={service2}
              alt="Service 2"
              className="w-full h-42 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-500 hover:text-700">
              Investment Advice
            </h3>
            <p className="mt-4 text-gray-300 text-lg text-justify leading-normal tracking-tight">
              Expert insights into maximizing your investment returns safely and sustainably. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem eaque temporibus aut mollitia minus delectus ipsa sequi consectetur cumque. Reiciendis fugit neque voluptatum?
            </p>
          </div>
    
          {/* Service 3 */}
         
        </div>
      </div>
    </section>
    
    

    );
  }
  
  export default Services;
  
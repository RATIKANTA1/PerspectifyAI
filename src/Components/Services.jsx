import service1 from '../assets/services1.jpg'
import service2 from '../assets/services2.jpg'
import service3 from '../assets/services3.jpg'

  function Services() {
    return (
      <section className="bg-black py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-500 p-6 rounded-lg shadow-lg">
              <img src={service1} alt="Service 1" className="w-full h-42 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold">Financial Planning</h3>
              <p className="mt-4">Tailored strategies to help you manage your money and investments effectively. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi natus perferendis, nihil optio quia culpa impedit necessitatibus cumque! Et ipsam assumenda cupiditate.</p>
            </div>
            <div className="bg-gray-500 p-6 rounded-lg shadow-lg">
              <img src={service2} alt="Service 2" className="w-full h-42 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold">Investment Advice</h3>
              <p className="mt-4">Expert insights into maximizing your investment returns safely and sustainably. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem eaque temporibus aut mollitia minus delectus ipsa sequi consectetur cumque. Reiciendis fugit neque voluptatum?</p>
            </div>
            <div className="bg-gray-500 p-6 rounded-lg shadow-lg">
              <img src={service3} alt="Service 3" className="w-full h-42 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold">Debt Management</h3>
              <p className="mt-4">Personalized plans to help you manage and reduce your debts more efficiently. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit exercitationem aliquam repellendus quaerat neque. Minus adipisci dignissimos perferendis similique, eaque odit magnam inventore!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  
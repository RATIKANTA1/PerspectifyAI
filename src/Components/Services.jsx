function Services() {
    return (
      <section className="p-12 text-center">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-4 shadow-md">
            <h3 className="font-semibold">Financial Planning</h3>
            <p>Tailored strategies to help you manage your money.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="font-semibold">Investment Advice</h3>
            <p>Expert insights into maximizing returns on investments.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="font-semibold">Debt Management</h3>
            <p>Strategies to manage and reduce debt effectively.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  
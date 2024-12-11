function Header() {
    return (
      <header className="bg-blue-600 p-4 text-white">
        <nav className="flex justify-between">
          <h1 className="text-2xl">Financial Mentor</h1>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <img className="md:w-auto w-[30%]" src="/images/logo.svg" alt="fylo-company-logo" />
      <ul className="flex md:space-x-10 space-x-4">
        <li>
          <a className="font-medium" href="#">Features</a>
        </li>
        <li>
          <a className="font-medium" href="#">Team</a>
        </li>
        <li>
          <a className="font-medium" href="#">Sign In</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
import "@/style/navbar.css";

const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      label: "Matoza",
    },
    {
      id: 2,
      label: "Shopping",
    },
    {
      id: 3,
      label: "About Us",
    },
    {
      id: 4,
      label: "Contact Us",
    },
  ];

  return (
    <nav className='main-navbar'>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
          gap: "30px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {menuItems.map((item) => (
          <li key={item.label} className='navbar-button'>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

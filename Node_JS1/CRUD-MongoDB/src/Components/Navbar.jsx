import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const link = [
    { path: "/", element: "Home" },
    { path: "/userCreate", element: "Create" },
    { path: "/userRead", element: "Read" },
    { path: "/userUpdate", element: "Update" },
    { path: "/userDelete", element: "Delete" },
  ];
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {link.map((el,id) => (
          <NavLink
            key={id}
            to={el.path}
          >
            {el.element}
          </NavLink>
        ))}
      </div>
    </>
  );
};

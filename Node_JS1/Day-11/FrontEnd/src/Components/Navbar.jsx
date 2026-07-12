import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const link = [
        {path: "/", element: "Home"},
        {path: "/todo", element: "Todo"},
        {path: "/signup", element: "SignUp"},
        {path: "/login", element: "Login"}
    ]

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {
                    link && link.map((el,id) => (
                        <NavLink key={id} to={el.path}>{el.element}</NavLink>
                    ))
                }
            </div>
        </>
    )
}
import { NavLink } from "react-router-dom"

const Navbar = ()=>{

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
           <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
                <NavLink to='/'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                }>
                   Sophi
                </NavLink>
            </li>
            <li>
                <NavLink to='/'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
             }>
                   All
                </NavLink>
            </li>
            <li>
                <NavLink to='/clothes'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
             }>
                   Clothes
                </NavLink>
            </li>
            <li>
                <NavLink to='/electronics'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
             }>
                   Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/futnitures'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
             }>
                   Futnitures
                </NavLink>
            </li>
            <li>
                <NavLink to='/toys'
                 className={({ isActive }) => 
                 isActive ? activeStyle : undefined
             }>
                   Toys
                </NavLink>
            </li>
            <li>
                <NavLink to='/other'
                 className={({ isActive }) => 
                 isActive ? activeStyle : undefined
             }>
                   Other
                </NavLink>
            </li>
           </ul>
           <ul className="flex items-center gap-3" >
            <li className="text-black/60">
                festCode@Fe.com
            </li>
            <li>
                <NavLink 
                    to='/MyOrders'
                    className={({ isActive }) => 
                 isActive ? activeStyle : undefined
             }>
                   My Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/MyAcount'
                    className={({ isActive }) => 
                 isActive ? activeStyle : undefined
             }>
                   My Account
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/SignIn'
                    className={({ isActive }) => 
                 isActive ? activeStyle : undefined
             }>
                   Sign In
                </NavLink>
            </li>

                🛍️
           </ul>
        </nav>
    )
}

export default Navbar
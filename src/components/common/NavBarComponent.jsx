
import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext.jsx"
export default function NavBarComponent() {

    const { navMainLinks, setNavMainLinks, navSubLinks, setNavSubLinks } = useContext(GlobalContext);



    return (
        <div className="flex flex-col gap-2 p-3 text-(--dark-theme) bg-(--lightest-theme)">

            <nav className="flex gap-10 justify-center">
                {navMainLinks.map((link) => {
                    return (
                        <NavLink key={link.id} to={link.linkAddress}>
                            {({ isActive }) => (
                                <h2 className={isActive ? "text-(--theme) border-bottom-light-theme" : ""} >{link.linkName}</h2>

                            )}

                        </NavLink>
                    )
                })}
            </nav>

            <nav className="flex gap-10 justify-center">
                {navSubLinks.map((link) => {
                    return (
                        <NavLink key={link.id} to={link.linkAddress}>
                            {({ isActive }) => (
                                <p className={isActive ? "text-(--theme) border-bottom-light-theme" : ""} >{link.linkName}</p>

                            )}
                        </NavLink>
                    )
                })}
            </nav>

        </div>

    )
}
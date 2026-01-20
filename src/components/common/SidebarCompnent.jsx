import { useState } from "react"
import { NavLink } from "react-router-dom"

function SidebarComponent({ infos }) {

    const [showbar, setShowbar] = useState(true)

    return (
        <div className="sidebar flex flex-col w-90 border-right-theme shadow-lg fixed pt-30 bg-(--dark-theme) text-(--lightest-theme) overflow-y-scroll p-8  z-1">

            {infos.map((info) => {
                return (
                    <NavLink key={info.id} to={info.route} className={` flex hover:text-(--light-theme) items-center ${({ isActive }) => (isActive ? 'text-(--light-theme)' : '')}`}>
                        {({ isActive }) => (isActive ? <i class="fa-solid fa-caret-right"></i> : null)}

                        <h1 className="my-3">{info.title}</h1>
                    </NavLink>
                )
            })}

        </div>
    )

}

export default SidebarComponent;
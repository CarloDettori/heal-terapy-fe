import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
function SidebarComponent({ infos }) {

    const { showbar, setShowbar } = useContext(GlobalContext)

    return (
        <div className={`sidebar flex flex-col border-right-theme shadow-lg bg-(--dark-theme) text-(--lightest-theme) overflow-y-scroll hide-scrollbar p-2  pt-25 z-1 unshrink`}>
            <button className="cursor-pointer ms-auto" onClick={showbar ? () => { setShowbar(false) } : () => { setShowbar(true) }}>
                {showbar ?
                    <i class=" w-full fa-solid fa-right-from-bracket rotate-180 text-left"></i>
                    :
                    <i class="fa-solid fa-right-to-bracket"></i>
                }

            </button>
            <div className={`flex flex-col ${showbar ? "" : "hide-sidebar"}`}>
                {infos.map((info) => {
                    return (
                        <NavLink key={info.id} to={info.route} className={` px-8 flex hover:text-(--light-theme) items-center ${({ isActive }) => (isActive ? 'text-(--light-theme)' : '')}`}>
                            {({ isActive }) => (isActive ? <i class="fa-solid fa-caret-right"></i> : null)}

                            <h1 className="my-3">{info.title}</h1>
                        </NavLink>
                    )
                })}
            </div>

        </div>
    )

}

export default SidebarComponent;
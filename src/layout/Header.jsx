import { NavLink, Route, Routes } from "react-router-dom"
import { useState } from "react"



export default function Header() {




    return (
        <header className="flex flex-col h-(--header-height) bg-(--light-theme) text-(--lightest-theme) text-center justify-between">
            <NavLink to="/" onClick={() => setSelected(0)}><h1 >AMBULATORIO RIGENERATIVO</h1></NavLink>
            <nav className="flex justify-evenly gap-0.5">
                <NavLink id="link-1" className="navlink" style={({ isActive }) => ({
                    borderColor: isActive ? "var(--lightest-theme)" : "var(--dark-theme)",
                })} to="us" onClick={() => setSelected(1)}>
                    <img className="nav-icon" src="" alt="icon" />
                    <h2 className="mr-auto">Chi Siamo</h2>
                </NavLink>
                <NavLink id="link-2" className="navlink" style={({ isActive }) => ({
                    borderColor: isActive ? "var(--lightest-theme)" : "var(--dark-theme)",
                })} to="info" onClick={() => setSelected(2)}>
                    <img className="nav-icon" src="" alt="icon" />
                    <h2 className="mr-auto">Info</h2>
                </NavLink>
                <NavLink id="link-3" className="navlink" style={({ isActive }) => ({
                    borderColor: isActive ? "var(--lightest-theme)" : "var(--dark-theme)",
                })} to="contact" onClick={() => setSelected(3)}>
                    <img className="nav-icon" src="" alt="icon" />
                    <h2 className="mr-auto">Contattaci</h2>
                </NavLink>
            </nav>
        </header>
    )
}
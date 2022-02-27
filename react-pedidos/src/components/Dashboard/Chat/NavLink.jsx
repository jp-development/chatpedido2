import react from "react"
import { NavLink } from "react-router-dom"


const Navlink = () => {
    return (
        <>
            <nav>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "text-lg font-bold flex items-center gap-1 fill-white mx-3 bg-primary p-2 text-white rounded-lg "
                            : "text-lg font-bold text-black flex items-center gap-1 fill-black mx-3"
                    }
                    to="/admin/chat/"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                    >
                        <path d="M408,48H104a72.08,72.08,0,0,0-72,72V312a72.08,72.08,0,0,0,72,72h24v64a16,16,0,0,0,26.25,12.29L245.74,384H408a72.08,72.08,0,0,0,72-72V120A72.08,72.08,0,0,0,408,48ZM160,248a32,32,0,1,1,32-32A32,32,0,0,1,160,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,248Z" />{" "}
                    
                    </svg>

                    Chat
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "text-lg font-bold flex items-center gap-1 fill-white mx-3 bg-primary p-2 text-white rounded-lg "
                            : "text-lg font-bold text-black flex items-center gap-1 fill-black mx-3"
                    }
                    to="bells"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                    >
                        <polygon points="496 496 16 496 16 16 48 16 48 464 496 464 496 496" />
                        <path d="M192,432H80V208H192Z" />
                        <path d="M336,432H224V160H336Z" />
                        <path d="M479.64,432h-112V96h112Z" />
                    </svg>
                    Campañas
                </NavLink>
            </nav>
        </>
    )
}

export default Navlink
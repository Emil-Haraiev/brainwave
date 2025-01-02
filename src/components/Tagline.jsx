import braskets from "../assets/svg/Brackets.jsx"

const Tagline = ({ className, children }) => {
    return(
        <div className={`tagline flex items-center ${className || ""}`}>
            {braskets("left")}
            <div className="mx-3 text-n-3">{children}</div>
            {braskets("right")}
        </div>
    )
}

export default Tagline
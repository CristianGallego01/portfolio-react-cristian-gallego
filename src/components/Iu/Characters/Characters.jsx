import personajes from "/src/assets/personajes.jpeg";
import "./Characters.css"

export const Characters = () => {

    return(
        <section className="character-photo">
            <img className="photocharacter" src={personajes} alt="" />
        </section>
    )
}
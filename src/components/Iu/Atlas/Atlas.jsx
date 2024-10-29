import atlas from "/src/assets/atlas.jpeg";
import "./Atlas.css"

export const Atlas = () => {

    return(
        <section className="atlas-photo">
            <img className="photoAtlas" src={atlas} alt="" />
        </section>
    )
}
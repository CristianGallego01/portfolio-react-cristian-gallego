import { ApiPhoto } from "../../Iu/ApiPhoto/ApiPhoto"
import { Atlas } from "../../Iu/Atlas/Atlas"
import { Characters } from "../../Iu/Characters/Characters"
import "./Projects.css"

export const Projects = () =>{
    return(
        <>
        <div className="tittle">
            <h2>Proyectos</h2>
        </div>

        <section className="projects">
        <div className="projects-cards">
            <div className="img-projects">
            <ApiPhoto/>
            </div>
            <div className="description">
                <p>
                Proyecto en el cual se realiza el consumo de una api donde se expone un ejemplo de tienda y su carrito de compras
                <a href="https://api-store-lac.vercel.app/" target="_blank"> conocer mas...</a>
                </p>
            </div>    
        </div>
        <div className="projects-cards">
            <div className="img-projects">
            <Characters/>
            </div>
            <div className="description">
                <p>
                Projecto en el cual se realiza un recorrido de arreglo para generar tarjetas de personajes
                <a href="https://simpsons-nine.vercel.app/" target="_blank"> conocer mas...</a>
                </p>
            </div>    
        </div>
        <div className="projects-cards">
            <div className="img-projects">
            <Atlas/>
            </div>
            <div className="description">
                <p>
                simulacion de sitio web en el cual se puso en practica el manejo de html y css
                <a href="https://atlas-khaki-beta.vercel.app/" target="_blank"> conocer mas...</a>
                </p>
            </div>    
        </div>
        </section>
        
        </>
    )

}

import "./Footer.css"
export const Footer = () =>{
return(
    <>
    <section className="contact">
    <div className="contact-me">
    <h2>Contactame</h2>
    <p>
    Si desea ponerse en contacto, preguntas o comentarios no dude en hacerlo <br />atraves de los siguientes medios
    </p>
    <p>
    Correo : cristiancmgalleg@gmail.com
    </p>
    <p>
    Telefono : +57 3184590437
    </p>
    </div>

    <div className="your-contact">
    <div> 
    <h2>Te contactamos</h2>
    <p>
    Nombre 
    </p>
    <input type="text" />
    <p>
    Correo
    </p>
    <input type="text" />
    </div>
    <div className="comment">
        <p>
        Comentarios
        </p>
        <input className= "input-comment" type="text" />
    </div>
    
    </div>
    </section>
    
    </>
)
}
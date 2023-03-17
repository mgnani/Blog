import './App.css';
import Header from './componentes/header';
import Section from './componentes/section';
import Skill from './componentes/skill';
import foto_perfil from './imagenes/nahuel_perez.jpg'
import Project from './componentes/project';
import Footer from './componentes/footer';
import Fondo from './componentes/fondo';
import Nav from './componentes/nav';
import PopUp from './componentes/popup';
import Porcentaje from './componentes/skill_porcentaje';

function App() {
    
    


  return (
    <div className="App" >
        <Fondo/>
        <Nav/>
        <Header/>
        <Fondo/>
        <Section titulo="About me" color="claro">
            <div className='info_container'>
                <div className="sobre_mi">
                    <div className="mi_foto">
                        <img src={foto_perfil} alt="Nahuel Perez" className="perfil"/>
                        
                    </div>
                    <div className="presentation">
                        <div>
                            <h2>I´m Nahuel Perez</h2>
                            <p>
                                Web developer with many years of experience, I have always been passionate about computing since I was very young.
                                I has been working with different programming languages for 5 years.
                            </p>
                        </div>
                    </div>
                </div>
                <form action="">
                    <button className="cv">Dowload CV</button>
                </form>
            </div>
            
      </Section>
      <PopUp /> 
      <Fondo/>
      <Section titulo="My projects" color="obscuro">
        <div className='container_project'>
          <Project imagen="web" titulo="Diseño web" texto="Diseño rapido y hermoso con una experiencia de usuario agradable"/>
          <Project imagen="project" titulo="Proyectos" texto="Creados para ampliar mis conocimientos sobre el manejo de lenguajes "/>
          <Project imagen="app" titulo="Apps" texto="Pensada con el objetivo de un uso personal con que logre ser masivo"/>
        </div>
        </Section>
        <Fondo/>
      <Section titulo="Skills" color="claro">
        <div className="container_skills">
          <div className="img_container_skills">
            <Skill imagen="HTML_logo"/>
            <Skill imagen="CSS_logo"/>
            <Skill imagen="JS_logo"/>
            <Skill imagen="React_logo"/>
            <Skill imagen="NodeJs_logo"/>
            <Skill imagen="C#_logo"/>
            <Skill imagen="C++_logo"/>
            <Skill imagen="C_logo"/>
            <Skill imagen="Arduino_logo"/>
            <Skill imagen="Python_logo"/>
            <Skill imagen="php_logo"/>
            <Skill imagen="Sql_logo"/>
            <Skill imagen="Ofice_logo"/>
            <Skill imagen="VisualStudio_logo"/>
            <Skill imagen="Unity_logo"/>
          </div>
        </div>
      </Section>
      <PopUp>
            <div>
                <h3>My level skills</h3>
                <table>
                    <Porcentaje skill="HTML" ancho="100"/>
                    <Porcentaje skill="CSS" ancho="95"/>
                    <Porcentaje skill="JavaScript" ancho="70"/>
                    <Porcentaje skill="React" ancho="80"/>
                    <Porcentaje skill="Node.Js" ancho="30"/>
                    <Porcentaje skill="C#" ancho="80"/>
                    <Porcentaje skill="C++" ancho="100"/>
                    <Porcentaje skill="C" ancho="90"/>
                    <Porcentaje skill="Arduino" ancho="100"/>
                    <Porcentaje skill="Python" ancho="50"/>
                    <Porcentaje skill="PHP" ancho="30"/>
                    <Porcentaje skill="SQL" ancho="30"/>
                    <Porcentaje skill="Office" ancho="70"/>
                    <Porcentaje skill="Visual Studio Code" ancho="100"/>
                    <Porcentaje skill="Unity" ancho="60"/>
                </table>
            </div>
        </PopUp>
      <Fondo/>
      <Section titulo="Contact me" color="obscuro">
         <div className="contact_container">
         <div className="contacto">
                    <div className="datos">
                        <div className="contact_me_container">
                            <h2>Contact</h2>
                            <div className="data_container">
                                <div className="primeros">
                                    <div className="img_cont">
                                        <img src="imagen/myname.svg" alt=""/>
                                        <h4>Name</h4>
                                    </div>
                                    <p className="subtitle">Nahuel Gabriel Perez</p>
                                </div>
                                <div className="segundos">
                                    <div className="img_cont">
                                        <img src="imagen/phone.svg" alt=""/>
                                        <h4>Cell phone</h4>
                                    </div>
                                    <p className="subtitle">+54 11 2735-4837</p>
                                </div>
                                <div className="primeros">
                                    <div className="img_cont">
                                        <img src="imagen/email.svg" alt=""/>
                                        <h4>Email</h4>
                                    </div>
                                    <p className="subtitle">nani07@hotmail.com.ar</p>
                                </div>
                                <div className="segundos">
                                    <div className="img_cont">
                                        <img src="imagen/locate.svg" alt=""/>
                                        <h4>Address</h4>
                                    </div>
                                    <p className="subtitle">Buenos Aires, Argentina</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="datos">
                        <div className="formulario_container">
                            <div action="php/contact_mail.php" method="post" encType="text/plain" className="form">
                                <input type="text" name="name" placeholder="Name" className="form_name"/>
                                <input type="email" name="mail" placeholder="Email" className="form_email"/>
                                <textarea name="" id="" placeholder="Message"></textarea>
                                <button type="submit">Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </Section>
      <Footer/>
    </div>
  );
}

export default App;

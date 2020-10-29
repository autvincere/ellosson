import React, { useState, useEffect, useRef } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Section from './Section'
import mateus from '../assets/img/fallecidos/mateus.jpg'
import paula from '../assets/img/fallecidos/paula_lorca.jpg'
import renzo from '../assets/img/fallecidos/renzo.jpg'
import kaiser from '../assets/img/fallecidos/kaiser.jpg'
import romario from '../assets/img/fallecidos/romario.jpg'
import kevin from '../assets/img/fallecidos/kevin.jpg'
import jose from '../assets/img/fallecidos/jose.jpg'
import manuel from '../assets/img/fallecidos/manuel.jpg'
import joseU from '../assets/img/fallecidos/joseU.jpg'
import noImage from '../assets/img/fallecidos/noImage.jpg'
import alex from '../assets/img/fallecidos/alex.jpg'
import mariana from '../assets/img/fallecidos/mariana.jpg'
import maicol from '../assets/img/fallecidos/maicol.jpg'

// import { Reset, media, Grid, totalCenter } from '../utils/constants'

const GlobalStyle = createGlobalStyle`
.sticky-wrapper {
  position: relative;
  height: 3rem; /* We need to change this value */
}

.sticky-inner {
  position: fixed;
  top: 20px;
  right: 0;
  z-index: 2;
}
@keyframes appear {
  0% {
   /* transform: translateY(50px);  */
   opacity: 0;
    }

  100% {
     /* transform: translateY(0); */
     opacity: 1;  
    } 
}

@keyframes dissappear {
  0% {
   /* transform: translateY(50px);  */
   opacity: 1;
    }

  100% {
     /* transform: translateY(0); */
     opacity: 0;  
    } 
}

.appear{
     animation: appear 4s cubic-bezier(0.390, 0.575, 0.565, 1.000);  
}
`

const Parallax = styled.section`
display: flex;
`
const ContentImage = styled.div`

    width: 100vw;
    height: 350vh;
    background-repeat: repeat-y;
    background-size: cover;
    position: absolute;
    animation: ${props => props.animation};
    /* animation: appear 4s cubic-bezier(0.390, 0.575, 0.565, 1.000);   */
    background-image: url(${require(`../assets/img/bkg_mapav2_opt.jpg`)});
`
const ContentInfo = styled.div`
     position: relative;
     width: 100%;
     margin-top: 86px;
     z-index: 2;
     /* h4{
          font-size: 8em;
          font-family: 'Open Sans', Helvetica, Arial, sans-serif;
          font-weight: 600;
          color: #5050503d;
          position: absolute;

     } */
     .patch{
          display: flex;
          justify-content: flex-end;

          h3{
               font-size: 1em;
               width:300px;
               padding: 4px;
               background: gray;
               border: 1px solid black;
          }
     }
          
`
const sectionOne = [
     {

          image: mateus,
          fecha: '19 de octubre',
          causaMuerte:'Disparo',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Mateusz Maj',
          descrip: 'Un profesor polaco, en medio de un forcejeo con su suegro, un exmilitar, con manifestantes a este se le escapa un tiro de su arma de fuego. Los hechos ocurrieron durante un saqueo a un supermercado de Maipú que Miguel Ángel Rojas, suegro de la víctima, pretendía defender.'

     }
]
const sectionTwo = [
     {
          image: paula,
          fecha: '20 de octubre',
          causaMuerte:'Calcinada',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Paula Lorca - Alicia Cofré',
          descrip: 'Ambas víctimas fueron encontradas dentro de un supermercado Líder incendiado en la comuna de San Bernardo.'
     }
     , {
          image: renzo,
          fecha: '18 de octubre',
          causaMuerte:'Calcinado',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Renzo Barboza',
          descrip: 'Encontrado dentro de un supermercado Líder incendiado en la comuna de Santiago (Matucana con Mapocho).​'
     }
     , {
          image: kaiser,
          fecha: '18 de octubre',
          causaMuerte:'Calcinados',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Manuel Muga(59) - Andrés Ponce(38) - Yoshua Osorio(17) - Julián Pérez(51) - Luis Salas(47)',
          descrip: 'Encontrados calcinados en la bodega incendiada de la empresa Kayser en Renca. Las autopsias de los cuerpos han determinado la existencia de heridas de bala en algunos casos.​'
     }
     , {
          image: romario,
          fecha: '18 de octubre',
          causaMuerte:'Disparo',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Romario Veloz (26)',
          descrip: 'Fallecido por disparos realizados por militares en las cercanías del terminal de buses de La Serena.​'
     }
     , {
          image: kevin,
          fecha: '18 de octubre',
          causaMuerte:'Acribillado',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Kevin Gómez (23)',
          descrip: 'Fallecido por disparos realizados por militares fuera de una tienda La Polar en Coquimbo.'
     }
]
const sectionThree =[
     {
     image: jose,
     fecha: '21 de octubre de 2019',
     causaMuerte:'Accidente',
     causaMuertePosition:'text_right',
     direction: 'reverse',
     margin: 'margin_right',
     name:'José Arancibia (74) - Eduardo Caro del Pino (44)',
     descrip: 'Encontrados en una tienda Construmart incendiada en la comuna de La Pintana (Santa Rosa con El Observatorio).'
     }
   , {
        image: manuel,
        fecha: '18 de octubre',
        causaMuerte:'atropellado',
        causaMuertePosition:'text_left',
        direction: 'normal',
        margin: 'margin_left',
        name: 'Manuel Rebolledo (22)',
        descrip: 'En una manifestación en Talcahuano es atropellado por un camión de infantería de marina.'
     }
     , {
          image: joseU,
          fecha: '18 de octubre',
          causaMuerte:'Accidente',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'José Uribe (25)',
          descrip: 'Fallecido por disparos en Curicó, fuera de la zona de emergencia. Inicialmente la hipótesis de investigación era una muerte producto de disparos de militares, pero posteriores pesquisas señalaron cómo culpable al empresario de Lontué, Francisco José Fuenzalida Calvo. Según la fiscalía, solo minutos antes del asesinato el empresario había dejado 3 personas heridas de bala en la alameda de Curicó'
       }
       , {
          image: noImage,
          fecha: '18 de octubre',
          causaMuerte:'Electrocutado',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Sin identificar',
          descrip: 'Fallecido por electrocutación en un supermercado en la comuna de Santiago (Barrio Franklin)'
       }
       , {
          image: alex,
          fecha: '18 de octubre',
          causaMuerte:'Golpiza',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Alex Núñez (39)',
          descrip: 'Fallecido por una golpiza realizada por carabineros en la comuna de Maipú, (estación Del Sol). Inicialmente no fue incluido por el gobierno de Chile en la nómina oficial de fallecidos,​ siendo reconocido por el subsecretario de Interior el día 23.'
       }
       , {
          image: mariana,
          fecha: '18 de octubre',
          causaMuerte:'Bala',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Mariana Díaz (34)',
          descrip: 'Fallecida por el impacto de una bala perdida en su casa de la comuna de Lo Prado.'
       }
  ]
  const sectionFour = [
     {

          image: noImage,
          fecha: '22 de octubre de 2019',
          causaMuerte:'Atropello',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Joel Triviño (4) - Cardenio Prado (37)',
          descrip: 'Producto del atropello, a un grupo de manifestantes que estaban haciendo un cacerolazo en San Pedro de la Paz. El conductor estaba en estado de ebriedad.'

     }
]
const sectionFive = [
     {

          image: noImage,
          fecha: '24 de octubre de 2019',
          causaMuerte:'Disparos',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Agustín Coro (52)',
          descrip: 'Fallecido por disparos realizados el día 22 por un comerciante en la comuna de Puente Alto que temía un asalto; la víctima no habría estado involucrado en el conflicto, pero habría recibido el balazo a distancia.'

     }
]
const sectionSix = [
     {

          image: maicol,
          fecha: '25 de octubre de 2019',
          causaMuerte:'Calcinado',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Maicol Yagual (22)',
          descrip: 'Encontrado calcinado en un supermercado Alvi en la comuna de Maipú.'

     }
]
const sectionSeven = [
     {

          image: noImage,
          fecha: '1 de noviembre de 2019',
          causaMuerte:'Acuchillado',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Héctor Martínez (57)',
          descrip: 'Locatario de una tienda de muebles en el Barrio Franklin, recibió un ataque con cuchillo por parte de un grupo de saqueadores, en el contexto del estallido social, al tratar de defender su local comercial durante la madrugada de ese día.'

     }
]
const sectionEight = [
     {

          image: noImage,
          fecha: '12 de noviembre de 2019',
          causaMuerte:'Atropellado',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Robinson Gómez (27)',
          descrip: 'Atropellado por un camión en la madrugada de aquel día, momento en que un grupo de personas realizaban una barricada para cortar la ruta 23-CH en Calama.'

     }
]

const ScrollSection = ({ downRef }) => {

     const [offsetY, setOffsetY] = useState(0);
     const [animationEnter, setAnimationEnter] = useState('')

     const mapRef = useRef()
     // const downRef = useRef()

     const handleScroll = () => {
          // console.log(window.pageYOffset)
          return setOffsetY(window.pageYOffset);
     }

     // const handleDownButton = () =>{
     //      console.log(downRef.getBoundingClientRect());
     // } 
     const handleScrollMap = () => {
          const map = mapRef.current;
          const { y } = map.getBoundingClientRect();

          const animationAppear = y >= 0 ? 'appear' : 'appear';
          // console.log(animationAppear);
          setAnimationEnter(animationAppear)
     }

     useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          // window.addEventListener("scroll", handleScrollMap);

          return () => {
               window.removeEventListener("scroll", handleScroll);
               // window.removeEventListener("scroll", handleScrollMap);
          }
     }, [])

     return (
          <Parallax>
               <GlobalStyle />
               {/* <ContentImage ref={mapRef} className={animationEnter} style={{ transform: `translateY(-${offsetY * 0.5}px)` }} /> */}
               <ContentInfo ref={downRef}>

                    <Section usersInfo={sectionOne} />
                    <h1>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus laudantium corrupti similique dolor voluptatibus voluptatum id quos ratione, eos sequi vero temporibus quidem voluptates accusamus excepturi esse, dolore at!
                    </h1>
                    <h1>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus laudantium corrupti similique dolor voluptatibus voluptatum id quos ratione, eos sequi vero temporibus quidem voluptates accusamus excepturi esse, dolore at!
                    </h1>
                    <h1>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus laudantium corrupti similique dolor voluptatibus voluptatum id quos ratione, eos sequi vero temporibus quidem voluptates accusamus excepturi esse, dolore at!
                    </h1>
                    <h1>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus laudantium corrupti similique dolor voluptatibus voluptatum id quos ratione, eos sequi vero temporibus quidem voluptates accusamus excepturi esse, dolore at!
                    </h1>

                    {/* <Section usersInfo={sectionTwo} /> */}
                    {/* <ContentImage ref={mapRef} className={animationEnter} style={{ transform: `translateY(-${offsetY * 0.5}px)` }} />   */}
                    {/* <Section usersInfo={sectionThree} /> */}
               
               {/* <ContentImage 
                    ref={mapRef} 
                    className={animationEnter} 
                    style={{ transform: `translateY(-${offsetY * 0.5}px)` }} 
               /> */}

                {/* <Section usersInfo={sectionFour} /> 

                 <Section usersInfo={sectionFive} />  */}

                  {/* <ContentImage 
                    ref={mapRef} 
                    className={animationEnter} 
                    style={{ transform: `translateY(-${offsetY * 0.5}px)` }} 
               />  */}

                  {/* <Section usersInfo={sectionSix} />   

                   <Section usersInfo={sectionSeven} />   */}

                   {/* <ContentImage 
                    ref={mapRef} 
                    className={animationEnter} 
                    style={{ transform: `translateY(-${offsetY * 0.5}px)` }} 
               /> */}

                    {/* <Section usersInfo={sectionEight} />  */}

               </ContentInfo>
          </Parallax>
     )
}

export default ScrollSection

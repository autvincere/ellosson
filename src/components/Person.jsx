import React, { Fragment, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { media } from '../utils/constants'

import { ReactBasicScroll } from "react-basic-scroll";
import scrollConfig from "../basicScrollConfig";
import LazyLoad from "react-lazyload";

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;
const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const StyledImage = styled.img`
          max-width: 590px;
          position: absolute;
          top: 0;
          left: 0;
          object-fit: cover;
          ${ media('xs') }{
               max-width: 496px;
    }
`;

const ContentImage = styled.div`
     display: block;
    /* width: 100%; */
    width: 486px;
    height: 340px;
    position: relative;
    overflow: hidden;
    max-width: 440px;
    ${ media('xs') }{
          max-width: 280px;
    }
`
const ContentPerson = styled.article`
     display: flex;
     max-width: 750px;
     position: relative;
     margin: 54px auto 72px auto;
     z-index: 1;
     ${ media('xs') }{
          max-width: 281px;
    }
     h4{
          font-size: 5.4em;
          font-family: 'Open Sans',Helvetica,Arial,sans-serif;
          font-weight: 600;
          color: #ffffff57;
          position: absolute;
          top: 10%;
          -webkit-text-stroke: 1.5px #000000ad;
          text-transform: uppercase;
          letter-spacing: -1px;
          ${ media('xs') }{
               /* position: relative; */
          }

     }
     h3{
          text-align: center;
          font-family: 'Special Elite', Helvetica, Arial, cursive;
          font-size: 1.5em;
          margin-top: 15px;
          max-width: 440px;
          ${ media('xs') }{
               width: 282px;
          }
     }
     figure{ 
          margin-top: 60px;  
          img{
               max-width: 350px;
          }
       
     }
     p{
          font-family: 'Open Sans Condensed', Helvetica, Arial, sans-serif;
          align-self: center;
          background-color: #ffffffd6;
          padding: 8px 10px;
          margin-left: -44px;
          line-height: 25px;
          font-size: 1.3em;
          position: absolute;
          max-width: 460px;
          ${ media('xs') }{
               position: relative;
               left: 9%;
               right: 0;
               padding: 8px 0px;
               width: 284px;
          }
      }
`


const Person = ({ usersInfo }) => {
     // console.log(usersInfo);
     const refPlaceholder = useRef();
     const removePlaceholder = () => {
          refPlaceholder.current.remove();
        };

     return (
          <Fragment>

               {    usersInfo.map( ( user, i)  => {
                    let speed = user.speed ? user.speed : '1';
                    let config = user.config ? user.config : scrollConfig;
                    // console.log(user.causaMuerte.length);
                    let lengthCausa = user.causaMuerte.length >= 7 ? 'max_width' : '' ;
                    return (
                         <ContentPerson className={user.direction} key={user.name}>
                              <div>
                                   <ReactBasicScroll config={config}>
                                        <ContentImage>
                                           
                                             <Placeholder ref={refPlaceholder} />
                                             <LazyLoad>
                                                  <StyledImage 
                                                       key={i} 
                                                       src={user.image} 
                                                       alt={user.name} 
                                                       onLoad={removePlaceholder}
                                                       onError={removePlaceholder}
                                                       className={`o-anim-ty o-apply-ty--x-1`}
                                                       />
                                             </LazyLoad>

                                        </ContentImage>
                                        
                                   </ReactBasicScroll>
                                   <h3>{user.name}</h3>
                              </div>
                                   {/* <ImageZoom usersImage={user.image} /> */}
          
                              <p className={user.margin}>{user.descrip}</p>
                              
                              <ReactBasicScroll config={config}>
                                   <h4 className={`${user.causaMuertePosition} o-anim-ty o-apply-ty--x${speed} ${lengthCausa}`}>{user.causaMuerte}</h4>
                              </ReactBasicScroll>

                         </ContentPerson>
                    )
               })
               }
          </Fragment>
     )
}

export default Person

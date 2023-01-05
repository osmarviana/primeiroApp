import React from "react";
import Header from "../../components/header/header";
import './styles.css';
import video from '../../assets/video.mp4';
import Cards from "../../components/cards";
import Footer from "../../components/footer";

function Home(){
    
    return (
        <div>
            <>
            <Header />
            <div id="banner"></div>
            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={video} />
                        Seu navegador não possui suporte para vídeos.
                    </video>                
                    <div id="sinopse">
                        <p className="description">
                            Texto do vídeo aqui! Texto do vídeo aqui! Texto do vídeo aqui! Texto do vídeo aqui! Texto do vídeo aqui! Texto do vídeo aqui! Texto do vídeo aqui! Texto do vídeo aqui! Texto do vídeo aqui!
                        </p>
                        <button className="button">Comprar</button>
                    </div>
                </div>
            </div>
            <Cards />
            <Footer />
            </>
        </div>
    )
}

export default Home;
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PaysageimgPropos from '../components/PaysageimgPropos';
import '../styles/Apropos.css';
import Collapsible from '../components/Collapsibles';



const Apropos = () => {

    return (
        <div>
            <Navigation />
            <PaysageimgPropos />

            <div className='aproposDisplay'>

            <div className = 'collapsible-text'>
            <Collapsible title = "Fiabilité" description = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
            </div>

            <div className = 'collapsible-text'><Collapsible  title = "Respect" description = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/></div>

            <div className = 'collapsible-text'><Collapsible  title = "Service" description = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." /></div>

            <div  className = 'collapsible-text'><Collapsible title = "Sécurité" description = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/></div>

            </div>

            <Footer/>
        </div>
    );
};

export default Apropos;
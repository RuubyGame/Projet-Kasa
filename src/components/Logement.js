import React from 'react';
import logementData from '../data.json'
import { useParams } from 'react-router-dom';
import Erreur404 from '../pages/Erreur404'
import Carrousel from './Carrousels.js';
import Collapsible from './Collapsibles';
import Ratestars from './Ratestars';
import '../styles/LogementCard.css'


const Logement = () => {
    const { id } = useParams()
    const logement = logementData.find(logement => logement.id === id)
    if (logement === undefined) {
        return <Erreur404 />
    }
    return (
        <section key={logement.id}>

            <Carrousel
                img={logement.pictures}
            />

            <article>
                <div className='logement-background'>
                    <div className='logement-title-host'>
                        <div>
                            <h1 className='logement-title'> {logement.title} </h1>
                        </div>

                        <div className='logement-info'>
                            <p className='title-info' > {logement.location} </p>
                        </div>
                        <div className='tags-star'>
                            {
                                logement.tags.map((tag, i) => (
                                    <p className='tags' key={i}> {tag} </p>
                                ))}
                        </div>
                    </div>

                    <div className='logement-tags'>
                        <div className='logement-host'>
                            <p className='host-name'> {logement.host.name} </p>
                            <img className='host-img' src={logement.host.picture} alt='host-cover' />
                        </div>
                        <div className='star'>
                            <Ratestars score={logement.rating} />
                        </div>
                    </div>

                </div>
            </article>

            <article>
                <div className='logement-collapsible'>
                    <div className='logement-collap-with'>
                        <Collapsible className='logement-collap-with' title='Description'
                            description={logement.description}
                        />
                    </div>
                    <div className='logement-collap-with' >

                        <Collapsible className='logement-collap-with' title='Équipement'
                            description={logement.equipments.map((equipment, i) => (
                                <span className='logement-collap-equip-contenant' key={i}>
                                    <li className='flex-equip'> {equipment} </li>
                                </span>
                            ))}
                        />
                    </div>
                </div>
            </article>

        </section>
    );
};

export default Logement;
import './index.scss'
import Loader from 'react-loaders'
import mountainpic from '../../assets/images/mountainpic.jpeg'

const About = () => {

    return(
        <>
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                Who I am
            </h1>
            <p>
                An ambitious programmer searching for a position with an established tech company where I can hone my skills and perfect my craft.
            </p>
            <br/>
            <h1>
                Where I'm from
            </h1>
            <p>
                North Carolina born and bred, currently living in Chapel Hill pursuing a B.S. in Computer Science as well as a B.A. in Economics at the University of North Carolina at Chapel Hill. Go Heels!
            </p>
            <br/>
            <h1>
                What I like
            </h1>
            <p>
                Aside from my passions for all things tech, I love the outdoors. I enjoy surfing, climbing, hiking, and most of all, travelling to new places.
            </p>
            </div>
        <div className="image-container">
            <img src={mountainpic}/>
        </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About
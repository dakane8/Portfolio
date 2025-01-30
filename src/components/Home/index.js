import './index.scss'
import Loader from 'react-loaders'
import ProfilePicPort from '../../assets/images/ProfilePicPort.png'

const Home = () => {

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br/>
                    My name is Daniel Kane
                </h1>
                <h2>
                    A college student at UNC,<br/>
                    Computer Science B.S.,<br/>
                    Economics B.A.,<br/>
                    Fullstack Developer,<br/>
                    Fun time haver
                </h2>
            </div>
            <div className="image-container">
                <img src={ProfilePicPort} alt="profile-pic-home"/>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
        
    )
}

export default Home
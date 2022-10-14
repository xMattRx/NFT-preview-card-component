import imgClock from '../../assets/icon-clock.svg'
import EthImg from '../../assets/icon-ethereum.svg'
import eye from '../../assets/icon-view.svg'
import imgProfile from '../../assets/image-avatar.png'
import imgCard from '../../assets/image-equilibrium.jpg'
import './Card.scss'


export default function Card() {
    return (
        <div className='container'>

            <div className="container-image">
                <div className="container-eye">
                    <img className='eye' src={eye} alt="eye" />
                    <div className='image-hover'>

                    </div>
                </div>

                <img className='image-equilibrium' src={imgCard} alt="image-equilibrium" />
            </div>

            <h1 className='title'>Equilibrium #3429</h1>
            <p className='description'>Our Equilibrium collection promotes balance and calm.</p>

            <div className="attributes">
                <div className="eth">
                    <img src={EthImg} alt="ImgEth" /><span>0.041 ETH</span>
                </div>
                <div className="days">
                    <img src={imgClock} alt="imgClock" /><span>3 days left</span>
                </div>
            </div>

            <hr />
            <div className="container-profile">
                <img src={imgProfile} alt="imgProfile" />
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        </div>
    )
}

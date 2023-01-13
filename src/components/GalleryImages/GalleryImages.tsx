import DeepEarth from '../../assets/desktop/image-deep-earth.jpg'
import NightArcade from '../../assets/desktop/image-night-arcade.jpg'
import SoccerTeam from '../../assets/desktop/image-soccer-team.jpg'
import Grid from '../../assets/desktop/image-grid.jpg'
import FromAbove from '../../assets/desktop/image-from-above.jpg'
import PocketBoreals from '../../assets/desktop/image-pocket-borealis.jpg'
import Curiosity from '../../assets/desktop/image-curiosity.jpg'
import Fisheye from '../../assets/desktop/image-fisheye.jpg'
import * as C from './styles'


export const GalleryImages = () => {
    const images = [
    {
        url: DeepEarth,
        text: 'DEEP EARTH'
    }, 
    {
        url: NightArcade,
        text: 'NIGHT ARCADE'
    }, 
    {
        url: SoccerTeam,
        text: 'SOCCER TEAM VR'

    }, 
    {
        url: Grid,
        text: 'THE GRID'
    }, 
    {
        url: FromAbove,
        text: 'FROM UP ABOVE VR'
    }, 
    {
        url: PocketBoreals,
        text: 'POCKET BOREALIS'   
    }, 
    {
        url: Curiosity,
        text: 'THE CURIOSITY'
    }, 
    {
        url: Fisheye,
        text: 'MAKE IT FISHEYE'
    }]

    return (
        <C.imagesContainer>
            {
                images.map(image => {
                    return (
                        <C.Image>
                            <img src={image.url} alt={image.text} key={image.url}/>
                            <C.overlay>
                                <p>{image.text}</p>
                            </C.overlay>
                        </C.Image>
                    )
                })
            }
        </C.imagesContainer>
    )
}
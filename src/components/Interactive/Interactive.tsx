import * as C from './Styles'
import ImageInteractive from '../../assets/desktop/image-interactive.jpg'

export const Interactive = () => {
    return (
        <C.InteractiveSection>
            <C.Container>
                <C.ImgContainer>
                    <img src={ImageInteractive} alt="óculos VR - realidade virtual" />
                </C.ImgContainer>
                <C.Info>
                    <h2>THE LEADER IN INTERACTIVE VR</h2>
                    <p>
                        Founded in 2011, Loopstudios has been producting world-class virtual reality projects for
                        some of the best companies around the globe. Our award-winning creations have transformed
                        businesses through digital experiences that bind to their brand.
                    </p>
                </C.Info>
            </C.Container>
        </C.InteractiveSection>
    )
}
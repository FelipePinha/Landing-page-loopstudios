import { GalleryHeader } from '../GalleryHeader/GalleryHeader'
import { GalleryImages } from '../GalleryImages/GalleryImages'
import * as C from './Styles'

export const Gallery = () => {
    return (
        <C.Section>
            <GalleryHeader />
            <GalleryImages />
            <C.MobileButton>SEE ALL</C.MobileButton>
        </C.Section>
    )
}
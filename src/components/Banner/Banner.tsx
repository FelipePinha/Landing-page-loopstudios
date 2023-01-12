import { Header } from '../Header/Header'
import * as C from './Styles'

export const Banner = () => {
    return (
        <C.Section>
            <Header />
            <C.MsgContainer>
                <C.Msg>
                    <h1>
                        <span>IMMERSIVE</span>
                        <span>EXPERIENCES</span>
                        <span>THAT DELIVER</span>
                    </h1>
                </C.Msg>
            </C.MsgContainer>
        </C.Section>
    )
}
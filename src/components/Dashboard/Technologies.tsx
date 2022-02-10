import { Image, Flex} from '@chakra-ui/react';

import reactImg from '../../images/technologies/reactjs.png'
import cssImg from '../../images/technologies/css-3.png'
import htmlImg from '../../images/technologies/html-5.png'
import javascriptImg from '../../images/technologies/javascript.png'
import typescriptImg from '../../images/technologies/typescript.png'
import nodeImg from '../../images/technologies/nodejs.png'
import vscodeImg from '../../images/technologies/vscode.png'
import gitImg from '../../images/technologies/git.png'
import nextImg from '../../images/technologies/nextjs.png'
import figmaImg from '../../images/technologies/figma.png'

export function Technologies(){
    return (
        <Flex justifyContent="space-between" px={["0rem", "2rem"]}>
            <Image src={javascriptImg} alt="javascript" h={["24px", "36px"]}/>
            <Image src={htmlImg} alt="html" h={["24px", "36px"]}/>
            <Image src={cssImg} alt="CSS" h={["24px", "36px"]}/>
            <Image src={reactImg} alt="react" h={["24px", "36px"]}/>
            <Image src={nextImg} alt="next" h={["24px", "36px"]}/>
            <Image src={typescriptImg} alt="typescript" h={["24px", "36px"]}/>
            {/* <Image src={nodeImg} alt="node" h={["24px", "36px"]}/> */}
            <Image src={vscodeImg} alt="vscode" h={["24px", "36px"]}/>
            <Image src={gitImg} alt="git" h={["24px", "36px"]}/>
            <Image src={figmaImg} alt="figma" h={["24px", "36px"]}/>
        </Flex>
    )
}
import { Grid, GridItem } from '@chakra-ui/react'
import {
    SiTypescript, 
    SiJavascript, 
    SiCss3, 
    SiHtml5, 
    SiFirebase, 
    SiSass, 
    SiReact,
    SiMaterialUi,
    SiStyledComponents
} from 'react-icons/si';
import {FaAsterisk} from 'react-icons/fa';
import { Card } from '../Card'

import homePokemonEduImg from "../../images/jobs/pokemon-edu/home.png"
import dashboardPokemonEduImg from "../../images/jobs/pokemon-edu/dashboard.png"
import homeMarketImg from "../../images/jobs/market/home.png"
import dashboardMarketImg from "../../images/jobs/market/mobile.png"
import homeWhatsTheAnswerImg from "../../images/jobs/whatsTheAnswer/home.png"
import confirmWhatsTheAnswerImg from "../../images/jobs/whatsTheAnswer/confirm.png"
import questionWhatsTheAnswerImg from "../../images/jobs/whatsTheAnswer/question.png"
import resumeWhatsTheAnswerImg from "../../images/jobs/whatsTheAnswer/resume.png"
import reloadWhatsTheAnswerImg from "../../images/jobs/whatsTheAnswer/reload.png"
import homeBeep from "../../images/jobs/beep/home.png"
import dashboardBeep from "../../images/jobs/beep/dashboard.png"
import formBeep from "../../images/jobs/beep/form.png"
import modalBeep from "../../images/jobs/beep/modal.png"

export function Jobs(){
    return (
        <Grid 
            gap="2rem"
            templateColumns={["repeat(1, 1fr)" ,"repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            align="center"
            borderRadius="0.5rem"
        >
            <GridItem>
                <Card                                
                    images={[
                        homeBeep, 
                        dashboardBeep, 
                        modalBeep, 
                        formBeep, 
                    ]}
                    title="Beep"
                    description="Trabalho freelancer para empresa de soluções financeiras. Foram criados dashboards, modais e formulários, como também controle de acesso e fluxo de autenticação do usuário."
                    technology={[
                        {
                            icon: SiReact,
                            tooltip: "ReactJS"
                        }, 
                        {
                            icon: SiStyledComponents,
                            tooltip: "Styled Components"
                        }
                    ]}
                />
            </GridItem>
            <GridItem>
                <Card                                
                    images={[
                        homeWhatsTheAnswerImg, 
                        reloadWhatsTheAnswerImg, 
                        confirmWhatsTheAnswerImg, 
                        questionWhatsTheAnswerImg, 
                        resumeWhatsTheAnswerImg, 
                    ]}
                    title="Whats the answer?"
                    description="Desafio proposto durante um processo seletivo para 
                    desenvolvedor frontend. Trata-se de um formulário de perguntas 
                    e respostas sobre assuntos diversos, ao fim temos um resumo das 
                    respostas."
                    technology={[
                        {
                            icon: SiTypescript,
                            tooltip: "Typescript"
                        }, 
                        {
                            icon: SiMaterialUi,
                            tooltip: "Material-UI"
                        },
                        {
                            icon: FaAsterisk,
                            tooltip: "* Formik"
                        }
                    ]}
                    repository="https://github.com/Gleydson07/whats_the_answer"
                    page= "https://whatstheanswer.vercel.app/"
                />
            </GridItem>
            <GridItem>
                <Card                                
                    images={[
                        homePokemonEduImg, 
                        dashboardPokemonEduImg
                    ]}
                    title="Pokemon Education"
                    description="É um game que tem como finalidade 
                    permitir que crianças possam práticar 
                    os ensinamentos adquiridos na 
                    escola de maneira lúdica usando a 
                    temática do jogo POKEMON."
                    technology={[
                        {
                            icon: SiReact,
                            tooltip: "React"
                        }, 
                        {
                            icon: SiTypescript,
                            tooltip: "Typescript"
                        },
                        {
                            icon: SiFirebase,
                            tooltip: "Firebase"
                        },
                        {
                            icon: SiSass,
                            tooltip: "SASS"
                        }
                    ]}
                    repository="https://github.com/Gleydson07/pokemon-edu"
                    page= "https://pokemon-education.web.app/"
                />
            </GridItem>
            <GridItem>
                <Card                                
                    images={[
                        dashboardMarketImg,
                        homeMarketImg, 
                    ]}
                    title="Market"
                    description="Controle de despesas mensais em Javascript, HTML e CSS. 
                    A aplicação permite comparar os gastos entre os meses, seus dados 
                    ficam salvos no localStorage."
                    technology={[
                        {
                            icon: SiJavascript,
                            tooltip: "Javascript"
                        }, 
                        {
                            icon: SiHtml5,
                            tooltip: "HTML5"
                        },
                        {
                            icon: SiCss3,
                            tooltip: "CSS3"
                        }
                    ]}
                    repository="https://github.com/Gleydson07/market"
                />
            </GridItem>
        </Grid>
    )
}
import {MemberTime} from '../../../components/MemberTime/memberTime';
import mariana from '../../../assets/marianaCastro.jpg';


const members = [
    {
        nome: "Abilio Alves",
        cargo: "Desenvolvedor Front-end",
        atividade: "Desenvolveu a página de Login e Cadastro.",
        linkedin: "linkedin.com/abilioalves/",
        github: "github.com/AbilioaGa",
        imagem: "/src/assets/abilioAlves.jpg"

    },
    {
        nome: "Mariana Castro",
        cargo: "Desenvolvedora Front-end",
        atividade: "Desenvolveu a página de Equipes.",
        linkedin: "linkedin.com/marianasocastro1",
        github: "github.com/marianasocastro1",
        imagem: "/src/assets/marianaCastro.jpg"

    },
    {
        nome: "Patrick Diniz",
        cargo: "Desenvolvedor Front-end",
        atividade: "Desenvolveu a página do Board.",
        linkedin: "linkedin.com/patrick-dniz/",
        github: "github.com/PatrickDniz",
        imagem: "/src/assets/patrickDiniz.jpg"

    },
    {
        nome: "Wellyson Yago",
        cargo: "Desenvolvedor Front-end",
        atividade: "Desenvolveu a página do Board.",
        linkedin: "linkedin.com/wellysonyago/",
        github: "github.com/Yuki-Hub98",
        imagem: "/src/assets/wellysonYago.jpg"

    }
]

function Team(){

    return(
        <>
        <section className="bg-white md:bg-background">
            <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nosso time</h2>                </div> 
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {members.map((member, index) => (
                        <MemberTime
                        key={index}
                        nome={member.nome}
                        cargo={member.cargo}
                        atividade={member.atividade}
                        linkedin={member.linkedin}
                        github={member.github}
                        imagem={member.imagem}
                    />
                     ))}
                    
 
                </div>  
            </div>
        </section>
        </>

    )

}

export default Team
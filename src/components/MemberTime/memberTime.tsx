
function MemberTime(props){

    const { nome, cargo, atividade, linkedin, github, imagem } = props;

    return(
        <>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="w-40 h-auto  rounded-lg sm:rounded-none sm:rounded-l-lg" src={imagem} alt={nome + " imagem"}/>
                </a>
                <div className="p-2">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">{nome}</a>
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">{cargo}</span>
                    <p className="mt-2 mb-2 font-light text-gray-500 dark:text-gray-400">{atividade}</p>
                    <ul className="flex space-x-4 sm:mt-0">
                        <li>
                            <a href={github} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                        <li>
                        <a href={linkedin} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm2.44 15.6H9.56V9.44h4.88v2.76c0 1.2.6 1.44 1.44 1.44h.12c.84 0 1.44-.24 1.44-1.44V9.44h3.12v5.16h-3.12v1.2c0 1.68-.96 2.4-2.76 2.4zm-7.68-10.8c-1.56 0-2.4-1.08-2.4-2.4 0-1.44.96-2.4 2.4-2.4s2.4.96 2.4 2.4c0 1.32-.84 2.4-2.4 2.4zm5.04 10.8h-3.12V9.44h3.12v8.16z"/>
                            </svg>
                        </a>
                        </li>
                    </ul>
                </div>
            </div> 
        </>
    )
}


export {MemberTime};
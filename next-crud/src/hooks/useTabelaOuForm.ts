import { useState } from "react";
import Formulario from "../components/Formulario";
import Tabela from "../components/Tabela";

export default function UseTabelaOuForm(){
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return {
        FormularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario,
    }
}
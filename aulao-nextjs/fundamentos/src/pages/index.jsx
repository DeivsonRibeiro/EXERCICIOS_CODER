import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function inicio(){
    return (
        <div style={{
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            flexWrap:"wrap",

        }}>
       <Navegador texto="Estiloso" destino= "/exemplo"/>
       <Navegador texto="Exemplo" cor="#9400d3" destino= "/jsx"/>
       <Navegador texto="JSX" cor="crimson" destino= "/estiloso"/>
       <Navegador texto="Navegação #01" cor="green" destino= "/navegacao"/>
       <Navegador texto="Navegação #02" cor="blue" destino= "/cliente/sp-2/123"/>
       <Navegador texto="Componente com Estado" cor="#7cb46b" destino= "/estado"/>
       <Navegador texto="Integração com API #01" cor="#c1d08a" destino= "/integracao1"/>
       <Navegador texto="Conteúdo Estático" cor="#191970" destino= "/estatico"/>
        </div>
    )
}
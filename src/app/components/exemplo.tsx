

interface Propsnomes  {
    nome1: number
    nome2: string
    nome3: string

}

export default function Nomes(props:Propsnomes) {
return(
    <div>
        <p>{props.nome1}</p>
        <p>{props.nome2}</p>
        <p>{props.nome3}</p>
    </div>
)    
}
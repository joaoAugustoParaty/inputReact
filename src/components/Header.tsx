type Props = {
    title: string; // Usando title? fica opcional
}
export const Header = ({ title }: Props)=> {
    return(
      <header>
        <h1>{title}</h1>
        <hr/>
      </header>
    )
  }
import style from "./Form.module.css"

export const Form = () => {
    const count = 1
    const name = "gb"
    
    return <form className={style.form}>
        <p>Count:{count}</p>
        <p>name:{name}</p>
        <button type = "button" >click</button>
    </form>
}
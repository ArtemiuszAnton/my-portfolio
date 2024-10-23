import style from './header.module.css'

export default function Header() {
    return <>
        <div className={style.wrapper}>
            <div className={style.images}>
                <div className={style.linkedin}></div>
                <div className={style.github}></div>
                <div className={style.tg}></div>
            </div>

            <div className={style.info}>
                <p>About</p>
                <p>What i do</p>
                <p>My projects</p>
            </div>
        </div>
    </>
}

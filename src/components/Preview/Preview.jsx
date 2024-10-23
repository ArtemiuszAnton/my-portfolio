import style from '../Preview/preview.module.css';

export default function Preview() {
    return <>
        <div className={style.wrapper}>
            <div className={style.visit_card}>
                <div className={style.info}>
                    <p>Hi, My name is Artemis Antonis</p>
                    <h1>Full Stack Developer</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda minus vel blanditiis aliquid! Explicabo odit saepe
                        reprehenderit consectetur voluptatem commodi fugiat pariatur
                        rerum similique nobis asperiores, repudiandae suscipit sunt ut.
                    </p>
                    <div>Learn About me</div>
                </div>

                <img src={foto} alt="foto" />

            </div>

            {/* <div className={style.skills}>
                <div className={style.roles}>

                </div>
            </div> */}

        </div>
    </>
}
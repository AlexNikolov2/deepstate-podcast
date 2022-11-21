/* eslint-disable jsx-a11y/anchor-has-content */
import image from "../../assets/img/Untitled.png"

export const HeaderComponent = () => {
    return (
        <header>
            <section className="left">
                 <img src={image} alt="" />
                 <h2>Дълбоката държава</h2>
            </section>
            <section className="right">
                <ul>
                    <li><a href="/">Начална страница</a></li>
                    <li><a href="/">Епизоди</a></li>
                    <li><a href="/">Гости</a></li>
                </ul>
            </section>
        </header>
    )
}
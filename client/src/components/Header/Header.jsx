/* eslint-disable jsx-a11y/anchor-has-content */
import image from "../../assets/img/Untitled.png"
import './Header.css'

export const HeaderComponent = () => {
    return (
        <header className="flex flex-row justify-around">
            <section className="flex flex-row content-center gap-2">
                 <img src={image} alt="" />
                 <h2>Дълбоката държава</h2>
            </section>
            <section className="flex flex-row content-center">
                <ul className="flex flex-row justify-around gap-3 list-none">
                    <li><a href="/">Начална страница</a></li>
                    <li><a href="/">Епизоди</a></li>
                    <li><a href="/">Гости</a></li>
                </ul>
            </section>
        </header>
    )
}
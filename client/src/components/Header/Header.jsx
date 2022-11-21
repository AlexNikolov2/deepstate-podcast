/* eslint-disable jsx-a11y/anchor-has-content */
export const HeaderComponent = () => {
    return (
        <header>
            <section className="left">
                 {/* image as a logo on the left */}
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
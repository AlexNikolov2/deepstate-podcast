import "./Footer.css";

export const FooterComponent = () => {
  return (
    <footer className="flex justify-around items-center content-center">
      <section className="">
        <h4>Дълбоката Държава</h4>
        <p>2023. All rights reserved.</p>
      </section>
      <section className="flex gap-2" id="links">
        <a href="https://www.facebook.com/profile.php?id=100086160321575">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/deepstate.podcast/">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://open.spotify.com/show/4j4UH7lzr8UJhk3MvoCpEZ">
          <i class="fa-brands fa-spotify"></i>
        </a>
      </section>
      <section>
        <p>Project for ABLE Mentor S18.</p>
      </section>
    </footer>
  );
};

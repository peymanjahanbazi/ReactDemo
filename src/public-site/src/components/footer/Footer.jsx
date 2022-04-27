import style from './style.footer.module.scss';
import SocialButton from '../social-button/SocialButton';

function Footer() {
  return <div className={style.footer}>

    <div className={style.footerContent}>
    <div className={style.navigation}>
      <div className={style.menu}>
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>

          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">About US</a>
            </li>
            <li>
              <a href="#">Contact US</a>
            </li>
            <li>
              <a href="#">FQA</a>
            </li>
          </ul>
        </div>

      </div>
      <div className={style.social}>

        <h4>Follow Us in Social Network</h4>
        <div className={style.socialList}>
          <SocialButton href="https://www.aparat.com" src={process.env.PUBLIC_URL + 'icons/aparat.svg'} alt="Aparat" text="Aparat" />
          <SocialButton href="https://twitter.com" src={process.env.PUBLIC_URL + 'icons/twitter-icon.svg'} alt="Twitter" text="Twitter" />
          <SocialButton href="https://www.instagram.com" src={process.env.PUBLIC_URL + 'icons/instagram.svg'} alt="Instagram" text="Instagram" />
        </div>
      </div>
    </div>
 
    
    </div>
  
    <div className={style.seprator}></div>
    <div className={style.copyRight}>
    &copy; Copy Right 2022
    </div>
  </div>;
}

export default Footer;

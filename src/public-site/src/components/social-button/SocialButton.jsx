import style from './style.social-button.module.scss';
function SocialButton(props) {
  return (
    <div className={style.socialButton}>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <img src={props.src} alt={props.alt} />
        <div>
            {props.text}
        </div>
      </a>
    </div>
  );
}


export default SocialButton;
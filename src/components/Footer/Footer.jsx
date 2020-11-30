import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <ul className={classes.footer__list}>
        <li className={classes.footer__item}> Subscribe</li>
        <li className={classes.footer__item}> Events </li>
        <li className={classes.footer__item}> Shop </li>
        <li className={classes.footer__item}> Contact us </li>
      </ul>
      <ul className={classes.footer__list}>
        <li className={classes.footer__item}> Sitemap </li>
        <li className={classes.footer__item}> Media Kit </li>
        <li className={classes.footer__item}> Terms of use </li>
        <li className={classes.footer__item}> AdChoices </li>
      </ul>
    </div>
  );
};

export default Footer;

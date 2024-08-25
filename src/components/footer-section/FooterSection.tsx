import Logo from '@/assets/images/logo-75.svg'
import classes from './FooterSection.module.css'
import Facebook from '@/assets/icons/facebook.svg'
import Google from '@/assets/icons/google.svg'
import Twitter from '@/assets/icons/twitter.svg'
import clsx from 'clsx'

const product = ['Popular', 'Trending', 'Guided', 'Products']
const company = ['Press', 'Mission', 'Strategy', 'About']
const info = ['Support', 'Customer Service', 'Get Started']

const FooterSection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.logo}><Logo /></div>
        <div className={classes.linksRow}>
          <div className={classes.linksColumn}>
            <h6 className="text-15">Product</h6>
            {product.map(p => <a href="#" key={p} className='text-16'>{p}</a>)}
          </div>
          <div className={classes.linksColumn}>
            <h6 className="text-15">Company</h6>
            {company.map(c => <a href="#" key={c} className="text-16">{c}</a>)}
          </div>
          <div className={classes.linksColumn}>
            <h6 className="text-15">Info</h6>
            {info.map(i => <a href="#" key={i} className="text-16">{i}</a>)}
          </div>
          <div className={clsx(classes.linksColumn, classes['soc-col'])}>
            <h6 className="text-15">Follow us</h6>
            <div className={classes.social}>
              <a href="#"><Facebook /></a>
              <a href="#"><Google /></a>
              <a href="#"><Twitter /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes['mob-row']}>
        <div><Logo /></div>
        <div className={clsx(classes.linksColumn)}>
          <h6 className="text-15">Follow us</h6>
          <div className={classes.social}>
            <a href="#"><Facebook /></a>
            <a href="#"><Google /></a>
            <a href="#"><Twitter /></a>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
      © 2021 Manual. All rights reserverd
      </div>
    </section>
  )
}

export default FooterSection
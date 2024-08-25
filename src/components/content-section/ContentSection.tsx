import classes from './ContentSection.module.css';
import Image from 'next/image';
import hair from '@/assets/images/hair-loss.png'
import dysf from '@/assets/images/ere-dysf.png'
import bg1 from '@/assets/images/01.png'
import bg2 from '@/assets/images/02.png'
import clsx from 'clsx';

const ContentSection = () => {
  return (
    <section className={classes.container}>
      <h2 className={clsx(classes.title, "text-40")}>What we can help with</h2>
      <div className={clsx(classes.content, classes["content-top"])}>
        <Image src={bg1} alt="Hair less" className={classes.image} />
        <Image src={hair} alt="Hair less" style={{ zIndex: 1 }} />
        <div className={classes.textWrapper}>
          <p className="text-10">Hair loss</p>
          <h4 className="text-28">Hair loss needn’t be irreversible. We can help!</h4>
          <p className={clsx("text-18", classes["text-desc"])}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
        </div>
      </div>
      <div className={classes.content}>
        <Image src={bg2} alt="Erecetile dysfunction" className={clsx(classes.image, classes["image-reverse"])}/>
        <Image src={dysf} alt="Erecetile dysfunction" className={classes["image-reverse"]} style={{ zIndex: 1 }}  />
        <div className={clsx(classes.textWrapper, classes["tw-reverse"])}>
          <p className="text-10">Erecetile dysfunction</p>
          <h4 className="text-28">Erections can be a tricky thing. But no need to feel down!</h4>
          <p className={clsx("text-18", classes["text-desc"])}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
        </div>
      </div>
  </section>
  )
}

export default ContentSection
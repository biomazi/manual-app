'use client'
import Image from "next/image";
import Button from "../button/Button";
import classes from './HeroSection.module.css'
import Logo from '@/assets/images/logo-40.svg'

const HeroSection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.logo}><Logo /></div>
      <div className={classes.wrapper}>
        <h1 className="text-90">Be good to yourself</h1>
        <p className="text-18">We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
        <Button onClick={() => console.log('clicked')}>Take the quiz</Button>
      </div>
    </section>
  )
}

export default HeroSection

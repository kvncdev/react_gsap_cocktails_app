import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/all'

const Hero = () => {

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words'});
        // burada title olan 'MOJITO' yazimizi gsap icinde hazir gelen SlpitText ile her harf bir span olacak sekilde ayirdik
        // bu hazır bir fonksiyon sonra her elementi array olarak alabiliyoruz
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines'});
        // ayni sekilde bu da .subtitle class'ina sahip elementin icindeki yaziyi satirlara boluyor

        console.log(heroSplit.chars);

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.5,
            opacity: 0,
            ease: 'expo.inOut',
            stagger: 0.05,
        })

        gsap.from(paragraphSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.5,
            ease: 'expo.inOut',
            stagger: 0.05,
            delay: .6,
        })

        // gsap.fromTo('.test-text', {
        //     y: 10,
        //     opacity: 0,
        // }, {
        //     y: 0,
        //     duration: 1,
        //     opacity: 1,
        //     ease: 'power1.inOut',
        //     stagger: 0.05,
        //     delay: .6
        // })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
        .to('.left-leaf', {
            y: 200,
        }, 0)
        .to('.right-leaf', {
            y: -200,
        }, 0)
    })
  return (
    <>
        <section id='hero' className='noisy'>
            <h1 className='title'>MOJITO</h1>

            <img 
                src="/images/hero-left-leaf.png"
                alt="left-leaf"
                className='left-leaf' />
            <img 
                src="/images/hero-right-leaf.png"
                alt="right-leaf"
                className='right-leaf' />

            <div className='body'>
                <div className='content'>
                    <div className="space-y-5 hidden md:block">
                        <p className='subtitle'>Cool. Crisp. Classic.</p>
                        <p className='subtitle'>Sip the Spirit <br /> of Summer</p>
                    </div>


                    <div className='view-cocktails'>
                        <p className='subtitle'>
                            Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes -- designed to delight your senses.
                        </p>
                        <a className='subtitle' href="#cocktails">
                            View Cocktails
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero
"use client"

import { useState, useEffect } from "react"

import {
  Home,
  ChartPie,
  Briefcase,
  Instagram,
  Palette,
  Images,
  Film,
  Phone,
  ArrowRight,
  Mail,
  ChartNoAxesCombined,
  User
} from "lucide-react"

import {
  HoverSlider, HoverSliderDiv,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover
} from "@/components/blocks/animated-slideshow";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Carousel } from "@/components/ui/carousel";
import { FlipWords } from "@/components/ui/flip-words";
import { NavBar}  from "@/components/ui/tubelight-navbar";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import ShowcaseReel from "@/components/showcase-reel";
import {Card, CardContent} from "@/components/ui/card";
import {GlowEffect} from "@/components/ui/glow-effect";

const WORDS = ["imaginea", "promovarea", "contentul"];

const NAVBAR_ITEMS = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'Servicii', url: '#features', icon: Briefcase },
  { name: 'Showcase', url: '#showcase', icon: Images },
  { name: 'Cifre', url: '#numbers', icon: ChartPie },
  { name: 'Recenzii', url: '#testimonials', icon: User },
  { name: 'Contact', url: '#contact-me', icon: Phone },
];

const FEATURES = [
  {
    Icon: Palette,
    name: "Design",
    description: "Creez brandbooks elegante, logouri și vizualuri memorabile.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Film,
    name: "Reels",
    description: "Realizez conținut video calitativ pentru cele mai diverse domenii.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Instagram,
    name: "SMM",
    description: "Fac zgomot în social media, dar nu uit nici de vânzările reale!",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: ChartNoAxesCombined,
    name: "Campanii PR",
    description: "Campanii care se simt. Nu doar se văd.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-2 lg:row-end-3",
  },
];

const SHOWCASE = [
  {
    id: "slide-0",
    title: "reel",
    showcaseItem: (
      <HoverSliderDiv
        index={0}
        className="size-full w-auto h-96 h-[500px] object-cover"
      >
        <ShowcaseReel />
      </HoverSliderDiv>
    )
  },
  {
    id: "slide-1",
    title: "travel",
    showcaseItem: (
      <HoverSliderImage
        index={1}
        imageUrl={'/showcase/1.png'}
        src={'/showcase/1.png'}
        alt={'travel'}
        className="size-full w-auto h-96 h-[500px] object-cover"
        loading="eager"
        decoding="async"
      />
    )
  },
  {
    id: "slide-2",
    title: "magazin haine",
    showcaseItem: (
      <HoverSliderImage
        index={2}
        imageUrl={'/showcase/2.png'}
        src={'/showcase/2.png'}
        alt={'magazin haine'}
        className="size-full w-auto h-96 h-[500px] object-cover"
        loading="eager"
        decoding="async"
      />
    )
  },
  {
    id: "slide-3",
    title: "design interior",
    showcaseItem: (
      <HoverSliderImage
        index={3}
        imageUrl={'/showcase/4.png'}
        src={'/showcase/4.png'}
        alt={'design interior'}
        className="size-full w-auto h-96 h-[500px] object-cover"
        loading="eager"
        decoding="async"
      />
    )
  },
  {
    id: "slide-4",
    title: "magazin parfumuri",
    showcaseItem: (
      <HoverSliderImage
        index={4}
        imageUrl={'/showcase/3.png'}
        src={'/showcase/3.png'}
        alt={'magazin parfumuri'}
        className="size-full w-auto h-96 h-[500px] object-cover"
        loading="eager"
        decoding="async"
      />
    )
  },
]


export default function LandingPage() {
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust based on how much of the section should be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <NavBar items={NAVBAR_ITEMS} activeTab={activeTab} />

      {/* Hero Section */}
      <section id={'home'} className="relative pt-24 sm:pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.1),transparent_65%)]" />
        </div>

        <div className="container mb-24 flex flex-col items-center xl:flex-row justify-center mx-auto px-4 relative z-10">
          <div className="w-full xl:w-1/2 text-center xl:text-left">
            <div className={'flex justify-center xl:justify-start'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={'w-fit py-1.5 px-4 text-sm mb-2 rounded-full border border-border/10 bg-background/5 text-white/60 font-semibold'}
              >
                Florentin Pulisca
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
            >
              Construim
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FlipWords
                words={WORDS}
                className={'h-[55px] md:h-[80px] text-center text-blue-500 xl:text-left text-5xl md:text-7xl px-0 font-bold'}
              />
            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
            >
              afacerii tale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs mt-8 md:text-base text-center xl:text-left bg-gradient-to-r from-gray-500 via-purple-200 to-blue-200 bg-clip-text text-transparent"
            >
              Design modern. Promovari eficiente. Comunicare clara.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative hidden xl:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-3xl" />
            <Image src={'/hero.png'} height={500} width={500} alt={'hero image'} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id={'features'} className={'relative pt-24 pb-20 min-h-screen'}>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(120,50,255,0.15),transparent_50%)]" />

        <div className={'container mx-auto px-4 relative z-10'}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="rounded-full mb-4 px-4 py-1.5 text-sm font-medium" variant="secondary">
                Servicii
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Promovare, Atragerea Audienței</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Prin strategii smart de Social Media Management, îți cresc vizibilitatea,
                interacțiunea și încrederea în brand.
              </p>
            </motion.div>
          </div>

          <div className={'flex w-full justify-center'}>
            <BentoGrid className="lg:grid-rows-2 px-8 md:px-12 lg:px-24 min-h-96 max-w-[1300px]">
              {FEATURES.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id={'showcase'} className={'relative pt-12 md:pt-24 pb-20 min-h-screen'}>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(120,50,255,0.15),transparent_50%)]" />

        <div className={'container mx-auto px-4 relative z-10'}>
          <div className="text-center mb-8 md:md-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Showcase</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                O selecție din vizualurile realizate pentru clienți din domenii variate. Fiecare design are un scop clar: să atragă, să convingă și să convertească.
              </p>
            </motion.div>
          </div>

          <div className={'flex w-full justify-center'}>
            <HoverSlider className="text-white">
              <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12 md:pt-12">
                <div className="flex flex-col space-y-2 md:space-y-4   ">
                  {SHOWCASE.map((slide, index) => (
                    <TextStaggerHover
                      key={slide.title}
                      index={index}
                      className="cursor-pointer text-2xl md:text-4xl xl:text-6xl font-bold uppercase tracking-tighter"
                      text={slide.title}
                    />
                  ))}
                </div>
                <HoverSliderImageWrap>
                  {SHOWCASE.map(slide => (
                    <div key={slide.id} className={'flex justify-center'}>
                      {slide.showcaseItem}
                    </div>
                  ))}
                </HoverSliderImageWrap>
              </div>
            </HoverSlider>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section id={'numbers'} className="w-full pt-24 pb-20 min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-purple-900/10 to-transparent" />

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              Cifre
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Statistica mea</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Zeci de afaceri și-au crescut vizibilitatea, interacțiunea și vânzările prin strategii social media bine
              implementate. Cifrele confirmă eficiența.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-16 relative">
            <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border/20 to-transparent -translate-y-1/2 z-0"></div>
            {[
              {
                step: ">5",
                title: "Clienti activi",
                description: "Susțin prezența online a peste 10 afaceri, cu rezultate măsurabile în engagement și vânzări.",
              },
              {
                step: ">5",
                title: "Ani de experienta",
                description: "Expertiză dovedită în strategie social media și campanii digitale de impact.",
              },
              {
                step: ">100",
                title: "Reels-uri filmate",
                description: "Videoclipuri dinamice, optimizate pentru reach și retenție maximă a publicului.",
              },
              {
                step: ">200",
                title: "Case-uri finisate",
                description: "Studii de caz implementate pentru branduri diverse, cu rezultate cuantificabile.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center space-y-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="pt-32 pb-24 min-h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(120,50,255,0.15),transparent_50%)]" />

        <div className="relative z-10 w-full">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="rounded-full mb-4 px-4 py-1.5 text-sm font-medium" variant="secondary">
                Recenzii
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ce clientii spun despre mine</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Nu mă crede doar pe cuvânt. Iată ce au de spus clienții mei
                despre experiența lor cu mine.
              </p>
            </motion.div>
          </div>

          <div className="relative overflow-hidden w-full h-full pb-20">
            <Carousel
              slides={[
                {
                  src: '/testimonials/1.png',
                },
                {
                  src: '/testimonials/2.png',
                },
                {
                  src: '/testimonials/3.png',
                },
                {
                  src: '/testimonials/4.png',
                },
                {
                  src: '/testimonials/5.png',
                },
                {
                  src: '/testimonials/6.png',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id={'contact-me'} className={'relative py-32'}>
        <div className={'container mx-auto px-4 relative z-10'}>
          <div className={'flex w-full justify-center'}>
            <Card
              className={`
                w-full max-w-[800px] p-0 rounded-xl border border-border/10 bg-gradient-to-b from-neutral-900/50 to-neutral-950/50 text-white
              `}
            >
              <CardContent className={'p-6 lg:p-12'}>
                <div className={'flex flex-col gap-8 lg:flex-row lg:gap-0'}>
                  <div className={'h-fit w-2/3'}>
                    <h4 className="mb-1 text-2xl font-bold md:text-3xl">Contacteaza-ma!</h4>
                    <p className="text-muted-foreground">Ai o idee? Scrie-mi, sună-mă  și ne apucăm de treabă.</p>

                    <div className='relative w-fit mt-8 hover:scale-105 transition'>
                      <GlowEffect
                        colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                        mode='colorShift'
                        blur='soft'
                        duration={3}
                        scale={0.9}
                      />
                      <a href="tel:060744310">
                        <button
                          className={`
                            w-[80px] relative inline-flex items-center justify-center gap-2 rounded-md bg-white text-black hover:bg-black 
                            hover:text-white hover:font-semibold transition outline-0 py-1.5 text-sm cursor-pointer
                          `}
                        >
                          Suna <ArrowRight className='h4 w-4' />
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className={'h-fit w-1/3'}>
                    <ul className="flex flex-col space-y-2 text-sm font-medium">
                      <li className="flex items-center">
                        <Mail className="mr-4 size-4 flex-shrink-0" />
                        Email:
                        <a href="mailto:nicerbeyn28@gmail.com" className={'ml-2 underline'}>
                          nicerbeyn28@gmail.com
                        </a>
                      </li>

                      <li className="flex items-center">
                        <Phone className="mr-4 size-4 flex-shrink-0" />
                        Mobil:
                        <a href="tel:060744310" className={'ml-2 underline'}>
                          +37360744310
                        </a>
                      </li>

                      <li className="flex items-center">
                        <Instagram className="mr-4 size-4 flex-shrink-0" />
                        <a href="https://instagram.com/florentin_puliskaa" target={'_blank'} className={'underline'}>
                          @florentin_puliskaa
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 pb-32 sm:pb-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className={'flex flex-col items-center justify-center w-full'}>
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Florentin Pulisca. Toate drepturile sunt rezervate.</p>
          <p className="text-gray-400 text-sm">
            Website creat de
            <a href="https://v3.md" target={'_blank'} className={'underline ml-1.5'}>
              Bitwave Software S.R.L.
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

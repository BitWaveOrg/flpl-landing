"use client"

import { useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

import {
  Home,
  User,
  Briefcase, FileTextIcon, GlobeIcon, ChevronsRight, BellIcon,
} from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dotted-dialog"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion"
import { NavBar}  from "@/components/ui/tubelight-navbar";
import {Carousel} from "@/components/ui/carousel";
import {BentoCard, BentoGrid} from "@/components/ui/bento-grid";
import {InputIcon} from "@radix-ui/react-icons";

const WORDS = ["Imaginea ta", "Promovarea ta", "Contentul tau"];

const NAVBAR_ITEMS = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'Cifre', url: '#numbers', icon: User },
  { name: 'Recenzii', url: '#testimonials', icon: Briefcase },
  { name: 'SMM', url: '#smm', icon: Briefcase },
];

const SMM_FEATURES = [
  {
    Icon: FileTextIcon,
    name: "Pagini Social Media",
    description: "Îți creez și administrez profile atractive pe Facebook, Instagram și TikTok, cu design unic și descrieri optimizate SEO care reflectă brandul tău.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Conținut Captivant",
    description: "Construiesc planuri de conținut pe baza audienței tale, pentru postări care atrag, implică și cresc vizibilitatea organică.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Publicare Optimizată",
    description: "Programez postările în momente strategice și le optimizez continuu pentru performanță maximă și conversii reale.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: ChevronsRight,
    name: "Conținut Dinamic",
    description: "Creez Stories și Reels cu impact vizual și interactivitate, menite să atragă atenția și să genereze lead-uri.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Raportare Clară",
    description:
      "Primești rapoarte lunare și recomandări pentru creștere constantă, adaptate rezultatelor obținute.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  // const isVerySmall = useMediaQuery("(max-width: 500px)")

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
      <section id={'home'} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.1),transparent_65%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
            >
              Construim
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
            >
              <FlipWords className={'text-blue-400'} words={WORDS} />
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
            >
              În Online
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Design modern. Promovari eficiente. Comunicare clara.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-full max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-3xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden shadow-2xl">
              <div className="relative h-[300px] md:h-[500px] w-full bg-gray-950 coverflow-hidden">
                <Image alt={'hero-image'} src={'/hero.png'} height={500} width={1000} className={'w-full h-full'} />

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Numbers Section */}
      <section id={'numbers'} className="w-full pt-20 pb-20 md:pb-32 bg-black relative overflow-hidden flex justify-center">
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
              Zeci de afaceri au crescut vizibilitatea, interacțiunea și vânzările prin strategii de social media bine
              implementate. Cifrele confirmă eficiența.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border/20 to-transparent -translate-y-1/2 z-0"></div>
            {[
              {
                step: "10+",
                title: "Clienti activi",
                description: "Susțin prezența online a peste 10 afaceri, cu rezultate măsurabile în engagement și vânzări.",
              },
              {
                step: "5+",
                title: "Ani de experienta",
                description: "Expertiză dovedită în strategie social media și campanii digitale de impact.",
              },
              {
                step: "100+",
                title: "Reels-uri filmate",
                description: "Videoclipuri dinamice, optimizate pentru reach și retenție maximă a publicului.",
              },
              {
                step: "500+",
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
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(120,50,255,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ce clientii spun despre noi</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Nu mă crede doar pe cuvânt. Iată ce au de spus clienții mei <br/>
                despre experiența lor cu mine.
              </p>
            </motion.div>
          </div>

          <div className="relative overflow-hidden w-full h-full py-20">
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

      {/* SMM Section */}
      <section id={'smm'} className={'relative'}>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(120,50,255,0.15),transparent_50%)]" />

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="rounded-full mb-4 px-4 py-1.5 text-sm font-medium" variant="secondary">
              SMM
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Promovare, Atragerea Audienței</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Prin strategii smart de Social Media Management, îți cresc vizibilitatea, <br/>
              interacțiunea și încrederea în brand.
            </p>
          </motion.div>
        </div>

        <div className={'flex w-full justify-center'}>
          <BentoGrid className="lg:grid-rows-3 px-8 md:px-12 lg:px-24 max-w-[1300px]">
            {SMM_FEATURES.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 p-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Florentin Pulisca. Toate drepturile sunt rezervate.</p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            Cookies
          </a>
        </div>
      </footer>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => !open && setIsModalOpen(false)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Get Early Access</DialogTitle>
            <DialogDescription>
              Join our exclusive beta program and be among the first to experience the future of technology.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="modal-email">Email</Label>
              <Input
                id="modal-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-name">Full Name</Label>
              <Input
                id="modal-name"
                type="text"
                placeholder="Enter your full name"
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-company">Company (Optional)</Label>
              <Input
                id="modal-company"
                type="text"
                placeholder="Enter your company name"
                className="bg-gray-800/50 border-gray-700 focus:border-purple-500"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              onClick={() => {
                alert("Thank you for your interest! We'll be in touch soon.")
                setIsModalOpen(false)
              }}
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

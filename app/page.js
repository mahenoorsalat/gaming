'use client';
import { useState , useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, Twitch } from 'lucide-react';
import { Menu, X, Search, Globe } from 'lucide-react';


export default function Home() {
  const scrollRef = useRef(null);
  const rankScrollRef = useRef(null);
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const rankScroll = rankScrollRef.current;
    if (rankScroll) {
      const scrollWidth = rankScroll.scrollWidth;
      const animate = () => {
        if (rankScroll.scrollLeft >= scrollWidth / 2) {
          rankScroll.scrollLeft = 0;
        } else {
          rankScroll.scrollLeft += 1;
        }
        requestAnimationFrame(animate);
      };
      const animation = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animation);
    }
  }, []);
  useEffect(() => {
    const scroll = scrollRef.current;
    if (scroll) {
      const scrollWidth = scroll.scrollWidth;
      const animate = () => {
        if (scroll.scrollLeft >= scrollWidth / 2) {
          scroll.scrollLeft = 0;
        } else {
          scroll.scrollLeft += 1;
        }
        requestAnimationFrame(animate);
      };
      const animation = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animation);
    }
  }, []);

  const dummyCharacters = [
    { name: 'Astra', image: '/game-source/icons/astra.png' },
    { name: 'Character2', image: '/game-source/icons/chamber.png' },
    { name: 'Character3', image: '/game-source/icons/clove.png' },
    { name: 'Character4', image: '/game-source/icons/Fade.png' },
    { name: 'Character5', image: '/game-source/icons/gekko.png' },
    { name: 'Character6', image: '/game-source/icons/harbor.png' },
    { name: 'Character7', image: '/game-source/icons/iso.png' },
    { name: 'Character8', image: '/game-source/icons/kayo.png' },
    { name: 'Character9', image: '/game-source/icons/neon.png' },
    { name: 'Character10', image: '/game-source/icons/omen.png' },
    { name: 'Character11', image: '/game-source/icons/reyna.png' },
    { name: 'Character12', image: '/game-source/icons/sage.png' },
    { name: 'Character13', image: '/game-source/icons/skye.png' },
    { name: 'Character14', image: '/game-source/icons/sova.png' },
    { name: 'Character15', image: '/game-source/icons/Viper.png' },
    { name: 'Character16', image: '/game-source/icons/vsye.png' },
    { name: 'Character17', image: '/game-source/icons/yoru.png' },
    { name: 'Character17', image: '/game-source/icons/cypher.png' },






  ];
  const slides = [
    {
      id: 1,
      image: '/game-source/Agent-thumbnails/astraT.png',
      description: 'AstraT',
    },
    {
      id: 2,
      image: '/game-source/Agent-thumbnails/BreachT.png',
      description: 'Breach',
    },
    {
      id: 3,
      image: '/game-source/Agent-thumbnails/BrimstoneT.jpg',
      description: 'Brimstone',
    },
    {
      id: 4,
      image: '/game-source/Agent-thumbnails/chamberT.png',
      description: 'Chamber',
    },
    {
      id: 5,
      image: '/game-source/Agent-thumbnails/CloveT.jpg',
      description: 'Clove',
    },
    {
      id: 6,
      image: '/game-source/Agent-thumbnails/chamberT.png',
      description: 'Chamber',
    },
    {
      id: 7,
      image: '/game-source/Agent-thumbnails/CloveT.jpg',
      description: 'Clove',
    },
    {
      id: 8,
      image: '/game-source/Agent-thumbnails/CypherT.jpg',
      description: 'Cypher',
    },
    {
      id: 9,
      image: '/game-source/Agent-thumbnails/fadeT.png',
      description: 'Fade',
    },
    {
      id: 10,
      image: '/game-source/Agent-thumbnails/GekkoT.png',
      description: 'Gekko',
    },
    {
      id: 11,
      image: '/game-source/Agent-thumbnails/harborT.png',
      description: 'Harbor',
    },
    {
      id: 12,
      image: '/game-source/Agent-thumbnails/IsoT.png',
      description: 'Iso',
    },
    {
      id: 13,
      image: '/game-source/Agent-thumbnails/JettT.jpg',
      description: 'Jett',
    },
    {
      id: 14,
      image: '/game-source/Agent-thumbnails/kayoT.png',
      description: 'Kayo',
    },
    {
      id: 15,
      image: '/game-source/Agent-thumbnails/NeonT.png',
      description: 'Neon',
    },
    {
      id: 16,
      image: '/game-source/Agent-thumbnails/OmenT.jpg',
      description: 'Omen',
    },
    {
      id: 17,
      image: '/game-source/Agent-thumbnails/phoenixT.png',
      description: 'Phoenix',
    },
    {
      id: 18,
      image: '/game-source/Agent-thumbnails/RazeT.jpg',
      description: 'Raze',
    },
    {
      id: 19,
      image: '/game-source/Agent-thumbnails/ReynaT.png',
      description: 'Reyna',
    },
    {
      id: 20,
      image: '/game-source/Agent-thumbnails/SageT.jpg',
      description: 'Sage',
    },
    {
      id: 21,
      image: '/game-source/Agent-thumbnails/SkyeT.jpg',
      description: 'Skye',
    },
    {
      id: 22,
      image: '/game-source/Agent-thumbnails/SovaT.jpg',
      description: 'Sova',
    },
    {
      id: 23,
      image: '/game-source/Agent-thumbnails/tejoT.png',
      description: 'Tejo',
    },
    {
      id: 24,
      image: '/game-source/Agent-thumbnails/ViperT.jpg',
      description: 'Viper',
    },
    {
      id: 25,
      image: '/game-source/Agent-thumbnails/vyseT.png',
      description: 'Vyse',
    },
    {
      id: 26,
      image: '/game-source/Agent-thumbnails/yoruT.png',
      description: 'Yoru',
    },
  ];
  const rankCharacters = [
    {  image: '/game-source/ALL-RANKS/asc1.png' },
    {  image: '/game-source/ALL-RANKS/asc1.png' },
    {  image: '/game-source/ALL-RANKS/asc2.png' },
    {  image: '/game-source/ALL-RANKS/asc3.png' },
    {  image: '/game-source/ALL-RANKS/bronze1.png' },
    {  image: '/game-source/ALL-RANKS/bronze2.png' },
    {  image: '/game-source/ALL-RANKS/bronze3.png' },
    {  image: '/game-source/ALL-RANKS/diamond1.png' },
    {  image: '/game-source/ALL-RANKS/diamond2.png' },
    {  image: '/game-source/ALL-RANKS/diamond3.png' },
    {  image: '/game-source/ALL-RANKS/gold1.png' },
    {  image: '/game-source/ALL-RANKS/gold2.png' },
    {  image: '/game-source/ALL-RANKS/gold3.png' },
    {  image: '/game-source/ALL-RANKS/immo1.png' },
    {  image: '/game-source/ALL-RANKS/immo2.png' },
    {  image: '/game-source/ALL-RANKS/immo3.png' },
    {  image: '/game-source/ALL-RANKS/iron1.png' },
    {  image: '/game-source/ALL-RANKS/iron2.png' },
    {  image: '/game-source/ALL-RANKS/iron3.png' },
    {  image: '/game-source/ALL-RANKS/no_rank.png' },
    {  image: '/game-source/ALL-RANKS/plat1.png' },
    {  image: '/game-source/ALL-RANKS/plat2.png' },
    {  image: '/game-source/ALL-RANKS/plat3.png' },
    {  image: '/game-source/ALL-RANKS/radiant.png' },
    {  image: '/game-source/ALL-RANKS/silver1.png' },
    {  image: '/game-source/ALL-RANKS/silver2.png' },
    {  image: '/game-source/ALL-RANKS/silver3.png' },








  ];
  

  
  return (
    <main>
 <nav className="fixed font-header w-full z-50 backdrop-blur bg-black/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - always visible */}
          <Link href="/" className="text-white text-2xl font-bold relative z-50">
            <Image
              src="/game-source/logo.png"
              alt="Character Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu - hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-white font-header hover:text-gray-300">
              Home
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              Catalog
            </Link>
            <div className="bg-green-400 px-2 py-0.5 rounded text-sm">HOT</div>
            <Link href="/" className="text-white hover:text-gray-300">
              Sale
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              Blog
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              Brand Story
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              Support
            </Link>
          </div>

          {/* Desktop Icons - hidden on mobile */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-white hover:text-gray-300">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-gray-300">
              <Globe size={20} />
            </button>
            <div className="text-white">$0.00</div>
          </div>

          {/* Mobile Menu Button - visible only on mobile */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
  <div className="fixed inset-0 z-40">
    {/* Backdrop blur layer */}
    <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
    
    {/* Content container */}
    <div className="relative h-full flex flex-col ">
      {/* Menu items container with glass effect */}
      <div className="w-full bg-black/80 backdrop-blur-sm border-t border-gray-700">
        <div className="flex flex-col items-center space-y-6 py-8">
          <Link 
            href="/" 
            className="text-white text-xl hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/catalog" 
            className="text-white text-xl hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Catalog
          </Link>
          <div className="bg-green-400 px-2 py-0.5 rounded text-sm">HOT</div>
          <Link 
            href="/sale" 
            className="text-white text-xl hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Sale
          </Link>
          <Link 
            href="/blog" 
            className="text-white text-xl hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/brand-story" 
            className="text-white text-xl hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Brand Story
          </Link>
          <Link 
            href="/support" 
            className="text-white text-xl hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Support
          </Link>
          
          {/* Mobile Icons */}
          <div className="flex items-center gap-6 mt-8 border-t border-gray-700 pt-8 w-full justify-center">
            <button className="text-white hover:text-gray-300 transition-colors">
              <Search size={24} />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <Globe size={24} />
            </button>
            <Link 
              href="/login" 
              className="text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={24} />
            </Link>
            <div className="text-white">$0.00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
          
        </div>
      </div>
    </nav>
      <section className="relative h-screen">
      <video
  autoPlay
  loop
  muted
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/game-source/Frontpage.mp4" type="video/mp4" />
</video>
        <div className="relative z-10 flex items-center justify-center h-full ">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">Welcome to Gaming World</h1>
            <p className="text-xl mb-8">Experience the next level of gaming</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
              Explore Now
            </button>
          </div>
        </div>
      </section>
      <div className="bg-gray-900 py-8 overflow-hidden">
  <div ref={scrollRef} className="flex whitespace-nowrap overflow-hidden">
    {[...dummyCharacters, ...dummyCharacters].map((character, index) => (
      <div key={index} className="inline-block mx-8">
        <div className="w-48 h-48 flex items-center justify-center text-white rounded">
          <img
            width={150}  // Set specific size for better control
            height={150}
            src={character.image}
            alt={character.name}
            className="w-full h-full object-contain"  // Remove fixed w-24 h-24 and set to full container size
          />
        </div>
      </div>
    ))}
  </div>
</div>

<div className='about  flex justify-center h-[70vh]  '>
  <div className='flex items-center justify-between'>

    <div className="text-container text-black">
     
    </div>
  </div>
</div>

<div className="bg-gray-900  justify-center min-h-screen pt-20 pb-20 pl-3 pr-3 ">
  <div className=" m-20 sm:m-0 mx-auto mb-10 mt-10">
    <h1 className="text-white text-4xl font-bold text-center mb-2">FEATURED GAMING GEAR</h1>
    <p className="text-gray-400 text-center mb-8">Enhance your gameplay with top-tier performance</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
      {/* Headsets Card */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 rounded-lg p-6 aspect-square relative overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110"
          style={{ backgroundImage: 'url("/game-source/what/Agent.png")' }}
        ></div>
        <h2 className="absolute top-4 left-4 text-white text-2xl font-bold mb-4">Agent Mastery</h2>
        <div className="absolute inset-0 group-hover:scale-105 group-hover:border-8 group-hover:border-gradient-r group-hover:border-neon-purple-blue transition-all duration-300"></div>
      </div>

      {/* Gaming Mice - Large Center Card */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-6 rounded-lg sm:aspect-square p-6 relative overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110"
          style={{ backgroundImage: 'url("/game-source/what/bootcamps.png")' }}
        ></div>
        <h2 className="absolute top-4 left-4 text-white text-2xl font-bold mb-4">Bootcamps</h2>
        <div className="absolute inset-0 group-hover:scale-105 group-hover:border-8 group-hover:border-gradient-r group-hover:border-neon-purple-blue transition-all duration-300"></div>
      </div>

      {/* Gaming Chair Card */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 rounded-lg p-6 aspect-square relative overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110"
          style={{ backgroundImage: 'url("/game-source/what/Coaching.png")' }}
        ></div>
        <h2 className="absolute top-4 left-4 text-white text-2xl font-bold mb-4">Coaching</h2>
        <div className="absolute inset-0 group-hover:scale-105 group-hover:border-8 group-hover:border-gradient-r group-hover:border-neon-purple-blue transition-all duration-300"></div>
      </div>

      {/* Game PC Card */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 rounded-lg p-6 aspect-square relative overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110"
          style={{ backgroundImage: 'url("/game-source/what/Gamesense.png")' }}
        ></div>
        <h2 className="absolute top-4 left-4 text-white text-2xl font-bold mb-4">Gamesense</h2>
        <div className="absolute inset-0 group-hover:scale-105 group-hover:border-8 group-hover:border-gradient-r group-hover:border-neon-purple-blue transition-all duration-300"></div>
      </div>

      {/* Gaming Keyboard Card */}
      <div className="col-span-1 sm:aspect-square sm:col-span-2 lg:col-span-6 rounded-lg p-6 relative overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110"
          style={{ backgroundImage: 'url("/game-source/what/Mechanics.png")' }}
        ></div>
        <h2 className="absolute top-4 left-4 text-white text-2xl font-bold mb-4">Mechanics</h2>
        <div className="absolute inset-0 group-hover:scale-105 group-hover:border-8 group-hover:border-gradient-r group-hover:border-neon-purple-blue transition-all duration-300"></div>
      </div>

      {/* VR Sets Card */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 rounded-lg p-6 aspect-square relative overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110"
          style={{ backgroundImage: 'url("/game-source/what/Strategy.png")' }}
        ></div>
        <h2 className="absolute top-4 left-4 text-white text-2xl font-bold mb-4">Strategy</h2>
        <div className="absolute inset-0 group-hover:scale-105 group-hover:border-8 group-hover:border-gradient-r group-hover:border-neon-purple-blue transition-all duration-300"></div>
      </div>
    </div>
  </div>
</div>



<div className="w-full bg-gray-900 py-16">
  <Head>
    <link
      href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      rel="stylesheet"
    />
  </Head>

  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center text-white mb-16">
      <h1 className="text-4xl font-extrabold font-[PressStart2P] mb-4">
        We Live To Fight
      </h1>
      <p className="text-lg font-[PressStart2P] opacity-80">
        Are you ready for the big stage, Legend? Capture the moment in Apex Legends: Takeover.
      </p>
    </div>

    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper-container"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="swiper-slide">
          <div className="relative aspect-[16/9] h-[500px] w-full transition-opacity duration-300">
            <Image
              src={slide.image}
              alt="thumbnails"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
          
              <p className="text-sm opacity-90">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>


<div className="banner bg-fixed bg-cover bg-center h-96 flex items-center justify-center text-center p-8"
     style={{ backgroundImage: 'url("/game-source/banner.webp")' }}>
  <div className="text-black">
    <h1 className="text-5xl font-bold mb-4">Level Up Your Gaming</h1>
    <p className="text-xl mb-6">Download Next Level Now and Take Your Gameplay to New Heights</p>
    <button className="bg-black rounded-full text-white text-lg px-6 py-3  hover:bg-gray-600 transition duration-300">
      Download Now
    </button>
  </div>
</div>

<div className="bg-gray-900 py-8 overflow-hidden">
  <div ref={rankScrollRef} className="flex whitespace-nowrap overflow-hidden">
    {[...rankCharacters, ...rankCharacters].map((character, index) => (
      <div key={index} className="inline-block mx-8">
        <div className="w-16 h-16 flex flex-col items-center justify-center text-white rounded">
          <img
            width={250}
            height={150}
            src={character.image}
            alt={character.name}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    ))}
  </div>
</div>

<footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-6">
              <img 
                src="/game-source/logo.png" 
                alt="Gaming Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm">
              Join our community of gamers and level up your gaming experience with professional coaching, 
              extensive tutorials, and premium content.
            </p>
            <div className="flex space-x-4 pt-4">
              <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
              <Youtube className="w-5 h-5 hover:text-red-500 cursor-pointer" />
              <Twitch className="w-5 h-5 hover:text-purple-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Agent Guides</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Tournaments</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Coaching Sessions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Premium Content</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">News & Updates</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Join Our Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with the latest gaming tips, tournaments, and exclusive offers!</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © 2024 Gaming World. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </main>
  );
}

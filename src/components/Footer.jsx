import React from 'react';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Youtube,  
} from 'lucide-react';
import { SlSocialBehance } from "react-icons/sl";
const Footer = () => {
  const socials = [
    {  href: 'https://instagram.com/mindstorian', icon: <Instagram size={18} /> },
    {  href: 'https://www.behance.net/mindstorycreative', icon: <SlSocialBehance size={18} /> },
    {  href: 'https://www.youtube.com/@Talksnetwork', icon: <Youtube size={18} /> },
    {  href: 'https://twitter.com/mindstorian', icon: <Twitter size={18} /> },
    {  href: 'https://facebook.com/mindstorian', icon: <Facebook size={18} /> },
    {  href: 'https://www.linkedin.com/company/68608253/', icon: <Linkedin size={18} /> },
  ];
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-28 md:pb-8 px-[5%] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Ready to tell <br /> 
              <span className="text-[#ff6b00]">your story?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Partner with a leading digital marketing agency to scale your visual presence and drive meaningful impact.
            </p>
          </div>
          <div>
            <a 
               href="https://mindstory.in/contact-us/" 
              className="inline-block bg-[#ff6b00] hover:bg-white hover:text-black text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Start a Project
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-[#ff6b00]/50 transition-colors">
            <p className="text-[#ff6b00] font-bold uppercase tracking-widest text-xs mb-4">Email Us</p>
            <a href="mailto:hello@mindstory.in" className="text-xl font-semibold hover:text-[#ff6b00] transition-colors">
              hello@mindstory.in
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-[#ff6b00]/50 transition-colors">
            <p className="text-[#ff6b00] font-bold uppercase tracking-widest text-xs mb-4">Call Us</p>
            <a href="tel:+918281610051" className="text-xl font-semibold hover:text-[#ff6b00] transition-colors">
              +91 82816 10051
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-[#ff6b00]/50 transition-colors">
            <p className="text-[#ff6b00] font-bold uppercase tracking-widest text-xs mb-4">Locations</p>
            <p className="text-xl font-semibold"> Kochi  Thrissur  Calicut  Dubai</p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-gray-500 text-sm">
            © 2026 <span className="text-white font-medium tracking-tight">MINDSTORY</span> All Rights Reserved.
          </div>
          
          <div className="text-gray-500 text-sm">
           <span className="text-[#ff6b00] font-semibold">Top Digital Marketing Agency in Kerala.</span>
          </div>

          <div className="flex flex-wrap gap-5 md:gap-6 text-sm font-bold uppercase tracking-tighter">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group transition-colors hover:text-[#ff6b00]"
          title={social.name}
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            {social.icon}
          </span>
        </a>
      ))}
    </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
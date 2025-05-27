import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import {cn} from "../lib/utils";
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmiting, setIsSubmiting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmiting(true)
        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank You! for your Message. I will get back to you soon.",
            })
            setIsSubmiting(false);
        }, 1500);
    }

    // console.log("handle submit ", handleSubmit())
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-width-2xl mx-auto">
                Have a project in mind? Feel free to react out .
                I am always open to discuss new opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3> 
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="acevesaceves97@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    acevesaceves97@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                   +1 (630) 800-9439
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Atlanta, Georgia, US
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Conect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/ismael-aceves/" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="#" target="_blank">
                                <Twitter />
                            </a>
                            <a href="https://www.instagram.com/ismael969/" target="_blank">
                                <Instagram />
                            </a>

                            <a href="#" target="_blank">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input 
                                type="text " 
                                id="name" 
                                name="name" 
                                requiered 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                placeholder="Ismael Aceves..."
                                >
                                </input>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input 
                                type="email " 
                                id="email" 
                                name="email" 
                                requiered 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                placeholder="Your Email Here..."
                                >
                                </input>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <input 
                                id="message" 
                                name="message" 
                                requiered 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                                placeholder="Hi!,here I can send a message..."
                                >
                                </input>
                        </div>
                        <button 
                        type="submit" 
                        className={cn("cosmic-button w-full flex justify-center gap-2")}
                        disadled={isSubmiting}
                        >
                            {isSubmiting ? "Sending.." : "send Message"}
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection
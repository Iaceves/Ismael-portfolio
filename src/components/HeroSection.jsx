import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section 
    id="hero"
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in ">Hi! I'm </span>
                    {" "}
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Ismael </span>
                    {" "}
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Aceves</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Bilingual Full-Stack Software Engineer with hands-on experience in modern JavaScript frameworks such as React, React Native, Next.js, and backend
                    tools like Express and MongoDB. Skilled in building scalable full-stack applications with real-world integrations.
                    Known for being a fast learner, empathetic communicator, and problem-solver who thrives in collaborative,
                    remote environments. Passionate about delivering clean, efficient code and continuously growing as a developer.
                    Eager to contribute to innovative teams where impact and learning are valued.
 
                </p>
                <div className="opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View my work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground md-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
  )
}

export default HeroSection
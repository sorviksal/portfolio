import { Code2, Rocket, Users, Lightbulb } from "lucide-react";
const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        decription:
            "Writing maintainable, scalable code that stands the test of time."
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "Staying ahead with the latest technologies and best practices.",
    },
]


export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white"> 
                                {" "}
                                one component at a time.
                            </span>
                        </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I'm a passionate software developer currently working at Asia Euro University, where I focus
                            on building reliable, scalable, and secure software systems that support real-world academic
                            and business operations.
                        </p>

                        <p>
                            My core expertise is in backend development using C#, Asp.NET Core, Node.js, PostgreSQL, and SQL Server,
                            where I design APIs, business logic, and database architectures for performance, security,
                            and maintainability.
                        </p>

                        <p>
                            In addition to backend systems, I also build modern frontend applications using React.js,
                            Tailwind CSS, and JavaScript, allowing me to deliver complete full-stack solutions from
                            database to user interface.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300"> 
                        <p className="text-lg font-medium italic text-foreground"> 
                            " I'm continuously learning, improving system design skills, and expanding my backend expertise
                            with Java Spring Boot and DevOps practices, while building real-world software using clean
                            architecture and efficient code."
                        </p>
                    </div>
                    </div> 
                   {/* Right Column - Hillight */}
                   <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.decription}</p>
                        </div>
                        ))}
                   </div>
                </div>
            </div>
        </section>
    );
};
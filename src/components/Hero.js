import Image from "next/image";
import { socials } from "@/data/socials";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-badge">🎓 VIT Bhopal University</div>
                <h1>
                    GeeksforGeeks
                    <br />
                    Student Chapter
                </h1>
                <p className="hero-subtitle">
                    A community of passionate coders, builders, and tech enthusiasts.
                    We learn together, build together, and grow together.
                </p>
                <div className="hero-cta-group">
                    <a
                        href={socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Follow Us
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Get in Touch
                    </a>
                </div>
                <div className="hero-logos">
                    <Image
                        src="/logos/gfg-chapter.webp"
                        alt="GfG Student Chapter Logo"
                        width={100}
                        height={50}
                        style={{ width: "auto", height: "50px" }}
                    />
                    <span style={{ fontSize: "1.5rem", opacity: 0.4 }}>×</span>
                    <Image
                        src="/logos/vit-bhopal.png"
                        alt="VIT Bhopal Logo"
                        width={140}
                        height={50}
                        style={{ width: "auto", height: "50px" }}
                    />
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const HeroFrame: React.FC = () => {
  return (
    <section
      id="section-0"
      className="min-h-screen pt-16 bg-background"
      data-frame="0"
    >
      <div className="pudding-container">
        {/* Main title */}
        <h1
          className="text-center mb-4"
          style={{
            color: 'var(--accent-color)',
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            fontSize: "3.5rem",
          }}
        >
          AI, Calm in Chaos, and Orientalism
        </h1>

        {/* Author */}
        <p
          className="text-center mb-6 text-muted-foreground"
          style={{
            fontSize: "1rem",
          }}
        >
          Nastassia Shaveika, 2026
        </p>
        
        <p
          className="text-center mb-8 text-muted-foreground"
          style={{
            fontSize: "0.85rem",
            fontStyle: "italic",
          }}
        >
          A capstone project for Minerva University, developed from mid-2025 through early 2026. The cross-model experiment was conducted using models available at the time.
        </p>

        {/* Painting */}
        <div style={{ margin: "1.5rem 0" }}>
          <ImageWithFallback
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fra_Filippo_Lippi_-_The_Funeral_of_St_Stephen_-_WGA13271.jpg/1200px-Fra_Filippo_Lippi_-_The_Funeral_of_St_Stephen_-_WGA13271.jpg?20110610032711"
            alt="Filippo Lippi - The Funeral of St. Stephen"
            style={{ 
              width: '100%', 
              height: 'auto',
              display: 'block'
            }}
          />
        </div>

        {/* Opening narrative */}
        <div className="space-y-2">
          <p className="text-foreground">
            What do you think about the painting above?
          </p>

          <p className="text-foreground">
            It has soft colors, is well-composed, shows a man lying in the center with people gathered around him.
          </p>

          <p className="text-foreground">
            This is "The Funeral of Saint Stephen" (1460) by Filippo Lippi. The figures are mourning the death of the first Christian martyr. Historically, it's a scene of grief.
          </p>

          <p className="text-foreground">
            According to the{" "}
            <a
              href="https://huggingface.co/datasets/printblue/EmoArt-130k"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent-color)",
                textDecoration: "underline",
              }}
            >
              EmoArt dataset
            </a>{" "}
            (which I will introduce in the next section), GPT-4o looked at this painting and said: <strong style={{ color: "var(--accent-color)" }}>Calm</strong>.
          </p>

          <p className="text-foreground">
            When I tested other models on the same image, they disagreed—identifying sadness instead. GPT-5.1 described the people around as "mourners whose faces and postures show heaviness and grief."
          </p>

          <p className="text-foreground">
            This little test is basically what this whole piece is about.
          </p>

          <p className="text-foreground">
            I'm not saying AI is broken. I'm not saying it's fine either. Here, I investigate why AI calls very different artworks "calm," and what that reveals about how these systems interpret emotion, culture, and unfamiliar artistic traditions.
          </p>
        </div>
      </div>
    </section>
  );
};
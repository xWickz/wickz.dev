"use client";
import {
  Shader,
  Blob,
  FilmGrain,
  Kaleidoscope,
  Swirl,
  WaveDistortion
} from 'shaders/react'

export function BackgroundShader({ active }: { active: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-0 transition-opacity duration-500 ease-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden
      style={{ pointerEvents: "none" }}
    >
      <Shader>
        <Swirl colorA="#3dd812" colorB="#2bf03b" colorSpace="oklch" />
        <WaveDistortion angle={257} edges="wrap" frequency={1.6} strength={0.1} transform={{ scale: 1.3 }}>
          <WaveDistortion angle={73} edges="mirror" frequency={8.1} speed={0.3} waveType="sawtooth">
            <Blob
              center={{ x: 0.49, y: 1 }}
              colorA="#fce656"
              colorB="#e9ac1e"
              deformation={0.7}
              highlightColor="#03b2ff"
              highlightX={-0.5}
              highlightY={-0.9}
              highlightZ={-0.1}
              size={0.8}
              softness={1}
            />
          </WaveDistortion>
        </WaveDistortion>
        <Kaleidoscope center={{ x: 0.5, y: 1 }} segments={17} />
        <FilmGrain strength={0.4} />
      </Shader>
    </div>
  );
}
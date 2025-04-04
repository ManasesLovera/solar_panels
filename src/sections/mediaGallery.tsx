"use client"

import { useRef } from "react"
import type { MediaItemProps } from "../types"

export default function MediaGallery() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const mediaItems: MediaItemProps[] = [
    {
      src: "./tesla2.jpg",
      alt: "Solar panel installation",
      type: "image",
      width: 600,
      height: 200,
    },
    {
      src: "./tesla3.jpg",
      alt: "Residential solar setup",
      type: "image",
      width: 600,
      height: 200,
    },
    {
      src: "./tesla4.jpg",
      alt: "Commercial solar project",
      type: "image",
      width: 600,
      height: 200,
    },
    {
      src: "./tesla5.jpg",
      alt: "Tesla Powerwall installation",
      type: "image",
      width: 600,
      height: 200,
    },
    {
      src: "./tesla6.jpg",
      alt: "Solar roof tiles",
      type: "image",
      width: 600,
      height: 200,
    },
    {
      src: "./tesla7.jpg",
      alt: "Energy monitoring system",
      type: "image",
      width: 600,
      height: 200,
    },
  ]

  return (
    <section id="media" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Projects Gallery</h2>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">See Our Work in Action</h3>
          <div className="max-w-md mx-auto">
            <video
              ref={videoRef}
              className="w-full rounded-lg shadow-lg"
              controls
            >
              <source src="./video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


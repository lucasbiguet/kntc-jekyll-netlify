---
layout: page
title: KNTC - Hunting Hunters Hunting Preys NEW SINGLE OUT NOW
permalink: /hunting
links:
  spotify: https://open.spotify.com/album/0703IvskmkWSHdYHPq7KgO
  youtube: https://youtu.be/Cq-KCNCyRR8
  apple: https://itunes.apple.com/album/id/1663961534
  deezer: https://www.deezer.com/fr/album/395032447
  bandcamp: https://kntcband.bandcamp.com/track/hunting-hunters-hunting-preys
  soundcloud: https://on.soundcloud.com/ziXym
---

<div class="flex flex-col md:flex-row md:mb-12 md:shadow-xl anim--cascad" data-animate="">
  <div class="relative h-app-height bg-cover bg-bottom flex-auto flex flex-col justify-center mb-12 md:mb-0" style="background-image: url(assets/images/hunting/bg.jpg)">
    <div class="h-64 md:w-2/3 md:mx-auto bg-cover bg-center" style="background-image: url(assets/images/hunting/thumbnail.jpg)">
      <iframe class="w-full h-full" src="https://www.youtube.com/embed/Cq-KCNCyRR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="absolute text-white mx-auto pb-5 w-full flex justify-center bottom-0 z-20 anim-fade-up md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>

  <div class="mb-12 md:mb-0 px-5 sm:px-24 md:px-10 text-left flex flex-col justify-center">
    <div>
      <h1 class="text-black font-extrabold z-10 tracking-widest table-caption mb-0">Hunting Hunters Hunting Preys</h1>
      <h2 class="uppercase text-gray-400 text-lg mb-12">New single out now</h2>
      {% for link in page.links%}
        {% if link[1] %}
          <div class="flex mb-5">
            <div class="flex-auto flex items-center">
              <img src="assets/images/streaming/{{ link[0] }}.png" class="h-8">
            </div>
            <a href="{{ link[1] }}" target="_blank" rel="noopener nofollow" class="h-10 ml-2 inline-flex items-center px-10 text-lg font-bold uppercase rounded-sm shadow-sm text-white bg-red transition-colors duration-500 ease-smooth hover:bg-red-light hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
              Play
            </a>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>
<div class="mb-5 px-5 sm:px-24 md:px-0 md:max-w-sm md:mx-auto text-left">
  <p class="text-justify mb-2">
    Like what you hear ? Subscribe to our monthly newsletter ! (In French for now)
  </p>

  {% include newsletter-form.html %}
</div>

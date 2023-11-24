'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'

type MediumArticleData = {
  title: string
  thumbnail: string
  link: string
  pubDate: string
}

const MediumCarousel = () => {
  const [articles, setArticles] = useState<MediumArticleData[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      const rssUrl =
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@adamrichardturner'
      const response = await fetch(rssUrl)
      const data = await response.json()
      setArticles(data.items)
    }

    fetchArticles()
  }, [])

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      spaceBetween={22}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 2
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3
        }
      }}
      className="h-full gap-2"
    >
      {articles.map((article, idx) => (
        <SwiperSlide key={idx} className="flex-shrink-0">
          <Link legacyBehavior href={article.link} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="rounded-t-lg object-cover object-center"
                />
              </div>

              <div className="p-4">
                <h2 className="text-md font-bold leading-none">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {new Date(article.pubDate).toLocaleDateString()}
                </p>
              </div>
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MediumCarousel

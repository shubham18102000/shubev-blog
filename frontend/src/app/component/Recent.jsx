import Image from "next/image"
import bmw from "../../../public/assets/bmw.jpg"
import volks from "../../../public/assets/volks.jpg"
import kia from "../../../public/assets/kia.jpg"

const articles = [
  {
    id: 1,
    category: "BLOG",
    image: bmw, // Replace with actual image path
    title: "2023 BMW 540i M Sport Review: Light on Sport, Heavy on Tech",
    author: "shubham chamoli",
    comments: 12,
    date: "April 25, 2023",
  },
  {
    id: 2,
    category: "SUV",
    image: volks,
    title: "2022 Volkswagen Taos First Drive: Exactly as Good as It Needs to Be",
    author: "shubham chamoli",
    comments: 12,
    date: "April 25, 2023",
  },
  {
    id: 3,
    category: "2023",
    image: kia,
    title: "2023 Kia Sorento Hybrid Review: Big Vehicle With Small-Vehicle Fuel Economy",
    author: "shubham chamoli",
    comments: 12,
    date: "April 25, 2023",
  },
]

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          width={500}
          height={300}
          className="w-full h-44 sm:h-48 md:h-52 lg:h-56 xl:h-60 object-cover"
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-semibold rounded-full">
          {article.category}
        </span>
      </div>
      <div className="p-3 sm:p-4 md:p-5">
        <div className="text-gray-600 text-xs sm:text-sm flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3">
          <span className="flex items-center whitespace-nowrap">👤 {article.author}</span>
          <span className="flex items-center whitespace-nowrap">💬 {article.comments} Comments</span>
          <span className="flex items-center whitespace-nowrap">📅 {article.date}</span>
        </div>
        <h3 className="mt-1.5 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-900 line-clamp-2">
          {article.title}
        </h3>
        {/* <button className="mt-2 sm:mt-3 text-blue-600 text-sm sm:text-base font-semibold flex items-center gap-1">
          Read More ➕
        </button> */}
      </div>
    </div>
  )
}

export default function RecentArticles() {
  return (
    <section className="py-7 sm:py-9 lg:py-10">
      <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-2">Recent Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}




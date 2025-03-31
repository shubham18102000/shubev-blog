// export default function About() {
//     return (
//       <div className="p-8">
//         <h1 className="text-4xl font-bold mb-4">About Us</h1>
//         <p className="text-lg">
//           Learn more about Shub EV and our journey in the world of electric vehicles.
//         </p>
//       </div>
//     );
//   }
import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import founder from "../../../public/assets/founder.jpeg";
import aboutimage from "../../../public/assets/1.jpg";
import Footer from "../component/Footer";

export default function About() {
  return (
    <>
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About ShubEV</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Pioneering the future of electric mobility through insightful content, analysis, and community engagement.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Our Journey</h2>
          <p className="text-base md:text-lg">
  ShubEV was founded with a simple mission: to accelerate the world&apos;s transition to sustainable
  transportation. Since our inception, we&apos;ve been at the forefront of covering electric vehicle innovations,
  market trends, and the evolving landscape of clean energy mobility.
</p>
          <p className="text-base md:text-lg">
            Our team of experts and enthusiasts brings you the latest news, in-depth reviews, and analysis of everything
            from consumer EVs to commercial electric fleets and the infrastructure that powers them.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden h-[300px] md:h-[400px] relative">
          <Image src={aboutimage} alt="Electric vehicles" fill className="object-cover" />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p>We believe in a future where transportation no longer contributes to climate change.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p>We celebrate technological breakthroughs that drive the electric revolution forward.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p>We foster a community of EV enthusiasts, owners, and industry professionals.</p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-muted p-8 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Meet Our Founder</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
            <Image src= {founder} alt="Founder" fill className="object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold">Shubham Chamoli</h3>
              <Link
                href="https://www.linkedin.com/in/shubham-chamoli/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn Profile</span>
              </Link>
            </div>
            <p className="text-base md:text-lg mb-4">
              With over a decade of experience in the automotive industry and a passion for sustainable technology,
              Shubham founded ShubEV to bridge the information gap in the electric vehicle ecosystem.
            </p>
            <p className="text-base md:text-lg">
              His vision has shaped ShubEV into a trusted resource for consumers, professionals, and policymakers
              navigating the electric revolution.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}


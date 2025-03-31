export default function ElectricBlogVideo() {
    return (
      <div className="video-section">
        <h1 className="title">The Future of Electricity: Innovations & Trends</h1>
        <p className="description">
          Explore the latest advancements in electric vehicles, renewable energy, and smart grids.
        </p>
        <div className="video-container">
          <video width="100%" controls poster="/assets/video-preview.jpg">
            <source src="/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }
  
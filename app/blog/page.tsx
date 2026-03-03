import Link from "next/link";

const POSTS = [
  {
    slug: "launching-our-new-site",
    title: "Launching Our New Site",
    excerpt: "We are excited to announce the launch of the revamped EdBridge Global website..."
  },
  {
    slug: "tips-for-international-students",
    title: "Top Tips for International Students",
    excerpt: "Preparing for study abroad? Here are some key pointers to help you succeed..."
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-soft-grey">
      <section className="bg-primary py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="section-label">Insights</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">Latest Articles</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Stay informed with our latest thoughts and tips on global education.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          {POSTS.map(post => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="block bg-white rounded-2xl shadow-md border border-border p-6 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="font-heading font-bold text-primary text-xl mb-2">{post.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

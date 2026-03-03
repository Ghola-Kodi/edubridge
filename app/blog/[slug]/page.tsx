import { notFound } from "next/navigation";

const POSTS = [
  {
    slug: "launching-our-new-site",
    title: "Launching Our New Site",
    content: `We are thrilled to unveil the brand new EdBridge Global platform. This site features updated resources, easier navigation, and a fresh look that reflects our commitment to excellence in education consultancy. Stay tuned for more content!`
  },
  {
    slug: "tips-for-international-students",
    title: "Top Tips for International Students",
    content: `Preparing to study abroad can be daunting. In this article we walk through essential tips such as planning your finances, understanding visa requirements, and choosing the right university to match your goals.`
  }
];

interface Props {
  params: { slug: string };
}

export default function PostPage({ params }: Props) {
  const post = POSTS.find(p => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-soft-grey">
      <section className="bg-primary py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-6">{post?.title}</h1>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-10 border border-border">
          <p className="text-charcoal/80 leading-relaxed text-lg whitespace-pre-line">{post?.content}</p>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  imageAlt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: 'Aug 25, 2023',
    title: 'Smile Bright: Dental Care Tips and Insights',
    imageAlt: 'Dental care article'
  },
  {
    id: 2,
    date: 'Aug 28, 2023',
    title: 'Dazzling Smiles: Your Guide to Dental Wellness',
    imageAlt: 'Dental wellness article'
  },
  {
    id: 3,
    date: 'Aug 28, 2023',
    title: 'Healthy Grins: Dental Insights for Bright Smiles',
    imageAlt: 'Healthy dental article'
  }
];

const BlogSection = () => {
  return (
    <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-teal-600 font-bold text-xs uppercase tracking-widest bg-white/50 px-4 py-2 rounded-full mb-4">
            OUR BLOGS
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight">
            Browse our latest articles on healthcare & wellness
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group"
            >
              {/* Blog Image Placeholder */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                  Blog Image
                </div>
                {/* Uncomment when you add images */}
                {/* <img 
                  src={blogImage}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover"
                /> */}
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-3">
                  {post.date}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h3>
                <button className="flex items-center gap-2 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors group-hover:gap-3">
                  Read More
                  <ArrowRight size={16} className="transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
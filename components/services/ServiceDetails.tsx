
import Image from "next/image";

interface ServiceDetailsProps {
  title: string;
  subtitle?: string;
  description: string;
  bullets: { title: string; text: string }[];
  image: string;
  alt: string;
  reverse?: boolean;
  faq?: { question: string; answer: string }[];
}

export default function ServiceDetailsSection({
  title,
  subtitle,
  description,
  bullets,
  image,
  alt,
  reverse = false,
  faq,
}: ServiceDetailsProps) {
  return (
    <section
      className="w-full bg-white py-20 md:py-28 border-t border-gray-100"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div
        className={`max-w-6xl mx-auto px-6 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-10`}
      >
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src={image}
            alt={alt}
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          {subtitle && (
            <h3 className="text-blue-600 uppercase tracking-wide font-semibold text-sm mb-2">
              {subtitle}
            </h3>
          )}
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            itemProp="name"
          >
            {title}
          </h2>
          <p
            className="text-gray-700 mb-6 leading-relaxed"
            itemProp="description"
          >
            {description}
          </p>

          <ul className="space-y-4 mb-8">
            {bullets.map((b, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                <div>
                  <h4 className="text-gray-900 font-semibold">{b.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {b.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Optional FAQ Section */}
          {faq && faq.length > 0 && (
            <div className="mt-10 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Frequently Asked Questions
              </h3>
              {faq.map((f, i) => (
                <details
                  key={i}
                  className="group border border-gray-200 rounded-xl p-4 bg-gray-50"
                >
                  <summary className="flex justify-between items-center cursor-pointer font-medium text-gray-900 list-none">
                    {f.question}
                    <svg
                      className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="text-gray-700 mt-3">{f.answer}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

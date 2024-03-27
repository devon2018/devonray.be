import Image from "next/image";
import React from "react";

interface TestimonialsProps {
  sectionId?: string;
  title?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  sectionId = "reviews",
  title = "Client Reviews",
}) => {
  return (
    <section id={sectionId} className="px-5 bg-primary text-white py-20">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-2xl font-semibold mb-10">{title}</h4>
        <div className="md:grid grid-cols-3 gap-6 space-y-6 md:space-y-0">
          <ClientReviewBlock
            name="Oliver Baker"
            title="CEO"
            company="Intelivita"
            message="Devon has always been a reliable and trustworthy extension to the development team here at Intelivita. Whether we task Devon with clients that are startups, SME's or multi-nationals, he has always provided engaging and outstanding work ethic to ensure our Customers are extremely satisfied."
            date="Oct 2023"
          />
          <ClientReviewBlock
            name="Graham Wilsdon"
            title="CTO"
            company="Overwatch Research"
            message="Devon contracted for Overwatch at a critical period as we were hiring a backend developer. Going beyond working as a bridge of support in this time, Devon worked diligently to help push our Roadmap forward at a stellar pace. His problem solving ability, work ethic and technical competency make Devon an impactful contractor that I would recommend to any fledgling start up."
            date="Sep 2022"
          />
          <ClientReviewBlock
            name="Dana Taylor"
            title="Digital and Customer Lead"
            company="ZoomEV"
            message="Devon is a great developer. He has good knowledge and always provides good suggestions for technical solutions. He’s creative and puts forwards good ideas to help us improve our digital experience. Importantly, he is very easy to work with and is a nice guy; he works well with our other freelancers and I personally enjoy working with him."
            date="Aug 2022"
          />

          <ClientReviewBlock
            name="Animesh Chowdhury"
            title="CTO"
            company="Goodtill by SumUp"
            message="Devon was absolutely fantastic to help us out on a complex app implementation and roll out the product to a wider merchant base. I found him to be an extremely professional, diligent and solution oriented individual."
            date="Aug 2022"
          />

          <ClientReviewBlock
            name="Tanzila Mohammad"
            title="Lead Engineer"
            company="Nortaq"
            message="In 2020, Devon worked on a project to develop the front-end of our app, using Flutter. Based on our requirements and designs, he met our expectations and successfully completed the project. During development and testing, he proved very collaborative in trying to resolve issues be it technical or design related and offered practical compromises. We were happy with the final delivery and used him once again to add a feature to the app in early 2021. Outside of the project, Devon has been amenable to offering support, which has been greatly appreciated."
            date="Aug 2022"
          />
        </div>
      </div>
    </section>
  );
};

const ClientReviewBlock = ({
  name,
  title,
  company,
  message,
  date,
}: {
  name: string;
  title: string;
  company: string;
  message: string;
  date: string;
}) => {
  return (
    <div>
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-gray-400">
        <div className="flex items-center justify-start">
          <div className="">
            <h5 className="font-bold mb-0 text-sm">{name}</h5>
            <p className="text-xs text-gray-400">
              {title} @ {company}
            </p>
          </div>
        </div>
        <p className="my-4">{message}</p>
        <p className="font-bold text-xs">{date}</p>
      </div>
    </div>
  );
};

export default Testimonials;

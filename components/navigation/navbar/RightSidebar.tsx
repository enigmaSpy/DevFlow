import TagCard from "@/components/cards/TagCard";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const hotQuestions = [
  { _id: "1", tittle: "How to create a custom hook in React?" },
  {
    _id: "2",
    tittle: "What is the difference between useEffect and useLayoutEffect?",
  },
  { _id: "3", tittle: "How to optimize React app performance?" },
  { _id: "4", tittle: "How to manage global state in React?" },
  { _id: "6", tittle: "How to handle forms in React with TypeScript?" },
];
const popularTags = [
  { _id: "1", name: "react", questions: 100 },
  { _id: "2", name: "python", questions: 85 },
  { _id: "3", name: "nextjs", questions: 70 },
  { _id: "4", name: "javascript", questions: 120 },
  { _id: "5", name: "rust", questions: 60 },
  { _id: "6", name: "nodejs", questions: 90 },
];
const RightSidebar = () => {
  return (
    <section
      className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky 
    right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 
    dark:shadow-none max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
      </div>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {hotQuestions.map(({ _id, tittle }) => (
          <Link
            key={_id}
            href={ROUTES.PROFILE(_id)}
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">{tittle}</p>
            <Image
              src="/icons/chevron-right.svg"
              alt="Chevron"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        ))}
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard key={_id} _id={_id} name={name} questions={questions} showCount compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const Home = async() => {  
  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All questions</h1>
        <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900" asChild>
          <Link href={ROUTES.ASK_QUESTIONS}>
            Ask a question 
          </Link>
        </Button>
      </section>
      <section className="mt-11">
        LocalSearch
        HomeFilters
        <div className="mt-10 flex w-full flex-col gap-6">
          <p>Question card 1</p>
          <p>Question card 1</p>
          <p>Question card 1</p>
          <p>Question card 1</p>
          <p>Question card 1</p>
          <p>Question card 1</p>
        </div>
      </section>
    </>
  );
};
export default Home;

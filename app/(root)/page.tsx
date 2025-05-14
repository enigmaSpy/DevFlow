import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/auth";
import ROUTES from "@/constants/routes";
const Home = async() => {
  const session = await auth();
  console.log(session);
  
  return (
    <>
      <h1 className="h1-bold">Welcome to the world of Next.js</h1>
    </>
  );
};
export default Home;

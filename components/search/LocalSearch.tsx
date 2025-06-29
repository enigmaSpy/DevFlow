"use client";
import React, { useEffect, useState } from "react";

import { Input } from "../ui/input";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { formURLQuery, removeKeysFromQuery } from "@/lib/url";
interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const debounceDelayFn = setTimeout(() => {
      if (pathname !== route) return;

      if (searchQuery) {
        const newURL = formURLQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newURL, { scroll: false });
      } else {
        const newURL = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
        router.push(newURL, { scroll: false });
      }
    }, 400);
    return () => clearInterval(debounceDelayFn);
  }, [searchQuery, router, route, searchParams, pathname]);

  return (
    <div
      className={`flex min-h-[56px] grow items-center p-3 gap-4 rounded-[10px] background-light800_darkgradient my-4 ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        alt="Search Image"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;

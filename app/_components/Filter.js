"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="p-[0.15rem] border border-primary-800 lg:flex m-[2.5rem] xs:m-auto rounded-md lg:text-xl xs:text-xs">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All Cars
      </Button>
      <Button
        filter="sedan"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        sedan
      </Button>
      <Button
        filter="6 seater"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        6 seater
      </Button>
      <Button
        filter="motorhome"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        motorhome
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, children, activeFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 rounded-md ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Filter;

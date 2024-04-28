"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DollarSign, FileText, Icon, Layout, TrendingUp } from "react-feather";

interface MenuItemProps {
  title: string;
  url: string;
  name: string;
}

const iconMap: Record<string, Icon> = {
  dashboard: Layout,
  earning: DollarSign,
  expense: TrendingUp,
  transaction: FileText,
};

export function MenuItem({ title, url, name }: Readonly<MenuItemProps>) {
  const pathname = usePathname();
  const isActive = pathname === url;

  const Icon = iconMap[name] ?? (() => null);

  return (
    <Link
      href={url}
      className={`flex cursor-pointer text-lg align-middle py-2 px-4 rounded-full ${
        isActive ? "bg-primary-surface" : ""
      } lg:mb-4 lg:hover:bg-primary-surface lg:transition-all lg:duration-200`}
    >
      <Icon />
      <p
        className={`ml-1 leading-6 ${
          isActive ? "" : "hidden"
        } lg:block lg:ml-4`}
      >
        {title}
      </p>
    </Link>
  );
}

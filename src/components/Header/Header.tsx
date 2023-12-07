import React from "react";
import { Menu, Moon, ShoppingCart, Sun } from "lucide-react";

import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "../ui/button";
import ProfileButton from "../ProfileButton/ProfileButton";
import { NavigationBarMenu } from "./Navbar";
import { Separator } from "../ui/separator";
import Cart from "../Cart";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const routes = [
    {
      href: "/",
      label: "Products",
    },
    {
      href: "/",
      label: "Categories",
    },
    {
      href: "/",
      label: "On Sale",
    },
  ];

  return (
    <>
      <MaxWidthWrapper>
        <div className="relative  flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">SG Shop</h1>
            </Link>
          </div>

          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <Cart />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <ProfileButton />
          </div>
        </div>
      </MaxWidthWrapper>
      <Separator />

      <MaxWidthWrapper>
        <NavigationBarMenu />
      </MaxWidthWrapper>
      <Separator />
    </>
  );
};

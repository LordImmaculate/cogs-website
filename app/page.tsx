"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>A Minecraft sever you will actually&nbsp;</span>
        <span className={title({ color: "violet" })}>enjoy&nbsp;</span>
        <br />
        <span className={title()}>
          playing on.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <br />
        <div className="flex justify-center gap-4">
          <Button color="primary" onPress={() => window.open("start", "_self")}>Start Playing</Button>
          <Button color="primary" variant="bordered">More Information</Button>
        </div>
      </div>
    </section>
  );
}
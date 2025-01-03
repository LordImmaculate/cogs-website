"use client";

import React from "react";
import { Pagination, PaginationItem, PaginationCursor } from "@nextui-org/pagination";
import { Button } from "@nextui-org/button";
import { title, subtitle } from "@/components/primitives";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Code } from "@nextui-org/code";
import { ClipboardIcon } from "@/components/icons";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pagesContent = [
    // Step 1: Join the Discord server
    <div className="flex flex-col items-center gap-2 mt-2">
      <div className={subtitle({ class: "mt-4" })}>
        <b>Step 1: </b>Join the Discord server
      </div>
      <p>To join the Discord server, press the button below.</p>
      <Button onPress={() => window.open("https://discord.com")}>Join Discord</Button>
      <p>If you joined the server, continue to the next step.</p>
      <Button
        color="primary"
        onPress={() => setCurrentPage((prev) => (prev < 5 ? prev + 1 : prev))}
      >
        Next
      </Button>
    </div>,
    // Step 2: Install modpack
    <div className="flex flex-col items-center gap-2 mt-2">
      <div className={subtitle({ class: "mt-4" })}>
        <b>Step 2: </b>Install the modpack
      </div>
      <p>We recommend the CurseForge App and Prism Launcher</p>
      <p>If you are less experienced with Minecraft, choose CurseForge. If not, choose Prism Launcher</p>
      <Tabs aria-label="Options">
        <Tab key="curseforge" title="CurseForge App">
          <Card>
            <CardBody>
              <div>
                <p>Download the CurseForge App using the button below.</p>
                <Button onPress={() => window.open("https://download.overwolf.com/install/Download?ExtensionId=cfiahnpaolfnlgaihhmobmnjdafknjnjdpdabpcm")} className="my-2">Download CurseForge</Button>
                <p>After that, run the installer and wait until it finishes.</p>
                <p>Open CurseForge, and select "Continue as Guest".</p>
                <p>After that, download the modpack using the button below.</p>
                <Button onPress={() => window.open("https://cdn.discordapp.com/attachments/1317681179457228800/1324190865668833353/Cogs_and_Covenants-v1.zip?ex=6777e918&is=67769798&hm=ca23faa899188bfedfadbdf15afde4136b5a0eb3e1ffd2110075120c77af388a&")} className="my-2">Download modpack</Button>
                <p>Click on the Minecraft icon, and select "Import".</p>
                <p>After that, select the downloaded modpack and click "Play".</p>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="prism" title="Prism Launcher">
          <Card>
            <CardBody>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
      <Button
        color="primary"
        onPress={() => setCurrentPage((prev) => (prev < 5 ? prev + 1 : prev))}
      >
        Next
      </Button>
    </div>,
    // Step 3: Join the server
    <div className="flex flex-col items-center gap-2 mt-2">
      <div className={subtitle({ class: "mt-4" })}>
        <b>Step 3: </b>Join the Minecraft server
      </div>
      <p>When Minecraft starts, click on the "Multiplayer" button.</p>
      <p>After that, click on "Add Server" and fill in these details:</p>
      <div className="flex flex-col content-center gap-2">
      <Code className=" font-mono flex flex-row"> <p>Server Name: Cogs and Covenants</p> <Button className="h-fit ml-auto" isIconOnly aria-label="Like" color="default" variant="light" onClick={() => navigator.clipboard.writeText("Cogs and Covenants")}><ClipboardIcon /></Button> </Code>
      <Code className=" font-mono flex flex-row"> <p>Server IP: play.cogscsmp.com</p> <Button className="h-fit ml-auto" isIconOnly aria-label="Like" color="default" variant="light" onClick={() => navigator.clipboard.writeText("play.cogscsmp.com")}><ClipboardIcon /></Button> </Code>
      </div>
      <Button
        color="primary"
        onPress={() => setCurrentPage((prev) => (prev < 5 ? prev + 1 : prev))}
      >
        Next
      </Button>
    </div>,
    "Welcome to page 4",
    "Welcome to page 5"
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Get </span>
        <span className={title({ color: "violet" })}>Started</span>
        <br />
        {pagesContent[currentPage - 1]}
      </div>

      <div className="fixed bottom-5">
        <Pagination color="primary" page={currentPage} total={5} onChange={setCurrentPage} />
      </div>
    </section>
  );
}


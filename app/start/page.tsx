"use client";

import React from "react";
import {
  Pagination,
  PaginationItem,
  PaginationCursor
} from "@nextui-org/pagination";
import { Button } from "@nextui-org/button";
import { title, subtitle } from "@/components/primitives";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Code } from "@nextui-org/code";
import { ClipboardIcon } from "@/components/icons";
import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Snippet,
  useDisclosure
} from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentPage, setCurrentPage] = React.useState(1);
  const pagesContent = [
    // Step 1: Join the Discord server
    <div key="step1" className="flex flex-col items-center gap-2 mt-2">
      <div className={subtitle({ class: "mt-4" })}>
        <b>Step 1: </b>Join the Discord server
      </div>
      <p>To join the Discord server, press the button below.</p>
      <Button onPress={() => window.open("https://discord.com")}>
        Join Discord
      </Button>
      <p>If you joined the server, continue to the next step.</p>
      <Button
        color="primary"
        onPress={() => setCurrentPage((prev) => (prev < 5 ? prev + 1 : prev))}
      >
        Next
      </Button>
    </div>,

    // Step 2: Install modpack
    <div key="step2" className="flex flex-col items-center gap-2 mt-2">
      <div className={subtitle({ class: "mt-4" })}>
        <b>Step 2: </b>Install the modpack
      </div>
      <p>We recommend the CurseForge App and Prism Launcher</p>
      <p>
        If you are less experienced with Minecraft, choose CurseForge. If not,
        choose Prism Launcher
      </p>
      <Tabs aria-label="Options">
        <Tab key="curseforge" title="CurseForge App">
          <Card>
            <CardBody>
              <div>
                <p>Download the CurseForge App using the button below.</p>
                <Button
                  onPress={() =>
                    window.open(
                      "https://download.overwolf.com/install/Download?ExtensionId=cfiahnpaolfnlgaihhmobmnjdafknjnjdpdabpcm"
                    )
                  }
                  className="my-2"
                >
                  Download CurseForge
                </Button>
                <p>After that, run the installer and wait until it finishes.</p>
                <p>
                  Open CurseForge, and select &quot;Continue as Guest&quot;.
                </p>
                <p>After that, download the modpack using the button below.</p>
                <Button
                  onPress={() =>
                    window.open(
                      "https://cdn.discordapp.com/attachments/1317681179457228800/1324190865668833353/Cogs_and_Covenants-v1.zip?ex=6777e918&is=67769798&hm=ca23faa899188bfedfadbdf15afde4136b5a0eb3e1ffd2110075120c77af388a&"
                    )
                  }
                  className="my-2"
                >
                  Download modpack
                </Button>
                <p>
                  Click on the Minecraft icon, and select &quot;Import&quot;.
                </p>
                <p>
                  After that, select the downloaded modpack and click
                  &quot;Play&quot;.
                </p>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="prism" title="Prism Launcher">
          <Card>
            <CardBody>to be done</CardBody>
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
    <div key="step3" className="flex flex-col items-center gap-2 mt-2">
      <div className={subtitle({ class: "mt-4" })}>
        <b>Step 3: </b>Join the Minecraft server
      </div>
      <p>When Minecraft starts, click on the &quot;Multiplayer&quot; button.</p>
      <p>
        After that, click on &quot;Add Server&quot; and fill in these details:
      </p>
      <div className="flex flex-col content-center gap-2">
        <p className="font-extrabold">Server Name</p>
        <Snippet symbol="">Cogs and Covenants</Snippet>
        <p className="font-extrabold">Server IP</p>
        <Snippet symbol="">play.cogscsmp.com</Snippet>
      </div>
      <Button
        color="primary"
        onPress={() => setCurrentPage((prev) => (prev < 5 ? prev + 1 : prev))}
      >
        Next
      </Button>
    </div>,

    // Step 4: Get whitelisted/veriefied
    <div key="step4" className="flex flex-col items-center gap-2 mt-2">
      <div className={subtitle({ class: "mt-4" })}>
        <b>Step 4: </b>Get verified
      </div>
      <p>
        We want to make sure everyone is in the Discord, so we have to link
        Minecraft to Discord accounts.
      </p>
      <p>
        If you join the server for the first time, it will give this message:
      </p>
      <Button isIconOnly onPress={onOpen} className="w-[600px] h-auto">
        <Image isZoomed src="/images/verify.png" alt="Verify message" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Verify Image
              </ModalHeader>
              <ModalBody>
                <Image src="/images/verify.png" alt="Verify message" />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <p>
        DM <Code>Cogs and Covenants SMP#2075</Code> in the server with{" "}
        <Code>!code CODE</Code>, replacing <Code className="mt-1">CODE</Code>{" "}
        with the code you got.
      </p>
      <p>
        If you did this, and you still can&apos;t join, dm{" "}
        <Code>@LordImmaculate</Code> or <Code>@Q2OD</Code> on Discord.
      </p>
      <Button
        color="primary"
        onPress={() => setCurrentPage((prev) => (prev < 5 ? prev + 1 : prev))}
      >
        Next
      </Button>
    </div>,

    <div key="step5">
      <div className={subtitle({ class: "mt-4" })}>
        <b>Step 5: </b>Have fun!
      </div>
      <p>
        You are now ready to play on the server! If you have any questions, feel
        free to ask in the Discord server.
      </p>
      <Image
        className="my-2"
        src="/images/background.webp"
        alt="Ready to play"
      />
      <Button color="primary" onPress={() => window.open("/", "_self")}>
        Home
      </Button>
    </div>
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
        <Pagination
          color="primary"
          page={currentPage}
          total={5}
          onChange={setCurrentPage}
        />
      </div>
    </section>
  );
}

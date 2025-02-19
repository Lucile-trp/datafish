"use client";
import { ArrowUpIcon, ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export const Footer: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  if (!open) {
    return (
      <div
        className="fixed bottom-6 flex justify-center w-full "
        onClick={() => setOpen(!open)}
      >
        <div className="h-10 w-10 rounded-full flex justify-center items-center p-2 transition duration-300 ease-in-out hover:bg-white/30 border border-white hover:border-white/30">
          <ArrowUpIcon />
        </div>
      </div>
    );
  } else {
    return (
      <footer className="fixed justify-center align-center w-full bottom-0 bg-black/50">
        <div
          className="border-b border-white/20 w-full h-full flex justify-end items-center"
          onClick={() => setOpen(!open)}
        >
          <p>Fermer</p>
          <ChevronDoubleDownIcon className="h-6 w-6"></ChevronDoubleDownIcon>
        </div>
        <div className="grid grid-cols-3 justify-between w-full p-8">
          <div>
            <h1>Section 1</h1>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>

          <div>
            <h1>Section 2</h1>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div>
            <h1>Section 3</h1>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
};

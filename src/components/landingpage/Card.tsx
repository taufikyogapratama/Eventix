import { ArrowRight, Copy, Plus, ScanQrCode, Search } from "lucide-react";
import Link from "next/link";

type props = {
  classname?: string;
  icon: string;
  title: string;
  description: string;
  cta?: string;
  href?: string | "";
  variant: "round" | "box";
};

const Ikon = (icon: string) => {
  if (icon === "plus") {
    return <Plus />;
  } else if (icon === "copy") {
    return <Copy />;
  } else if (icon === "search") {
    return <Search />;
  } else if (icon === "scan-qr-code") {
    return <ScanQrCode />;
  } else if (icon === "satu") {
    return <p className="inline">01</p>;
  } else if (icon === "dua") {
    return <p className="inline">02</p>;
  } else if (icon === "tiga") {
    return <p className="inline">03</p>;
  }
};

const Card = (props: props) => {
  return (
    <div
      className={` bg-surface p-7 rounded-xl border  ${props.classname} ${props.variant === "round" ? " " : "hover:border-mutedCS h-[283.6px] md:h-[262.2px]"}`}
    >
      <div
        className={`${props.variant === "round" ? "rounded-full text-accentCS bg-accentCS/50" : "rounded-lg"} w-11 h-11 bg-border flex justify-center items-center`}
      >
        {Ikon(props.icon)}
      </div>
      <p className="text-foreground text-xl font-semibold mt-3.5">
        {props.title}
      </p>
      <p className="text-mutedCS text-sm font-normal mt-3 mb-3.5">
        {props.description}
      </p>
      {props.cta ? (
        <Link
          href={`${props.href}`}
          className="text-accentCS text-sm font-semibold"
        >
          <p className="flex items-center gap-2">
            {props.cta} <ArrowRight className="text-accentCS" size={18} />
          </p>
        </Link>
      ) : (
        false
      )}
    </div>
  );
};

export default Card;

import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi2";

const contacts = [
  {
    label: "WhatsApp",
    value: "+971 554753102",
    href: "https://wa.me/971554753102",
    icon: FaWhatsapp,
    className: "bg-[#25D366] text-white hover:bg-[#1EAE55]",
    external: true,
  },
  {
    label: "Call Landline",
    value: "+971 554753102",
    href: "tel:+971554753102",
    icon: HiOutlinePhone,
    className: "bg-[#2C3E6B] text-white hover:bg-[#3BBFBF]",
  },
];

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {contacts.map((contact) => {
        const Icon = contact.icon;

        return (
          <a
            key={contact.href}
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noopener noreferrer" : undefined}
            aria-label={`${contact.label}: ${contact.value}`}
            className={`group flex h-14 w-14 items-center justify-center rounded-full shadow-2xl shadow-black/20 transition-all duration-300 hover:w-52 hover:justify-start hover:px-5 active:scale-95 ${contact.className}`}
          >
            <Icon className="h-6 w-6 shrink-0" />
            <span className="ml-3 hidden whitespace-nowrap text-sm font-extrabold tracking-wide group-hover:inline">
              {contact.value}
            </span>
          </a>
        );
      })}
    </div>
  );
}

import Icon from "@/components/Icon";
import { company, whatsappLink } from "@/lib/site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-green text-white shadow-lift transition-transform hover:scale-105"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
      <a
        href={`tel:${company.phoneHref}`}
        aria-label="Call us"
        className="grid h-14 w-14 place-items-center rounded-full bg-navy text-white shadow-lift transition-transform hover:scale-105"
      >
        <Icon name="phone" className="h-6 w-6" />
      </a>
    </div>
  );
}

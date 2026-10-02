import { Instagram, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gold-soft px-6 py-10 text-center text-sm text-gray-text">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/soyhernanrivera/"
            className="text-gold hover:text-gold/80"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.tiktok.com/@soyhernanrivera"
            className="text-gold hover:text-gold/80"
            aria-label="TikTok"
            target="_blank"
            rel="noreferrer"
          >
            <Music2 className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </div>
        <div className="flex gap-4">
          <a href="[TERMINOS_URL]" className="hover:text-ivory">
            Términos y condiciones
          </a>
          <a href="[PRIVACIDAD_URL]" className="hover:text-ivory">
            Aviso de privacidad
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Experiencia Origen. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

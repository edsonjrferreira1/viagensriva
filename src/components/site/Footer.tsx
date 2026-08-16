import { Link } from "@tanstack/react-router";
import { agency, whatsappLink, defaultWhatsappMessage } from "@/config/site";
import logoAsset from "@/assets/logo-riva.png.asset.json";

export function Footer() {
  return (
    <footer className="surface-deep px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt={`Logo ${agency.name}`}
              width={512}
              height={512}
              loading="lazy"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <span className="font-display text-xl text-white">
              Viagens <span className="italic">Riva</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/70">{agency.legal}</p>
          <p className="mt-1 text-sm text-white/70">CNPJ: {agency.cnpj}</p>
          <p className="mt-1 text-sm text-white/70">Cadastur: {agency.cadastur}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contato
          </h3>
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block font-display text-2xl text-white hover:text-gold"
          >
            {agency.whatsappDisplay}
          </a>
          <p className="mt-2 text-sm text-white/70">
            Atendimento e cotações pelo WhatsApp.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Institucional
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link to="/privacidade" className="hover:text-white">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link to="/termos" className="hover:text-white">
                Termos de Uso
              </Link>
            </li>
            <li>
              <a href="#cotacao" className="hover:text-white">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6">
        <p className="text-xs leading-relaxed text-white/55">
          Esta página é administrada pela {agency.name}, agência de viagens
          independente (CNPJ {agency.cnpj}, {agency.cadastur}), para divulgação
          e comercialização de serviços turísticos. As informações, imagens e
          descrições são meramente ilustrativas e não vinculam nenhum estabelecimento
          específico. As cotações são personalizadas e sujeitas à disponibilidade.
        </p>
      </div>
    </footer>
  );
}

import logo from "../../assets/images/logo/logo-2audi.png";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        scroll-mt-24
        bg-slate-900
        py-14
        text-white
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-10
          px-6
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {/* Brand */}

        <div>
          <img
            src={logo}
            alt="2Audi Digital Printing"
            className="
              h-20
              w-auto
              object-contain
            "
          />

          <p
            className="
              mt-4
              leading-7
              text-slate-400
            "
          >
            Solusi digital printing terpercaya untuk kebutuhan bisnis, event,
            promosi, dan personal.
          </p>

          <a
            href="https://wa.me/6282241823895"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6
              inline-flex
              rounded-xl
              bg-blue-600
              px-5
              py-3
              font-semibold
              transition
              hover:bg-blue-700
            "
          >
            💬 Chat WhatsApp
          </a>
        </div>

        {/* Menu */}

        <div>
          <h4 className="text-lg font-semibold">Menu</h4>

          <ul
            className="
              mt-4
              space-y-3
              text-slate-400
            "
          >
            <li>
              <a href="#home" className="transition hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="transition hover:text-white">
                Produk
              </a>
            </li>

            <li>
              <a href="#advantages" className="transition hover:text-white">
                Keunggulan
              </a>
            </li>

            <li>
              <a href="#order" className="transition hover:text-white">
                Cara Order
              </a>
            </li>

            <li>
              <a href="#contact" className="transition hover:text-white">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Layanan */}

        <div>
          <h4 className="text-lg font-semibold">Layanan</h4>

          <ul
            className="
              mt-4
              space-y-3
              text-slate-400
            "
          >
            <li>Banner</li>
            <li>Spanduk</li>
            <li>X-Banner</li>
            <li>MMT</li>
            <li>Umbul-Umbul</li>
          </ul>
        </div>

        {/* Kontak */}

        <div>
          <h4 className="text-lg font-semibold">Hubungi Kami</h4>

          <div
            className="
              mt-4
              space-y-3
              text-slate-400
            "
          >
            <p>📱 0822-4182-3895</p>

            <p>
              📍 Jl. Mayang Kartasura, Trangsan, Kec. Gatak, Kabupaten
              Sukoharjo, Jawa Tengah, Indonesia
            </p>

            <p>
              ⏰ Senin - Sabtu
              <br />
              09.00 - 18.00 WIB
            </p>

            <a
              href="https://www.instagram.com/2audiprinting"
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                transition
                hover:text-white
              "
            >
              📸 Instagram : 2audiprinting
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div
        className="
          mx-auto
          mt-12
          max-w-7xl
          border-t
          border-slate-700
          px-6
          pt-6
          text-center
          text-sm
          text-slate-500
        "
      >
        © 2026 2Audi Digital Printing. All rights reserved.
      </div>
    </footer>
  );
}

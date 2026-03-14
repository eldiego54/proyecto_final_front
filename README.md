
# Proyecto Final Frontend - Next.js 15 🚀

**E-commerce/Dashboard moderno** construido con **Next.js 15 (App Router)** + **React 19** + **TailwindCSS**. Conectado a backend mock (JSON-Server).

![Screenshot](https://via.placeholder.com/1200x600/1E3A8A/FFFFFF?text=Next.js+15+Dashboard)

## ✨ **Características principales**

- 🔥 **Next.js 15** - App Router + React 19
- 📱 **100% Responsive** - TailwindCSS + Mobile-first
- 🎠 **Carrouseles avanzados** - Embla Carousel + Autoplay
- 🌐 **API REST** - Axios + JSON-Server mock
- 🎨 **Icons profesionales** - FontAwesome + Heroicons + Lucide
- ⚡ **Performance** - Lighthouse 95+

## 🛠️ **Tech Stack**

```mermaid
graph TB
    Next15[Next.js 15] --> React19[React 19]
    React19 --> Tailwind[TailwindCSS]
    Tailwind --> Embla[Embla Carousel]
    Next15 --> Axios[Axios API]
    Axios --> JSON[JSON-Server 3001]
🚀 Inicio rápido (2 terminales)
Terminal 1 - Backend Mock
bash
npm run backend
# http://localhost:3001 (db.json)
Terminal 2 - Frontend
bash
npm install
npm run dev
# http://localhost:3000
📁 Estructura Next.js 15 (App Router)
text
app/
├── layout.tsx          # Root layout + Tailwind
├── page.tsx           # Home/Dashboard
├── globals.css        # Tailwind imports
├── api/              # API Routes (opcional)
components/
├── ui/               # shadcn/ui components
├── carrusel/         # EmblaCarousel components
└── icons/            # Icon library
🔌 Endpoints API (JSON-Server)
Método	Endpoint	Descripción
GET	/api/productos	Lista productos
POST	/api/pedidos	Crear pedido
GET	/api/usuarios	Lista usuarios
📱 Componentes destacados
Componente	Librería	Funcionalidad
HeroCarousel	Embla + Autoplay	Productos destacados
IconLibrary	FontAwesome/Lucide	500+ icons
ApiTable	Axios + Tailwind	Tabla dinámica
Navbar	Heroicons	Navegación responsive
🎨 TailwindCSS Config
js
// breakpoints personalizados
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
}
🧪 Comandos útiles
bash
npm run dev           # Desarrollo completo
npm run lint          # ESLint Next.js 15
npm run build         # Build producción
vercel --prod         # Deploy Vercel
🚀 Deploy recomendado
Vercel (1 clic)
text
1. vercel.com → Import GitHub
2. Auto-deploy cada push
3. ✅ https://proyecto-final-front.vercel.app
Netlify
text
Build: npm run build
Publish: .next
📊 Métricas esperadas
text
⚡ Performance: 95+
♿ Accessibility: 98+
📱 Best Practices: 100%
🔍 SEO: 95+
🤝 Contribuir
bash
1. fork → git clone TU-FORK
2. npm install
3. git checkout -b feature/nuevo-carousel
4. npm run dev + npm run backend
5. git commit -m "feat: agrega carousel productos"
6. Pull Request
📄 Licencia
MIT License

👨‍💻 Diego Almada | eldiego54
🎓 Bootcamp Fullstack 2026
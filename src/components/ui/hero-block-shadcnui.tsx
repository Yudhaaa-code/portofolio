import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Eye } from "@/components/ui/icons";
import { usePdfModal } from "@/context/PdfModalContext";
import { useLanguage } from "@/context/LanguageContext";

export { Github, Linkedin };

export interface HeroBlockProps {
  id?: string;
  greeting?: string;
  name?: string;
  title?: string;
  description?: string;
  avatarUrl?: string;
  contactHref?: string;
  projectsHref?: string;
  contactText?: string;
  projectsText?: string;
  previewPdfText?: string;
  socials?: Array<{ icon: any; href: string }>;
}

export function HeroBlock({
  id = "beranda",
  greeting,
  name = "Yudha Putra Anangga",
  title,
  description,
  avatarUrl,
  contactHref = "#kontak",
  projectsHref = "#proyek",
  contactText,
  projectsText,
  previewPdfText,
  socials = [
    { icon: Github, href: "https://github.com/Yudhaaa-code" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yudhaanangga/?trk=public-profile-join-page" },
  ],
}: HeroBlockProps) {
  const { openPreview } = usePdfModal();
  const { t } = useLanguage();

  const finalGreeting = greeting || t("hero.greeting");
  const finalTitle = title || t("hero.title");
  const finalDesc = description || t("hero.description");
  const finalContactText = contactText || t("hero.getInTouch");
  const finalProjectsText = projectsText || t("hero.viewProjects");
  const finalPreviewPdfText = previewPdfText || t("hero.previewPdf");

  return (
    <section id={id} className="relative flex items-center justify-center min-h-screen px-4 pt-28 pb-16 w-full">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar Profile dengan Glow Ring */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-block"
          >
            <div className="mx-auto h-28 w-28 md:h-36 md:w-36 overflow-hidden rounded-full border-2 border-emerald-400/60 shadow-[0_0_35px_rgba(16,185,129,0.35)] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center p-1">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={name}
                  className="h-full w-full object-cover rounded-full"
                />
              ) : (
                <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500" />
              )}
            </div>
          </motion.div>

          {/* Greeting & Name */}
          {name && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-base md:text-lg font-medium text-emerald-400 tracking-wider uppercase mb-3"
            >
              {finalGreeting} <span className="font-bold text-white normal-case tracking-normal">{name}</span>
            </motion.p>
          )}

          {/* Title dengan Gradient Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent md:text-6xl lg:text-7xl"
          >
            {finalTitle}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-10 max-w-3xl text-lg text-slate-300 md:text-xl leading-relaxed"
          >
            {finalDesc}
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-6 flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="gap-2 text-base font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all cursor-pointer"
              asChild
            >
              <a href={contactHref}>
                <Mail className="h-5 w-5" />
                {finalContactText}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base font-semibold border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white backdrop-blur-sm cursor-pointer"
              asChild
            >
              <a href={projectsHref}>
                {finalProjectsText}
                <ArrowDown className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Preview & Download Portfolio PDF Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mb-10 flex items-center justify-center"
          >
            <button
              type="button"
              onClick={openPreview}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-950/40 px-5 py-2.5 text-sm font-medium text-emerald-300 shadow-sm transition-all hover:bg-emerald-500 hover:text-white hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] cursor-pointer active:scale-95"
              title={finalPreviewPdfText}
            >
              <Eye className="h-4 w-4" />
              {finalPreviewPdfText}
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 shadow-lg transition-all hover:bg-emerald-500 hover:text-white hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 transform z-20"
      >
        <a href={projectsHref} aria-label={t("hero.scrollToContent")}>
          <ArrowDown className="h-6 w-6 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer" />
        </a>
      </motion.div>
    </section>
  );
}

export default HeroBlock;

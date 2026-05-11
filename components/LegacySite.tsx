"use client";

import { useEffect, useRef } from "react";

import { legacyMarkup } from "@/lib/legacyMarkup";
import { tourStops } from "@/lib/tourStops";

declare global {
  interface Window {
    showPage?: (id: string) => void;
  }
}

const THEME_KEY = "zf-theme";
const darkPages: string[] = [];
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export function LegacySite() {
  const rootRef = useRef<HTMLDivElement>(null);
  const web3FormsAccessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || "";

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    let tourIndex = 0;
    let tourTimer: number | null = null;
    let revealObserver: IntersectionObserver | null = null;
    let revealTimeout: number | null = null;
    const cleanupFns: Array<() => void> = [];

    const getById = <T extends HTMLElement>(id: string) =>
      root.querySelector<T>(`#${id}`);
    const nav = getById<HTMLElement>("mainNav");
    const mobileToggle = getById<HTMLButtonElement>("mobileNavToggle");

    const setMobileMenuOpen = (isOpen: boolean) => {
      if (!nav) {
        return;
      }

      nav.classList.toggle("mobile-open", isOpen);

      if (mobileToggle) {
        mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    };

    const setFormStatus = (
      statusEl: HTMLElement | null,
      message: string,
      tone: "success" | "error" | "pending" | "idle" = "idle",
    ) => {
      if (!statusEl) {
        return;
      }

      statusEl.textContent = message;
      statusEl.className =
        tone === "idle" ? "form-status" : `form-status is-${tone}`;
    };

    const setButtonState = (
      button: HTMLButtonElement | null,
      isBusy: boolean,
      idleLabel: string,
      busyLabel: string,
    ) => {
      if (!button) {
        return;
      }

      button.disabled = isBusy;
      button.textContent = isBusy ? busyLabel : idleLabel;
    };

    const submitToWeb3Forms = async (payload: Record<string, string>) => {
      if (!web3FormsAccessKey) {
        throw new Error(
          "Web3Forms is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local.",
        );
      }

      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          ...payload,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        error?: string;
        message?: string;
        body?: {
          message?: string;
        };
      };

      if (!response.ok || data.success === false) {
        throw new Error(
          data.message ||
            data.error ||
            "Unable to send your message right now. Please try again.",
        );
      }

      return data;
    };

    const applyTheme = (theme: string) => {
      const isDarkTheme = theme === "dark";
      document.body.classList.toggle("theme-dark", isDarkTheme);
      const toggle = getById<HTMLButtonElement>("themeToggle");

      if (toggle) {
        toggle.textContent = isDarkTheme ? "Light" : "Dark";
      }
    };

    const renderTourStop = (index: number) => {
      const image = getById<HTMLImageElement>("tourImage");
      const stepLabel = getById<HTMLElement>("tourStepLabel");
      const stepText = getById<HTMLElement>("tourStepText");
      const dept = getById<HTMLElement>("tourDept");
      const control = getById<HTMLElement>("tourControl");
      const status = getById<HTMLElement>("tourStatus");
      const progress = getById<HTMLElement>("journeyProgress");
      const token = getById<HTMLElement>("journeyToken");

      if (!image || !stepLabel || !stepText) {
        return;
      }

      const stop = tourStops[index];
      const dots = root.querySelectorAll<HTMLElement>(".tour-dot");
      const journeyStops = root.querySelectorAll<HTMLElement>(".journey-stop");

      image.src = stop.image;
      stepLabel.textContent = stop.label;
      stepText.textContent = stop.text;

      if (dept) dept.textContent = stop.dept;
      if (control) control.textContent = stop.control;
      if (status) status.textContent = stop.status;

      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === index);
      });

      journeyStops.forEach((journeyStop, journeyIndex) => {
        journeyStop.classList.toggle("active", journeyIndex === index);
      });

      const percent = (index / (tourStops.length - 1)) * 100;

      if (progress) {
        progress.style.width = `${percent}%`;
      }

      if (token) {
        token.style.left = `${percent}%`;
      }
    };

    const stopTourAutoPlay = () => {
      if (tourTimer !== null) {
        window.clearInterval(tourTimer);
        tourTimer = null;
      }
    };

    const startTourAutoPlay = () => {
      stopTourAutoPlay();
      tourTimer = window.setInterval(() => {
        tourIndex = (tourIndex + 1) % tourStops.length;
        renderTourStop(tourIndex);
      }, 4000);
    };

    const initFactoryTour = () => {
      const dotsWrap = getById<HTMLElement>("tourDots");
      const journeyWrap = getById<HTMLElement>("journeyStops");
      const prev = getById<HTMLButtonElement>("tourPrev");
      const next = getById<HTMLButtonElement>("tourNext");

      if (!dotsWrap || !prev || !next) {
        return;
      }

      dotsWrap.innerHTML = "";

      if (journeyWrap) {
        journeyWrap.innerHTML = "";
      }

      tourStops.forEach((stop, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `tour-dot${index === 0 ? " active" : ""}`;

        const dotHandler = () => {
          tourIndex = index;
          renderTourStop(tourIndex);
          startTourAutoPlay();
        };

        dot.addEventListener("click", dotHandler);
        cleanupFns.push(() => dot.removeEventListener("click", dotHandler));
        dotsWrap.appendChild(dot);

        if (journeyWrap) {
          const marker = document.createElement("div");
          marker.className = `journey-stop${index === 0 ? " active" : ""}`;
          marker.textContent = stop.short;
          journeyWrap.appendChild(marker);
        }
      });

      const prevHandler = () => {
        tourIndex = (tourIndex - 1 + tourStops.length) % tourStops.length;
        renderTourStop(tourIndex);
        startTourAutoPlay();
      };

      const nextHandler = () => {
        tourIndex = (tourIndex + 1) % tourStops.length;
        renderTourStop(tourIndex);
        startTourAutoPlay();
      };

      prev.addEventListener("click", prevHandler);
      next.addEventListener("click", nextHandler);

      cleanupFns.push(() => prev.removeEventListener("click", prevHandler));
      cleanupFns.push(() => next.removeEventListener("click", nextHandler));

      renderTourStop(tourIndex);
      startTourAutoPlay();
    };

    const initRevealAnimations = () => {
      if (revealObserver) {
        revealObserver.disconnect();
      }

      const revealTargets = root.querySelectorAll<HTMLElement>(".reveal-on-scroll");

      if (!("IntersectionObserver" in window)) {
        revealTargets.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14 },
      );

      revealTargets.forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          revealObserver?.observe(el);
        }
      });
    };

    const showPage = (id: string) => {
      const target = getById<HTMLElement>(id);

      if (!target || !nav) {
        return;
      }

      root.querySelectorAll<HTMLElement>(".page").forEach((page) => {
        page.classList.remove("active");
      });

      target.classList.add("active");

      const isDark = darkPages.includes(id);
      nav.classList.remove("dark", "light");
      nav.classList.add(isDark ? "dark" : "light");
      setMobileMenuOpen(false);

      root.querySelectorAll(".nav-links a").forEach((anchor) => {
        anchor.classList.remove("active-link");
      });

      const navMap: Record<string, string | null> = {
        aboutus: "nav-aboutus",
        collections: "nav-collections",
        craftsmanship: "nav-craftsmanship",
        about: "nav-about",
        contact: "nav-contact",
        prototype: null,
      };

      const activeNavId = navMap[id];

      if (activeNavId) {
        getById(activeNavId)?.classList.add("active-link");
      }

      window.scrollTo({ top: 0, behavior: "smooth" });

      if (revealTimeout !== null) {
        window.clearTimeout(revealTimeout);
      }

      revealTimeout = window.setTimeout(() => {
        initRevealAnimations();
      }, 80);
    };

    window.showPage = showPage;

    const savedTheme = window.localStorage.getItem(THEME_KEY) || "light";
    applyTheme(savedTheme);
    showPage("aboutus");

    const toggle = getById<HTMLButtonElement>("themeToggle");
    const toggleHandler = () => {
      const nextTheme = document.body.classList.contains("theme-dark")
        ? "light"
        : "dark";

      applyTheme(nextTheme);
      window.localStorage.setItem(THEME_KEY, nextTheme);
    };

    if (toggle) {
      toggle.addEventListener("click", toggleHandler);
      cleanupFns.push(() => toggle.removeEventListener("click", toggleHandler));
    }

    const mobileToggleHandler = () => {
      setMobileMenuOpen(!nav?.classList.contains("mobile-open"));
    };

    if (mobileToggle) {
      mobileToggle.addEventListener("click", mobileToggleHandler);
      cleanupFns.push(() =>
        mobileToggle.removeEventListener("click", mobileToggleHandler),
      );
    }

    const resizeHandler = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", resizeHandler);
    cleanupFns.push(() => window.removeEventListener("resize", resizeHandler));

    const prototypeSubmit = getById<HTMLButtonElement>("prototypeSubmit");
    const prototypeStatus = getById<HTMLElement>("prototypeStatus");
    const prototypeProject = getById<HTMLInputElement>("prototypeProject");
    const prototypeName = getById<HTMLInputElement>("prototypeName");
    const prototypeEmail = getById<HTMLInputElement>("prototypeEmail");
    const prototypeCompany = getById<HTMLInputElement>("prototypeCompany");
    const prototypeCategory = getById<HTMLSelectElement>("prototypeCategory");
    const prototypeNotes = getById<HTMLTextAreaElement>("prototypeNotes");

    const prototypeHandler = async () => {
      setFormStatus(prototypeStatus, "", "idle");
      setButtonState(
        prototypeSubmit,
        true,
        "Submit Prototype Request",
        "Sending...",
      );

      try {
        const payload = {
          project: prototypeProject?.value.trim() || "",
          name: prototypeName?.value.trim() || "",
          email: prototypeEmail?.value.trim() || "",
          company: prototypeCompany?.value.trim() || "",
          category: prototypeCategory?.value || "",
          notes: prototypeNotes?.value.trim() || "",
        };

        const result = await submitToWeb3Forms({
          subject: `New prototype inquiry from ${payload.name || "Website visitor"}`,
          from_name: "ZF Apparel Website",
          name: payload.name,
          email: payload.email,
          replyto: payload.email,
          project: payload.project,
          company: payload.company,
          category: payload.category,
          source: "Prototype Inquiry Form",
          message:
            `Project Identity: ${payload.project || "Not provided"}\n` +
            `Representative Name: ${payload.name || "Not provided"}\n` +
            `Email Address: ${payload.email || "Not provided"}\n` +
            `Global Brand / House: ${payload.company || "Not provided"}\n` +
            `Material Archive: ${payload.category || "Not selected"}\n\n` +
            `Manufacturing Notes:\n${payload.notes || "Not provided"}`,
        });

        setFormStatus(
          prototypeStatus,
          result.message ||
            result.body?.message ||
            "Your prototype inquiry was sent successfully.",
          "success",
        );

        if (prototypeProject) prototypeProject.value = "";
        if (prototypeName) prototypeName.value = "";
        if (prototypeEmail) prototypeEmail.value = "";
        if (prototypeCompany) prototypeCompany.value = "";
        if (prototypeCategory) prototypeCategory.selectedIndex = 0;
        if (prototypeNotes) prototypeNotes.value = "";
      } catch (error) {
        setFormStatus(
          prototypeStatus,
          error instanceof Error
            ? error.message
            : "Unable to send your prototype inquiry right now.",
          "error",
        );
      } finally {
        setButtonState(
          prototypeSubmit,
          false,
          "Submit Prototype Request",
          "Sending...",
        );
      }
    };

    if (prototypeSubmit) {
      prototypeSubmit.addEventListener("click", prototypeHandler);
      cleanupFns.push(() =>
        prototypeSubmit.removeEventListener("click", prototypeHandler),
      );
    }

    const contactSubmit = getById<HTMLButtonElement>("contactSubmit");
    const contactStatus = getById<HTMLElement>("contactStatus");
    const contactName = getById<HTMLInputElement>("contactName");
    const contactCompany = getById<HTMLInputElement>("contactCompany");
    const contactEmail = getById<HTMLInputElement>("contactEmail");
    const contactMessage = getById<HTMLTextAreaElement>("contactMessage");

    const contactHandler = async () => {
      setFormStatus(contactStatus, "", "idle");
      setButtonState(contactSubmit, true, "Submit Inquiry", "Sending...");

      try {
        const payload = {
          name: contactName?.value.trim() || "",
          company: contactCompany?.value.trim() || "",
          email: contactEmail?.value.trim() || "",
          message: contactMessage?.value.trim() || "",
        };

        const result = await submitToWeb3Forms({
          subject: `New contact inquiry from ${payload.name || "Website visitor"}`,
          from_name: "ZF Apparel Website",
          name: payload.name,
          email: payload.email,
          replyto: payload.email,
          company: payload.company,
          source: "Contact Form",
          message: payload.message,
        });

        setFormStatus(
          contactStatus,
          result.message ||
            result.body?.message ||
            "Your contact inquiry was sent successfully.",
          "success",
        );

        if (contactName) contactName.value = "";
        if (contactCompany) contactCompany.value = "";
        if (contactEmail) contactEmail.value = "";
        if (contactMessage) contactMessage.value = "";
      } catch (error) {
        setFormStatus(
          contactStatus,
          error instanceof Error
            ? error.message
            : "Unable to send your contact inquiry right now.",
          "error",
        );
      } finally {
        setButtonState(contactSubmit, false, "Submit Inquiry", "Sending...");
      }
    };

    if (contactSubmit) {
      contactSubmit.addEventListener("click", contactHandler);
      cleanupFns.push(() =>
        contactSubmit.removeEventListener("click", contactHandler),
      );
    }

    const ctaEmail = getById<HTMLInputElement>("ctaEmail");
    const ctaEmailSubmit = getById<HTMLButtonElement>("ctaEmailSubmit");
    const ctaEmailStatus = getById<HTMLElement>("ctaEmailStatus");

    const ctaEmailHandler = async () => {
      setFormStatus(ctaEmailStatus, "", "idle");
      setButtonState(ctaEmailSubmit, true, "→", "...");

      try {
        const email = ctaEmail?.value.trim() || "";

        const result = await submitToWeb3Forms({
          subject: "New work email lead from ZF Apparel website",
          from_name: "ZF Apparel Website",
          name: "Website Visitor",
          email,
          replyto: email,
          source: "CTA Work Email Capture",
          message: `A visitor shared their work email for follow-up.\n\nEmail Address: ${email}`,
        });

        setFormStatus(
          ctaEmailStatus,
          result.message ||
            result.body?.message ||
            "Your email was sent successfully.",
          "success",
        );

        if (ctaEmail) ctaEmail.value = "";
      } catch (error) {
        setFormStatus(
          ctaEmailStatus,
          error instanceof Error
            ? error.message
            : "Unable to send your email right now.",
          "error",
        );
      } finally {
        setButtonState(ctaEmailSubmit, false, "→", "...");
      }
    };

    const ctaEmailKeydownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        void ctaEmailHandler();
      }
    };

    if (ctaEmailSubmit) {
      ctaEmailSubmit.addEventListener("click", ctaEmailHandler);
      cleanupFns.push(() =>
        ctaEmailSubmit.removeEventListener("click", ctaEmailHandler),
      );
    }

    if (ctaEmail) {
      ctaEmail.addEventListener("keydown", ctaEmailKeydownHandler);
      cleanupFns.push(() =>
        ctaEmail.removeEventListener("keydown", ctaEmailKeydownHandler),
      );
    }

    initFactoryTour();
    initRevealAnimations();

    return () => {
      window.showPage = undefined;
      stopTourAutoPlay();

      if (revealTimeout !== null) {
        window.clearTimeout(revealTimeout);
      }

      revealObserver?.disconnect();
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, []);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: legacyMarkup }} />;
}

// Services Data - يمكن تعديلها وإضافة المزيد بسهولة
const servicesData = {
  ar: [
    {
      icon: "fa-solid fa-globe",
      title: "المواقع الديناميكية",
      description:
        "نصمم لك مواقع تفاعلية ومرنة تعكس هوية مشروعك وتخلي عملاءك يعيشوا تجربة مميزة و احترافيه مع دعم جميع الاجهزه.",
    },
    {
      icon: "fa-solid fa-qrcode",
      title: "قوائم ذكية عبر QR",
      description:
        "استبدل المنيوهات التقليدية بتجربة رقمية تفاعلية، سهلة الوصول بنقرة واحدة.",
    },
    {
      icon: "fa-solid fa-chart-bar",
      title: "إحصائيات وتقارير",
      description:
        "تابع أداء أعمالك لحظة بلحظة مع لوحات تحكم واضحة تعطيك رؤية أعمق.",
    },
    {
      icon: "fa-solid fa-palette",
      title: "تخصيص كامل",
      description:
        "اختار ألوانك، ستايلك ، وانشئ QR من لوحه الاداره الخاصه بك , صمّم تجربتك على ذوقك عشان تبقى مميز عن غيرك .",
    },
    {
      icon: "fa-headset",
      title: "دعم فني متكامل",
      description:
        "فريق دعم فني متاح على مدار الساعة لمساعدتك في أي استفسارات أو مشكلات تقنية.",
    },
  ],
  en: [
    {
      icon: "fa-solid fa-globe",
      title: "Dynamic Websites",
      description:
        "We design interactive and flexible websites that reflect your brand identity, giving your customers a unique and professional experience—fully supported across all devices.",
    },
    {
      icon: "fa-solid fa-qrcode",
      title: "Smart QR Menus",
      description:
        "Replace traditional menus with a digital, interactive experience that’s easily accessible with just one click.",
    },
    {
      icon: "fa-solid fa-chart-bar",
      title: "Statistics & Reports",
      description:
        "Track your business performance in real time with clear dashboards that give you deeper insights.",
    },
    {
      icon: "fa-solid fa-palette",
      title: "Full Customization",
      description:
        "Choose your colors, style, and create your own QR from your dashboard. Design the experience your way to stand out from the competition.",
    },
    {
      icon: "fa-headset",
      title: "Comprehensive Technical Support",
      description:
        "A dedicated support team available 24/7 to assist you with any inquiries or technical issues.",
    },
  ],
};

// Function to render services based on current languageفي ا
function renderServices(lang = "ar") {
  const servicesContainer = document.getElementById("servicesContainer");
  if (!servicesContainer) return;

  // Clear existing services
  servicesContainer.innerHTML = "";

  // Get services for current language or default to Arabic
  const currentServices = servicesData[lang] || servicesData.ar;

  // Add services to the container
  currentServices.forEach((service, index) => {
    const serviceElement = document.createElement("div");
    serviceElement.className = "service-card";

    serviceElement.innerHTML = `
            <div class="service-card-header">
                <div class="service-icon" style="color: ${service.color}">
                    <i class="fas ${service.icon}"></i>
                </div>
                <div class="service-content">
                    <h3 data-i18n="service_${service.title
                      .replace(/\s+/g, "_")
                      .toLowerCase()}">${service.title}</h3>
                    <p data-i18n="service_desc_${service.title
                      .replace(/\s+/g, "_")
                      .toLowerCase()}">${service.description}</p>
                </div>
            </div>
        `;
    servicesContainer.appendChild(serviceElement);
  });

  // Initialize animations after a small delay to allow DOM to update
  setTimeout(() => {
    if (window.initMobileAnimations) {
      window.initMobileAnimations();
    }
  }, 100);

  // Update translations for the new elements
  if (typeof updateTextContent === "function") {
    updateTextContent();
  }
}

// Initialize services when the page loads
function initializeServices() {
  const currentLang = document.documentElement.getAttribute("lang") || "ar";
  renderServices(currentLang);
}

// Initialize on DOM content loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeServices);
} else {
  // DOM is already loaded
  initializeServices();
}

// Listen for language changes
document.addEventListener("languageChanged", (e) => {
  renderServices(e.detail.lang);
});

// Make renderServices available globally for language switching
window.renderServices = renderServices;

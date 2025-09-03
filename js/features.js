// Features data structure
const featuresData = {
  en: {
    title: "Our Features",
    headline: "Smart, Dynamic, and Fully Responsive Websites",
    features: [
      {
        title: "Interactive Cart",
        text: "Customers can open the cart anytime to review their selected items, adjust quantities instantly, and see the total update live at the bottom.",
        icon: "fa-cart-plus",
      },
      {
        title: "Smart Promotions",
        text: "From the admin, toggle SALE on a single product or an entire category. The badge shows automatically on targeted items only.",
        icon: "fa-tags",
      },
      {
        title: "Old/New Price Logic",
        text: "Show the new price with the old price struck through. If no old price is set, the UI hides it automatically with no gaps.",
        icon: "fa-tag",
      },
      {
        title: "Flexible Categories & Items",
        text: "Add/Remove Products Easily manage products, product images, and categories — all changes are instantly visible to your customers.",
        icon: "fa-layer-group",
      },
      {
        title: "Custom Domain for Your Brand",
        text: "A domain is your website’s address (e.g., yourcafe.com). We connect a branded domain for higher trust and easier recall—plus SSL and built-in security.",
        icon: "fa-globe",
      },
      {
        title: "Fast & Responsive",
        text: "A 100% responsive, high-performance experience across mobile, tablet, and desktop.",
        icon: "fa-mobile-alt",
      },
    ],
    inShort: "In short:",
  },
  ar: {
    title: "مميزتنا",
    headline: "مواقع ذكية، ديناميكية، ومتوافقة مع كل الأجهزة",
    features: [
      {
        title: "سلة تفاعلية",
        text: "العميل يفتح السلة في أي وقت ويشوف المنتجات اللي اختارها، يقدر يزوّد أو يقلّل الكمية لحظيًا، مع تحديث الإجمالي التلقائي أسفل السلة.",
        icon: "fa-cart-plus",
      },
      {
        title: "عروض ذكية",
        text: "من لوحة التحكم تقدر تفعل SALE على منتج واحد أو قسم كامل. الشارة بتظهر تلقائيًا على العناصر المستهدفة بس.",
        icon: "fa-tags",
      },

      {
        title: "سعر قديم/جديد تلقائي",
        text: "اعرض السعر الحالي مع شطب القديم. ولو مفيش سعر قديم، الواجهة بتخفيه تلقائيًا من غير أي فراغات.",
        icon: "fa-tag",
      },

      {
        title: "تحكّم مرن في الأقسام والمنتجات",
        text: "أضف/احذف المنتجات وصور المنتجات والأقسام، كل التغييرات بتبان مباشرة للمستخدمين.",
        icon: "fa-layer-group",
      },
      {
        title: "دومين مخصّص لعلامتك",
        text: "الدومين هو عنوان موقعك على الإنترنت (مثل: yourcafe.com). بنربط لك دومين باسمك عشان ثقة أعلى، تذكّر أسهل، واحترافية أكتر—مع شهادة SSL وتأمين تلقائي.",
        icon: "fa-globe",
      },
      {
        title: "تجربة سريعة ومتجاوبة",
        text: "تصميم سريع ومتجاوب 100% يشتغل بسلاسة على الموبايل والتابلت والكمبيوتر.",
        icon: "fa-mobile-alt",
      },
    ],
    inShort: "باختصار:",
  },
};

// Render features function
function renderFeatures(lang = "ar") {
  const container = document.querySelector(".features-content");
  if (!container) return;

  const data = featuresData[lang] || featuresData.ar;

  container.innerHTML = `
    <h3 class="features-headline">${data.headline}</h3>
    <div class="features-text">
      ${data.features
        .map(
          (feature, index) => `
        <div class="feature-item">
          <i class="fas ${feature.icon} feature-icon"></i>
          <h4 class="feature-title">${feature.title}</h4>
          <div class="feature-text">${feature.text}</div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

// Listen for language changes
document.addEventListener("languageChanged", (e) => {
  renderFeatures(e.detail.lang);
});

// Initialize features on page load
function initFeatures() {
  const currentLang = document.documentElement.getAttribute("lang") || "ar";
  renderFeatures(currentLang);
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFeatures);
} else {
  initFeatures();
}

// Simple Image Slider
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const slideDuration = 5000; // 5 seconds per slide
  let slideInterval;

  // Show specific slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Handle loop
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    // Show current slide
    currentSlide = index;
    slides[currentSlide].classList.add("active");
  }

  // Auto slide
  function startSlider() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, slideDuration);
  }

  // Initialize slider
  if (slides.length > 0) {
    // Show first slide
    showSlide(0);

    // Start auto-sliding
    startSlider();

    // Pause on hover
    const slider = document.querySelector(".image-slider");
    if (slider) {
      slider.addEventListener("mouseenter", () => {
        clearInterval(slideInterval);
      });

      slider.addEventListener("mouseleave", () => {
        startSlider();
      });
    }
  }
});

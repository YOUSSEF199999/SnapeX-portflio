// Mobile Menu and Language Handling
document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const header = document.querySelector(".header");
  const langButtons = document.querySelectorAll(".lang-btn");
  let currentLang =
    document.cookie.replace(
      /(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    ) || "ar";

  // Translations
  const aboutFeatures = {
    en: [
      {
        text: "Dynamic websites with modern designs that match your brand identity.",
        icon: "fa-solid fa-check",
      },
      {
        text: "A comprehensive dashboard with accurate statistics and real-time reports.",
        icon: "fa-solid fa-check",
      },
      {
        text: "Multiple design options with customizable colors based on your brand’s identity.",
        icon: "fa-solid fa-check",
      },
      {
        text: "Continuous support and ongoing development to keep your business ahead.",
        icon: "fa-solid fa-check",
      },
    ],
    ar: [
      {
        text: "مواقع ديناميكية بتصاميم عصرية تناسب علامتك التجارية.",
        icon: "fa-solid fa-check",
      },
      {
        text: "لوحة تحكم متكاملة لإحصائيات دقيقة وتقارير لحظية.",
        icon: "fa-solid fa-check",
      },
      {
        text: " متوفر تصاميم مع تعدد الوان على حسب هويه مكانك",
        icon: "fa-solid fa-check",
      },
      {
        text: "دعم متواصل وتطوير مستمر لإبقاء عملك في المقدمة.",
        icon: "fa-solid fa-check",
      },
    ],
  };

  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      evolution: "Our Evolution",
      contact: "Contact Us",
      features: "Features",
      contact: "Contact",
      get_started: "Get Started",
      hero_subtitle: "The Smart Digital Solution for Cafés & Restaurants",
      language: "عربي",
      aboutTitle: "About Us",
      aboutIntro:
        "SnapeX is a smart platform that provides innovative digital solutions for managing restaurants and cafés. Our goal is to empower our clients to run their businesses easily and efficiently through smart, secure, and user-friendly digital platforms—without any technical complications.",
      aboutFeatures: aboutFeatures.en,
      // Benefits Section
      benefitsTitle: "Full Admin Dashboard",

      benefitsText1: "Easy & Professional Interface:",
      benefitsText2: "Smart Product & Offer Management:",
      benefitsText3: "Real-Time Statistics & Reports:",
      benefitsText4: "Full Customization:",

      benefit1:
        "No need to be a tech expert — everything is organized, simple, and hassle-free.",
      benefit2:
        "Add, edit, and remove your products and offers with full control over prices and images — all at your fingertips.",
      benefit3:
        "An interactive dashboard that shows the full status of your menu: from the number of products and categories to availability rates and offers.Clear and quick insights that help you track performance and make smart, accurate decisions.",
      benefit4:
        "Control your colors, logo, and design layout to perfectly match your brand identity.",
      // End of Benefits Section

      // Design Choices Section
      designChoicesTitle: "Custom Colors & Unique QR ",
      designChoicesText1:
        "From the admin dashboard, you can easily personalize your brand look and generate a unique QR:",

      designChoice1:
        "Choose colors that reflect your brand identity and style.",
      designChoice2:
        "Generate a customized QR code that directs customers to your website.",
      designChoice3:
        "Download the QR in high resolution for prints, packaging, or marketing materials.",
      // End of Design Choices Section

      // Why Choose Section
      whyChooseTitle: "Why Choose SnapeX?",
      whyChooseModernTitle: " More Value, Less Cost",
      whyChooseModernText:
        "With SnapeX, you get a fully professional website packed with powerful features — at competitive prices, without extra hidden costs. Smarter and more affordable than any other solution in the market.",

      whyChooseSalesTitle: "QR Ready from the Dashboard",
      whyChooseSalesText:
        "No need to search or pay extra for a QR code… everything is built-in and ready in your dashboard with just one click.",

      whyChooseManageTitle: "Smarter Decisions",
      whyChooseManageText:
        "An interactive dashboard gives you a clear overview of your entire menu, helping you track performance and make smarter decisions instantly.",

      // Second Why Choose Section
      whyChooseIntegrationTitle: "Design That Matches Your Identity",
      whyChooseIntegrationText:
        "Colors, logo, and a full interface that reflects your brand, makes ordering easier, and leaves a lasting impression on your customers.",

      whyChooseAnalyticsTitle: "Effortless Management",
      whyChooseAnalyticsText:
        "A single dashboard to control everything: products, prices, offers, and even QR codes.",

      whyChooseInterfaceTitle: "Continuous Development",
      whyChooseInterfaceText:
        "We never stop at one level — as long as you’re with us, you’ll keep getting new updates and smarter features to grow your business.",

      whyChooseserviceTitle: "A Partner in Success, Not Just a Service",
      whyChooseserviceText:
        "With SnapeX, it’s not just about client and provider — it’s a partnership where we grow and succeed together.",

      whyChooseOccasionsTitle: "Seasonal & Festive Themes",
      whyChooseOccasionsText:
        "Whether it’s Ramadan, New Year, or any special season, we prepare unique festive designs for you — no hassle, no effort.",

      // Evolution Section
      evolutionTitle: "Our Evolution",
      version1Title: "Version 1",
      version1Text:
        "We launched the very first version of SnapeX with a strong step forward — introducing interactive QR menus that are simple and easy to use, with elegant designs that fit all types of restaurants and cafés, making the customer journey clearer and smoother. We started with two designs, Modern and Classic, marking the beginning of a path of growth and innovation.",

      version2Title: "Version 2",
      version2Text:
        "We expanded the experience further, introducing new designs like Royal and Prime alongside Modern and Classic, while upgrading the dashboard to include:",
      version2Text2:
        "1- Generate custom QR codes directly from the admin panel with no extra cost.",
      version2Text3:
        "2- Track accurate statistics and in-depth analytics for menus and sales.",
      version2Text4:
        "3- Tools that simplify order management and empower you to make data-driven decisions.",

      version3Title: "Version 3 Coming Soon...",
      version3Text:
        "Get ready for the next generation of SnapeX — not just an ordering system, but a fully intelligent platform powered by modern technologies. Expect faster interfaces, greater flexibility, and deeper customization for your business. We’re not just developing a new version… we’re redefining the entire experience to reshape the market.",
      // End of Evolution Section

      // Work Steps Section
      workStepsTitle: "Work Steps",
      workStepsSubtitle:
        "How we work to achieve the best results for our clients",
      step1Title: "Analysis & Planning",
      step1Text:
        "We carefully study and analyze your requirements to develop an integrated action plan.",
      step2Title: "Design & Development",
      step2Text:
        "We design the optimal technical solution and implement it using the latest technologies.",
      step3Title: "Testing & Improvement",
      step3Text:
        "We thoroughly test the solution and optimize it to ensure optimal performance.",
      step4Title: "Delivery & Support",
      step4Text:
        "We deliver the project while providing the necessary technical support and consultations.",
      // End of Work Steps Section

      // Vision & Mission Section
      visionTitle: "Our Vision",
      visionText:
        "To become the leading platform in Egypt and the Middle East that transforms the menu experience from static paper or QR codes into a dynamic, interactive website that grows and evolves with the brand.",
      missionTitle: "Our Mission",
      missionText:
        "We’re not just a software company — we’re partners in success. Our mission is to help cafés and restaurants deliver a premium, unforgettable experience that customers remember not only for the taste… but also for the journey.",
      // End of Vision & Mission Section

      // Footer Section
      footerAbout:
        "We provide innovative technical solutions that help businesses grow and thrive in the digital age.",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      webDevelopment: "Web Development",
      mobileApps: "Mobile Apps",
      uiUxDesign: "UI/UX Design",
      digitalMarketing: "Digital Marketing",
      contactUs: "Contact Us",
      address: "Riyadh, Saudi Arabia",
      copyright: " 2025 SnapeX. All Rights Reserved",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      copyright: " 2025 SnapeX. All rights reserved",

      // Get Started Box
      readyToStart: "Ready to Start?",
      startYourJourney:
        "Start your journey with us today and enjoy the best technical solutions",
      getStarted: "Get Started",
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      evolution: "تطورتنا",
      contact: "تواصل معنا",
      features: "مميزتنا",
      get_started: "ابدأ الآن",
      hero_subtitle: "الحل الرقمي الأذكى للكافيهات والمطاعم",
      language: "EN",
      aboutTitle: "من نحن",
      aboutIntro:
        "شركة SnapeX هي منصّة ذكية بتقدّم حلول رقمية مبتكرة لإدارة المطاعم والكافيهات , هدفنا هو تمكين عملائنا من إدارة أعمالهم بسهولة وفعالية من خلال منصات رقمية ذكية، آمنة، وسريعة الاستخدام، بدون أي تعقيدات تقنية.",
      aboutFeatures: aboutFeatures.ar,
      // Benefits Section (Arabic)
      benefitsTitle: "لوحة ادارة خاصة بك ",
      benefitsText1: "واجهة سهلة واحترافية :",
      benefitsText2: "إدارة منتجات وعروض بذكاء :",
      benefitsText3: "إحصائيات وتقارير لحظية :",
      benefitsText4: "تخصيص كامل:",

      benefit1: "مش محتاج تكون خبير تقني، كل شيء منظم وبسيط وبدون أي تعقيد.",
      benefit2:
        "ضيف، عدّل واحذف منتجاتك وعروضك مع إمكانية التحكم بالأسعار والصور بسهولة تامة وتحت إدارتك الكاملة.",
      benefit3:
        "لوحة تفاعلية تعرض حالة المنيو كاملة: من عدد المنتجات والأقسام لحد نسب التوفر والعروض. رؤية واضحة وسريعة تساعدك تتابع الأداء وتاخد قرارات دقيقة و بذكاء",
      benefit4:
        "تحكم في ألوان، لوجو، و اختيار شكل تصميمك عشان يتماشي مع هويه علامتك التجاريه",
      // End of Benefits Section (Arabic)

      // Design Choices Section (Arabic)
      designChoicesTitle: "تخصيص الألوان و QR خاص",
      designChoicesText1:
        "من لوحة الإدارة تقدر تتحكم بسهولة في شكل موقعك وتضيف QR مميز لعلامتك:",
      designChoice1: "تختار الألوان اللي تعبر عن هويتك البصرية وتناسب نشاطك.",
      designChoice2: "إنشاء كود QR مخصص يوصّل عملاءك مباشرة لموقعك.",
      designChoice3:
        "إمكانية تحميل الـ QR بجودة عالية لاستخدامه في المطبوعات أو على المنتجات.",
      // End Design Choices Section (Arabic)

      // Why Choose Section (Arabic)
      whyChooseTitle: "لماذا تختار SnapeX؟",
      whyChooseModernTitle: "  قيمة أعلى بتكلفة أقل",
      whyChooseModernText:
        "مع SnapeX هتاخد موقع احترافي كامل بإمكانيات ضخمة، بأسعار تنافسية من غير ما تدفع تكاليف جانبية زيادة ، أوفر من أي حل تاني في السوق .",

      whyChooseSalesTitle: "QR جاهز من لوحة الإدارة ",
      whyChooseSalesText:
        "مش محتاج تدور أو تدفع فلوس لحد يعمللك QR… كل حاجة من عندك في لوحة الإدارة بخطوة واحدة.",

      whyChooseManageTitle: "قرارات أوضح ",
      whyChooseManageText:
        "لوحة تفاعلية تعرض حالة المنيو كاملة برؤية واضحة وسريعة تساعدك تتابع الأداء وتاخد قرارات دقيقة و بذكاء.",

      // Second Why Choose Section - Arabic
      whyChooseIntegrationTitle: "تصميم مخصص لهويتك ",
      whyChooseIntegrationText:
        "ألوان، شعار، واجهة متكاملة تعكس شخصية مشروعك وتسهل على العميل الطلب ويترك انطباع قوي.",

      whyChooseAnalyticsTitle: "إدارة بدون تعقيد ",
      whyChooseAnalyticsText:
        "لوحة تحكم واحدة تكفيك تتحكم في كل حاجة: منتجاتك، أسعارك، عروضك، والـ QR كمان.",

      whyChooseInterfaceTitle: "تطوير مستمر ",
      whyChooseInterfaceText:
        " إحنا مش بنقف عند مستوى واحد، طول ما انت معانا، بتلاقي تحديثات جديدة وخدمات أذكى تساعدك تكبر وتنجح أكتر.",

      whyChooseserviceTitle: "شريك نجاح مش مجرد خدمة ",
      whyChooseserviceText:
        "وجودك معانا مش علاقة عميل وخدمة… دي شراكة بنكبر بيها مع بعض.",

      whyChooseOccasionsTitle: " مواسم واحتفالات مختلفة",
      whyChooseOccasionsText:
        "في كل مناسبة زي رمضان أو رأس السنة أو أي موسم مهم، بنجهّزلك شكل وزينة مميزة من غير ما تفكّر أو تتعب.",

      // Evolution Section (Arabic)
      evolutionTitle: "تطورتنا",
      version1Text:
        "أطلقنا أول نسخة من Snapex بخطوة قوية، بميزة إنشاء قوائم QR تفاعلية بسيطة وسهلة الاستخدام، مع واجهة أنيقة تناسب جميع أنواع المطاعم و كافيهات وتخلي تجربة العميل أسهل وأوضح. انشأنا اول تصميمين كبدايه Modern و  Classic و كانت البداية اللي فتحت الطريق للتطوير والابتكار.",

      version2Text:
        "وسعنا التجربة أكتر، وأطلقنا تصاميم جديدة زي Royal و Prime بجانب Modern و  Classic ، وأضافنا لوحة تحكم متطورة تُمكنك من:",
      version2Text2:
        "1- إنشاء QR مخصص مباشرة من لوحة الإدارة بدون أي تكلفة إضافية.",
      version2Text3:
        "2- متابعة إحصائيات دقيقة وتحليلات شاملة للمنيو والمبيعات.",
      version2Text4:
        "3- أدوات تسهل عليك إدارة الطلبات واتخاذ قرارات مبنية على بيانات حقيقية.",

      version3Title: "Version 3 قريباً...",
      version3Text:
        "استعدوا للجيل الجديد من Snapex... حيث نصنع قفزة حقيقية تنقلك من مجرد موقع لإدارة الطلبات، إلى منصة متكاملة ذكية مدعومة بتقنيات حديثة، بواجهات أسرع، مرونة أكبر، وتخصيص أعمق لمشروعك. نحن لا نطور نسخة جديدة فقط… نحن نعيد صياغة تجربة كاملة هتغير شكل السوق.",
      // End of Evolution Section (Arabic)

      // Work Steps Section (Arabic)
      workStepsTitle: "خطوات العمل",
      workStepsSubtitle: "كيف نعمل لتحقيق أفضل النتائج لعملائنا",
      step1Title: "التحليل والتخطيط",
      step1Text: "نقوم بدراسة متطلباتك وتحليلها بعناية لوضع خطة عمل متكاملة",
      step2Title: "التصميم والتطوير",
      step2Text: "نصمم الحل التقني الأمثل ونقوم بتنفيذه بأحدث التقنيات",
      step3Title: "الاختبار والتحسين",
      step3Text: "نختبر الحل بدقة ونقوم بتحسينه لضمان الأداء الأمثل",
      step4Title: "التسليم والدعم",
      step4Text: "نسلمك المشروع مع توفير الدعم الفني والاستشارات اللازمة",
      // End of Work Steps Section (Arabic)

      // Vision & Mission Section (Arabic)
      visionTitle: "رؤيتنا",
      visionText:
        "نكون المنصة الأولى في مصر والشرق الأوسط اللي بتغير شكل تجربة المنيو من ورقي أو QR ثابت  لموقع تفاعلي ديناميكي بيكبر ويتطور مع البراند.",
      missionTitle: "رسالتنا",
      missionText:
        "إحنا مش مجرد شركة برمجة… إحنا شركاء نجاح. هدفنا نساعد الكافيهات والمطاعم إنهم يقدموا تجربة راقية ومختلفة لعملائهم، تخليهم يفتكروا المكان مش بس عشان الطعم… لكن كمان عشان التجربة.",
      // End of Vision & Mission Section (Arabic)

      // Footer Section (Arabic)
      footerAbout:
        "نحن نقدم حلولاً تقنية مبتكرة تساعد الشركات على النمو والازدهار في العصر الرقمي.",
      quickLinks: "روابط سريعة",
      ourServices: "خدماتنا",
      webDevelopment: "تطوير المواقع",
      mobileApps: "تطبيقات الجوال",
      uiUxDesign: "تصميم واجهات المستخدم",
      digitalMarketing: "التسويق الرقمي",
      contactUs: "تواصل معنا",
      address: "الرياض، المملكة العربية السعودية",
      copyright: " 2025 SnapeX. جميع الحقوق محفوظة",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      copyright: " 2025 SnapeX. جميع الحقوق محفوظة",

      // Get Started Box - Arabic
      readyToStart: "جاهز للبدء؟",
      startYourJourney: "ابدأ رحلتك معنا اليوم واستمتع بأفضل الحلول التقنية",
      getStarted: "ابدأ الآن",
    },
  };

  if (!menuToggle || !navLinks || !header) return;

  // Check if mobile view
  function isMobileView() {
    return window.innerWidth <= 768;
  }

  // Toggle menu function
  function toggleMenu() {
    const isOpen = menuToggle.checked;
    document.body.style.overflow = isOpen ? "hidden" : "";

    if (isOpen) {
      navLinks.style.display = "flex";
      setTimeout(() => {
        navLinks.style.opacity = "1";
        navLinks.style.visibility = "visible";
      }, 10);
    } else {
      navLinks.style.opacity = "0";
      navLinks.style.visibility = "hidden";
      setTimeout(() => {
        if (!menuToggle.checked) navLinks.style.display = "none";
      }, 300);
    }
  }

  // Initialize menu state based on screen size
  function initMenu() {
    if (isMobileView()) {
      navLinks.style.display = "none";
      navLinks.style.opacity = "0";
      navLinks.style.visibility = "hidden";
      navLinks.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
    } else {
      navLinks.style.display = "flex";
      navLinks.style.opacity = "1";
      navLinks.style.visibility = "visible";
      navLinks.style.transition = "none";
      menuToggle.checked = false;
      document.body.style.overflow = "";
    }
  }

  // Initialize menu on load
  initMenu();

  // Video controls setup
  function setupVideoControls() {
    const videoContainer = document.querySelector(".timeline-video");
    if (!videoContainer) return;

    const videoAr = videoContainer.querySelector(".timeline-video-ar");
    const videoEn = videoContainer.querySelector(".timeline-video-en");
    const playButton = videoContainer.querySelector(".video-play-button");
    const muteButton = videoContainer.querySelector(".video-mute");

    let currentVideo =
      document.documentElement.lang === "ar" ? videoAr : videoEn;

    // Initialize video state
    currentVideo.muted = true;

    // Play/pause on video click
    videoContainer.addEventListener("click", function (e) {
      if (
        e.target === playButton ||
        e.target === playButton.firstElementChild
      ) {
        playVideo();
      } else if (
        e.target === muteButton ||
        e.target === muteButton.firstElementChild
      ) {
        toggleMute();
      } else if (videoContainer.classList.contains("playing")) {
        togglePlayPause();
      } else {
        playVideo();
      }
    });

    function playVideo() {
      videoContainer.classList.add("playing");
      currentVideo.muted = false; // Unmute when playing
      if (muteButton) {
        const icon = muteButton.querySelector("i");
        if (icon) icon.className = "fas fa-volume-up";
      }
      currentVideo
        .play()
        .catch((e) => console.error("Error playing video:", e));
    }

    function togglePlayPause() {
      if (currentVideo.paused) {
        currentVideo
          .play()
          .catch((e) => console.error("Error playing video:", e));
      } else {
        currentVideo.pause();
      }
    }

    function toggleMute() {
      currentVideo.muted = !currentVideo.muted;
      const icon = muteButton.querySelector("i");
      icon.className = currentVideo.muted
        ? "fas fa-volume-mute"
        : "fas fa-volume-up";
    }

    // Function to load and play video
    function loadAndPlayVideo(videoElement) {
      // Force reload the video source
      videoElement.load();
      videoElement.muted = true;
      // Add a small delay to ensure the video is loaded before playing
      setTimeout(() => {
        videoElement
          .play()
          .catch((e) => console.error("Error playing video:", e));
      }, 100);
    }

    // Handle language change
    document.addEventListener("langChange", function (e) {
      // Pause current video
      if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
      }

      // Switch to the other video based on the new language
      const newLang = e.detail.lang;
      if (newLang === "ar") {
        if (videoEn) videoEn.style.display = "none";
        if (videoAr) {
          videoAr.style.display = "block";
          currentVideo = videoAr;
          loadAndPlayVideo(currentVideo);
        }
      } else {
        if (videoAr) videoAr.style.display = "none";
        if (videoEn) {
          videoEn.style.display = "block";
          currentVideo = videoEn;
          loadAndPlayVideo(currentVideo);
        }
      }

      // Reset state
      if (videoContainer) videoContainer.classList.remove("playing");
      if (currentVideo) {
        currentVideo.muted = true;
        if (muteButton) {
          const icon = muteButton.querySelector("i");
          if (icon) icon.className = "fas fa-volume-up";
        }
      }
    });
  }

  // Function to open WhatsApp with pre-filled message
  function openWhatsApp() {
    const phoneNumber = "201063716940";
    const message = encodeURIComponent("مرحبا اريد الاستفسار عن شئ");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  }

  // Add WhatsApp click handler for the video
  const whatsappVideo = document.getElementById("whatsappVideo");
  if (whatsappVideo) {
    whatsappVideo.style.cursor = "pointer";
    whatsappVideo.addEventListener("click", openWhatsApp);
  }

  // Add WhatsApp click handler for the get started button
  const whatsappButton = document.getElementById("whatsappButton");
  if (whatsappButton) {
    whatsappButton.addEventListener("click", openWhatsApp);
  }

  // Initialize video sequence and slide synchronization
  function initVideoSequence() {
    const video = document.getElementById("phoneVideo");
    const slides = document.querySelectorAll(".slide");
    const videoSources = Array.from(video.querySelectorAll("source")).map(
      (src) => src.src
    );
    let currentVideoIndex = 0;
    let isPlaying = false;

    // Hide all slides except the first one
    slides.forEach((slide, index) => {
      if (index !== 0) {
        slide.style.opacity = "0";
      } else {
        slide.style.opacity = "1";
      }
    });

    // Function to play next video in sequence
    function playNextVideo() {
      if (!isPlaying) return;

      // Update slide visibility
      slides.forEach((slide, index) => {
        slide.style.transition = "opacity 0.5s ease-in-out";
        slide.style.opacity = index === currentVideoIndex ? "1" : "0";
      });

      // Set the video source
      if (video.canPlayType("video/webm")) {
        video.src = videoSources[currentVideoIndex];
        video.load();
        video.play().catch((e) => console.error("Error playing video:", e));
      }

      // Update index for next video
      currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    }

    // When a video ends, play the next one
    video.addEventListener("ended", playNextVideo);

    // Start the sequence
    isPlaying = true;
    playNextVideo();

    // Pause/play on hover
    const phoneOverlay = document.querySelector(".phone-overlay");
    if (phoneOverlay) {
      phoneOverlay.addEventListener("mouseenter", () => {
        isPlaying = false;
        video.pause();
      });

      phoneOverlay.addEventListener("mouseleave", () => {
        isPlaying = true;
        video.play().catch((e) => console.error("Error resuming video:", e));
      });
    }
  }

  // Initialize video sequence when the page loads
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // Call after a short delay to ensure the video element is ready
    setTimeout(initVideoSequence, 1000);
  } else {
    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(initVideoSequence, 1000);
    });
  }

  // Initialize video controls after a small delay to ensure DOM is ready
  setTimeout(() => {
    setupVideoControls();

    // Log video elements for debugging
    const videoAr = document.querySelector(".timeline-video-ar");
    const videoEn = document.querySelector(".timeline-video-en");
    console.log("Arabic video element:", videoAr);
    console.log("English video element:", videoEn);

    // Log video sources
    if (videoAr) {
      console.log("Arabic video source:", videoAr.querySelector("source")?.src);
      videoAr.load();
    }
    if (videoEn) {
      console.log(
        "English video source:",
        videoEn.querySelector("source")?.src
      );
      videoEn.load();
    }
  }, 100);

  // Toggle menu on checkbox change
  menuToggle.addEventListener("change", function () {
    if (!isMobileView()) return;
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    const isClickInsideNavbar = e.target.closest(".navbar");
    const isClickOnMenuToggle =
      e.target === menuToggle || menuToggle.contains(e.target);

    if (!isClickInsideNavbar && !isClickOnMenuToggle && menuToggle.checked) {
      menuToggle.checked = false;
      toggleMenu();
    }
  });

  // Prevent event propagation on menu content
  navLinks.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Handle scroll for header
  const handleScroll = () => {
    const scrolled = window.scrollY > 50;
    header.classList.toggle("scrolled", scrolled);

    // Close menu on scroll
    if (menuToggle.checked) {
      menuToggle.checked = false;
      document.body.style.overflow = "";
    }
  };

  // Add scroll listener with debounce
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleScroll, 10);
  });

  // Initial scroll check
  handleScroll();

  // Close menu on window resize
  const handleResize = () => {
    if (window.innerWidth > 768 && menuToggle.checked) {
      menuToggle.checked = false;
      document.body.style.overflow = "";
    }
    initMenu();
  };

  window.addEventListener("resize", handleResize);

  // Render about features list
  function renderAboutFeatures(lang) {
    const aboutList = document.querySelector(".about-list");
    if (!aboutList) return;

    // Clear existing list items
    aboutList.innerHTML = "";

    // Get features for current language
    const features = translations[lang]?.aboutFeatures || [];

    // Create and append new list items
    features.forEach((feature) => {
      const li = document.createElement("li");
      li.className = "about-item";
      li.innerHTML = `
        <span class="check-badge"><i class="fas ${feature.icon}"></i></span>
        ${feature.text}
      `;
      aboutList.appendChild(li);
    });
  }

  // Apply language function
  function applyLanguage(lang) {
    // Update text content
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === "INPUT" && element.type === "text") {
          element.placeholder = translations[lang][key];
        } else if (element.tagName === "INPUT" && element.type === "submit") {
          element.value = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });

    // Update about features
    renderAboutFeatures(lang);

    // Update services if the function exists
    if (window.renderServices) {
      window.renderServices(lang);
    }

    // Update HTML direction and lang attribute
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    // Dispatch language changed event
    const event = new CustomEvent("languageChanged", { detail: { lang } });
    document.dispatchEvent(event);

    // Update active state of language buttons
    if (langButtons) {
      langButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
        // Update button text based on the new language
        const langText = btn.querySelector(".lang-text");
        if (langText) {
          langText.textContent = lang === "ar" ? "EN" : "عربي";
        }
      });
    }
  }

  // Set up language switcher
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const newLang = currentLang === "ar" ? "en" : "ar";
      currentLang = newLang;
      document.cookie = `lang=${newLang};path=/;max-age=31536000`; // 1 year
      document.documentElement.lang = newLang; // Update HTML lang attribute
      applyLanguage(newLang);

      // Update the button text directly
      const langText = langToggle.querySelector(".lang-text");
      if (langText) {
        langText.textContent = newLang === "ar" ? "EN" : "عربي";
      }

      // Dispatch custom event for language change
      const langChangeEvent = new CustomEvent("langChange", {
        detail: { lang: newLang },
      });
      document.dispatchEvent(langChangeEvent);

      // Force a reflow to ensure the transition works
      document.body.offsetHeight;
    });
  }

  // Apply initial language
  applyLanguage(currentLang);
});

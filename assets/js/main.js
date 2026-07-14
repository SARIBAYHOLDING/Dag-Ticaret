// ==========================================================================
// DAĞ TİCARET - Main JavaScript Logic
// ==========================================================================

// Vehicle Database (Volta VS1 Electric Motor)
const vehicles = [
    {
        id: 1,
        title: "Volta VS1 (Yerle Bir Basık & 6 Akülü)",
        category: "motorcycle",
        year: 2025,
        km: "5.800",
        fuel: "Elektrik",
        transmission: "Otomatik / 2000W",
        price: "İletişime Geçin",
        color: "Beyaz",
        status: "available", // available, sold
        image: "assets/img/vehicles/volta_side.jpg",
        images: [
            "assets/img/vehicles/volta_side.jpg",
            "assets/img/vehicles/volta_front.jpg",
            "assets/img/vehicles/volta_rear.jpg",
            "assets/img/vehicles/volta_console.jpg",
            "assets/img/vehicles/volta_dash.jpg",
            "assets/img/vehicles/volta_rack.jpg"
        ],
        description: "2025 Model Volta VS1 Elektrikli Motosiklet. 5.800 km'dedir. 2000 Watt arka motoru sayesinde 50 km/h hıza ulaşabilir ve 50 km menzil sunar. Ekstra olarak 6 akülü olup yerle bir yani basıktır. Amerikan park modülü, uzaktan kumandalı RGB ampul, arka çakarlı sinyaller, angel eye far tasarımı, karbon yarasa aynalar, karbon kaplamaları ve arka katlanır plakası ile özenle modifiye edilmiştir. Kozmetik ve yürür olarak kusursuzdur.",
        location: "Mersin / Yenişehir"
    },
    {
        id: 2,
        title: "Citroën C3 1.4 16V (90 HP)",
        category: "car",
        year: 2004,
        km: "255.000",
        fuel: "Dizel",
        transmission: "Manuel / 90 HP",
        price: "340.000 TL",
        color: "Siyah",
        status: "available",
        image: "assets/img/vehicles/c3_3.jpg",
        images: [
            "assets/img/vehicles/c3_3.jpg",
            "assets/img/vehicles/c3_4.jpg",
            "assets/img/vehicles/c3_1.jpg",
            "assets/img/vehicles/c3_2.jpg"
        ],
        description: "2004 Model Citroën C3 1.4 16V 90 HP Dizel. 255.000 km'dedir. Alt takımları yeni yapılmıştır (4 günlük). Araba kupası düzgün ve diridir. Komple boyalıdır ve tavanda folyo bulunmaktadır. Enjektör bakımı yapılması gerekmektedir (arada sıra siyah duman atmaktadır). Detaylı bilgi almak için bizimle iletişime geçebilirsiniz.",
        location: "Mersin / Yenişehir"
    },
    {
        id: 3,
        title: "Motolux Nirvana Pro (80cc Yükseltilmiş)",
        category: "motorcycle",
        year: 2022,
        km: "14.000",
        fuel: "Benzin",
        transmission: "Otomatik / 80cc",
        price: "31.500 TL",
        color: "Beyaz",
        status: "available",
        image: "assets/img/vehicles/nirvana_1.jpg",
        images: [
            "assets/img/vehicles/nirvana_1.jpg",
            "assets/img/vehicles/nirvana_3.jpg",
            "assets/img/vehicles/nirvana_4.jpg",
            "assets/img/vehicles/nirvana_2.jpg"
        ],
        description: "2022 Model Motolux Nirvana Pro. Ruhsatta 50cc olarak geçmektedir, B sınıfı ehliyetle kullanılabilir ve MTV ile zorunlu trafik sigortasından muaftır. Fabrikasyon olarak 80cc silindir hacmine yükseltilmiştir. 14.000 km'dedir. Varyatör kayışı ve motor yağı yeni değişmiştir. Dijital ekranlı modeldir. Kozmetik ve mekanik durumu oldukça iyi durumdadır.",
        location: "Mersin / Yenişehir"
    },
    {
        id: 4,
        title: "Volkswagen Passat 1.6 TDI Trendline",
        category: "car",
        year: 2015,
        km: "244.000",
        fuel: "Dizel",
        transmission: "Otomatik / 120 HP",
        price: "1.070.000 TL",
        color: "Beyaz",
        status: "available",
        image: "assets/img/vehicles/passat_1.jpg",
        images: [
            "assets/img/vehicles/passat_1.jpg",
            "assets/img/vehicles/passat_2.jpg",
            "assets/img/vehicles/passat_3.jpg",
            "assets/img/vehicles/passat_4.jpg",
            "assets/img/vehicles/passat_5.jpg"
        ],
        description: "2015 Model Volkswagen Passat 1.6 TDI Trendline. 244.000 km'dedir. Ön üç parça değişendir. Ağır hasar kaydı kesinlikle yoktur, airbagler orijinaldir. Sadece çamurluk montajından dolayı podyenin birinin ucunda ufak bir işlem vardır. Şanzıman tüpü yeni yapılmış, şanzıman yağı değişmiştir ve tüm bakımları yeni tamamlanmıştır.",
        location: "Mersin / Yenişehir"
    },
    {
        id: 5,
        title: "Peugeot 207 1.6 HDi Allure",
        category: "car",
        year: 2012,
        km: "289.000",
        fuel: "Dizel",
        transmission: "Manuel / 92 HP",
        price: "530.000 TL",
        color: "Açık Mavi",
        status: "available",
        image: "assets/img/vehicles/peugeot_1.jpg",
        images: [
            "assets/img/vehicles/peugeot_1.jpg",
            "assets/img/vehicles/peugeot_2.jpg",
            "assets/img/vehicles/peugeot_3.jpg",
            "assets/img/vehicles/peugeot_4.jpg",
            "assets/img/vehicles/peugeot_5.jpg"
        ],
        description: "2012 Model Peugeot 207 Allure Paket. 289.000 km'dedir ve aktif olarak kullanılmaktadır. Sadece sol ön çamurluk boyalı olup hasar kaydı bulunmamaktadır. Tüm bakımları yeni yapılmış, son derece bakımlı ve temiz bir araçtır.",
        location: "Mersin / Yenişehir"
    },
    {
        id: 6,
        title: "Kuba Brilliant 50 Max (100cc Yükseltilmiş)",
        category: "motorcycle",
        year: 2023,
        km: "14.500",
        fuel: "Benzin",
        transmission: "Otomatik / 100cc",
        price: "35.000 TL",
        color: "Kırmızı / Siyah",
        status: "available",
        image: "assets/img/vehicles/kuba_1.jpg",
        images: [
            "assets/img/vehicles/kuba_1.jpg",
            "assets/img/vehicles/kuba_2.jpg",
            "assets/img/vehicles/kuba_3.jpg",
            "assets/img/vehicles/kuba_4.jpg"
        ],
        description: "2023 Model Kuba Brilliant 50 Max. 14.500 km'dedir. Tüm sıvı ve ağır bakımları yeni yapılmıştır. İhtiyaç nedeniyle satılıktır. Diğer 50cc motorlar gibi hantal değildir, 100cc silindir hacmine yükseltilmiştir, dolayısıyla 100cc gücünde gitmektedir. Çekişi, gidişi ve konforu oldukça iyidir. Kozmetik olarak temiz durumdadır. B sınıfı ehliyetle kullanılabilir, vergi ve sigortadan muaftır.",
        location: "Mersin / Yenişehir"
    },
    {
        id: 7,
        title: "Musatti Glamaro Max 125",
        category: "motorcycle",
        year: 2025,
        km: "1.800",
        fuel: "Benzin",
        transmission: "Otomatik / 125cc",
        price: "80.000 TL",
        color: "Mat Mavi",
        status: "available",
        image: "assets/img/vehicles/musatti_4.jpg",
        images: [
            "assets/img/vehicles/musatti_4.jpg",
            "assets/img/vehicles/musatti_1.jpg",
            "assets/img/vehicles/musatti_2.jpg",
            "assets/img/vehicles/musatti_3.jpg",
            "assets/img/vehicles/musatti_5.jpg"
        ],
        description: "2025 Model Musatti Glamaro Max 125. Sadece 1.800 km'dedir. Navigasyon, kamera, ekran yansıtma özellikli dijital gösterge paneline sahiptir. Anahtarsız çalıştırma (Keyless Go) aktiftir. Arka çantası ruhsata işlidir. Muayenesi 24.01.2028 tarihine kadar geçerlidir. Sıfır ayarında, son derece teknolojik, konforlu ve temiz bir motordur.",
        location: "Mersin / Yenişehir"
    }
];



// Active Filter States
let currentFilter = 'all';
let searchQuery = '';

// DOM Elements
const vehiclesGrid = document.getElementById('vehiclesGrid');
const filterPills = document.getElementById('filterPills');
const vehicleSearch = document.getElementById('vehicleSearch');
const noResults = document.getElementById('noResults');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const themeToggleBtn = document.getElementById('themeToggle');
const mobileNavToggle = document.getElementById('mobileNavToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const modal = document.getElementById('vehicleModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalBackdrop = document.getElementById('modalBackdrop');

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
    renderVehicles();
    setupTheme();
    setupMobileMenu();
    setupModalListeners();
    setupScrollEffects();
});

// Render Vehicles Gallery
function renderVehicles() {
    vehiclesGrid.innerHTML = '';
    
    // Filter & Search logic
    const filteredVehicles = vehicles.filter(vehicle => {
        const matchesCategory = currentFilter === 'all' || vehicle.category === currentFilter;
        const matchesSearch = vehicle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              vehicle.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              vehicle.fuel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              vehicle.year.toString().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filteredVehicles.length === 0) {
        vehiclesGrid.style.display = 'none';
        noResults.style.display = 'flex';
    } else {
        vehiclesGrid.style.display = 'grid';
        noResults.style.display = 'none';
        
        filteredVehicles.forEach(vehicle => {
            const card = document.createElement('div');
            card.className = 'vehicle-card card-glass';
            
            const statusText = vehicle.status === 'sold' ? 'Satıldı' : 'Satılık';
            const statusClass = vehicle.status === 'sold' ? 'sold' : 'available';
            
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${vehicle.image}" alt="${vehicle.title}" loading="lazy">
                    <span class="card-tag ${statusClass}">${statusText}</span>
                </div>
                <div class="card-details">
                    <div class="card-header-row">
                        <h3 class="card-title">${vehicle.title}</h3>
                    </div>
                    <div class="card-subtitle">
                        <i class="fa-solid fa-location-dot"></i> ${vehicle.location}
                    </div>
                    <div class="card-specs">
                        <div class="spec-item">
                            <i class="fa-solid fa-calendar"></i>
                            <span class="spec-val">${vehicle.year}</span>
                            <span class="spec-lbl">Model</span>
                        </div>
                        <div class="spec-item">
                            <i class="fa-solid fa-gauge-high"></i>
                            <span class="spec-val">${vehicle.km} km</span>
                            <span class="spec-lbl">Kilometre</span>
                        </div>
                        <div class="spec-item">
                            <i class="fa-solid fa-gears"></i>
                            <span class="spec-val">${vehicle.transmission.split(' ')[0]}</span>
                            <span class="spec-lbl">Vites</span>
                        </div>
                    </div>
                    <div class="card-header-row" style="margin-bottom: 1.5rem; align-items: center;">
                        <span class="card-price">${vehicle.price}</span>
                        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase;">${vehicle.fuel}</span>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-secondary" onclick="openDetails(${vehicle.id})">
                            <i class="fa-solid fa-circle-info"></i> Detaylar
                        </button>
                        <a href="https://wa.me/905538289445?text=Merhaba%20Arda%20Bey,%20${encodeURIComponent(vehicle.title)}%20ilanınız%20hakkında%20görüşmek%20istiyorum." 
                           target="_blank" 
                           class="btn btn-whatsapp" 
                           style="padding: 0.75rem 0.5rem; justify-content: center;">
                            <i class="fa-brands fa-whatsapp"></i> Whatsapp
                        </a>
                    </div>
                </div>
            `;
            vehiclesGrid.appendChild(card);
        });
    }
}

// Event Listeners for Filters & Search
filterPills.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        // Toggle Active Class
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        currentFilter = e.target.getAttribute('data-filter');
        renderVehicles();
    }
});

vehicleSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderVehicles();
});

resetFiltersBtn.addEventListener('click', () => {
    vehicleSearch.value = '';
    searchQuery = '';
    currentFilter = 'all';
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    renderVehicles();
});

// Modal Actions
window.openDetails = function(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (!vehicle) return;
    
    // Fill values
    document.getElementById('modalImg').src = vehicle.image;
    
    // Category mapping
    const categories = {
        'motorcycle': 'Motosiklet',
        'car': 'Otomobil'
    };
    const categoryText = categories[vehicle.category] || vehicle.category;
    
    document.getElementById('modalCategory').textContent = categoryText;
    document.getElementById('modalTitle').textContent = vehicle.title;
    document.getElementById('modalPrice').textContent = vehicle.price;
    document.getElementById('modalDesc').textContent = vehicle.description;
    
    document.getElementById('specYear').textContent = vehicle.year;
    document.getElementById('specKm').textContent = vehicle.km + " km";
    document.getElementById('specFuel').textContent = vehicle.fuel;
    document.getElementById('specTransmission').textContent = vehicle.transmission;
    document.getElementById('specColor').textContent = vehicle.color;
    document.getElementById('specBody').textContent = vehicle.body || categoryText;
    document.getElementById('specLocation').textContent = vehicle.location;
    
    // Status text & class
    const statusTextNode = document.getElementById('specStatus');
    statusTextNode.textContent = vehicle.status === 'sold' ? 'Satıldı' : 'Satılık';
    
    // Thumbnail Gallery
    const thumbContainer = document.getElementById('modalThumbnails');
    thumbContainer.innerHTML = '';
    
    if (vehicle.images && vehicle.images.length > 0) {
        vehicle.images.forEach((imgUrl, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgUrl;
            thumb.className = `modal-thumb-img${index === 0 ? ' active' : ''}`;
            thumb.alt = `Resim ${index + 1}`;
            
            thumb.addEventListener('click', () => {
                document.getElementById('modalImg').src = imgUrl;
                document.querySelectorAll('.modal-thumb-img').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            thumbContainer.appendChild(thumb);
        });
    }
    
    // Set WhatsApp Dynamic Link
    const waText = `Merhaba Arda Bey, ${vehicle.title} (${vehicle.year} model, ${vehicle.price}) ilanınız için bilgi almak istiyorum.`;
    document.getElementById('modalWhatsappBtn').href = `https://wa.me/905538289445?text=${encodeURIComponent(waText)}`;
    
    // Open Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
};

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function setupModalListeners() {
    modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    // Escape key press support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Light & Dark Theme Configuration
function setupTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    document.documentElement.className = savedTheme;
    
    themeToggleBtn.addEventListener('click', () => {
        let newTheme = 'dark-theme';
        if (document.documentElement.classList.contains('dark-theme')) {
            newTheme = 'light-theme';
        }
        
        document.documentElement.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });
}

// Mobile Menu Action
function setupMobileMenu() {
    mobileNavToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.contains('open');
        if (isOpen) {
            mobileDrawer.classList.remove('open');
            mobileNavToggle.querySelector('.menu-open-icon').style.display = 'block';
            mobileNavToggle.querySelector('.menu-close-icon').style.display = 'none';
        } else {
            mobileDrawer.classList.add('open');
            mobileNavToggle.querySelector('.menu-open-icon').style.display = 'none';
            mobileNavToggle.querySelector('.menu-close-icon').style.display = 'block';
        }
    });
    
    // Close Drawer when a link is clicked
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
            mobileNavToggle.querySelector('.menu-open-icon').style.display = 'block';
            mobileNavToggle.querySelector('.menu-close-icon').style.display = 'none';
        });
    });
}

// Active Nav highlight & Scroll effect
function setupScrollEffects() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        // Sticky Header shrink effect
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = 'none';
        }
        
        // Active spy highlights
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

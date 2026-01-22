// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Global variables
let cart = [];
let currentFilter = 'all';
let currentQuantity = 1;
let selectedSize = null;
let currentTheme = 'light';
let currentProductImages = [];
let currentImageIndex = 0;

// Sample products data
const sampleProducts = [
    {
        id: 1,
        name: 'JORT BAGGY WINGS',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-1.04.13-PM-2.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-1.04.13-PM-2.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-1.04.12-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-1.04.13-PM.jpeg'
        ],
        description: '▪️ Tela rígida<br>▪️ Color: azul con localizado intenso + ESTAMPA pre lavado<br>▪️ Corte unisex<br><br><small>*Los precios no incluyen IVA</small>',
        sizes: ['36', '38', '40', '42', '44', '46'],
        featured: true
    },
    {
        id: 2,
        name: 'JORT BAGGY TUPAC',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-8.45.41-AM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-8.45.41-AM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-8.45.42-AM-1.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-8.45.45-AM-1.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Material premium<br>▪️ Logo bordado de alta calidad<br>▪️ Ajuste regulable<br><br><small>*Los precios no incluyen IVA</small>',
        sizes: ['36', '38', '40', '42', '44', '46'],
        featured: true
    },
    {
        id: 3,
        name: 'JORT BAGGY GTA',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/12/IMG_5581-scaled.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/IMG_5581-scaled.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/IMG_5605-scaled.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/IMG_5594-scaled.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️Tela rígida<br>▪️diseño con dibujo LÁSER<br>▪️Color: NEGRO stone +localizado<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['42', '44', '46'],
        featured: true
    },
    {
        id: 4,
        name: 'JORT BAGGY ETERNAL',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-02-at-12.48.58-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-02-at-12.48.58-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-02-at-12.48.59-PM.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-02-at-12.48.59-PM.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Tela rigida<br>▪️Color: Matizado quebrado  oxido + localizado +BORDADO<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['36', '38', '40', '42', '44', '46'],
        featured: true
    },
      {
        id: 5,
        name: 'JORT BAGGY IRON',
        price: 54.999,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-5.00.06-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-5.00.06-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-5.00.07-PM.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-5.00.10-PM.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Tela rigida<br>▪️Color: Gris claro nevado + localizado suave + bigotes<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['38', '40', '42', '46'],
        featured: true
    },
     {
        id: 6,
        name: 'JORT BAGGY SNOW',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-4.31.05-PM-7-scaled.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-4.31.05-PM-7-scaled.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-4.31.05-PM-9-scaled.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-4.31.05-PM-3-scaled.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Tela rigida<br>▪️Color: matizado oxido suave+ RECORTES + desflecado + bolsillo CARGO<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['36', '38', '40', '42', '44', '46'],
        featured: true
    },
         {
        id: 7,
        name: 'JORT BAGGY STRYKEZ',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.53.58-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.53.58-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.53.59-PM.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.54.02-PM.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Tela rigida<br>▪️Color: matizado oxido suave+ recortes + BORDADO<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['36','44', '46'],
        featured: true
    },
             {
        id: 8,
        name: 'JORT BAGGY SQUAD',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.19.45-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.19.45-PM.jpegg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.19.44-PM-1.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.19.43-PM-1.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️Tela rigida<br>▪️Color: Color camuflado único + BORDADO (temático)<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['36','44', '46'],
        featured: true
    },
     {
        id: 9,
        name: 'JORT BAGGY SIRAX',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.27.18-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.27.18-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.27.18-PM-1.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.27.19-PM-2.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Tela rigida<br>▪️Color: matizado oxido suave+ localizado+bigotes<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['36','44', '46'],
        featured: true
    },
    {
        id: 10,
        name: 'JORT BAGGY AUTHENTIC',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.16.45-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.16.45-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.16.44-PM.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.16.43-PM.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️Tela rigida<br>▪️Color: gris oscuro + localizado+ BORDADO<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['38', '40', '42', '44', '46'],
        featured: true
    },
    
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadProducts();
    setupEventListeners();
    loadCartFromStorage();
    
    // Load theme from storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').classList.add('active');
    }
    
    // Set initial active state for "Todos" button
    const todosBtn = document.querySelector('[data-filter="all"]');
    if (todosBtn) {
        todosBtn.classList.add('active');
    }
}

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterProducts(this.dataset.filter);
            updateFilterButtons(this);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchProducts(this.value);
        });
    }

    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }

    // Size selector
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectSize(this);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close modal when clicking outside
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

function loadProducts() {
    products = sampleProducts;
    renderProducts(products);
}

function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToRender.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        grid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105';
    
    // Determinar badge
    let badge = '';
    if (product.featured) {
        badge = '<span class="product-badge badge-new">NUEVO</span>';
    } else if (Math.random() > 0.7) {
        badge = '<span class="product-badge badge-popular">POPULAR</span>';
    } else if (Math.random() > 0.5) {
        badge = '<span class="product-badge badge-sale">OFERTA</span>';
    }
    
    card.innerHTML = `
        <div class="relative">
            ${badge}
            <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">${product.name}</h3>
            <p class="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">$${product.price.toLocaleString('es-AR')}</p>
            <button onclick="openProductModal(${product.id})" class="w-full bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Ver Detalles
            </button>
        </div>
    `;
    return card;
}

function filterProducts(category) {
    currentFilter = category;
    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }

    // Apply current search if exists
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );
    }

    renderProducts(filteredProducts);
}

function searchProducts(searchTerm) {
    let filteredProducts = products;

    // Apply category filter if active
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === currentFilter);
    }

    // Apply search filter
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    renderProducts(filteredProducts);
}

function sortProducts(sortType) {
    let sortedProducts = [...products];

    switch(sortType) {
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
    }

    products = sortedProducts;
    
    // Re-apply current filters
    const searchInput = document.getElementById('searchInput');
    if (currentFilter !== 'all' || (searchInput && searchInput.value)) {
        filterProducts(currentFilter);
    } else {
        renderProducts(products);
    }
}

function setupChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendButton = document.getElementById('sendChatbotMessage');
    const chatbotMessages = document.getElementById('chatbotMessages');

    if (!chatbotToggle || !chatbotWindow) return;

    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.toggle('active');
    });

    if (closeChatbot) {
        closeChatbot.addEventListener('click', function() {
            chatbotWindow.classList.remove('active');
        });
    }

    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'user-message';
        userMessageDiv.textContent = message;
        chatbotMessages.appendChild(userMessageDiv);

        // Clear input
        chatbotInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'bot-message';
            botMessageDiv.innerHTML = botResponse;
            chatbotMessages.appendChild(botMessageDiv);
            
            // Scroll to bottom
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 1000);
    }

    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }

    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Respuestas predefinidas
    if (lowerMessage.includes('hola') || lowerMessage.includes('hi')) {
        return '¡Hola! 👋 ¿En qué puedo ayudarte?<br><br>• Productos disponibles<br>• Tallas y colores<br>• Envíos y pagos<br>• Cuidados de prendas';
    } else if (lowerMessage.includes('precio') || lowerMessage.includes('cuanto cuesta')) {
        return 'Nuestros precios varían según el modelo:<br><br>• Jorts: $30.500 - $34.000<br>• Gorras: $25.000<br><br>¿Querés saber el precio de algún producto específico?';
    } else if (lowerMessage.includes('talla') || lowerMessage.includes('talle')) {
        return 'Contamos con tallas: 36, 38, 40, 42, 44, 46<br><br>Algunos modelos tienen disponibilidad limitada. ¿Qué talla buscás?';
    } else if (lowerMessage.includes('envío') || lowerMessage.includes('envio')) {
        return 'Hacemos envíos a todo Argentina:<br><br>• Neuquén: $2.500<br>• Resto del país: $3.500<br>• Entrega 24-48hs';
    } else if (lowerMessage.includes('pago') || lowerMessage.includes('pagar')) {
        return 'Métodos de pago:<br><br>• Transferencia bancaria<br>• Mercado Pago<br>• Efectivo (local)<br><br>¿Cuál preferís?';
    } else if (lowerMessage.includes('material') || lowerMessage.includes('tela')) {
        return 'Nuestros jorts están confeccionados con:<br><br>• Tela rígida de alta calidad<br>• Diseños únicos con bordados<br>• Corte unisex<br>• Lavado especial';
    } else {
        return 'Entendido. ¿Podrías darme más detalles?<br><br>Puedo ayudarte con:<br>• Productos y precios<br>• Tallas disponibles<br>• Envíos y pagos<br>• Cuidados de las prendas';
    }
}

function updateFilterButtons(activeBtn) {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    activeBtn.classList.add('active');
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Set product images
    currentProductImages = product.images || [product.image];
    currentImageIndex = 0;

    // Update modal content
    document.getElementById('modalImage').src = currentProductImages[0];
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = `$${product.price}`;
    document.getElementById('modalDescription').innerHTML = product.description;

    // Create thumbnails
    createThumbnails(currentProductImages);

    // Update size selector
    const sizeSelector = document.getElementById('sizeSelector');
    sizeSelector.innerHTML = '';
    product.sizes.forEach(size => {
        const btn = document.createElement('button');
        btn.className = 'size-btn';
        btn.textContent = size;
        btn.onclick = () => selectSize(btn);
        sizeSelector.appendChild(btn);
    });

    // Reset quantity and selected size
    currentQuantity = 1;
    selectedSize = null;
    document.getElementById('quantity').textContent = '1';

    // Show modal
    document.getElementById('productModal').classList.add('active');
}

function createThumbnails(images) {
    const container = document.getElementById('thumbnailContainer');
    container.innerHTML = '';

    images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Thumbnail ${index + 1}`;
        img.onclick = (e) => {
            e.stopPropagation();
            selectImage(index);
        };
        
        thumbnail.appendChild(img);
        container.appendChild(thumbnail);
    });
}

function selectImage(index) {
    currentImageIndex = index;
    document.getElementById('modalImage').src = currentProductImages[index];
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function openZoomModal() {
    const modal = document.getElementById('zoomModal');
    document.getElementById('zoomImage').src = currentProductImages[currentImageIndex];
    modal.classList.add('active');
}

function closeZoomModal() {
    document.getElementById('zoomModal').classList.remove('active');
}

function navigateZoom(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = currentProductImages.length - 1;
    } else if (currentImageIndex >= currentProductImages.length) {
        currentImageIndex = 0;
    }
    
    document.getElementById('zoomImage').src = currentProductImages[currentImageIndex];
    selectImage(currentImageIndex);
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedSize = btn.dataset.size;
}

function increaseQuantity() {
    currentQuantity++;
    document.getElementById('quantity').textContent = currentQuantity;
}

function decreaseQuantity() {
    if (currentQuantity > 1) {
        currentQuantity--;
        document.getElementById('quantity').textContent = currentQuantity;
    }
}

function addToCart() {
    if (!selectedSize) {
        showNotification('Por favor selecciona una talla', 'error');
        return;
    }

    const modalTitle = document.getElementById('modalTitle').textContent;
    const modalPrice = document.getElementById('modalPrice').textContent;
    const modalImage = document.getElementById('modalImage').src;

    const cartItem = {
        id: Date.now(),
        name: modalTitle,
        price: parseFloat(modalPrice.replace('$', '')),
        image: modalImage,
        size: selectedSize,
        quantity: currentQuantity
    };

    cart.push(cartItem);
    updateCartUI();
    saveCartToStorage();
    closeModal();
    showNotification('Producto agregado al carrito', 'success');

    // Add bounce animation to cart icon
    document.querySelector('.fa-shopping-cart').parentElement.classList.add('cart-bounce');
    setTimeout(() => {
        document.querySelector('.fa-shopping-cart').parentElement.classList.remove('cart-bounce');
    }, 500);
}

function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = {
        id: Date.now(),
        name: product.name,
        price: product.price,
        image: product.image,
        size: product.sizes[0], // Default to first size
        quantity: 1
    };

    cart.push(cartItem);
    updateCartUI();
    saveCartToStorage();
    showNotification('Producto agregado al carrito', 'success');

    // Add bounce animation to cart icon
    document.querySelector('.fa-shopping-cart').parentElement.classList.add('cart-bounce');
    setTimeout(() => {
        document.querySelector('.fa-shopping-cart').parentElement.classList.remove('cart-bounce');
    }, 500);
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    // Clear cart items
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="text-center" style="color: var(--text-secondary);">Tu carrito está vacío</p>`;
        cartCount.textContent = '0';
        cartTotal.textContent = '$0';
        return;
    }

    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'flex items-center gap-4 p-4 rounded-lg';
        cartItemElement.style.backgroundColor = 'var(--bg-light)';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
            <div class="flex-1">
                <h4 class="font-semibold" style="color: var(--text-primary);">${item.name}</h4>
                <p class="text-sm" style="color: var(--text-secondary);">Talla: ${item.size} | Cantidad: ${item.quantity}</p>
                <p class="font-bold" style="color: var(--text-primary);">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItemElement);

        total += item.price * item.quantity;
        itemCount += item.quantity;
    });

    cartCount.textContent = itemCount;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
    saveCartToStorage();
    showNotification('Producto eliminado del carrito', 'success');
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('translate-x-full');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

function loadMoreProducts() {
    // Simulate loading more products
    showNotification('Cargando más productos...', 'success');
    
    // Add some animation
    const grid = document.getElementById('productsGrid');
    grid.style.opacity = '0.5';
    
    setTimeout(() => {
        grid.style.opacity = '1';
        showNotification('Todos los productos están cargados', 'success');
    }, 1000);
}

function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Simulate subscription
    showNotification('¡Gracias por suscribirte! Revisa tu correo para confirmar.', 'success');
    event.target.reset();
}

function sendContactForm(event) {
    event.preventDefault();
    
    // Simulate form submission
    showNotification('Mensaje enviado correctamente. Te responderemos pronto.', 'success');
    event.target.reset();
}

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    const icon = notification.querySelector('i');
    
    // Update notification content
    notificationText.textContent = message;
    
    // Update icon and class based on type
    notification.className = 'notification';
    if (type === 'success') {
        notification.classList.add('success');
        icon.className = 'fas fa-check-circle text-green-500';
    } else if (type === 'error') {
        notification.classList.add('error');
        icon.className = 'fas fa-exclamation-circle text-red-500';
    }
    
    // Show notification
    notification.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function saveCartToStorage() {
    localStorage.setItem('lussinkz_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('lussinkz_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

function loadThemeFromStorage() {
    const savedTheme = localStorage.getItem('lussinkz_theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        applyTheme(currentTheme);
    }
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('active');
    
    // Save theme preference
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Search toggle functionality
function toggleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.focus();
        searchInput.select();
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-video');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    setupLazyLoading();
    
    // Add smooth reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });
});

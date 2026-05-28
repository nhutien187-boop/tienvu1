// News data
const newsData = [
    {
        id: 1,
        title: "Cách Uống Thuốc Đúng Cách Để Tăng Hiệu Quả Điều Trị",
        excerpt: "Uống thuốc đúng thời gian và đúng cách là yếu tố quan trọng để đạt được hiệu quả cao nhất. Tìm hiểu những quy tắc vàng trong sử dụng thuốc.",
        category: "medication",
        date: "2024-05-28",
        author: "Dr. Nguyễn Văn A",
        avatar: "N",
        icon: "💊",
        gradient: "linear-gradient(135deg, #FF6B6B, #FF8E72)",
        featured: true,
        content: "Uống thuốc đúng thời gian và đúng cách là yếu tố quan trọng để đạt được hiệu quả cao nhất..."
    },
    {
        id: 2,
        title: "5 Thói Quen Hàng Ngày Giúp Cải Thiện Sức Khỏe Tim Mạch",
        excerpt: "Tim mạch là một trong những cơ quan quan trọng nhất của cơ thể. Hãy tìm hiểu 5 thói quen đơn giản để bảo vệ sức khỏe tim mạch.",
        category: "health",
        date: "2024-05-27",
        author: "Dr. Trần Thị B",
        avatar: "T",
        icon: "❤️",
        gradient: "linear-gradient(135deg, #667eea, #764ba2)",
        featured: false,
        content: "Tim mạch là một trong những cơ quan quan trọng nhất..."
    },
    {
        id: 3,
        title: "Các Tác Dụng Phụ Thường Gặp Và Cách Xử Lý",
        excerpt: "Hầu hết mọi loại thuốc đều có khả năng gây ra tác dụng phụ. Biết cách nhận diện và xử lý các tác dụng phụ này rất quan trọng.",
        category: "medication",
        date: "2024-05-26",
        author: "Dr. Lê Văn C",
        avatar: "L",
        featured: false,
        icon: "⚠️",
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
        content: "Hầu hết mọi loại thuốc đều có khả năng gây ra tác dụng phụ..."
    },
    {
        id: 4,
        title: "Mẹo Nhớ Giờ Uống Thuốc Mà Không Bao Giờ Quên",
        excerpt: "Quên uống thuốc là một vấn đề phổ biến. Khám phá những mẹo thực tế để giúp bạn luôn nhớ uống thuốc đúng giờ.",
        category: "tips",
        date: "2024-05-25",
        author: "Health Coach Minh",
        avatar: "M",
        featured: false,
        icon: "⏰",
        gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
        content: "Quên uống thuốc là một vấn đề phổ biến..."
    },
    {
        id: 5,
        title: "Giáo Dục Bệnh Nhân: Hiểu Rõ Bệnh Của Mình Là Chìa Khóa",
        excerpt: "Bệnh nhân hiểu biết về bệnh của mình sẽ có khả năng quản lý và điều trị tốt hơn. Tìm hiểu tầm quan trọng của giáo dục bệnh nhân.",
        category: "health",
        date: "2024-05-24",
        author: "Dr. Phạm Văn D",
        avatar: "P",
        featured: false,
        icon: "📚",
        gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
        content: "Bệnh nhân hiểu biết về bệnh của mình..."
    },
    {
        id: 6,
        title: "Những Phát Hiện Mới Về Hiệu Quả Của Liệu Pháp Tự Nhiên",
        excerpt: "Nghiên cứu mới công bố những kết quả đáng khích lệ về tác dụng của các liệu pháp tự nhiên trong điều trị một số bệnh.",
        category: "research",
        date: "2024-05-23",
        author: "Dr. Võ Thị E",
        avatar: "V",
        featured: false,
        icon: "🔬",
        gradient: "linear-gradient(135deg, #fa709a, #fee140)",
        content: "Nghiên cứu mới công bố..."
    },
    {
        id: 7,
        title: "Lợi Ích Của Việc Uống Nước Đủ Lượng Trong Ngày",
        excerpt: "Nước là chất cần thiết cho sức khỏe. Tìm hiểu lợi ích của việc uống đủ nước và lượng nước bạn nên uống hàng ngày.",
        category: "health",
        date: "2024-05-22",
        author: "Nutritionist Linh",
        avatar: "L",
        featured: false,
        icon: "💧",
        gradient: "linear-gradient(135deg, #30cfd0, #330867)",
        content: "Nước là chất cần thiết cho sức khỏe..."
    },
    {
        id: 8,
        title: "Công Nghệ AI Hỗ Trợ Nhắc Nhở Uống Thuốc - Tương Lai Của Y Tế",
        excerpt: "Ứng dụng công nghệ AI và mobile apps như MedReminder đang thay đổi cách chúng ta quản lý sức khỏe. Khám phá những lợi ích này.",
        category: "research",
        date: "2024-05-21",
        author: "Tech Health Writer",
        avatar: "T",
        featured: false,
        icon: "🤖",
        gradient: "linear-gradient(135deg, #a8edea, #fed6e3)",
        content: "Ứng dụng công nghệ AI..."
    },
    {
        id: 9,
        title: "Bổ Sung Vitamin D: Điều Bạn Cần Biết",
        excerpt: "Vitamin D đóng vai trò quan trọng trong sức khỏe xương. Tìm hiểu cách bổ sung vitamin D đúng cách cho cơ thể.",
        category: "tips",
        date: "2024-05-20",
        author: "Dr. Ngô Văn F",
        avatar: "N",
        featured: false,
        icon: "☀️",
        gradient: "linear-gradient(135deg, #ff9a56, #ff6a88)",
        content: "Vitamin D đóng vai trò quan trọng..."
    },
    {
        id: 10,
        title: "Quản Lý Bệnh Mạn Tính Hiệu Quả Với MedReminder",
        excerpt: "Bệnh mạn tính đòi hỏi sự tuân thủ chặt chẽ. Tìm hiểu cách sử dụng các công cụ kỹ thuật số để quản lý bệnh hiệu quả hơn.",
        category: "medication",
        date: "2024-05-19",
        author: "Healthcare Manager",
        avatar: "H",
        featured: false,
        icon: "📋",
        gradient: "linear-gradient(135deg, #667eea, #764ba2)",
        content: "Bệnh mạn tính đòi hỏi..."
    }
];

let currentCategory = 'all';
let currentSearchQuery = '';
let filteredNews = [...newsData];

// Initialize
$(document).ready(function() {
    renderFeaturedArticle();
    renderNewsGrid();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Category filter
    $('.btn-category').on('click', function() {
        $('.btn-category').removeClass('active');
        $(this).addClass('active');
        currentCategory = $(this).data('category');
        filterAndRender();
    });

    // Search
    $('#searchInput').on('keyup', function() {
        currentSearchQuery = $(this).val().toLowerCase();
        filterAndRender();
    });
}

// Filter news
function filterNews() {
    let filtered = newsData;

    // Category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }

    // Search filter
    if (currentSearchQuery) {
        filtered = filtered.filter(item => 
            item.title.toLowerCase().includes(currentSearchQuery) ||
            item.excerpt.toLowerCase().includes(currentSearchQuery) ||
            item.author.toLowerCase().includes(currentSearchQuery)
        );
    }

    return filtered;
}

// Render featured article
function renderFeaturedArticle() {
    const featured = newsData.find(item => item.featured);
    
    if (!featured) return;

    const html = `
        <div class="featured-article">
            <div class="featured-article-image" style="background: ${featured.gradient}; display: flex; align-items: center; justify-content: center; font-size: 5rem;">
                ${featured.icon}
            </div>
            <div class="featured-article-content">
                <div class="featured-article-label">
                    <i class="bi bi-star-fill"></i>
                    Bài Viết Nổi Bật
                </div>
                <h2 class="featured-article-title">${featured.title}</h2>
                <p class="featured-article-desc">${featured.excerpt}</p>
                <div class="featured-article-meta">
                    <div class="featured-article-author">
                        <div class="featured-article-avatar">${featured.avatar}</div>
                        <div class="featured-article-author-info">
                            <strong>${featured.author}</strong>
                            <small>${formatDate(featured.date)}</small>
                        </div>
                    </div>
                    <button class="btn-read-more" onclick="viewArticle(${featured.id})">
                        Đọc Tiếp <i class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    $('#featuredContainer').html(html);
}

// Render news grid
function renderNewsGrid() {
    filteredNews = filterNews();

    if (filteredNews.length === 0) {
        $('#newsContainer').html('');
        $('#emptyState').show();
        return;
    }

    $('#emptyState').hide();

    // Get non-featured articles
    const nonFeatured = filteredNews.filter(item => !item.featured);

    const html = nonFeatured.map(article => `
        <div class="news-card" onclick="viewArticle(${article.id})">
            <div class="news-card-image" style="background: ${article.gradient}; display: flex; align-items: center; justify-content: center; font-size: 3rem;">
                ${article.icon}
                <span class="news-card-badge">${getCategoryLabel(article.category)}</span>
            </div>
            <div class="news-card-body">
                <span class="news-card-category">
                    <i class="bi bi-tag"></i>
                    ${getCategoryLabel(article.category)}
                </span>
                <h3 class="news-card-title">${article.title}</h3>
                <p class="news-card-excerpt">${article.excerpt}</p>
                <div class="news-card-footer">
                    <div class="news-card-date">
                        <i class="bi bi-calendar-event"></i>
                        ${formatDate(article.date)}
                    </div>
                    <a href="#" class="news-card-link" onclick="event.preventDefault(); viewArticle(${article.id})">
                        Xem <i class="bi bi-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    $('#newsContainer').html(html);
}

// Filter and render
function filterAndRender() {
    renderFeaturedArticle();
    renderNewsGrid();
}

// Get category label
function getCategoryLabel(category) {
    const labels = {
        'all': 'Tất cả',
        'health': 'Sức khỏe',
        'medication': 'Thuốc',
        'tips': 'Mẹo',
        'research': 'Nghiên cứu'
    };
    return labels[category] || category;
}

// Format date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = now - date;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hôm nay';
    if (diffDays === 1) return 'Hôm qua';
    if (diffDays < 7) return `${diffDays} ngày trước`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} tuần trước`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} tháng trước`;
    
    return date.toLocaleDateString('vi-VN');
}

// View article
function viewArticle(id) {
    const article = newsData.find(item => item.id === id);
    if (!article) return;

    // Create alert with full article content
    alert(`${article.title}\n\nTác giả: ${article.author}\nNgày: ${formatDate(article.date)}\n\n${article.content}`);
}

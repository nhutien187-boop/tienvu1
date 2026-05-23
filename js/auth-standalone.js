const STORAGE_KEY = 'medreminder_standalone_users';
const SESSION_KEY = 'medreminder_standalone_current_user';

const DEFAULT_ADMIN = {
    id: 'admin_default',
    name: 'Admin',
    email: 'admin@medreminder.com',
    password: 'Admin123',
    role: 'admin'
};

function getUsers() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return [];
        }
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function setCurrentUser(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

function getCurrentUser() {
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        if (!raw) {
            return null;
        }
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

function showAlert(message, type = 'danger') {
    const box = $('#alertBox');
    box.removeClass('hidden alert-danger alert-success');
    box.addClass(type === 'success' ? 'alert-success' : 'alert-danger');
    box.text(message);
}

function clearAlert() {
    $('#alertBox').addClass('hidden').removeClass('alert-danger alert-success').text('');
}

function clearSession() {
    localStorage.removeItem(SESSION_KEY);
    $('#sessionNotice').addClass('hidden').empty();
}

function renderSessionNotice(currentUser) {
    $('#sessionNotice')
        .removeClass('hidden')
        .html(`
            <strong>Thông báo:</strong> Bạn đang đăng nhập với <strong>${currentUser.email}</strong> (${currentUser.role}).
            <div class="mt-2">
                <button type="button" id="continueSessionBtn" class="btn btn-primary btn-sm">Tiếp tục</button>
                <button type="button" id="logoutSessionBtn" class="btn btn-outline-secondary btn-sm ms-2">Đăng xuất</button>
            </div>
        `);

    $('#continueSessionBtn').on('click', function () {
        redirectAfterLogin(currentUser.role || 'user');
    });

    $('#logoutSessionBtn').on('click', function () {
        clearSession();
        showAlert('Đã đăng xuất. Bạn có thể đăng nhập lại.', 'success');
    });
}

function switchPanel(panel) {
    clearAlert();
    $('#loginPanel').toggleClass('hidden', panel !== 'login');
    $('#registerPanel').toggleClass('hidden', panel !== 'register');
    $('#tabLogin').toggleClass('active', panel === 'login');
    $('#tabRegister').toggleClass('active', panel === 'register');

    if (panel === 'login') {
        $('#loginForm')[0].reset();
    } else {
        $('#registerForm')[0].reset();
    }
}

function redirectAfterLogin(role) {
    window.location.href = role === 'admin' ? 'admin.html' : 'index.html';
}

function authenticateLogin(email, password) {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return DEFAULT_ADMIN;
    }

    const users = getUsers();
    return users.find(item => item.email === email && item.password === password) || null;
}

$('#tabLogin').on('click', function () {
    switchPanel('login');
});

$('#tabRegister').on('click', function () {
    switchPanel('register');
});

$('.toggle-password').on('click', function () {
    const targetId = $(this).data('target');
    const input = $('#' + targetId);
    const icon = $(this).find('i');

    const isHidden = input.attr('type') === 'password';
    input.attr('type', isHidden ? 'text' : 'password');
    icon.toggleClass('bi-eye', !isHidden);
    icon.toggleClass('bi-eye-slash', isHidden);
});

$('#loginForm').on('submit', function (event) {
    event.preventDefault();
    clearAlert();

    const email = $('#loginEmail').val().trim();
    const password = $('#loginPassword').val();

    if (!email || !password) {
        showAlert('Vui lòng nhập đầy đủ email và mật khẩu.');
        return;
    }

    const user = authenticateLogin(email, password);

    if (!user) {
        showAlert('Email hoặc mật khẩu không đúng.');
        return;
    }

    setCurrentUser(user);
    showAlert('Đăng nhập thành công!', 'success');
    setTimeout(() => redirectAfterLogin(user.role || 'user'), 500);
});

$('#registerForm').on('submit', function (event) {
    event.preventDefault();
    clearAlert();

    const name = $('#registerName').val().trim();
    const email = $('#registerEmail').val().trim();
    const password = $('#registerPassword').val();
    const confirmPassword = $('#registerConfirmPassword').val();

    if (!name || !email || !password || !confirmPassword) {
        showAlert('Vui lòng nhập đầy đủ thông tin.');
        return;
    }

    if (password.length < 6) {
        showAlert('Mật khẩu phải có ít nhất 6 ký tự.');
        return;
    }

    if (password !== confirmPassword) {
        showAlert('Mật khẩu nhập lại không khớp.');
        return;
    }

    if (email === DEFAULT_ADMIN.email) {
        showAlert('Email admin đã được giữ riêng, vui lòng dùng email người dùng khác.');
        return;
    }

    const users = getUsers();
    const exists = users.some(item => item.email === email);

    if (exists) {
        showAlert('Email này đã tồn tại. Vui lòng dùng email khác.');
        return;
    }

    const newUser = {
        id: 'standalone_' + Date.now(),
        name,
        email,
        password,
        role: 'user'
    };

    users.push(newUser);
    saveUsers(users);
    setCurrentUser(newUser);
    showAlert('Đăng ký thành công! Đang chuyển về trang chủ...', 'success');
    setTimeout(() => redirectAfterLogin('user'), 500);
});

$(function () {
    const currentUser = getCurrentUser();

    if (currentUser) {
        renderSessionNotice(currentUser);
    }
});

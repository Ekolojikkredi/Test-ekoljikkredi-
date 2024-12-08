let currentPage = "kayit"; // Varsayılan sayfa

// Sayfaları göstermek için fonksiyon
function showPage(page) {
    currentPage = page;
    const pageContent = document.getElementById("page-content");

    switch (page) {
        case 'kayit':
            pageContent.innerHTML = `
                <h2>Okul Kaydı</h2>
                <form id="okulKaydiForm">
                    <label for="okulAdi">Okul Adı:</label>
                    <input type="text" id="okulAdi" required><br><br>

                    <label for="il">İl:</label>
                    <input type="text" id="il" required><br><br>

                    <label for="ilce">İlçe:</label>
                    <input type="text" id="ilce" required><br><br>

                    <label for="okulSifresi">Okul Şifresi:</label>
                    <input type="password" id="okulSifresi" required><br><br>

                    <button type="submit">Kaydet</button>
                </form>
                <h2>Öğrenci Kaydı</h2>
                <form id="ogrenciKaydiForm">
                    <label for="ad">Ad:</label>
                    <input type="text" id="ad" required><br><br>

                    <label for="soyad">Soyad:</label>
                    <input type="text" id="soyad" required><br><br>

                    <label for="okulNumarasi">Okul Numarası:</label>
                    <input type="text" id="okulNumarasi" required><br><br>

                    <label for="email">E-posta:</label>
                    <input type="email" id="email" required><br><br>

                    <label for="telefon">Telefon Numarası:</label>
                    <input type="tel" id="telefon" required><br><br>

                    <label for="sinif">Sınıf:</label>
                    <input type="text" id="sinif" required><br><br>

                    <button type="submit">Kaydet</button>
                </form>
            `;
            break;
        case 'veri-giris':
            pageContent.innerHTML = `
                <h2>Veri Girişi</h2>
                <form id="veriGirisForm">
                    <label for="atikhazirlayan">Atığı Kaydeden Kişi:</label>
                    <input type="text" id="atikhazirlayan" required><br><br>

                    <label for="atikturu">Atık Türü:</label>
                    <select id="atikturu" required>
                        <option value="plastik">Plastik</option>
                        <option value="kağıt">Kağıt</option>
                        <option value="cam">Cam</option>
                        <option value="metal">Metal</option>
                    </select><br><br>

                    <label for="atikkilo">Atık Kilogramı:</label>
                    <input type="number" id="atikkilo" required><br><br>

                    <label for="atigiGetiren">Atığı Getiren Kişinin Adı:</label>
                    <input type="text" id="atigiGetiren" required><br><br>

                    <label for="okulNumarasi">Okul Numarası:</label>
                    <input type="text" id="okulNumarasi" required><br><br>

                    <label for="sube">Şube:</label>
                    <input type="text" id="sube" required><br><br>

                    <button type="submit">Kaydet</button>
                </form>
            `;
            break;
        case 'veri-goruntuleme':
            pageContent.innerHTML = `
                <h2>Verilerinizi Görüntüleyin</h2>
                <form id="veriGoruntulemeForm">
                    <label for="mail">E-posta:</label>
                    <input type="email" id="mail" required><br><br>

                    <label for="ogrenciOkulNumarasi">Okul Numarası:</label>
                    <input type="text" id="ogrenciOkulNumarasi" required><br><br>

                    <button type="submit">Veri Görüntüle</button>
                </form>
            `;
            break;
        default:
            pageContent.innerHTML = `<p>Geçersiz sayfa.</p>`;
    }
}

// Okul kaydını işleme
document.getElementById('okulKaydiForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const okulAdi = document.getElementById('okulAdi').value;
    const il = document.getElementById('il').value;
    const ilce = document.getElementBy
const okulSifresi = document.getElementById('okulSifresi').value;

    // Okul bilgilerini localStorage'a kaydet
    localStorage.setItem('okulAdi', okulAdi);
    localStorage.setItem('il', il);
    localStorage.setItem('ilce', ilce);
    localStorage.setItem('okulSifresi', okulSifresi);

    alert('Okul Kaydı Başarıyla Yapıldı!');
});

// Öğrenci kaydını işleme
document.getElementById('ogrenciKaydiForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const ad = document.getElementById('ad').value;
    const soyad = document.getElementById('soyad').value;
    const okulNumarasi = document.getElementById('okulNumarasi').value;
    const email = document.getElementById('email').value;
    const telefon = document.getElementById('telefon').value;
    const sinif = document.getElementById('sinif').value;

    // Öğrenci bilgilerini localStorage'a kaydet
    localStorage.setItem('ad', ad);
    localStorage.setItem('soyad', soyad);
    localStorage.setItem('okulNumarasi', okulNumarasi);
    localStorage.setItem('email', email);
    localStorage.setItem('telefon', telefon);
    localStorage.setItem('sinif', sinif);

    alert('Öğrenci Kaydı Başarıyla Yapıldı!');
});

// Veri girişi formunu işleme
document.getElementById('veriGirisForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const atikhazirlayan = document.getElementById('atikhazirlayan').value;
    const atikturu = document.getElementById('atikturu').value;
    const atikkilo = document.getElementById('atikkilo').value;
    const atigiGetiren = document.getElementById('atigiGetiren').value;
    const okulNumarasi = document.getElementById('okulNumarasi').value;
    const sube = document.getElementById('sube').value;

    // Veri girişini localStorage'a kaydet
    const veriGiris = {
        atikhazirlayan,
        atikturu,
        atikkilo,
        atigiGetiren,
        okulNumarasi,
        sube
    };

    // Veri girişini okuldaki öğrenciye kaydetmek için localStorage'ı kullanabiliriz
    localStorage.setItem('veriGiris', JSON.stringify(veriGiris));

    alert('Veri Başarıyla Kaydedildi!');
});

// Veri görüntüleme formunu işleme
document.getElementById('veriGoruntulemeForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('mail').value;
    const okulNumarasi = document.getElementById('ogrenciOkulNumarasi').value;

    // Kullanıcı bilgilerini al
    const storedEmail = localStorage.getItem('email');
    const storedOkulNumarasi = localStorage.getItem('okulNumarasi');

    if (email === storedEmail && okulNumarasi === storedOkulNumarasi) {
        const veriGiris = JSON.parse(localStorage.getItem('veriGiris'));

        if (veriGiris) {
            alert(`Atık Türü: ${veriGiris.atikturu}\nAtık Kilogramı: ${veriGiris.atikkilo}\nAtığı Getiren Kişi: ${veriGiris.atigiGetiren}`);
        } else {
            alert('Veri bulunamadı.');
        }
    } else {
        alert('E-posta veya okul numarası hatalı.');
    }
});

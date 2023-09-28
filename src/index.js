const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const NavLink=document.querySelectorAll('nav a')
console.log(NavLink)
NavLink.forEach((link,index) =>{
  link.className="italic";
  link.textContent=siteContent.nav[`nav-item-${index+1}`];

})
//const NavLink1=Object.values(siteContent.nav); 

const logoElement=document.getElementById('logo-img');
logoElement.setAttribute("src", siteContent["images"]["logo-img"]);

const titleElement=document.querySelector(".cta-text h1");
titleElement.textContent=siteContent.cta.h1;

const buttonElement=document.querySelector(".cta-text button");
buttonElement.textContent=siteContent.cta.button;

const ctaElement=document.getElementById('cta-img');
ctaElement.setAttribute("src",siteContent["images"]["cta-img"]);

const hList=document.querySelectorAll('.text-content h4');
const pList=document.querySelectorAll('.text-content p');

hList[0].textContent=siteContent['ana-içerik']['özellikler-h4'];
pList[0].textContent=siteContent['ana-içerik']['özellikler-içerik'];

hList[1].textContent=siteContent['ana-içerik']['hakkımızda-h4'];
pList[1].textContent=siteContent['ana-içerik']['hakkımızda-içerik'];

hList[2].textContent=siteContent['ana-içerik']['servisler-h4'];
pList[2].textContent=siteContent['ana-içerik']['servisler-içeriği'];

hList[3].textContent=siteContent['ana-içerik']['ürünler-h4'];
pList[3].textContent=siteContent['ana-içerik']['ürünler-içeriği'];

hList[4].textContent=siteContent['ana-içerik']['vizyon-h4'];
pList[4].textContent=siteContent['ana-içerik']['vizyon-içeriği'];

const midImage=document.getElementById('middle-img');
midImage.setAttribute('src',siteContent['images']['accent-img']);

const contactElement=document.querySelector('.contact h4')
contactElement.textContent=siteContent.iletisim['iletişim-h4']

const contactPList=document.querySelectorAll('.contact p')
contactPList[0].textContent=siteContent.iletisim.adres;
contactPList[1].textContent=siteContent.iletisim.telefon;
contactPList[2].textContent=siteContent.iletisim.email;

const footerElement=document.querySelector('footer a')
footerElement.textContent=siteContent.footer.copyright;

footerElement.className='bold';

//footerElement.classList.add('bold');
//footerElement.setAttribute('class','bold');

/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/cryptoModern/client_logo/syscoLogo.png';

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: 'Олимпмад',
      path: '#home',
      offset: '84',
    },
    {
      id: 2,
      label: 'Ивээн тэтгэгч',
      path: '#key-features',
      offset: '81',
    },
    {
      id: 5,
      label: 'Түгээмэл асуултууд',
      path: '#faqSection',
      offset: '81',
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import videoTheme from "../../assets/image/appCreative/experienceVideo.png";
import fiboCloud from "../../assets/image/appCreative/client_logo/1.png";
import featureIcon1 from 'common/assets/image/cryptoModern/white.png';
import featureIcon2 from 'common/assets/image/cryptoModern/limeLogo.png';
import featureIcon3 from 'common/assets/image/cryptoModern/nasha.webp';
import featureIcon4 from 'common/assets/image/cryptoModern/fibo-cloud.png';

export const event = {
  icon: fiboCloud,
  title: "Fibo Cloud",
  description:
    "Үүлэн  технологийн чиглэлээр дагнаж үйл ажиллагаа явуулдаг Монгол дахь цор ганц компани FIBO CLOUD.",
};

export const Features = [
  {
    id: 1,
    icon: featureIcon3,
    title: 'Nasha Tech LLC',
    description:
      'IInternet болон E-Commerce нь улс үндэстэн болон байршлаас үл хамааран бүгдэд адил боломжийг олгодог бөгөөд энэ боломжоо алдалгүй ашиглахад бид танд тусална.',
  },
  {
    id: 2,
    icon: featureIcon4,
    title: 'Fibo Cloud',
    description:
      'Үүлэн технологийн чиглэлээр дагнаж үйл ажиллагаа явуулдаг Монгол дахь цор ганц компани FIBO CLOUD.',
  },
  
];

export const Top = [
  {
    id: 1,
    icon: featureIcon1,
    title: 'Call Pro',
    description:
      "КоллПро ХХК нь 2009 оноос хойш харилцаа холбооны салбарт олон төрлийн дэвшилтэт технологи үйлчилгээг нэвтрүүлэн ажиллаж байна.",
  },
];

/* ------------------------------------ */
// Wallet  data section
/* ------------------------------------ */
import walletIcon1 from 'common/assets/image/cryptoModern/wallet1.png';

export const WalletFeatures = [
  {
    id: 1,
    icon: walletIcon1,
    title: 'Тасралтгүй суралцъя.',
  },
  {
    id: 2,
    icon: walletIcon1,
    title: 'Зогсолтгүй урагшилъя.',
  },
  {
    id: 3,
    icon: walletIcon1,
    title: 'Хамтдаа хөгжье',
  },
];

/* ------------------------------------ */
// Faq  data section
/* ------------------------------------ */

export const Faq = [
  {
    id: 4,
    title: 'Програмчлалын олимпиад гэж юу вэ?',
    description:
      'Sys&CoTech клубийн жил бүр уламжлал болгон зохион байгуулдаг "Програмчлалын олимпиад" нь  ШУТИС МХТС-ийн оюутнуудын дунд явагддаг ба оюутан бүрт програмчлалын аль нэг хэлээр бодлого бодож хоорондоо өрсөлдөх, мэдлэг чадвараа дээшлүүлэх боломжийг олгодог.',
  },
  {
    id: 2,
    title: 'Олимпиад хэзээ зохиогдох вэ?',
    description:
      '2022 - оны 11 сарын 10 - ний өдөр 10:00 цагаас. ',
  },
  {
    id: 1,
    expend: true,
    title: 'Олимпиад хаана зохиогдох вэ?',
    description:
      'Шинжлэх Ухаан Технологийн Их Сургууль - Мэдээлэл, Холбооны Технологийн Сургууль (МХТС). ',
  },
  {
    id: 3,
    title: 'Олимпиадад хэн оролцох боломжтой вэ?',
    description:
      'ШУТИС - Мэдээлэл, Холбооны Технологийн Сургууль (МХТС) 1 - 4 курсийн оюутнууд оролцох боломжтой.',
  },
  {
    id: 4,
    title: 'Хэрхэн бүртгүүлэх вэ?',
    description:
      'Бүртгүүлэх гэсэн хэсгээс хувийн мэдээллээ оруулснаар бүртгүүлэх боломжтой.',
  },
  {
    id: 4,
    title: 'Оролцогчийн зүгээс юу шаардлагатай вэ?',
    description:
      'Зохион байгуулагчийн зүгээс бэлдэж өгсөн лабораторийн компьютер байх тул та оюутны үнэмлэх өөрийгөө батлах зүйлтэй ирээрэй.',
  },
  {
    id: 4,
    title: 'Техникийн зөвлөгөөн хэрхэн явагдах вэ?',
    description:
      '2022 - оны 11 сарын 7 - ний өдөр 12:50 цагаас Sys&CoTech - Discord channel',
  },
];

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const Footer_Data = [
  {
    title: <div style={{fontFamily: "MulishBold", fontSize: "20px"}}>Бидэнтэй холбогдох</div>,
    menuItems: [
      {
        url: 'https://www.facebook.com/SysAndCoTech',
        text: 'facebook Page',
      },
      {
        url: 'tel:+976865509863',
        text: 'Холбогдох утас',
      },
      {
        url: 'https://goo.gl/maps/Qwv3RYvybs8YqJsS8',
        text: 'Хаяг байршил',
      },
    ],
  },
  {
    id: 2,
    title: <div style={{fontFamily: "MulishBold", fontSize: "20px"}}>Мэдээлэл</div>,
    menuItems: [
      {
        id: 1,
        url: 'https://www.syscotech.club/',
        text: 'Үйл ажиллагаа'
      },
      {
        id: 2,
        url: '/',
        text: 'Түгээмэл асуулт хариулт'
      }
    ]
  },
  {
    id: 3,
    title: <div style={{fontFamily: "MulishBold", fontSize: "20px"}}>Клубийн бодлого</div>,
    menuItems: [
      {
        id: 1,
        url: 'https://www.syscotech.club/',
        text: 'Гишүүний эрх, үүрэг'
      },
      {
        id: 2,
        url: 'https://www.syscotech.club/',
        text: 'Клубийн журам'
      }
    ]
  }
  
  
];
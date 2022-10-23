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
import featureIcon1 from 'common/assets/image/cryptoModern/callPro.png';
import featureIcon2 from 'common/assets/image/cryptoModern/lime.png';

export const Features = [
  {
    id: 1,
    icon: featureIcon1,
    title: 'Call Pro',
    description:
      `КоллПро ХХК нь 2009 оноос хойш харилцаа холбооны салбарт олон төрлийн дэвшилтэт технологи үйлчилгээг нэвтрүүлэн ажиллаж байна.`,
  },
  {
    id: 2,
    icon: featureIcon2,
    title: 'Lime',
    description:
      'Your mining rigs are already set up and running. As soon as you set up your account.',
  },
  {
    id: 3,
    icon: featureIcon2,
    title: 'Verified Mining',
    description:
      'Your mining rigs are already set up and running. As soon as you set up your account.',
  },
  {
    id: 4,
    icon: featureIcon2,
    title: 'Verified Mining',
    description:
      'Your mining rigs are already set up and running. As soon as you set up your account.',
  },
];

/* ------------------------------------ */
// Wallet  data section
/* ------------------------------------ */
import walletIcon1 from 'common/assets/image/cryptoModern/wallet1.png';
import walletIcon2 from 'common/assets/image/cryptoModern/wallet2.png';
import walletIcon3 from 'common/assets/image/cryptoModern/wallet3.png';

export const WalletFeatures = [
  {
    id: 1,
    icon: walletIcon1,
    title: 'Secure transfers with verified Casinos.',
  },
  {
    id: 2,
    icon: walletIcon2,
    title: 'Easily buy and sell CLV within the wallet',
  },
  {
    id: 3,
    icon: walletIcon3,
    title: 'Pay as many as you want',
  },
];

/* ------------------------------------ */
// Faq  data section
/* ------------------------------------ */

export const Faq = [
  {
    id: 1,
    expend: true,
    title: 'Олимпиад хаана зохиогдох вэ?',
    description:
      'Шинжлэх ухаан технелогийн их сургууль - Мэдээлэл холбоо технелогийн их сургууль. ',
  },
  {
    id: 2,
    title: 'Олимпиад хэзээ зохиогдох вэ?',
    description:
      '2022 - оны 11 сарын 10 - ний өдөр 10:00 цагаас. ',
  },
  {
    id: 3,
    title: 'Олимпиад-нд хэн оролцож болох вэ?',
    description:
      'Мэдээлэл холбоо технелогийн их сургууль (МХТС) 1 - 3 курсын оюутнууд.',
  },
  {
    id: 4,
    title: 'Тэмцээнд юу авч очих вэ?',
    description:
      'Зохион байгуулагчийн зүгээс бэлдэж өгсөн лабораторийн компьютер байх тул та оюутны үнэмлэх өөрийгөө батлах зүйлтнэй ирээрээ.',
  },
  {
    id: 4,
    title: 'Техникийн зөвлөгөөн хэзээ вэ?, хаана вэ?',
    description:
      '2022 - оны 11 сарын 7 - ний өдөр 12:50 цагаас Sys&CoTech - Discord channel',
  },
  {
    id: 4,
    title: 'Тэмцээнд юу авч очих вэ?',
    description:
      '.',
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
        url: '/',
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
        url: '/',
        text: 'Гишүүний эрх, үүрэг'
      },
      {
        id: 2,
        url: '/',
        text: 'Клубийн журам'
      }
    ]
  }
  
  
];

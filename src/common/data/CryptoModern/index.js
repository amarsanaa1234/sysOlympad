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
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    id: 2,
    title: 'Олимпиад хэзээ зохиогдох вэ?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    id: 3,
    title: 'Олимпиад-нд хэн оролцож болох вэ?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    id: 4,
    title: 'Тэмцээнд юу авч очих вэ?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
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

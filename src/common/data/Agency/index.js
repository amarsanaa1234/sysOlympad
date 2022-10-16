import BlogImage1 from '../../assets/image/agency/blog/blog-img1.png';
import BlogImage2 from '../../assets/image/agency/blog/blog-img2.png';
import BlogImage3 from '../../assets/image/agency/blog/blog-img3.png';
import Member1 from '../../assets/image/agency/team/member-1.jpg';
import Member2 from '../../assets/image/agency/team/member-2.jpg';
import Member3 from '../../assets/image/agency/team/member-3.jpg';
import Denny from '../../assets/image/agency/client/denny.png';
import Menny from '../../assets/image/agency/client/menny.png';
let thisYear = new Date().getFullYear()
const data = {
  menuItems: [
    {
      label: 'Бид юу чадах вэ?',
      path: '#featureSection',
      offset: '80',
    },
    {
      label: 'Бидний үйл ажиллагаа',
      path: '#workHistorySection',
      offset: '40',
    },
    {
      label: 'Манай хамт олон',
      path: '#blogSection',
      offset: '67',
    },
    {
      label: 'Бидний сургалт',
      path: '#qualitySection',
      offset: '67',
    },
    // {
    //   label: 'Testimonial',
    //   path: '#testimonialSection',
    //   offset: '100',
    // },
    // {
    //   label: 'Team Member',
    //   path: '#teamSection',
    //   offset: '67',
    // },
    {
      label: 'Түгээмэл асуулт хариултууд FAQ',
      path: '#faqSection',
      offset: '67',
    },
  ],
  aboutus: [
    {
      id: 1,
      title: `Клубийн нэрэмжит өрсөлдөөнт програмчлалын тэмцээнийг ${thisYear - 2009} дах жилдээ`,
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: `Шинэ санаа, шийдлийг танилцуулах Hackathon хөгжүүлэлтийн тэмцээн ${thisYear - 2016} дах жилдээ`,
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Сургуулийн оюутнуудад болон клубийн дотоод гишүүдэд зориулсан сургалт',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: 'Клуб нэгдсэн зөвлөгөөн, Голомт банктай хамтарсан бусад үйл ажиллагааг зохион байгуулж оролцдог',
      icon: 'flaticon-next',
    },
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Шинийг суралцах',
      description:
        'Технологийн дэвшлийг нутагшуулахын тулд бид шинэ технологи, арга барилыг үндэс суурьтай судалж тасралтгүй хөгжихийг зорьдог'
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Дизайн бүтээх',
      description:
        'Дотор нуугдсан урлаг, гоо зүйн мэдрэмжийг сэргээн хөгжүүлэх үүднээс аливаа үйл ажиллагааны дизайныг өөрсдөө бүтээдэг'
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Инженер ухаан',
      description:
        'Асуудлыг ухаалагаар шийдвэрлэх инженерийн чадварт суралцахын тулд бид өрсөлдөөнт програмчлалаар хичээллэдэг'
    },
    {
      id: 4,
      icon: 'flaticon-startup',
      title: 'Манлайлал & хариуцлага',
      description: 'Бусад оюутан сурагчдад туслах, дэмжих үндсэн үүргээ биелүүлэн манлайлалын үлгэр жишээ болно'
    },
    {
      id: 5,
      icon: 'flaticon-briefing',
      title: 'Сургалт',
      description: 'Шинийг сурах, сурснаа клубийн дотоод гишүүд болон бусдад түгээж хамтдаа хөгжинө'
    },
    {
      id: 6,
      icon: 'flaticon-creative',
      title: 'Шинэлэг байх',
      description: 'Клубийн үндсэн үйл ажиллагааг улам томруулж хөгжүүлэхийн тулд үргэлж шинээр сэтгэх бүтээхийг хүснэ'
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Програмчлалын үндэс',
      description: 'С хэл дээр програмчлалын үндсэн тулгуур ойлголтуудыг бодлого бодоход тулгуурлан заадаг'
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Обьект хандалтад програмчлал',
      description: 'Програмчлалын хамгийн чухал ойлголтуудыг нэгийг Java хэл дээр практикт тулгуурлан заадаг'
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'UI/UX дизайны хичээл',
      description: 'Апп, веб болон бусад дижитал дизайн гаргах програм ашиглах, дизайны онол арга барил заадаг'
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Веб хөгжүүлэлт',
      description: 'Веб технологийн үндэс суурийг судалж сурах ба server & client технологиудыг ашиглахыг заадаг'
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Real home corporation',
      thumbnail_url: BlogImage1,
      date: 'November 02, 2018',
      postLink: '#1',
    },
    {
      id: 2,
      title: 'Sheltech developer ltd.',
      thumbnail_url: BlogImage2,
      date: 'November 12, 2018',
      postLink: '#2',
    },
    {
      id: 3,
      title: 'Alt architecture co.',
      thumbnail_url: BlogImage3,
      date: 'December 09, 2018',
      postLink: '#3',
    },
  ],
  teamMember: [
    {
      id: 1,
      name: 'Jessica Fanddy',
      thumbnail_url: Member1,
      designation: 'Co Founder',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 2,
      name: 'Devid Justingul',
      thumbnail_url: Member2,
      designation: 'Senior Ui/UX Designer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 3,
      name: 'Handdy Albuzz',
      thumbnail_url: Member3,
      designation: 'Article Writer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: 'Jon Doe',
      designation: 'CEO of Denish Co.',
      comment:
        'Best working experience  with this amazing team & in future, we want to work together',
      avatar_url: Denny,
    },
    {
      id: 2,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
    {
      id: 3,
      name: 'Jone Doe',
      designation: 'Director of Beauty-queen',
      comment:
        'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
      avatar_url: Denny,
    },
    {
      id: 4,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: 'Танай клубт элсэхийн тулд яах ёстой вэ?',
      description:
        'Клубийн зүгээс гаргасан анкетийг бүрэн дэлгэрэнгүй бөглөж өгөх. Тэгснээр бид таны анкетийг харж таныг ярилцлаганд дуудна. Хэрэв та ярилцлаганд тэнцвэл 14 хоног идэвхтэн бус гишүүний статустайгаар клубийн үйл ажиллагаанд оролцоно. Туршилтын хугацаа дууссаны дараагаар таныг клубт албан ёсоор элсүүлэхийг та болон бусад гишүүдийн саналаар шийднэ.'
    },
    {
      id: 2,
      title: 'Клубт элсэхэд курс, нас мэргэжил харгалзах уу?',
      description:
        'Манай клуб нь мэдээллийн технологийн чиглэлийн (програм хангамж, аюулгүй байдал, сүлжээ гэх мэт...) мэргэжлийн оюутнуудад зориулан үйл ажиллагаа (сургалт, тэмцээн уралдаан) явуулдаг. Дотогш болон гадагш чиглэсэн үйл ажиллагаа ихтэй учир МХТС-д сурдаг 4-с доош курсийн оюутан байх шаардлагатай.'
    },
    {
      id: 3,
      title: 'Танай клубт элссэнээр надад ямар хэрэгтэй вэ?',
      description:
        'Юун түрүүнд дурьдахад бид бол зорилго мөрөөдлөөрөө хөтлөгдөн хамтдаа хөгжихийг зориж буй сайн дурын залуусын нэгдэл. Та бидэнтэй хамт сурч хөгжих хамт олонтой болох, клубийн өрөөг ашиглах ба мэргэжлийн болон бусад хувь хүний ур чадваруудыг өөрийн хичээл зүтгэлээр суралцана.'
    },
    {
      id: 4,
      title: 'Клубийн сургалтад хэрхэн хамрагдах вэ?',
      description:
        'Хичээлийн жилийн улирал бүр бид тухайн оюутнуудын судалж буй мэргэжлийн суурь хичээлээс гадна өөрсдийн зүгээс нэмэлт хичээл (Шинэ технологи, хэл, арга барил) заадаг. Сургалт эхлэх үеэр бид зар мэдээллийг тараах ба тухайн зараас мэдэж хамрагдах боломжтой.'
    }
  ],
  menuWidget: [
    {
      id: 1,
      title: 'Бидэнтэй холбогдох',
      menuItems: [
        {
          id: 1,
          url: 'https://www.facebook.com/SysAndCoTech/',
          text: 'Facebook хуудас'
        },
        {
          id: 2,
          url: 'tel:+97694351314',
          text: 'Холбогдох утас'
        },
        {
          id: 3,
          url: 'https://goo.gl/maps/Qwv3RYvybs8YqJsS8',
          text: 'Хаяг байршил'
        }
      ]
    },
    {
      id: 2,
      title: 'Мэдээлэл',
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
      title: 'Клубийн бодлого',
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
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: 'https://www.facebook.com/SysAndCoTech/'
    },
    {
      id: 2,
      icon: 'flaticon-instagram',
      link: 'https://www.instagram.com/sysandcotech/'
    }
  ],
  thisYear: thisYear
};
export default data;

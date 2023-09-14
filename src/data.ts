export const menu = [
  {
    id: 1,
    title: "",
    listItems: [
      {
        id: 1,
        title: "AnaSayfa",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profil",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "listeler",
    listItems: [
      {
        id: 1,
        title: "Kullanıcılar",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Ürünler",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Satışlar",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Mesajlar",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Genel",
    listItems: [
      {
        id: 1,
        title: "Elementler",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notlar",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Formlar",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Takvim",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Bakım",
    listItems: [
      {
        id: 1,
        title: "Ayarlar",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Yedeklemeler",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Analizler",
    listItems: [
      {
        id: 1,
        title: "Grafikler",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Hatalar",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Ayşe Yılmaz",
    email: "ayılmaz1234@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Fatma Demir",
    email: "fdemirr@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Ali Sever",
    email: "asvr10@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Aylin Bakar",
    email: "aylinbkr@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Yakup Keskin",
    email: "yakes@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Arda Ortak",
    email: "ortakarda@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Aliye Dursun",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Kullanıcılar",
  number: "11.238",
  dataKey: "Kullanıcılar",
  percentage: 45,
  chartData: [
    { name: "Pzt", Kullanicilar: 400 },
    { name: "Sal", Kullanıcılar: 600 },
    { name: "Çar", Kullanıcılar: 500 },
    { name: "Per", Kullanıcılar: 700 },
    { name: "Cum", Kullanıcılar: 400 },
    { name: "Cmt", Kullanıcılar: 500 },
    { name: "Paz", Kullanıcılar: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "",
  title: "Ürünler",
  number: "238",
  dataKey: "ürünler",
  percentage: 21,
  chartData: [
    { name: "Pzt", ürünler: 400 },
    { name: "Sal", ürünler: 600 },
    { name: "Çar", ürünler: 500 },
    { name: "Per", ürünler: 700 },
    { name: "Cum", ürünler: 400 },
    { name: "Cmt", ürünler: 500 },
    { name: "Pzr", ürünler: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "",
  title: "Hasılat",
  number: "56.432 ₺ ",
  dataKey: "Hasılat",
  percentage: -12,
  chartData: [
    { name: "Pzt", Hasılat: 400 },
    { name: "Sal", Hasılat: 600 },
    { name: "Çar", Hasılat: 500 },
    { name: "Per", Hasılat: 700 },
    { name: "Cum", Hasılat: 400 },
    { name: "Cmt", Hasılat: 500 },
    { name: "Pzr", Hasılat: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "",
  title: "Toplam Oran",
  number: "2.6",
  dataKey: "oran",
  percentage: 12,
  chartData: [
    { name: "Pzt", oran: 400 },
    { name: "Sal", oran: 600 },
    { name: "Çar", oran: 500 },
    { name: "Per", oran: 700 },
    { name: "Cum", oran: 400 },
    { name: "Cmt", oran: 500 },
    { name: "Pzr", oran: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Kar",
  color: "#8884d8",
  dataKey: "kar",
  chartData: [
    {
      name: "Pzt",
      kar: 4000,
    },
    {
      name: "Sal",
      kar: 3000,
    },
    {
      name: "Çar",
      kar: 2000,
    },
    {
      name: "Per",
      kar: 2780,
    },
    {
      name: "Cum",
      kar: 1890,
    },
    {
      name: "Cmt",
      kar: 2390,
    },
    {
      name: "Paz",
      kar: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Toplam Ziyaret",
  color: "#FF8042",
  dataKey: "ziyaret",
  chartData: [
    {
      name: "Pzt",
      ziyaret: 4000,
    },
    {
      name: "Sal",
      ziyaret: 3000,
    },
    {
      name: "Çar",
      ziyaret: 2000,
    },
    {
      name: "Per",
      ziyaret: 2780,
    },
    {
      name: "Cum",
      ziyaret: 1890,
    },
    {
      name: "Cmt",
      ziyaret: 2390,
    },
    {
      name: "Paz",
      ziyaret: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "Beyaz",
    producer: "Sony",
    price: "250.99 ₺ ",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "siyah",
    producer: "Dell",
    price: "499.99 ₺ ",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gri",
    producer: "Samsung",
    price: "999.49 ₺ ",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "Beyaz",
    producer: "Apple",
    price: "799.49 ₺ ",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "gökkuşağı",
    producer: "Philips",
    price: "39.99 ₺ ",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "siyah",
    producer: "Logitech",
    price: "59.49 ₺ ",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gri",
    producer: "Rode",
    price: "119.49 ₺ ",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "beyaz",
    producer: "Toshiba",
    price: "899.99 ₺ ",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "siyah",
    producer: "Sony",
    price: "970.49 ₺ ",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "siyah",
    producer: "Acer",
    price: "599.99 ₺ ",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "Harun Hatiboğlu",
  img: "/public/profileimg.png",
  info: {
    kullanıcıadı: "harun18",
    adı: "Harun Hatiboğlu",
    email: "harunhatib18@gmail.com",
    telefon: "05468570541",
    onay: "onaylandı",
  },
  chart: {
    dataKeys: [
      { name: "ziyaretler", color: "#82ca9d" },
      { name: "tıklamalar", color: "#8884d8" },
    ],
    data: [
      {
        name: "Pzt",
        ziyaretler: 4000,
        tıklamalar: 2400,
      },
      {
        name: "Sal",
        ziyaretler: 3000,
        tıklamalar: 1398,
      },
      {
        name: "Çar",
        ziyaretler: 2000,
        tıklamalar: 3800,
      },
      {
        name: "Per",
        ziyaretler: 2780,
        tıklamalar: 3908,
      },
      {
        name: "Cum",
        ziyaretler: 1890,
        tıklamalar: 4800,
      },
      {
        name: "Cmt",
        ziyaretler: 2390,
        tıklamalar: 3800,
      },
      {
        name: "Pzr",
        ziyaretler: 3490,
        tıklamalar: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Playstation 5 Digital Edition'ı satın aldı",
      time: "3 gün önce",
    },
    {
      text: "İstek listesine 3 öğe ekledi",
      time: "1 hafta önce",
    },
    {
      text: "Sony Bravia KD-32w800'ü satın aldı",
      time: "2 hafta önce",
    },
    {
      text: "bir ürünü inceledi",
      time: "1 ay önce",
    },
    {
      text: "istek listesine 1 ürün ekledi",
      time: "1 ay önce",
    },
    {
      text: "bir ürünü inceledi",
      time: "2 ay önce",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    ÜrünKodu: "Ps5SDF1156d",
    renk: "white",
    ücret: "250.99 ₺ ",
    üretici: "Sony",
    ihracat: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "Ziyaretler", color: "#82ca9d" },
      { name: "Satış", color: "#8884d8" },
    ],
    data: [
      {
        name: "Pzt",
        Ziyaretler: 4000,
        Satış: 2400,
      },
      {
        name: "Sal",
        Ziyaretler: 3000,
        Satış: 1398,
      },
      {
        name: "Çar",
        Ziyaretler: 2000,
        Satış: 3800,
      },
      {
        name: "Per",
        Ziyaretler: 2780,
        Satış: 3908,
      },
      {
        name: "Cum",
        Ziyaretler: 1890,
        Satış: 4800,
      },
      {
        name: "Cmt",
        Ziyaretler: 2390,
        Satış: 3800,
      },
      {
        name: "Pzr",
        Ziyaretler: 3490,
        Satış: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Harun Hatiboğlu, Playstation 5 Digital Edition'ı satın aldı",
      time: "3 gün önce",
    },
    {
      text: "Harun Hatiboğlu, Playstation 5 Digital Edition'ı istek listesine ekledi",
      time: "1 hafta önce",
    },
    {
      text: "Melih Dilek Playstation 5 Digital Edition'ı listesine ekledi",
      time: "2 hafta önce",
    },
    {
      text: "Ayşe Yılmaz ürünü inceledi",
      time: "1 ay önce ",
    },
    {
      text: "Mevlüt Yapar Playstation 5 Digital Edition'ı listesine ekledi",
      time: "1 ay önce",
    },
    {
      text: "Hale ürünü inceledi",
      time: "2 ay önce",
    },
  ],
};

const questions = [
  {
    question:
      'Seorang muslim yang beriman kepada ketentuan Allah SWT pasti akan memiliki tingkat ketaatan yang tinggi, salah satu contoh ciri ciri orang yang beriman terhadap qada dan qadar adalah . . .',
    answer: [
      {id: 'A', text: 'Jarang beribadah dan sedekah'},
      {id: 'B', text: 'Lupa akan kematian'},
      {
        id: 'C',
        text: 'Patuh terhadap perintah Allah dan menjauhi larangannya',
        correct: true,
      },
      {id: 'D', text: 'Mempunyai sikap pesimis bukan optimis'},
    ],
    discuss:
      'Jawabannya C, karena ciri-ciri orang beriman terhadap qada dan qadar ialah Patuh terhadap perintah Allah dan menjauhi larangannya',
  },
  {
    question: 'Berikut fungsi iman terhadap qada dan qadar ?',
    answer: [
      {id: 'A', text: 'Menjauhkan diri terhadap allah swt'},
      {id: 'B', text: 'Memperkuat keimanan dan ketakwaan', correct: true},
      {id: 'C', text: 'Mendidik manusia agar senantiasa bermalas-malasan'},
      {id: 'D', text: 'Melatih manusia agar senantiasa pasrah dan menyerah'},
    ],
    discuss:
      'Jawabannya B, karena salah satu fungsi dari beriman terhadap qada dan qadar',
  },
  {
    question:
      'Dalam kehidupan Allah SWT mampu membolak balik kan keadaan manusia karena Allah maha segalanya, di bawah termasuk contoh takdir mubram ?',
    answer: [
      {id: 'A', text: 'Kepintaran manusia'},
      {id: 'B', text: 'Berusahanya orang yang tidak bisa menjadi bisa'},
      {id: 'C', text: 'Peristiwa kelahiran seseorang', correct: true},
      {
        id: 'D',
        text: 'Perubahan derajat manusia yang semula miskin menjadi kaya',
      },
    ],
    discuss:
      'Jawabannya C, karena peristiwa kelahiran seseorang sudah di takdirkan Allah dan di tulis di lauhul mahfudz',
  },
  {
    question:
      'Apa hikmah dari seorang muslim yang beriman terhadap qada dan qadar ?',
    answer: [
      {id: 'A', text: 'Menentramkan jiwa', correct: true},
      {id: 'B', text: 'Membuat pikiran kacau'},
      {id: 'C', text: 'Giat menabung untuk dunia'},
      {id: 'D', text: 'Selalu gelisah akan segala hal'},
    ],
    discuss:
      'Jawabannya A, karena salah satu hikmah dari beriman terhadap qada dan qadar',
  },
  {
    question:
      'Menghindari sifat sombong dalam qada dan qadar termasuk kedalam ?',
    answer: [
      {id: 'A', text: 'Hikmah beriman terhadap qada dan qadar', correct: true},
      {id: 'B', text: 'Pengertian dari beriman terhadap qada dan qadar'},
      {id: 'C', text: 'Contoh dari qadar'},
      {id: 'D', text: 'Implementasi dari takdir mualak'},
    ],
    discuss:
      'Jawabannya A, karena menghidari hal tersebut adalah salah satu hikmah dari beriman terhadap qada dan qadar',
  },
  {
    question: 'Contoh dari takdir mualak, kecuali . . . ',
    answer: [
      {id: 'A', text: 'Orang yang bertaubat dari kekhilafan masa lalunya'},
      {
        id: 'B',
        text: 'Berubahnya sifat manusia karena ingin menjadi pusat perhatian',
      },
      {
        id: 'C',
        text: 'Orang yang bodoh akan cerdas jika mau berusaha untuk belajar',
      },
      {id: 'D', text: 'Peristiwa kematiaan seseorang', correct: true},
    ],
    discuss:
      'Jawabannya D, karena kelahiran dan kematian seseorang sudah di tulis olah Allah di lauhul mahfudz',
  },
  {
    question:
      'Zidan di kelas termasuk orang yang sangat pintar dan selalu mendapatkan rangking terbaik 	  di kelas nya, walau begitu zidan tidak sombong karena kepintarannya tersebut dan suka membantu temannya saat temannya kesusahan memahami pelajaran. penggalan cerita 	  tersebut jika dikaitkan dengan qada dan qadar termasuk contoh dari ?',
    answer: [
      {id: 'A', text: 'beriman terhadap qada dan qadar'},
      {id: 'B', text: 'Pengertian beriman terhadap qada dan qadar'},
      {id: 'C', text: 'Hikmah beriman terhadap qada dan qadar', correct: true},
      {id: 'D', text: 'Contoh seseorang yang mempunyai sifat tidak sombong'},
    ],
    discuss:
      'Jawabannya C, karena contoh di atas adalah hikmah dari beriman terhadap qada dan qadar',
  },
  {
    question:
      'Salah satu keluarga dari ibnu meninggal dunia, keluarga termasuk ibnu sangat bersedih hati 	  karna di tinggal salah satu anggota keluarga nya. peristiwa yang ibnu alami termasuk   	  contoh takdir ?',
    answer: [
      {id: 'A', text: 'Takdir Tuhan'},
      {id: 'B', text: 'Takdir mubram', correct: true},
      {id: 'C', text: 'Takdir mualak'},
      {id: 'D', text: ' Takdir kematian'},
    ],
    discuss:
      'Jawabannya B, karena kematian termasuk takdir mubram atau takdir yang tidak bisa di rubah',
  },
  {
    question: 'Takdir mubram adalah ketentuan Allah Swt yang ?',
    answer: [
      {id: 'A', text: 'Masih bisa diusahakan dengan ikhtiar manusia'},
      {id: 'B', text: 'Sudah pasti dan bersifat tetap', correct: true},
      {id: 'C', text: 'Belum pasti terjadi'},
      {id: 'D', text: ' Belum terjadi'},
    ],
    discuss: 'Jawabannya C, karena itu adalah pengertian dari takdir mubram',
  },
  {
    question:
      'Kesehatan merupakan sesuatu yang dapat kita usahakan. Oleh karena itu, kesehatan merupakan contoh dari takdir ?',
    answer: [
      {id: 'A', text: 'Muslim '},
      {id: 'B', text: 'Mualak', correct: true},
      {id: 'C', text: 'Mukmin '},
      {id: 'D', text: 'Muamalah'},
    ],
    discuss:
      'Jawabannya B, karena kesehatan masi bisa kita rubah asal kita menjaga gaya hidup dan pola makan',
  },
  {
    question:
      'Perhatikan hal-hal di bawah ini! \n 1)  Kematian. 3) Kecerdasan. \n 2) Jenis kelamin. 	4) Kekayaan. \n Pernyataan yang merupakan takdir mubram adalah nomor . . . .',
    correctoption: 'option1',
    answer: [
      {id: 'A', text: '1) dan 2) ', correct: true},
      {id: 'B', text: '2) dan 4)'},
      {id: 'C', text: '1) dan 3)'},
      {id: 'D', text: '3) dan 4)'},
    ],
    discuss:
      'Jawabannya A, karena 1) dan 2) adalah takdir yang sudah Allah tulis di lauhul mahfudz dan tidak bisa di rubah lagi',
  },
  {
    question:
      ' Perhatikan hal-hal di bawah ini! \n 1)  Kematian. 		3) Kecerdasan. \n 2) Jenis kelamin. 	4) Kekayaan. \n Pernyataan yang merupakan takdir mubram adalah nomor . . . .',
    correctoption: 'option4',
    answer: [
      {id: 'A', text: '1) dan 2) '},
      {id: 'B', text: '2) dan 4)'},
      {id: 'C', text: '1) dan 3) '},
      {id: 'D', text: '3) dan 4)', correct: true},
    ],
    discuss:
      'Jawabannya D, karena 3) dan 4) adalah takdir yang masi bisa kita rubah asal kita mau berusaha',
  },
  {
    question: 'Takdir muallaq adalah ketentuan Allah Swt yang . . . . ',
    answer: [
      {
        id: 'A',
        text: 'Masih bisa diusahakan dengan ikhtiar manusia  ',
        correct: true,
      },
      {id: 'B', text: 'Sudah pasti dan bersifat tetap'},
      {id: 'C', text: 'Belum pasti terjadi '},
      {id: 'D', text: 'Belum terjadi'},
    ],
    discuss: 'Jawabannya A, karena itu adalah pengertian dari takdir muallaq',
  },
  {
    question: 'Kita dianjurkan untuk hidup sederhana agar . . . .',
    answer: [
      {id: 'A', text: 'menumbuhkan sifat rakus'},
      {
        id: 'B',
        text: 'menumbuhkan rasa kepedulian kepada sesama',
        correct: true,
      },
      {id: 'C', text: 'menjadikan malas beribadah'},
      {id: 'D', text: 'mengurangi kewajiban membantu orang lain '},
    ],
    discuss:
      'Jawabannya B, karena agar sesama manusia saling menghargai dan peduli',
  },
  {
    question: 'Contoh takdir mu‘allaq adalah . . . .',
    answer: [
      {id: 'A', text: 'Ajal '},
      {id: 'B', text: 'Lahir'},
      {id: 'C', text: 'Kesehatan ', correct: true},
      {id: 'D', text: 'Jenis kelamin'},
    ],
    discuss:
      'Jawabannya C, karena kesahatan masih bisa kita jaga asal kita menjaga pola makan dan gaya hidup',
  },
];

export default questions;

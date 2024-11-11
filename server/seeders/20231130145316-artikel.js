"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Artikels", [
      {
        judul: "3 Cara Mengembangkan Bisnis Di Tiktok Shop",
        deskripsi:
          "TikTok, whose mainland Chinese counterpart is Douyin, is a short-form video hosting service owned by ByteDance. It hosts user-submitted videos, which can range in duration from 3 seconds to 10 minutes. Since their launches, TikTok and Douyin have gained global popularity.",
        images: "tiktok.jpeg",
        tanggal: new Date("11/2/2002"),
        link: "https://dailysocial.id/post/apa-itu-tik-tok",
        id_kategori: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "Memaksimalkan Pengalaman Outbound, berikut 10 Tipsnya",
        deskripsi:
          "Kegiatan outbound telah menjadi pilihan populer bagi perusahaan, kelompok, dan individu yang ingin mengembangkan kerjasama tim, meningkatkan keterampilan komunikasi, serta menciptakan pengalaman yang tak terlupakan",
        images: "tips-memaksimalkan-pengalaman-outbone.jpeg",
        tanggal: new Date("11/2/2002"),
        link: "https://paradisotour.co.id/memaksimalkan-pengalaman-outbound-berikut-10-tipsnya/",
        id_kategori: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "Sejarah Tari Saman Berasal Dari Mana?",
        deskripsi:
          "Tahukah kamu salah satu tarian yang berasal dari suku Gayo dan biasanya ditampilkan dalam upacara adat penting, Yaitu tari saman berasal dari daerah Dataran Tinggi Gayo. Syair dalam tarian ini menggunakan bahasa Gayo. ",
        images: "tari-saman.jpeg",
        tanggal: new Date("11/2/2002"),
        link: "https://presideninformasi.com/tari-saman-berasal-dari/",
        id_kategori: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "Kisah UMKM Digital yang Berdaya Berkat Teknologi Grab",
        deskripsi:
          "Belum pernah terpikirkan sebelumnya di benak Ulfah Nurfebrianti sukses merintis usaha camilan tradisional di usianya yang baru menginjak 25 tahun",
        images: "umkm-grab-sukses.png",
        tanggal: new Date("11/2/2002"),
        link: "https://www.cnnindonesia.com/teknologi/20200514160607-190-503430/kisah-umkm-digital-yang-berdaya-berkat-teknologi-grab",
        id_kategori: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul:
          "Berita Terbaru: Kenaikan Gaji PNS dan Pensiunan, Siap-siap Naik Besok!",
        deskripsi:
          "Kabar baik untuk Pegawai Negeri Sipil (PNS) dan pensiunan di Indonesia. Pemerintah berencana memberikan kenaikan gaji bagi PNS mulai Agustus 2023.",
        images: "kenaikan-gaji-pns.jpg",
        tanggal: new Date("11/2/2002"),
        link: "https://kaltimtoday.co/berita-terbaru-kenaikan-gaji-pns-dan-pensiunan-siap-siap-naik-besok",
        id_kategori: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "Bazar UMKM untuk Indonesia",
        deskripsi:
          "Kementerian BUMN terus mendorong dan mendukung pemulihan ekonomi, terutama sektor pengembangan UMKM. Salah satunya dengan menyelenggarakan acara Bazar UMKM BUMN 2023.",
        images: "bazar-umkm.jpg",
        tanggal: new Date("11/2/2002"),
        link: "https://jakarta-tourism.go.id/event/bazar-umkm-untuk-indonesia",
        id_kategori: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "Putuskan Hiatus, Ini Perjalanan Panjang Band Noah",
        deskripsi:
          "Band Noah sukses menggelar konser terakhirnya di tahun 2023. Konser bartajuk The Great Journey of Noah #the final show itu digelar di Beach City International Stadium, Ancol, Jakarta Minggu.",
        images: "band-noah.jpg",
        tanggal: new Date("11/2/2002"),
        link: "https://timesindonesia.co.id/entertainment/478745/putuskan-hiatus-ini-perjalanan-panjang-band-noah",
        id_kategori: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        judul: "Cafe Bromfiets Blitar Hadirkan Kenangan Nostalgia Benda Klasik",
        deskripsi:
          "Di Blitar ada yang menarik untuk para pengunjung yang mencari nuansa klasik yang unik. Cafe Bromfiets namanya. Kafe ini menggabungkan kemewahan klasik dengan cita rasa modern.",
        images: "bromfietscafe.png",
        tanggal: new Date("11/2/2002"),
        link: "https://timesindonesia.co.id/gaya-hidup/478743/cafe-bromfiets-blitar-hadirkan-kenangan-nostalgia-benda-klasik",
        id_kategori: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Artikels", null, {});
  },
};

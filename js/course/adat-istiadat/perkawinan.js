document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen button dan konten course-content
  const materiButton = document.getElementById("materi-button");
  const videoButton = document.getElementById("video-button");
  const courseContent = document.getElementById("course-content");
  const homeButton = document.getElementById("home-button");
  const backButton = document.getElementById("back-button");

  // Tambahkan event listener untuk tombol materi
  if (materiButton) {
    materiButton.addEventListener("click", function () {
      // Ganti isi konten dengan konten materi
      courseContent.innerHTML = `
      <h1 class="course-title">Adat Istiadat Perkawinan dalam Suku Banjar</h1>
                    <div class="course-content-text">Dalam masyarakat sukubangsa Banjar, apabila anak laki-laki sudah
                        dewasa dan mampu mencari hidup, biasanya segera dicarikan jodohnya. Pemilihan jodoh oleh orang
                        tua ini dimaksudkan agar si anak tidak keliru mempersunting gadis untuk dijadikan istri sebagai
                        teman hidup dalam rumah tangga. Adat perkawinan orang Banjar melibatkan beberapa kegiatan yang
                        disebut basasuluh, badatang, bapapayuan, maatar patalian, baantaran jujuran, dan bakakawinan itu
                        sendiri.</div>

                    <h1 class="course-title">Adat Istiadat Perkawinan dalam Suku Bakumpai</h1>
                    <div class="course-content-text">Pada adat istiadat perkawinan Suku Bakumpai, terdapat tradisi mandi
                        pengantin atau (Bapapai). Bapapai bermaknakan sebagai proses kehidupan yang dilaksanakan sebelum
                        pengantin suku Dayak Bakumpai menempuh kehidupan yang baru. Arti “papai” dalam bahasa Indonesia
                        artinya percik, dalam pelaksanaan mandi-mandi pengantin terdapat prosesi memercik-memercikkan
                        air menggunakan bunga mayang pinang kepada calon pengantin dan orang yang hadir pada acara ini.
                        Prosesi ini melibatkan tempat mandi pagar mayang berbentuk bangunan persegi panjang dengan
                        berbagai hiasan dan bahan. Setelah persiapan selesai, pengantin dimandikan dengan memercikkan
                        kembang mayang di atas kepala pengantin yang ditutupi dengan kain putih, dilanjutkan dengan
                        mengguyurkan berbagai air seraya membaca sholawat nabi.</div>
                    <div class="course-content-text">Prosesi berikutnya adalah 7 bidadari mengelilingi pengantin sembari
                        memegang benang kuning yang dibentuk seperti lingkaran yang selanjutnya pengantin harus
                        melangkah 7 kali pada benang kuning yang diletakkan di bawah kemudian dilakukan gerakan dari
                        bawah ke atas atau kepala kemudian hal tersebut diulangi sebanyak 7 kali dimana pada saat
                        langkah ke-7 pengantin akan menginjak telur ayam. Prosesi terakhir yaitu ditapung tawari dengan
                        minyak likat dikelilingi oleh 7 bidadari yang memandikan tadi, setelah itu menyalakan lilin
                        mengelilingkan cermin dan lilin sebanyak tujuh kali pada pengantin yang dilakukan secara
                        bergantian oleh 7 bidadari, menyisir rambut pengantin dan memberikan pupur basah atau bedak
                        basah sembari membaca sholawat nabi. Prosesi inti dari acara tapung tawar ini adalah pembacaan
                        doa yang dipimpin oleh seorang yang menjadi tetua suku atau kampung.</div>
            `;
    });
  }

  // Tambahkan event listener untuk tombol video
  if (videoButton) {
    videoButton.addEventListener("click", function () {
      // Ganti isi konten dengan konten video
      courseContent.innerHTML = `
                <h1 class="course-title">Perkawinan</h1>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/9dh3iLXPgOA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            `;
    });
  }

  // Tambahkan event listener untuk tombol home
  if (homeButton) {
    homeButton.addEventListener("click", function () {
      window.location.href = "../../home.html";
    });
  }

  // Tambahkan event listener untuk tombol back
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "../../adat-istiadat.html";
    });
  }
});
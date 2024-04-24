// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger Menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar Side Bar untuk menutup Menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Fungsi untuk mendeteksi penyakit berdasarkan gejala yang dimasukkan pengguna
function detectDisease() {
  const symptomsInput = document.getElementById("symptoms").value;
  const disease = detectDiseaseLogic(symptomsInput);
  const resultDiv = document.getElementById("result");

  let diseaseInfo;
  switch (disease) {
    case "flu":
      diseaseInfo = {
        name: "Flu",
        causes:
          "Penyebab umum flu adalah infeksi virus influenza. Virus ini dapat menyebar melalui udara atau kontak dengan benda yang terkontaminasi.",
        medication:
          "Obat untuk flu meliputi istirahat yang cukup, minum banyak cairan, dan dapat juga diperlukan antipiretik atau obat pengurang demam.",
      };
      break;
    // Tambahkan case untuk penyakit lain jika diperlukan
    default:
      diseaseInfo = {
        name: "Penyakit tidak dikenal",
        causes: "Penyebab penyakit ini belum diketahui.",
        medication:
          "Konsultasikan dengan dokter untuk diagnosis dan pengobatan yang tepat.",
      };
  }

  resultDiv.innerHTML = `
    <p><strong>Penyakit yang didiagnosis:</strong> ${diseaseInfo.name}</p>
    <p><strong>Penyebab umum:</strong> ${diseaseInfo.causes}</p>
    <p><strong>Penanganan/Pengobatan:</strong> ${diseaseInfo.medication}</p>`;
}

// Fungsi untuk logika deteksi penyakit
function detectDiseaseLogic(symptoms) {
  // Normalisasi input: Ubah semua huruf menjadi huruf kecil
  symptoms = symptoms.toLowerCase();

  // Pisahkan input menjadi kata-kata individual
  const inputWords = symptoms.split(/\s+/);

  // Daftar gejala penyakit dan penanganan
  const diseases = {
    flu: {
      symptoms: ["demam", "batuk", "pilek", "sakit kepala", "lemas"],
      info: {
        name: "Flu",
        causes:
          "Penyebab umum flu adalah infeksi virus influenza. Virus ini dapat menyebar melalui udara atau kontak dengan benda yang terkontaminasi.",
        medication:
          "Obat untuk flu meliputi istirahat yang cukup, minum banyak cairan, dan dapat juga diperlukan antipiretik atau obat pengurang demam.",
      },
    },
    // Tambahkan penyakit lain beserta gejalanya di sini
  };

  // Iterasi melalui daftar penyakit
  for (let disease in diseases) {
    const symptomsList = diseases[disease].symptoms;
    // Cek apakah setidaknya satu gejala penyakit cocok dengan gejala yang dimasukkan pengguna
    if (inputWords.some((word) => symptomsList.includes(word))) {
      return disease; // Kembalikan nama penyakit yang cocok
    }
  }

  // Jika tidak ada penyakit yang cocok, kembalikan "Penyakit tidak dikenal"
  return "Penyakit tidak dikenal";
}

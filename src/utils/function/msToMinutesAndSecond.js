export function msToMinSec(ms) {
    // Konversi milidetik ke detik
    const seconds = Math.floor(ms / 1000);

    // Hitung menit dan sisa detik
    const minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    // Tambahkan nol di depan jika detik kurang dari 10
    remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    // Hasilkan format m:s
    const formattedTime = `${minutes} : ${remainingSeconds}`;

    return remainingSeconds;
}



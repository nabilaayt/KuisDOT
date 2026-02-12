### Dokumentasi Website Quizo


## Tech Stack
Terdapat beberapa tech stack yang digunakan, yaitu:
- Library React (UI Library)
- Tailwind CSS (Utility first CSS framework)
- React Router DOM (Client-side routing)
- Context API (State management)
- Open Trivia Database API (Sumber soal kuis)

## Application Flow
1. User login ke sistem menggunakan email dan password.
2. Setelah login berhasil, user diarahkan ke halaman Home yang menampilkan pilihan kategori quiz (Animals dan Music).
3. User memilih salah satu kategori quiz.
4. Sistem mengambil soal dari OpenTDB API dan menampilkan satu soal per halaman.
5. User memilih jawaban → otomatis lanjut ke soal berikutnya.
6. Timer berjalan selama quiz berlangsung.
7. Setelah selesai atau waktu habis, sistem menampilkan hasil quiz.
8. Progress quiz disimpan di local storage sehingga dapat dilanjutkan kembali jika browser ditutup.

## Components Architecture
1. Answer Component : Digunakan untuk menampilkan pilihan jawaban pada setiap soal quiz.
2. ProtectedRoute Component : Digunakan untuk mengatur akses halaman berdasarkan status autentikasi user.
3. Question Card Component : Digunakan untuk menampilkan pertanyaan quiz.

## Context Architecture
1. AuthContext : Mengelola state autentikasi user secara global.
2. QuizContext : Mengelola state quiz secara global.

## Custom Hooks
1. useQuiz : Custom hook yang bertanggung jawab untuk mengambil soal dari API. 

## API Integration
- Struktur Service:
1. quiz.js : Membuat request URL, mengirim fetch request, validasi response API, decode data soal, mengacak urutan jawaban, mengembalikan data siap pakai.

## Setup & Installation
1. Clone repository (git clone <repository_url>)
2. Install depedencies (npm install)
3. Run development server (npm run dev)
4. Buka browser dan ketikkan http://localhost:5173
# เว็บไซต์ Portfolio ส่วนตัวสำหรับนักศึกษาสาขาวิชาสื่อนฤมิต (Creative Media)

เว็บไซต์ Portfolio สไตล์ **Modern, Creative, Minimal & Professional** ออกแบบและพัฒนาเป็น **Multi-page Website** จำนวน 5 หน้าเว็บเพจอย่างแท้จริง พร้อมระบบ Responsive Design ที่รองรับทั้งคอมพิวเตอร์ แท็บเล็ต และโทรศัพท์มือถือ

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
portfolio/
├── index.html                   # หน้าแรก (Home): แนะนำตัว, สาขาวิชา, ความสนใจ, เป้าหมาย
├── education.html               # ประวัติการศึกษา (Education): เส้นทางการศึกษาแบบ Timeline
├── portfolio.html               # ผลงาน (Portfolio): แกลเลอรีภาพผลงานพร้อม Lightbox ขยายภาพ
├── activity.html                # กิจกรรม (Activity): แกลเลอรีภาพกิจกรรมและเวิร์กช็อปพร้อม Lightbox
├── contact.html                 # ติดต่อ (Contact): ช่องทางโซเชียลมีเดีย อีเมล และแบบฟอร์ม
├── assets/
│   ├── css/
│   │   └── style.css            # ไฟล์สไตล์หลัก (ธีม Dark, Neon Blue-Purple, Glassmorphism)
│   ├── js/
│   │   └── script.js            # ระบบ Sticky Navbar, Scroll Reveal, Back to Top, Lightbox
│   └── images/
│       ├── profile/
│       │   └── profile-placeholder.svg      # ตัวอย่างรูปโปรไฟล์
│       ├── portfolio/
│       │   ├── portfolio-1.svg ถึง 6.svg    # ภาพ Placeholder ผลงาน 6 รายการ
│       └── activity/
│           └── activity-1.svg ถึง 6.svg     # ภาพ Placeholder กิจกรรม 6 รายการ
└── README.md
```

---

## 🎨 โทนสีและสไตล์การออกแบบ (UI/UX Design)

- **สีหลัก (Primary):** สีดำและสีดาร์กสเลต (`#07080e`, `#0e111a`) ให้ความลุ่มลึกและขับเน้นผลงาน
- **สีรองและจุดเด่น (Accents):** สีฟ้า Electric Blue (`#38bdf8`) และสีม่วง Neon Purple (`#a855f7`) สะท้อนความเป็นสื่อนฤมิตและเทคโนโลยีความคิดสร้างสรรค์
- **ฟอนต์ตัวอักษร:** Google Fonts - `Prompt` (รองรับทั้งภาษาไทยและภาษาอังกฤษอย่างสวยงาม เป็นระเบียบ อ่านง่าย)
- **ไอคอน:** Font Awesome 6 ผ่าน CDN
- **เฟรมเวิร์ก:** Bootstrap 5 (CSS & JS Bundle ผ่าน CDN)

---

## 🚀 วิธีเปิดใช้งานเว็บไซต์

1. **เปิดผ่านเบราว์เซอร์โดยตรง:** ดับเบิลคลิกที่ไฟล์ [index.html](file:///c:/งาน/1205425/portfolio/index.html) เพื่อเริ่มใช้งานได้ทันที
2. **เปิดผ่าน VS Code Live Server:** คลิกขวาที่ [index.html](file:///c:/งาน/1205425/portfolio/index.html) แล้วเลือก *Open with Live Server*

---

## ✏️ คำแนะนำในการแทนที่ข้อมูลจริง (Customization Guide)

เพื่อให้เป็นไปตามข้อกำหนด ทุกจุดในเว็บไซต์ใช้เครื่องหมายก้ามปู `[ ... ]` เป็นตัวแทนข้อมูลส่วนบุคคล เพื่อให้คุณสามารถแก้ไขได้ง่ายโดยไม่ต้องกังวลเรื่องข้อมูลสมมติ:

1. **รูปโปรไฟล์:**
   - นำรูปถ่ายของคุณไปวางไว้ที่ `assets/images/profile/your-photo.jpg`
   - ในไฟล์ `index.html` แก้ไขแท็ก `<img src="assets/images/profile/profile-placeholder.svg">` เป็นรูปภาพของคุณ
2. **ข้อมูลประวัติการศึกษา:**
   - ในไฟล์ `education.html` แก้ไขชื่อสถานศึกษา แผนการเรียน และปี พ.ศ. ตามประวัติจริง
3. **รูปผลงาน (Portfolio) & ภาพกิจกรรม (Activity):**
   - นำไฟล์ภาพผลงานและกิจกรรมของคุณมาวางในโฟลเดอร์ `assets/images/portfolio/` และ `assets/images/activity/`
   - ในไฟล์ `portfolio.html` และ `activity.html` อัปเดตแอตทริบิวต์ `src="..."` ให้ชี้ไปยังชื่อไฟล์ภาพของคุณ
   - เมื่อคลิกที่รูปภาพ ระบบ Lightbox Modal จะแสดงรูปภาพขนาดใหญ่ให้อัตโนมัติ
4. **ช่องทางติดต่อ:**
   - ในไฟล์ `contact.html` เปลี่ยน `[อีเมลของคุณ]` และลิงก์ Facebook, Instagram, GitHub ให้เป็น URL บัญชีจริงของคุณ


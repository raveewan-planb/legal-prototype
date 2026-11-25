# Legal System — Design System Reference

> สกัดจาก `shared-styles.css` + `shared-layout.js` และ pattern ที่ซ้ำกันในทุกไฟล์ HTML ใช้เป็น reference ตอนออกแบบหน้าจอใหม่ให้ consistent กับของเดิม

## Stack

- Tailwind CSS v4 ผ่าน CDN (`@theme{--font-sans:'Kanit'}`) + `shared-styles.css` เป็น layer เสริมสำหรับ component ที่ Tailwind utility ไม่ครอบคลุม
- ฟอนต์เดียวทั้งระบบ: **Kanit** (น้ำหนัก 300–700) โหลดทั้งผ่าน `<link>` Google Fonts และ `@import` ใน CSS
- ทุกหน้าจอโหลด `shared-styles.css` + `shared-layout.js` เหมือนกัน แล้ว inject topbar/sidebar เอง ตามด้วย `lucide.createIcons()` (ใช้ Lucide icon set)

## สีที่ใช้ (Color Palette)

| กลุ่ม | ค่าสี | ใช้ที่ไหน |
|---|---|---|
| พื้นหลังหน้า | `#F0F4F8` | body background |
| การ์ด/พื้นผิว | `#fff` | sidebar, card, table |
| ตัวอักษรหลัก | `#334155` (slate-700) | body text |
| น้ำเงินหลัก (brand) | `#2563EB` | เลขสัญญา, ปุ่ม primary, ลิงก์ |
| กรมท่าเข้ม | `#1B3A6B` | table header background, heading เน้น |
| ฟ้าอ่อน (accent/active) | `#6fc5ea` / `#88D2F2` | stepper active, sidebar item active, ปุ่ม "ถัดไป", focus ring |
| เขียว (success) | `#59d687`, `#22C55E`, `#10B981`, `#D1FAE5`, `#065F46` | badge เสร็จสิ้น/อนุมัติ, ปุ่มยืนยัน |
| ส้ม/เหลือง (warning) | `#F59E0B`, `#FEF3C7`, `#92400E`, `#FFFBEB`, `#A16207` | badge รอดำเนินการ, risk=ปานกลาง |
| แดง (danger) | `#DC2626`, `#FEE2E2`, `#991B1B`, `#EF4444` | ยกเลิก, ปฏิเสธ/ส่งกลับแก้ไข, error |
| ม่วง (violet) | `#7C3AED`, `#F5F3FF`, `#EDE9FE` | ธีมหน้า "เปลี่ยนผู้อนุมัติ" และ "ขออนุมัติลงนาม" |
| คราม (indigo) | `#6366F1`, `#EEF2FF` | ธีมหน้า "ถอยสัญญา" |
| ชมพู (pink/rose) | `#EC4899`, `#FDF2F8`, `#BE185D` | badge สถานะการเซ็น |
| ฟ้าน้ำเงิน (sky) | `#0EA5E9`, `#0369A1`, `#E0F2FE` | badge "จัดทำสัญญา" |
| เส้นขอบ/คั่น | `#E2E8F0`, `#F1F5F9`, `#CBD5E1` | border การ์ด, เส้นแบ่งแถวตาราง |
| ตัวอักษรรอง | `#94A3B8`, `#64748B` | label รอง, แถว disabled |
| Topbar gradient | `linear-gradient(#33439C → #7EBEF3)` | พื้นหลัง header ด้านบน |

**กติกาการใช้สีสถานะ (recur เกือบทุกหน้า):** เทา=แบบร่าง, ส้ม=ส่งกลับแก้ไข/รอดำเนินการ, ม่วง=มอบหมายฝ่ายกฎหมาย, ฟ้า=อยู่ระหว่างตรวจ, เหลือง=รออนุมัติ, แดง=ความเสี่ยง/ปฏิเสธ, ชมพู=ลงนาม, ฟ้าน้ำเงิน=จัดทำเอกสาร, เขียว=เสร็จสิ้น — ควรยึด mapping นี้เป็นมาตรฐานเวลาเพิ่ม status ใหม่

## Typography

- ขนาดตัวอักษร: 11–15px สำหรับตาราง/เนื้อหา, 18–26px สำหรับ `<h1>` หัวข้อหน้า (`text-[26px] font-bold`), 12–13px สำหรับ label/badge
- น้ำหนัก: 400 = เนื้อหา, 500–600 = label/ปุ่ม, 700 = หัวข้อ/ค่าที่ต้องการเน้น (เช่น เลขสัญญาใช้สีน้ำเงิน + font-semibold/bold เสมอ)

## Spacing / Layout

- โครงหน้า: topbar สูง 56px (fixed), sidebar กว้าง 260px (fixed), เนื้อหาหลัก padding `p-7` (1.75rem) ลดเหลือ `p-4`/`p-3` บน tablet/mobile
- Border-radius: การ์ด/ตาราง 12px, modal 16px, ปุ่ม/input/badge 8–10px, status badge/pill โค้งเต็ม (rounded-full)
- เงา: การ์ดปกติ `0 1px 3px rgba(0,0,0,.06)`, modal `0 20px 60px rgba(0,0,0,.15)`, floating button `0 2px 8px`
- Breakpoint: 1024px (tablet — sidebar ย่อ 220px), 768px (mobile — sidebar กลายเป็น off-canvas drawer), 480px (mobile เล็ก — ลด offset ด้านบน)

## Component ที่ใช้ซ้ำ (Reusable Components)

| Component | CSS class หลัก | ลักษณะ |
|---|---|---|
| Stepper (แถบขั้นตอน) | `.stepper-wrapper` `.stepper` `.step` `.step-circle` `.step-line` | วงกลมเลขขั้นตอนแนวนอน สถานะ `.active` (ฟ้า, glow), `.done` (เขียว, เครื่องหมายถูก), `.pending` (เทา) — ใช้ใน LUR wizard step1-10 |
| Toggle switch | `.toggle` `.toggle-slider` | สวิตช์เปิด-ปิดสไตล์ iOS |
| History panel | `.history-btn` `.history-overlay` `.history-panel` `.timeline-item` `.timeline-dot` | ปุ่มลอย "ประวัติ" มุมขวาบน → เปิด drawer ขวากว้าง 460px แสดง timeline สีตามประเภทเหตุการณ์ (เขียว/ฟ้า/เหลือง/แดง/ม่วง) — render โดย `renderHistoryPanel()` ใน shared-layout.js (contract-tracking.html ทำ timeline แยกเองอีกชุดหนึ่ง ไม่ได้ reuse ตัวนี้) |
| Sidebar/nav | `.sidebar` `.sidebar-item` `.sidebar-overlay` `.hamburger-btn` | เมนูซ้าย fixed, พับเก็บได้บน desktop (เลื่อนไป -270px), เป็น overlay เต็มจอบน mobile |
| Signer table | `.signer-table` | ตาราง input/select แบบเรียบ สำหรับเพิ่มรายชื่อผู้ลงนาม |
| Badge/status pill | (ประกาศแยกต่อไฟล์ เช่น `badge-status` `badge-cs` `badge-rn-*` `badge-step`) | รูปแบบเดียวกันทุกที่: `inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold` + จุดสี — **ยังไม่ถูก dedupe เป็น class กลาง** ควรพิจารณารวมเป็น component เดียวถ้าจะสร้างระบบจริง |
| Data table | (utility class + inline style) | header สีกรมท่า `#1B3A6B` ตัวหนังสือขาว sticky, พื้นขาว, เส้นคั่น `#F1F5F9`, hover `#F8FAFC`, ปุ่ม action ไอคอนสี่เหลี่ยมมน 30×30px สีตามความหมาย (ดู=ฟ้า, แก้ไข=ส้ม, ยกเลิก/ลบ=แดง, เปลี่ยนผู้อนุมัติ=ม่วง, โอนย้าย=ฟ้า, ต่ออายุ=เหลืองอำพัน, ถอย=คราม) |
| Modal | `*-overlay` + `*-modal`/`*-card` | scrim ทึบเต็มจอ + การ์ดขาวโค้ง 16px แบ่ง header/body/footer, footer มีปุ่ม "ยกเลิก" (ghost) + ปุ่มยืนยันสี — หลายหน้าจอมี **success state สลับใน modal เดิม** (แทนที่จะปิด modal จะเปลี่ยน body เป็นเครื่องหมายถูก + ข้อความสำเร็จ + ปุ่ม "ปิด" เดียว) เป็น pattern ที่ควรทำเป็น template กลาง |
| Contract-search chips | `.contract-search-box` `.contract-tag` `.contract-dropdown` | ช่องค้นหาสัญญาแบบ multi-select เป็น tag ใช้ซ้ำแทบทุกจุด (เปลี่ยนแค่สี accent) ในหน้า change-approver/transfer/renew-status |
| Filter bar | (utility) | ช่องค้นหา + dropdown filter 1-หลายตัว + (บางหน้า) Flatpickr date-range + toggle Board/Table view วางในการ์ดขาวเหนือ ตาราง/board |
| Kanban board | `.lane` `.card` `.lane-header` `.card-actions` | การ์ดขอบซ้ายสี + avatar + tag chip, action icon โผล่ตอน hover — ใช้ใน contract-repository (11 lane), contract-renew (5 lane), memo-repository (6 lane) |
| Pagination | `.pagination` | ปุ่มเลขหน้า 36×36px + ลูกศรก่อนหน้า/ถัดไป (เป็น mock, ไม่มี logic จริง) |
| Toast | (fixed position, auto-dismiss) | มุมล่างขวา/บนขวา สีตามผลลัพธ์ auto ปิดเองใน ~2.5–3 วินาที หลังทำ action สำเร็จ |

## shared-layout.js — สิ่งที่ควบคุม

- `renderTopbar()` — แถบบน: ปุ่ม hamburger, โลโก้ "Plan B / Media", กระดิ่งแจ้งเตือน (badge ตัวเลข), avatar วงกลมชื่อย่อผู้ใช้
- `renderSidebar()` — เมนูซ้าย แบ่งกลุ่ม: **การจัดการสัญญา** (คลังสัญญา/อนุมัติ/ต่ออายุ/ติดตาม/การจัดการสัญญา), **คำขออื่นๆ** (ขอเอกสาร/ขอหนังสือค้ำประกัน/บันทึกข้อความ), **ทรัพย์สินทางปัญญาและเอกสาร** และ **การให้คำปรึกษาและรายงาน** (ทั้งสองกลุ่มหลังยังเป็น placeholder `href="#"`) — แต่ละหน้า highlight เมนูตัวเองด้วยการจับคู่ข้อความลิงก์
- `toggleSidebar()` — พับ/ขยาย sidebar (desktop) หรือเลื่อน overlay เข้า-ออก (mobile)
- `renderStepper()`, `renderStatusHeader()`, `renderNavButtons()`, `renderPreviousSteps()`, `renderHistoryPanel()`, `initPage()` — ชุดฟังก์ชันขับเคลื่อน LUR wizard 10 ขั้นตอนโดยเฉพาะ (มี `STEPS` array เก็บชื่อ/role/สถานะของแต่ละขั้น และ `STEP_SUMMARIES`/`HISTORY_DATA` เป็น mock data)
- `addSignerRow()`, `addTag()` — helper เล็กๆ สำหรับเพิ่มแถวผู้ลงนาม และแปลง input เป็น tag เมื่อกด Enter

**ข้อควรระวัง:** หน้า `contract-*.html` ทั้งหมด **ไม่ได้เรียกใช้** stepper/history-panel function จากไฟล์นี้โดยตรง (สงวนไว้เฉพาะ step wizard) แต่ไป implement modal/timeline ของตัวเองแยกต่างหาก — มี logic ซ้ำซ้อนที่ควรพิจารณารวมเป็น shared component จริงถ้าจะพัฒนาต่อเป็นระบบ production

/* ══════════════════════════════════════════
   Legal System – Shared Layout Components
   Tailwind 4 + Lucide Icons Edition
   ══════════════════════════════════════════ */

const STEPS = [
    { num: 1, label: 'สร้างคำขอ', role: 'user', status: 'แบบร่าง', file: 'step1-request.html', roleLabel: 'ผู้ใช้งานทั่วไป' },
    { num: 2, label: 'จ่ายงาน', role: 'legal-mgr', status: 'รอฝ่ายกฎหมายจ่ายงาน', file: 'step2-assign.html', roleLabel: 'ผู้จัดการฝ่ายกฎหมาย' },
    { num: 3, label: 'ตรวจสอบร่าง', role: 'legal', status: 'รอฝ่ายกฎหมายตรวจสอบ/ร่าง', file: 'step3-legal-review.html', roleLabel: 'ผู้ตรวจสอบฝ่ายกฎหมาย' },
    { num: 4, label: 'หัวหน้าอนุมัติ', role: 'manager', status: 'รอหัวหน้างานอนุมัติ', file: 'step4-approve.html', roleLabel: 'หัวหน้าฝ่ายของผู้ใช้งาน' },
    { num: 5, label: 'สรุปความเสี่ยง', role: 'legal-mgr', status: 'รอกฎหมายสรุปความเสี่ยง', file: 'step5-risk.html', roleLabel: 'ผู้จัดการฝ่ายกฎหมาย' },
    { num: 6, label: 'เลือกการลงนาม', role: 'user', status: 'เลือกประเภทการลงนาม', file: 'step6-sign-type.html', roleLabel: 'ผู้ใช้งานทั่วไป' },
    { num: 7, label: 'จัดทำสัญญา', role: 'legal', status: 'รอจัดทำสัญญาฉบับสมบูรณ์', file: 'step7-prepare.html', roleLabel: 'ผู้ตรวจสอบฝ่ายกฎหมาย' },
    { num: 8, label: 'แนบสัญญาฉบับสมบูรณ์', role: 'user', status: 'รอนำสัญญาฉบับสมบูรณ์เข้าระบบ', file: 'step8-signing.html', roleLabel: 'ผู้ใช้งานทั่วไป' },
    { num: 9, label: 'ตรวจสอบสัญญาฉบับสมบูรณ์', role: 'legal-admin', status: 'รอตรวจสอบสัญญาฉบับสมบูรณ์', file: 'step9-final-review.html', roleLabel: 'ผู้ดูแลระบบฝ่ายกฎหมาย' },
    { num: 10, label: 'เสร็จสิ้น', role: 'legal-admin', status: 'เสร็จสิ้น - เลขรับเอกสาร RCPB2026/002', file: 'step10-complete.html', roleLabel: 'ผู้ดูแลระบบฝ่ายกฎหมาย' },
];

/* ── Topbar ── */
function renderTopbar() {
    return `
    <div class="fixed top-0 inset-x-0 h-14 bg-gradient-to-br from-[#33439C] to-[#7EBEF3] flex items-center justify-between px-6 z-[100] shadow-[0_2px_10px_rgba(15,30,60,.18)]">
        <div class="flex items-center gap-3">
            <img src="logo.jpg" alt="Plan B Media" class="h-9 w-auto object-contain rounded-lg drop-shadow-[0_2px_6px_rgba(0,0,0,.25)]" onerror="this.style.display='none'">
            <div class="hidden sm:block leading-tight">
                <div class="text-white text-[15px] font-bold tracking-wide">Legal System</div>
            </div>
            <button class="hamburger-btn ml-2" onclick="toggleSidebar()" aria-label="เมนู"><i data-lucide="menu" class="w-5 h-5"></i></button>
        </div>
        <div class="flex items-center gap-4">
            <div class="w-[34px] h-[34px] rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-[13px] cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,.15)] ring-2 ring-white/40 hover:ring-white/70 transition">US</div>
        </div>
    </div>`;
}

/* ── Sidebar ── */
function renderSidebar() {
    return `
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
    <div class="sidebar" id="sidebarNav">
        <div class="flex items-center gap-2.5 px-5 pb-4 border-b border-slate-200">
            <i data-lucide="file-text" class="w-5 h-5 text-[#2563EB]"></i>
            <span class="text-[#2563EB] font-bold text-[17px] sidebar-brand-text">Legal System</span>
        </div>
        <div class="px-4 pt-3.5 pb-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider sidebar-section-title">ภาพรวม</div>
        <a class="sidebar-item" href="dashboard.html" data-label="Dashboard"><i data-lucide="layout-dashboard"></i> Dashboard</a>
        <div class="px-4 pt-3.5 pb-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider sidebar-section-title">การจัดการสัญญา</div>
        <a class="sidebar-item active" href="contract-repository.html" data-label="คลังสัญญา"><i data-lucide="warehouse"></i> คลังสัญญา</a>
        <a class="sidebar-item" href="contract-approve.html" data-label="อนุมัติสัญญา"><i data-lucide="circle-check-big"></i> อนุมัติสัญญา</a>
        <a class="sidebar-item" href="contract-renew.html" data-label="ต่ออายุสัญญา"><i data-lucide="refresh-cw"></i> ต่ออายุสัญญา</a>
        <a class="sidebar-item" href="contract-tracking.html" data-label="ติดตามสัญญา"><i data-lucide="clipboard-check"></i> ติดตามสัญญา</a>
        <a class="sidebar-item" href="contract-status-edit.html" data-label="การจัดการสัญญา"><i data-lucide="settings"></i> การจัดการสัญญา</a>
        <div class="px-4 pt-3.5 pb-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider sidebar-section-title">คำขออื่น ๆ</div>
        <a class="sidebar-item" href="#" data-label="ขอเอกสาร"><i data-lucide="file-text"></i> ขอเอกสาร</a>
        <a class="sidebar-item" href="#" data-label="ขอหนังสือค้ำประกัน"><i data-lucide="building-2"></i> ขอหนังสือค้ำประกัน</a>
        <a class="sidebar-item" href="memo-repository.html" data-label="บันทึกข้อความ"><i data-lucide="notebook-pen"></i> บันทึกข้อความ</a>
        <div class="px-4 pt-3.5 pb-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider sidebar-section-title">ทรัพย์สินทางปัญญาและเอกสาร</div>
        <a class="sidebar-item" href="#" data-label="กรมธรรม์"><i data-lucide="hammer"></i> กรมธรรม์</a>
        <a class="sidebar-item" href="#" data-label="ใบอนุญาต"><i data-lucide="id-card"></i> ใบอนุญาต</a>
        <a class="sidebar-item" href="#" data-label="เครื่องหมายการค้า"><i data-lucide="copyright"></i> เครื่องหมายการค้า</a>
        <div class="px-4 pt-3.5 pb-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider sidebar-section-title">การให้คำปรึกษาและรายงาน</div>
        <a class="sidebar-item" href="#" data-label="ปรึกษากฎหมาย"><i data-lucide="scale"></i> ปรึกษากฎหมาย</a>
        <a class="sidebar-item" href="#" data-label="รายงาน"><i data-lucide="bar-chart-3"></i> รายงาน</a>
    </div>
    <button class="sidebar-toggle" id="sidebarToggleBtn" onclick="toggleSidebar()" aria-label="ย่อ/ขยายเมนู"><i data-lucide="chevron-left"></i></button>`;
}

/* ── Clickable Stepper ── */
function renderStepper(currentStep) {
    let html = '<div class="stepper-wrapper"><div class="stepper">';
    STEPS.forEach((s, i) => {
        const cls = s.num < currentStep ? 'done' : s.num === currentStep ? 'active' : 'pending';
        const icon = s.num < currentStep ? '<i data-lucide="check" class="w-4 h-4"></i>' : s.num;
        html += `<div class="step ${cls}" onclick="window.location.href='${s.file}'"><div class="step-circle">${icon}</div><div class="step-label">${s.label}</div></div>`;
        if (i < STEPS.length - 1) {
            html += `<div class="step-line ${s.num < currentStep ? 'done' : ''}"></div>`;
        }
    });
    html += '</div></div>';
    return html;
}

/* ── Status Header ── */
function renderStatusHeader(currentStep) {
    const step = STEPS[currentStep - 1];
    const roleMap = {
        'user': ['ผู้ใช้งานทั่วไป', 'bg-green-100 text-green-700', 'user'],
        'manager': ['หัวหน้าฝ่ายของผู้ใช้งาน', 'bg-amber-100 text-amber-700', 'user-check'],
        'legal-mgr': ['ผู้จัดการฝ่ายกฎหมาย', 'bg-pink-100 text-pink-700', 'shield-check'],
        'legal': ['ผู้ตรวจสอบฝ่ายกฎหมาย', 'bg-pink-100 text-pink-700', 'scale'],
        'legal-admin': ['ผู้ดูแลระบบฝ่ายกฎหมาย', 'bg-pink-100 text-pink-700', 'settings']
    };
    const statusColors = {
        1: 'bg-slate-100 text-slate-500 border border-slate-300',
        2: 'bg-blue-50 text-blue-600 border border-blue-300',
        3: 'bg-violet-50 text-violet-600 border border-violet-300',
        4: 'bg-amber-50 text-amber-600 border border-amber-300',
        5: 'bg-rose-50 text-rose-600 border border-rose-300',
        6: 'bg-emerald-50 text-emerald-600 border border-emerald-300',
        7: 'bg-sky-50 text-sky-600 border border-sky-300',
        8: 'bg-orange-50 text-orange-600 border border-orange-300',
        9: 'bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-300',
        10: 'bg-green-50 text-green-600 border border-green-300'
    };
    const r = roleMap[step.role] || roleMap['legal'];
    return `
    <div class="flex items-center gap-4 mb-5 flex-wrap">
        ${currentStep > 1 ? '<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#1B3A6B] text-white text-sm font-bold tracking-wide"><i data-lucide="hash" class="w-4 h-4"></i> เลข LUR: PB2026/002</span>' : ''}
        <div class="flex items-center gap-3 ml-auto">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold ${r[1]}">
                <i data-lucide="${r[2]}" class="w-3.5 h-3.5"></i> ${step.roleLabel || r[0]}
            </span>
            <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-[13px] font-semibold ${statusColors[currentStep]}">
                <i data-lucide="circle" class="w-2 h-2 fill-current"></i> ${step.status}
            </span>
        </div>
    </div>`;
}

/* ── Step Summary Data ── */
const STEP_SUMMARIES = [
    {
        step: 1, icon: 'file-text', title: 'ข้อมูลคำขอสัญญา', roleLabel: 'ผู้ใช้งานทั่วไป', date: '26/03/2026 10:30 น.',
        fields: [
            ['ชื่อผู้ส่งคำขอ', 'นางสาววิภา สุขใจ'],
            ['เบอร์โทรศัพท์', '091-234-5678'],
            ['แผนก / กลุ่ม', 'ฝ่ายจัดซื้อ / กลุ่ม A'],
            ['ผู้อนุมัติ', 'คุณสมชาย ผู้จัดการฝ่าย'],
            ['บริษัทผู้ทำสัญญา', 'บริษัท แพลนบี มีเดีย จำกัด (มหาชน)'],
            ['คู่สัญญา', 'บริษัท เทคโนโลยี จำกัด'],
            ['ชื่อสัญญา', 'สัญญาจ้างพัฒนาระบบ ERP'],
            ['ประเภทสัญญา', 'สัญญาจ้างบริการ'],
            ['ระยะเวลา', '01/04/2026 - 31/03/2027 (12 เดือน)'],
            ['มูลค่ารวม', '2,500,000.00 บาท'],
            ['รูปแบบการชำระ', 'ชำระเป็นงวด'],
            ['หลักประกัน', 'LG — LG-2026-00158'],
            ['เงื่อนไขต่อสัญญา', 'แจ้งล่วงหน้า 30 วัน'],
            ['แนบไฟล์สัญญา', '<span class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-lg text-[13px] text-blue-600 font-medium"><i data-lucide="file-text" class="w-4 h-4"></i> Contract_Draft_v1.pdf</span>'],
            ['ผู้ลงนาม', 'คุณสมชาย (ผู้ลงนาม), คุณวิภา (พยาน)'],
        ]
    },
    {
        step: 2, icon: 'shield-check', title: 'จ่ายงานให้ผู้ตรวจสอบ', roleLabel: 'ผู้จัดการฝ่ายกฎหมาย', date: '26/03/2026 11:15 น.',
        fields: [
            ['ระดับความเสี่ยง', '<span class="text-amber-500 font-bold">&#9679; ปานกลาง (Medium)</span>'],
            ['ผู้ตรวจสอบ', 'คุณประสิทธิ์ ฝ่ายกฎหมาย'],
            ['วันที่ Assign Task', '26/03/2026'],
            ['ความเห็น', 'กรุณาตรวจสอบข้อมูลสัญญาและเงื่อนไขให้ครบถ้วน'],
        ]
    },
    {
        step: 3, icon: 'search', title: 'ตรวจสอบร่างสัญญา', roleLabel: 'ผู้ตรวจสอบฝ่ายกฎหมาย', date: '27/03/2026 09:00 น.',
        fields: [
            ['ผู้ตรวจสอบ', 'คุณประสิทธิ์ ฝ่ายกฎหมาย'],
            ['ผลการตรวจสอบ', '<span class="text-green-500 font-bold"><i data-lucide="circle-check" class="w-4 h-4 inline"></i> ข้อมูลถูกต้อง</span>'],
            ['สรุปสาระสำคัญ', 'สัญญาจ้างพัฒนาระบบ ERP ขอบเขตงานครอบคลุมการออกแบบ พัฒนา และทดสอบระบบ'],
            ['ตีตราสาร', 'ตีตราสารแล้ว'],
            ['แฮชแท็ก', '<span class="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full text-xs font-semibold">#ERP</span>'],
            ['ไฟล์ฉบับแก้ไข', '<span class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-lg text-[13px] text-blue-600 font-medium"><i data-lucide="file-text" class="w-4 h-4"></i> Contract_Draft_v2_reviewed.pdf</span>'],
        ]
    },
    {
        step: 4, icon: 'user-check', title: 'หัวหน้าฝ่ายอนุมัติ', roleLabel: 'หัวหน้าฝ่ายของผู้ใช้งาน', date: '27/03/2026 14:30 น.',
        fields: [
            ['ผู้อนุมัติ', 'คุณสมชาย ผู้จัดการฝ่าย'],
            ['ผลการอนุมัติ', '<span class="text-green-500 font-bold"><i data-lucide="circle-check" class="w-4 h-4 inline"></i> อนุมัติ</span>'],
            ['ความเห็น', 'เห็นชอบ ให้ดำเนินการต่อได้'],
        ]
    },
    {
        step: 5, icon: 'triangle-alert', title: 'สรุปความเสี่ยงของสัญญา', roleLabel: 'ผู้จัดการฝ่ายกฎหมาย', date: '28/03/2026 10:00 น.',
        fields: [
            ['ผู้ประเมิน', 'คุณวรพจน์ ฝ่ายกฎหมาย'],
            ['มีความเสี่ยง', '<span class="text-amber-500 font-bold">&#9679; ปานกลาง (Medium)</span>'],
            ['Remark', 'มูลค่าสัญญาสูง ควรตรวจสอบเงื่อนไขค่าปรับและการยกเลิกสัญญา'],
            ['ผลการอนุมัติ', '<span class="text-green-500 font-bold"><i data-lucide="circle-check" class="w-4 h-4 inline"></i> อนุมัติ</span>'],
            ['ความเห็น', 'ความเสี่ยงอยู่ในระดับที่ยอมรับได้ ให้ดำเนินการต่อ'],
        ]
    },
    {
        step: 6, icon: 'pen-tool', title: 'เลือกประเภทการลงนาม / เลขที่สัญญา', roleLabel: 'ผู้ใช้งานทั่วไป', date: '28/03/2026 15:00 น.',
        fields: [
            ['ประเภทการลงนาม', '<span class="font-bold">ลงนามเอกสารจริง (Print Out)</span>'],
            ['เลขที่สัญญา', '<span class="text-blue-600 font-bold">PB2026/002</span>'],
            ['ผู้ลงนาม', 'คุณสมชาย ผู้จัดการฝ่าย (ผู้ลงนาม)'],
            ['พยาน', 'นางสาววิภา สุขใจ (พยาน)'],
            ['ความเห็น', '-'],
        ]
    },
    {
        step: 7, icon: 'file-signature', title: 'จัดทำสัญญาฉบับสมบูรณ์', roleLabel: 'ผู้ตรวจสอบฝ่ายกฎหมาย', date: '29/03/2026 09:00 น.',
        fields: [
            ['ผู้จัดทำ', 'คุณประสิทธิ์ ฝ่ายกฎหมาย'],
            ['เอกสารประทับเลข', '<span class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-lg text-[13px] text-blue-600 font-medium"><i data-lucide="file-text" class="w-4 h-4"></i> Contract_PB2026_002_Stamped.pdf</span>'],
            ['ความเห็น', 'จัดทำสัญญาฉบับสมบูรณ์เรียบร้อยแล้ว พร้อมส่งให้ผู้ใช้แนบเข้าระบบ'],
        ]
    },
    {
        step: 8, icon: 'file-up', title: 'แนบไฟล์สัญญาฉบับสมบูรณ์', roleLabel: 'ผู้ใช้งานทั่วไป', date: '30/03/2026 10:00 น.',
        fields: [
            ['ผู้แนบไฟล์', 'นางสาววิภา สุขใจ'],
            ['สัญญาฉบับสมบูรณ์', '<span class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-lg text-[13px] text-blue-600 font-medium"><i data-lucide="file-text" class="w-4 h-4"></i> Contract_PB2026_002_Final.pdf</span>'],
            ['ความเห็น', 'แนบไฟล์สัญญาฉบับสมบูรณ์เข้าระบบเรียบร้อยแล้ว'],
        ]
    },
    {
        step: 9, icon: 'clipboard-check', title: 'ตรวจสอบเอกสารฉบับสมบูรณ์', roleLabel: 'ผู้ดูแลระบบฝ่ายกฎหมาย', date: '30/03/2026 14:00 น.',
        fields: [
            ['ผู้ตรวจสอบ', 'คุณอัญชลี ผู้ดูแลระบบ'],
            ['ผลการตรวจสอบ', '<span class="text-green-500 font-bold"><i data-lucide="circle-check" class="w-4 h-4 inline"></i> กดยืนยันเอกสารฉบับสมบูรณ์</span>'],
            ['ความเห็น', 'สัญญาถูกต้องครบถ้วน พร้อมจัดเก็บ'],
        ]
    },
];

/* ── Render Previous Steps (collapsible) ── */
function renderPreviousSteps(currentStep) {
    if (currentStep <= 1) return '';
    let html = '';
    for (let i = 0; i < currentStep - 1; i++) {
        const s = STEP_SUMMARIES[i];
        if (!s) continue;
        const rows = s.fields.map(f =>
            `<div class="flex justify-between items-center py-2.5 border-b border-slate-100 last:border-b-0 max-md:flex-col max-md:items-start max-md:gap-0.5">
                <span class="text-[13px] text-slate-500 font-medium">${f[0]}</span>
                <span class="text-[14px] text-slate-800 font-semibold">${f[1]}</span>
            </div>`
        ).join('');
        html += `
        <div class="bg-white rounded-xl p-5 mb-4 shadow-sm border border-green-200 bg-[#FAFFFE]">
            <div class="flex items-center gap-2.5 cursor-pointer flex-wrap" onclick="toggleCollapse(this)">
                <i data-lucide="circle-check" class="w-5 h-5 text-green-500 flex-shrink-0"></i>
                <span class="flex-1 font-bold text-green-700 text-[15px]">ขั้นตอนที่ ${s.step}: ${s.title}</span>
                <span class="text-[11px] text-slate-400 font-normal mr-2">${s.roleLabel} · ${s.date}</span>
                <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 collapse-icon"></i>
            </div>
            <div class="compact-body is-hidden mt-3">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-0">
                    ${rows}
                </div>
            </div>
        </div>`;
    }
    return html;
}

function toggleCollapse(el) {
    const body = el.parentElement.querySelector('.compact-body');
    const icon = el.querySelector('.collapse-icon');
    body.classList.toggle('is-hidden');
    if (icon) icon.style.transform = body.classList.contains('is-hidden') ? '' : 'rotate(180deg)';
}

/* ── Legacy wrapper ── */
function renderCompactSummary() {
    return renderPreviousSteps(2);
}

/* ── History Panel Data ── */
const HISTORY_DATA = [
    { step: 1, icon: 'send', color: 'blue', title: 'สร้างคำขอสัญญา / แบบร่าง', date: '26/03/2026 10:30 น.', operator: 'นางสาววิภา สุขใจ', role: 'ผู้ใช้งานทั่วไป', roleIcon: 'user', desc: 'สัญญาจ้างพัฒนาระบบ ERP — สร้างคำขอเรียบร้อย' },
    { step: 2, icon: 'shield-check', color: 'purple', title: 'ผู้จัดการฝ่ายกฎหมายจ่ายงาน', date: '26/03/2026 11:15 น.', operator: 'คุณวรพจน์ ฝ่ายกฎหมาย', role: 'ผู้จัดการฝ่ายกฎหมาย', roleIcon: 'shield-check', desc: 'มอบหมาย คุณประสิทธิ์ ฝ่ายกฎหมาย | ระดับความเสี่ยง: ปานกลาง' },
    { step: 3, icon: 'search', color: 'purple', title: 'ฝ่ายกฎหมายตรวจสอบร่างสัญญา — ผ่าน', date: '27/03/2026 09:00 น.', operator: 'คุณประสิทธิ์ ฝ่ายกฎหมาย', role: 'ผู้ตรวจสอบฝ่ายกฎหมาย', roleIcon: 'scale', desc: 'ข้อมูลถูกต้อง — ส่งต่อหัวหน้าฝ่ายอนุมัติ' },
    { step: 4, icon: 'user-check', color: 'yellow', title: 'หัวหน้าฝ่ายอนุมัติ', date: '27/03/2026 14:30 น.', operator: 'คุณสมชาย ผู้จัดการฝ่าย', role: 'หัวหน้าฝ่ายของผู้ใช้งาน', roleIcon: 'user-check', desc: 'อนุมัติ — ส่งต่อสรุปความเสี่ยง' },
    { step: 5, icon: 'triangle-alert', color: 'red', title: 'สรุปความเสี่ยง — ปานกลาง (Medium)', date: '28/03/2026 10:00 น.', operator: 'คุณวรพจน์ ฝ่ายกฎหมาย', role: 'ผู้จัดการฝ่ายกฎหมาย', roleIcon: 'shield-check', desc: 'อนุมัติ — ส่งให้ผู้ใช้เลือกประเภทการลงนาม' },
    { step: 6, icon: 'pen-tool', color: 'green', title: 'เลือกประเภทการลงนาม — Print Out', date: '28/03/2026 15:00 น.', operator: 'นางสาววิภา สุขใจ', role: 'ผู้ใช้งานทั่วไป', roleIcon: 'user', desc: 'ประทับเลขสัญญา PB2026/002' },
    { step: 7, icon: 'file-signature', color: 'blue', title: 'จัดทำสัญญาฉบับสมบูรณ์', date: '29/03/2026 09:00 น.', operator: 'คุณประสิทธิ์ ฝ่ายกฎหมาย', role: 'ผู้ตรวจสอบฝ่ายกฎหมาย', roleIcon: 'scale', desc: 'จัดทำสัญญาเรียบร้อย' },
    { step: 8, icon: 'file-up', color: 'yellow', title: 'แนบไฟล์สัญญาฉบับสมบูรณ์เข้าระบบ', date: '30/03/2026 10:00 น.', operator: 'นางสาววิภา สุขใจ', role: 'ผู้ใช้งานทั่วไป', roleIcon: 'user', desc: 'แนบ Contract_PB2026_002_Final.pdf' },
    { step: 9, icon: 'clipboard-check', color: 'purple', title: 'ผู้ดูแลระบบตรวจสอบ — ผ่าน', date: '30/03/2026 14:00 น.', operator: 'คุณอัญชลี ผู้ดูแลระบบ', role: 'ผู้ดูแลระบบฝ่ายกฎหมาย', roleIcon: 'settings', desc: 'กดยืนยันเอกสารฉบับสมบูรณ์' },
    { step: 10, icon: 'check-check', color: 'green', title: 'เสร็จสิ้น — จัดเก็บสัญญา', date: '30/03/2026 15:00 น.', operator: 'คุณอัญชลี ผู้ดูแลระบบ', role: 'ผู้ดูแลระบบฝ่ายกฎหมาย', roleIcon: 'settings', desc: 'จัดเก็บสัญญา ตู้: CAB-A03-015' },
];

/* ── History Panel ── */
function renderHistoryPanel(currentStep) {
    const items = HISTORY_DATA.filter(h => h.step <= currentStep);
    let timelineHtml = '';
    items.forEach((h) => {
        const isLast = h.step === currentStep;
        const dotColor = isLast ? 'blue' : 'green';
        timelineHtml += `
        <div class="timeline-item">
            <div class="timeline-dot ${dotColor}"><i data-lucide="${h.icon}"></i></div>
            <div class="flex-1">
                <div class="font-bold text-slate-800 text-[13px]">Step ${h.step}: ${h.title}</div>
                <div class="text-xs text-slate-400 mt-0.5"><i data-lucide="clock" class="w-3 h-3 inline -mt-px mr-1"></i>${h.date}</div>
                <div class="inline-flex items-center gap-1.5 mt-1.5 px-3 py-0.5 bg-slate-100 rounded-full text-xs text-slate-500 font-medium">
                    <i data-lucide="${h.roleIcon}" class="w-3 h-3"></i> ${h.operator} <span class="text-slate-300 mx-1">|</span> ${h.role}
                </div>
                ${h.desc ? `<div class="text-xs text-slate-500 mt-1">${h.desc}</div>` : ''}
            </div>
        </div>`;
    });

    return `
    <button class="history-btn" onclick="toggleHistory()">
        <i data-lucide="history" class="w-4 h-4"></i> History
        <span class="bg-blue-600 text-white text-[11px] px-2 py-px rounded-lg font-bold">${items.length}</span>
    </button>
    <div class="history-overlay" id="historyOverlay" onclick="toggleHistory()"></div>
    <div class="history-panel" id="historyPanel">
        <div class="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-gradient-to-br from-[#1B3A6B] to-[#234E8E] text-white">
            <h3 class="text-[17px] font-bold flex items-center gap-2.5"><i data-lucide="history" class="w-5 h-5"></i> ประวัติการดำเนินการ</h3>
            <button class="bg-white/15 border-none text-white w-8 h-8 rounded-lg cursor-pointer flex items-center justify-center hover:bg-white/30 transition-colors" onclick="toggleHistory()"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>
        <div class="flex-1 overflow-y-auto p-6">
            ${timelineHtml}
        </div>
    </div>`;
}

function toggleHistory() {
    document.getElementById('historyOverlay').classList.toggle('open');
    document.getElementById('historyPanel').classList.toggle('open');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebarNav');
    const overlay = document.getElementById('sidebarOverlay');
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        // Mobile: slide in/out with overlay
        if (sidebar) sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('open');
    } else {
        // Desktop: collapse/expand sidebar and shift main content
        if (sidebar) sidebar.classList.toggle('collapsed');
        const mainContent = document.querySelector('.ml-\\[260px\\]');
        if (mainContent) {
            if (sidebar.classList.contains('collapsed')) {
                mainContent.style.marginLeft = '72px';
            } else {
                mainContent.style.marginLeft = '';
            }
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
}

/* ── Init Page ── */
function initPage(currentStep) {
    document.getElementById('topbar-container').innerHTML = renderTopbar();
    document.getElementById('sidebar-container').innerHTML = renderSidebar();
    document.getElementById('stepper-container').innerHTML = renderStepper(currentStep);
    document.getElementById('status-header').innerHTML = renderStatusHeader(currentStep);
    const navEl = document.getElementById('nav-buttons');
    if (navEl) navEl.innerHTML = renderNavButtons(currentStep);
    const prevEl = document.getElementById('previous-steps');
    if (prevEl) prevEl.innerHTML = renderPreviousSteps(currentStep);
    const historyContainer = document.getElementById('history-container');
    if (historyContainer) {
        historyContainer.innerHTML = renderHistoryPanel(currentStep);
    } else {
        const div = document.createElement('div');
        div.id = 'history-container';
        div.innerHTML = renderHistoryPanel(currentStep);
        document.body.appendChild(div);
    }
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function renderNavButtons(currentStep) {
    const next = currentStep < 10 ? STEPS[currentStep] : null;
    let html = '<div class="flex justify-end gap-3 pt-5 mt-5 border-t border-slate-200">';
    html += `<a href="contract-repository.html" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-white border border-slate-300 text-slate-500 hover:bg-slate-50 transition-colors no-underline"><i data-lucide="list" class="w-4 h-4"></i> กลับคลังสัญญา</a>`;
    if (next) html += `<a href="${next.file}" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#88D2F2] text-[#1B3A6B] hover:bg-[#6BBFE0] transition-colors no-underline"><i data-lucide="arrow-right" class="w-4 h-4"></i> ขั้นตอนถัดไป</a>`;
    html += '</div>';
    return html;
}

/* ── Helper: Signer Row ── */
function addSignerRow(tbodyId) {
    const body = document.getElementById(tbodyId);
    const n = body.rows.length + 1;
    const row = body.insertRow();
    row.className = 'border-b border-slate-200 hover:bg-slate-50';
    row.innerHTML = `<td class="px-3 py-2 text-slate-700">${n}</td><td class="px-3 py-2"><input type="text" placeholder="ชื่อ-นามสกุล" class="w-full px-2 py-1.5 border border-slate-300 rounded text-sm"></td><td class="px-3 py-2 text-center"><button class="text-red-500 hover:text-red-700 transition-colors" onclick="this.closest('tr').remove()"><i data-lucide="x" class="w-4 h-4 mx-auto"></i></button></td>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* ── Helper: Tag ── */
function addTag(e, input) {
    if (e.key === 'Enter' && input.value.trim()) {
        e.preventDefault();
        const tag = document.createElement('div');
        tag.className = 'inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-0.5 rounded-full text-xs font-semibold';
        const v = input.value.trim().startsWith('#') ? input.value.trim() : '#' + input.value.trim();
        tag.innerHTML = `${v} <span class="cursor-pointer text-blue-300 text-sm hover:text-blue-600" onclick="this.parentElement.remove()">&times;</span>`;
        input.parentElement.insertBefore(tag, input);
        input.value = '';
    }
}
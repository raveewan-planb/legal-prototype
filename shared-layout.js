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
    <div class="topbar">
        <div class="topbar-glow"></div>
        <div class="flex items-center gap-3 relative z-[1]">
            <div class="topbar-brand">
                <img src="logo.jpg" alt="Plan B Media" class="topbar-logo" onerror="this.style.display='none'">
                <div class="topbar-brand-text">
                    <div class="topbar-brand-title">Legal System</div>
                </div>
            </div>
        </div>
        <div class="flex items-center gap-2.5 relative z-[1]">
            <div class="topbar-user">
                <div class="topbar-avatar">US<span class="topbar-online"></span></div>
                <div class="topbar-user-meta">
                    <div class="topbar-user-name">User System</div>
                    <div class="topbar-user-role">ผู้ใช้งานทั่วไป</div>
                </div>
            </div>
        </div>
    </div>`;
}

/* ── Sidebar ── */
function renderSidebar() {
    return `
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
    <aside class="sidebar" id="sidebarNav">
        <div class="sidebar-nav">
            <div class="sb-top">
            <a class="sidebar-item" href="dashboard.html" data-label="Dashboard"><i data-lucide="layout-dashboard"></i><span class="sb-text">Dashboard</span></a>
            </div>
            <div class="sb-sec open">
                <button type="button" class="sidebar-section-title sb-sec-toggle" onclick="toggleSbSection(this)"><span>การจัดการสัญญา</span><i data-lucide="chevron-down" class="sb-sec-chev"></i></button>
                <div class="sb-sec-body"><div class="sb-sec-inner">
            <a class="sidebar-item active" href="contract-repository.html" data-label="คลังสัญญา"><i data-lucide="warehouse"></i><span class="sb-text">คลังสัญญา</span></a>
            <a class="sidebar-item" href="contract-approve.html" data-label="อนุมัติสัญญา"><i data-lucide="circle-check-big"></i><span class="sb-text">อนุมัติสัญญา</span><span class="sb-badge">3</span></a>
            <a class="sidebar-item" href="contract-renew.html" data-label="ต่ออายุสัญญา"><i data-lucide="refresh-cw"></i><span class="sb-text">ต่ออายุสัญญา</span></a>
            <a class="sidebar-item" href="contract-tracking.html" data-label="ติดตามสัญญา"><i data-lucide="clipboard-check"></i><span class="sb-text">ติดตามสัญญา</span></a>
            <a class="sidebar-item" href="contract-status-edit.html" data-label="การจัดการสัญญา"><i data-lucide="settings"></i><span class="sb-text">การจัดการสัญญา</span></a>
                </div></div>
            </div>
            <div class="sb-sec open">
                <button type="button" class="sidebar-section-title sb-sec-toggle" onclick="toggleSbSection(this)"><span>คำขออื่น ๆ</span><i data-lucide="chevron-down" class="sb-sec-chev"></i></button>
                <div class="sb-sec-body"><div class="sb-sec-inner">
            <a class="sidebar-item" href="#" data-label="ขอเอกสาร"><i data-lucide="file-text"></i><span class="sb-text">ขอเอกสาร</span></a>
            <a class="sidebar-item" href="#" data-label="ขอหนังสือค้ำประกัน"><i data-lucide="building-2"></i><span class="sb-text">ขอหนังสือค้ำประกัน</span></a>
            <a class="sidebar-item" href="memo-repository.html" data-label="บันทึกข้อความ"><i data-lucide="notebook-pen"></i><span class="sb-text">บันทึกข้อความ</span></a>
                </div></div>
            </div>
            <div class="sb-sec open">
                <button type="button" class="sidebar-section-title sb-sec-toggle" onclick="toggleSbSection(this)"><span>ทรัพย์สินทางปัญญาและเอกสาร</span><i data-lucide="chevron-down" class="sb-sec-chev"></i></button>
                <div class="sb-sec-body"><div class="sb-sec-inner">
            <a class="sidebar-item" href="#" data-label="กรมธรรม์"><i data-lucide="shield"></i><span class="sb-text">กรมธรรม์</span></a>
            <a class="sidebar-item" href="#" data-label="ใบอนุญาต"><i data-lucide="id-card"></i><span class="sb-text">ใบอนุญาต</span></a>
            <a class="sidebar-item" href="#" data-label="เครื่องหมายการค้า"><i data-lucide="copyright"></i><span class="sb-text">เครื่องหมายการค้า</span></a>
                </div></div>
            </div>
            <div class="sb-sec open">
                <button type="button" class="sidebar-section-title sb-sec-toggle" onclick="toggleSbSection(this)"><span>การให้คำปรึกษาและรายงาน</span><i data-lucide="chevron-down" class="sb-sec-chev"></i></button>
                <div class="sb-sec-body"><div class="sb-sec-inner">
            <a class="sidebar-item" href="#" data-label="ปรึกษากฎหมาย"><i data-lucide="scale"></i><span class="sb-text">ปรึกษากฎหมาย</span></a>
            <a class="sidebar-item" href="#" data-label="รายงาน"><i data-lucide="bar-chart-3"></i><span class="sb-text">รายงาน</span></a>
                </div></div>
            </div>
            <div class="sb-sec open">
                <button type="button" class="sidebar-section-title sb-sec-toggle" onclick="toggleSbSection(this)"><span>ตั้งค่าระบบ</span><i data-lucide="chevron-down" class="sb-sec-chev"></i></button>
                <div class="sb-sec-body"><div class="sb-sec-inner">
            <a class="sidebar-item" href="#" data-label="ข้อมูลหลัก"><i data-lucide="database"></i><span class="sb-text">ข้อมูลหลัก</span></a>
            <a class="sidebar-item" href="#" data-label="ผู้ใช้งาน"><i data-lucide="users"></i><span class="sb-text">ผู้ใช้งาน</span></a>
                </div></div>
            </div>
        </div>
    </aside>
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
        ${currentStep > 1 ? '<span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#022867] text-white text-sm font-bold tracking-wide"><i data-lucide="hash" class="w-4 h-4"></i> เลข LUR: PB2026/002</span>' : ''}
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
        <div class="bg-white rounded-xl p-5 mb-4 shadow-sm border border-green-200 bg-[#F1FBFF]">
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
        <div class="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-gradient-to-br from-[#022867] to-[#213268] text-white">
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

function toggleSbSection(btn) {
    const sec = btn.closest('.sb-sec');
    sec.classList.toggle('open');
    try {
        const st = JSON.parse(localStorage.getItem('sbSections') || '{}');
        st[btn.textContent.trim()] = sec.classList.contains('open');
        localStorage.setItem('sbSections', JSON.stringify(st));
    } catch (e) {}
}

function restoreSbSections() {
    let st = {};
    try { st = JSON.parse(localStorage.getItem('sbSections') || '{}'); } catch (e) {}
    document.querySelectorAll('.sb-sec').forEach(sec => {
        const k = sec.querySelector('.sb-sec-toggle').textContent.trim();
        if (st[k] === false && !sec.querySelector('.sidebar-item.active')) sec.classList.remove('open');
    });
}
document.addEventListener('DOMContentLoaded', restoreSbSections);

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
    if (next) html += `<a href="${next.file}" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#B9DDFF] text-[#022867] hover:bg-[#7FC0FB] transition-colors no-underline"><i data-lucide="arrow-right" class="w-4 h-4"></i> ขั้นตอนถัดไป</a>`;
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

/* ── Row View Modal (shared) ── */
function ensureViewModal() {
    if (document.getElementById('sharedViewModal')) return;
    const wrap = document.createElement('div');
    wrap.id = 'sharedViewModal';
    wrap.className = 'view-overlay';
    wrap.innerHTML = `
        <div class="view-modal" role="dialog" aria-modal="true">
            <div class="view-head">
                <div class="view-head-icon"><i data-lucide="file-text" id="svmIcon"></i></div>
                <div class="view-head-text">
                    <div class="view-head-sub" id="svmSub"></div>
                    <div class="view-head-title" id="svmTitle"></div>
                    <div class="view-chips" id="svmChips"></div>
                </div>
                <button class="view-close" onclick="closeViewModal()" aria-label="ปิด"><i data-lucide="x"></i></button>
            </div>
            <div class="view-body" id="svmBody"></div>
            <div class="view-foot">
                <button class="view-btn secondary" onclick="window.print()"><i data-lucide="printer" class="w-4 h-4"></i> พิมพ์</button>
                <span class="flex-1"></span>
                <button class="view-btn secondary" onclick="closeViewModal()"><i data-lucide="x" class="w-4 h-4"></i> ปิด</button>
                <a class="view-btn primary" id="svmDetailLink" href="#"><i data-lucide="external-link" class="w-4 h-4"></i> เปิดหน้าเต็ม</a>
            </div>
        </div>`;
    wrap.addEventListener('click', e => { if (e.target === wrap) closeViewModal(); });
    document.body.appendChild(wrap);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeViewModal(); });
}

function closeViewModal() {
    const m = document.getElementById('sharedViewModal');
    if (m) m.classList.remove('open');
    document.body.style.overflow = '';
}

const VM = {
    hash(str) { let h = 0; for (const c of String(str)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; },
    pick(arr, seed) { return arr[seed % arr.length]; },
    empty: '<span class="view-empty">—</span>',
    tone(t) {
        t = t || '';
        if (/ไม่อนุมัติ|ยกเลิก|ปฏิเสธ|เกินกำหนด|หมดอายุแล้ว|สูง|High/i.test(t)) return 'red';
        if (/เสร็จ|อนุมัติแล้ว|สำเร็จ|ต่ออายุแล้ว|ต่ำ|Low|อัตโนมัติ/i.test(t)) return 'green';
        if (/รอ|ปานกลาง|Medium|ใกล้|ติดตาม/i.test(t)) return 'amber';
        if (/แบบร่าง|Draft/i.test(t)) return 'slate';
        return 'blue';
    },
    chip(text, icon) {
        if (!text) return '';
        return `<span class="view-chip ${VM.tone(text)}">${icon ? `<i data-lucide="${icon}"></i>` : ''}${text}</span>`;
    },
    files(list) {
        return `<div class="view-files">${list.map(f => {
            const ext = f.split('.').pop().toLowerCase();
            const ic = ext === 'pdf' ? 'file-text' : /xls/.test(ext) ? 'file-spreadsheet' : /doc/.test(ext) ? 'file-type' : 'file';
            return `<span class="view-file ${ext}"><i data-lucide="${ic}"></i><span>${f}</span><i data-lucide="download" class="dl"></i></span>`;
        }).join('')}</div>`;
    },
    parsePeriod(p) {
        const m = (p || '').match(/(\d{2}\/\d{2}\/\d{4})\s*-\s*(\d{2}\/\d{2}\/\d{4})/);
        if (!m) return null;
        const d = s => { const [dd, mm, yy] = s.split('/').map(Number); return new Date(yy, mm - 1, dd); };
        const a = d(m[1]), b = d(m[2]);
        const months = Math.max(1, Math.round((b - a) / (1000 * 60 * 60 * 24 * 30.44)));
        const y = Math.floor(months / 12), mo = months % 12;
        return { start: m[1], end: m[2], text: (y ? y + ' ปี ' : '') + (mo ? mo + ' เดือน' : '') || '-' , endDate: b };
    }
};

function vmCollect(btn) {
    const map = {};
    const row = btn.closest('tr');
    if (row && row.dataset.view) {
        try { return { map: JSON.parse(row.dataset.view), row }; } catch (e) {}
    }
    if (row) {
        const table = row.closest('table');
        const hr = table && table.tHead ? table.tHead.querySelector('tr:last-child') : null;
        const heads = hr ? Array.from(hr.children).map(th => (th.innerText || th.textContent || '').trim()) : [];
        Array.from(row.children).forEach((td, i) => {
            const k = heads[i]; if (!k || /จัดการ/.test(k)) return;
            const text = (td.innerText || td.textContent || '').replace(/\s+/g, ' ').trim();
            map[k] = { text, html: text && text !== '-' ? td.innerHTML.trim() : '' };
        });
        return { map, row };
    }
    const card = btn.closest('.card');
    if (card) {
        const q = s => { const el = card.querySelector(s); return el ? el.textContent.replace(/\s+/g, ' ').trim() : ''; };
        const lane = card.closest('.lane');
        const set = (k, v) => { if (v) map[k] = { text: v, html: v }; };
        set('เลขสัญญา', card.dataset.contract);
        set('เลขบันทึก', card.dataset.memo);
        set('ชื่อสัญญา', q('.card-title'));
        set('เรื่อง', q('.card-title'));
        set('ประเภทสัญญา', q('.card-tag.type'));
        set('คู่สัญญา', q('.card-tag.company'));
        set('ผู้รับผิดชอบ', q('.card-assignee .name'));
        set('วันที่สร้างคำขอ', q('.card-date'));
        set('สถานะในระบบ', lane ? (lane.querySelector('.lane-title') || {}).textContent : '');
        set('สถานะ', lane ? (lane.querySelector('.lane-title') || {}).textContent : '');
    }
    return { map, row: null };
}

function vmGetter(map) {
    return (keys, fallback) => {
        for (const k of [].concat(keys)) {
            const hit = Object.keys(map).find(h => h === k) || Object.keys(map).find(h => h.includes(k));
            if (hit && map[hit].html) return map[hit].html;
        }
        return fallback === undefined ? '' : fallback;
    };
}
function vmText(map) {
    return keys => {
        for (const k of [].concat(keys)) {
            const hit = Object.keys(map).find(h => h === k) || Object.keys(map).find(h => h.includes(k));
            if (hit && map[hit].text && map[hit].text !== '-') return map[hit].text;
        }
        return '';
    };
}

function vmStepOf(status) {
    if (!status) return 0;
    if (/เสร็จสิ้น/.test(status)) return 10;
    const idx = STEPS.findIndex(s => status.includes(s.label) || s.status.includes(status) || status.includes(s.status.replace(/^รอ/, '')));
    if (idx >= 0) return idx + 1;
    const kw = [[/แบบร่าง|Draft/i, 1], [/จ่ายงาน/, 2], [/ตรวจสอบ.*ร่าง|ร่าง/, 3], [/หัวหน้า/, 4], [/ความเสี่ยง/, 5], [/ลงนาม/, 6], [/จัดทำ/, 7], [/ฉบับสมบูรณ์.*เข้าระบบ|แนบ/, 8], [/ตรวจสอบ.*สมบูรณ์/, 9]];
    for (const [re, n] of kw) if (re.test(status)) return n;
    return 3;
}

function vmProgress(steps, current) {
    return `<div class="view-progress">${steps.map((l, i) => {
        const n = i + 1, cls = n < current ? 'done' : n === current ? 'active' : '';
        return `<div class="vp-step ${cls}"><div class="vp-dot">${n < current ? '<i data-lucide="check"></i>' : n}</div><div class="vp-label">${l}</div></div>`;
    }).join('<div class="vp-line"></div>')}</div>`;
}

function vmSection(title, icon, fields, extra) {
    const rows = fields.filter(Boolean).map(f => {
        const [label, value, opt] = f;
        return `<div class="view-row ${opt === 'full' ? 'full' : ''}"><div class="view-row-label">${label}</div><div class="view-row-value">${value || VM.empty}</div></div>`;
    }).join('');
    return `<section class="view-section">
        <div class="view-sec-title"><span class="vst-ico"><i data-lucide="${icon}"></i></span>${title}</div>
        ${extra || ''}${rows ? `<div class="view-grid">${rows}</div>` : ''}
    </section>`;
}

function vmContract(map, page) {
    const g = vmGetter(map), t = vmText(map);
    const no = t(['เลขสัญญา']) || 'ยังไม่ออกเลขสัญญา';
    const seed = VM.hash(no + t(['ชื่อสัญญา']));
    const p = VM.parsePeriod(t(['ระยะเวลาสัญญา'])) || { start: '01/04/2026', end: '31/03/2027', text: '1 ปี', endDate: new Date(2027, 2, 31) };
    const owner = t(['ผู้รับผิดชอบ']) || 'นางสาววิภา สุขใจ';
    const dept = t(['แผนก']) || VM.pick(['ฝ่ายจัดซื้อ', 'ฝ่ายเทคโนโลยีสารสนเทศ', 'ฝ่ายการตลาด', 'ฝ่ายบัญชีและการเงิน'], seed);
    const amount = t(['มูลค่าสัญญา', 'มูลค่า']) || VM.pick(['2,500,000.00', '850,000.00', '1,200,000.00', '4,750,000.00', '360,000.00'], seed);
    const risk = t(['ระดับความเสี่ยง']) || VM.pick(['ต่ำ (Low)', 'ปานกลาง (Medium)', 'สูง (High)'], seed);
    const status = t(['สถานะในระบบ']) || STEPS[(seed % 9)].status;
    const renewCond = t(['สถานะต่อสัญญา']) || VM.pick(['แจ้งล่วงหน้า 30 วัน', 'ต่ออายุอัตโนมัติ', 'ไม่มีการต่ออายุ', 'แจ้งภายในวันที่กำหนด'], seed);
    const hasLG = seed % 3 !== 0;
    const step = vmStepOf(status);
    const active = p.endDate && p.endDate < new Date() ? 'สิ้นสุดแล้ว' : 'มีผลบังคับใช้';
    const fileBase = /\//.test(no) ? no.replace('/', '_') : 'Draft';

    const sections = {
        progress: vmSection('ความคืบหน้าตาม Workflow', 'git-branch', [], vmProgress(STEPS.map(s => s.label), step)),
        requester: vmSection('ข้อมูลผู้ส่งคำขอ', 'user', [
            ['ชื่อผู้ส่งคำขอ', owner],
            ['เบอร์โทรศัพท์ที่ติดต่อได้', '0' + (80 + seed % 19) + '-' + String(seed % 900 + 100) + '-' + String(seed % 9000 + 1000)],
            ['แผนก', dept],
            ['กลุ่ม', seed % 2 ? 'A - สำนักงานใหญ่' : 'B - สาขา'],
            ['ผู้อนุมัติ', VM.pick(['คุณสมชาย ผู้จัดการฝ่าย', 'คุณพรทิพย์ ผู้อำนวยการ', 'คุณอนุชา ผู้จัดการฝ่าย'], seed)],
            ['วันที่สร้างคำขอ', g(['วันที่สร้างคำขอ'], '26/03/2026 10:30')]
        ]),
        contract: vmSection('ข้อมูลสัญญา', 'file-text', [
            ['เลขสัญญา', `<b class="text-[#2D56D2]">${no}</b>`],
            ['ประเภทสัญญา', g(['ประเภทสัญญา'], 'สัญญาจ้างบริการ')],
            ['ชื่อสัญญา', g(['ชื่อสัญญา'], '-'), 'full'],
            ['บริษัทผู้ทำสัญญา', g(['บริษัท'], 'บริษัท แพลนบี มีเดีย จำกัด (มหาชน)')],
            ['คู่สัญญา', g(['คู่สัญญา'], 'บริษัท เทคโนโลยี จำกัด')],
            ['ประเภทคู่สัญญา', seed % 4 ? 'นิติบุคคล' : 'บุคคลธรรมดา'],
            ['LUR เดิม', page === 'renew' ? 'PB' + (2025) + '/' + String(seed % 900 + 100) : '']
        ].filter(f => f[0] !== 'LUR เดิม' || f[1])),
        period: vmSection('ระยะเวลาสัญญา', 'calendar-range', [
            ['วันที่ทำสัญญา', p.start],
            ['วันเริ่มต้นสัญญา', p.start],
            ['วันสิ้นสุดสัญญา', p.end],
            ['ระยะเวลาสัญญา', p.text],
            ['ผลบังคับใช้สัญญา', VM.chip(active, active === 'มีผลบังคับใช้' ? 'circle-check' : 'circle-x')]
        ]),
        payment: vmSection('มูลค่าและการชำระเงิน', 'banknote', [
            ['มูลค่ารวม', `<b>${amount}</b> บาท`],
            ['สกุลเงิน', 'THB (บาท)'],
            ['คำนวณอัตราแลกเปลี่ยน (บาท)', amount + ' บาท'],
            ['รูปแบบการชำระ', VM.pick(['ชำระเป็นงวด', 'ชำระครั้งเดียว', 'ชำระรายเดือน', 'แลกเปลี่ยน (Barter)'], seed)],
            ['เงื่อนไขการชำระ', 'ชำระภายใน 30 วันนับจากวันที่ได้รับใบแจ้งหนี้และส่งมอบงานครบถ้วน', 'full']
        ]),
        guarantee: vmSection('หลักประกันสัญญา', 'shield-check', hasLG ? [
            ['มีหลักประกันสัญญา', VM.chip('มี', 'check')],
            ['ประเภทหลักประกัน', VM.pick(['LG (หนังสือค้ำประกัน)', 'แคชเชียร์เช็ค', 'เงินสด'], seed)],
            ['เลขอ้างอิง LG', 'LG-2026-' + String(seed % 90000 + 10000)],
            ['จำนวนเงินหลักประกัน', '5% ของมูลค่าสัญญา'],
            ['ช่วงเวลา', p.start + ' - ' + p.end, 'full']
        ] : [['มีหลักประกันสัญญา', VM.chip('ไม่มี', 'minus')]]),
        renew: vmSection('เงื่อนไขการต่อสัญญา', 'refresh-cw', [
            ['เงื่อนไขการต่อสัญญา', VM.chip(renewCond, 'repeat')],
            ['ระยะเวลาแจ้งล่วงหน้า', /แจ้งล่วงหน้า/.test(renewCond) ? '30 วัน' : ''],
            ['แจ้งเตือนภายในวันที่', /แจ้ง/.test(renewCond) ? p.end : '']
        ]),
        signer: vmSection('ผู้ลงนาม', 'pen-tool', [
            ['ผู้ลงนามในสัญญา', 'คุณสมชาย ผู้จัดการฝ่าย (ผู้ลงนาม)<br><span class="text-slate-500 text-xs">นางสาววิภา สุขใจ (พยาน)</span>'],
            ['ผู้ลงนามในเอกสารประกอบสัญญา', 'คุณพรทิพย์ ผู้อำนวยการ'],
            ['ประเภทการลงนาม', step >= 6 ? VM.pick(['ลงนามเอกสารจริง (Print Out)', 'e-Signature'], seed) : ''],
            ['เลขที่สัญญาที่ประทับ', step >= 6 ? no : '']
        ]),
        legal: vmSection('ฝ่ายกฎหมาย', 'scale', [
            ['ระดับความเสี่ยง', step >= 2 ? VM.chip(risk, 'triangle-alert') : ''],
            ['ผู้ตรวจสอบ', step >= 2 ? 'คุณประสิทธิ์ ฝ่ายกฎหมาย' : ''],
            ['วันที่ Assign Task', step >= 2 ? '27/03/2026' : ''],
            ['ตีตราสาร', step >= 3 ? 'ตีตราสารแล้ว' : ''],
            ['สรุปสาระสำคัญของสัญญา', step >= 3 ? 'ขอบเขตงานครอบคลุมการออกแบบ พัฒนา ทดสอบ และส่งมอบระบบ พร้อมรับประกันผลงาน 12 เดือน มีค่าปรับกรณีส่งมอบล่าช้าร้อยละ 0.1 ต่อวัน' : '', 'full'],
            ['แฮชแท็ก', step >= 3 ? '<span class="view-tag">#' + (g(['ประเภทสัญญา'], 'สัญญา').replace(/<[^>]+>/g, '').replace(/^สัญญา/, '') || 'Contract') + '</span><span class="view-tag">#' + dept.replace(/^ฝ่าย/, '') + '</span>' : '', 'full']
        ]),
        files: vmSection('ไฟล์แนบ', 'paperclip', [], VM.files([
            `Contract_${fileBase}_Draft_v1.pdf`,
            ...(step >= 3 ? [`Contract_${fileBase}_reviewed.pdf`, 'Appendix_A_SOW.xlsx'] : []),
            ...(step >= 8 ? [`Contract_${fileBase}_Final.pdf`] : [])
        ])),
        note: vmSection('หมายเหตุ', 'message-square-text', [['หมายเหตุ', g(['หมายเหตุ'], 'ประสานงานคู่สัญญาเรื่องกำหนดส่งมอบงวดแรกเรียบร้อยแล้ว'), 'full']])
    };

    const order = ['progress', 'requester', 'contract', 'period', 'payment', 'guarantee', 'renew', 'signer', 'legal', 'files', 'note'];
    let lead = '';

    if (page === 'approve') {
        lead = vmSection('การอนุมัติ', 'user-check', [
            ['ขั้นตอนปัจจุบัน', VM.chip(status, 'clock')],
            ['ผู้อนุมัติ', 'คุณสมชาย ผู้จัดการฝ่าย'],
            ['ส่งเข้าอนุมัติเมื่อ', g(['วันที่สร้างคำขอ'], '27/03/2026 14:30')],
            ['ระยะเวลารออนุมัติ', (seed % 5 + 1) + ' วัน'],
            ['ความเห็นล่าสุด', 'ฝ่ายกฎหมายตรวจสอบร่างแล้ว ข้อมูลถูกต้องครบถ้วน', 'full']
        ]);
    }
    if (page === 'renew') {
        const left = t(['จำนวนวันคงเหลือ']);
        lead = vmSection('การต่ออายุสัญญา', 'refresh-cw', [
            ['สถานะการต่อสัญญา', g(['สถานะการต่อสัญญา'], VM.chip('รอดำเนินการ'))],
            ['จำนวนวันคงเหลือ', g(['จำนวนวันคงเหลือ'], left || '-')],
            ['วันที่ปรับสถานะ', g(['วันที่ปรับสถานะ'], '-')],
            ['ผู้ปรับสถานะ', owner],
            ['หมายเหตุการต่อสัญญา', g(['หมายเหตุ'], '-'), 'full']
        ]);
        order.splice(order.indexOf('note'), 1);
    }
    if (page === 'tracking') {
        lead = vmSection('การติดตามสัญญา', 'clipboard-check', [
            ['สถานะการติดตามสัญญา', g(['สถานะการติดตาม'], VM.chip('อยู่ระหว่างติดตาม'))],
            ['วันที่สรุปความเสี่ยง', g(['วันที่สรุปความเสี่ยง'], '-')],
            ['วันคงเหลือนำส่งฉบับสมบูรณ์', g(['วันคงเหลือนำส่ง'], '-')],
            ['ผู้ติดตาม', 'คุณประสิทธิ์ ฝ่ายกฎหมาย'],
            ['บันทึกการติดตาม', g(['หมายเหตุ'], '-'), 'full']
        ]);
        order.splice(order.indexOf('note'), 1);
    }

    return {
        icon: 'file-text',
        sub: { repository: 'คลังสัญญา', approve: 'อนุมัติสัญญา', renew: 'ต่ออายุสัญญา', tracking: 'ติดตามสัญญา' }[page] + ' · ' + no,
        title: t(['ชื่อสัญญา']) || 'รายละเอียดสัญญา',
        chips: [VM.chip(page === 'renew' ? (t(['สถานะการต่อสัญญา']) || status) : page === 'tracking' ? (t(['สถานะการติดตาม']) || status) : status, 'activity'), VM.chip(risk, 'triangle-alert'), `<span class="view-chip blue"><i data-lucide="tag"></i>${t(['ประเภทสัญญา']) || 'สัญญาจ้างบริการ'}</span>`].join(''),
        body: lead + order.map(k => sections[k]).join('')
    };
}

function vmMemo(map) {
    const g = vmGetter(map), t = vmText(map);
    const no = t(['เลขบันทึก']) || 'MEMO-202604001';
    const type = t(['ประเภทบันทึก']) || 'ขอถอยสัญญา';
    const status = t(['สถานะ']) || 'แบบร่าง';
    const seed = VM.hash(no);
    const owner = t(['ผู้รับผิดชอบ']) || 'นางสาววิภา สุขใจ';
    const ref = t(['เลขอ้างอิง']) || 'PB2026/0' + (seed % 90 + 10);
    const memoSteps = ['สร้างบันทึกข้อความ', 'หัวหน้าฝ่ายอนุมัติ', 'กฎหมายอนุมัติ', 'กฎหมายดำเนินการ'];
    const cur = /เสร็จ|ดำเนินการแล้ว/.test(status) ? 5 : /กฎหมายดำเนินการ/.test(status) ? 4 : /กฎหมาย/.test(status) ? 3 : /หัวหน้า|รออนุมัติ/.test(status) ? 2 : 1;

    const typeFields = {
        'ขอถอยสัญญา': [['เลขอ้างอิง LUR', `<b class="text-[#2D56D2]">${ref}</b>`], ['สถานะที่จะถอยสัญญา', VM.chip('ฝ่ายกฎหมายตรวจสอบร่างสัญญา', 'undo-2')]],
        'การแก้สัญญาฉบับสมบูรณ์': [['เลขอ้างอิง LUR', `<b class="text-[#2D56D2]">${ref}</b>`], ['รายการที่ต้องแก้ไข', 'แก้ไขชื่อผู้ลงนามและเลขที่บัญชีรับชำระเงินในภาคผนวก ก.', 'full']],
        'ขอทำสัญญาย้อนหลัง': [['บริษัทผู้ทำสัญญา', 'บริษัท แพลนบี มีเดีย จำกัด (มหาชน), บริษัท มาสเตอร์ แอนด์ มอร์ จำกัด', 'full'], ['ปีย้อนหลัง', '2025'], ['จำนวนสัญญา', (seed % 4 + 1) + ' ฉบับ'], ['ผู้รับผิดชอบสัญญา', owner], ['หัวหน้าผู้อนุมัติ', 'คุณสมชาย ผู้จัดการฝ่าย']],
        'ขอยกเลิกสัญญา': [['เลขอ้างอิง LUR', `<b class="text-[#2D56D2]">${ref}</b>`], ['เหตุผลการยกเลิก', 'คู่สัญญาไม่สามารถส่งมอบงานได้ตามกำหนด และตกลงยุติสัญญาร่วมกัน', 'full']]
    };
    const tKey = Object.keys(typeFields).find(k => type.includes(k.replace('การ', ''))) || Object.keys(typeFields).find(k => type.includes(k));
    const extra = tKey ? typeFields[tKey] : [['ข้อมูลอื่นๆ', 'รายละเอียดคำขอเพิ่มเติมตามที่ระบุ', 'full']];

    const approvals = memoSteps.map((s, i) => {
        const n = i + 1, st = n < cur ? 'อนุมัติแล้ว' : n === cur ? 'รอดำเนินการ' : '';
        const who = ['ผู้ใช้งานทั่วไป · ' + owner, 'หัวหน้าฝ่าย · คุณสมชาย', 'ผู้จัดการฝ่ายกฎหมาย · คุณวรพจน์', 'ผู้ดูแลระบบฝ่ายกฎหมาย · คุณอัญชลี'][i];
        return `<div class="view-approval ${n < cur ? 'done' : n === cur ? 'active' : ''}">
            <div class="va-dot">${n < cur ? '<i data-lucide="check"></i>' : n}</div>
            <div class="flex-1 min-w-0"><div class="va-title">${s}</div><div class="va-sub">${who}</div></div>
            ${st ? VM.chip(st) : '<span class="va-wait">ยังไม่ถึงขั้นตอน</span>'}
        </div>`;
    }).join('');

    return {
        icon: 'notebook-pen',
        sub: 'บันทึกข้อความ · ' + no,
        title: t(['เรื่อง']) || 'บันทึกข้อความ',
        chips: [VM.chip(status, 'activity'), `<span class="view-chip blue"><i data-lucide="tag"></i>${type}</span>`].join(''),
        body:
            vmSection('ความคืบหน้า', 'git-branch', [], vmProgress(memoSteps, cur)) +
            vmSection('ข้อมูลผู้ส่งคำขอ', 'user', [
                ['ชื่อผู้ส่งคำขอ', owner],
                ['เบอร์โทรศัพท์', '0' + (80 + seed % 19) + '-' + String(seed % 900 + 100) + '-' + String(seed % 9000 + 1000)],
                ['แผนก', VM.pick(['ฝ่ายจัดซื้อ', 'ฝ่ายเทคโนโลยีสารสนเทศ', 'ฝ่ายการตลาด'], seed)],
                ['ผู้อนุมัติ', 'คุณสมชาย ผู้จัดการฝ่าย'],
                ['วันที่สร้างคำขอ', g(['วันที่สร้างคำขอ'], '28/03/2026')]
            ]) +
            vmSection('ข้อมูลบันทึกข้อความ', 'file-text', [
                ['เลขบันทึก', `<b class="text-[#2D56D2]">${no}</b>`],
                ['ประเภทบันทึก', VM.chip(type, 'tag')],
                ['เรื่อง', g(['เรื่อง'], '-'), 'full'],
                ...extra
            ]) +
            vmSection('รายละเอียด', 'align-left', [], `<div class="view-richtext">
                <p><b>เรียน</b> ฝ่ายกฎหมาย</p>
                <p>ด้วย${map['แผนก'] ? map['แผนก'].text : 'ฝ่ายจัดซื้อ'} มีความประสงค์${type}ตามรายละเอียดเรื่อง "${t(['เรื่อง']) || '-'}" ${tKey && tKey !== 'ขอทำสัญญาย้อนหลัง' ? 'อ้างอิงสัญญาเลขที่ ' + ref : ''} จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ</p>
                <p class="text-slate-500">จึงเรียนมาเพื่อโปรดพิจารณา</p>
            </div>`) +
            vmSection('การอนุมัติ', 'user-check', [], `<div class="view-approvals">${approvals}</div>`) +
            vmSection('ไฟล์แนบ & หมายเหตุ', 'paperclip', [['หมายเหตุ', 'ต้องการผลการพิจารณาภายในสัปดาห์นี้', 'full']], VM.files([`${no}.pdf`, 'เอกสารประกอบ.pdf']))
    };
}

function openViewModal(btn) {
    ensureViewModal();
    const { map } = vmCollect(btn);
    const file = (location.pathname.split('/').pop() || '').toLowerCase();
    const page = /memo/.test(file) ? 'memo' : /approve/.test(file) ? 'approve' : /renew/.test(file) ? 'renew' : /tracking/.test(file) ? 'tracking' : 'repository';
    const data = page === 'memo' ? vmMemo(map) : vmContract(map, page);

    document.getElementById('svmIcon').setAttribute('data-lucide', data.icon);
    document.getElementById('svmSub').textContent = data.sub;
    document.getElementById('svmTitle').textContent = data.title;
    document.getElementById('svmChips').innerHTML = data.chips;
    const body = document.getElementById('svmBody');
    body.innerHTML = data.body;
    body.scrollTop = 0;
    body.querySelectorAll('.view-section').forEach((s, i) => s.style.animationDelay = (i * 0.05) + 's');

    let href = btn.getAttribute('href') || '';
    const oc = btn.getAttribute('onclick') || '';
    const m = oc.match(/location\.href\s*=\s*['"]([^'"]+)['"]/);
    if (!href && m) href = m[1];
    const link = document.getElementById('svmDetailLink');
    if (href && href !== '#') { link.href = href; link.style.display = ''; } else link.style.display = 'none';

    document.getElementById('sharedViewModal').classList.add('open');
    document.body.style.overflow = 'hidden';
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

document.addEventListener('click', function (e) {
    const btn = e.target.closest('.action-btn.view');
    if (!btn) return;
    if (!btn.closest('tr') && !btn.closest('.card')) return;
    e.preventDefault();
    e.stopPropagation();
    openViewModal(btn);
}, true);

let _delTarget = null;
function ensureDeleteModal() {
    if (document.getElementById('sharedDeleteModal')) return;
    const w = document.createElement('div');
    w.id = 'sharedDeleteModal';
    w.className = 'view-overlay';
    w.innerHTML = `
        <div class="del-modal" role="alertdialog" aria-modal="true">
            <button class="del-x" onclick="closeDeleteModal()" aria-label="ปิด"><i data-lucide="x"></i></button>
            <div class="del-ico"><i data-lucide="trash-2"></i></div>
            <div class="del-title">ยืนยันการลบรายการ</div>
            <div class="del-desc">คุณต้องการลบรายการนี้ใช่หรือไม่? ข้อมูลที่ลบแล้วจะไม่สามารถกู้คืนได้</div>
            <div class="del-item" id="sdmItem"></div>
            <div class="del-actions">
                <button class="view-btn secondary" onclick="closeDeleteModal()"><i data-lucide="x" class="w-4 h-4"></i> ยกเลิก</button>
                <button class="view-btn danger" id="sdmConfirm" onclick="confirmDelete()"><i data-lucide="trash-2" class="w-4 h-4"></i> ลบ</button>
            </div>
        </div>`;
    w.addEventListener('click', e => { if (e.target === w) closeDeleteModal(); });
    document.body.appendChild(w);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDeleteModal(); });
}

function openDeleteModal(btn) {
    ensureDeleteModal();
    const { map } = vmCollect(btn);
    const t = vmText(map);
    const no = t(['เลขสัญญา', 'เลขบันทึก']) || 'ยังไม่มีเลขที่ (แบบร่าง)';
    const name = t(['ชื่อสัญญา', 'เรื่อง']) || '-';
    const status = t(['สถานะในระบบ', 'สถานะ']);
    document.getElementById('sdmItem').innerHTML = `
        <div class="di-ico"><i data-lucide="file-text"></i></div>
        <div class="flex-1 min-w-0"><div class="di-no">${no}</div><div class="di-name">${name}</div></div>
        ${status ? VM.chip(status) : ''}`;
    _delTarget = btn.closest('tr') || btn.closest('.card');
    document.getElementById('sharedDeleteModal').classList.add('open');
    document.body.style.overflow = 'hidden';
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeDeleteModal() {
    const m = document.getElementById('sharedDeleteModal');
    if (m) m.classList.remove('open');
    document.body.style.overflow = '';
}

function confirmDelete() {
    const el = _delTarget;
    closeDeleteModal();
    if (el) {
        el.classList.add('row-removing');
        setTimeout(() => el.remove(), 350);
    }
    showToast('ลบรายการเรียบร้อยแล้ว');
    _delTarget = null;
}

function showToast(msg, type) {
    let box = document.getElementById('toastBox');
    if (!box) { box = document.createElement('div'); box.id = 'toastBox'; document.body.appendChild(box); }
    const el = document.createElement('div');
    el.className = 'toast ' + (type || 'success');
    el.innerHTML = `<i data-lucide="${type === 'error' ? 'circle-x' : 'circle-check'}"></i><span>${msg}</span>`;
    box.appendChild(el);
    if (typeof lucide !== 'undefined') lucide.createIcons();
    setTimeout(() => el.classList.add('hide'), 2600);
    setTimeout(() => el.remove(), 3000);
}

document.addEventListener('click', function (e) {
    const btn = e.target.closest('.action-btn.delete');
    if (!btn || (!btn.closest('tr') && !btn.closest('.card'))) return;
    e.preventDefault();
    e.stopPropagation();
    openDeleteModal(btn);
}, true);

/* ── Date Picker (shared) ── */
const LDP = {
    MONTHS: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
    DOW: ['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
    PRESETS: [
        ['today', 'วันนี้', 'calendar-check'],
        ['thisMonth', 'เดือนนี้', 'calendar-days'],
        ['lastMonth', 'เดือนก่อน', 'calendar-minus'],
        ['thisYear', 'ปีนี้', 'calendar-range'],
        ['lastYear', 'ปีก่อน', 'history']
    ],
    pad: n => String(n).padStart(2, '0'),
    fmt(d) { return d ? `${LDP.pad(d.getDate())}/${LDP.pad(d.getMonth() + 1)}/${d.getFullYear()}` : ''; },
    iso(d) { return d ? `${d.getFullYear()}-${LDP.pad(d.getMonth() + 1)}-${LDP.pad(d.getDate())}` : ''; },
    parse(s) {
        if (!s) return null;
        let m = String(s).match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        if (m) return new Date(+m[3], +m[2] - 1, +m[1]);
        m = String(s).match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
        return null;
    },
    today() { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); },
    same(a, b) { return a && b && a.getTime() === b.getTime(); },
    preset(key) {
        const t = LDP.today(), y = t.getFullYear(), m = t.getMonth();
        return {
            today: [t, t],
            thisMonth: [new Date(y, m, 1), new Date(y, m + 1, 0)],
            lastMonth: [new Date(y, m - 1, 1), new Date(y, m, 0)],
            thisYear: [new Date(y, 0, 1), new Date(y, 11, 31)],
            lastYear: [new Date(y - 1, 0, 1), new Date(y - 1, 11, 31)]
        }[key];
    },

    pop: null, opts: null, view: null, anchor: null,

    ensurePop() {
        if (LDP.pop) return;
        const p = document.createElement('div');
        p.className = 'ldp-pop';
        p.addEventListener('mousedown', e => e.stopPropagation());
        p.addEventListener('click', LDP.onPopClick);
        p.addEventListener('change', e => {
            if (e.target.matches('.ldp-msel')) LDP.view.setMonth(+e.target.value);
            if (e.target.matches('.ldp-ysel')) LDP.view.setFullYear(+e.target.value);
            LDP.render();
        });
        p.addEventListener('mouseover', e => {
            const d = e.target.closest('.ldp-day');
            if (!d || !LDP.opts || !LDP.opts.rangeStart || LDP.opts.role !== 'end') return;
            const hv = LDP.parse(d.dataset.date);
            p.querySelectorAll('.ldp-day').forEach(x => {
                const xd = LDP.parse(x.dataset.date);
                x.classList.toggle('preview', xd > LDP.opts.rangeStart && xd <= hv);
            });
        });
        document.body.appendChild(p);
        LDP.pop = p;
        document.addEventListener('mousedown', e => {
            if (LDP.pop.classList.contains('open') && !(LDP.anchor && LDP.anchor.contains(e.target))) LDP.close();
        });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') LDP.close(); });
        window.addEventListener('resize', () => LDP.place());
        window.addEventListener('scroll', () => LDP.place(), true);
    },

    open(anchor, opts) {
        LDP.ensurePop();
        LDP.anchor = anchor;
        LDP.opts = opts;
        const base = opts.value || (opts.role === 'end' && opts.rangeStart) || opts.min || LDP.today();
        LDP.view = new Date(base.getFullYear(), base.getMonth(), 1);
        document.querySelectorAll('.ldp-field.is-open, .ldp-single.is-open').forEach(x => x.classList.remove('is-open'));
        (anchor.closest('.ldp-single') || anchor).classList.add('is-open');
        LDP.render();
        LDP.pop.classList.add('open');
        LDP.place();
    },

    close() {
        if (!LDP.pop) return;
        LDP.pop.classList.remove('open');
        document.querySelectorAll('.ldp-field.is-open, .ldp-single.is-open').forEach(x => x.classList.remove('is-open'));
        LDP.anchor = null;
    },

    place() {
        if (!LDP.pop || !LDP.anchor || !LDP.pop.classList.contains('open')) return;
        if (window.innerWidth <= 640) { LDP.pop.style.left = ''; LDP.pop.style.top = ''; return; }
        const r = LDP.anchor.getBoundingClientRect();
        const pw = LDP.pop.offsetWidth, ph = LDP.pop.offsetHeight;
        let left = Math.min(r.left, window.innerWidth - pw - 12);
        let top = r.bottom + 8;
        if (top + ph > window.innerHeight - 12 && r.top - ph - 8 > 12) top = r.top - ph - 8;
        LDP.pop.style.left = Math.max(12, left) + 'px';
        LDP.pop.style.top = top + 'px';
    },

    render() {
        const o = LDP.opts, v = LDP.view, t = LDP.today();
        const y = v.getFullYear(), m = v.getMonth();
        const first = (new Date(y, m, 1).getDay() + 6) % 7;
        const start = new Date(y, m, 1 - first);
        const rs = o.rangeStart, re = o.rangeEnd;
        let days = '';
        for (let i = 0; i < 42; i++) {
            const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
            const cls = ['ldp-day'];
            if (d.getMonth() !== m) cls.push('muted');
            if (LDP.same(d, t)) cls.push('today');
            if ((o.min && d < o.min) || (o.max && d > o.max)) cls.push('disabled');
            if (rs && re && d > rs && d < re) cls.push('in-range');
            if (LDP.same(d, rs)) cls.push('r-start');
            if (LDP.same(d, re)) cls.push('r-end');
            if (LDP.same(d, o.value)) cls.push('selected');
            days += `<button type="button" class="${cls.join(' ')}" data-date="${LDP.fmt(d)}">${d.getDate()}</button>`;
        }
        const yNow = t.getFullYear();
        let years = '';
        for (let yy = yNow - 10; yy <= yNow + 10; yy++) years += `<option value="${yy}" ${yy === y ? 'selected' : ''}>${yy}</option>`;
        const presets = o.presets ? `<div class="ldp-presets">
            <div class="ldp-ptitle">ช่วงเวลา</div>
            ${LDP.PRESETS.map(([k, l, ic]) => `<button type="button" class="ldp-preset ${o.activePreset === k ? 'active' : ''}" data-preset="${k}"><i data-lucide="${ic}"></i>${l}</button>`).join('')}
        </div>` : '';
        LDP.pop.innerHTML = `
            ${presets}
            <div class="ldp-cal">
                <div class="ldp-title"><span class="ldp-step">${o.stepLabel || ''}</span>${o.title || 'เลือกวันที่'}</div>
                <div class="ldp-nav">
                    <button type="button" class="ldp-arrow" data-nav="-1" aria-label="เดือนก่อนหน้า"><i data-lucide="chevron-left"></i></button>
                    <select class="ldp-msel">${LDP.MONTHS.map((n, i) => `<option value="${i}" ${i === m ? 'selected' : ''}>${n}</option>`).join('')}</select>
                    <select class="ldp-ysel">${years}</select>
                    <button type="button" class="ldp-arrow" data-nav="1" aria-label="เดือนถัดไป"><i data-lucide="chevron-right"></i></button>
                </div>
                <div class="ldp-dow">${LDP.DOW.map(d => `<span>${d}</span>`).join('')}</div>
                <div class="ldp-grid">${days}</div>
                <div class="ldp-foot">
                    <button type="button" class="ldp-link" data-act="clear">ล้างค่า</button>
                    <button type="button" class="ldp-today" data-act="today"><i data-lucide="calendar-check"></i>วันนี้</button>
                </div>
            </div>`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    onPopClick(e) {
        const o = LDP.opts; if (!o) return;
        const nav = e.target.closest('[data-nav]');
        if (nav) { LDP.view.setMonth(LDP.view.getMonth() + +nav.dataset.nav); LDP.render(); return; }
        const pr = e.target.closest('[data-preset]');
        if (pr && o.onPreset) { const [a, b] = LDP.preset(pr.dataset.preset); LDP.close(); o.onPreset(a, b, pr.dataset.preset); return; }
        const act = e.target.closest('[data-act]');
        if (act && act.dataset.act === 'clear') { LDP.close(); o.onClear && o.onClear(); return; }
        if (act && act.dataset.act === 'today') {
            const t = LDP.today();
            if ((o.min && t < o.min) || (o.max && t > o.max)) { LDP.view = new Date(t.getFullYear(), t.getMonth(), 1); LDP.render(); return; }
            LDP.close(); o.onPick(t); return;
        }
        const day = e.target.closest('.ldp-day');
        if (day && !day.classList.contains('disabled')) { LDP.close(); o.onPick(LDP.parse(day.dataset.date)); }
    },

    initRange(box) {
        if (box.dataset.ldpReady) return;
        box.dataset.ldpReady = '1';
        const phS = box.dataset.phStart || 'วันเริ่มต้น', phE = box.dataset.phEnd || 'วันสิ้นสุด';
        const hid = id => { let el = id && document.getElementById(id); if (!el) { el = document.createElement('input'); el.type = 'hidden'; if (id) el.id = id; box.appendChild(el); } return el; };
        box.classList.add('ldp-range');
        box.innerHTML = `
            <button type="button" class="ldp-field" data-role="start"><i data-lucide="calendar"></i><span class="ldp-val" data-ph="${phS}">${phS}</span><i data-lucide="chevron-down" class="ldp-caret"></i></button>
            <span class="ldp-sep"><i data-lucide="arrow-right"></i></span>
            <button type="button" class="ldp-field" data-role="end"><i data-lucide="calendar"></i><span class="ldp-val" data-ph="${phE}">${phE}</span><i data-lucide="chevron-down" class="ldp-caret"></i></button>
            <span class="ldp-badge"></span>
            <button type="button" class="ldp-clear" title="ล้างช่วงวันที่"><i data-lucide="x"></i></button>`;
        const hFrom = hid(box.dataset.from), hTo = hid(box.dataset.to);
        const st = { a: null, b: null, preset: '' };
        const fS = box.querySelector('[data-role="start"]'), fE = box.querySelector('[data-role="end"]');
        const sync = fire => {
            [[fS, st.a], [fE, st.b]].forEach(([f, d]) => {
                const v = f.querySelector('.ldp-val');
                v.textContent = d ? LDP.fmt(d) : v.dataset.ph;
                f.classList.toggle('has-value', !!d);
            });
            hFrom.value = LDP.iso(st.a); hTo.value = LDP.iso(st.b);
            box.classList.toggle('has-value', !!(st.a || st.b));
            const pl = LDP.PRESETS.find(p => p[0] === st.preset);
            box.querySelector('.ldp-badge').textContent = pl ? pl[1] : '';
            box.classList.toggle('has-preset', !!pl);
            if (!fire) return;
            [hFrom, hTo].forEach(h => h.dispatchEvent(new Event('change', { bubbles: true })));
            box.dispatchEvent(new CustomEvent('ldp:change', { bubbles: true, detail: { start: st.a, end: st.b, preset: st.preset } }));
            const cb = box.dataset.onchange && window[box.dataset.onchange];
            if (typeof cb === 'function') cb(st.a, st.b);
        };
        const common = () => ({
            presets: true, activePreset: st.preset, rangeStart: st.a, rangeEnd: st.b,
            onPreset: (a, b, k) => { st.a = a; st.b = b; st.preset = k; sync(true); },
            onClear: () => { st.a = st.b = null; st.preset = ''; sync(true); }
        });
        const openStart = () => LDP.open(fS, Object.assign(common(), {
            role: 'start', stepLabel: '1/2', title: 'เลือก' + phS, value: st.a, max: st.b,
            onPick: d => { st.a = d; st.preset = ''; sync(true); if (!st.b || st.b < d) setTimeout(openEnd, 60); }
        }));
        const openEnd = () => LDP.open(fE, Object.assign(common(), {
            role: 'end', stepLabel: '2/2', title: 'เลือก' + phE, value: st.b, min: st.a,
            onPick: d => { st.b = d; st.preset = ''; sync(true); }
        }));
        fS.addEventListener('click', openStart);
        fE.addEventListener('click', openEnd);
        box.querySelector('.ldp-clear').addEventListener('click', e => { e.stopPropagation(); st.a = st.b = null; st.preset = ''; sync(true); });
        box.ldp = {
            set(a, b, k) { st.a = LDP.parse(a) || a || null; st.b = LDP.parse(b) || b || null; st.preset = k || ''; sync(true); },
            get() { return { start: st.a, end: st.b, preset: st.preset }; }
        };
        st.a = LDP.parse(hFrom.value); st.b = LDP.parse(hTo.value);
        sync(false);
    },

    initSingle(input) {
        if (input.dataset.ldpReady) return;
        input.dataset.ldpReady = '1';
        input.readOnly = true;
        input.autocomplete = 'off';
        if (!input.placeholder) input.placeholder = 'dd/mm/yyyy';
        const wrap = document.createElement('div');
        wrap.className = 'ldp-single';
        input.parentNode.insertBefore(wrap, input);
        wrap.appendChild(input);
        wrap.insertAdjacentHTML('beforeend', '<button type="button" class="ldp-sbtn" tabindex="-1" aria-label="เปิดปฏิทิน"><i data-lucide="calendar"></i></button>');
        const lim = sel => { if (!sel) return null; const el = document.querySelector(sel); return el ? LDP.parse(el.value) : null; };
        const set = d => {
            input.value = LDP.fmt(d);
            const isoT = input.dataset.ldpIso && document.getElementById(input.dataset.ldpIso);
            if (isoT) isoT.value = LDP.iso(d);
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
        };
        const open = () => {
            if (input.disabled) return;
            LDP.open(input, {
                presets: false, title: input.dataset.ldpTitle || 'เลือกวันที่',
                value: LDP.parse(input.value), min: lim(input.dataset.ldpMin), max: lim(input.dataset.ldpMax),
                onPick: d => set(d), onClear: () => set(null)
            });
        };
        input.addEventListener('click', open);
        wrap.querySelector('.ldp-sbtn').addEventListener('click', () => { input.focus(); open(); });
    },

    autoInit(root) {
        const r = root || document;
        r.querySelectorAll('[data-ldp-range]').forEach(LDP.initRange);
        r.querySelectorAll('input[data-ldp], input.date-pick').forEach(LDP.initSingle);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
};
document.addEventListener('DOMContentLoaded', () => LDP.autoInit());

/* ── Reject Reason Popup (shared) ── */
const REJECT_REASONS = [
    { reason: 'ข้อมูลผู้รับผิดชอบใหม่ไม่ถูกต้อง กรุณาตรวจสอบแผนกและตำแหน่งของผู้รับผิดชอบอีกครั้ง', by: 'คุณอัญชลี ผู้ดูแลระบบฝ่ายกฎหมาย' },
    { reason: 'สัญญาอยู่ระหว่างการตรวจสอบร่างโดยฝ่ายกฎหมาย ไม่สามารถดำเนินการได้ในขณะนี้', by: 'คุณวรพจน์ ผู้จัดการฝ่ายกฎหมาย' },
    { reason: 'เอกสารประกอบไม่ครบถ้วน กรุณาแนบหนังสืออนุมัติจากหัวหน้าฝ่ายก่อนยื่นคำขอใหม่', by: 'คุณอัญชลี ผู้ดูแลระบบฝ่ายกฎหมาย' },
    { reason: 'ผู้อนุมัติที่เลือกไม่มีสิทธิ์อนุมัติสัญญาประเภทนี้ตามระเบียบอำนาจอนุมัติของบริษัท', by: 'คุณวรพจน์ ผู้จัดการฝ่ายกฎหมาย' },
    { reason: 'สถานะที่ขอปรับไม่สอดคล้องกับข้อมูลการต่อสัญญาในระบบ กรุณาระบุสัญญาอ้างอิงให้ถูกต้อง', by: 'คุณประสิทธิ์ ฝ่ายกฎหมาย' }
];

function enhanceRejectBadges(root) {
    (root || document).querySelectorAll('.ts-rejected, .badge-rejected, [data-reject-reason]').forEach((badge, i) => {
        if (badge.dataset.rjReady || badge.closest('.seg-radio')) return;
        badge.dataset.rjReady = '1';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'rj-info';
        btn.title = 'ดูเหตุผลที่ไม่อนุมัติ';
        btn.setAttribute('aria-label', 'ดูเหตุผลที่ไม่อนุมัติ');
        btn.innerHTML = '<i data-lucide="message-circle-warning"></i>';
        const row = badge.closest('tr');
        const idx = row ? [...row.parentNode.children].indexOf(row) : i;
        const r = REJECT_REASONS[idx % REJECT_REASONS.length];
        btn.dataset.reason = badge.dataset.rejectReason || r.reason;
        btn.dataset.by = badge.dataset.rejectBy || r.by;
        badge.insertAdjacentElement('afterend', btn);
        if (badge.parentElement) badge.parentElement.classList.add('rj-cell');
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function ensureRejectModal() {
    if (document.getElementById('sharedRejectModal')) return;
    const w = document.createElement('div');
    w.id = 'sharedRejectModal';
    w.className = 'view-overlay';
    w.innerHTML = `
        <div class="rj-modal" role="dialog" aria-modal="true">
            <button class="del-x" onclick="closeRejectModal()" aria-label="ปิด"><i data-lucide="x"></i></button>
            <div class="rj-head">
                <div class="rj-ico"><i data-lucide="circle-x"></i></div>
                <div class="min-w-0">
                    <div class="rj-title">เหตุผลที่ไม่อนุมัติ</div>
                    <div class="rj-sub" id="rjmSub"></div>
                </div>
            </div>
            <div class="rj-reason"><i data-lucide="quote"></i><p id="rjmReason"></p></div>
            <div class="rj-meta">
                <div><span>ผู้พิจารณา</span><b id="rjmBy"></b></div>
                <div><span>วันที่พิจารณา</span><b id="rjmDate"></b></div>
            </div>
            <div class="rj-hint"><i data-lucide="lightbulb"></i>แก้ไขข้อมูลตามเหตุผลข้างต้น แล้วยื่นคำขอใหม่อีกครั้ง</div>
            <div class="del-actions"><button class="view-btn secondary" onclick="closeRejectModal()"><i data-lucide="x" class="w-4 h-4"></i> ปิด</button></div>
        </div>`;
    w.addEventListener('click', e => { if (e.target === w) closeRejectModal(); });
    document.body.appendChild(w);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeRejectModal(); });
}

function openRejectModal(btn) {
    ensureRejectModal();
    const row = btn.closest('tr');
    let no = '', name = '', date = '';
    if (row) {
        const cells = [...row.cells].map(c => (c.innerText || c.textContent).replace(/\s+/g, ' ').trim());
        const i = cells.findIndex(t => /^(LUR-|[A-Z]{2}\d{4}\/)/.test(t));
        const heads = row.closest('table').tHead ? [...row.closest('table').tHead.querySelectorAll('th')].map(th => th.textContent.trim()) : [];
        const ni = heads.findIndex(h => h.includes('ชื่อสัญญา'));
        if (i >= 0) { no = cells[i]; name = cells[ni >= 0 ? ni : i + 1] || ''; }
        const d = [...cells].reverse().map(t => (t.match(/\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4}/) || [])[0]).find(Boolean);
        if (d) date = LDP.fmt(LDP.parse(d));
    }
    document.getElementById('rjmSub').textContent = [no, name].filter(Boolean).join(' · ');
    document.getElementById('rjmReason').textContent = btn.dataset.reason;
    document.getElementById('rjmBy').textContent = btn.dataset.by;
    document.getElementById('rjmDate').textContent = date || '-';
    document.getElementById('sharedRejectModal').classList.add('open');
    document.body.style.overflow = 'hidden';
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeRejectModal() {
    const m = document.getElementById('sharedRejectModal');
    if (m) m.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('click', function (e) {
    const btn = e.target.closest('.rj-info');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    openRejectModal(btn);
}, true);
document.addEventListener('DOMContentLoaded', () => setTimeout(enhanceRejectBadges, 0));

/* ── Table Filter (shared) ── */
function tfTableOf(bar) {
    if (bar.dataset.tfTable) return document.querySelector(bar.dataset.tfTable);
    return [...document.querySelectorAll('table')].find(t => bar.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING && t.tBodies[0]);
}
function tfHeads(table) {
    const hr = table.tHead ? table.tHead.querySelector('tr:last-child') : null;
    return hr ? [...hr.children].map(th => th.textContent.replace(/\s+/g, ' ').trim()) : [];
}
function tfCol(heads, name) {
    if (!name) return -1;
    let i = heads.findIndex(h => h === name);
    if (i < 0) i = heads.findIndex(h => h.includes(name));
    return i;
}
function tfCellText(row, i) { return i >= 0 && row.cells[i] ? row.cells[i].textContent.replace(/\s+/g, ' ').trim() : ''; }

function tableFilter() {
    document.querySelectorAll('.tf-bar').forEach(bar => {
        const table = tfTableOf(bar);
        if (!table) return;
        const heads = tfHeads(table);
        const rows = [...table.tBodies[0].rows].filter(r => r.cells.length > 1);
        const q = (bar.querySelector('[data-tf="search"]') || {}).value;
        const query = (q || '').trim().toLowerCase();
        const seg = bar.querySelector('.seg-radio[data-tf-col]');
        const segIdx = seg ? tfCol(heads, seg.dataset.tfCol) : -1;
        const segVal = seg ? ((seg.querySelector('input:checked') || {}).value || '') : '';
        const sels = [...bar.querySelectorAll('select[data-tf-col]')].map(s => [tfCol(heads, s.dataset.tfCol), s.value, s.hasAttribute('data-tf-auto')]).filter(x => x[0] >= 0 && x[1]);
        const rng = bar.querySelector('[data-tf-date]');
        const dIdx = rng ? tfCol(heads, rng.dataset.tfDate) : -1;
        const st = rng && rng.ldp ? rng.ldp.get() : {};
        const statusOk = (row, v) => { const t = tfCellText(row, segIdx); return !v || t === v || t.startsWith(v); };
        const baseOk = row => {
            if (query && !row.textContent.toLowerCase().includes(query)) return false;
            for (const [i, v, exact] of sels) { const t = tfCellText(row, i); if (exact ? t !== v : !t.includes(v)) return false; }
            if (dIdx >= 0 && (st.start || st.end)) {
                const d = LDP.parse((tfCellText(row, dIdx).match(/\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4}/) || [''])[0]);
                if (!d || (st.start && d < st.start) || (st.end && d > st.end)) return false;
            }
            return true;
        };
        let n = 0;
        rows.forEach(row => {
            if (row.dataset.tfRemoved) return;
            const show = baseOk(row) && statusOk(row, segVal);
            row.style.display = show ? '' : 'none';
            if (show) n++;
        });
        if (seg) seg.querySelectorAll('label').forEach(l => {
            const v = (l.querySelector('input') || {}).value || '';
            const c = l.querySelector('.sr-count');
            if (c) c.textContent = rows.filter(r => !r.dataset.tfRemoved && baseOk(r) && statusOk(r, v)).length;
        });
        const cnt = bar.querySelector('.tf-count');
        if (cnt) cnt.textContent = `แสดง ${n} รายการ`;
    });
}

const RENEW_STATUSES = [
    ['ยังไม่ได้ดำเนินการ', 'ยังไม่ได้ดำเนินการ'],
    ['รอการตรวจสอบ', 'รอการตรวจสอบ (รอตัดสินใจว่าจะต่อหรือไม่)'],
    ['อยู่ระหว่างเจรจาสัญญา', 'อยู่ระหว่างเจรจาสัญญา'],
    ['ต่อสัญญา', 'ต่อสัญญา'],
    ['ไม่ต่อสัญญา', 'ไม่ต่อสัญญา']
];

function tfInit() {
    document.querySelectorAll('.tf-bar').forEach(bar => {
        const table = tfTableOf(bar);
        if (!table) return;
        const heads = tfHeads(table);
        bar.querySelectorAll('select[data-tf-auto]').forEach(sel => {
            const i = tfCol(heads, sel.dataset.tfCol);
            if (i < 0) return;
            const vals = [...new Set([...table.tBodies[0].rows].map(r => tfCellText(r, i)).filter(v => v && v !== '—' && v !== '-'))].sort((a, b) => a.localeCompare(b, 'th'));
            const rank = v => { const k = RENEW_STATUSES.findIndex(x => x[0] === v); return k < 0 ? 99 : k; };
            vals.sort((a, b) => rank(a) - rank(b));
            vals.forEach(v => { const r = RENEW_STATUSES.find(x => x[0] === v); sel.add(new Option(r ? r[1] : v, v)); });
        });
    });
    tableFilter();
}
document.addEventListener('DOMContentLoaded', () => setTimeout(tfInit, 0));

let _tfActionRow = null;
document.addEventListener('click', e => {
    const b = e.target.closest('tbody tr button, tbody tr a');
    if (b) _tfActionRow = b.closest('tr');
}, true);

function markRowRejected(reason, row) {
    row = row || _tfActionRow;
    if (!row) return;
    const table = row.closest('table');
    const heads = tfHeads(table);
    const bar = [...document.querySelectorAll('.tf-bar')].find(b => tfTableOf(b) === table);
    const seg = bar && bar.querySelector('.seg-radio[data-tf-col]');
    const sIdx = tfCol(heads, seg ? seg.dataset.tfCol : 'สถานะ');
    const aIdx = heads.findIndex(h => /จัดการ/.test(h));
    const dIdx = tfCol(heads, 'วันที่ดำเนินการ');
    if (sIdx >= 0) {
        const span = document.createElement('span');
        span.className = 'badge-status badge-rejected';
        span.dataset.rejectReason = reason || '-';
        span.dataset.rejectBy = 'ผู้ดูแลระบบฝ่ายกฎหมาย (คุณ)';
        span.innerHTML = '<span class="dot"></span> ไม่อนุมัติ';
        row.cells[sIdx].innerHTML = '';
        row.cells[sIdx].appendChild(span);
    }
    if (aIdx >= 0) row.cells[aIdx].innerHTML = '';
    if (dIdx >= 0) row.cells[dIdx].textContent = LDP.fmt(LDP.today());
    row.dataset.status = 'rejected';
    enhanceRejectBadges(row);
    tableFilter();
    if (typeof showToast === 'function') showToast('บันทึกผลไม่อนุมัติเรียบร้อยแล้ว');
}

/* ── Edit Modal (shared example) ── */
const EF = {
    types: ['สัญญาจ้างบริการ', 'สัญญาเช่า', 'สัญญาจัดซื้อ', 'สัญญาบริการ SaaS', 'สัญญาผลิตงาน', 'สัญญาจ้างที่ปรึกษา'],
    companies: ['บริษัท แพลนบี มีเดีย จำกัด (มหาชน)', 'บริษัท แพลนบี ดิเลเว่น จำกัด', 'บริษัท มาสเตอร์ แอนด์ มอร์ จำกัด'],
    depts: ['ฝ่ายเทคโนโลยีสารสนเทศ', 'ฝ่ายจัดซื้อ', 'ฝ่ายการตลาด', 'ฝ่ายกฎหมาย', 'ฝ่ายปฏิบัติการ', 'ฝ่ายบัญชีและการเงิน'],
    owners: ['นางสาววิภา สุขใจ', 'นายสมชาย โชดี', 'นายวิชัย เจริญสุข', 'นางสาวกนกพร ใจดี'],
    pay: ['ชำระครั้งเดียว', 'ชำระเป็นงวด', 'ชำระรายเดือน', 'แลกเปลี่ยน (Barter)'],
    renew: ['ไม่มีการต่ออายุ', 'ต่ออายุอัตโนมัติ', 'แจ้งล่วงหน้า', 'แจ้งภายในวันที่'],
    guarantee: ['LG (หนังสือค้ำประกัน)', 'เช็ค', 'แคชเชียร์เช็ค', 'เงินสด'],
    memoTypes: ['ขอถอยสัญญา', 'การแก้สัญญาฉบับสมบูรณ์', 'ขอทำสัญญาย้อนหลัง', 'ขอยกเลิกสัญญา', 'อื่นๆ'],
    esc: v => String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'),
    input(id, label, value, opt = {}) {
        return `<label class="ef-field ${opt.full ? 'full' : ''}"><span>${label}${opt.req ? ' <em>*</em>' : ''}</span>
            <input type="${opt.type || 'text'}" id="${id}" value="${EF.esc(value)}" ${opt.ldp ? `data-ldp ${opt.ldp}` : ''} ${opt.readonly ? 'readonly class="ef-ro"' : ''} placeholder="${opt.ph || ''}"></label>`;
    },
    select(id, label, list, value, opt = {}) {
        const vals = value && !list.includes(value) ? [value, ...list] : list;
        return `<label class="ef-field ${opt.full ? 'full' : ''}"><span>${label}${opt.req ? ' <em>*</em>' : ''}</span>
            <select id="${id}">${vals.map(v => `<option ${v === value ? 'selected' : ''}>${EF.esc(v)}</option>`).join('')}</select></label>`;
    },
    textarea(id, label, value) {
        return `<label class="ef-field full"><span>${label}</span><textarea id="${id}" rows="3">${EF.esc(value)}</textarea></label>`;
    },
    radios(name, list, value) {
        return `<div class="ef-radios">${list.map(v => `<label class="ef-radio"><input type="radio" name="${name}" value="${EF.esc(v)}" ${v === value ? 'checked' : ''}><span>${v}</span></label>`).join('')}</div>`;
    },
    section(title, icon, inner) {
        return `<section class="view-section"><div class="view-sec-title"><span class="vst-ico"><i data-lucide="${icon}"></i></span>${title}</div><div class="ef-grid">${inner}</div></section>`;
    },
    upload() {
        return `<label class="ef-drop full"><input type="file" multiple hidden onchange="this.nextElementSibling.querySelector('b').textContent = this.files.length ? this.files.length + ' ไฟล์ที่เลือก' : 'ลากไฟล์มาวาง หรือคลิกเพื่อเลือกไฟล์'"><div><i data-lucide="cloud-upload"></i><b>ลากไฟล์มาวาง หรือคลิกเพื่อเลือกไฟล์</b><small>PDF, DOCX, XLSX ขนาดไม่เกิน 20MB</small></div></label>`;
    }
};

let _efRow = null, _efPage = '';

function ensureEditModal() {
    if (document.getElementById('sharedEditModal')) return;
    const w = document.createElement('div');
    w.id = 'sharedEditModal';
    w.className = 'view-overlay';
    w.innerHTML = `
        <div class="view-modal" role="dialog" aria-modal="true">
            <div class="view-head ef-head">
                <div class="view-head-icon"><i data-lucide="pencil"></i></div>
                <div class="view-head-text">
                    <div class="view-head-sub" id="efSub"></div>
                    <div class="view-head-title" id="efTitle">แก้ไขข้อมูล</div>
                </div>
                <button class="view-close" onclick="closeEditModal()" aria-label="ปิด"><i data-lucide="x"></i></button>
            </div>
            <div class="view-body" id="efBody"></div>
            <div class="view-foot">
                <a class="view-btn secondary" id="efFull" href="#"><i data-lucide="external-link" class="w-4 h-4"></i> แก้ไขแบบเต็มหน้า</a>
                <span class="flex-1"></span>
                <button class="view-btn secondary" onclick="closeEditModal()"><i data-lucide="x" class="w-4 h-4"></i> ยกเลิก</button>
                <button class="view-btn primary" onclick="saveEditModal_()"><i data-lucide="save" class="w-4 h-4"></i> บันทึก</button>
            </div>
        </div>`;
    w.addEventListener('click', e => { if (e.target === w) closeEditModal(); });
    document.body.appendChild(w);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeEditModal(); });
}

function closeEditModal() {
    const m = document.getElementById('sharedEditModal');
    if (m) m.classList.remove('open');
    document.body.style.overflow = '';
}

function efContractForm(map) {
    const t = vmText(map);
    const no = t(['เลขสัญญา']) || '';
    const seed = VM.hash(no + t(['ชื่อสัญญา']));
    const per = (t(['ระยะเวลาสัญญา']).match(/\d{2}\/\d{2}\/\d{4}/g) || ['01/04/2026', '31/03/2027']);
    const p = VM.parsePeriod(per[0] + ' - ' + (per[1] || per[0]));
    const amount = (t(['มูลค่าสัญญา', 'มูลค่า']) || VM.pick(['2,500,000.00', '850,000.00', '1,200,000.00', '360,000.00'], seed)).replace(/[^\d.,]/g, '');
    return {
        sub: 'แก้ไขข้อมูลสัญญา' + (no ? ' · ' + no : ' · แบบร่าง'),
        title: t(['ชื่อสัญญา']) || 'แก้ไขข้อมูลสัญญา',
        body:
            EF.section('ข้อมูลสัญญา', 'file-text',
                EF.input('efName', 'ชื่อสัญญา', t(['ชื่อสัญญา']), { req: true, full: true }) +
                EF.select('efType', 'ประเภทสัญญา', EF.types, t(['ประเภทสัญญา']) || EF.types[0], { req: true }) +
                EF.select('efCompany', 'บริษัทผู้ทำสัญญา', EF.companies, t(['บริษัท']) || EF.companies[0], { req: true }) +
                EF.input('efPartner', 'คู่สัญญา', t(['คู่สัญญา']), { req: true, full: true })) +
            EF.section('ระยะเวลาสัญญา', 'calendar-range',
                EF.input('efStart', 'วันเริ่มต้นสัญญา', p ? p.start : '', { req: true, ldp: 'data-ldp-max="#efEnd" data-ldp-title="เลือกวันเริ่มต้นสัญญา"' }) +
                EF.input('efEnd', 'วันสิ้นสุดสัญญา', p ? p.end : '', { req: true, ldp: 'data-ldp-min="#efStart" data-ldp-title="เลือกวันสิ้นสุดสัญญา"' }) +
                EF.input('efDuration', 'ระยะเวลาสัญญา', p ? p.text : '', { readonly: true })) +
            EF.section('มูลค่าและการชำระเงิน', 'banknote',
                EF.input('efAmount', 'มูลค่ารวม (บาท)', amount, { req: true }) +
                EF.select('efCurrency', 'สกุลเงิน', ['THB', 'USD', 'EUR', 'SGD'], 'THB') +
                EF.select('efPay', 'รูปแบบการชำระ', EF.pay, VM.pick(EF.pay, seed))) +
            EF.section('หลักประกันและการต่อสัญญา', 'shield-check',
                `<div class="ef-field"><span>มีหลักประกันสัญญา</span>${EF.radios('efHasLG', ['มี', 'ไม่มี'], seed % 3 ? 'มี' : 'ไม่มี')}</div>` +
                EF.select('efLGType', 'ประเภทหลักประกัน', EF.guarantee, EF.guarantee[0]) +
                EF.input('efLGNo', 'เลขอ้างอิง LG', 'LG-2026-' + String(seed % 90000 + 10000)) +
                EF.select('efRenew', 'เงื่อนไขการต่อสัญญา', EF.renew, VM.pick(EF.renew, seed))) +
            EF.section('ผู้รับผิดชอบ', 'user',
                EF.select('efOwner', 'ผู้รับผิดชอบ', EF.owners, t(['ผู้รับผิดชอบ']) || EF.owners[0]) +
                EF.select('efDept', 'แผนก', EF.depts, t(['แผนก']) || EF.depts[0])) +
            EF.section('ไฟล์แนบและหมายเหตุ', 'paperclip', EF.upload() + EF.textarea('efNote', 'หมายเหตุ', t(['หมายเหตุ'])))
    };
}

function efMemoForm(map) {
    const t = vmText(map);
    const no = t(['เลขบันทึก']) || '';
    return {
        sub: 'แก้ไขบันทึกข้อความ' + (no ? ' · ' + no : ''),
        title: t(['เรื่อง']) || 'แก้ไขบันทึกข้อความ',
        body:
            EF.section('ประเภทบันทึก', 'tag', `<div class="ef-field full">${EF.radios('efMemoType', EF.memoTypes, t(['ประเภทบันทึก']) || EF.memoTypes[0])}</div>`) +
            EF.section('ข้อมูลบันทึกข้อความ', 'file-text',
                EF.input('efName', 'เรื่อง', t(['เรื่อง']), { req: true, full: true }) +
                EF.input('efRef', 'เลขอ้างอิง LUR', t(['เลขอ้างอิง']), { ph: 'เช่น PB2026/002' }) +
                EF.select('efOwner', 'ผู้รับผิดชอบ', EF.owners, t(['ผู้รับผิดชอบ']) || EF.owners[0]) +
                EF.textarea('efDetail', 'รายละเอียด', 'เรียน ฝ่ายกฎหมาย\nมีความประสงค์' + (t(['ประเภทบันทึก']) || '') + ' ตามรายละเอียดเรื่อง "' + (t(['เรื่อง']) || '') + '" จึงเรียนมาเพื่อโปรดพิจารณา')) +
            EF.section('ไฟล์แนบและหมายเหตุ', 'paperclip', EF.upload() + EF.textarea('efNote', 'หมายเหตุ', ''))
    };
}

function openEditModal_(btn) {
    ensureEditModal();
    const { map } = vmCollect(btn);
    const file = (location.pathname.split('/').pop() || '').toLowerCase();
    _efPage = /memo/.test(file) ? 'memo' : 'contract';
    _efRow = btn.closest('tr') || btn.closest('.card');
    const data = _efPage === 'memo' ? efMemoForm(map) : efContractForm(map);
    document.getElementById('efSub').textContent = data.sub;
    document.getElementById('efTitle').textContent = data.title;
    const body = document.getElementById('efBody');
    body.innerHTML = data.body;
    body.scrollTop = 0;
    body.querySelectorAll('.view-section').forEach((s, i) => s.style.animationDelay = (i * 0.05) + 's');
    LDP.autoInit(body);
    const dur = () => { const a = LDP.parse(document.getElementById('efStart')?.value), b = LDP.parse(document.getElementById('efEnd')?.value); const el = document.getElementById('efDuration'); if (el && a && b) el.value = VM.parsePeriod(LDP.fmt(a) + ' - ' + LDP.fmt(b)).text; };
    ['efStart', 'efEnd'].forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener('change', dur); });
    const lg = () => { const on = (document.querySelector('input[name="efHasLG"]:checked') || {}).value === 'มี'; ['efLGType', 'efLGNo'].forEach(id => { const el = document.getElementById(id); if (el) el.closest('.ef-field').classList.toggle('ef-off', !on); }); };
    body.querySelectorAll('input[name="efHasLG"]').forEach(r => r.addEventListener('change', lg));
    lg();
    let href = btn.getAttribute('href') || '';
    const m = (btn.getAttribute('onclick') || '').match(/location\.href\s*=\s*['"]([^'"]+)['"]/);
    if (!href && m) href = m[1];
    if (!href || href === '#') href = _efPage === 'memo' ? 'memo-step1-create.html' : 'step1-request.html';
    document.getElementById('efFull').href = href;
    document.getElementById('sharedEditModal').classList.add('open');
    document.body.style.overflow = 'hidden';
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function saveEditModal_() {
    const name = document.getElementById('efName');
    if (!name.value.trim()) { name.classList.add('ef-invalid'); name.focus(); setTimeout(() => name.classList.remove('ef-invalid'), 1200); return; }
    const v = id => (document.getElementById(id) || {}).value || '';
    const row = _efRow;
    if (row && row.tagName === 'TR') {
        const heads = tfHeads(row.closest('table'));
        const set = (h, val) => {
            const i = heads.indexOf(h);
            if (i < 0 || !val || !row.cells[i]) return;
            const badge = row.cells[i].querySelector('span:not(.dot)');
            if (badge && badge.children.length === 0 && /^(ประเภท|แผนก)/.test(h)) badge.textContent = val; else row.cells[i].textContent = val;
        };
        if (_efPage === 'memo') {
            set('เรื่อง', v('efName')); set('ประเภทบันทึก', (document.querySelector('input[name="efMemoType"]:checked') || {}).value); set('เลขอ้างอิง', v('efRef')); set('ผู้รับผิดชอบ', v('efOwner'));
        } else {
            set('ชื่อสัญญา', v('efName')); set('ประเภทสัญญา', v('efType')); set('คู่สัญญา', v('efPartner')); set('บริษัท', v('efCompany'));
            if (v('efStart') && v('efEnd')) set('ระยะเวลาสัญญา', v('efStart') + ' - ' + v('efEnd'));
            set('ผู้รับผิดชอบ', v('efOwner')); set('แผนก', v('efDept'));
        }
        if (row.dataset.view) {
            try {
                const mp = JSON.parse(row.dataset.view);
                heads.forEach((h, i) => { if (mp[h] && row.cells[i]) { const t = row.cells[i].textContent.replace(/\s+/g, ' ').trim(); mp[h] = { text: t, html: row.cells[i].innerHTML.trim() }; } });
                row.dataset.view = JSON.stringify(mp);
                row.dataset.name = v('efName');
            } catch (e) {}
        }
        row.classList.remove('ef-flash'); void row.offsetWidth; row.classList.add('ef-flash');
    } else if (row) {
        const tt = row.querySelector('.card-title'); if (tt) tt.textContent = v('efName');
        row.classList.remove('ef-flash'); void row.offsetWidth; row.classList.add('ef-flash');
    }
    closeEditModal();
    if (typeof showToast === 'function') showToast('บันทึกการแก้ไขเรียบร้อยแล้ว');
}

document.addEventListener('click', function (e) {
    const btn = e.target.closest('.action-btn.edit');
    if (!btn || (!btn.closest('tr') && !btn.closest('.card'))) return;
    if (/open[A-Z]\w*\(/.test(btn.getAttribute('onclick') || '')) return;
    e.preventDefault();
    e.stopPropagation();
    openEditModal_(btn);
}, true);

/* ── Sortable Tables ── */
function enableSortableTables(root) {
    const scope = root || document;
    scope.querySelectorAll('table').forEach(table => {
        const thead = table.tHead;
        if (!thead) return;
        const ths = thead.querySelectorAll('tr:last-child th');
        ths.forEach((th, idx) => {
            if (th.dataset.nosort === '1' || th.classList.contains('nosort')) return;
            const raw = th.innerHTML.trim();
            if (!raw || th.querySelector('input,button')) return;
            const txt = (th.innerText || th.textContent || '').trim();
            if (/จัดการ|Action|การดำเนินการ/i.test(txt)) return;
            th.classList.add('sortable');
            th.innerHTML = `<span class="th-inner">${raw}<span class="sort-ico"><span class="up"></span><span class="dn"></span></span></span>`;
            th.addEventListener('click', () => sortTableByColumn(table, idx, th));
        });
    });
}

function sortTableByColumn(table, colIdx, th) {
    const tbody = table.tBodies[0];
    if (!tbody) return;
    const rows = Array.from(tbody.querySelectorAll(':scope > tr'));
    if (!rows.length) return;

    const currentDir = th.classList.contains('sort-asc') ? 'asc' : th.classList.contains('sort-desc') ? 'desc' : '';
    const nextDir = currentDir === 'asc' ? 'desc' : 'asc';

    table.tHead.querySelectorAll('th').forEach(x => x.classList.remove('sort-asc', 'sort-desc'));
    th.classList.add(nextDir === 'asc' ? 'sort-asc' : 'sort-desc');

    const parseVal = (cell) => {
        if (!cell) return '';
        const txt = (cell.innerText || cell.textContent || '').trim();
        const n = parseFloat(txt.replace(/[,\s฿]/g, ''));
        if (!isNaN(n) && /^-?[\d,.\s฿]+$/.test(txt)) return n;
        const m = txt.match(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})/);
        if (m) {
            let y = parseInt(m[3]); if (y < 100) y += 2000;
            return new Date(y, parseInt(m[2]) - 1, parseInt(m[1])).getTime();
        }
        return txt.toLowerCase();
    };

    rows.sort((a, b) => {
        const va = parseVal(a.children[colIdx]);
        const vb = parseVal(b.children[colIdx]);
        if (va < vb) return nextDir === 'asc' ? -1 : 1;
        if (va > vb) return nextDir === 'asc' ? 1 : -1;
        return 0;
    });

    rows.forEach(r => tbody.appendChild(r));
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => enableSortableTables(), 50);
});

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
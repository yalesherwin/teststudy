/* ============================================
   外贸 Incoterms 计算通关训练营 - JavaScript
   ============================================ */

// ============================================
// 题库数据
// ============================================
const exerciseData = {
    basic: [
        {
            id: 1,
            type: '判断题',
            question: 'EXW 条款下，卖方需要负责出口报关。',
            options: ['正确', '错误'],
            correct: 1,
            explanation: '❌ 错误！EXW（工厂交货）是卖方责任最小的术语。在 EXW 条款下，卖方只需在工厂或仓库将货物交给买方，<strong>不负责出口报关</strong>。出口报关由买方负责。'
        },
        {
            id: 2,
            type: '判断题',
            question: 'FOB 和 CIF 的风险转移点不同。',
            options: ['正确', '错误'],
            correct: 1,
            explanation: '❌ 错误！这是一个常见的误区。FOB 和 CIF 的<strong>风险转移点相同</strong>，都是在装运港货物越过船舷时转移。CIF 虽然卖方多承担了运费和保险费，但风险仍在装船时转移给买方。'
        },
        {
            id: 3,
            type: '判断题',
            question: 'CIF 中，卖方必须为货物购买海运保险。',
            options: ['正确', '错误'],
            correct: 0,
            explanation: '✅ 正确！CIF = Cost（成本）+ Insurance（保险费）+ Freight（运费）。卖方必须为货物购买海运保险，保险金额通常为 CIF 价格的 110%。'
        },
        {
            id: 4,
            type: '选择题',
            question: 'FOB 条款下，风险转移的正确时间是：',
            options: [
                'A. 货物到达目的港',
                'B. 货物装上卡车',
                'C. 货物越过装运港船舷',
                'D. 货物完成清关'
            ],
            correct: 2,
            explanation: '正确答案是 <strong>C</strong>。FOB（Free On Board）装运港船上交货，风险在货物越过装运港船舷（实际操作中是货物装上船）时从卖方转移到买方。'
        },
        {
            id: 5,
            type: '选择题',
            question: '以下哪个术语下卖方的责任最小？',
            options: [
                'A. FOB',
                'B. CIF',
                'C. EXW',
                'D. DDP'
            ],
            correct: 2,
            explanation: '正确答案是 <strong>C. EXW</strong>。EXW（工厂交货）是卖方责任最小的术语，卖方只需在其所在地（工厂、仓库等）将货物交给买方即可。而 DDP 是卖方责任最大的术语。'
        },
        {
            id: 6,
            type: '选择题',
            question: '以下哪些术语仅适用于海运和内河运输？',
            options: [
                'A. EXW, FCA, CPT',
                'B. FOB, CFR, CIF, FAS',
                'C. DAP, DPU, DDP',
                'D. CIP, CPT, FCA'
            ],
            correct: 1,
            explanation: '正确答案是 <strong>B</strong>。FOB、CFR、CIF、FAS 这四个术语仅适用于海运和内河运输，因为它们涉及"船舷"或"船边"的概念。其他术语适用于任何运输方式。'
        },
        {
            id: 7,
            type: '判断题',
            question: 'CFR 和 CIF 的区别在于 CIF 多了保险费。',
            options: ['正确', '错误'],
            correct: 0,
            explanation: '✅ 正确！CFR = Cost + Freight（成本加运费），CIF = Cost + Insurance + Freight（成本加保险费加运费）。两者的区别就是 CIF 多了保险费。'
        },
        {
            id: 8,
            type: '选择题',
            question: 'Incoterms 2020 一共有多少种贸易术语？',
            options: [
                'A. 9 种',
                'B. 10 种',
                'C. 11 种',
                'D. 13 种'
            ],
            correct: 2,
            explanation: '正确答案是 <strong>C. 11 种</strong>。Incoterms 2020 包含 11 种贸易术语：EXW, FCA, CPT, CIP, DAP, DPU, DDP（适用任何运输）+ FAS, FOB, CFR, CIF（仅海运）。'
        }
    ],
    calculation: [
        {
            id: 9,
            type: '计算题',
            question: '某工厂 EXW 报价如下，请计算 FOB 价格：',
            conditions: [
                'EXW 价格：USD 500 / 吨',
                '国内拖车费：USD 20 / 吨',
                '报关费 + 港杂费：USD 15 / 吨'
            ],
            inputLabel: 'FOB 价格（USD/吨）',
            correct: 535,
            tolerance: 0,
            explanation: `计算过程：<br>
<code>FOB = EXW + 国内物流 + 报关港杂</code><br>
<code>FOB = 500 + 20 + 15 = USD 535 / 吨</code><br><br>
FOB 价格包含了从工厂到装运港的所有费用，包括国内运输、报关和港口杂费。`
        },
        {
            id: 10,
            type: '计算题',
            question: '已知 FOB 价格，请计算 CIF 价格：',
            conditions: [
                'FOB 价格：USD 600 / 吨',
                '海运费：USD 80 / 吨',
                '保险费：货值的 0.3%'
            ],
            inputLabel: 'CIF 价格（USD/吨，保留1位小数）',
            correct: 681.8,
            tolerance: 0.5,
            explanation: `计算过程：<br>
<code>保险费 = FOB × 0.3% = 600 × 0.003 = USD 1.8 / 吨</code><br>
<code>CIF = FOB + 海运费 + 保险费</code><br>
<code>CIF = 600 + 80 + 1.8 = USD 681.8 / 吨</code><br><br>
注意：实际业务中，保险费的计算基数可能是 CIF 价格的 110%，这里采用简化计算。`
        },
        {
            id: 11,
            type: '计算题',
            question: '客户说："Your CIF price is too high. Give me FOB price." 请计算 FOB 价格：',
            conditions: [
                'CIF 报价：USD 720 / 吨',
                '海运费：USD 90 / 吨',
                '保险费：USD 2 / 吨'
            ],
            inputLabel: 'FOB 价格（USD/吨）',
            correct: 628,
            tolerance: 0,
            explanation: `计算过程：<br>
<code>FOB = CIF - 海运费 - 保险费</code><br>
<code>FOB = 720 - 90 - 2 = USD 628 / 吨</code><br><br>
客户要求 FOB 价格通常是因为：<br>
1. 客户有自己的货代，运费更便宜<br>
2. 客户想自己控制运输和保险<br>
3. 客户习惯用 FOB 采购`
        },
        {
            id: 12,
            type: '计算题',
            question: '完整计算题：从产品成本计算到 CIF 价格',
            conditions: [
                '产品成本：USD 400 / 吨',
                '利润率：20%',
                '工厂到港口运费：USD 25 / 吨',
                '报关费 + 港杂费：USD 20 / 吨',
                '海运费：USD 85 / 吨',
                '保险费率：0.25%'
            ],
            inputLabel: 'CIF 价格（USD/吨，保留2位小数）',
            correct: 610.76,
            tolerance: 1,
            explanation: `完整计算过程：<br>
1. <code>EXW = 成本 × (1 + 利润率) = 400 × 1.2 = USD 480 / 吨</code><br>
2. <code>FOB = EXW + 运费 + 报关港杂 = 480 + 25 + 20 = USD 525 / 吨</code><br>
3. <code>保险费 = FOB × 0.25% = 525 × 0.0025 = USD 1.31 / 吨</code><br>
4. <code>CFR = FOB + 海运费 = 525 + 85 = USD 610 / 吨</code><br>
5. <code>CIF = CFR + 保险费 = 610 + 1.31 ≈ USD 611.31 / 吨</code><br><br>
（注：由于保险费计算方式略有不同，答案允许一定误差）`
        }
    ],
    advanced: [
        {
            id: 13,
            type: '场景题',
            question: '在 CIF 条款下，货物刚装上船后发生海损。以下哪项说法正确？',
            options: [
                'A. 风险未转移，卖方负责',
                'B. 风险已转移，买方向卖方索赔',
                'C. 风险已转移，买方向保险公司索赔',
                'D. 风险已转移，但保险公司不赔'
            ],
            correct: 2,
            explanation: `正确答案是 <strong>C</strong>。<br><br>
这是 CIF 最容易混淆的知识点：<br>
• CIF 虽然卖方支付运费和保险费，但<strong>风险转移点与 FOB 相同</strong>（装船时转移）<br>
• 货物装船后，风险已经转移给买方<br>
• 买方不能向卖方索赔，应该向<strong>保险公司</strong>索赔<br><br>
记住：CIF 中的 "I"（Insurance）是卖方帮买方买的保险，受益人是买方！`
        },
        {
            id: 14,
            type: '场景题',
            question: '一位外国客户想从你这里进口货物，但他无法在中国办理出口报关手续。你应该避免使用哪个术语？',
            options: [
                'A. FOB',
                'B. CIF',
                'C. EXW',
                'D. CFR'
            ],
            correct: 2,
            explanation: `正确答案是 <strong>C. EXW</strong>。<br><br>
EXW（工厂交货）条款下，出口报关是买方的责任。但外国买家通常：<br>
• 无法在中国办理出口报关<br>
• 没有中国的报关资质<br>
• 不熟悉中国的出口流程<br><br>
因此，实际业务中很少对外国客户使用纯 EXW 报价。通常至少使用 FOB，由卖方负责出口报关。`
        },
        {
            id: 15,
            type: '选择题',
            question: '作为外贸新手卖家，以下哪个术语更容易成交？为什么？',
            options: [
                'A. EXW - 责任最小，风险最低',
                'B. FOB - 最常用，客户熟悉',
                'C. CIF - 一站式服务，客户省心',
                'D. DDP - 服务最全面'
            ],
            correct: 2,
            explanation: `推荐答案是 <strong>C. CIF</strong>。<br><br>
对于新手卖家，CIF 更容易成交的原因：<br>
• 🎯 <strong>一站式服务</strong>：客户只需等待收货<br>
• 💰 <strong>价格透明</strong>：客户一眼能看到"到港价"<br>
• 🤝 <strong>减少沟通</strong>：不需要客户自己找货代<br>
• ⚓ <strong>显得专业</strong>：展示你有完整的供应链能力<br><br>
而老客户往往更偏好 FOB，因为他们有自己的货代关系，运费可能更便宜。`
        },
        {
            id: 16,
            type: '计算题',
            question: '利润分析题：以下两种报价方式，哪种更有利于卖方？',
            conditions: [
                '方案A - FOB 报价：USD 600 / 吨',
                '方案B - CIF 报价：USD 700 / 吨',
                '实际海运费：USD 85 / 吨',
                '实际保险费：USD 3 / 吨'
            ],
            inputLabel: '方案B比方案A多赚多少（USD/吨）？',
            correct: 12,
            tolerance: 0,
            explanation: `计算过程：<br>
方案A 卖方收入：<code>USD 600 / 吨</code><br>
方案B 卖方收入：<code>CIF - 海运费 - 保险费 = 700 - 85 - 3 = USD 612 / 吨</code><br>
差额：<code>612 - 600 = USD 12 / 吨</code><br><br>
结论：如果能谈到好的 CIF 价格，卖方可能赚更多！<br>
这就是为什么有经验的外贸人会主动报 CIF，而不只是被动接受 FOB。`
        }
    ],
    comprehensive: [
        {
            id: 17,
            type: '综合计算',
            question: '完整报价链计算：请分别计算 EXW、FOB、CFR、CIF 四个价格',
            conditions: [
                'EXW：USD 480 / 吨',
                '国内物流 + 报关：USD 30 / 吨',
                '海运费：USD 95 / 吨',
                '保险费率：0.25%'
            ],
            subQuestions: [
                { label: 'FOB 价格', correct: 510, tolerance: 0 },
                { label: 'CFR 价格', correct: 605, tolerance: 0 },
                { label: 'CIF 价格（保留2位小数）', correct: 606.28, tolerance: 0.5 }
            ],
            explanation: `完整计算过程：<br>
1. <code>EXW = USD 480 / 吨</code>（已知）<br>
2. <code>FOB = EXW + 国内物流 + 报关 = 480 + 30 = USD 510 / 吨</code><br>
3. <code>CFR = FOB + 海运费 = 510 + 95 = USD 605 / 吨</code><br>
4. <code>保险费 = FOB × 0.25% = 510 × 0.0025 = USD 1.275 ≈ 1.28 / 吨</code><br>
5. <code>CIF = CFR + 保险费 = 605 + 1.28 = USD 606.28 / 吨</code>`
        },
        {
            id: 18,
            type: '场景分析',
            question: '客户邮件场景：客户发来以下邮件，你应该如何回复？',
            scenario: `"Dear Supplier,\n\nWe are interested in your product. Please provide us with:\n1. FOB Shanghai price\n2. CIF Hamburg price\n3. Minimum order quantity\n4. Delivery time\n\nBest regards,\nMr. Schmidt"`,
            options: [
                'A. 只回复 FOB 价格，CIF 太麻烦',
                'B. 同时提供 FOB 和 CIF 两个价格',
                'C. 只回复 CIF 价格，FOB 没利润',
                'D. 告诉客户我们只做 EXW'
            ],
            correct: 1,
            explanation: `正确答案是 <strong>B</strong>。<br><br>
专业的外贸业务员应该：<br>
• ✅ 按照客户要求，同时提供 FOB 和 CIF 两个价格<br>
• ✅ 清晰列出价格明细和有效期<br>
• ✅ 回答客户的所有问题（MOQ、交期等）<br>
• ✅ 可以推荐 CIF 价格，说明"一站式服务更省心"<br><br>
这样既满足客户需求，又展示了专业能力。`
        },
        {
            id: 19,
            type: '风险分析',
            question: '风险评估题：以下哪种情况下，卖方承担的风险最大？',
            options: [
                'A. EXW 条款，货物在工厂被盗',
                'B. FOB 条款，货物在装船前被海关扣押',
                'C. CIF 条款，货物在海上遇到风暴损坏',
                'D. FOB 条款，货物装船后船只沉没'
            ],
            correct: 1,
            explanation: `正确答案是 <strong>B</strong>。<br><br>
分析各选项：<br>
• A. EXW：货物在工厂，风险还没转移，但这不是卖方"承担"，而是还在卖方控制范围内<br>
• <strong>B. FOB：货物在装船前被扣押</strong> - 风险未转移，卖方要承担损失，且可能影响合同履行<br>
• C. CIF：海上风暴 - 风险已转移给买方，买方找保险公司<br>
• D. FOB 装船后：风险已转移给买方<br><br>
所以 B 是卖方风险最大的情况。`
        },
        {
            id: 20,
            type: '选择题',
            question: '以下关于 Incoterms 2020 的说法，哪项是错误的？',
            options: [
                'A. DAT 已更名为 DPU',
                'B. FCA 可以要求承运人签发已装船提单',
                'C. CIP 的最低保险要求从 ICC(C) 提高到 ICC(A)',
                'D. EXW 条款下卖方必须负责装货'
            ],
            correct: 3,
            explanation: `正确答案是 <strong>D</strong>（这是错误的说法）。<br><br>
正确解析：<br>
• A ✅ 正确：Incoterms 2020 将 DAT 更名为 DPU（Delivered at Place Unloaded）<br>
• B ✅ 正确：FCA 新增条款，允许买卖双方约定由承运人签发已装船提单<br>
• C ✅ 正确：CIP 的保险要求从 ICC(C) 提高到 ICC(A)，提供更高保障<br>
• D ❌ <strong>错误</strong>：EXW 条款下卖方<strong>不负责装货</strong>，装货由买方负责`
        }
    ],
    scenario: [
        {
            id: 21,
            type: '实战模拟',
            question: '你收到一个询价，客户在德国汉堡，需要 100 吨化工产品。请选择最合适的报价策略：',
            conditions: [
                '你的 EXW 价格：USD 450 / 吨',
                '到上海港运费：USD 35 / 吨',
                '报关 + 港杂：USD 25 / 吨',
                '上海到汉堡海运费：USD 120 / 吨',
                '保险费率：0.3%',
                '客户是新客户，第一次合作'
            ],
            options: [
                'A. 只报 EXW 价格',
                'B. 只报 FOB 价格',
                'C. 报 FOB 和 CIF 两个价格，推荐 CIF',
                'D. 只报 CIF 价格'
            ],
            correct: 2,
            explanation: `推荐答案是 <strong>C</strong>。<br><br>
<strong>计算参考：</strong><br>
• FOB = 450 + 35 + 25 = USD 510 / 吨<br>
• CIF = 510 + 120 + (510 × 0.3%) ≈ USD 631.53 / 吨<br><br>
<strong>策略分析：</strong><br>
1. 新客户 → 提供一站式 CIF 服务更容易建立信任<br>
2. 化工产品 → 运输有特殊要求，CIF 更省心<br>
3. 同时报两个价 → 给客户选择权，显得专业<br>
4. 推荐 CIF → 主动引导，增加成交概率`
        },
        {
            id: 22,
            type: '邮件写作',
            question: '客户回复说 CIF 价格太贵，要求降价 5%。你应该如何应对？',
            options: [
                'A. 直接降价 5%',
                'B. 解释成本结构，尝试降低 2-3%',
                'C. 建议客户改用 FOB，自己控制运费',
                'D. B 和 C 结合使用'
            ],
            correct: 3,
            explanation: `最佳答案是 <strong>D</strong>。<br><br>
<strong>谈判策略：</strong><br>
1. <strong>解释成本</strong>：说明价格构成，展示透明度<br>
2. <strong>适度让步</strong>：可以尝试 2-3% 的降幅<br>
3. <strong>提供替代方案</strong>：<br>
   - "如果您有合作货代，我们可以报 FOB 价格，您可能拿到更好的运费"<br>
   - 这样既给了客户选择，又不损失太多利润<br>
4. <strong>增加价值</strong>：<br>
   - 强调服务优势：交期准、质量稳定<br>
   - 可以在付款方式上给些灵活性`
        },
        {
            id: 23,
            type: '问题诊断',
            question: '货物已经装船，但客户突然说不要了。在 CIF 条款下，以下哪项是正确的？',
            options: [
                'A. 卖方自己承担损失',
                'B. 货物归卖方，可以转卖给其他客户',
                'C. 风险已转移，买方必须付款',
                'D. 可以走保险索赔'
            ],
            correct: 2,
            explanation: `正确答案是 <strong>C</strong>。<br><br>
<strong>法律分析：</strong><br>
在 CIF 条款下：<br>
• 货物装船 = 风险已转移给买方<br>
• 卖方已完成交货义务<br>
• 买方有付款义务<br><br>
<strong>实际操作建议：</strong><br>
1. 首先催促买方付款，提供装运单据<br>
2. 如买方拒付，可考虑：<br>
   - 寻找新买家（但需考虑目的港费用）<br>
   - 法律追索<br>
   - 协商解决（如降价处理）<br>
3. 这不是保险理赔范围（保险只赔货物损坏，不赔违约）`
        },
        {
            id: 24,
            type: '综合分析',
            question: '你是一家新成立的外贸公司，以下哪种发展策略最合理？',
            options: [
                'A. 只做 EXW，让客户自己处理物流',
                'B. 从 FOB 做起，逐步建立物流能力后做 CIF',
                'C. 直接做 DDP，提供最全面的服务',
                'D. 只接受客户的指定货代'
            ],
            correct: 1,
            explanation: `推荐答案是 <strong>B</strong>。<br><br>
<strong>新公司发展建议：</strong><br><br>
<strong>第一阶段 - FOB 起步</strong><br>
• 熟悉出口报关流程<br>
• 建立港口操作经验<br>
• 积累货代资源<br><br>
<strong>第二阶段 - FOB + CIF 并行</strong><br>
• 与货代建立稳定合作<br>
• 了解主要航线运费<br>
• 可以给客户报 CIF 价<br><br>
<strong>第三阶段 - 多种术语灵活运用</strong><br>
• 根据客户需求灵活报价<br>
• 某些市场可以做 DAP/DDP<br><br>
注意：直接做 DDP 风险较大，需要了解目的国清关和税务。`
        },
        {
            id: 25,
            type: '真实案例',
            question: '案例分析：一批货物 CIF 成交，到达目的港后发现部分货物受潮损坏。买方联系你索赔，你应该：',
            options: [
                'A. 立即赔偿买方损失',
                'B. 告诉买方这是运输问题，与我无关',
                'C. 指导买方向保险公司索赔，并协助提供必要文件',
                'D. 让买方找船公司索赔'
            ],
            correct: 2,
            explanation: `正确答案是 <strong>C</strong>。<br><br>
<strong>专业处理方式：</strong><br>
1. <strong>明确责任</strong>：CIF 条款下，装船后风险已转移，卖方法律上无赔偿义务<br>
2. <strong>专业态度</strong>：但作为服务，应主动帮助买方<br>
3. <strong>具体协助</strong>：<br>
   - 指导买方走保险理赔流程<br>
   - 提供装运时的货物状态证明<br>
   - 协助提供保险单、商业发票等文件<br>
   - 必要时出具情况说明<br><br>
<strong>长远考虑</strong>：虽然不是你的责任，但协助处理能维护客户关系。`
        }
    ]
};

// ============================================
// 考试题库（从练习题中选择）
// ============================================
function generateExamQuestions() {
    const allQuestions = [
        ...exerciseData.basic,
        ...exerciseData.calculation,
        ...exerciseData.advanced,
        ...exerciseData.comprehensive,
        ...exerciseData.scenario
    ];

    // 打乱顺序并选择20题
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 20);
}

// ============================================
// 全局状态
// ============================================
let currentCategory = 'basic';
let exerciseProgress = {};
let examQuestions = [];
let currentExamQuestion = 0;
let examAnswers = {};
let examTimer = null;
let examTimeLeft = 30 * 60; // 30分钟

// ============================================
// 初始化
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    initNavbar();

    // 初始化计算器
    initCalculator();

    // 初始化练习题
    loadExercises('basic');

    // 初始化分类按钮
    initCategoryButtons();

    // 移动端菜单
    initMobileMenu();
});

// ============================================
// 导航栏功能
// ============================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 滚动时改变样式
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // 导航链接点击
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
}

// ============================================
// 计算器功能
// ============================================
function initCalculator() {
    const modeButtons = document.querySelectorAll('.calc-mode');

    modeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const mode = this.dataset.mode;

            // 更新按钮状态
            modeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 切换面板
            document.querySelectorAll('.calc-panel').forEach(panel => {
                panel.classList.remove('active');
            });
            document.getElementById(`${mode}-panel`).classList.add('active');
        });
    });
}

// EXW → FOB/CIF 计算
function calculateFromEXW() {
    const exw = parseFloat(document.getElementById('exw-price').value) || 0;
    const inland = parseFloat(document.getElementById('inland-freight').value) || 0;
    const customs = parseFloat(document.getElementById('customs-port').value) || 0;
    const ocean = parseFloat(document.getElementById('ocean-freight').value) || 0;
    const insuranceRate = parseFloat(document.getElementById('insurance-rate').value) || 0;

    const fob = exw + inland + customs;
    const cfr = fob + ocean;
    const insurance = fob * (insuranceRate / 100);
    const cif = cfr + insurance;

    document.getElementById('result-fob').textContent = `USD ${fob.toFixed(2)}`;
    document.getElementById('result-cfr').textContent = `USD ${cfr.toFixed(2)}`;
    document.getElementById('result-cif').textContent = `USD ${cif.toFixed(2)}`;

    // 添加动画效果
    document.querySelectorAll('#exw-results .result-card').forEach((card, index) => {
        card.style.animation = 'none';
        card.offsetHeight; // 触发重绘
        card.style.animation = `fadeIn 0.5s ease ${index * 0.1}s both`;
    });
}

// FOB → CIF 计算
function calculateFOBtoCIF() {
    const fob = parseFloat(document.getElementById('fob-price-2').value) || 0;
    const ocean = parseFloat(document.getElementById('ocean-freight-2').value) || 0;
    const insuranceRate = parseFloat(document.getElementById('insurance-rate-2').value) || 0;

    const insurance = fob * (insuranceRate / 100);
    const cif = fob + ocean + insurance;

    document.getElementById('result-cif-2').textContent = `USD ${cif.toFixed(2)}`;
    document.getElementById('insurance-amount-2').textContent = insurance.toFixed(2);
}

// CIF → FOB 计算
function calculateCIFtoFOB() {
    const cif = parseFloat(document.getElementById('cif-price-3').value) || 0;
    const ocean = parseFloat(document.getElementById('ocean-freight-3').value) || 0;
    const insurance = parseFloat(document.getElementById('insurance-3').value) || 0;

    const fob = cif - ocean - insurance;

    document.getElementById('result-fob-3').textContent = `USD ${fob.toFixed(2)}`;
}

// 高级计算
function calculateAdvanced() {
    const cost = parseFloat(document.getElementById('product-cost').value) || 0;
    const profitRate = parseFloat(document.getElementById('profit-margin').value) || 0;
    const factoryPort = parseFloat(document.getElementById('factory-port').value) || 0;
    const customs = parseFloat(document.getElementById('customs-fee').value) || 0;
    const port = parseFloat(document.getElementById('port-charges').value) || 0;
    const ocean = parseFloat(document.getElementById('ocean-freight-4').value) || 0;
    const insuranceRate = parseFloat(document.getElementById('insurance-rate-4').value) || 0;
    const quantity = parseFloat(document.getElementById('quantity').value) || 1;

    const exw = cost * (1 + profitRate / 100);
    const fob = exw + factoryPort + customs + port;
    const cfr = fob + ocean;
    const insurance = fob * (insuranceRate / 100);
    const cif = cfr + insurance;

    // 单价
    document.getElementById('adv-exw').textContent = `USD ${exw.toFixed(2)}`;
    document.getElementById('adv-fob').textContent = `USD ${fob.toFixed(2)}`;
    document.getElementById('adv-cfr').textContent = `USD ${cfr.toFixed(2)}`;
    document.getElementById('adv-cif').textContent = `USD ${cif.toFixed(2)}`;

    // 总价
    document.getElementById('total-exw').textContent = `USD ${(exw * quantity).toFixed(2)}`;
    document.getElementById('total-fob').textContent = `USD ${(fob * quantity).toFixed(2)}`;
    document.getElementById('total-cfr').textContent = `USD ${(cfr * quantity).toFixed(2)}`;
    document.getElementById('total-cif').textContent = `USD ${(cif * quantity).toFixed(2)}`;
}

// ============================================
// 练习题功能
// ============================================
function initCategoryButtons() {
    const buttons = document.querySelectorAll('.category-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;

            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            loadExercises(category);
        });
    });
}

function loadExercises(category) {
    currentCategory = category;
    const container = document.getElementById('exercises-container');
    const exercises = exerciseData[category];

    if (!exercises || exercises.length === 0) {
        container.innerHTML = '<p style="text-align: center;">暂无题目</p>';
        return;
    }

    let html = '';
    exercises.forEach((ex, index) => {
        html += createExerciseCard(ex, index);
    });

    container.innerHTML = html;
    updateProgress();
}

function createExerciseCard(exercise, index) {
    let optionsHtml = '';
    let inputHtml = '';
    let conditionsHtml = '';
    let scenarioHtml = '';

    // 条件列表
    if (exercise.conditions) {
        conditionsHtml = `
            <div class="exercise-conditions">
                <h4>📋 已知条件</h4>
                <ul>
                    ${exercise.conditions.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // 场景描述
    if (exercise.scenario) {
        scenarioHtml = `
            <div class="exercise-conditions" style="background: #e0f2fe; font-family: monospace; white-space: pre-wrap;">
                ${exercise.scenario}
            </div>
        `;
    }

    // 选项或输入框
    if (exercise.options) {
        optionsHtml = `
            <div class="exercise-options">
                ${exercise.options.map((opt, i) => `
                    <button class="option-btn" onclick="selectOption(${exercise.id}, ${i}, this)">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>
        `;
    } else if (exercise.inputLabel) {
        inputHtml = `
            <div class="exercise-input">
                <input type="number" id="input-${exercise.id}" placeholder="${exercise.inputLabel}" step="0.01">
            </div>
        `;
    } else if (exercise.subQuestions) {
        inputHtml = `
            <div class="exercise-input">
                ${exercise.subQuestions.map((sq, i) => `
                    <div style="margin-bottom: 10px;">
                        <label style="display: block; margin-bottom: 5px;">${sq.label}</label>
                        <input type="number" id="input-${exercise.id}-${i}" placeholder="请输入答案" step="0.01">
                    </div>
                `).join('')}
            </div>
        `;
    }

    return `
        <div class="exercise-card" id="exercise-${exercise.id}">
            <div class="exercise-header">
                <span class="exercise-number">${index + 1}</span>
                <span class="exercise-type">${exercise.type}</span>
            </div>
            <div class="exercise-question">
                ${exercise.question}
            </div>
            ${scenarioHtml}
            ${conditionsHtml}
            ${optionsHtml}
            ${inputHtml}
            <div class="exercise-actions">
                <button class="btn-check" onclick="checkAnswer(${exercise.id})">提交答案</button>
                <button class="btn-hint" onclick="showHint(${exercise.id})">💡 提示</button>
            </div>
            <div class="exercise-feedback" id="feedback-${exercise.id}"></div>
        </div>
    `;
}

function selectOption(exerciseId, optionIndex, button) {
    // 取消同题其他选项的选中状态
    const card = document.getElementById(`exercise-${exerciseId}`);
    card.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');

    // 存储答案
    exerciseProgress[exerciseId] = { selected: optionIndex };
}

function checkAnswer(exerciseId) {
    const category = currentCategory;
    const exercise = exerciseData[category].find(e => e.id === exerciseId);
    const feedback = document.getElementById(`feedback-${exerciseId}`);

    let isCorrect = false;
    let userAnswer = null;

    if (exercise.options) {
        // 选择题
        if (!exerciseProgress[exerciseId]) {
            alert('请先选择一个答案');
            return;
        }
        userAnswer = exerciseProgress[exerciseId].selected;
        isCorrect = userAnswer === exercise.correct;

        // 显示正确/错误状态
        const card = document.getElementById(`exercise-${exerciseId}`);
        const buttons = card.querySelectorAll('.option-btn');
        buttons.forEach((btn, i) => {
            if (i === exercise.correct) {
                btn.classList.add('correct');
            } else if (i === userAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    } else if (exercise.inputLabel) {
        // 计算题（单个输入）
        const input = document.getElementById(`input-${exerciseId}`);
        userAnswer = parseFloat(input.value);
        const tolerance = exercise.tolerance || 0;
        isCorrect = Math.abs(userAnswer - exercise.correct) <= tolerance;
    } else if (exercise.subQuestions) {
        // 综合计算题（多个输入）
        isCorrect = true;
        exercise.subQuestions.forEach((sq, i) => {
            const input = document.getElementById(`input-${exerciseId}-${i}`);
            const answer = parseFloat(input.value);
            const tolerance = sq.tolerance || 0;
            if (Math.abs(answer - sq.correct) > tolerance) {
                isCorrect = false;
            }
        });
    }

    // 显示反馈
    feedback.className = `exercise-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `
        <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
        <div class="feedback-text">${isCorrect ? '回答正确！' : '回答错误'}</div>
        <div class="feedback-explanation">${exercise.explanation}</div>
    `;

    // 更新进度
    exerciseProgress[exerciseId] = { ...exerciseProgress[exerciseId], completed: true, correct: isCorrect };
    updateProgress();
}

function showHint(exerciseId) {
    const category = currentCategory;
    const exercise = exerciseData[category].find(e => e.id === exerciseId);

    let hint = '';
    if (exercise.type === '判断题') {
        hint = '仔细回忆课程中的知识点，注意关键词的准确性。';
    } else if (exercise.type === '选择题') {
        hint = '排除法：先排除明显错误的选项，再仔细比较剩余选项。';
    } else if (exercise.type === '计算题') {
        hint = `记住公式：\nFOB = EXW + 国内物流 + 报关港杂\nCIF = FOB + 海运费 + 保险费`;
    } else {
        hint = '从实际业务角度思考，哪种做法更专业、更有利于成交。';
    }

    alert('💡 提示：\n\n' + hint);
}

function updateProgress() {
    const category = currentCategory;
    const total = exerciseData[category].length;
    const completed = Object.values(exerciseProgress).filter(p => p.completed).length;
    const correct = Object.values(exerciseProgress).filter(p => p.correct).length;

    document.getElementById('completed-count').textContent = completed;
    document.getElementById('total-count').textContent = total;
    document.getElementById('accuracy-rate').textContent = completed > 0 ? Math.round(correct / completed * 100) + '%' : '0%';
    document.getElementById('progress-fill').style.width = (completed / total * 100) + '%';
}

// ============================================
// 考试功能
// ============================================
function startExam() {
    // 生成考试题目
    examQuestions = generateExamQuestions();
    currentExamQuestion = 0;
    examAnswers = {};
    examTimeLeft = 30 * 60;

    // 切换显示
    document.getElementById('exam-intro').style.display = 'none';
    document.getElementById('exam-container').style.display = 'block';
    document.getElementById('exam-result').style.display = 'none';

    // 加载第一题
    loadExamQuestion(0);

    // 启动计时器
    startExamTimer();
}

function loadExamQuestion(index) {
    const question = examQuestions[index];
    const area = document.getElementById('exam-question-area');

    // 更新题目导航
    document.getElementById('current-q').textContent = index + 1;

    // 构建题目HTML
    let html = `
        <div class="exercise-card" style="box-shadow: none; margin: 0;">
            <div class="exercise-header">
                <span class="exercise-number">${index + 1}</span>
                <span class="exercise-type">${question.type}</span>
            </div>
            <div class="exercise-question">${question.question}</div>
    `;

    if (question.conditions) {
        html += `
            <div class="exercise-conditions">
                <h4>📋 已知条件</h4>
                <ul>${question.conditions.map(c => `<li>${c}</li>`).join('')}</ul>
            </div>
        `;
    }

    if (question.options) {
        html += `<div class="exercise-options">`;
        question.options.forEach((opt, i) => {
            const selected = examAnswers[question.id] === i ? 'selected' : '';
            html += `
                <button class="option-btn ${selected}" onclick="selectExamOption(${question.id}, ${i}, this)">
                    <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                    <span>${opt}</span>
                </button>
            `;
        });
        html += `</div>`;
    } else if (question.inputLabel) {
        const value = examAnswers[question.id] || '';
        html += `
            <div class="exercise-input">
                <input type="number" id="exam-input-${question.id}"
                    placeholder="${question.inputLabel}"
                    value="${value}"
                    onchange="saveExamInput(${question.id}, this.value)"
                    step="0.01">
            </div>
        `;
    }

    html += `</div>`;
    area.innerHTML = html;

    // 更新导航按钮
    document.getElementById('prev-q-btn').style.display = index === 0 ? 'none' : 'inline-block';
    document.getElementById('next-q-btn').style.display = index === examQuestions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submit-exam-btn').style.display = index === examQuestions.length - 1 ? 'inline-block' : 'none';
}

function selectExamOption(questionId, optionIndex, button) {
    const area = document.getElementById('exam-question-area');
    area.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    examAnswers[questionId] = optionIndex;
}

function saveExamInput(questionId, value) {
    examAnswers[questionId] = parseFloat(value);
}

function prevQuestion() {
    if (currentExamQuestion > 0) {
        currentExamQuestion--;
        loadExamQuestion(currentExamQuestion);
    }
}

function nextQuestion() {
    if (currentExamQuestion < examQuestions.length - 1) {
        currentExamQuestion++;
        loadExamQuestion(currentExamQuestion);
    }
}

function startExamTimer() {
    examTimer = setInterval(() => {
        examTimeLeft--;
        const minutes = Math.floor(examTimeLeft / 60);
        const seconds = examTimeLeft % 60;
        document.getElementById('exam-timer').textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (examTimeLeft <= 0) {
            clearInterval(examTimer);
            submitExam();
        }

        // 最后5分钟变红色
        if (examTimeLeft <= 300) {
            document.getElementById('exam-timer').style.color = '#ef4444';
        }
    }, 1000);
}

function submitExam() {
    clearInterval(examTimer);

    // 计算分数
    let correctCount = 0;
    examQuestions.forEach(q => {
        const answer = examAnswers[q.id];
        if (q.options) {
            if (answer === q.correct) correctCount++;
        } else if (q.inputLabel) {
            const tolerance = q.tolerance || 0;
            if (Math.abs(answer - q.correct) <= tolerance) correctCount++;
        }
    });

    const score = Math.round(correctCount / examQuestions.length * 100);
    const passed = score >= 80;

    // 显示结果
    document.getElementById('exam-container').style.display = 'none';
    document.getElementById('exam-result').style.display = 'block';

    const resultDiv = document.getElementById('exam-result');
    resultDiv.innerHTML = `
        <div class="result-score">${score}分</div>
        <div class="result-grade ${passed ? 'pass' : 'fail'}">
            ${passed ? '🎉 恭喜通过！' : '😢 未通过，继续加油！'}
        </div>
        <div class="result-details">
            <p><span>总题数</span><span>${examQuestions.length} 题</span></p>
            <p><span>正确题数</span><span>${correctCount} 题</span></p>
            <p><span>错误题数</span><span>${examQuestions.length - correctCount} 题</span></p>
            <p><span>用时</span><span>${30 - Math.floor(examTimeLeft / 60)} 分钟</span></p>
        </div>
        ${passed ? `
            <div class="certificate-preview">
                <h3>🏆 Incoterms 能力证书</h3>
                <p>恭喜您通过了 Incoterms 2020 能力测试！</p>
                <p>您已掌握 EXW、FOB、CIF 等核心术语的概念与计算</p>
                <p style="margin-top: 20px; font-size: 0.9rem; opacity: 0.8;">证书编号：INC-${Date.now()}</p>
            </div>
        ` : ''}
        <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 30px;">
            重新开始
        </button>
    `;
}

// ============================================
// 工具函数
// ============================================
function formatNumber(num, decimals = 2) {
    return num.toFixed(decimals);
}

// 页面加载完成后自动计算一次
window.onload = function() {
    calculateFromEXW();
};

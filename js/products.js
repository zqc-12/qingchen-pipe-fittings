// ============================================================
// QINGCHEN METAL — Product Data
// All product images organized by category
// Edit this file to add/remove products
// ============================================================

var PRODUCTS = {
  // ─── 弯头 / Elbow ─────────────────────────────────────────
  elbow: {
    cn: "不锈钢弯头",
    en: "SS Elbow / Bend",
    desc_cn: "90°、45° 不锈钢弯头，内外丝可选，精密铸造",
    desc_en: "90°, 45° SS elbows, male/female thread, investment cast",
    subs: [
      {
        id: "elbow-90",
        cn: "90° 不锈钢弯头",
        en: "90° Stainless Steel Elbow",
        spec_cn: "规格: 1/4\" — 4\" (DN8 — DN100)",
        spec_en: "Size: 1/4\" — 4\" (DN8 — DN100)",
        material: "SS304 / SS316",
        desc_cn: "内外丝可选，精密铸造，耐压 2.0MPa",
        desc_en: "Male/female thread, investment cast, 2.0MPa",
        images: ["images/elbow/elbow_1.png","images/elbow/elbow_2.png","images/elbow/elbow_3.png","images/elbow/elbow_4.png","images/elbow/elbow_5.png","images/elbow/elbow_6.png","images/elbow/elbow_7.png","images/elbow/elbow_8.png","images/elbow/elbow_9.png","images/elbow/elbow_10.png","images/elbow/elbow_11.png","images/elbow/elbow_12.png","images/elbow/elbow_13.png","images/elbow/elbow_14.png","images/elbow/elbow_15.png","images/elbow/elbow_16.png","images/elbow/elbow_17.png","images/elbow/elbow_18.png","images/elbow/elbow_19.png","images/elbow/elbow_20.png"]
      },
      {
        id: "elbow-45",
        cn: "45° 不锈钢弯头",
        en: "45° Stainless Steel Elbow",
        spec_cn: "规格: 1/4\" — 4\" (DN8 — DN100)",
        spec_en: "Size: 1/4\" — 4\" (DN8 — DN100)",
        material: "SS304 / SS316",
        desc_cn: "45°弯头，加厚型管壁，适合高压管路",
        desc_en: "45° elbow, heavy-duty, suitable for high pressure",
        images: ["images/elbow/elbow_8.png","images/elbow/elbow_9.png","images/elbow/elbow_10.png","images/elbow/elbow_11.png","images/elbow/elbow_12.png","images/elbow/elbow_13.png","images/elbow/elbow_14.png"]
      }
    ]
  },
  // ─── 卡压弯头 / Press Bend ──────────────────────────────
  bend: {
    cn: "卡压弯头",
    en: "Press Bend",
    desc_cn: "卡压式不锈钢弯头，安装便捷高效",
    desc_en: "Press-fit SS bends for quick installation",
    subs: [
      {
        id: "bend-clamp",
        cn: "卡压弯头",
        en: "Press Bend",
        spec_cn: "卡压式连接",
        spec_en: "Press-fit connection",
        material: "SS304",
        desc_cn: "卡压式安装，无需焊接，便捷高效",
        desc_en: "Press-fit installation, no welding needed, fast and efficient",
        images: ["images/bend/bend_1.png","images/bend/bend_2.png","images/bend/bend_3.png","images/bend/bend_4.png","images/bend/bend_5.png","images/bend/bend_6.png","images/bend/bend_7.png","images/bend/bend_8.png","images/bend/bend_9.png","images/bend/bend_10.png","images/bend/bend_11.png","images/bend/bend_12.png"]
      }
    ]
  },
  // ─── 三通 / Tee ─────────────────────────────────────────
  tee: {
    cn: "不锈钢三通",
    en: "SS Tee",
    desc_cn: "等径和异径三通，多种规格可选",
    desc_en: "Equal and reducing tees, multiple sizes",
    subs: [
      {
        id: "tee-equal",
        cn: "等径三通",
        en: "Equal Tee",
        spec_cn: "规格: 1/4\" — 4\"",
        spec_en: "Size: 1/4\" — 4\"",
        material: "SS304 / SS316",
        desc_cn: "三端同径，适用于管道分支连接",
        desc_en: "Same size on all ends, for pipe branching",
        images: ["images/tee/tee_1.png","images/tee/tee_2.png"]
      },
      {
        id: "tee-reducing",
        cn: "异径三通",
        en: "Reducing Tee",
        spec_cn: "规格: 1/2\" x 3/8\" 等组合",
        spec_en: "Size: 1/2\" x 3/8\" etc.",
        material: "SS304 / SS316",
        desc_cn: "支管与主管不同口径",
        desc_en: "Branch different from main run",
        images: ["images/tee/tee_3.png","images/tee/tee_4.png"]
      }
    ]
  },
  // ─── 内外丝接头 / Nipple ────────────────────────────────
  nipple: {
    cn: "内外丝接头",
    en: "SS Nipple / Joint",
    desc_cn: "六角外丝、内外丝接头、水管接头、焊接头等多种规格",
    desc_en: "Hex nipples, M/F joints, water pipe joints, welding joints",
    subs: [
      {
        id: "nipple-hex-mf",
        cn: "六角内外丝接头",
        en: "Hex M/F Nipple",
        spec_cn: "规格: 1/4\" — 3\"",
        spec_en: "Size: 1/4\" — 3\"",
        material: "SS304 / SS316",
        desc_cn: "一头外丝一头内丝，六角体",
        desc_en: "Male one end, female the other, hex body",
        images: ["images/nipple/nipple_1.png","images/nipple/nipple_2.png","images/nipple/nipple_3.png","images/nipple/nipple_4.png","images/nipple/nipple_5.png","images/nipple/nipple_6.png","images/nipple/nipple_7.png"]
      },
      {
        id: "nipple-hex-mm",
        cn: "六角双外丝接头",
        en: "Hex M/M Nipple",
        spec_cn: "规格: 1/4\" — 3\"",
        spec_en: "Size: 1/4\" — 3\"",
        material: "SS304 / SS316",
        desc_cn: "两端外丝，六角体，加长型可选",
        desc_en: "Both ends male, hex body, extended available",
        images: ["images/nipple/nipple_8.png","images/nipple/nipple_9.png","images/nipple/nipple_10.png","images/nipple/nipple_11.png","images/nipple/nipple_12.png","images/nipple/nipple_13.png"]
      },
      {
        id: "nipple-water",
        cn: "外丝水管接头",
        en: "Male Water Pipe Joint",
        spec_cn: "规格: 1/2\" — 2\"",
        spec_en: "Size: 1/2\" — 2\"",
        material: "SS304 / SS316",
        desc_cn: "外丝设计，适用于水管连接",
        desc_en: "Male thread design for water pipe connection",
        images: ["images/nipple/nipple_14.png","images/nipple/nipple_15.png","images/nipple/nipple_16.png"]
      },
      {
        id: "nipple-custom",
        cn: "定制六角外丝",
        en: "Custom Hex Nipple",
        spec_cn: "按客户要求定制",
        spec_en: "Customized per request",
        material: "SS304 / SS316",
        desc_cn: "来图来样定制，支持非标规格",
        desc_en: "Custom orders, non-standard sizes welcome",
        images: ["images/nipple/nipple_17.png","images/nipple/nipple_18.png","images/nipple/nipple_19.png","images/nipple/nipple_20.png","images/nipple/nipple_21.png","images/nipple/nipple_22.png"]
      },
      {
        id: "nipple-weld",
        cn: "单头焊接外丝",
        en: "Weld x Male Nipple",
        spec_cn: "规格: 1/4\" — 2\"",
        spec_en: "Size: 1/4\" — 2\"",
        material: "SS304 / SS316",
        desc_cn: "一端焊接一端外丝",
        desc_en: "Weld one end, male thread the other",
        images: ["images/nipple/nipple_23.png","images/nipple/nipple_24.png","images/nipple/nipple_25.png","images/nipple/nipple_26.png"]
      },
      {
        id: "nipple-hex4",
        cn: "六角外丝接头",
        en: "Hex Male Nipple",
        spec_cn: "规格: 1/4\" — 3\"",
        spec_en: "Size: 1/4\" — 3\"",
        material: "SS304 / SS316",
        desc_cn: "六角头外丝，方便扳手安装",
        desc_en: "Hex head, easy wrench installation",
        images: ["images/nipple/nipple_27.png","images/nipple/nipple_28.png","images/nipple/nipple_29.png","images/nipple/nipple_30.png"]
      },
      {
        id: "nipple-long",
        cn: "加长外丝接头",
        en: "Long Male Nipple",
        spec_cn: "各种长度可选",
        spec_en: "Various lengths available",
        material: "SS304 / SS316",
        desc_cn: "加长型设计，适用于特殊安装需求",
        desc_en: "Extended length for special installations",
        images: ["images/nipple/nipple_31.png","images/nipple/nipple_32.png","images/nipple/nipple_33.png","images/nipple/nipple_34.png","images/nipple/nipple_35.png","images/nipple/nipple_36.png","images/nipple/nipple_37.png"]
      },
      {
        id: "nipple-hex5",
        cn: "六角外丝(细牙)",
        en: "Hex Male Nipple (Fine)",
        spec_cn: "细牙螺纹",
        spec_en: "Fine thread",
        material: "SS304 / SS316",
        desc_cn: "细牙设计，密封性能更佳",
        desc_en: "Fine thread for better sealing",
        images: ["images/nipple/nipple_38.png","images/nipple/nipple_39.png","images/nipple/nipple_40.png"]
      },
      {
        id: "nipple-hex6",
        cn: "六角外丝(重型)",
        en: "Hex Male Nipple (Heavy)",
        spec_cn: "加厚型",
        spec_en: "Heavy duty",
        material: "SS304 / SS316",
        desc_cn: "加厚管壁，适合高压工况",
        desc_en: "Thick wall for high pressure",
        images: ["images/nipple/nipple_41.png","images/nipple/nipple_42.png","images/nipple/nipple_43.png","images/nipple/nipple_44.png"]
      },
      {
        id: "nipple-oct",
        cn: "八角外丝接头",
        en: "Octagon Male Nipple",
        spec_cn: "规格: 1/4\" — 2\"",
        spec_en: "Size: 1/4\" — 2\"",
        material: "SS304 / SS316",
        desc_cn: "八角体设计，防滑安装",
        desc_en: "Octagon body design, anti-slip",
        images: ["images/nipple/nipple_57.png","images/nipple/nipple_58.png","images/nipple/nipple_59.png","images/nipple/nipple_60.png","images/nipple/nipple_61.png","images/nipple/nipple_62.png","images/nipple/nipple_63.png"]
      },
      {
        id: "nipple-hose",
        cn: "软管接头",
        en: "Hose Fitting",
        spec_cn: "适用于软管连接",
        spec_en: "For hose connection",
        material: "SS304",
        desc_cn: "软管专用接头，密封可靠",
        desc_en: "Hose-specific fitting, reliable sealing",
        images: ["images/nipple/nipple_55.png","images/nipple/nipple_56.png"]
      }
    ]
  },
  // ─── 活接 / Union ────────────────────────────────────────
  union: {
    cn: "不锈钢活接",
    en: "SS Union",
    desc_cn: "活接头，可拆卸管道连接",
    desc_en: "Unions for detachable pipe connections",
    subs: [
      {
        id: "union-flat",
        cn: "平头活接",
        en: "Flat Seat Union",
        spec_cn: "规格: 1/4\" — 4\"",
        spec_en: "Size: 1/4\" — 4\"",
        material: "SS304 / SS316",
        desc_cn: "平头密封面，易于安装拆卸",
        desc_en: "Flat seat, easy to install and remove",
        images: ["images/union/union_1.png","images/union/union_2.png","images/union/union_3.png","images/union/union_4.png","images/union/union_5.png","images/union/union_6.png"]
      },
      {
        id: "union-cone",
        cn: "锥面活接",
        en: "Cone Seat Union",
        spec_cn: "锥面密封",
        spec_en: "Cone seat seal",
        material: "SS304 / SS316",
        desc_cn: "锥面金属密封，耐高温高压",
        desc_en: "Metal cone seal, for high temp and pressure",
        images: ["images/union/union_7.png","images/union/union_8.png","images/union/union_9.png","images/union/union_10.png","images/union/union_11.png"]
      },
      {
        id: "union-hex",
        cn: "六角活接",
        en: "Hex Union",
        spec_cn: "六角体",
        spec_en: "Hex body",
        material: "SS304 / SS316",
        desc_cn: "六角体活接，便于扳手操作",
        desc_en: "Hex union for easy wrench operation",
        images: ["images/union/union_12.png","images/union/union_13.png","images/union/union_14.png","images/union/union_15.png","images/union/union_16.png","images/union/union_17.png"]
      },
      {
        id: "union-ext",
        cn: "加长活接",
        en: "Extended Union",
        spec_cn: "加长型",
        spec_en: "Extended type",
        material: "SS304 / SS316",
        desc_cn: "加长设计，适用于特殊安装",
        desc_en: "Extended for special installations",
        images: ["images/union/union_18.png","images/union/union_19.png","images/union/union_20.png","images/union/union_21.png"]
      },
      {
        id: "union-other",
        cn: "其他活接",
        en: "Other Unions",
        spec_cn: "多种规格",
        spec_en: "Various specs",
        material: "SS304 / SS316",
        desc_cn: "各类活接头产品",
        desc_en: "Various union products",
        images: ["images/union/union_22.png","images/union/union_23.png","images/union/union_24.png","images/union/union_25.png","images/union/union_26.png","images/union/union_27.png"]
      }
    ]
  },

  // ─── 管箍 / Coupling ─────────────────────────────────────
  coupling: {
    cn: "不锈钢管箍",
    en: "SS Coupling",
    desc_cn: "内丝管箍、加长管箍、对接接头等",
    desc_en: "Female couplings, long couplings, connectors",
    subs: [
      {
        id: "coupling-female",
        cn: "内丝管箍",
        en: "Female Coupling",
        spec_cn: "规格: 1/4\" — 4\"",
        spec_en: "Size: 1/4\" — 4\"",
        material: "SS304 / SS316",
        desc_cn: "内丝设计，用于管道直线对接",
        desc_en: "Female thread for straight pipe connection",
        images: ["images/coupling/coupling_1.png","images/coupling/coupling_2.png"]
      },
      {
        id: "coupling-long",
        cn: "加长内丝管箍",
        en: "Long Female Coupling",
        spec_cn: "加长型",
        spec_en: "Extended type",
        material: "SS304 / SS316",
        desc_cn: "加长型设计，连接更牢固",
        desc_en: "Extended design for stronger connection",
        images: ["images/coupling/coupling_3.png","images/coupling/coupling_4.png"]
      },
      {
        id: "coupling-hex",
        cn: "六角管箍",
        en: "Hex Coupling",
        spec_cn: "六角体",
        spec_en: "Hex body",
        material: "SS304 / SS316",
        desc_cn: "六角体设计，方便扳手固定",
        desc_en: "Hex body for easy wrench grip",
        images: ["images/coupling/coupling_5.png","images/coupling/coupling_6.png","images/coupling/coupling_7.png"]
      },
      {
        id: "coupling-red",
        cn: "异径管箍",
        en: "Reducing Coupling",
        spec_cn: "多种规格组合",
        spec_en: "Various combinations",
        material: "SS304 / SS316",
        desc_cn: "两端不同口径，用于变径连接",
        desc_en: "Different sizes for reducing connections",
        images: ["images/coupling/coupling_8.png","images/coupling/coupling_9.png","images/coupling/coupling_10.png","images/coupling/coupling_11.png","images/coupling/coupling_12.png","images/coupling/coupling_13.png","images/coupling/coupling_14.png","images/coupling/coupling_15.png","images/coupling/coupling_16.png","images/coupling/coupling_17.png","images/coupling/coupling_18.png","images/coupling/coupling_19.png","images/coupling/coupling_20.png","images/coupling/coupling_21.png"]
      },
      {
        id: "coupling-fc",
        cn: "内丝接头(直通)",
        en: "Female Connector",
        spec_cn: "直通式内丝接头",
        spec_en: "Straight female connector",
        material: "SS304 / SS316",
        desc_cn: "直通设计，用于管路延伸",
        desc_en: "Straight design for pipe extension",
        images: ["images/coupling/coupling_22.png","images/coupling/coupling_23.png","images/coupling/coupling_24.png","images/coupling/coupling_25.png","images/coupling/coupling_26.png","images/coupling/coupling_27.png","images/coupling/coupling_28.png","images/coupling/coupling_29.png","images/coupling/coupling_30.png","images/coupling/coupling_31.png","images/coupling/coupling_32.png","images/coupling/coupling_33.png"]
      },
      {
        id: "coupling-other",
        cn: "其他管箍",
        en: "Other Couplings",
        spec_cn: "多种规格",
        spec_en: "Various specs",
        material: "SS304 / SS316",
        desc_cn: "各类管箍接头，满足多种需求",
        desc_en: "Various couplings for multiple needs",
        images: ["images/coupling/coupling_34.png","images/coupling/coupling_35.png","images/coupling/coupling_36.png","images/coupling/coupling_37.png","images/coupling/coupling_38.png","images/coupling/coupling_39.png","images/coupling/coupling_40.png","images/coupling/coupling_41.png","images/coupling/coupling_42.png","images/coupling/coupling_43.png","images/coupling/coupling_44.png","images/coupling/coupling_45.png"]
      }
    ]
  },

  // ─── 衬套/补芯 / Bushing ────────────────────────────────
  bushing: {
    cn: "不锈钢衬套补芯",
    en: "SS Bushing",
    desc_cn: "衬套、补芯，用于异径转换",
    desc_en: "Bushings for size reduction",
    subs: [
      {
        id: "bushing-1",
        cn: "不锈钢衬套",
        en: "SS Bushing",
        spec_cn: "规格: 1/4\" — 2\"",
        spec_en: "Size: 1/4\" — 2\"",
        material: "SS304 / SS316",
        desc_cn: "内外丝衬套，用于异径转换",
        desc_en: "M/F bushing for size reduction",
        images: ["images/bushing/bushing_1.png","images/bushing/bushing_2.png","images/bushing/bushing_3.png","images/bushing/bushing_4.png","images/bushing/bushing_5.png","images/bushing/bushing_6.png","images/bushing/bushing_7.png","images/bushing/bushing_8.png","images/bushing/bushing_9.png","images/bushing/bushing_10.png","images/bushing/bushing_11.png","images/bushing/bushing_12.png","images/bushing/bushing_13.png","images/bushing/bushing_14.png","images/bushing/bushing_15.png"]
      }
    ]
  },

  // ─── 管帽 / Cap ──────────────────────────────────────────
  cap: {
    cn: "不锈钢管帽",
    en: "SS Cap / Plug",
    desc_cn: "管帽、封堵头，用于管道末端密封",
    desc_en: "Caps and plugs for pipe end sealing",
    subs: [
      {
        id: "cap-1",
        cn: "不锈钢管帽",
        en: "SS Cap",
        spec_cn: "规格: 1/4\" — 4\"",
        spec_en: "Size: 1/4\" — 4\"",
        material: "SS304 / SS316",
        desc_cn: "内丝管帽，用于管道末端封堵",
        desc_en: "Female cap for pipe end sealing",
        images: ["images/cap/cap_1.png","images/cap/cap_2.png"]
      }
    ]
  },

  // ─── 卡压管件 / Press Fittings ──────────────────────────
  pressure: {
    cn: "卡压式管件",
    en: "Press-fit Fittings",
    desc_cn: "卡压式连接管件，安装便捷高效",
    desc_en: "Press-fit fittings for quick installation",
    subs: [
      {
        id: "press-union",
        cn: "卡压式活接头",
        en: "Press-fit Union",
        spec_cn: "卡压连接",
        spec_en: "Press-fit connection",
        material: "SS304",
        desc_cn: "卡压式安装，无需焊接",
        desc_en: "Press-fit, no welding needed",
        images: ["images/pressure/pressure_1.png","images/pressure/pressure_2.png","images/pressure/pressure_3.png"]
      },
      {
        id: "press-seal",
        cn: "卡压封堵",
        en: "Press-fit Seal",
        spec_cn: "卡压密封",
        spec_en: "Press-fit sealing",
        material: "SS304",
        desc_cn: "卡压式密封件",
        desc_en: "Press-fit sealing component",
        images: ["images/pressure/pressure_4.png","images/pressure/pressure_5.png"]
      },
      {
        id: "press-elbow",
        cn: "卡压弯头",
        en: "Press-fit Elbow",
        spec_cn: "90°卡压弯头",
        spec_en: "90° press-fit elbow",
        material: "SS304",
        desc_cn: "卡压式弯头，快速安装",
        desc_en: "Press-fit elbow for quick installation",
        images: ["images/pressure/pressure_6.png","images/pressure/pressure_7.png","images/pressure/pressure_8.png"]
      },
      {
        id: "press-other",
        cn: "卡压管件(其他)",
        en: "Other Press Fittings",
        spec_cn: "多种卡压管件",
        spec_en: "Various press fittings",
        material: "SS304",
        desc_cn: "各类卡压式管件",
        desc_en: "Various press-fit fittings",
        images: ["images/pressure/pressure_9.png","images/pressure/pressure_10.png"]
      }
    ]
  },

  // ─── 其他配件 / Other Accessories ───────────────────────
  misc: {
    cn: "其他管件配件",
    en: "Other Fittings",
    desc_cn: "螺母、堵头、焊接头等配件",
    desc_en: "Nuts, plugs, welding fittings and other accessories",
    subs: [
      {
        id: "nuts",
        cn: "六角锁紧螺母",
        en: "Hex Lock Nut",
        spec_cn: "规格: 1/4\" — 4\"",
        spec_en: "Size: 1/4\" — 4\"",
        material: "SS304 / SS316",
        desc_cn: "六角锁紧螺母，用于管路固定",
        desc_en: "Hex lock nut for pipe fixing",
        images: ["images/misc/misc_1.png","images/misc/misc_2.png","images/misc/misc_3.png","images/misc/misc_4.png"]
      },
      {
        id: "plug",
        cn: "密封丝堵",
        en: "Threaded Plug",
        spec_cn: "规格: 1/4\" — 2\"",
        spec_en: "Size: 1/4\" — 2\"",
        material: "SS304 / SS316",
        desc_cn: "外丝堵头，用于管口密封",
        desc_en: "Male plug for port sealing",
        images: ["images/misc/misc_27.png","images/misc/misc_28.png","images/misc/misc_29.png"]
      },
      {
        id: "weld-fitting",
        cn: "焊接接头",
        en: "Weld Fitting",
        spec_cn: "焊接式连接",
        spec_en: "Weld connection",
        material: "SS304 / SS316",
        desc_cn: "焊接式管件接头",
        desc_en: "Weld-type pipe fitting",
        images: ["images/misc/misc_5.png","images/misc/misc_6.png","images/misc/misc_7.png","images/misc/misc_8.png","images/misc/misc_9.png","images/misc/misc_10.png"]
      },
      {
        id: "fitting-other",
        cn: "其他配件",
        en: "Other Accessories",
        spec_cn: "多种配件",
        spec_en: "Various accessories",
        material: "SS304 / SS316",
        desc_cn: "各类不锈钢管路配件",
        desc_en: "Various SS pipe accessories",
        images: ["images/misc/misc_11.png","images/misc/misc_12.png","images/misc/misc_13.png","images/misc/misc_14.png","images/misc/misc_15.png","images/misc/misc_16.png","images/misc/misc_17.png","images/misc/misc_18.png","images/misc/misc_19.png","images/misc/misc_20.png","images/misc/misc_21.png","images/misc/misc_22.png","images/misc/misc_23.png","images/misc/misc_24.png","images/misc/misc_25.png","images/misc/misc_26.png"]
      }
    ]
  }
};

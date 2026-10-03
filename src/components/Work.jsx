import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Work.module.css";

const VIEWPORT = { once: true, amount: 0.15 };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const POS_CATALOG = [
  { id: 1, name: "Cold Brew Coffee", price: 2.5 },
  { id: 2, name: "Fresh Croissant", price: 1.75 },
  { id: 3, name: "Matcha Latte", price: 3.25 },
  { id: 4, name: "Club Sandwich", price: 4.5 },
];

const INITIAL_STUDENTS = [
  { id: 1, name: "Sokha Chan", present: true, grade: "A" },
  { id: 2, name: "Vireak Dara", present: true, grade: "B+" },
  { id: 3, name: "Bopha Pich", present: false, grade: "A-" },
  { id: 4, name: "Kosal Meng", present: true, grade: "A" },
];

const PROJECTS = [
  {
    id: "smart-classroom",
    thumbClass: styles.thumbA,
    url: "classroom-system.app",
    title: "Smart Classroom Management System",
    desc: "Flagship full-stack web application architected with a dynamic React.js frontend, Laravel (PHP) RESTful API backend, secure CRUD data layer, and a MySQL database styled with Tailwind CSS.",
    tags: ["React.js", "Laravel", "MySQL", "Tailwind CSS", "RESTful APIs"],
    demoKey: "classroom",
    thumbContent: (
      <div className={styles.thumbBody}>
        <div className={styles.thumbSide} />
        <div className={styles.thumbMain}>
          <div className={styles.thumbCard} />
          <div className={styles.thumbCard} />
        </div>
      </div>
    ),
  },
  {
    id: "ecommerce-pos",
    thumbClass: styles.thumbB,
    url: "retail-pos.app",
    title: "E-Commerce & Retail POS System",
    desc: "An agile, full-featured retail Point of Sale & online store system featuring real-time product inventory, instant cart management, receipt generation, and sales tax calculations.",
    tags: [
      "React.js",
      "Laravel (PHP)",
      "MySQL",
      "Tailwind CSS",
      "Point of Sale",
    ],
    demoKey: "pos",
    thumbContent: (
      <div className={styles.posLayout}>
        <div className={styles.posProducts}>
          <div className={styles.posTile}>
            <div className={styles.posTileBar} />
          </div>
          <div className={styles.posTile}>
            <div className={styles.posTileBar} />
          </div>
          <div className={styles.posTile}>
            <div className={styles.posTileBar} />
          </div>
          <div className={styles.posTile}>
            <div className={styles.posTileBar} />
          </div>
        </div>
        <div className={styles.posReceipt}>
          <div className={styles.receiptLine} />
          <div className={styles.receiptLine} />
          <div className={styles.receiptLine} />
          <div className={styles.receiptTotal} />
        </div>
      </div>
    ),
  },
  {
    id: "smart-calculator",
    thumbClass: styles.thumbC,
    url: "smart-calculator.app",
    title: "Smart Web & Financial Calculator",
    desc: "A modern, responsive calculation web application equipped with arithmetic operations, percentage evaluation, calculation history, and smooth keypress interaction feedback.",
    tags: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Math Engine"],
    demoKey: "calculator",
    thumbContent: (
      <div className={styles.calcLayout}>
        <div className={styles.calcScreenMini}>1,420.50</div>
        <div className={styles.calcKeysMini}>
          <div className={`${styles.calcKeyMini} ${styles.calcKeyMiniOp}`} />
          <div className={styles.calcKeyMini} />
          <div className={styles.calcKeyMini} />
          <div className={`${styles.calcKeyMini} ${styles.calcKeyMiniOp}`} />
          <div className={styles.calcKeyMini} />
          <div className={styles.calcKeyMini} />
          <div className={styles.calcKeyMini} />
          <div className={`${styles.calcKeyMini} ${styles.calcKeyMiniOp}`} />
        </div>
      </div>
    ),
  },
  {
    id: "wowmart-creative",
    thumbClass: styles.thumbD,
    url: "wowmart.creative",
    title: "WoW Mart Visual & Media Production",
    desc: "Managed retail brand visuals, marketing collaterals, and high-energy video content creation utilizing Adobe Premiere Pro, DaVinci Resolve, and CapCut within high-paced commercial environments.",
    tags: ["Premiere Pro", "DaVinci Resolve", "CapCut", "Brand Identity"],
    demoKey: "creative",
    thumbContent: (
      <div className={styles.thumbBody}>
        <div className={styles.thumbMain}>
          <div className={styles.thumbBars}>
            {[40, 75, 55, 90, 45, 65].map((h, i) => (
              <i key={i} className={styles.bar} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function Work() {
  const [activeModal, setActiveModal] = useState(null);

  // Calculator State
  const [calcDisplay, setCalcDisplay] = useState("0");
  const [calcPrev, setCalcPrev] = useState("");
  const [calcOp, setCalcOp] = useState(null);
  const [resetNext, setResetNext] = useState(false);

  // POS State
  const [posCart, setPosCart] = useState([
    { id: 1, name: "Cold Brew Coffee", price: 2.5, qty: 1 },
    { id: 2, name: "Fresh Croissant", price: 1.75, qty: 2 },
  ]);
  const [posPaid, setPosPaid] = useState(false);

  // Classroom State
  const [students, setStudents] = useState(INITIAL_STUDENTS);

  // Calculator handlers
  const handleNum = (n) => {
    if (resetNext || calcDisplay === "0") {
      setCalcDisplay(String(n));
      setResetNext(false);
    } else {
      setCalcDisplay((d) => (d.length < 12 ? d + n : d));
    }
  };

  const handleDot = () => {
    if (resetNext) {
      setCalcDisplay("0.");
      setResetNext(false);
      return;
    }
    if (!calcDisplay.includes(".")) {
      setCalcDisplay((d) => d + ".");
    }
  };

  const handleOp = (op) => {
    setCalcPrev(`${calcDisplay} ${op}`);
    setCalcOp(op);
    setResetNext(true);
  };

  const handleEquals = () => {
    if (!calcOp || !calcPrev) return;
    const prevNum = parseFloat(calcPrev);
    const currentNum = parseFloat(calcDisplay);
    let res = 0;

    if (calcOp === "+") res = prevNum + currentNum;
    if (calcOp === "-") res = prevNum - currentNum;
    if (calcOp === "×") res = prevNum * currentNum;
    if (calcOp === "÷") res = currentNum !== 0 ? prevNum / currentNum : "Error";

    const finalStr =
      typeof res === "number" ? String(Number(res.toFixed(6))) : res;
    setCalcDisplay(finalStr);
    setCalcPrev(`${prevNum} ${calcOp} ${currentNum} =`);
    setCalcOp(null);
    setResetNext(true);
  };

  const handleClear = () => {
    setCalcDisplay("0");
    setCalcPrev("");
    setCalcOp(null);
    setResetNext(false);
  };

  const handlePercent = () => {
    const val = parseFloat(calcDisplay);
    if (!isNaN(val)) {
      setCalcDisplay(String(val / 100));
    }
  };

  // POS handlers
  const addToCart = (product) => {
    setPosPaid(false);
    setPosCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setPosPaid(false);
    setPosCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.qty + delta;
            return nextQty > 0 ? { ...item, qty: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  };

  const posSubtotal = posCart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const posTax = posSubtotal * 0.08;
  const posTotal = posSubtotal + posTax;

  // Classroom handler
  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, present: !s.present } : s)),
    );
  };

  return (
    <section id="work" className={styles.work}>
      <div className={styles.bgType} aria-hidden="true">
        WORK
      </div>
      <div className="wrap">
        <motion.h2
          className={styles.sectionTitle}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          Selected work
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              className={styles.card}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 24px 40px -20px rgba(20,22,15,0.25)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Thumbnail */}
              <div className={`${styles.thumb} ${project.thumbClass}`}>
                <div className={styles.thumbBar}>
                  <span className={styles.thumbDot} />
                  <span className={styles.thumbDot} />
                  <span className={styles.thumbDot} />
                  <em className={styles.thumbUrl}>{project.url}</em>
                </div>
                {project.thumbContent}
              </div>

              {/* Card body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <button
                    type="button"
                    className={styles.demoBtn}
                    onClick={() => setActiveModal(project.demoKey)}
                  >
                    Live Demo ↗
                  </button>
                  <a href="mailto:lunlytayhok@gmail.com">Contact ↗</a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Interactive Demo Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className={styles.modalCard}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3>
                  {activeModal === "calculator" &&
                    "Interactive Demo: Smart Calculator"}
                  {activeModal === "pos" &&
                    "Interactive Demo: Retail POS System"}
                  {activeModal === "classroom" &&
                    "Interactive Demo: Smart Classroom Management"}
                  {activeModal === "creative" &&
                    "Interactive Showcase: WoW Mart Media"}
                </h3>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={() => setActiveModal(null)}
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              <div className={styles.modalBody}>
                {/* 1. Calculator Demo */}
                {activeModal === "calculator" && (
                  <div>
                    <p className={styles.demoDesc}>
                      Try out the responsive web calculator below. Supports
                      real-time arithmetic calculations, percentages, and clear
                      entry states.
                    </p>
                    <div className={styles.calcWidget}>
                      <div className={styles.calcDisplay}>
                        <div className={styles.calcEq}>{calcPrev || " "}</div>
                        <div className={styles.calcVal}>{calcDisplay}</div>
                      </div>
                      <div className={styles.calcGrid}>
                        <button
                          type="button"
                          className={`${styles.calcBtn} ${styles.calcBtnClear}`}
                          onClick={handleClear}
                        >
                          C
                        </button>
                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={handlePercent}
                        >
                          %
                        </button>
                        <button
                          type="button"
                          className={`${styles.calcBtn} ${styles.calcBtnOp}`}
                          onClick={() => handleOp("÷")}
                        >
                          ÷
                        </button>
                        <button
                          type="button"
                          className={`${styles.calcBtn} ${styles.calcBtnOp}`}
                          onClick={() => handleOp("×")}
                        >
                          ×
                        </button>

                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={() => handleNum("7")}
                        >
                          7
                        </button>
                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={() => handleNum("8")}
                        >
                          8
                        </button>
                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={() => handleNum("9")}
                        >
                          9
                        </button>
                        <button
                          type="button"
                          className={`${styles.calcBtn} ${styles.calcBtnOp}`}
                          onClick={() => handleOp("-")}
                        >
                          -
                        </button>

                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={() => handleNum("4")}
                        >
                          4
                        </button>
                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={() => handleNum("5")}
                        >
                          5
                        </button>
                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={() => handleNum("6")}
                        >
                          6
                        </button>
                        <button
                          type="button"
                          className={`${styles.calcBtn} ${styles.calcBtnOp}`}
                          onClick={() => handleOp("+")}
                        >
                          +
                        </button>

                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={() => handleNum("1")}
                        >
                          1
                        </button>
                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={() => handleNum("2")}
                        >
                          2
                        </button>
                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={() => handleNum("3")}
                        >
                          3
                        </button>
                        <button
                          type="button"
                          className={`${styles.calcBtn} ${styles.calcBtnEq}`}
                          onClick={handleEquals}
                        >
                          =
                        </button>

                        <button
                          type="button"
                          className={styles.calcBtn}
                          style={{ gridColumn: "span 2" }}
                          onClick={() => handleNum("0")}
                        >
                          0
                        </button>
                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={handleDot}
                        >
                          .
                        </button>
                        <button
                          type="button"
                          className={styles.calcBtn}
                          onClick={() =>
                            setCalcDisplay((d) =>
                              d.length > 1 ? d.slice(0, -1) : "0",
                            )
                          }
                        >
                          ⌫
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. POS Demo */}
                {activeModal === "pos" && (
                  <div>
                    <p className={styles.demoDesc}>
                      Click on items in the catalog to add them to your cashier
                      cart. Test real-time price totals, tax calculations, and
                      checkout.
                    </p>
                    <div className={styles.posWidget}>
                      {/* Products */}
                      <div className={styles.posCatalog}>
                        {POS_CATALOG.map((item) => (
                          <div
                            key={item.id}
                            className={styles.posProductCard}
                            onClick={() => addToCart(item)}
                          >
                            <span className={styles.posProductName}>
                              {item.name}
                            </span>
                            <span className={styles.posProductPrice}>
                              ${item.price.toFixed(2)}
                            </span>
                            <span
                              style={{ fontSize: "0.72rem", color: "#888" }}
                            >
                              + Tap to Add
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Cart Register */}
                      <div className={styles.posCart}>
                        <div className={styles.posCartTitle}>
                          <span>Register Cart</span>
                          <span style={{ fontSize: "0.78rem", color: "#777" }}>
                            {posCart.length} item
                            {posCart.length === 1 ? "" : "s"}
                          </span>
                        </div>

                        <div className={styles.posCartList}>
                          {posCart.length === 0 ? (
                            <p
                              style={{
                                fontSize: "0.8rem",
                                color: "#999",
                                margin: "auto",
                              }}
                            >
                              Cart is empty. Tap items to add.
                            </p>
                          ) : (
                            posCart.map((item) => (
                              <div key={item.id} className={styles.posCartItem}>
                                <div>
                                  <div style={{ fontWeight: 600 }}>
                                    {item.name}
                                  </div>
                                  <div style={{ color: "#777" }}>
                                    ${item.price.toFixed(2)} &times; {item.qty}
                                  </div>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "0.35rem",
                                    alignItems: "center",
                                  }}
                                >
                                  <button
                                    type="button"
                                    onClick={() => updateQty(item.id, -1)}
                                    style={{
                                      padding: "0.1rem 0.4rem",
                                      borderRadius: "4px",
                                      border: "1px solid #ccc",
                                      background: "#fff",
                                      cursor: "pointer",
                                    }}
                                  >
                                    -
                                  </button>
                                  <span>{item.qty}</span>
                                  <button
                                    type="button"
                                    onClick={() => updateQty(item.id, 1)}
                                    style={{
                                      padding: "0.1rem 0.4rem",
                                      borderRadius: "4px",
                                      border: "1px solid #ccc",
                                      background: "#fff",
                                      cursor: "pointer",
                                    }}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            ))
                          )}
                        </div>

                        <div className={styles.posCartTotals}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>Subtotal:</span>
                            <strong>${posSubtotal.toFixed(2)}</strong>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>Tax (8%):</span>
                            <span>${posTax.toFixed(2)}</span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: "1rem",
                              marginTop: "0.2rem",
                            }}
                          >
                            <strong>Total:</strong>
                            <strong style={{ color: "var(--terracotta)" }}>
                              ${posTotal.toFixed(2)}
                            </strong>
                          </div>
                        </div>

                        {posPaid ? (
                          <div
                            style={{
                              marginTop: "0.75rem",
                              padding: "0.5rem",
                              background: "#d1f4e0",
                              color: "#166534",
                              borderRadius: "8px",
                              textAlign: "center",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                            }}
                          >
                            Payment Successful! Receipt Printed.
                          </div>
                        ) : (
                          <button
                            type="button"
                            className={styles.posCheckoutBtn}
                            disabled={posCart.length === 0}
                            onClick={() => setPosPaid(true)}
                          >
                            Charge ${posTotal.toFixed(2)} &rarr;
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Classroom Demo */}
                {activeModal === "classroom" && (
                  <div>
                    <p className={styles.demoDesc}>
                      Interactive student attendance and performance record
                      system. Tap on any student's status pill to toggle their
                      attendance state in real time.
                    </p>
                    <div className={styles.classWidget}>
                      <table className={styles.classTable}>
                        <thead>
                          <tr>
                            <th>Student Name</th>
                            <th>Current Status</th>
                            <th>Grade</th>
                          </tr>
                        </thead>
                        <tbody>
                          {students.map((student) => (
                            <tr key={student.id}>
                              <td>
                                <strong>{student.name}</strong>
                              </td>
                              <td>
                                <span
                                  className={`${styles.statusPill} ${
                                    student.present
                                      ? styles.statusPresent
                                      : styles.statusAbsent
                                  }`}
                                  onClick={() => toggleAttendance(student.id)}
                                  title="Click to toggle status"
                                >
                                  {student.present ? "✓ Present" : "✕ Absent"}
                                </span>
                              </td>
                              <td>
                                <span style={{ fontWeight: 600 }}>
                                  {student.grade}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 4. Creative Demo */}
                {activeModal === "creative" && (
                  <div>
                    <p className={styles.demoDesc}>
                      Creative multimedia and video editing portfolio developed
                      for commercial retail and digital brand campaigns.
                    </p>
                    <div
                      style={{
                        background: "#f8f7f4",
                        padding: "1.25rem",
                        borderRadius: "12px",
                        border: "1px solid var(--line-light)",
                      }}
                    >
                      <h4 style={{ margin: "0 0 0.5rem", color: "var(--ink)" }}>
                        Capabilities & Toolset:
                      </h4>
                      <ul
                        style={{
                          listStyle: "disc",
                          paddingLeft: "1.25rem",
                          lineHeight: "1.7",
                          fontSize: "0.9rem",
                          color: "#444",
                        }}
                      >
                        <li>
                          <strong>Adobe Premiere Pro:</strong> High-pacing
                          commercial editing, audio ducking, and color
                          balancing.
                        </li>
                        <li>
                          <strong>DaVinci Resolve:</strong> Advanced color
                          grading, node-based corrections, and cinematic
                          rendering.
                        </li>
                        <li>
                          <strong>CapCut & Social Formats:</strong> Viral 9:16
                          vertical video assets, subtitles, and animated
                          transitions.
                        </li>
                        <li>
                          <strong>WoW Mart Operations:</strong> Retail
                          point-of-sale branding, promotional signage, and POS
                          system experience.
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

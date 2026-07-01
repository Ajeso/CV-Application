import "./App.css";
function Introduction() {
  return (
    <>
      {/* Header with Name and Edit/Save Button */}
      <div className="cv-header">
        <h1 className="cv-name">KASIVWA MONICAH AJESO</h1>
        <h3>FRONTEND DEVELOPER</h3>
        <ul>
          <li>+254715850584</li>
          <li>me@ajeso.dev</li>
          <li>NAIROBI, KENYA</li>
        </ul>

        <button className="btn btn-edit">Edit</button>
      </div>

      {/* Introduction Section */}
      <section className="cv-section">
        <h2 className="section-title">PROFESSIONAL SUMMARY</h2>
        <div className="section-divider"></div>
        <div className="section-content">
          <p>
            A devoted Web Developer with a keen eye for elegant design and
            purposeful functionality, committed to crafting seamless digital
            experiences. I take great pleasure in transforming ideas into
            responsive, accessible, and user-friendly websites through clean,
            efficient code. Ever eager to learn and refine my craft, I approach
            each project with curiosity, diligence, and unwavering attention to
            detail. Above all, I value collaboration and strive to create work
            that leaves a lasting impression.
          </p>
        </div>
      </section>
    </>
  );
}

export default Introduction;

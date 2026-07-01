import "./App.css";
function Education() {
  return (
    <section className="cv-section">
      <h2 className="section-title">Education</h2>
      <div className="section-divider"></div>
      <div className="section-content">
        <div className="education-item">
          <div className="edu-header">
            <h3 className="edu-degree">Bachelor of</h3>
            <span className="edu-date">2020</span>
          </div>
          <p className="edu-school">MultiMedia University of Kenya</p>
        </div>

        <div className="education-item">
          <div className="edu-header">
            <h3 className="edu-degree">Advanced Web Development Bootcamp</h3>
            <span className="edu-date">2019</span>
          </div>
          <p className="edu-school">Treehouse Academy</p>
        </div>
      </div>
    </section>
  );
}

export default Education;

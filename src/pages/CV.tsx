import { LINKS } from "../data/projects";

export default function Resume() {
  const pdfUrl = `${import.meta.env.BASE_URL}Umar_Turdumambetov_Resume.pdf`;

  return (
    <>
      <div
        className="card"
        style={{
          padding: 0,
          overflow: "hidden",
          borderRadius: "14px",
          marginBottom: "20px",
        }}
      >
        <iframe
          title="Umar Turdumambetov — Resume"
          src={pdfUrl}
          style={{
            width: "100%",
            height: "120vh",
            border: "none",
            borderRadius: "14px",
          }}
        />
      </div>

      <div className="row" style={{ gap: "12px" }}>
        <a className="btn primary" href={pdfUrl} download>
          Download
        </a>
        <a
          className="btn outline"
          href={pdfUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open in new tab
        </a>
      </div>
    </>
  );
}
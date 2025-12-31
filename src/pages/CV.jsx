import React, { useEffect, useState } from 'react';
import PdfViewer from '../components/PdfViewer';

export default function CV() {
  const cvUrl = `${import.meta.env.BASE_URL}Sifat-E-Noor_CV.pdf`;
  const [exists, setExists] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch(cvUrl, { method: 'HEAD' })
      .then((res) => { if (mounted) setExists(res.ok); })
      .catch(() => { if (mounted) setExists(false); });
    return () => { mounted = false; };
  }, [cvUrl]);

  return (
    <main className="cv-page" style={{ padding: '1rem' }}>
      <h1>Curriculum Vitae</h1>

      <p>
        If the PDF does not display in your browser, use the download link below.
      </p>

      <div style={{ margin: '1rem 0' }}>
        <a href={cvUrl} download className="primary-btn">
          Download CV (PDF)
        </a>
      </div>

      {exists === false && (
        <div style={{ color: '#b00', marginBottom: '1rem' }}>
          <strong>CV not found.</strong> Place your file at <code>public/cv.pdf</code>
          &nbsp;so it can be displayed and downloaded.
        </div>
      )}

      <div style={{ border: '1px solid #ddd', minHeight: 600, padding: 12 }}>
        {/* Use the PDF.js based viewer so internal toolbars are not shown */}
        <PdfViewer url={cvUrl} showControls={false} />
      </div>
    </main>
  );
}

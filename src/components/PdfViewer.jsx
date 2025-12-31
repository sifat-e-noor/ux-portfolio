import React, { useEffect, useRef, useState } from 'react';
import '../styles/pdfViewer.css';

// CDN versions used to avoid adding a local dependency
const PDFJS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js';
const PDFJS_WORKER_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

function loadPdfJs() {
  return new Promise((resolve, reject) => {
    if (window.pdfjsLib) return resolve(window.pdfjsLib);
    const s = document.createElement('script');
    s.src = PDFJS_CDN;
    s.onload = () => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_CDN;
        resolve(window.pdfjsLib);
      } else reject(new Error('pdfjsLib not available'));
    };
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export default function PdfViewer({ url, showControls = true }) {
  const canvasRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    loadPdfJs()
      .then((pdfjsLib) => pdfjsLib.getDocument(url).promise)
      .then((loadedPdf) => {
        if (!mounted) return;
        setPdf(loadedPdf);
        setNumPages(loadedPdf.numPages || 0);
        setPage(1);
        setLoading(false);
      })
      .catch(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => { mounted = false; };
  }, [url]);

  useEffect(() => {
    if (!pdf) return;
    let cancelled = false;
    pdf.getPage(page).then((p) => {
      if (cancelled) return;
      const viewport = p.getViewport({ scale: 1.5 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = { canvasContext: context, viewport };
      p.render(renderContext);
    });
    return () => { cancelled = true; };
  }, [pdf, page]);

  const prev = () => setPage((s) => Math.max(1, s - 1));
  const next = () => setPage((s) => Math.min(numPages, s + 1));

  return (
    <div className="pdf-viewer">
      {loading && <div className="pdf-loading">Loading PDF…</div>}
      {!loading && !pdf && (
        <div className="pdf-error">Unable to load PDF. Use the download link.</div>
      )}

      {pdf && (
        <>
          {showControls && (
            <div className="pdf-controls">
              <button onClick={prev} disabled={page <= 1}>Prev</button>
              <span>Page {page} / {numPages}</span>
              <button onClick={next} disabled={page >= numPages}>Next</button>
            </div>
          )}
          <div className="pdf-canvas-wrap">
            <canvas ref={canvasRef} />
          </div>
        </>
      )}
    </div>
  );
}

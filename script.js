function generate() {
  const prompt = document.getElementById("prompt").value;

  const html = `
    <h1>${prompt}</h1>
    <p>This website is generated.</p>
  `;

  document.getElementById("preview").srcdoc = html;
}

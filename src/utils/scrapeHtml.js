// unused

const scrapeSite = (htmlPage) => {
  const scriptStart = `<script id="server-app-state" type="application/json">`;

  const dataStart = htmlPage.indexOf(scriptStart) + scriptStart.length;

  const scriptEnd = htmlPage.indexOf(`</script>`, dataStart);

  const data = htmlPage.substr(dataStart, scriptEnd - dataStart);

  return eval("(" + data + ")").initialData.initialAssets;
};

exports.scrapeSite = scrapeSite;

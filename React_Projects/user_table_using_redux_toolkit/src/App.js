import React, {useState, useEffect} from "react";
import {
  Document,
  Page,
  Text,
  PDFDownloadLink
} from "@react-pdf/renderer";

const App = () => {
  const [url, setUrl] = useState("")
  const MyDocument = () => (
    <Document>
      <Page>
        <Text>Example PDF Content</Text>
      </Page>
    </Document>
  );

useEffect(() => console.log(url), [url])
  
  return (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="generated_pdf.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default App;
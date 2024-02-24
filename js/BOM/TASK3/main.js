function createPopup() {
  const popup = window.open("", "_blank", "width=400,height=400");

  popup.document.write(`
    <html>
    <head>
      <title>Popup Window</title>
      <style>
        body {
          text-align: center;
          padding-top: 100px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
        }
      </style>
    </head>
    <body>
      <h1>Welcome</h1>
      <p>Welcome To Elzero Web School</p>
      <button onclick="closePopup()">Close</button>
      
      <script>
        function closePopup() {
          window.close();
        }
      </script>
    </body>
    </html>
  `);

  popup.focus();
}

setTimeout(createPopup, 5000);

// Register custom fonts
let Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "roboto",
  "monospace",
  "segoe-ui",
  "segoe-ui-semibold",
];
Quill.register(Font, true);

// Register custom font sizes
var Size = Quill.import("attributors/style/size");
Size.whitelist = [
  "12px",
  "13px",
  "14px",
  "15px",
  "16px",
  "17px",
  "18px",
  "19px",
  "20px",
  "24px",
  "28px",
  "32px",
  "48px",
  "52px",
  "64px",
];
Quill.register(Size, true);

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline"],
  [
    {
      font: [
        "",
        "arial",
        "roboto",
        "monospace",
        "segoe-ui",
        "segoe-ui-semibold",
      ],
    },
  ],
  [
    {
      size: [
        "12px",
        "13px",
        "14px",
        "15px",
        "16px",
        "17px",
        "18px",
        "19px",
        "20px",
        "24px",
        "28px",
        "32px",
        "48px",
        "52px",
        "64px",
      ],
    },
  ],
  [{ align: [] }],
  ["link", "image", "code-block"],
];

try {
  const editor = new Quill("#editor", {
    modules: {
      toolbar: toolbarOptions,
    },
    theme: "snow",
  });

  const submitButton = document.querySelector(".submit-button");
  if (!submitButton) {
    throw new Error("Submit button not found");
  }

  submitButton.addEventListener("click", () => {
    const editorElement = document.querySelector("#editor"); // Quill editor DOM element
    if (!editorElement) {
      throw new Error("Editor element not found");
    }
    const canvas = document.querySelector("#readonly-editor"); // Your canvas DOM element
    if (!canvas) {
      throw new Error("Canvas element not found");
    }

    html2canvas(editorElement)
      .then((canvasContent) => {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        // draw the editor content on the canvas
        ctx.drawImage(canvasContent, 0, 0);
      })
      .catch((error) => {
        console.error("Error occurred during canvas conversion: ", error);
      });
  });
} catch (error) {
  console.error("Error occurred while setting up the editor: ", error);
}

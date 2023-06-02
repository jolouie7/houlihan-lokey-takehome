let Font = Quill.import("formats/font");
Font.whitelist = ["arial", "roboto", "monospace"];
Quill.register(Font, true);

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline"],
  [{ font: ["", "arial", "roboto", "monospace"] }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ align: [] }],
  ["link", "image", "code-block"],
];

const editor = new Quill("#editor", {
  modules: {
    toolbar: toolbarOptions,
  },
  theme: "snow",
});

const readonlyEditor = new Quill("#readonly-editor", {
  theme: "bubble",
  readOnly: true,
});

editor.on("text-change", () => {
  const content = editor.getContents();
  readonlyEditor.setContents(content);
});

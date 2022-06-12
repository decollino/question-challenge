export default function TextInput({
  labelDescription = "Descrição do label:",
  id = "id_do_input_text",
  autoFocus = false,
  handleInputChange,
  name,
  placeholder,
  value,
}) {
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "400px",
      }}
    >
      <label
        className="text-sm mb-1"
        htmlFor={id}
        style={{
          padding: "15px",
        }}
      >
        {labelDescription}
      </label>

      <input
        autoFocus={autoFocus}
        id={id}
        type="text"
        onChange={handleInputChange}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

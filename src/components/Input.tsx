type inputProps = {
  value: string;
  placeholder?: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextArea?: boolean;
};

export const Input = (props: inputProps) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Tambahkan logika lain di sini (misalnya validasi atau logging)
    console.log("Input changed:", event.target.value);

    // Panggil props.handleChange untuk mengoper nilai ke parent
    props.handleChange(event);
  };

  const placeholder = props.placeholder || "Type here...";

  return props.isTextArea ? (
    <textarea
      className="w-full p-2 border border-gray-400 rounded-lg mt-2 text-sm"
      value={props.value}
      onChange={handleInputChange}
      placeholder={placeholder}
      rows={6} // Mengatur tinggi textarea
    />
  ) : (
    <input
      className="w-full p-2 border border-gray-400 rounded-lg mt-2 text-sm"
      value={props.value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};

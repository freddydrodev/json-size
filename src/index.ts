import bytes from "utf8-length";

const jsonSize = (value: any) => {
  return bytes(JSON.stringify(value));
};

export default jsonSize;

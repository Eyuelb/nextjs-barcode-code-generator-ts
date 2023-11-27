// ConvertObjectToString.ts

type DataObject = {
  [key: string]: string | number | boolean | null | undefined;
  // Define other possible data types as needed
};

function convertObjectToString(data: DataObject): string {
  return Object.entries(data)
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join(", ");
}

export default convertObjectToString;

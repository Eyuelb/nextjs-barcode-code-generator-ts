import React, { ReactElement, useEffect, useRef, useState } from "react";
import JsBarcode from "jsbarcode";
import convertObjectToString from "./ConvertObjectToString";
import useForm, { UseFormState, UseFormReturn } from "@/lib/form/useForm";

interface BarcodeProviderProps {
  initialValues: UseFormState;
  children: (formState: UseFormReturn) => ReactElement;
  options?: JsBarcode.Options;
}

const Barcode: React.FC<BarcodeProviderProps> = ({
  initialValues,
  children,
  options,
}) => {
  const [renderBarcode, setRenderBarcode] = useState<boolean>(false);
  const formState = useForm({
    initialValues,
  });

  const barcodeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    try {
      formState.setError(null);
      JsBarcode(barcodeRef.current, convertObjectToString(formState.values), {
        displayValue: false,
        ...options,
      });
    } catch (err) {
      console.log(err);
      formState?.setError({ error: err as string });
    }
  }, [formState.values, renderBarcode, options]);

  const handleGenerateClick = () => {
    setRenderBarcode(true);
  };

  const handleEditClick = () => {
    setRenderBarcode(false);
  };

  return (
    <div className="flex justify-center items-center w-full flex-col max-w-[400px] border p-4 gap-3 shadow-md">
      <div className="flex flex-col justify-center items-center w-ful min-h-[100px] ">
        {renderBarcode ? <svg ref={barcodeRef}></svg> : children(formState)}
      </div>
      <div className="flex w-full justify-end gap-2">
        {renderBarcode ? (
          <button
            className="px-6 py-1 rounded-sm border bg-blue-100"
            onClick={handleEditClick}
          >
            Edit
          </button>
        ) : (
          <button
            className="px-6 py-1 rounded-sm border bg-blue-100"
            onClick={handleGenerateClick}
          >
            Generate
          </button>
        )}
      </div>
    </div>
  );
};

export default Barcode;

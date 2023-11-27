import React from "react";
import JsBarcode from "jsbarcode";

type Props = {
  data: string;
  options?: JsBarcode.Options;
  className?: string;
};

const GenerateBarCode: React.FC<Props> = ({ data, options,className }) => {
  const barcodeRef = React.useRef<SVGSVGElement>(null);
  React.useEffect(() => {
    try {
      JsBarcode(barcodeRef.current, data, {
        displayValue: false,
        width: 1,
        height: 70,
        ...options,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={className}>
      <svg ref={barcodeRef}></svg>
    </div>
  );
};

export default GenerateBarCode;

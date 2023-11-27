import { ChangeEvent, useState } from "react";

export interface UseFormProps {
  initialValues: UseFormState;
}

export interface UseFormState {
  [key: string]: string | boolean | number;
}
export interface UseFormError {
  [key: string]: string | boolean;
}
export interface UseFormReturn {
  values: UseFormState;
  register: (
    name: string,
    fieldType?: string
  ) => {
    checked?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: any; // Make value property optional
    type?: string; // Add type property
  };
  error: UseFormError | null;
  setError: React.Dispatch<React.SetStateAction<UseFormError | null>>;
}

const useForm = (props: UseFormProps): UseFormReturn => {
  const [values, setFormData] = useState<UseFormState>(props.initialValues);
  const [error, setError] = useState<UseFormError | null>(null);

  const register = (name: string, fieldType?: string) => ({
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      const { value, type, checked } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    },
    value: values[name],
    type: fieldType, // Include the type property
    ...(fieldType === "checkbox" ? { checked: values[name] as boolean } : {}),
  });

  return {
    values,
    register,
    error,
    setError,
  };
};

export default useForm;
